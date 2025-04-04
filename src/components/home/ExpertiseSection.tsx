import { Link } from "react-router-dom";
import { Code, GitMerge, Server, Shield, LineChart, ArrowRight, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import ExpertiseCard from "./ExpertiseCard";

const ExpertiseSection = () => {
  return (
    <section className="section bg-collective-beige">
      <div className="section-inner">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-6">
              <ExpertiseCard 
                icon={<Code />}
                title="Modern JavaScript Stacks"
              />
              <ExpertiseCard 
                icon={<GitMerge />}
                title="Open-source Frameworks"
              />
              <ExpertiseCard 
                icon={<Server />}
                title="Scalable Architecture"
              />
              <ExpertiseCard 
                icon={<Shield />}
                title="Enterprise-Grade Security"
              />
              <ExpertiseCard 
                icon={<LineChart />}
                title="AgTech & Traceability"
              />
              <ExpertiseCard 
                icon={<Database />}
                title="CI/CD Automation"
              />
            </div>
          </div>
          
          <div className="space-y-6 order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold">We Are Passionate About</h2>
            <p className="opacity-75">
              Our team combines deep technical expertise with a passion for innovation and ethical solutions. We specialize in modern tech stacks and have particular expertise in agricultural technology and supply chain traceability.
            </p>
            <div className="pt-4">
              <Button asChild>
                <Link to="/services">Explore our services <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
