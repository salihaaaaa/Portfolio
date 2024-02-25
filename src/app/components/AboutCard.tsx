import React from "react";
import Image from "next/image";
import { About } from "../lib/definitions";

interface AboutCardProps {
  about: About;
}

const AboutCard: React.FC<AboutCardProps> = ({ about }) => {
  const { name, role, email, linkedin, github } = about;

  return (
    <div className="p-8 mb-2 flex flex-wrap md:flex-nowrap justify-between items-center">
      <div className="flex-grow">
        <p className="text-xl md:text-2xl text-black font-semibold mb-4 italic">
          {name}
        </p>
        <p className="font-bold mb-4">{role}</p>
        <p className="text-sm mb-2">{email}</p>
        <p className="text-sm mb-2">{linkedin}</p>
        <p className="text-sm">{github}</p>
      </div>
    </div>
  );
};

export default AboutCard;
