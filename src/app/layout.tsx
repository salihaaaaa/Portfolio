import type { Metadata } from "next";
import "./styles/globals.css";
import { crimson_Pro } from "@/app/components/fonts";
import DesktopNav from "./components/DesktopNav";
import MobileNav from "./components/MobileNav";

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
      <body className={`${crimson_Pro.className} antialiased`}>
        <div className="md:container md:mx-auto border border-slate-200 text-slate-500 h-full">
          <DesktopNav></DesktopNav>
          <MobileNav></MobileNav>
          <div className="md:p-10 md:m-2">{children}</div>
        </div>
      </body>
    </html>
  );
}
