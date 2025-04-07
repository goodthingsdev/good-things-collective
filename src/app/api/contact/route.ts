import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { ZodError } from "zod";

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
    const headersList = await headers();
    const forwardedFor = headersList.get("x-forwarded-for");
    const ip = forwardedFor ? forwardedFor.split(",")[0] : "unknown";

    if (debug) {
      // eslint-disable-next-line no-console
      console.log(`[${requestId}] Processing contact form submission from IP: ${ip}`);
    }

    // Check rate limit
    const rateLimit = rateLimiter.check(ip);

    if (!rateLimit.success) {
      if (debug) {
        // eslint-disable-next-line no-console
        console.log(
          `[${requestId}] Rate limit exceeded for IP: ${ip}. Next reset at: ${rateLimit.resetTime}`
        );
      }
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

    if (debug) {
      // eslint-disable-next-line no-console
      console.log(
        `[${requestId}] Rate limit check passed. Remaining attempts: ${rateLimit.remainingAttempts}`
      );
    }

    const data = await request.json();

    // Validate the request data
    if (debug) {
      // eslint-disable-next-line no-console
      console.log(`[${requestId}] Validating form data...`);
    }
    const validatedData = contactFormSchema.parse(data);
    if (debug) {
      // eslint-disable-next-line no-console
      console.log(`[${requestId}] Form data validation successful`);
    }

    // Debug logging
    if (debug) {
      // eslint-disable-next-line no-console
      console.log(`[${requestId}] Contact form submission details:`, {
        timestamp: new Date().toISOString(),
        name: validatedData.name,
        email: validatedData.email,
        hasCompany: !!validatedData.company,
        messageLength: validatedData.message.length,
        ip,
        remainingAttempts: rateLimit.remainingAttempts,
      });
    }

    // Send email
    const { name, email, company, message } = validatedData;

    if (debug) {
      // eslint-disable-next-line no-console
      console.log(`[${requestId}] Preparing to send email via Resend...`);
      // eslint-disable-next-line no-console
      console.log(`[${requestId}] Email configuration:`, {
        from: `${name} via Good Things Collective <${senderEmail}>`,
        replyTo: email,
        to: contactEmail,
        subject: `New Contact Form Submission from ${name}`,
      });
    }

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

      if (debug) {
        // eslint-disable-next-line no-console
        console.log(`[${requestId}] Email sent successfully:`, {
          emailId: response.data.id,
          timestamp: new Date().toISOString(),
        });
      }

      return NextResponse.json({
        success: true,
        message: "Form submission received successfully",
        remainingAttempts: rateLimit.remainingAttempts,
      });
    } catch (emailError) {
      const errorMessage = emailError instanceof Error ? emailError.message : String(emailError);
      // eslint-disable-next-line no-console
      console.error(`[${requestId}] Email send failed: ${errorMessage}`);

      // Return Resend API errors directly
      if (errorMessage.includes("Resend")) {
        return NextResponse.json(
          {
            success: false,
            message: errorMessage,
          },
          { status: 500 }
        );
      }

      // Fallback error for email sending
      return NextResponse.json(
        {
          success: false,
          message: "Failed to send email. Please try again later.",
        },
        { status: 500 }
      );
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(`[${requestId}] Error processing contact form:`, error);

    // Handle validation errors
    if (error instanceof ZodError) {
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

    // Fallback error for all other cases
    return NextResponse.json(
      {
        success: false,
        message: "An unexpected error occurred while processing your request",
      },
      { status: 500 }
    );
  }
}
