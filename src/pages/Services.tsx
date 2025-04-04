import { Link } from "react-router-dom";
import { ArrowRight, Code, GitMerge, Server, Shield, LineChart, Smartphone, Globe, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { config } from '../lib/config';

const Services = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 opacity-10">
          <img 
            src="/lovable-uploads/3f0413f6-31be-4eb3-bf38-e53d02dc0532.jpg" 
            alt="Abstract Technological Pattern" 
            className="w-full h-full object-cover object-center"
          />
        </div>
        
        <div className="container max-w-6xl mx-auto px-6 relative z-10">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">Our Services</h1>
            <p className="text-lg opacity-75 max-w-3xl">
              We provide comprehensive software development services with a focus on security, sustainability, and ethical technology.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section bg-collective-black text-collective-beige">
        <div className="section-inner">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Expertise</h2>
            <p className="text-lg opacity-75 max-w-2xl mx-auto">
              We specialize in modern technology stacks and ethical solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<Code className="w-6 h-6 text-collective-orange" />}
              title="Modern JavaScript Stacks"
              description="Next.js, React, GraphQL, and other modern frameworks to build robust web applications."
            />
            <ServiceCard 
              icon={<GitMerge className="w-6 h-6 text-collective-orange" />}
              title="Open-source Frameworks"
              description="Leveraging and contributing to open-source technology for better solutions."
            />
            <ServiceCard 
              icon={<Shield className="w-6 h-6 text-collective-orange" />}
              title="AI-Driven Development"
              description="Integrating AI technologies to create smarter, more efficient applications."
            />
            <ServiceCard 
              icon={<Smartphone className="w-6 h-6 text-collective-orange" />}
              title="Mobile App Development"
              description="Cross-platform mobile apps with React Native & Expo for iOS and Android."
            />
            <ServiceCard 
              icon={<Server className="w-6 h-6 text-collective-orange" />}
              title="AWS Cloud Security"
              description="Secure cloud infrastructure setup and management on AWS and other platforms."
            />
            <ServiceCard 
              icon={<GitMerge className="w-6 h-6 text-collective-orange" />}
              title="CI/CD Automation"
              description="Automated testing and deployment pipelines via GitHub Actions and other tools."
            />
            <ServiceCard 
              icon={<Server className="w-6 h-6 text-collective-orange" />}
              title="Scalable Architecture"
              description="Designing systems that can scale efficiently with your business growth."
            />
            <ServiceCard 
              icon={<Shield className="w-6 h-6 text-collective-orange" />}
              title="Enterprise Security"
              description="Implementing enterprise-grade security and compliance measures for critical systems."
            />
            <ServiceCard 
              icon={<LineChart className="w-6 h-6 text-collective-orange" />}
              title="AgTech & Traceability"
              description="Specialized solutions for agricultural technology and supply chain traceability."
            />
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="section">
        <div className="section-inner">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Engagement Models</h2>
            <p className="text-lg opacity-75 max-w-2xl mx-auto">
              Flexible options to meet your specific project needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <EngagementCard 
              icon={<Clock className="w-10 h-10 text-collective-orange" />}
              title="Development Stream"
              description="Embedded pod of engineers collaborate within a larger project team to co-deliver solutions. Provides scalability and flexibility for dynamic needs via team augmentation."
              features={[
                "Flexible team scaling",
                "Integration with your existing team",
                "Specialized expertise as needed",
                "Agile process adaptation"
              ]}
            />
            <EngagementCard 
              icon={<Globe className="w-10 h-10 text-collective-orange" />}
              title="End-to-End Project"
              description="Product development handled entirely by our team. Suitable for well-defined product requirements. Allows clients to focus on strategy while we manage execution."
              features={[
                "Complete project ownership",
                "Turnkey solution delivery",
                "Comprehensive planning & execution",
                "Regular progress reporting"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-collective-beige/50">
        <div className="section-inner">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Process</h2>
              <p className="opacity-75 mb-8">
                Our process is tailored to integrate seamlessly with your team or deliver end-to-end solutions. We prioritize transparency, communication, and iterative development.
              </p>
              <div className="space-y-6">
                <ProcessStep 
                  number="01"
                  title="Discovery & Requirements"
                  description="We begin by understanding your business goals, technical requirements, and constraints."
                />
                <ProcessStep 
                  number="02"
                  title="Planning & Architecture"
                  description="We design the technical architecture and create a detailed project plan with milestones."
                />
                <ProcessStep 
                  number="03"
                  title="Iterative Development"
                  description="We work in 2-week sprints with regular demos and adjust based on feedback."
                />
                <ProcessStep 
                  number="04"
                  title="Testing & Deployment"
                  description="Comprehensive testing and smooth deployment with proper documentation."
                />
                <ProcessStep 
                  number="05"
                  title="Ongoing Support"
                  description="We provide maintenance, support, and feature enhancements as needed."
                />
              </div>
            </div>
            <div className="order-first lg:order-last flex justify-center">
              <img 
                src="/lovable-uploads/8c0404e6-dca9-4cb3-8a88-6308ec728519.png" 
                alt="Our process" 
                className="rounded-lg shadow-md w-full max-w-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-collective-black text-collective-beige">
        <div className="container max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to start your project?</h2>
          <p className="text-lg opacity-75 max-w-2xl mx-auto mb-10">
            Send us your proposal or book a 30-minute call to discuss your ideas.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" variant="outline" className="border-collective-beige text-collective-beige bg-transparent hover:bg-collective-beige/10">
              <a href={`mailto:${config.email}`}>Email us</a>
            </Button>
            <Button asChild size="lg" className="bg-collective-orange hover:bg-collective-orange/90 text-collective-beige">
              <Link to="/contact">Book a call</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

const ServiceCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => {
  return (
    <div className="bg-collective-black/80 p-8 rounded-lg border border-collective-beige/10 hover:border-collective-beige/20 transition-all">
      <div className="bg-collective-beige/5 w-12 h-12 flex items-center justify-center rounded-lg mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="opacity-75">{description}</p>
    </div>
  );
};

const EngagementCard = ({ icon, title, description, features }: { icon: React.ReactNode; title: string; description: string; features: string[] }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-collective-black/5">
      <div className="flex justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-3 text-center">{title}</h3>
      <p className="opacity-75 mb-6 text-center">{description}</p>
      <Separator className="my-6" />
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <div className="mr-3 mt-1">
              <div className="w-4 h-4 rounded-full bg-collective-orange/20 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-collective-orange"></div>
              </div>
            </div>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ProcessStep = ({ number, title, description }: { number: string; title: string; description: string }) => {
  return (
    <div className="flex">
      <div className="mr-4">
        <div className="w-10 h-10 rounded-full bg-collective-black text-collective-beige flex items-center justify-center font-mono font-bold">
          {number}
        </div>
      </div>
      <div>
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="opacity-75">{description}</p>
      </div>
    </div>
  );
};

export default Services;
