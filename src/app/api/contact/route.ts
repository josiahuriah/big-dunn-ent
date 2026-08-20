import { NextResponse } from 'next/server';
import {
  captureQuoteRequest,
  HubSpotConfigurationError,
  logHubSpotError,
} from '@/src/lib/hubspot';
import { quoteLeadSchema } from '@/src/lib/lead-validation';

export const runtime = 'nodejs';

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }

  const parsed = quoteLeadSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Please check the form fields and try again.' },
      { status: 400 },
    );
  }

  if (parsed.data.website) {
    return NextResponse.json({ message: 'Quote request received' }, { status: 202 });
  }

  try {
    await captureQuoteRequest(parsed.data, request.headers.get('referer') || undefined);
    return NextResponse.json({ message: 'Quote request received' }, { status: 201 });
  } catch (error) {
    logHubSpotError('HubSpot quote capture failed', error);
    const status = error instanceof HubSpotConfigurationError ? 503 : 502;
    return NextResponse.json(
      { error: 'We could not send your request right now. Please call or email us instead.' },
      { status },
    );
  }
}
