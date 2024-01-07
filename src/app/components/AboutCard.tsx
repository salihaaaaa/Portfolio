import React from "react";
import Image from "next/image";
import { About } from "../lib/definitions";

interface AboutCardProps {
  about: About;
}

const AboutCard: React.FC<AboutCardProps> = ({ about }) => {
  const { name, bio, imageUrl } = about;

  return (
    <div className="p-8 mb-2 max-w-sm mx-auto rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
      <Image
        src={imageUrl}
        alt={name}
        width={56}
        height={56}
        className="block mx-auto rounded-full sm:mx-0 sm:shrink-0 bg-slate-300"
      ></Image>

      <div className="text-center space-y-2 sm:text-left">
        <div className="space-y-0.5">
          <p className="text-lg text-black font-semibold">{name}</p>
          <p className="font-medium">{bio}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
