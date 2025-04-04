import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FeaturedCaseStudyProps {
  title: string;
  description: string;
  challenge: string;
  solution: string;
  results: string;
  image: string;
  projectUrl?: string;
}

const FeaturedCaseStudy = ({
  title,
  description,
  challenge,
  solution,
  results,
  image,
  projectUrl
}: FeaturedCaseStudyProps) => {
  return (
    <section className="section bg-collective-black text-collective-beige pt-12 pb-16">
      <div className="section-inner">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-block mb-2">
              <div className="px-4 py-1 rounded-full bg-collective-beige/10 text-sm">
                Featured Project
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
            <p className="opacity-80">{description}</p>
            <div className="space-y-4 pt-2">
              <div>
                <h3 className="text-sm font-medium text-collective-orange">Challenge</h3>
                <p className="opacity-75">{challenge}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-collective-orange">Solution</h3>
                <p className="opacity-75">{solution}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-collective-orange">Results</h3>
                <p className="opacity-75">{results}</p>
              </div>
            </div>
            {projectUrl && (
              <div className="pt-4">
                <Button asChild variant="outline" className="border-collective-beige text-collective-beige bg-transparent hover:bg-collective-beige/10">
                  <a href={projectUrl} target="_blank" rel="noopener noreferrer">
                    View Project <ArrowUpRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            )}
          </div>
          <div className="order-first lg:order-last">
            <img 
              src={image} 
              alt={title} 
              className="rounded-lg w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCaseStudy; 