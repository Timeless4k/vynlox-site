import { NextResponse } from 'next/server';
import { createCampaign } from '@/lib/brevo-campaigns';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, subject, sender, htmlContent, listIds, scheduledAt } = body;

    // Validate required fields
    if (!name || !subject || !sender || !htmlContent || !listIds) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create campaign
    const campaign = await createCampaign({
      name,
      subject,
      sender,
      htmlContent,
      listIds,
      scheduledAt,
    });

    return NextResponse.json({ success: true, campaign });
  } catch (error) {
    console.error('Error creating campaign:', error);
    return NextResponse.json(
      { error: 'Failed to create campaign' },
      { status: 500 }
    );
  }
} 