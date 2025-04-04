"use client";

import React from "react";
import { Github, Linkedin } from "lucide-react";

interface TeamMemberProps {
  name: string;
  role: string;
  location: string;
  image?: string;
  placeholder?: boolean;
  square?: boolean;
  linkedin?: string;
  github?: string;
}

const TeamMember = ({ 
  name, 
  role, 
  location, 
  image, 
  placeholder = false, 
  square = false,
  linkedin,
  github
}: TeamMemberProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative aspect-square">
        <div className="absolute top-0 right-0 bg-black text-white px-2 py-1 text-xs z-10">
          {location}
        </div>
        {placeholder ? (
          <div className="w-full h-full bg-collective.gray/20 flex items-center justify-center">
            <span className="text-collective.gray font-medium">{name.charAt(0)}</span>
          </div>
        ) : (
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover object-center"
          />
        )}
      </div>
      <div className="p-3 sm:p-4">
        <div className="flex justify-between items-center">
          <h3 className="text-sm font-bold">{name}</h3>
          
          {(linkedin || github) && (
            <div className="flex gap-2">
              {linkedin && (
                <a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${name}'s LinkedIn profile`}>
                  <Linkedin size={16} className="text-collective.gray hover:text-collective.orange transition-colors" />
                </a>
              )}
              {github && (
                <a href={github} target="_blank" rel="noopener noreferrer" aria-label={`${name}'s GitHub profile`}>
                  <Github size={16} className="text-collective.gray hover:text-collective.orange transition-colors" />
                </a>
              )}
            </div>
          )}
        </div>
        <p className="text-xs opacity-75 mt-1">{role}</p>
      </div>
    </div>
  );
};

export default TeamMember;
