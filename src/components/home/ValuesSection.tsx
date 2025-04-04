import { Shield, Code, Leaf } from "lucide-react";
import ValueCard from "./ValueCard";

const ValuesSection = () => {
  return (
    <section className="py-20 bg-collective-black text-collective-beige">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
          <p className="text-lg opacity-75 max-w-2xl mx-auto">
            Everything we build is guided by our commitment to security, ethics, and sustainability.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ValueCard 
            icon={<Shield className="w-6 h-6 text-collective-orange" />}
            title="Security & Privacy"
            description="We build with security and privacy as foundational elements, not afterthoughts."
          />
          <ValueCard 
            icon={<Code className="w-6 h-6 text-collective-orange" />}
            title="Ethical Technology"
            description="Our solutions prioritize ethical considerations and responsible innovation."
          />
          <ValueCard 
            icon={<Leaf className="w-6 h-6 text-collective-orange" />}
            title="Planet Positive"
            description="We're committed to creating technology that contributes to a better future."
          />
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
