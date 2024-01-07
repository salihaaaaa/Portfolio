import React from "react";
import Link from "next/link";

interface CustomLinkProps {
    href: string;
    children: React.ReactNode;
  }

const CustomLink: React.FC<CustomLinkProps> = ({ href, children }) => {
  return (
    <Link href={href} className="text-teal-500 p-2 m-1 text-white">
      {children}
    </Link>
  );
};

export default CustomLink;
