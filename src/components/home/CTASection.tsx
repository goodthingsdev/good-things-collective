"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";

import { config } from "../../lib/config";

const CTASection = () => {
  return (
    <section className="bg-collective-black py-24 text-collective-beige">
      <div className="container mx-auto max-w-6xl px-6 text-center">
        <h2 className="mb-6 text-3xl font-bold md:text-4xl">Ready to build something good?</h2>
        <p className="mx-auto mb-10 max-w-2xl text-lg opacity-75">
          Send us your proposal or book a 30-minute call to discuss your ideas.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-collective-beige bg-transparent text-collective-beige hover:bg-collective-beige/10"
          >
            <Link href="/contact">Email us</Link>
          </Button>
          <Button
            asChild
            size="lg"
            className="bg-collective-orange text-collective-beige hover:bg-collective-orange/90"
          >
            <Link href="/contact">Book a call</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
