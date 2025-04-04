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
    <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-collective-black/5">
      <div className="flex justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-3 text-center">{title}</h3>
      <p className="opacity-75 mb-6 text-center">{description}</p>
      <Separator className="my-6" />
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <div className="mr-3 mt-1">
              <div className="w-4 h-4 rounded-full bg-collective-orange/20 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-collective-orange"></div>
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