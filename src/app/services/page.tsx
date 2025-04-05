"use client";

import CTASection from "@/components/services/CTASection";
import EngagementModels from "@/components/services/EngagementModels";
import HeroSection from "@/components/services/HeroSection";
import ProcessSection from "@/components/services/ProcessSection";
import ServicesOverview from "@/components/services/ServicesOverview";

export default function Page() {
  return (
    <div className="pt-24">
      <HeroSection />
      <ServicesOverview />
      <EngagementModels />
      <ProcessSection />
      <CTASection />
    </div>
  );
}
