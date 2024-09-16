import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';
import Solusi from './pages/Solusi';
import Donasi from './pages/Donasi';
import Forum from './pages/Forum';
import Galeri from './pages/Galeri';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tentang" element={<About />} />
        <Route path="/solusi" element={<Solusi />} />
        <Route path="/donasi" element={<Donasi />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/galeri" element={<Galeri />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;