
import ProcessCard from "./ProcessCard";

const ProcessSection = () => {
  return (
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
  );
};

export default ProcessSection;
