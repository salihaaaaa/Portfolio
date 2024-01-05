import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-between p-5">
      <div className=" p-2 md:p-10">
        <h1 className="text-4xl font-bold">
          Hello! <span className="block mt-1 md:mt-2">I'm Salihah</span>{" "}
        </h1>
        <p className="mt-4 text-xl text-justify">
          I'm on a learning adventure with Next.js, exploring the world of web
          development. I'm on a learning adventure with Next.js, exploring the
          world of web development. I'm on a learning adventure with Next.js,
          exploring the world of web development.
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

export default page;
