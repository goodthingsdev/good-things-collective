import ProcessStep from "./ProcessStep";

const ProcessSection = () => {
  return (
    <section className="section bg-collective-beige/50">
      <div className="section-inner">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Process</h2>
          <p className="opacity-75 mb-12">
            Our process is tailored to integrate seamlessly with your team or deliver end-to-end solutions. We prioritize transparency, communication, and iterative development.
          </p>
          <div className="space-y-8">
            <ProcessStep 
              number="01"
              title="Discovery & Requirements"
              description="We begin by understanding your business goals, technical requirements, and constraints."
            />
            <ProcessStep 
              number="02"
              title="Planning & Architecture"
              description="We design the technical architecture and create a detailed project plan with milestones."
            />
            <ProcessStep 
              number="03"
              title="Iterative Development"
              description="We work in 2-week sprints with regular demos and adjust based on feedback."
            />
            <ProcessStep 
              number="04"
              title="Testing & Deployment"
              description="Comprehensive testing and smooth deployment with proper documentation."
            />
            <ProcessStep 
              number="05"
              title="Ongoing Support"
              description="We provide maintenance, support, and feature enhancements as needed."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection; 