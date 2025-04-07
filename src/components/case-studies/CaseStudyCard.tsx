import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface CaseStudyCardProps {
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  projectUrl?: string;
  projectButtonText?: string;
}

const CaseStudyCard = ({
  title,
  category,
  description,
  image,
  technologies,
  projectUrl,
  projectButtonText = "View Project",
}: CaseStudyCardProps) => {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md">
      <img src={image} alt={title} className="h-64 w-full object-cover object-top" />
      <div className="p-8">
        <div className="mb-2 text-sm text-collective-orange">{category}</div>
        <h3 className="mb-3 text-xl font-bold">{title}</h3>
        <p className="mb-6 opacity-75">{description}</p>

        <Separator className="mb-6" />

        <div className="mb-6">
          <h4 className="mb-2 text-sm font-medium">Technologies</h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span key={index} className="rounded-full bg-collective-black/5 px-3 py-1 text-xs">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {projectUrl && (
          <Button asChild variant="ghost" className="group">
            <a href={projectUrl} target="_blank" rel="noopener noreferrer">
              {projectButtonText}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        )}
      </div>
    </div>
  );
};

export default CaseStudyCard;
