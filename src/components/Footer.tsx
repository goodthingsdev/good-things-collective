"use client";

import Link from "next/link";
import { ChevronRight, Leaf, Lock, Globe, Github, MessagesSquare } from "lucide-react";
import { config } from '../lib/config';

const Footer = () => {
  return (
    <footer className="bg-collective-black text-collective-beige py-16">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">GOOD!</h3>
            <p className="text-sm opacity-80 max-w-xs">
              A remote-first software collective crafting secure, ethical, and privacy-focused digital solutions.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://github.com/goodthingsdev" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center bg-collective-beige/10 hover:bg-collective-orange transition-colors">
                <Github size={18} className="text-collective-beige" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/services">Services</FooterLink>
              <FooterLink href="/case-studies">Case Studies</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4">Get In Touch</h4>
            <p className="text-sm opacity-80 mb-4">
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
        
        <div className="border-t border-collective-beige/20 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
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
      className="text-sm opacity-80 hover:opacity-100 transition-opacity flex items-center group"
    >
      <ChevronRight size={14} className="mr-1 opacity-0 group-hover:opacity-100 transition-opacity" />
      {children}
    </Link>
  </li>
);

export default Footer;
