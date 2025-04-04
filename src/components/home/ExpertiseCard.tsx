import React from "react";

interface ExpertiseCardProps {
  icon: React.ReactNode;
  title: string;
}

const ExpertiseCard = ({ icon, title }: ExpertiseCardProps) => {
  return (
    <div className="h-full rounded-lg border border-collective-black/5 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex items-center space-x-4">
        <div className="flex h-8 w-8 items-center justify-center text-collective-black">{icon}</div>
        <h3 className="text-sm font-medium leading-tight">{title}</h3>
      </div>
    </div>
  );
};

export default ExpertiseCard;
