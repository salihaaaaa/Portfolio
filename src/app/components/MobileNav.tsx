"use client";

import React, { useState } from "react";
import Link from "next/link";

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
        <nav className="w-full space-y-4 flex flex-col items-start">
          <Link href="/about" className="hover:text-teal-500">
            About
          </Link>
          <Link href="/skills" className="hover:text-teal-500">
            Skills
          </Link>
          <Link href="/projects" className="hover:text-teal-500">
            Projects
          </Link>
        </nav>
      )}
      
    </div>
  );
};

export default MobileNav;
