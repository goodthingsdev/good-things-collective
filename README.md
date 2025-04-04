# Good Things Collective Website

This is a [Next.js](https://nextjs.org) project using the App Router and TypeScript.

## Prerequisites

- Node.js 18.x or later
- pnpm 8.x or later ([Installation guide](https://pnpm.io/installation))
- A Resend API key ([Sign up here](https://resend.com))

## Getting Started

1. Install dependencies:

```bash
pnpm install
```

2. Set up your environment variables:

Create a `.env.local` file in the root directory with the following variables:

```bash
RESEND_API_KEY=your_resend_api_key_here
CONTACT_EMAIL=your_destination_email@example.com
SENDER_EMAIL=your_verified_sender@yourdomain.com
```

Note: Make sure to verify your sender email domain with Resend before using it.

3. Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- Modern, responsive design
- Contact form with email notifications
- Rate limiting (5 messages per hour)
- Form validation
- TypeScript for type safety

## Environment Variables

| Variable         | Description                                               | Required |
| ---------------- | --------------------------------------------------------- | -------- |
| `RESEND_API_KEY` | Your Resend API key                                       | Yes      |
| `CONTACT_EMAIL`  | Email address where contact form submissions will be sent | Yes      |
| `SENDER_EMAIL`   | Verified email address that will be used to send emails   | Yes      |

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [Resend Documentation](https://resend.com/docs) - learn about Resend email API
- [TypeScript Documentation](https://www.typescriptlang.org/docs) - learn about TypeScript

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

When deploying, make sure to add the required environment variables in your Vercel project settings.
