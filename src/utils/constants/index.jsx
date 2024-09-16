import imgCamp1 from '../../components/Assets/img/campaign/radoslaw-prekurat-ubud-unsplash.jpg';
import imgCamp2 from '../../components/Assets/img/campaign/fikri-rasyid-polusi-unsplash.jpg';
import imgCamp3 from '../../components/Assets/img/campaign/sutirta-budiman-mangrove-unsplash.jpg';
import imgCamp4 from '../../components/Assets/img/campaign/ocg-saving-the-ocean-sampah-unsplash.jpg';

import imgNews1 from '../../components/Assets/img/gallery/dhiemas-afif-febriyan-4-unsplash.jpg';
import imgNews2 from '../../components/Assets/img/gallery/ocg-saving-the-ocean-2-unsplash.jpg';
import imgNews3 from '../../components/Assets/img/gallery/refhad-1-unsplash.jpg';
import imgNews4 from '../../components/Assets/img/gallery/alvian-hasby-3-unsplash.jpg';


export const statsData = [
  { id: 1, name: 'Pohon tertanam', value: '32.5K' },
  { id: 2, name: 'Donasi terkumpul', value: '15.6M' },
  { id: 3, name: 'Aksi bersama', value: '500+' },
  { id: 4, name: 'Kampanye Hijau', value: '1.2K' },
]

export const brandsData = [
  { 
    id: 1, 
    name: 'coinbase.com', 
    img: 'https://www.material-tailwind.com/logos/logo-coinbase.svg', 
    quote: ``
  },
  { 
    id: 2, 
    name: 'amazon.com', 
    img: 'https://www.material-tailwind.com/logos/logo-amazon.svg', 
    quote: ``
  },
  { 
    id: 3, 
    name: 'netflix.com', 
    img: 'https://www.material-tailwind.com/logos/logo-netflix.svg', 
    quote: `It have broadened our horizons and helped me advance my career. The community is incredibly supportive.`
  },
  { 
    id: 4, 
    name: 'spotify.com', 
    img: 'https://www.material-tailwind.com/logos/logo-spotify.svg', 
    quote: ``
  },
  { 
    id: 5, 
    name: 'google.com', 
    img: 'https://www.material-tailwind.com/logos/logo-google.svg', 
    quote: ``
  },
]

export const campaignsData = [
    {
      id: 1,
      title: `Peduli Ubud: Hilangnya Ekosistem Monyet`,
      image: imgCamp1,
      progress: 22,
      donations: 0,
      trees: 250,
      daysLeft: 13,
      campaigner: `GenerasiHijau`,
    },
    {
      id: 2,
      title: `Car Free Day: Jakarta Bebas Polusi`,
      image: imgCamp2,
      progress: 9,
      donations: 1.10,
      trees: 120,
      daysLeft: 23,
      campaigner: `GenerasiHijau`,
    },
    {
      id: 3,
      title: `Gerakan Mangrove: Selamatkan Masa Depan`,
      image: imgCamp3,
      progress: 56,
      donations: 43.1,
      trees: 570,
      daysLeft: 6,
      campaigner: `GenerasiHijau`,
    },
    {
      id: 4,
      title: `GHxZW: 30 Days Zero Waste Challenge`,
      image: imgCamp4,
      progress: 73,
      donations: 12.2,
      trees: 124,
      daysLeft: 2,
      campaigner: `GenerasiHijau`,
    },
    // ... other campaigns
];


export const newsData = [
    {
      id: 1,
      title: `Potret Kampung Terapung di Sumedang`,
      image: imgNews1,
      date: `June 30, 2024`,
      views: `2.9K`,
      category: `Convenire`,
    },
    {
      id: 2,
      title: `Hari Peduli Sampah Nasional: Banten Pride`,
      image: imgNews2,
      date: `Maret 12, 2024`,
      views: `1.2K`,
      category: `Convenire`,
    },
    {
      id: 3,
      title: `Bukan Sekedar 'Tukang Sampah'`,
      image: imgNews3,
      date: `Febuari 28, 2024`,
      views: `2.3K`,
      category: `Convenire`,
    },
    {
      id: 4,
      title: `Permasalahannya bukan di plastik, tapi kita, manusia`,
      image: imgNews4,
      date: `June 15, 2024`,
      views: `1.3K`,
      category: `Convenire`,
    },
  // ... other news data
];


export const teamsData = [
  { 
    id: 1,
    img: `https://www.material-tailwind.com/img/avatar1.jpg`,
    name: "Fakhirul Akmal",
    title: "Co-Founder",
  },
  { 
    id: 2,
    img: `https://www.material-tailwind.com/img/avatar2.jpg`,
    name: "Ryan Samuel",
    title: "Co-Founder",
  },
  { 
    id: 3,
    img: `https://www.material-tailwind.com/img/avatar5.jpg`,
    name: "Nora Hazel",
    title: "UI/UX Designer",
  },
  { 
    id: 4,
    img: `https://www.material-tailwind.com/img/avatar4.jpg`,
    name: "Otto Gonzalez",
    title: "Marketing Specialist",
  },
];

export const faqsData = [
  {
    id: 1,
    title: "Apa itu 0Material?",
    desc: "0Material adalah sebuah gerakan komunitas yang bertujuan untuk menciptakan gaya hidup yang ramah lingkungan. Kami mendorong anggota untuk mengurangi, menggunakan kembali, dan mendaur ulang segala sesuatu, serta memilih produk dan layanan yang berkelanjutan.",
  },
  {
    id: 2,
    title: "Apa tujuan 0Material?",
    desc: "Tujuan utama kami adalah melindungi lingkungan dan menciptakan masa depan yang lebih baik bagi generasi mendatang.",
  },
  {
    id: 3,
    title: "Apa saja kegiatan 0Material?",
    desc: "Kami mengadakan berbagai kegiatan seperti workshop, kampanye, dan gotong royong untuk meningkatkan kesadaran akan pentingnya gaya hidup 0 sampah.",
  },
];

export const galleriesData = [
  { 
    id: 1, 
    name: '', 
    img: 'https://images.unsplash.com/photo-1543257605-e3ab6ae63fa4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    size: '500x300',
  },
  { 
    id: 2, 
    name: '', 
    img: 'https://images.unsplash.com/photo-1551855350-c86caeaf8707?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    size: '500x300',
  },
  { 
    id: 3, 
    name: '', 
    img: 'https://plus.unsplash.com/premium_photo-1663041617652-ce1550aa9fe7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
    size: '500x360',
  },
  { 
    id: 4, 
    name: '', 
    img: 'https://images.unsplash.com/photo-1598335624134-5bceb5de202d?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    size: '500x300',
  },
  { 
    id: 5, 
    name: '', 
    img: 'https://images.unsplash.com/photo-1437914983566-976d85602771?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    size: '500x300',
  },
  { 
    id: 6, 
    name: '', 
    img: 'https://images.unsplash.com/photo-1558119046-bf5375f0a4af?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
    size: '500x360',
  },
]