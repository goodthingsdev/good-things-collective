
import React from 'react';
import { Lock, Code, GitMerge } from 'lucide-react';

const MissionSection: React.FC = () => {
  return (
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
              src="/lovable-uploads/6ffb8930-4907-463c-be9d-a5acbaa93fa7.png" 
              alt="Sustainable technology illustration with code, plants, and security icons" 
              className="rounded-lg w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
