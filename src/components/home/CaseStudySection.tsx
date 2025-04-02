
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import CaseStudyCard from "./CaseStudyCard";

const CaseStudySection = () => {
  return (
    <section className="section">
      <div className="section-inner">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Selected Work</h2>
            <p className="opacity-75 max-w-xl">Explore some of our recent projects</p>
          </div>
          <Button asChild variant="outline" className="mt-4 md:mt-0">
            <Link to="/case-studies">View all case studies <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <CaseStudyCard 
            title="AgTrack: Farm-to-Table Traceability Platform"
            category="AgTech & Sustainability"
            image="/lovable-uploads/d4412982-a3ba-47b1-87fd-d636a2ae6bb6.png"
          />
          <CaseStudyCard 
            title="SecureChain: Blockchain Supply Verification"
            category="Security & Traceability"
            image="/lovable-uploads/4ea9065d-0225-4015-bb87-dee6fa6675b2.png"
          />
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
