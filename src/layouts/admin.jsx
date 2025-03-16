import { Outlet, useNavigate } from "react-router-dom";
import Footer from "../components/Dashboard/Footer";
import Sidenav from "../components/Dashboard/Sidenav";
import DashboardNavbar from "../components/Dashboard/Navbar";
import { useEffect, useState } from "react";
import { useDecodeToken } from "../_formats";

export default function AdminLayout() {
  const [openSidenav, setOpenSidenav] = useState(true);
  const sidenavType = "white";
  const navigate = useNavigate();

  const [userData, setUserData] = useState(null);
  const token = localStorage.getItem("accessToken");

  const decodedData = useDecodeToken(token);

  useEffect(() => {
    if (!token || !decodedData || !decodedData.success) {
      navigate("/login");
    }
  }, [token, decodedData, navigate]);
  
  useEffect(() => {
    const role = decodedData?.data?.role;
    if (role !== "superadmin" && role !== undefined) {
      navigate("/");
    }
  }, [decodedData, navigate]);

  useEffect(() => {
    if (decodedData.success) {
      setUserData(decodedData.data);
    } else {
      console.error(decodedData.message);
      localStorage.removeItem("accessToken");
    }
  }, [decodedData]);

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

        <Outlet context={{ userData }} />

        <div className="text-blue-gray-600">
          <Footer />
        </div>
      </div>
    </div>
  );
}
