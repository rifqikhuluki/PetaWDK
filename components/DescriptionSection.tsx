"use client";
import { useState, useEffect, useRef } from "react";

export default function DescriptionSection() {
  // Menambahkan properti 'name' pada tiap objek gambar
  const images = [
    {
      id: 1,
      src: "/wahana/crispa.webp",
      name: "Crispa",
    },
    {
      id: 2,
      src: "/wahana/morchella.webp",
      name: "Morchella",
    },
    {
      id: 3,
      src: "/wahana/truffle1.webp",
      name: "Truffle",
    },
    {
      id: 4,
      src: "/wahana/truffle2.webp",
      name: "Truffle",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const maxSteps = images.length - 3;

  const isHovered = useRef(false);

  const nextCarousel = () => {
    setCurrentIndex((prev) => (prev >= maxSteps ? 0 : prev + 1));
  };

  const prevCarousel = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxSteps : prev - 1));
  };

  // AUTOPLAY
  useEffect(() => {
    const playInterval = setInterval(() => {
      if (!isHovered.current) {
        nextCarousel();
      }
    }, 4000);

    return () => clearInterval(playInterval);
  }, [maxSteps]);

  return (
    <section className="w-full bg-white py-16 md:py-24 border-b border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-16 space-y-12">
        {/* KONTEN TEKS DESKRIPSI */}
        <div className="space-y-8">
          <h2 className="text-4xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight text-center md:text-left">
            Pesona Wisata Dusun Kuliner (WDK)
          </h2>
          <div className="text-slate-600 space-y-6 text-base md:text-lg font-light leading-relaxed text-justify md:text-left">
            <p>
              <strong className="font-semibold text-slate-800">
                Wisata Dusun Kuliner
              </strong>{" "}
              Wisata Dusun Kuliner (WDK) adalah destinasi wisata keluarga di Kota Batu yang menggabungkan keindahan alam, kuliner lokal, dan pengalaman wisata seru dalam satu tempat.
              Berlokasi di kawasan sejuk Bumiaji, WDK menghadirkan suasana taman yang asri dengan berbagai spot foto, area kuliner, hingga aktivitas wisata seperti Jeep Adventure, Petik Buah, dan Guest House yang nyaman untuk menginap.
            </p>
            <p>
              Di kawasan ini, pengunjung akan dimanjakan dengan beragam pilihan kuliner lezat yang disajikan dalam nuansa tradisional yang menenangkan. Seluruh area kuliner, taman, dan zona rekreasi di sini dirancang secara inklusif, sehingga sangat ramah dan menyenangkan untuk dinikmati oleh berbagai kalangan pengunjung, mulai dari anak-anak, remaja, hingga dewasa.
            </p>
            <p>
              Melalui peta interaktif di bawah ini, Anda dapat menjelajahi
              seluruh sudut Wisata Dusun Kuliner dengan sangat mudah. Peta ini akan
              memandu Anda menemukan berbagai titik wahana, taman, spot kuliner, serta fasilitas umum
              penunjang kenyamanan Anda, mulai dari mushola, toilet, hingga area parkir.
            </p>
          </div>
        </div>

        {/* CAROUSEL */}
        {/* <div className="space-y-6">
          <div className="relative w-full flex items-center">
            <div
              className="overflow-hidden w-full p-2"
              onMouseEnter={() => {
                isHovered.current = true;
              }}
              onMouseLeave={() => {
                isHovered.current = false;
              }}
            >
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentIndex * (typeof window !== "undefined" && window.innerWidth >= 768 ? 33.333 : 100)}%)`,
                }}
              >
                {images.map((img) => (
                  <div
                    key={img.id}
                    className="w-full md:w-1/3 flex-shrink-0 px-3"
                  >
                    <div className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300 p-1">
                      <div className="relative aspect-[4/3] bg-slate-100 rounded-xl overflow-hidden group/item">
                        <img
                          src={img.src}
                          alt={img.name}
                          className="w-full h-full object-cover pointer-events-none transition-transform duration-500 group-hover/item:scale-105"
                        />
                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none" />

                        <div className="absolute bottom-0 inset-x-0 p-4 z-10">
                          <p className="text-sm md:text-base font-bold text-white tracking-wide drop-shadow-sm">
                            {img.name}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={prevCarousel}
              className="absolute -left-4 md:-left-6 z-20 w-10 h-10 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center text-slate-600 hover:text-emerald-600 active:scale-90 transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>

            <button
              onClick={nextCarousel}
              className="absolute -right-4 md:-right-6 z-20 w-10 h-10 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center text-slate-600 hover:text-emerald-600 active:scale-90 transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>

          <div className="flex justify-center gap-2 pt-2">
            <button
              onClick={() => setCurrentIndex(0)}
              className={`h-2 rounded-full transition-all duration-350 ${currentIndex <= 1 ? "w-6 bg-emerald-600" : "w-2 bg-slate-200"}`}
              aria-label="Ke halaman awal"
            />
            <button
              onClick={() => setCurrentIndex(maxSteps)}
              className={`h-2 rounded-full transition-all duration-350 ${currentIndex > 1 ? "w-6 bg-emerald-600" : "w-2 bg-slate-200"}`}
              aria-label="Ke halaman akhir"
            />
          </div>
        </div> */}
      </div>
    </section>
  );
}