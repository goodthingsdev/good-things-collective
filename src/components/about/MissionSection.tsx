import { Lock, Code, GitMerge } from "lucide-react";
import React from "react";

const MissionSection: React.FC = () => {
  return (
    <section className="section bg-collective-black text-collective-beige">
      <div className="section-inner">
        <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold md:text-4xl">Our Mission</h2>
            <p className="text-lg">
              To create technology that not only solves complex problems but does so in a way that
              respects privacy, promotes security, and contributes to a more sustainable world.
            </p>
            <div className="space-y-4 pt-4">
              <div className="flex items-start space-x-4">
                <div className="mt-1">
                  <Lock className="h-5 w-5 text-collective-orange" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Security-First Approach</h3>
                  <p className="opacity-75">
                    We build with security as a foundational element, not an afterthought.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="mt-1">
                  <Code className="h-5 w-5 text-collective-orange" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Ethical Technology</h3>
                  <p className="opacity-75">
                    We prioritize ethical considerations in every line of code we write.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="mt-1">
                  <GitMerge className="h-5 w-5 text-collective-orange" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Open Source Contributions</h3>
                  <p className="opacity-75">
                    We actively contribute to the open source community to improve the digital
                    ecosystem for everyone.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="order-first md:order-last">
            <img
              src="/uploads/ec966130-b689-4bd5-8c0b-d12d318807fb.jpg"
              alt="Technology illustration with security, code, and nature icons"
              className="mx-auto w-full max-w-md rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
