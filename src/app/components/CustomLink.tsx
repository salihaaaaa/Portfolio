import React from "react";
import Link from "next/link";

interface CustomLinkProps {
    href: string;
    children: React.ReactNode;
  }

const CustomLink: React.FC<CustomLinkProps> = ({ href, children }) => {
  return (
    <Link href={href} className="m-1 hover:text-teal-500 font-semibold">
      {children}
    </Link>
  );
};

export default CustomLink;
