import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import PublicLayout from "./layouts/public";
import AdminLayout from "./layouts/admin";
import Home from "./pages/public/index.jsx";
import About from "./pages/public/about/index.jsx";
import Solution from "./pages/public/solution/index.jsx";
import Donate from "./pages/public/donate/index.jsx";
import Forum from "./pages/public/forum/index.jsx";
import Gallery from "./pages/public/gallery/index.jsx";
import Login from "./pages/auth/login/index.jsx";
import Register from "./pages/auth/register/index.jsx";
import Error from "./components/Section/NotFound/index.jsx";
import { Users } from "./pages/admin/users/index.jsx";
import { Campaigns } from "./pages/admin/campaigns/index.jsx";
import { Testimonies } from "./pages/admin/testimonies/index.jsx";
import { DonationTypes } from "./pages/admin/donation_types/index.jsx";
import { PaymentMethods } from "./pages/admin/payment_methods/index.jsx";
import { Plants } from "./pages/admin/plants/index.jsx";
import { Donations } from "./pages/admin/donations/index.jsx";
import Campaign from "./pages/public/campaign/index.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/kampanye" element={<Campaign />} />
          <Route path="/tentang" element={<About />} />
          <Route path="/solusi" element={<Solution />} />
          <Route path="/donasi" element={<Donate />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/galeri" element={<Gallery />} />

          <Route path="/error" element={<Error />} />
        </Route>

        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* =================================================================== */}
        {/* Admin Routes */}
        <Route path="dashboard/*" element={<AdminLayout />}>
          {/* <Route path="home" element={<AdminLayout />} /> */}
          <Route path="users" element={<Users />} />
          <Route path="payment_methods" element={<PaymentMethods />} />
          <Route path="donation_types" element={<DonationTypes />} />
          <Route path="plants" element={<Plants />} />


          <Route path="testimonies" element={<Testimonies />} />
          <Route path="donations" element={<Donations />} />
          <Route path="campaigns" element={<Campaigns />} />

          <Route path="profile" element="" />
        </Route>


        {/* <Route path="*" element={<Navigate to={"/dashboard/home"} />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
