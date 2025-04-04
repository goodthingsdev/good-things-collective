import { NextResponse } from 'next/server';
import { contactFormSchema } from '@/lib/validations/contact';
import { ZodError } from 'zod';
import { RateLimiter } from '@/lib/rate-limit';
import { headers } from 'next/headers';
import { resend, contactEmail, senderEmail } from '@/lib/resend';
import { createContactEmailHtml } from '@/lib/email-templates/contact';

// Create rate limiter: 5 requests per hour
const rateLimiter = new RateLimiter(5, 60 * 60 * 1000);

export async function POST(request: Request) {
  const requestId = crypto.randomUUID();
  
  try {
    // Get IP address for rate limiting
    const headersList = headers();
    const forwardedFor = headersList.get('x-forwarded-for');
    const ip = forwardedFor ? forwardedFor.split(',')[0] : 'unknown';
    
    console.log(`[${requestId}] Processing contact form submission from IP: ${ip}`);
    
    // Check rate limit
    const rateLimit = rateLimiter.check(ip);
    
    if (!rateLimit.success) {
      console.log(`[${requestId}] Rate limit exceeded for IP: ${ip}. Next reset at: ${rateLimit.resetTime}`);
      return NextResponse.json(
        {
          success: false,
          message: 'Rate limit exceeded. Please try again later.',
          remainingTime: rateLimit.resetTime,
          remainingAttempts: rateLimit.remainingAttempts,
        },
        { status: 429 }
      );
    }

    console.log(`[${requestId}] Rate limit check passed. Remaining attempts: ${rateLimit.remainingAttempts}`);

    const data = await request.json();
    
    // Validate the request data
    console.log(`[${requestId}] Validating form data...`);
    const validatedData = contactFormSchema.parse(data);
    console.log(`[${requestId}] Form data validation successful`);
    
    // Debug logging
    console.log(`[${requestId}] Contact form submission details:`, {
      timestamp: new Date().toISOString(),
      name: validatedData.name,
      email: validatedData.email,
      hasCompany: !!validatedData.company,
      messageLength: validatedData.message.length,
      ip,
      remainingAttempts: rateLimit.remainingAttempts,
    });

    // Send email
    const { name, email, company, message } = validatedData;
    
    console.log(`[${requestId}] Preparing to send email via Resend...`);
    console.log(`[${requestId}] Email configuration:`, {
      from: `${name} via Good Things Collective <${senderEmail}>`,
      replyTo: email,
      to: contactEmail,
      subject: `New Contact Form Submission from ${name}`,
    });

    try {
      const { data: emailResult } = await resend.emails.send({
        from: `${name} via Good Things Collective <${senderEmail}>`,
        replyTo: email,
        to: contactEmail,
        subject: `New Contact Form Submission from ${name}`,
        html: createContactEmailHtml({
          name,
          email,
          company,
          message,
          ip,
        }),
      });

      console.log(`[${requestId}] Email sent successfully:`, {
        emailId: emailResult?.id,
        timestamp: new Date().toISOString(),
      });
    } catch (emailError) {
      console.error(`[${requestId}] Failed to send email:`, emailError);
      throw new Error('Failed to send email');
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Form submission received successfully',
      remainingAttempts: rateLimit.remainingAttempts,
    });
  } catch (error) {
    console.error(`[${requestId}] Error processing contact form:`, error);
    
    // Handle validation errors
    if (error instanceof ZodError) {
      console.log(`[${requestId}] Validation errors:`, {
        errors: error.errors.map(err => ({
          field: err.path.join('.'),
          message: err.message,
        })),
      });

      return NextResponse.json(
        { 
          success: false, 
          message: 'Validation failed', 
          errors: error.errors.map(err => ({
            field: err.path.join('.'),
            message: err.message
          }))
        },
        { status: 400 }
      );
    }

    // Check if it's a Resend API error
    if (error instanceof Error && error.message === 'Failed to send email') {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Failed to send email. Please try again later.' 
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: false, message: 'Failed to process form submission' },
      { status: 500 }
    );
  }
} 