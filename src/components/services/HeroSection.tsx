const HeroSection = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-10">
        <img 
          src="/uploads/3f0413f6-31be-4eb3-bf38-e53d02dc0532.jpg" 
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
  );
};

export default HeroSection; 