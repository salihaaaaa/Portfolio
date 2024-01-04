import Link from "next/link";
import React from "react";

const DesktopNav = () => {
  return (
    <nav className="hidden md:flex md:flex-wrap justify-center p-2 rounded-full space-x-4 mt-7 font-semibold border w-1/3 mx-auto shadow-md">
      <Link href="/about" className="hover:text-teal-500">About</Link>
      <Link href="/skills" className="hover:text-teal-500">Skills</Link>
      <Link href="/projects" className="hover:text-teal-500">Projects</Link>
    </nav>
  );
};

export default DesktopNav;
