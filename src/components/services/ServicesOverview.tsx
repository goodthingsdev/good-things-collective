import { Code, GitMerge, Server, Shield, Smartphone, LineChart } from "lucide-react";

import ServiceCard from "./ServiceCard";

const ServicesOverview = () => {
  return (
    <section className="section bg-collective-black text-collective-beige">
      <div className="section-inner">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Our Expertise</h2>
          <p className="mx-auto max-w-2xl text-lg opacity-75">
            We specialize in modern technology stacks and ethical solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            icon={<Code className="h-6 w-6 text-collective-orange" />}
            title="Modern JavaScript Stacks"
            description="Next.js, React, GraphQL, and other modern frameworks to build robust web applications."
          />
          <ServiceCard
            icon={<GitMerge className="h-6 w-6 text-collective-orange" />}
            title="Open-source Frameworks"
            description="Leveraging and contributing to open-source technology for better solutions."
          />
          <ServiceCard
            icon={<Shield className="h-6 w-6 text-collective-orange" />}
            title="AI-Driven Development"
            description="Integrating AI technologies to create smarter, more efficient applications."
          />
          <ServiceCard
            icon={<Smartphone className="h-6 w-6 text-collective-orange" />}
            title="Mobile App Development"
            description="Cross-platform mobile apps with React Native & Expo for iOS and Android."
          />
          <ServiceCard
            icon={<Server className="h-6 w-6 text-collective-orange" />}
            title="AWS Cloud Security"
            description="Secure cloud infrastructure setup and management on AWS and other platforms."
          />
          <ServiceCard
            icon={<GitMerge className="h-6 w-6 text-collective-orange" />}
            title="CI/CD Automation"
            description="Automated testing and deployment pipelines via GitHub Actions and other tools."
          />
          <ServiceCard
            icon={<Server className="h-6 w-6 text-collective-orange" />}
            title="Scalable Architecture"
            description="Designing systems that can scale efficiently with your business growth."
          />
          <ServiceCard
            icon={<Shield className="h-6 w-6 text-collective-orange" />}
            title="Enterprise Security"
            description="Implementing enterprise-grade security and compliance measures for critical systems."
          />
          <ServiceCard
            icon={<LineChart className="h-6 w-6 text-collective-orange" />}
            title="AgTech & Traceability"
            description="Specialized solutions for agricultural technology and supply chain traceability."
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
