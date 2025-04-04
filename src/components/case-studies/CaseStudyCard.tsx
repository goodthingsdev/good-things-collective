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
}

const CaseStudyCard = ({ 
  title, 
  category, 
  description, 
  image, 
  technologies, 
  projectUrl 
}: CaseStudyCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-64 object-cover"
      />
      <div className="p-8">
        <div className="text-sm text-collective-orange mb-2">{category}</div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="opacity-75 mb-6">{description}</p>
        
        <Separator className="mb-6" />
        
        <div className="mb-6">
          <h4 className="text-sm font-medium mb-2">Technologies</h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span 
                key={index} 
                className="px-3 py-1 bg-collective-black/5 rounded-full text-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        {projectUrl && (
          <Button asChild variant="ghost" className="group">
            <a href={projectUrl} target="_blank" rel="noopener noreferrer">
              View case study 
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        )}
      </div>
    </div>
  );
};

export default CaseStudyCard; 