import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="p-5 md:p-10">
      <h2 className="text-3xl font-bold p-2 italic">Skills</h2>
      <div className="p-1 md:p-5 flex flex-wrap flex-row justify-start items-center space-x-10">
        <Image
          src="/react.png"
          alt={"React icon"}
          width={64}
          height={64}
        ></Image>
        <Image
          src="/nextjs.png"
          alt={"Nextjs icon"}
          width={64}
          height={64}
        ></Image>
        <Image
          src="/typescript.png"
          alt={"Typescript icon"}
          width={64}
          height={64}
        ></Image>
        <Image
          src="/tailwind.png"
          alt={"Tailwind icon"}
          width={64}
          height={64}
        ></Image>
        <Image
          src="/vercel.png"
          alt={"Vercel icon"}
          width={64}
          height={64}
        ></Image>
        <Image src="/git.png" alt={"Git icon"} width={64} height={64}></Image>
      </div>
    </div>
  );
};

export default page;
