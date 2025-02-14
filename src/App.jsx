import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import PublicLayout from './layouts/public';
import AdminLayout from './layouts/admin';
import Home from './pages/public/index.jsx';
import About from './pages/public/about/index.jsx';
import Solution from './pages/public/solution/index.jsx';
import Donate from './pages/public/donate/index.jsx';
import Forum from './pages/public/forum/index.jsx';
import Gallery from './pages/public/gallery/index.jsx';
import Login from './pages/auth/login/index.jsx';
import Register from './pages/auth/register/index.jsx';
import Error from './components/Section/Error/index.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        {/* Public Routes */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
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
      
        {/* Admin Routes */}
        <Route path="admin" element={<AdminLayout />}>
            {/* =================================================================== */}
        </Route>
      
      </Routes>
    </BrowserRouter>
  );
}