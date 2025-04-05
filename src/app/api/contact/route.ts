import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { ZodError } from "zod";
import { CreateEmailResponse } from "resend";

import { createContactEmailHtml } from "@/lib/email-templates/contact";
import { RateLimiter } from "@/lib/rate-limit";
import { resend, contactEmail, senderEmail } from "@/lib/resend";
import { contactFormSchema } from "@/lib/validations/contact";

const debug = process.env.NODE_ENV === "development";

// Create rate limiter: 5 requests per hour
const rateLimiter = new RateLimiter(5, 60 * 60 * 1000);

export async function POST(request: Request) {
  const requestId = crypto.randomUUID();

  try {
    // Get IP address for rate limiting
    const headersList = headers();
    const forwardedFor = headersList.get("x-forwarded-for");
    const ip = forwardedFor ? forwardedFor.split(",")[0] : "unknown";

    debug && console.log(`[${requestId}] Processing contact form submission from IP: ${ip}`);

    // Check rate limit
    const rateLimit = rateLimiter.check(ip);

    if (!rateLimit.success) {
      debug && console.log(
        `[${requestId}] Rate limit exceeded for IP: ${ip}. Next reset at: ${rateLimit.resetTime}`
      );
      return NextResponse.json(
        {
          success: false,
          message: "Rate limit exceeded. Please try again later.",
          remainingTime: rateLimit.resetTime,
          remainingAttempts: rateLimit.remainingAttempts,
        },
        { status: 429 }
      );
    }

    debug && console.log(
      `[${requestId}] Rate limit check passed. Remaining attempts: ${rateLimit.remainingAttempts}`
    );

    const data = await request.json();

    // Validate the request data
    debug && console.log(`[${requestId}] Validating form data...`);
    const validatedData = contactFormSchema.parse(data);
    debug && console.log(`[${requestId}] Form data validation successful`);

    // Debug logging
    debug && console.log(`[${requestId}] Contact form submission details:`, {
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

    debug && console.log(`[${requestId}] Preparing to send email via Resend...`);
    debug && console.log(`[${requestId}] Email configuration:`, {
      from: `${name} via Good Things Collective <${senderEmail}>`,
      replyTo: email,
      to: contactEmail,
      subject: `New Contact Form Submission from ${name}`,
    });

    try {
      const response = await resend.emails.send({
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

      // Check if the response indicates an error
      if (!response || response.error) {
        throw new Error(response?.error?.message || "Resend API returned an error");
      }

      // Verify we have a valid response
      if (!response.data?.id) {
        throw new Error("Resend API returned an invalid response: missing email ID");
      }

      debug && console.log(`[${requestId}] Email sent successfully:`, {
        emailId: response.data.id,
        timestamp: new Date().toISOString(),
      });

      return NextResponse.json({
        success: true,
        message: "Form submission received successfully",
        remainingAttempts: rateLimit.remainingAttempts,
      });
    } catch (emailError) {
      // Cleaner error logging
      const errorMessage = emailError instanceof Error ? emailError.message : String(emailError);
      console.error(`[${requestId}] Email send failed: ${errorMessage}`);

      // Check if it's a Resend authorization error
      if (emailError instanceof Error && errorMessage.includes('Not authorized')) {
        return NextResponse.json(
          {
            success: false,
            message: errorMessage, // Pass through the actual error message
            error: {
              type: "resend_authorization_error",
              message: errorMessage,
              details: "Please verify your Resend API key and domain configuration.",
            },
          },
          { status: 403 }
        );
      }

      // Check if it's a general Resend API error
      if (emailError instanceof Error) {
        const isResendError = errorMessage.includes('resend') || errorMessage.includes('Resend');
        
        if (isResendError) {
          return NextResponse.json(
            {
              success: false,
              message: errorMessage, // Pass through the actual error message
              error: {
                type: "resend_api_error",
                message: errorMessage,
                details: "There was an issue with the email service.",
              },
            },
            { status: 500 }
          );
        }
      }

      return NextResponse.json(
        {
          success: false,
          message: errorMessage, // Pass through the actual error message
          error: {
            type: "email_error",
            message: errorMessage,
            details: "An unexpected error occurred while sending the email.",
          },
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error(`[${requestId}] Error processing contact form:`, error);

    // Handle validation errors
    if (error instanceof ZodError) {
      debug && console.log(`[${requestId}] Validation errors:`, {
        errors: error.errors.map((err) => ({
          field: err.path.join("."),
          message: err.message,
        })),
      });

      return NextResponse.json(
        {
          success: false,
          message: "Validation failed",
          errors: error.errors.map((err) => ({
            field: err.path.join("."),
            message: err.message,
          })),
        },
        { status: 400 }
      );
    }

    // Check if it's a Resend API error
    if (error instanceof Error && error.message === "Failed to send email") {
      return NextResponse.json(
        {
          success: false,
          message: "Failed to send email. Please try again later.",
          error: {
            type: "email_error",
            message: error.message,
            details: error.stack,
          },
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: false, message: "Failed to process form submission" },
      { status: 500 }
    );
  }
}
