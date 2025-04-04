const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-10">
        <img
          src="/uploads/3f0413f6-31be-4eb3-bf38-e53d02dc0532.jpg"
          alt="Abstract Technological Pattern"
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="container relative z-10 mx-auto max-w-6xl px-6">
        <div className="animate-fade-in space-y-6">
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">Our Services</h1>
          <p className="max-w-3xl text-lg opacity-75">
            We provide comprehensive software development services with a focus on security,
            sustainability, and ethical technology.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
