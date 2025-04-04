import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { config } from '../lib/config';
import CaseStudyCard from "@/components/case-studies/CaseStudyCard";
import TestimonialCard from "@/components/case-studies/TestimonialCard";
import FeaturedCaseStudy from "@/components/case-studies/FeaturedCaseStudy";

const CaseStudies = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-collective-beige/30">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-2">Our Work</h1>
              <p className="text-lg opacity-75 max-w-xl">
                Explore our case studies showcasing our expertise in secure and ethical digital solutions.
              </p>
            </div>
            <div className="mt-6 md:mt-0">
              <Button asChild variant="outline">
                <Link to="/contact">Start a project <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="section pt-16">
        <div className="section-inner">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <CaseStudyCard 
              title="StoryBird.io: Product Storytelling Platform"
              category="Supply Chain & Consumer Engagement"
              description="A platform that enables brands to connect consumers with their product stories through transparent supply chain narratives. Consumers can access detailed product information via QR codes on packaging, store displays, or menus, creating an engaging and transparent shopping experience."
              image="/lovable-uploads/storybird.png"
              technologies={["React", "Node.js", "QR Code API", "AWS"]}
              projectUrl="https://storybird.io/"
            />
            <CaseStudyCard 
              title="NuMundo.org: Global Regenerative Living Network"
              category="Sustainability & Community"
              description="A platform connecting people with regenerative living projects worldwide, facilitating knowledge sharing and community building for sustainable living."
              image="/lovable-uploads/numundo.png"
              technologies={["React", "Node.js", "PostgreSQL", "Mapbox", "Stripe"]}
              projectUrl="https://numundo.org/"
            />
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <FeaturedCaseStudy
        title="Producers Market: Global B2B Marketplace"
        description="A B2B platform connecting buyers directly with a global network of farmers, makers, and producers, enabling transparent and sustainable supply chains."
        challenge="Creating a scalable platform that could connect buyers with producers across 100+ countries while maintaining supply chain transparency and sustainability impact tracking."
        solution="We developed a comprehensive B2B marketplace that connects buyers directly to source, featuring a 4M+ farmer ecosystem with detailed sustainability impact tracking and supply chain traceability from the first mile."
        results="Built a thriving global network of farmers and producers across 100+ countries, enabling direct B2B connections while providing full visibility into sustainability impact and supply chain traceability."
        image="/lovable-uploads/producers-market.png"
        projectUrl="https://producersmarket.com/"
      />

      {/* More Case Studies Grid */}
      <section className="section">
        <div className="section-inner">
          <h2 className="text-3xl font-bold mb-12">More Case Studies</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <CaseStudyCard 
              title="Enterprise Reporting Platform with Metabase"
              category="Data Analytics & Business Intelligence"
              description="A scalable enterprise reporting solution that simplifies complex data structures through denormalization, enabling efficient business intelligence across multiple data sources."
              image="/lovable-uploads/metabase-reporting.png"
              technologies={["Metabase", "AWS Athena", "AWS DMS", "AWS Glue", "Serverless Architecture"]}
            />
            <CaseStudyCard 
              title="Grafana Loki Stack: Open-Source Logging Solution"
              category="DevOps & Monitoring"
              description="An open-source logging solution built on Grafana Loki, providing real-time log aggregation, analysis, and visualization for AWS servers."
              image="/lovable-uploads/grafana-loki.png"
              technologies={["Grafana", "Loki", "Prometheus", "Node Exporter", "AWS"]}
              projectUrl="https://github.com/lukesmmr/grafana-loki-stack"
            />
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      {config.testimonialsEnabled && (
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
                company="Foods Co."
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
      )}

      {/* CTA Section */}
      <section className="py-24 bg-collective-black text-collective-beige">
        <div className="container max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's build something meaningful together</h2>
          <p className="text-lg opacity-75 max-w-2xl mx-auto mb-10">
            We're passionate about creating technology that makes a positive impact. Reach out to discuss your project.
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

export default CaseStudies;
