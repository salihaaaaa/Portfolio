import React from "react";
import Link from "next/link";

interface ButtonLinkProps {
    href: string;
    children: React.ReactNode;
  }

const ButtonLink: React.FC<ButtonLinkProps> = ({ href, children }) => {
  return (
    <Link href={href} className="bg-teal-500 rounded-full p-2 m-1 text-white">
      {children}
    </Link>
  );
};

export default ButtonLink;
