import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[50vh] overflow-hidden py-16 md:py-24">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-10">
        <img
          src="/uploads/3f0413f6-31be-4eb3-bf38-e53d02dc0532.jpg"
          alt="Abstract Technological Pattern"
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="container relative z-10 mx-auto max-w-6xl px-6">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">About GOOD!</h1>
          <p className="max-w-3xl text-lg opacity-75">
            We are a tight-knit, remote-first team of engineers with years of successful
            collaboration, combining deep experience in commercial projects with a passion for
            innovation and open-source contributions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
