
import React from "react";

interface ExpertiseCardProps {
  icon: React.ReactNode;
  title: string;
}

const ExpertiseCard = ({ icon, title }: ExpertiseCardProps) => {
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

export default ExpertiseCard;
