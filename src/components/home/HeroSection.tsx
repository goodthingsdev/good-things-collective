
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative py-20 md:py-32 bg-collective-beige overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-10">
        <img 
          src="/lovable-uploads/3f0413f6-31be-4eb3-bf38-e53d02dc0532.png" 
          alt="Abstract Technological Pattern" 
          className="w-full h-full object-cover object-center"
        />
      </div>
      
      {/* Content */}
      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block mb-4">
              <div className="px-4 py-1 rounded-full bg-collective-black/10 border border-collective-black/20 text-sm text-collective-black">
                Code Collective
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-collective-black">
              <span className="block">Secure, ethical</span>
              <span className="block">digital solutions</span>
            </h1>
            <p className="text-lg text-collective-black/90 max-w-md">
              We're a remote-first team of engineers passionate about creating sustainable, planet-positive technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="bg-collective-orange hover:bg-collective-orange/90 text-collective-black">
                <Link to="/contact">Get in touch</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-transparent border-collective-black text-collective-black hover:bg-collective-black/10">
                <Link to="/case-studies">View our work</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
