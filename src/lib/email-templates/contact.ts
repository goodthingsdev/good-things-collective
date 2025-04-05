interface ContactEmailProps {
  name: string;
  email: string;
  company?: string;
  message: string;
  ip: string;
}

export function createContactEmailHtml({
  name,
  email,
  company,
  message,
  ip,
}: ContactEmailProps): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>New Contact Form Submission</title>
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            padding: 20px;
            max-width: 600px;
            margin: 0 auto;
          }
          .header {
            background-color: #f8f9fa;
            padding: 20px;
            border-radius: 8px;
            margin-bottom: 20px;
          }
          .content {
            background-color: white;
            padding: 20px;
            border-radius: 8px;
            border: 1px solid #e9ecef;
          }
          .footer {
            margin-top: 20px;
            font-size: 12px;
            color: #6c757d;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h2>New Contact Form Submission</h2>
        </div>
        <div class="content">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${company ? `<p><strong>Company:</strong> ${company}</p>` : ""}
          <h3>Message:</h3>
          <p>${message.replace(/\n/g, "<br>")}</p>
        </div>
        <div class="footer">
          <p>Sent from contact form (IP: ${ip})</p>
        </div>
      </body>
    </html>
  `.trim();
}
