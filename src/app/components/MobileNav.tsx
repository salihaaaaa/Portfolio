"use client";

import React, { useState } from "react";
import CustomLink from "./CustomLink";

const MobileNav = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="md:hidden p-2 pr-7 mt-7 text-lg flex flex-row-reverse items-start">
      {/* Change menu button -> icon */}
      <button onClick={toggleMenu}>|||</button>
      {isMenuOpen && (
        <nav className="w-full space-y-2 flex flex-col items-start">
          <CustomLink href="/">Home</CustomLink>
          <CustomLink href="/about">About</CustomLink>
          <CustomLink href="/skills">Skills</CustomLink>
          <CustomLink href="/projects">Projects</CustomLink>
        </nav>
      )}
    </div>
  );
};

export default MobileNav;
