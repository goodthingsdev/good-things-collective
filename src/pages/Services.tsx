import HeroSection from "@/components/services/HeroSection";
import ServicesOverview from "@/components/services/ServicesOverview";
import EngagementModels from "@/components/services/EngagementModels";
import ProcessSection from "@/components/services/ProcessSection";
import CTASection from "@/components/services/CTASection";

const Services = () => {
  return (
    <div className="pt-24">
      <HeroSection />
      <ServicesOverview />
      <EngagementModels />
      <ProcessSection />
      <CTASection />
    </div>
  );
};

export default Services;
