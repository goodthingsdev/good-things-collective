"use client";

import CaseStudySection from "@/components/home/CaseStudySection";
import CTASection from "@/components/home/CTASection";
import ExpertiseSection from "@/components/home/ExpertiseSection";
import HeroSection from "@/components/home/HeroSection";
import ValuesSection from "@/components/home/ValuesSection";

const Home = () => {
  return (
    <div className="pt-24">
      <HeroSection />
      <ValuesSection />
      <ExpertiseSection />
      <CaseStudySection />
      <CTASection />
    </div>
  );
};

export default Home;
