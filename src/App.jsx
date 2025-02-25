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
import NotFound from "./components/Section/NotFound/index.jsx";
import { Users } from "./pages/admin/users/index.jsx";
import { Campaigns } from "./pages/admin/campaigns/index.jsx";
import { Testimonies } from "./pages/admin/testimonies/index.jsx";
import { DonationTypes } from "./pages/admin/donation_types/index.jsx";
import { PaymentMethods } from "./pages/admin/payment_methods/index.jsx";
import { Plants } from "./pages/admin/plants/index.jsx";
import { Donations } from "./pages/admin/donations/index.jsx";
import Campaign from "./pages/public/campaign/index.jsx";
import CreatePaymentMethod from "./pages/admin/payment_methods/create.jsx";
import EditPaymentMethod from "./pages/admin/payment_methods/edit.jsx";
import CreateDonationType from "./pages/admin/donation_types/create.jsx";
import EditDonationType from "./pages/admin/donation_types/edit.jsx";
import Dashboard from "./pages/admin/index.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route path="kampanye" element={<Campaign />} />
          <Route path="tentang" element={<About />} />
          <Route path="solusi" element={<Solution />} />
          <Route path="donasi" element={<Donate />} />
          <Route path="forum" element={<Forum />} />
          <Route path="galeri" element={<Gallery />} />

          <Route path="error" element={<Error />} />
        </Route>

        {/* Auth Routes */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

        {/* =================================================================== */}
        {/* Admin Routes */}
        <Route path="dashboard" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />

          <Route path="users">
            <Route index element={<Users />} />
          </Route>

          <Route path="payment_methods">
            <Route index element={<PaymentMethods />} />
            <Route path="create" element={<CreatePaymentMethod />} />
            <Route path="edit/:id" element={<EditPaymentMethod />} />
          </Route>

          <Route path="donation_types">
            <Route index element={<DonationTypes />} />
            <Route path="create" element={<CreateDonationType />} />
            <Route path="edit/:id" element={<EditDonationType />} />
          </Route>

          <Route path="plants">
            <Route index element={<Plants />} />
            <Route path="create" element="" />
            <Route path="edit/:id" element="" />
          </Route>

          <Route path="testimonies">
            <Route index element={<Testimonies />} />
          </Route>

          <Route path="donations">
            <Route index element={<Donations />} />
            <Route path="create" element="" />
          </Route>

          <Route path="campaigns">
            <Route index element={<Campaigns />} />
            <Route path="create" element="" />
            <Route path="edit/:id" element="" />
          </Route>

          <Route path="profile" element="" />
        </Route>

        {/* NotFound Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
