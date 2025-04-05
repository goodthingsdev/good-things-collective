"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

import CaseStudyCard from "@/components/case-studies/CaseStudyCard";
import FeaturedCaseStudy from "@/components/case-studies/FeaturedCaseStudy";
import TestimonialCard from "@/components/case-studies/TestimonialCard";
import { Button } from "@/components/ui/button";

import { config } from "../lib/config";

const CaseStudies = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-collective-beige/30 py-12 md:py-16">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div>
              <h1 className="mb-2 text-4xl font-bold leading-tight md:text-5xl">Our Work</h1>
              <p className="max-w-xl text-lg opacity-75">
                Explore our case studies showcasing our expertise in secure and ethical digital
                solutions.
              </p>
            </div>
            <div className="mt-6 md:mt-0">
              <Button asChild variant="outline">
                <Link href="/contact">
                  Start a project <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="section pt-16">
        <div className="section-inner">
          <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2">
            <CaseStudyCard
              title="StoryBird.io: Product Storytelling Platform"
              category="Supply Chain & Consumer Engagement"
              description="A platform that enables brands to connect consumers with their product stories through transparent supply chain narratives. Consumers can access detailed product information via QR codes on packaging, store displays, or menus, creating an engaging and transparent shopping experience."
              image="/uploads/SCR-20250404-koot.png"
              technologies={["React", "Node.js", "QR Code API", "AWS"]}
              projectUrl="https://storybird.io/"
            />
            <CaseStudyCard
              title="NuMundo.org: Global Regenerative Living Network"
              category="Sustainability & Community"
              description="A platform connecting people with regenerative living projects worldwide, facilitating knowledge sharing and community building for sustainable living."
              image="/uploads/SCR-20250404-kprt.png"
              technologies={["React", "Node.js", "MongoDB", "Mapbox", "Stripe"]}
              projectUrl="https://numundo.org/"
            />
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <FeaturedCaseStudy
        title="Producers Market: Global B2B Marketplace"
        description="A B2B platform connecting buyers directly with a global network of farmers, makers, and producers, enabling transparent and sustainable supply chains."
        challenge="Building a scalable platform to connect buyers with producers across 100+ countries while ensuring supply chain transparency and sustainability tracking."
        solution="Developed a B2B marketplace connecting buyers directly to source, featuring a 4M+ farmer ecosystem with sustainability tracking and supply chain traceability."
        results="Established a global network of farmers and producers across 100+ countries, enabling direct B2B connections with full sustainability and supply chain visibility."
        image="/uploads/SCR-20250404-kqsg.png"
        projectUrl="https://producersmarket.com/"
      />

      {/* More Case Studies Grid */}
      <section className="section">
        <div className="section-inner">
          <h2 className="mb-12 text-3xl font-bold">More Case Studies</h2>

          <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2">
            <CaseStudyCard
              title="Enterprise Reporting Platform with Metabase"
              category="Data Analytics & Business Intelligence"
              description="A scalable enterprise reporting solution that simplifies complex data structures through denormalization, enabling efficient business intelligence across multiple data sources."
              image="/uploads/metabase-reports.png"
              technologies={[
                "Metabase",
                "AWS Athena",
                "AWS DMS",
                "AWS Glue",
                "Serverless Architecture",
              ]}
            />
            <CaseStudyCard
              title="Grafana Loki Stack: Open-Source Logging Solution"
              category="DevOps & Monitoring"
              description="An open-source logging solution built on Grafana Loki, providing real-time log aggregation, analysis, and visualization for AWS servers."
              image="/uploads/SCR-20250404-kttc.png"
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
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">Client Testimonials</h2>
              <p className="mx-auto max-w-2xl text-lg opacity-75">
                What our clients say about working with us.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <TestimonialCard
                quote="The team at GOOD! Collective delivered beyond our expectations. Their focus on security and ethical considerations set them apart from other agencies we've worked with."
                author="Maria Rodriguez"
                company="Foods Co."
                image="/uploads/8c0404e6-dca9-4cb3-8a88-6308ec728519.png"
              />
              <TestimonialCard
                quote="Their expertise in agricultural technology was invaluable. They understood our specific challenges and built a solution that transformed our supply chain visibility."
                author="John Tetenbaum"
                company="FarmFresh Inc."
                image="/uploads/8c0404e6-dca9-4cb3-8a88-6308ec728519.png"
              />
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="bg-collective-black py-24 text-collective-beige">
        <div className="container mx-auto max-w-6xl px-6 text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Let's build something meaningful together
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg opacity-75">
            We're passionate about creating technology that makes a positive impact. Reach out to
            discuss your project.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-collective-beige bg-transparent text-collective-beige hover:bg-collective-beige/10"
            >
              <Link href="/contact">Email us</Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-collective-orange text-collective-beige hover:bg-collective-orange/90"
            >
              <Link href="/contact">Book a call</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
