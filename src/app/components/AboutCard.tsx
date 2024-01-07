import React from "react";
import Image from "next/image";
import { About } from "../lib/definitions";

interface AboutCardProps {
  about: About;
}

const AboutCard: React.FC<AboutCardProps> = ({ about }) => {
  const { name, bio, imageUrl } = about;

  return (
    <div className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
      <Image
        src={imageUrl}
        alt={name}
        width={56}
        height={24}
        className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
      ></Image>

      <div className="text-center space-y-2 sm:text-left">
        <div className="space-y-0.5">
          <p className="text-lg text-black font-semibold">{name}</p>
          <p className="text-slate-500 font-medium">{bio}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
