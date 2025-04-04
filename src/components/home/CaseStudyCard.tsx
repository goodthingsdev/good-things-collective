"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface CaseStudyCardProps {
  title: string;
  category: string;
  image: string;
}

const CaseStudyCard = ({ title, category, image }: CaseStudyCardProps) => {
  return (
    <Link 
      href="/case-studies" 
      className="block group h-full"
      onClick={() => window.scrollTo(0, 0)}
    >
      <div className="overflow-hidden rounded-lg mb-6">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-64 md:h-72 object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="space-y-3">
        <div className="text-sm text-collective-orange font-medium">{category}</div>
        <h3 className="text-xl font-bold group-hover:text-collective-orange transition-colors">{title}</h3>
        <div className="flex items-center text-sm font-medium pt-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <span>View Project</span>
          <ArrowRight className="ml-2 h-4 w-4" />
        </div>
      </div>
    </Link>
  );
};

export default CaseStudyCard;
