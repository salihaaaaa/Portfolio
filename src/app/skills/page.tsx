import React from "react";
import { josefin_Sans } from "../components/fonts";

const page = () => {
  return (
    <div className="p-2 md:p-10">
      <h2 className={`${josefin_Sans.className} text-3xl font-bold`}>Skills</h2>
      <div className="flex flex-wrap flex-col md:flex-row justify-evenly p-1">
        <div
          className={`${josefin_Sans.className} m-1 p-2 text-xl font-bold rounded shadow-md`}
        >
          Front-End Development
        </div>
        <div
          className={`${josefin_Sans.className} m-1 p-2 text-xl font-bold rounded shadow-md`}
        >
          Back-End Development
        </div>
        <div
          className={`${josefin_Sans.className} m-1 p-2 text-xl font-bold rounded shadow-md`}
        >
          Version Control
        </div>
        <div
          className={`${josefin_Sans.className} m-1 p-2 text-xl font-bold rounded shadow-md`}
        >
          Development Tools
        </div>
        <div
          className={`${josefin_Sans.className} m-1 p-2 text-xl font-bold rounded shadow-md`}
        >
          Testing
        </div>
      </div>
    </div>
  );
};

export default page;
