
import React from 'react';
import TeamMember from './TeamMember';

const TeamSection: React.FC = () => {
  return (
    <section className="section py-16 md:py-24">
      <div className="section-inner">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Collective</h2>
          <p className="text-lg opacity-75 max-w-2xl mx-auto">
            A global team of passionate engineers working together to create meaningful technology.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <TeamMember 
            name="Lukas Sommer"
            role="Engineering Manager & Product Lead"
            location="PRT"
            image="/lovable-uploads/984d8341-b5f2-4536-8715-b1323031b223.png"
            square={true}
          />
          <TeamMember 
            name="Joerg Steiner"
            role="Senior Software Engineer"
            location="GER"
            image="/lovable-uploads/0b531ae5-6405-4059-8ad3-6242c2933fa4.png"
            square={true}
          />
          <TeamMember 
            name="Adam Zar"
            role="Senior Software Engineer"
            location="UK"
            image="/lovable-uploads/ed132824-0b19-4398-8935-54fd5b53ab26.png"
            square={true}
          />
          <TeamMember 
            name="Taylor Allen"
            role="Full Stack Engineer"
            location="MEX"
            image="/lovable-uploads/910d6fc7-7447-434f-bf83-e71bc95d7ecf.png"
            square={true}
          />
          <TeamMember 
            name="Anton Oussik"
            role="DevOps & Cloud Architect"
            location="ESP"
            image="/lovable-uploads/50a62bde-a2f5-4845-a3ff-5f70c0b4b68e.png"
            square={true}
          />
          <TeamMember 
            name="Guillermo Chain"
            role="Full Stack Engineer"
            location="VEN"
            image="/lovable-uploads/780ee1f3-50b3-4117-a3e2-70dac9c43c06.png"
            square={true}
          />
          <TeamMember 
            name="Franz Gatzke"
            role="Senior Software Engineer"
            location="GER"
            image="/lovable-uploads/5b7075a6-e799-4cc8-93d1-82790fdd0cc9.png"
            square={true}
          />
          <TeamMember 
            name="Erika Logie"
            role="UI/UX Designer"
            location="USA"
            placeholder={true}
            square={true}
          />
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
