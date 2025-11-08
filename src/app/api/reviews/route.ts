import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, email, eventType, rating, review, suggestions } = await request.json();

    // Validate required fields
    if (!name || !email || !rating || !review) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    if (!email.includes('@')) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // TODO: Store review in database
    // Example with a database:
    // await prisma.review.create({
    //   data: {
    //     name,
    //     email,
    //     eventType,
    //     rating,
    //     review,
    //     suggestions,
    //     status: 'pending', // Reviews start as pending until approved
    //     submittedAt: new Date(),
    //   }
    // });

    // Log the review for now
    console.log('New review submitted:', {
      name,
      email,
      eventType,
      rating,
      review,
      suggestions,
      submittedAt: new Date().toISOString(),
    });

    // TODO: Send notification email to admin
    // You can use a service like Resend, SendGrid, or Nodemailer

    return NextResponse.json(
      { message: 'Review submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Review submission error:', error);
    return NextResponse.json(
      { error: 'Failed to submit review' },
      { status: 500 }
    );
  }
}