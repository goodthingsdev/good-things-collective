"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-collective-beige py-20 md:py-32">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-10">
        <img
          src="/uploads/3f0413f6-31be-4eb3-bf38-e53d02dc0532.jpg"
          alt="Abstract Technological Pattern"
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <div className="animate-fade-in space-y-6">
            <div className="mb-4 inline-block">
              <div className="rounded-full border border-collective-black/20 bg-collective-black/10 px-4 py-1 text-sm text-collective-black shadow-[0_0_15px_rgba(255,255,255,0.5)]">
                Code Collective
              </div>
            </div>
            <h1 className="text-4xl font-bold leading-tight text-collective-black drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] md:text-5xl lg:text-6xl">
              <span className="block">Secure, ethical</span>
              <span className="block">digital solutions</span>
            </h1>
            <p className="max-w-md text-lg text-collective-black/90 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
              We're a remote-first team of engineers passionate about creating planet-positive
              technology.
            </p>
            <div className="flex flex-col gap-4 pt-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-collective-orange text-collective-black shadow-[0_0_15px_rgba(255,255,255,0.5)] hover:bg-collective-orange/90"
              >
                <Link href="/contact">Get in touch</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-collective-black bg-transparent text-collective-black shadow-[0_0_15px_rgba(255,255,255,0.5)] hover:bg-collective-black/10"
              >
                <Link href="/case-studies">View our work</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
