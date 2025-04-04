"use client";

import React from 'react';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { config } from '@/lib/config';

const ContactCTA: React.FC = () => {
  return (
    <section className="py-24 bg-collective-black text-collective-beige">
      <div className="container max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Want to learn more?</h2>
        <p className="text-lg opacity-75 max-w-2xl mx-auto mb-10">
          Send us your proposal or book a 30-minute call to discuss your ideas.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild size="lg" variant="outline" className="border-collective-beige text-collective-beige bg-transparent hover:bg-collective-beige/10">
            <a href={`mailto:${config.email}`}>Email us</a>
          </Button>
          <Button asChild size="lg" className="bg-collective-orange hover:bg-collective-orange/90 text-collective-beige">
            <Link href="/contact">Book a call</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
