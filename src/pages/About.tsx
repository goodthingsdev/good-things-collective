import { Link } from "react-router-dom";
import { ArrowRight, GitMerge, Code, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const About = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-0 md:py-0 min-h-[80vh]">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full">
          <div className="space-y-6 p-6 md:p-12 lg:p-16 flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">About GOOD!</h1>
            <p className="text-lg opacity-75 max-w-md">
              We are a tight-knit, remote-first team of engineers with years of successful collaboration, combining deep experience in commercial projects with a passion for innovation and open-source contributions.
            </p>
          </div>
          <div className="bg-cover bg-center h-full min-h-[50vh] md:min-h-full" style={{ backgroundImage: 'url(/lovable-uploads/762fefac-5d79-4490-9917-579f60d97be4.png)' }}>
            {/* Background image div - intentionally empty */}
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

      {/* Team Section */}
      <section className="section">
        <div className="section-inner">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
            <p className="text-lg opacity-75 max-w-2xl mx-auto">
              A global team of passionate engineers working together to create meaningful technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TeamMember 
              name="Lukas Sommer"
              role="Engineering Manager & Product Lead"
              location="PRT"
              image="/lovable-uploads/50a62bde-a2f5-4845-a3ff-5f70c0b4b68e.png"
            />
            <TeamMember 
              name="Joerg Steiner"
              role="Senior Software Engineer"
              location="GER"
              image="/lovable-uploads/50a62bde-a2f5-4845-a3ff-5f70c0b4b68e.png"
            />
            <TeamMember 
              name="Adam Zar"
              role="Senior Software Engineer"
              location="UK"
              image="/lovable-uploads/50a62bde-a2f5-4845-a3ff-5f70c0b4b68e.png"
            />
            <TeamMember 
              name="Taylor Allen"
              role="Full Stack Engineer"
              location="MEX"
              image="/lovable-uploads/50a62bde-a2f5-4845-a3ff-5f70c0b4b68e.png"
            />
            <TeamMember 
              name="Anton Oussik"
              role="DevOps & Cloud Architect"
              location="ESP"
              image="/lovable-uploads/50a62bde-a2f5-4845-a3ff-5f70c0b4b68e.png"
            />
            <TeamMember 
              name="Guillermo Chain"
              role="Full Stack Engineer"
              location="VEN"
              image="/lovable-uploads/50a62bde-a2f5-4845-a3ff-5f70c0b4b68e.png"
            />
            <TeamMember 
              name="Franz Gatzke"
              role="Senior Software Engineer"
              location="GER"
              image="/lovable-uploads/50a62bde-a2f5-4845-a3ff-5f70c0b4b68e.png"
            />
            <TeamMember 
              name="Erika Logie"
              role="UI/UX Designer"
              location="USA"
              image="/lovable-uploads/50a62bde-a2f5-4845-a3ff-5f70c0b4b68e.png"
            />
          </div>
        </div>
      </section>

      {/* How We Operate Section */}
      <section className="section bg-collective-beige/50">
        <div className="section-inner">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">How We Operate</h2>
              <div className="space-y-8">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">2 Week Sprints, Four-day workweek</h3>
                  <p className="opacity-75">
                    Our team works with a 2 week cycle, executing scoped user stories, without exceeding 4 days/week for single engagement.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Daily Standups</h3>
                  <p className="opacity-75">
                    We check in daily to make sure everyone is working efficiently and to make sure there are no blockers.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Friday Demo Day</h3>
                  <p className="opacity-75">
                    We often demo what we worked on each Friday to share awareness of what was accomplished and to expand our internal knowledge.
                  </p>
                </div>
              </div>
            </div>
            <div className="order-first lg:order-last">
              <img 
                src="/lovable-uploads/8c0404e6-dca9-4cb3-8a88-6308ec728519.png" 
                alt="How we operate" 
                className="rounded-lg shadow-md w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How We Engage Section */}
      <section className="section">
        <div className="section-inner">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-first lg:order-last">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">How We Engage</h2>
              <div className="space-y-8">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Development Stream</h3>
                  <p className="opacity-75">
                    Embedded pod of engineers collaborate within a larger project team to co-deliver solutions. Provides scalability and flexibility for dynamic needs via team augmentation.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">End-to-End Project</h3>
                  <p className="opacity-75">
                    Product development handled entirely by our team. Suitable for well-defined product requirements. Allows clients to focus on strategy while we manage execution.
                  </p>
                </div>
                <div className="pt-6">
                  <Button asChild>
                    <Link to="/contact">Work with us <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </div>
              </div>
            </div>
            <div className="order-last lg:order-first">
              <img 
                src="/lovable-uploads/2a1cbd4c-b55c-4848-9c2b-60fb6c5765dc.png" 
                alt="How we engage" 
                className="rounded-lg shadow-md w-full max-w-md mx-auto"
              />
            </div>
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

const TeamMember = ({ name, role, location, image }: { name: string; role: string; location: string; image: string }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative">
        <div className="absolute top-0 right-0 bg-collective-black text-collective-beige px-3 py-1 text-sm">
          {location}
        </div>
        <img 
          src={image} 
          alt={name} 
          className="w-full h-48 object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="text-sm opacity-75">{role}</p>
      </div>
    </div>
  );
};

export default About;
