import { ReactNode } from "react";

import { Separator } from "@/components/ui/separator";

interface EngagementCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  features: string[];
}

const EngagementCard = ({ icon, title, description, features }: EngagementCardProps) => {
  return (
    <div className="rounded-lg border border-collective-black/5 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
      <div className="mb-6 flex justify-center">{icon}</div>
      <h3 className="mb-3 text-center text-2xl font-bold">{title}</h3>
      <p className="mb-6 text-center opacity-75">{description}</p>
      <Separator className="my-6" />
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <div className="mr-3 mt-1">
              <div className="flex h-4 w-4 items-center justify-center rounded-full bg-collective-orange/20">
                <div className="h-2 w-2 rounded-full bg-collective-orange"></div>
              </div>
            </div>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EngagementCard;
