const HUBSPOT_API_BASE_URL = 'https://api.hubapi.com';
const HUBSPOT_API_VERSION = '2026-03';
const HUBSPOT_COMMUNICATION_PREFERENCES_VERSION = 'v4';
const HUBSPOT_REQUEST_TIMEOUT_MS = 10_000;

type HubSpotRecord = {
  id: string;
};

type ContactDetails = {
  email: string;
  name?: string;
  phone?: string;
};

type QuoteDetails = ContactDetails & {
  eventType: string;
  eventDate: string;
  guests: string;
  message: string;
};

type ReviewDetails = ContactDetails & {
  eventType: string;
  rating: number;
  review: string;
  suggestions: string;
};

export class HubSpotConfigurationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'HubSpotConfigurationError';
  }
}

export class HubSpotApiError extends Error {
  constructor(
    message: string,
    readonly status: number,
    readonly correlationId?: string,
  ) {
    super(message);
    this.name = 'HubSpotApiError';
  }
}

function getAccessToken() {
  const token = process.env.HUBSPOT_ACCESS_TOKEN?.trim();
  if (!token) {
    throw new HubSpotConfigurationError('HUBSPOT_ACCESS_TOKEN is not configured');
  }
  return token;
}

function getOwnerId() {
  return process.env.HUBSPOT_OWNER_ID?.trim() || undefined;
}

function getDealConfiguration() {
  const pipeline = process.env.HUBSPOT_DEAL_PIPELINE_ID?.trim();
  const stage = process.env.HUBSPOT_DEAL_STAGE_ID?.trim();

  if (Boolean(pipeline) !== Boolean(stage)) {
    throw new HubSpotConfigurationError(
      'HUBSPOT_DEAL_PIPELINE_ID and HUBSPOT_DEAL_STAGE_ID must be configured together',
    );
  }

  return pipeline && stage ? { pipeline, stage } : null;
}

function getNewsletterSubscriptionId() {
  const rawId = process.env.HUBSPOT_NEWSLETTER_SUBSCRIPTION_ID?.trim();
  const subscriptionId = rawId ? Number(rawId) : Number.NaN;

  if (!Number.isSafeInteger(subscriptionId) || subscriptionId <= 0) {
    throw new HubSpotConfigurationError(
      'HUBSPOT_NEWSLETTER_SUBSCRIPTION_ID must be a positive numeric ID',
    );
  }

  return subscriptionId;
}

function getErrorDetails(body: unknown) {
  if (!body || typeof body !== 'object') return {};

  const payload = body as Record<string, unknown>;
  return {
    message: typeof payload.message === 'string' ? payload.message : undefined,
    correlationId:
      typeof payload.correlationId === 'string' ? payload.correlationId : undefined,
  };
}

async function hubspotRequest<T>(path: string, init: RequestInit): Promise<T> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), HUBSPOT_REQUEST_TIMEOUT_MS);

  try {
    const response = await fetch(`${HUBSPOT_API_BASE_URL}${path}`, {
      ...init,
      cache: 'no-store',
      headers: {
        Authorization: `Bearer ${getAccessToken()}`,
        'Content-Type': 'application/json',
        ...init.headers,
      },
      signal: controller.signal,
    });

    const responseText = await response.text();
    let responseBody: unknown;

    if (responseText) {
      try {
        responseBody = JSON.parse(responseText);
      } catch {
        responseBody = undefined;
      }
    }

    if (!response.ok) {
      const details = getErrorDetails(responseBody);
      throw new HubSpotApiError(
        details.message || `HubSpot request failed with status ${response.status}`,
        response.status,
        details.correlationId,
      );
    }

    return responseBody as T;
  } finally {
    clearTimeout(timeout);
  }
}

export function splitContactName(name: string) {
  const [firstname, ...rest] = name.trim().split(/\s+/);
  return {
    firstname,
    lastname: rest.join(' ') || undefined,
  };
}

function contactProperties(details: ContactDetails) {
  const properties: Record<string, string> = { email: details.email };

  if (details.name) {
    const { firstname, lastname } = splitContactName(details.name);
    properties.firstname = firstname;
    if (lastname) properties.lastname = lastname;
  }

  if (details.phone) properties.phone = details.phone;
  return properties;
}

async function upsertContact(details: ContactDetails) {
  const properties = contactProperties(details);
  const emailPath = encodeURIComponent(details.email);

  try {
    return await hubspotRequest<HubSpotRecord>(
      `/crm/objects/${HUBSPOT_API_VERSION}/contacts/${emailPath}?idProperty=email`,
      {
        method: 'PATCH',
        body: JSON.stringify({ properties }),
      },
    );
  } catch (error) {
    if (!(error instanceof HubSpotApiError) || error.status !== 404) throw error;
  }

  const ownerId = getOwnerId();
  const createProperties = ownerId
    ? { ...properties, hubspot_owner_id: ownerId }
    : properties;

  try {
    return await hubspotRequest<HubSpotRecord>(
      `/crm/objects/${HUBSPOT_API_VERSION}/contacts`,
      {
        method: 'POST',
        body: JSON.stringify({ properties: createProperties }),
      },
    );
  } catch (error) {
    if (!(error instanceof HubSpotApiError) || error.status !== 409) throw error;

    return hubspotRequest<HubSpotRecord>(
      `/crm/objects/${HUBSPOT_API_VERSION}/contacts/${emailPath}?idProperty=email`,
      {
        method: 'PATCH',
        body: JSON.stringify({ properties }),
      },
    );
  }
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;',
    };
    return entities[character];
  });
}

function renderNote(title: string, rows: Array<[string, string | number | undefined]>) {
  const items = rows
    .filter(([, value]) => value !== undefined && value !== '')
    .map(
      ([label, value]) =>
        `<li><strong>${escapeHtml(label)}:</strong> ${escapeHtml(String(value))}</li>`,
    )
    .join('');

  return `<p><strong>${escapeHtml(title)}</strong></p><ul>${items}</ul>`;
}

async function addContactNote(contactId: string, body: string) {
  const ownerId = getOwnerId();
  const properties: Record<string, string> = {
    hs_timestamp: new Date().toISOString(),
    hs_note_body: body,
  };

  if (ownerId) properties.hubspot_owner_id = ownerId;

  return hubspotRequest<HubSpotRecord>(
    `/crm/objects/${HUBSPOT_API_VERSION}/notes`,
    {
      method: 'POST',
      body: JSON.stringify({
        properties,
        associations: [
          {
            to: { id: contactId },
            types: [
              {
                associationCategory: 'HUBSPOT_DEFINED',
                associationTypeId: 202,
              },
            ],
          },
        ],
      }),
    },
  );
}

async function createDeal(contactId: string, details: QuoteDetails) {
  const configuration = getDealConfiguration();
  if (!configuration) return undefined;

  const properties: Record<string, string> = {
    dealname: `${details.eventType} inquiry — ${details.name}`,
    pipeline: configuration.pipeline,
    dealstage: configuration.stage,
    description: details.message,
  };
  const ownerId = getOwnerId();
  if (ownerId) properties.hubspot_owner_id = ownerId;

  return hubspotRequest<HubSpotRecord>(
    `/crm/objects/${HUBSPOT_API_VERSION}/deals`,
    {
      method: 'POST',
      body: JSON.stringify({
        properties,
        associations: [
          {
            to: { id: contactId },
            types: [
              {
                associationCategory: 'HUBSPOT_DEFINED',
                associationTypeId: 3,
              },
            ],
          },
        ],
      }),
    },
  );
}

export async function captureQuoteRequest(details: QuoteDetails, sourcePage?: string) {
  getDealConfiguration();
  const contact = await upsertContact(details);
  const note = await addContactNote(
    contact.id,
    renderNote('New website quote request', [
      ['Event type', details.eventType],
      ['Event date', details.eventDate],
      ['Expected guests', details.guests],
      ['Phone', details.phone],
      ['Message', details.message],
      ['Source page', sourcePage?.slice(0, 500)],
    ]),
  );
  const deal = await createDeal(contact.id, details);

  return { contactId: contact.id, noteId: note.id, dealId: deal?.id };
}

export async function captureReview(details: ReviewDetails, sourcePage?: string) {
  const contact = await upsertContact(details);
  const note = await addContactNote(
    contact.id,
    renderNote('New website review', [
      ['Event type', details.eventType],
      ['Rating', `${details.rating}/5`],
      ['Review', details.review],
      ['Suggestions', details.suggestions],
      ['Source page', sourcePage?.slice(0, 500)],
    ]),
  );

  return { contactId: contact.id, noteId: note.id };
}

export async function subscribeToNewsletter(email: string) {
  const subscriptionId = getNewsletterSubscriptionId();
  const contact = await upsertContact({ email });

  await hubspotRequest<unknown>(
    `/communication-preferences/${HUBSPOT_COMMUNICATION_PREFERENCES_VERSION}/statuses/${encodeURIComponent(email)}`,
    {
      method: 'POST',
      body: JSON.stringify({
        subscriptionId,
        statusState: 'SUBSCRIBED',
        legalBasis: 'CONSENT_WITH_NOTICE',
        legalBasisExplanation: 'Contact provided explicit consent via the website newsletter form.',
        channel: 'EMAIL',
      }),
    },
  );

  return { contactId: contact.id };
}

export function logHubSpotError(context: string, error: unknown) {
  if (error instanceof HubSpotApiError) {
    console.error(context, {
      status: error.status,
      correlationId: error.correlationId,
    });
    return;
  }

  if (error instanceof HubSpotConfigurationError) {
    console.error(context, { message: error.message });
    return;
  }

  console.error(context, error);
}
