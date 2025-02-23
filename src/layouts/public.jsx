import { Outlet } from "react-router-dom";
import { NavbarSection } from "../components/Section/Navbar";
import FooterSection from "../components/Section/Footer";

export default function PublicLayout() {
  return (
    <>
      <NavbarSection />
      <div className="container !mx-auto">
        <Outlet />
      </div>
      <FooterSection />
    </>
  );
}
