import React from "react";
import CustomLink from "./CustomLink";

const DesktopNav = () => {
  return (
    <nav className="hidden md:flex md:flex-wrap justify-center rounded-full space-x-4 mt-7 border w-1/2 mx-auto shadow-md p-2">
      <CustomLink href="/">Home</CustomLink>
      <CustomLink href="/about">About</CustomLink>
      <CustomLink href="/skills">Skills</CustomLink>
      <CustomLink href="/projects">Projects</CustomLink>
    </nav>
  );
};

export default DesktopNav;
