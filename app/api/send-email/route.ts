// app/api/send-email/route.ts
import { NextRequest, NextResponse } from 'next/server';

interface EmailRequestBody {
  name: string;
  email: string;
  mobile: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: EmailRequestBody = await request.json();
    const { name, email, mobile, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: 'Name, email, and message are required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    // Mailgun configuration
    const MAILGUN_DOMAIN = process.env.MAILGUN_DOMAIN;
    const MAILGUN_API_KEY = process.env.MAILGUN_API_KEY;
    const TO_EMAIL = process.env.CONTACT_EMAIL; // Your receiving email

    if (!MAILGUN_DOMAIN || !MAILGUN_API_KEY || !TO_EMAIL) {
      console.error('Mailgun environment variables are not properly configured');
      return NextResponse.json(
        { message: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Create FormData for Mailgun API
    const formData = new URLSearchParams();
    formData.append('from', `Contact Form <noreply@${MAILGUN_DOMAIN}>`);
    formData.append('to', TO_EMAIL);
    formData.append('subject', `New Contact Form Submission from ${name}`);
    formData.append('text', `
Name: ${name}
Email: ${email}
Mobile: ${mobile || 'Not provided'}

Message:
${message}

---
This message was sent from your website contact form.
    `.trim());

    // Optional: HTML version
    formData.append('html', `
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #f4f4f4; padding: 10px; border-radius: 5px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #555; }
        .message { background: #f9f9f9; padding: 15px; border-radius: 5px; border-left: 4px solid #4a4a43; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h2>New Contact Form Submission</h2>
        </div>
        <div class="field">
            <span class="label">Name:</span> ${name}
        </div>
        <div class="field">
            <span class="label">Email:</span> ${email}
        </div>
        <div class="field">
            <span class="label">Mobile:</span> ${mobile || 'Not provided'}
        </div>
        <div class="field">
            <span class="label">Message:</span>
            <div class="message">${message.replace(/\n/g, '<br>')}</div>
        </div>
        <hr>
        <p><em>This message was sent from your website contact form.</em></p>
    </div>
</body>
</html>
    `.trim());

    // Send email via Mailgun
    const mailgunResponse = await fetch(
      `https://api.mailgun.net/v3/${MAILGUN_DOMAIN}/messages`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Basic ${Buffer.from(`api:${MAILGUN_API_KEY}`).toString('base64')}`,
        },
        body: formData,
      }
    );

    if (!mailgunResponse.ok) {
      const errorText = await mailgunResponse.text();
      console.error('Mailgun API error:', errorText);
      throw new Error('Failed to send email through Mailgun');
    }

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Send email error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}