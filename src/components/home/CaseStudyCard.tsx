
import React from "react";
import { ArrowRight } from "lucide-react";

interface CaseStudyCardProps {
  title: string;
  category: string;
  image: string;
}

const CaseStudyCard = ({ title, category, image }: CaseStudyCardProps) => {
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
          <span>View Project</span>
          <ArrowRight className="ml-2 h-4 w-4" />
        </div>
      </div>
    </div>
  );
};

export default CaseStudyCard;
