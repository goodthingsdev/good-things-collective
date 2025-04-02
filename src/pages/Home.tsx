
import HeroSection from "@/components/home/HeroSection";
import ValuesSection from "@/components/home/ValuesSection";
import ExpertiseSection from "@/components/home/ExpertiseSection";
import CaseStudySection from "@/components/home/CaseStudySection";
import CTASection from "@/components/home/CTASection";

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
