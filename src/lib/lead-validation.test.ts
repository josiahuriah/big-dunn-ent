import assert from 'node:assert/strict';
import test from 'node:test';
import {
  captureQuoteRequest,
  splitContactName,
  subscribeToNewsletter,
} from './hubspot';
import { newsletterSchema, quoteLeadSchema, reviewSchema } from './lead-validation';

test('quote requests are normalized before reaching HubSpot', () => {
  const result = quoteLeadSchema.parse({
    name: '  Jane Doe  ',
    email: '  JANE@EXAMPLE.COM ',
    phone: '+1 (242) 555-0100',
    eventType: 'Wedding',
    eventDate: '2026-12-19',
    guests: '150',
    message: 'We need sound, lighting, and staging for our reception.',
    venue: 'Ocean Club',
    services: ['Audio', 'Lighting'],
    packageName: 'Gold',
    budget: '$1,500–$5,000',
    estimatedTotal: 1300,
  });

  assert.equal(result.name, 'Jane Doe');
  assert.equal(result.email, 'jane@example.com');
  assert.equal(result.website, '');
  assert.deepEqual(result.services, ['Audio', 'Lighting']);
});

test('quote requests reject impossible dates and guest counts', () => {
  const result = quoteLeadSchema.safeParse({
    name: 'Jane Doe',
    email: 'jane@example.com',
    phone: '2425550100',
    eventType: 'Wedding',
    eventDate: '2026-02-31',
    guests: '0',
    message: 'We need sound, lighting, and staging.',
  });

  assert.equal(result.success, false);
});

test('newsletter subscriptions require explicit consent', () => {
  const result = newsletterSchema.safeParse({
    email: 'jane@example.com',
    consent: false,
  });

  assert.equal(result.success, false);
});

test('honeypot values reach the route so bots can be accepted without a CRM write', () => {
  const result = newsletterSchema.parse({
    email: 'bot@example.com',
    consent: true,
    website: 'https://spam.example',
  });

  assert.equal(result.website, 'https://spam.example');
});

test('reviews require a rating from one to five', () => {
  const result = reviewSchema.safeParse({
    name: 'Jane Doe',
    email: 'jane@example.com',
    eventType: 'Wedding',
    rating: 6,
    review: 'The production team was excellent throughout our event.',
  });

  assert.equal(result.success, false);
});

test('contact names retain multi-part last names', () => {
  assert.deepEqual(splitContactName('Ana de la Cruz'), {
    firstname: 'Ana',
    lastname: 'de la Cruz',
  });
});

test('quote capture writes a contact, timeline note, and associated deal', async (t) => {
  const originalFetch = globalThis.fetch;
  const originalToken = process.env.HUBSPOT_ACCESS_TOKEN;
  const originalPipeline = process.env.HUBSPOT_DEAL_PIPELINE_ID;
  const originalStage = process.env.HUBSPOT_DEAL_STAGE_ID;
  const calls: Array<{ url: string; method?: string; body?: string }> = [];

  process.env.HUBSPOT_ACCESS_TOKEN = 'test-token';
  process.env.HUBSPOT_DEAL_PIPELINE_ID = 'sales-pipeline';
  process.env.HUBSPOT_DEAL_STAGE_ID = 'new-inquiry';

  globalThis.fetch = (async (input, init) => {
    const url = String(input);
    calls.push({ url, method: init?.method, body: init?.body as string | undefined });

    if (url.endsWith('/notes')) {
      return Response.json({ id: 'note-1' });
    }
    if (url.endsWith('/deals')) {
      return Response.json({ id: 'deal-1' });
    }
    return Response.json({ id: 'contact-1' });
  }) as typeof fetch;

  t.after(() => {
    globalThis.fetch = originalFetch;
    restoreEnvironmentVariable('HUBSPOT_ACCESS_TOKEN', originalToken);
    restoreEnvironmentVariable('HUBSPOT_DEAL_PIPELINE_ID', originalPipeline);
    restoreEnvironmentVariable('HUBSPOT_DEAL_STAGE_ID', originalStage);
  });

  const result = await captureQuoteRequest({
    name: 'Jane Doe',
    email: 'jane@example.com',
    phone: '+1 242 555 0100',
    eventType: 'Wedding',
    eventDate: '2026-12-19',
    guests: '150',
    message: 'We need sound and lighting for our reception.',
    eventTime: '18:00',
    setupTime: '12:00',
    venue: 'Ocean Club',
    island: 'New Providence',
    services: ['Audio', 'Lighting', 'DJ Services'],
    addOns: ['Connection service'],
    packageName: 'Gold',
    budget: '$1,500–$5,000',
    contactPreference: 'WhatsApp',
    referralSource: 'Instagram',
    estimatedTotal: 1400,
    pricingNote: 'Website starting price; final scope subject to review.',
  });

  assert.deepEqual(result, {
    contactId: 'contact-1',
    noteId: 'note-1',
    dealId: 'deal-1',
  });
  assert.equal(calls.length, 3);

  const dealRequest = JSON.parse(calls[1].body || '{}');
  assert.equal(dealRequest.associations[0].types[0].associationTypeId, 3);
  assert.equal(dealRequest.properties.pipeline, 'sales-pipeline');
  assert.equal(dealRequest.properties.amount, '1400');
  assert.match(dealRequest.properties.description, /Selected package: Gold/);
  assert.match(dealRequest.properties.description, /Venue: Ocean Club/);
  assert.match(dealRequest.properties.description, /Requested services: Audio, Lighting, DJ Services/);

  const noteRequest = JSON.parse(calls[2].body || '{}');
  assert.equal(noteRequest.associations[0].types[0].associationTypeId, 202);
  assert.equal(noteRequest.associations[1].types[0].associationTypeId, 214);
  assert.equal(noteRequest.associations[1].to.id, 'deal-1');
  assert.match(noteRequest.properties.hs_note_body, /Wedding/);
  assert.match(noteRequest.properties.hs_note_body, /Ocean Club/);
});

test('newsletter capture records explicit consent in HubSpot', async (t) => {
  const originalFetch = globalThis.fetch;
  const originalToken = process.env.HUBSPOT_ACCESS_TOKEN;
  const originalSubscription = process.env.HUBSPOT_NEWSLETTER_SUBSCRIPTION_ID;
  const calls: Array<{ url: string; body?: string }> = [];

  process.env.HUBSPOT_ACCESS_TOKEN = 'test-token';
  process.env.HUBSPOT_NEWSLETTER_SUBSCRIPTION_ID = '12345';

  globalThis.fetch = (async (input, init) => {
    const url = String(input);
    calls.push({ url, body: init?.body as string | undefined });
    return url.includes('/communication-preferences/')
      ? new Response(null, { status: 204 })
      : Response.json({ id: 'contact-1' });
  }) as typeof fetch;

  t.after(() => {
    globalThis.fetch = originalFetch;
    restoreEnvironmentVariable('HUBSPOT_ACCESS_TOKEN', originalToken);
    restoreEnvironmentVariable('HUBSPOT_NEWSLETTER_SUBSCRIPTION_ID', originalSubscription);
  });

  await subscribeToNewsletter('jane@example.com');

  assert.equal(calls.length, 2);
  assert.match(
    calls[1].url,
    /\/communication-preferences\/v4\/statuses\/jane%40example\.com$/,
  );
  const consentRequest = JSON.parse(calls[1].body || '{}');
  assert.equal(consentRequest.subscriptionId, 12345);
  assert.equal(consentRequest.statusState, 'SUBSCRIBED');
  assert.equal(consentRequest.legalBasis, 'CONSENT_WITH_NOTICE');
});

function restoreEnvironmentVariable(name: string, value: string | undefined) {
  if (value === undefined) {
    delete process.env[name];
  } else {
    process.env[name] = value;
  }
}
