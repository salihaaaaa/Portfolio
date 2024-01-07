import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-between p-2 mb-2">
      <div className=" p-2 md:p-10">
        <h1 className="text-4xl font-bold italic ">
          Hello! <span className="block mt-1 md:mt-2">I am Salihah</span>{" "}
        </h1>
        <p className="mt-4 text-justify">
          A Front-End Web Developer based in Malaysia. I am on exciting journey
          learning Next.js and TailwindCSS while building this portfolio.
          Passionate about web development.
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
