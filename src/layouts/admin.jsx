import { Outlet, useNavigate } from "react-router-dom";
import Footer from "../components/Dashboard/Footer";
import Sidenav from "../components/Dashboard/Sidenav";
import DashboardNavbar from "../components/Dashboard/Navbar";
import { useEffect, useState } from "react";
import { decodeToken } from "../_formats";

export default function AdminLayout() {
  const [openSidenav, setOpenSidenav] = useState(false);
  const sidenavType = "white";
  const navigate = useNavigate();

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

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token]);

  useEffect(() => {
    if (userData?.role !== "superadmin") {
      navigate("/");
    }
  }, [userData, navigate]);

  return (
    <div className="min-h-screen bg-blue-gray-50/50">
      <Sidenav
        profile={userData}
        sidenavType={sidenavType}
        openSidenav={openSidenav}
        setOpenSidenav={setOpenSidenav}
      />
      <div className="p-4 lg:ml-80">
        <DashboardNavbar
          profile={userData}
          openSidenav={openSidenav}
          setOpenSidenav={setOpenSidenav}
        />

        <Outlet />

        <div className="text-blue-gray-600">
          <Footer />
        </div>
      </div>
    </div>
  );
}
