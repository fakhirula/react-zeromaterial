import { Outlet } from "react-router-dom";
import { NavbarSection } from "../components/Section/Navbar";
import FooterSection from "../components/Section/Footer";
import { decodeToken } from "../_formats";

export default function PublicLayout() {
  const profile = decodeToken(localStorage.getItem("accessToken"));

  return (
    <>
      <NavbarSection profile={profile} />
      <div className="container !mx-auto">
        <Outlet />
      </div>
      <FooterSection />
    </>
  );
}
