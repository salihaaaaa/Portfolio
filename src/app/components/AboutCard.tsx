import React from "react";
import Image from "next/image";
import { About } from "../lib/definitions";

interface AboutCardProps {
  about: About;
}

const AboutCard: React.FC<AboutCardProps> = ({ about }) => {
  const { name, role, bio, imageUrl } = about;

  return (
    <div className="p-8 mb-2 flex flex-wrap md:flex-nowrap justify-between items-center mt-5">
      <div className="flex-shrink-0 mb-4 md:mb-0">
        <Image
          src={imageUrl}
          alt={name}
          width={56}
          height={56}
          className="rounded-full md:mr-10 bg-slate-300"
        />
      </div>

      <div className="flex-grow">
        <p className="text-xl md:text-2xl text-black font-semibold mb-4 italic">
          {name}
        </p>
        <p className="font-bold mb-4">{role}</p>
        <p className="text-justify">{bio}</p>
      </div>
    </div>
  );
};

export default AboutCard;
