"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import CaseStudyCard from "./CaseStudyCard";

const CaseStudySection = () => {
  return (
    <section className="section">
      <div className="section-inner">
        <div className="mb-12 flex flex-col items-start justify-between md:flex-row md:items-center">
          <div>
            <h2 className="mb-2 text-3xl font-bold md:text-4xl">Selected Work</h2>
            <p className="max-w-xl opacity-75">Explore some of our recent projects</p>
          </div>
          <Button asChild variant="outline" className="mt-4 whitespace-nowrap md:mt-0">
            <Link href="/case-studies">
              View all case studies <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
          <CaseStudyCard
            title="StoryBird.io: Product Storytelling Platform"
            category="Supply Chain & Consumer Engagement"
            image="/uploads/SCR-20250404-koot.png"
          />
          <CaseStudyCard
            title="NuMundo.org: Global Regenerative Living Network"
            category="Sustainability & Community"
            image="/uploads/SCR-20250404-kprt.png"
          />
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
