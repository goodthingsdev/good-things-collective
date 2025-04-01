
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";

const CaseStudies = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">Our Work</h1>
              <p className="text-lg opacity-75 max-w-md">
                Explore our case studies showcasing our expertise in secure, ethical, and sustainable digital solutions.
              </p>
            </div>
            <div className="flex justify-center md:justify-end animate-fade-in">
              <div className="bg-pattern h-64 w-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="section bg-collective-black text-collective-beige">
        <div className="section-inner">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-block mb-2">
                <div className="px-4 py-1 rounded-full bg-collective-beige/10 text-sm">
                  Featured Project
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">AgTrack: Farm-to-Table Traceability Platform</h2>
              <p className="opacity-80">
                A comprehensive solution for tracking agricultural products from farm to consumer, ensuring transparency, quality control, and sustainability throughout the supply chain.
              </p>
              <div className="space-y-4 pt-2">
                <div>
                  <h3 className="text-sm font-medium text-collective-orange">Challenge</h3>
                  <p className="opacity-75">
                    Creating a secure, scalable platform that could track agricultural products across complex supply chains while maintaining data integrity and privacy.
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-collective-orange">Solution</h3>
                  <p className="opacity-75">
                    We developed a blockchain-based traceability system with intuitive mobile apps for farmers and a comprehensive dashboard for distributors and retailers.
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-collective-orange">Results</h3>
                  <p className="opacity-75">
                    50% reduction in supply chain inefficiencies, 30% increase in consumer trust, and improved sustainability metrics across the board.
                  </p>
                </div>
              </div>
              <div className="pt-4">
                <Button variant="outline" className="border-collective-beige text-collective-beige hover:bg-collective-beige/10">
                  Full case study <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="order-first lg:order-last">
              <img 
                src="/lovable-uploads/d4412982-a3ba-47b1-87fd-d636a2ae6bb6.png" 
                alt="AgTrack Platform" 
                className="rounded-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="section">
        <div className="section-inner">
          <h2 className="text-3xl font-bold mb-12">More Case Studies</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <CaseStudyCard 
              title="SecureChain: Blockchain Supply Verification"
              category="Security & Traceability"
              description="A blockchain-based verification system for supply chain integrity, ensuring products are authentic and ethically sourced."
              image="/lovable-uploads/4ea9065d-0225-4015-bb87-dee6fa6675b2.png"
              technologies={["React", "Node.js", "Hyperledger Fabric", "AWS"]}
            />
            <CaseStudyCard 
              title="EcoTrack: Carbon Footprint Monitoring"
              category="Sustainability"
              description="An application helping businesses track and reduce their carbon footprint through real-time monitoring and actionable insights."
              image="/lovable-uploads/de66d6c2-faf2-444e-94b3-3926caaba16b.png"
              technologies={["Next.js", "GraphQL", "TensorFlow", "Google Cloud"]}
            />
            <CaseStudyCard 
              title="PrivacyFirst: GDPR Compliance Platform"
              category="Security & Privacy"
              description="A comprehensive platform helping businesses achieve and maintain GDPR compliance with automated workflows and documentation."
              image="/lovable-uploads/4ea9065d-0225-4015-bb87-dee6fa6675b2.png"
              technologies={["React", "Go", "PostgreSQL", "AWS"]}
            />
            <CaseStudyCard 
              title="FarmConnect: Agricultural IoT Platform"
              category="AgTech & IoT"
              description="An IoT platform connecting farm sensors to provide real-time data on soil conditions, weather, and crop health to optimize farming practices."
              image="/lovable-uploads/d4412982-a3ba-47b1-87fd-d636a2ae6bb6.png"
              technologies={["React Native", "Node.js", "MQTT", "Azure IoT"]}
            />
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="section bg-collective-beige/50">
        <div className="section-inner">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
            <p className="text-lg opacity-75 max-w-2xl mx-auto">
              What our clients say about working with us.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <TestimonialCard 
              quote="The team at GOOD! Collective delivered beyond our expectations. Their focus on security and ethical considerations set them apart from other agencies we've worked with."
              author="Maria Rodriguez"
              company="Sustainable Foods Co."
              image="/lovable-uploads/8c0404e6-dca9-4cb3-8a88-6308ec728519.png"
            />
            <TestimonialCard 
              quote="Their expertise in agricultural technology was invaluable. They understood our specific challenges and built a solution that transformed our supply chain visibility."
              author="John Tetenbaum"
              company="FarmFresh Inc."
              image="/lovable-uploads/8c0404e6-dca9-4cb3-8a88-6308ec728519.png"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-collective-black text-collective-beige">
        <div className="container max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's build something meaningful together</h2>
          <p className="text-lg opacity-75 max-w-2xl mx-auto mb-10">
            We're passionate about creating technology that makes a positive impact. Reach out to discuss your project.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" variant="outline" className="border-collective-beige text-collective-beige hover:bg-collective-beige/10">
              <a href="mailto:collective@goodthings.dev">Email us</a>
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

const CaseStudyCard = ({ title, category, description, image, technologies }: 
  { title: string; category: string; description: string; image: string; technologies: string[] }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-64 object-cover"
      />
      <div className="p-8">
        <div className="text-sm text-collective-orange mb-2">{category}</div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="opacity-75 mb-6">{description}</p>
        
        <Separator className="mb-6" />
        
        <div className="mb-6">
          <h4 className="text-sm font-medium mb-2">Technologies</h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span 
                key={index} 
                className="px-3 py-1 bg-collective-black/5 rounded-full text-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <Button variant="ghost" className="group">
          View case study 
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </div>
  );
};

const TestimonialCard = ({ quote, author, company, image }: 
  { quote: string; author: string; company: string; image: string }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-collective-black/5">
      <div className="mb-6">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 7V11H9C9 13.2091 10.7909 15 13 15V17C9.68629 17 7 14.3137 7 11V7H11Z" fill="#FF5C35"/>
          <path d="M17 7V11H15C15 13.2091 16.7909 15 19 15V17C15.6863 17 13 14.3137 13 11V7H17Z" fill="#FF5C35"/>
        </svg>
      </div>
      <p className="italic mb-6">{quote}</p>
      <div className="flex items-center">
        <img 
          src={image} 
          alt={author} 
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-bold">{author}</h4>
          <p className="text-sm opacity-75">{company}</p>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
