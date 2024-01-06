import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="p-2 md:p-10">
      <h2 className="text-3xl font-bold p-2 italic">Skills</h2>
      <div className="p-2 md:p-5 flex flex-row items-center space-x-10">
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
      </div>
    </div>
  );
};

export default page;
