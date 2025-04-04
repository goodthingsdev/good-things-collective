import { Resend } from 'resend';

if (!process.env.RESEND_API_KEY) {
  throw new Error('Missing RESEND_API_KEY environment variable');
}

if (!process.env.CONTACT_EMAIL) {
  throw new Error('Missing CONTACT_EMAIL environment variable');
}

if (!process.env.SENDER_EMAIL) {
  throw new Error('Missing SENDER_EMAIL environment variable');
}

export const resend = new Resend(process.env.RESEND_API_KEY);
export const contactEmail = process.env.CONTACT_EMAIL;
export const senderEmail = process.env.SENDER_EMAIL; 