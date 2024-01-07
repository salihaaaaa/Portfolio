import React from "react";
import Image from "next/image";
import portfolioData from "../lib/portfolio-data";

const About = () => {
  const about = portfolioData.about;

  return (
    <div className="flex flex-col-reverse md:flex-row justify-between p-2 mb-2">
      <div className=" p-2 md:p-10">
        <h1 className="text-4xl font-bold italic text-teal-500">
          {about.name}
        </h1>
        <p className="mt-4 text-justify md:pl-10">
          {about.bio}
        </p>
      </div>
      <div className="p-2 md:p-10 flex flex-col items-center">
        <Image
          src="/gambar.png"
          alt={"Gambar"}
          width={56}
          height={56}
          className="block md:hidden"
        ></Image>
      </div>
    </div>
  );
};

export default About;
