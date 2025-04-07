"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

interface CaseStudyCardProps {
  title: string;
  category: string;
  image: string;
}

const CaseStudyCard = ({ title, category, image }: CaseStudyCardProps) => {
  return (
    <Link href="/case-studies" className="group block h-full" onClick={() => window.scrollTo(0, 0)}>
      <div className="mb-6 overflow-hidden rounded-lg">
        <img
          src={image}
          alt={title}
          className="h-64 w-full object-cover object-top transition-transform duration-500 group-hover:scale-105 md:h-72"
        />
      </div>
      <div className="space-y-3">
        <div className="text-sm font-medium text-collective-orange">{category}</div>
        <h3 className="text-xl font-bold transition-colors group-hover:text-collective-orange">
          {title}
        </h3>
        <div className="flex items-center pt-1 text-sm font-medium opacity-0 transition-opacity group-hover:opacity-100">
          <span>View Project</span>
          <ArrowRight className="ml-2 h-4 w-4" />
        </div>
      </div>
    </Link>
  );
};

export default CaseStudyCard;
