
import React from "react";

interface ProcessCardProps {
  number: string;
  title: string;
  description: string;
}

const ProcessCard = ({ number, title, description }: ProcessCardProps) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-collective-black/5">
      <div className="text-collective-orange text-5xl font-bold mb-4">{number}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="opacity-75">{description}</p>
    </div>
  );
};

export default ProcessCard;
