"use client";

import React from "react";

import TeamMember from "./TeamMember";

const teamMembers = [
  {
    name: "Lukas Sommer",
    role: "Engineering Lead",
    location: "PRT",
    image: "/uploads/984d8341-b5f2-4536-8715-b1323031b223.png",
    square: true,
    linkedin: "https://www.linkedin.com/in/lukas-sommer-32635a100/",
    github: "https://github.com/lukesmmr",
  },
  {
    name: "Joerg Steiner",
    role: "Senior Software Engineer",
    location: "GER",
    image: "/uploads/8529d64d-24ef-4b3c-8eec-f9f5d8b7c133.png",
    square: true,
    github: "https://github.com/js-0s",
  },
  {
    name: "Adam Zar",
    role: "Senior Software Engineer",
    location: "UK",
    image: "/uploads/ed132824-0b19-4398-8935-54fd5b53ab26.png",
    square: true,
    linkedin: "https://www.linkedin.com/in/adam-z-723bb1130/",
    github: "https://github.com/adamleozar",
  },
  {
    name: "Taylor Allen",
    role: "Full Stack Engineer",
    location: "MEX",
    image: "/uploads/910d6fc7-7447-434f-bf83-e71bc95d7ecf.png",
    square: true,
    linkedin: "https://www.linkedin.com/in/taylorjallen/",
  },
  {
    name: "Anton Oussik",
    role: "DevOps & Cloud Architect",
    location: "ESP",
    image: "/uploads/63b81416-43ca-47f3-b798-6d205c891a5c.png",
    square: true,
    github: "https://github.com/caspear",
  },
  {
    name: "Guillermo Chain",
    role: "Full Stack Engineer",
    location: "VEN",
    image: "/uploads/780ee1f3-50b3-4117-a3e2-70dac9c43c06.png",
    square: true,
    github: "https://github.com/luisgchain",
  },
  {
    name: "Erika Logie",
    role: "UI/UX Designer",
    location: "USA",
    image: "/uploads/7c11e801-4d16-46a6-9c72-81c4fa9b3386.png",
    square: true,
    linkedin: "https://www.linkedin.com/in/erika-logie-3a15647/",
  },
  {
    name: "Franz Gatzke",
    role: "Senior Software Engineer",
    location: "GER",
    image: "/uploads/5b7075a6-e799-4cc8-93d1-82790fdd0cc9.png",
    square: true,
    linkedin: "https://www.linkedin.com/in/franz-gatzke/",
    github: "https://github.com/justTB",
  },
];

const TeamSection = () => {
  return (
    <section className="section py-16 md:py-24">
      <div className="section-inner">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Our Collective</h2>
          <p className="mx-auto max-w-2xl text-lg opacity-75">
            A global team of passionate engineers working together to create meaningful technology.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
