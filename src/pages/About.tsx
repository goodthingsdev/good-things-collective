"use client";

import React from "react";

import ContactCTA from "@/components/about/ContactCTA";
import HeroSection from "@/components/about/HeroSection";
import MissionSection from "@/components/about/MissionSection";
import TeamSection from "@/components/about/TeamSection";

const About = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <HeroSection />

      {/* Mission Section */}
      <MissionSection />

      {/* Collective Section */}
      <TeamSection />

      {/* CTA Section */}
      <ContactCTA />
    </div>
  );
};

export default About;
