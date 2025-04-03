
import { Link } from "react-router-dom";
import { ArrowRight, GitMerge, Code, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const About = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 md:py-24 min-h-[50vh] relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="/lovable-uploads/3f0413f6-31be-4eb3-bf38-e53d02dc0532.png" 
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

      {/* Mission Section */}
      <section className="section bg-collective-black text-collective-beige">
        <div className="section-inner">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Our Mission</h2>
              <p className="text-lg">
                To create technology that not only solves complex problems but does so in a way that respects privacy, promotes security, and contributes to a more sustainable world.
              </p>
              <div className="space-y-4 pt-4">
                <div className="flex items-start space-x-4">
                  <div className="mt-1">
                    <Lock className="h-5 w-5 text-collective-orange" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Security-First Approach</h3>
                    <p className="opacity-75">We build with security as a foundational element, not an afterthought.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="mt-1">
                    <Code className="h-5 w-5 text-collective-orange" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Ethical Technology</h3>
                    <p className="opacity-75">We prioritize ethical considerations in every line of code we write.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="mt-1">
                    <GitMerge className="h-5 w-5 text-collective-orange" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Open Source Contributions</h3>
                    <p className="opacity-75">We actively contribute to the open source community to improve the digital ecosystem for everyone.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-first md:order-last">
              <img 
                src="/lovable-uploads/de66d6c2-faf2-444e-94b3-3926caaba16b.png" 
                alt="Our mission" 
                className="rounded-lg w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Collective Section (formerly Team Section) */}
      <section className="section py-16 md:py-24">
        <div className="section-inner">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Collective</h2>
            <p className="text-lg opacity-75 max-w-2xl mx-auto">
              A global team of passionate engineers working together to create meaningful technology.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <TeamMember 
              name="Lukas Sommer"
              role="Engineering Manager & Product Lead"
              location="PRT"
              image="/lovable-uploads/984d8341-b5f2-4536-8715-b1323031b223.png"
              square={true}
            />
            <TeamMember 
              name="Joerg Steiner"
              role="Senior Software Engineer"
              location="GER"
              image="/lovable-uploads/50a62bde-a2f5-4845-a3ff-5f70c0b4b68e.png"
              square={true}
            />
            <TeamMember 
              name="Adam Zar"
              role="Senior Software Engineer"
              location="UK"
              image="/lovable-uploads/50a62bde-a2f5-4845-a3ff-5f70c0b4b68e.png"
              square={true}
            />
            <TeamMember 
              name="Taylor Allen"
              role="Full Stack Engineer"
              location="MEX"
              image="/lovable-uploads/50a62bde-a2f5-4845-a3ff-5f70c0b4b68e.png"
              square={true}
            />
            <TeamMember 
              name="Anton Oussik"
              role="DevOps & Cloud Architect"
              location="ESP"
              image="/lovable-uploads/50a62bde-a2f5-4845-a3ff-5f70c0b4b68e.png"
              square={true}
            />
            <TeamMember 
              name="Guillermo Chain"
              role="Full Stack Engineer"
              location="VEN"
              image="/lovable-uploads/50a62bde-a2f5-4845-a3ff-5f70c0b4b68e.png"
              square={true}
            />
            <TeamMember 
              name="Franz Gatzke"
              role="Senior Software Engineer"
              location="GER"
              image="/lovable-uploads/50a62bde-a2f5-4845-a3ff-5f70c0b4b68e.png"
              square={true}
            />
            <TeamMember 
              name="Erika Logie"
              role="UI/UX Designer"
              location="USA"
              image="/lovable-uploads/50a62bde-a2f5-4845-a3ff-5f70c0b4b68e.png"
              square={true}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-collective-black text-collective-beige">
        <div className="container max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Want to learn more?</h2>
          <p className="text-lg opacity-75 max-w-2xl mx-auto mb-10">
            Send us your proposal or book a 30-minute call to discuss your ideas.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" variant="outline" className="border-collective-beige text-collective-beige bg-transparent hover:bg-collective-beige/10">
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

const TeamMember = ({ name, role, location, image, square = false }: { name: string; role: string; location: string; image: string; square?: boolean }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative">
        <div className="absolute top-0 right-0 bg-collective-black text-collective-beige px-2 py-1 text-xs">
          {location}
        </div>
        <img 
          src={image} 
          alt={name} 
          className={`w-full ${square ? 'aspect-square h-[160px] object-cover object-center' : 'h-48 object-cover'}`}
        />
      </div>
      <div className="p-3 sm:p-4">
        <h3 className="text-sm font-bold">{name}</h3>
        <p className="text-xs opacity-75">{role}</p>
      </div>
    </div>
  );
};

export default About;
