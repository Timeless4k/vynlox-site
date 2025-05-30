import { NextResponse } from 'next/server';
import { addContactToBrevo, EmailCapturePurpose } from '@/lib/brevo';

export async function POST(request: Request) {
  try {
    // Check if Brevo API key is configured
    if (!process.env.BREVO_API_KEY) {
      console.error('Brevo API key is not configured');
      return NextResponse.json(
        { error: 'Email service is not configured' },
        { status: 500 }
      );
    }

    const data = await request.json();
    const { email, purpose, ...additionalData } = data;

    // Validate required fields
    if (!email || !purpose) {
      return NextResponse.json(
        { error: 'Email and purpose are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate purpose
    if (!Object.values(EmailCapturePurpose).includes(purpose)) {
      return NextResponse.json(
        { error: 'Invalid purpose' },
        { status: 400 }
      );
    }

    // Add contact to Brevo
    await addContactToBrevo({
      email,
      purpose,
      ...additionalData,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error in capture-email API:', error);
    
    // Handle specific error cases
    if (error instanceof Error) {
      if (error.message.includes('already exists')) {
        return NextResponse.json(
          { error: 'This email is already subscribed' },
          { status: 409 }
        );
      }
      
      if (error.message.includes('Missing required environment variables')) {
        return NextResponse.json(
          { error: 'Email service is not properly configured' },
          { status: 500 }
        );
      }
    }

    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
} 