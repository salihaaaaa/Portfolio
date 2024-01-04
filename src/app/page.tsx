import DesktopNav from "./components/DesktopNav";
import MobileNav from "./components/MobileNav";

export default function Home() {
  return (
    <div>
      <DesktopNav></DesktopNav>
      <MobileNav></MobileNav>
      <h1>Home page</h1>
    </div>
  );
}
