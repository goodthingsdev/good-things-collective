
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 min-h-[50vh] relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-10">
        <img 
          src="/lovable-uploads/3f0413f6-31be-4eb3-bf38-e53d02dc0532.jpg" 
          alt="Abstract Technological Pattern" 
          className="w-full h-full object-cover object-center"
        />
      </div>
      
      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">About GOOD!</h1>
          <p className="text-lg opacity-75 max-w-3xl">
            We are a tight-knit, remote-first team of engineers with years of successful collaboration, combining deep experience in commercial projects with a passion for innovation and open-source contributions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
