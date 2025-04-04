interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
}

const ProcessStep = ({ number, title, description }: ProcessStepProps) => {
  return (
    <div className="flex">
      <div className="mr-4">
        <div className="w-10 h-10 rounded-full bg-collective-black text-collective-beige flex items-center justify-center font-mono font-bold">
          {number}
        </div>
      </div>
      <div>
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="opacity-75">{description}</p>
      </div>
    </div>
  );
};

export default ProcessStep; 