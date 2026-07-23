"use client";
import { useState } from "react";

interface CardImageSliderProps {
  images: string[];
}

export default function CardImageSlider({ images }: CardImageSliderProps) {
  const [imgIndex, setImgIndex] = useState(0);
  
  // --- LOGIKA BARU: Limit awal foto yang di-load adalah 3 ---
  const [loadedLimit, setLoadedLimit] = useState(3);

  if (!images || images.length === 0) {
    return (
      <div className="w-full aspect-[16/10] bg-slate-200 flex items-center justify-center text-slate-400">
        Tidak ada gambar
      </div>
    );
  }

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setImgIndex((prev) => {
      const next = prev === images.length - 1 ? 0 : prev + 1;
      
      // --- LOGIKA BARU: Naikkan limit jika mendekati ujung preloader ---
      // Jika geser ke indeks 1 (foto 2), pastikan foto 4 (indeks 3) terload
      if (next + 2 >= loadedLimit) {
        setLoadedLimit(Math.min(images.length, next + 3)); // +3 karena batas slice exclusive
      }
      return next;
    });
  };

  return (
    <div className="relative w-full aspect-[16/11] bg-slate-100 overflow-hidden group/slider">
      
      {/* Gambar Aktif yang Terlihat */}
      <img
        src={images[imgIndex]}
        alt="Dokumentasi Spot"
        className="w-full h-full object-cover select-none pointer-events-none"
      />

      {/* --- LOGIKA BARU: Preloader Tersembunyi (Hidden) --- */}
      {/* Gambar ini dirender di background agar browser mendownload & meletakannya di cache */}
      <div className="hidden">
        {images.slice(0, loadedLimit).map((src, idx) => (
          <img key={idx} src={src} alt="preload" loading="eager" />
        ))}
      </div>

      {/* Tombol Panah Kanan Melayang (Hanya muncul jika gambar > 1) */}
      {images.length > 1 && (
        <button
          onClick={nextSlide}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200/50 shadow flex items-center justify-center text-slate-700 hover:bg-white active:scale-90 transition-all opacity-0 group-hover/slider:opacity-100"
          aria-label="Next image"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-3.5 h-3.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      )}

      {/* Indikator Titik Bulat Putih Melayang di Bawah Tengah Gambar */}
      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex gap-1.5 bg-black/30 backdrop-blur-[2px] px-2.5 py-1 rounded-full">
          {images.map((_, idx) => (
            <div
              key={idx}
              className={`h-1.5 rounded-full transition-all ${
                imgIndex === idx ? "w-3 bg-white" : "w-1.5 bg-white/50"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}