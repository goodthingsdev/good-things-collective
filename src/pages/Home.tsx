
import { Link } from "react-router-dom";
import { ArrowRight, Code, Shield, Leaf, LineChart, GitMerge, Server } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Home = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-block mb-4">
                <div className="px-4 py-1 rounded-full bg-collective-black/5 border border-collective-black/10 text-sm">
                  Code Collective
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="block">Crafting secure,</span>
                <span className="block">ethical, and privacy-</span>
                <span className="block">focused digital</span>
                <span className="block">solutions</span>
              </h1>
              <p className="text-lg opacity-75 max-w-md">
                We're a remote-first team of engineers passionate about creating sustainable, planet-positive technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild size="lg">
                  <Link to="/contact">Get in touch</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/case-studies">View our work</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center md:justify-end animate-fade-in">
              <div className="relative">
                <img 
                  src="/lovable-uploads/762fefac-5d79-4490-9917-579f60d97be4.png" 
                  alt="GOOD!" 
                  className="w-full max-w-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-collective-black text-collective-beige">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg opacity-75 max-w-2xl mx-auto">
              Everything we build is guided by our commitment to security, ethics, and sustainability.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ValueCard 
              icon={<Shield className="w-6 h-6 text-collective-orange" />}
              title="Security & Privacy"
              description="We build with security and privacy as foundational elements, not afterthoughts."
            />
            <ValueCard 
              icon={<Code className="w-6 h-6 text-collective-orange" />}
              title="Ethical Technology"
              description="Our solutions prioritize ethical considerations and responsible innovation."
            />
            <ValueCard 
              icon={<Leaf className="w-6 h-6 text-collective-orange" />}
              title="Planet Positive"
              description="We're committed to creating technology that contributes to a more sustainable future."
            />
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="section bg-collective-beige">
        <div className="section-inner">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-6">
                <ExpertiseCard 
                  icon={<Code />}
                  title="Modern JavaScript Stacks"
                />
                <ExpertiseCard 
                  icon={<GitMerge />}
                  title="Open-source Frameworks"
                />
                <ExpertiseCard 
                  icon={<Server />}
                  title="Scalable Architecture"
                />
                <ExpertiseCard 
                  icon={<Shield />}
                  title="Enterprise-Grade Security"
                />
                <ExpertiseCard 
                  icon={<LineChart />}
                  title="AgTech & Traceability"
                />
                <ExpertiseCard 
                  icon={<GitMerge />}
                  title="CI/CD Automation"
                />
              </div>
            </div>
            
            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold">We Are Passionate About</h2>
              <p className="opacity-75">
                Our team combines deep technical expertise with a passion for innovation and sustainable solutions. We specialize in modern tech stacks and have particular expertise in agricultural technology and supply chain traceability.
              </p>
              <div className="pt-4">
                <Button asChild>
                  <Link to="/services">Explore our services <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-collective-beige/50">
        <div className="section-inner">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Operate</h2>
            <p className="text-lg opacity-75 max-w-2xl mx-auto">
              Our streamlined process ensures efficient delivery and transparent communication.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <ProcessCard 
              number="01"
              title="2 Week Sprints"
              description="Our team works with 2-week cycles, executing scoped user stories with a 4-day workweek per engagement."
            />
            <ProcessCard 
              number="02"
              title="Daily Standups"
              description="We check in daily to ensure everyone is working efficiently and to promptly address any blockers."
            />
            <ProcessCard 
              number="03"
              title="Friday Demo Day"
              description="We demo our weekly accomplishments every Friday to share progress and expand our internal knowledge."
            />
          </div>
        </div>
      </section>

      {/* Case Study Preview */}
      <section className="section">
        <div className="section-inner">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Selected Work</h2>
              <p className="opacity-75 max-w-xl">Explore some of our recent projects</p>
            </div>
            <Button asChild variant="outline" className="mt-4 md:mt-0">
              <Link to="/case-studies">View all case studies <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <CaseStudyCard 
              title="AgTrack: Farm-to-Table Traceability Platform"
              category="AgTech & Sustainability"
              image="/lovable-uploads/d4412982-a3ba-47b1-87fd-d636a2ae6bb6.png"
            />
            <CaseStudyCard 
              title="SecureChain: Blockchain Supply Verification"
              category="Security & Traceability"
              image="/lovable-uploads/4ea9065d-0225-4015-bb87-dee6fa6675b2.png"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-collective-black text-collective-beige">
        <div className="container max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to build something good?</h2>
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

const ValueCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => {
  return (
    <div className="bg-collective-black/80 p-8 rounded-lg border border-collective-beige/10 hover:border-collective-beige/20 transition-all">
      <div className="bg-collective-beige/5 w-12 h-12 flex items-center justify-center rounded-lg mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="opacity-75">{description}</p>
    </div>
  );
};

const ExpertiseCard = ({ icon, title }: { icon: React.ReactNode; title: string }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-collective-black/5">
      <div className="flex items-center space-x-4">
        <div className="w-8 h-8 flex items-center justify-center">
          {icon}
        </div>
        <h3 className="font-medium text-sm">{title}</h3>
      </div>
    </div>
  );
};

const ProcessCard = ({ number, title, description }: { number: string; title: string; description: string }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-collective-black/5">
      <div className="text-collective-orange text-5xl font-bold mb-4">{number}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="opacity-75">{description}</p>
    </div>
  );
};

const CaseStudyCard = ({ title, category, image }: { title: string; category: string; image: string }) => {
  return (
    <div className="group cursor-pointer">
      <div className="overflow-hidden rounded-lg mb-4">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="space-y-2">
        <div className="text-sm text-collective-orange">{category}</div>
        <h3 className="text-xl font-bold group-hover:text-collective-orange transition-colors">{title}</h3>
        <div className="flex items-center text-sm font-medium pt-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <span>View case study</span>
          <ArrowRight className="ml-2 h-4 w-4" />
        </div>
      </div>
    </div>
  );
};

export default Home;
