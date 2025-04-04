"use client";

import { Github, Linkedin } from "lucide-react";
import React from "react";

interface TeamMemberProps {
  name: string;
  role: string;
  location: string;
  image?: string;
  placeholder?: boolean;
  linkedin?: string;
  github?: string;
}

const TeamMember = ({
  name,
  role,
  location,
  image,
  placeholder = false,
  linkedin,
  github,
}: TeamMemberProps) => {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md">
      <div className="relative aspect-square">
        <div className="absolute right-0 top-0 z-10 bg-black px-2 py-1 text-xs text-white">
          {location}
        </div>
        {placeholder ? (
          <div className="bg-collective.gray/20 flex h-full w-full items-center justify-center">
            <span className="text-collective.gray font-medium">{name.charAt(0)}</span>
          </div>
        ) : (
          <img src={image} alt={name} className="h-full w-full object-cover object-center" />
        )}
      </div>
      <div className="p-3 sm:p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold">{name}</h3>

          {(linkedin || github) && (
            <div className="flex gap-2">
              {linkedin && (
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${name}'s LinkedIn profile`}
                >
                  <Linkedin
                    size={16}
                    className="text-collective.gray hover:text-collective.orange transition-colors"
                  />
                </a>
              )}
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${name}'s GitHub profile`}
                >
                  <Github
                    size={16}
                    className="text-collective.gray hover:text-collective.orange transition-colors"
                  />
                </a>
              )}
            </div>
          )}
        </div>
        <p className="mt-1 text-xs opacity-75">{role}</p>
      </div>
    </div>
  );
};

export default TeamMember;
