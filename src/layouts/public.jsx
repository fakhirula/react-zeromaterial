import { Outlet } from "react-router-dom";
import { NavbarSection } from "../components/Section/Navbar";
import FooterSection from "../components/Section/Footer";
import { useDecodeToken } from "../_formats";
import { useEffect, useState } from "react";

export default function PublicLayout() {
  const [userData, setUserData] = useState(null);
  const token = localStorage.getItem("accessToken");

  const decodedData = useDecodeToken(token);

  useEffect(() => {
    if (decodedData.success) {
      setUserData(decodedData.data);
    }
    else {
      console.error(decodedData.message);
      localStorage.removeItem("accessToken");
    }
  }, [decodedData]);

  return (
    <>
      <NavbarSection profile={userData} />
      <div className="container !mx-auto">
        <Outlet context={{ userData }} />
      </div>
      <FooterSection />
    </>
  );
}
