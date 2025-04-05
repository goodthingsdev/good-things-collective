"use client";

import { ChevronRight, Github } from "lucide-react";
import Link from "next/link";

import { config } from "../lib/config";

const Footer = () => {
  return (
    <footer className="bg-collective-black py-16 text-collective-beige">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div className="space-y-4">
            <h3 className="mb-4 text-xl font-bold">GOOD!</h3>
            <p className="max-w-xs text-sm opacity-80">
              A remote-first software collective crafting secure, ethical, and privacy-focused
              digital solutions.
            </p>
            <div className="mt-6 flex space-x-4">
              <a
                href="https://github.com/goodthingsdev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-collective-beige/10 transition-colors hover:bg-collective-orange"
              >
                <Github size={18} className="text-collective-beige" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/services">Services</FooterLink>
              <FooterLink href="/case-studies">Case Studies</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider">Get In Touch</h4>
            <p className="mb-4 text-sm opacity-80">
              Ready to start your next project? Send us your proposal or book a call!
            </p>
            <a
              href={`mailto:${config.email}`}
              className="flex items-center text-collective-orange hover:underline"
            >
              {config.email}
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between border-t border-collective-beige/20 pt-6 md:flex-row">
          <p className="text-xs opacity-60">© {new Date().getFullYear()} GOOD! Collective.</p>
          <p className="text-xs opacity-60">All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <Link
      href={href}
      className="group flex items-center text-sm opacity-80 transition-opacity hover:opacity-100"
    >
      <ChevronRight
        size={14}
        className="mr-1 opacity-0 transition-opacity group-hover:opacity-100"
      />
      {children}
    </Link>
  </li>
);

export default Footer;
