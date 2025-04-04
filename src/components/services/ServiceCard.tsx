import { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <div className="bg-collective-black/80 p-8 rounded-lg border border-collective-beige/10 hover:border-collective-beige/20 transition-all">
      <div className="bg-collective-beige/5 w-12 h-12 flex items-center justify-center rounded-lg mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="opacity-75">{description}</p>
    </div>
  );
};

export default ServiceCard; 