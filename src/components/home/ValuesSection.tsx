import { Shield, Code, Leaf } from "lucide-react";

import ValueCard from "./ValueCard";

const ValuesSection = () => {
  return (
    <section className="bg-collective-black py-20 text-collective-beige">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Our Core Values</h2>
          <p className="mx-auto max-w-2xl text-lg opacity-75">
            Everything we build is guided by our commitment to security, ethics, and sustainability.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <ValueCard
            icon={<Shield className="h-6 w-6 text-collective-orange" />}
            title="Security & Privacy"
            description="We build with security and privacy as foundational elements, not afterthoughts."
          />
          <ValueCard
            icon={<Code className="h-6 w-6 text-collective-orange" />}
            title="Ethical Technology"
            description="Our solutions prioritize ethical considerations and responsible innovation."
          />
          <ValueCard
            icon={<Leaf className="h-6 w-6 text-collective-orange" />}
            title="Planet Positive"
            description="We're committed to creating technology that contributes to a better future."
          />
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
