import { NextResponse } from 'next/server';
import {
  captureReview,
  HubSpotConfigurationError,
  logHubSpotError,
} from '@/src/lib/hubspot';
import { reviewSchema } from '@/src/lib/lead-validation';

export const runtime = 'nodejs';

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }

  const parsed = reviewSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Please check the review fields and try again.' },
      { status: 400 },
    );
  }

  if (parsed.data.website) {
    return NextResponse.json({ message: 'Review submitted successfully' }, { status: 202 });
  }

  try {
    await captureReview(parsed.data, request.headers.get('referer') || undefined);
    return NextResponse.json({ message: 'Review submitted successfully' });
  } catch (error) {
    logHubSpotError('HubSpot review capture failed', error);
    const status = error instanceof HubSpotConfigurationError ? 503 : 502;
    return NextResponse.json({ error: 'Review submission is temporarily unavailable.' }, { status });
  }
}
