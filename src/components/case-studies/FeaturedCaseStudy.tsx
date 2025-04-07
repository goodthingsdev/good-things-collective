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
  secondaryProjectUrl?: string;
  technologies?: string[];
  primaryButtonText?: string;
  secondaryButtonText?: string;
}

const FeaturedCaseStudy = ({
  title,
  description,
  challenge,
  solution,
  results,
  image,
  projectUrl,
  secondaryProjectUrl,
  technologies,
  primaryButtonText = "View Project",
  secondaryButtonText = "View Project",
}: FeaturedCaseStudyProps) => {
  return (
    <section className="section bg-collective-black pb-16 pt-12 text-collective-beige">
      <div className="section-inner">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="mb-2 inline-block">
              <div className="rounded-full bg-collective-beige/10 px-4 py-1 text-sm">
                Featured Project
              </div>
            </div>
            <h2 className="text-3xl font-bold md:text-4xl">{title}</h2>
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
              {technologies && (
                <div>
                  <h3 className="text-sm font-medium text-collective-orange">Technologies</h3>
                  <p className="opacity-75">{technologies.join(", ")}</p>
                </div>
              )}
            </div>
            <div className="flex gap-4 pt-4">
              {projectUrl && (
                <Button
                  asChild
                  variant="outline"
                  className="border-collective-beige bg-transparent text-collective-beige hover:bg-collective-beige/10"
                >
                  <a href={projectUrl} target="_blank" rel="noopener noreferrer">
                    {primaryButtonText} <ArrowUpRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              )}
              {secondaryProjectUrl && (
                <Button
                  asChild
                  variant="outline"
                  className="border-collective-beige bg-transparent text-collective-beige hover:bg-collective-beige/10"
                >
                  <a href={secondaryProjectUrl} target="_blank" rel="noopener noreferrer">
                    {secondaryButtonText} <ArrowUpRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              )}
            </div>
          </div>
          <div className="order-first lg:order-last">
            <img src={image} alt={title} className="w-full rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCaseStudy;
