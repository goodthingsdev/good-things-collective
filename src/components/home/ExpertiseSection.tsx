"use client";

import { Code, GitMerge, Server, Shield, LineChart, ArrowRight, Database } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import ExpertiseCard from "./ExpertiseCard";

const ExpertiseSection = () => {
  return (
    <section className="section bg-collective-beige">
      <div className="section-inner">
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <ExpertiseCard icon={<Code className="h-5 w-5" />} title="Modern JavaScript Stacks" />
              <ExpertiseCard
                icon={<GitMerge className="h-5 w-5" />}
                title="Open-source Frameworks"
              />
              <ExpertiseCard icon={<Server className="h-5 w-5" />} title="Scalable Architecture" />
              <ExpertiseCard
                icon={<Shield className="h-5 w-5" />}
                title="Enterprise-Grade Security"
              />
              <ExpertiseCard
                icon={<LineChart className="h-5 w-5" />}
                title="AI & Machine Learning"
              />
              <ExpertiseCard
                icon={<LineChart className="h-5 w-5" />}
                title="AgTech & Traceability"
              />
              <ExpertiseCard
                icon={<LineChart className="h-5 w-5" />}
                title="Web3 & Blockchain"
              />
              <ExpertiseCard icon={<Database className="h-5 w-5" />} title="CI/CD Automation" />
            </div>
          </div>

          <div className="order-1 space-y-6 lg:order-2">
            <h2 className="text-3xl font-bold md:text-4xl">We Are Passionate About</h2>
            <p className="opacity-75">
              Our team combines deep technical expertise with a passion for innovation and ethical
              solutions. We specialize in modern tech stacks and have particular expertise in
              agricultural technology and supply chain traceability.
            </p>
            <div className="pt-4">
              <Button asChild variant="default" className="bg-black text-white hover:bg-black/90">
                <Link href="/services" className="flex items-center">
                  Explore our services <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
