import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.css";
import DesktopNav from "./components/DesktopNav";
import MobileNav from "./components/MobileNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Salihah",
  description: "Front end developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="md:container md:mx-auto border border-slate-200 h-screen">
          <DesktopNav></DesktopNav>
          <MobileNav></MobileNav>
          <div className="p-5 md:m-2">{children}</div>
        </div>
      </body>
    </html>
  );
}
