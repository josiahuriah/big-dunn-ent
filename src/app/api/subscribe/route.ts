import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // TODO: Integrate with your email service provider (Mailchimp, SendGrid, etc.)
    // For now, we'll log it and return success
    console.log('New email subscription:', email);

    // You can store this in a database or send to an email service
    // Example with a database:
    // await prisma.emailSubscriber.create({
    //   data: { email, subscribedAt: new Date() }
    // });

    return NextResponse.json(
      { message: 'Successfully subscribed' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Subscription error:', error);
    return NextResponse.json(
      { error: 'Failed to process subscription' },
      { status: 500 }
    );
  }
}