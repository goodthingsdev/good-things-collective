interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
}

const ProcessStep = ({ number, title, description }: ProcessStepProps) => {
  return (
    <div className="flex">
      <div className="mr-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-collective-black font-mono font-bold text-collective-beige">
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
