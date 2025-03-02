import { Outlet } from "react-router-dom";
import { NavbarSection } from "../components/Section/Navbar";
import FooterSection from "../components/Section/Footer";
import { decodeToken } from "../_formats";

export default function PublicLayout() {
  const token = localStorage.getItem("accessToken");
  let userData = null;

  if (token) {
    try {
      userData = decodeToken(token);
    } catch (error) {
      console.error("Failed to decode token:", error);
      userData = null;
    }
  }

  return (
    <>
      <NavbarSection profile={userData} />
      <div className="container !mx-auto">
        <Outlet />
      </div>
      <FooterSection />
    </>
  );
}
