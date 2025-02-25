import { Outlet } from "react-router-dom";
import Footer from "../components/Dashboard/Footer";
import Sidenav from "../components/Dashboard/Sidenav";
import DashboardNavbar from "../components/Dashboard/Navbar";
import { useState } from "react";

export default function AdminLayout() {
  const [openSidenav, setOpenSidenav] = useState(false);

  const sidenavType = "white";

  return (
    <div className="min-h-screen bg-blue-gray-50/50">
      <Sidenav sidenavType={sidenavType} openSidenav={openSidenav} setOpenSidenav={setOpenSidenav} />
      <div className="p-4 lg:ml-80">
        <DashboardNavbar openSidenav={openSidenav} setOpenSidenav={setOpenSidenav} />

        <Outlet />

        <div className="text-blue-gray-600">
          <Footer />
        </div>
      </div>
    </div>
  );
}
