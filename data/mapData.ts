export interface HTMItem {
  label: string;
  price: string;
}

export interface Spot {
  id: string;
  name: string;
  description: string;
  coordinates: [number, number]; // [Latitude, Longitude]
  gmapsUrl: string;
  zoom: number;
  category: "wahana" | "caffe" | "fasilitas";
  images: string[];
}

export const spotsData: Spot[] = [
  {
    id: "1",
    name: "Loket Tiket & Informasi",
    description:
      "Tempat pembelian dan penukaran tiket sekaligus pusat informasi mengenai wahana, fasilitas, jadwal operasional, dan layanan pengunjung di Mikutopia.",
    coordinates: [-7.8095355964464845, 112.5299340353814],
    gmapsUrl: "https://maps.app.goo.gl/bKxJBtrym43jegBF7",
    category: "fasilitas",
    zoom: 21,
    images: ["/wahana/crispa.webp"],
  },
  {
    id: "2",
    name: "Ostreatus – Istana Balon",
    description:
      "Wahana bermain berbentuk istana balon yang menawarkan aktivitas melompat dan bergerak dengan suasana ceria bagi anak-anak.",
    coordinates: [-7.808914086012019, 112.52973078290046],
    gmapsUrl: "https://maps.app.goo.gl/RhDhZXw5EtzYPEFq7",
    category: "wahana",
    zoom: 21,
    images: ["/wahana/crispa.webp"],
  },
  {
    id: "3",
    name: "Cafe Enoki",
    description:
      "Tempat bersantai yang menyediakan berbagai pilihan makanan dan minuman bagi pengunjung.",
    coordinates: [-7.809140202217053, 112.52985988238873],
    gmapsUrl: "https://maps.app.goo.gl/XhjKX1VHWVrxbtVq7",
    category: "caffe",
    zoom: 21,
    images: ["/wahana/crispa.webp"],
  },
];
