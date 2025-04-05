import type { Metadata, Viewport } from "next";
import { Space_Mono, Inter } from "next/font/google";

import "./globals.css";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

import ClientLayout from "../components/ClientLayout";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"),
  title: "Good Things Collective - Secure and Ethical Digital Solutions",
  description:
    "A value-driven software collective crafting secure, ethical, and privacy-focused digital solutions with expertise in agtech and traceability.",
  authors: [{ name: "Good Things Collective" }],
  openGraph: {
    title: "Good Things Collective - Secure and Ethical Digital Solutions",
    description:
      "A value-driven software collective crafting secure, ethical, and privacy-focused digital solutions with expertise in agtech and traceability.",
    type: "website",
    images: [{ url: "/uploads/good-collective-logo-sm.png" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@goodcollective",
    images: [{ url: "/uploads/good-collective-logo-sm.png" }],
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
    other: [
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  },
  applicationName: "Good Things Collective",
  referrer: "origin-when-cross-origin",
  keywords: ["software", "development", "ethical", "secure", "privacy", "agtech", "traceability"],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceMono.variable}`} suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <ClientLayout>
            <TooltipProvider>
              <Toaster />
              <Sonner />
              {children}
            </TooltipProvider>
          </ClientLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
