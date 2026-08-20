import { NextResponse } from 'next/server';
import {
  HubSpotConfigurationError,
  logHubSpotError,
  subscribeToNewsletter,
} from '@/src/lib/hubspot';
import { newsletterSchema } from '@/src/lib/lead-validation';

export const runtime = 'nodejs';

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }

  const parsed = newsletterSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Enter a valid email address and confirm your consent.' },
      { status: 400 },
    );
  }

  if (parsed.data.website) {
    return NextResponse.json({ message: 'Successfully subscribed' });
  }

  try {
    await subscribeToNewsletter(parsed.data.email);
    return NextResponse.json({ message: 'Successfully subscribed' });
  } catch (error) {
    logHubSpotError('HubSpot newsletter subscription failed', error);
    const status = error instanceof HubSpotConfigurationError ? 503 : 502;
    return NextResponse.json({ error: 'Subscription is temporarily unavailable.' }, { status });
  }
}
