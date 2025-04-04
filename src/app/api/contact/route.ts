import { NextResponse } from 'next/server';
import { contactFormSchema } from '@/lib/validations/contact';
import { ZodError } from 'zod';
import { RateLimiter } from '@/lib/rate-limit';
import { headers } from 'next/headers';

// Create rate limiter: 5 requests per hour
const rateLimiter = new RateLimiter(5, 60 * 60 * 1000);

export async function POST(request: Request) {
  try {
    // Get IP address for rate limiting
    const headersList = headers();
    const forwardedFor = headersList.get('x-forwarded-for');
    const ip = forwardedFor ? forwardedFor.split(',')[0] : 'unknown';
    
    // Check rate limit
    const rateLimit = rateLimiter.check(ip);
    
    if (!rateLimit.success) {
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

    const data = await request.json();
    
    // Validate the request data
    const validatedData = contactFormSchema.parse(data);
    
    // Debug logging
    console.log('Contact form submission received:', {
      timestamp: new Date().toISOString(),
      data: validatedData,
      ip,
      remainingAttempts: rateLimit.remainingAttempts,
    });

    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    return NextResponse.json({ 
      success: true, 
      message: 'Form submission received successfully',
      remainingAttempts: rateLimit.remainingAttempts,
    });
  } catch (error) {
    console.error('Error processing contact form:', error);
    
    // Handle validation errors
    if (error instanceof ZodError) {
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

    return NextResponse.json(
      { success: false, message: 'Failed to process form submission' },
      { status: 500 }
    );
  }
} 