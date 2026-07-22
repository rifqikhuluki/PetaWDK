"use client";
import { useState } from "react";

interface CardImageSliderProps {
  images: string[];
}

export default function CardImageSlider({ images }: CardImageSliderProps) {
  const [imgIndex, setImgIndex] = useState(0);
  
  // State untuk menyimpan batas maksimum index gambar yang dirender/download 
  // Nilai 2 berarti merender index 0, 1, dan 2 (3 foto pertama).
  const [maxLoaded, setMaxLoaded] = useState(2); 

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
      const nextIndex = prev === images.length - 1 ? 0 : prev + 1;
      
      // Update sliding window batas gambar: 
      // Saat digeser ke foto 2 (index 1), maka foto 4 (index 3) akan terender & otomatis terdownload.
      setMaxLoaded((prevMax) => Math.min(images.length - 1, Math.max(prevMax, nextIndex + 2)));
      
      return nextIndex;
    });
  };

  return (
    <div className="relative w-full aspect-[16/11] bg-slate-100 overflow-hidden group/slider">
      
      {/* Merender tag image yang diizinkan oleh state maxLoaded */}
      {images.map((imgSrc, idx) => {
        // Jangan render/download gambar yang melebihi batas "window" saat ini
        if (idx > maxLoaded) return null;

        return (
          <img
            key={idx}
            src={imgSrc}
            alt={`Dokumentasi Spot ${idx + 1}`}
            className={`absolute inset-0 w-full h-full object-cover select-none pointer-events-none transition-opacity duration-500 ${
              imgIndex === idx ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          />
        );
      })}

      {/* Tombol Panah Kanan Melayang (Hanya muncul jika gambar > 1) */}
      {images.length > 1 && (
        <button
          onClick={nextSlide}
          // z-20 agar posisi tombol selalu di atas gambar yang dirender secara bertumpuk
          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200/50 shadow flex items-center justify-center text-slate-700 hover:bg-white active:scale-90 transition-all opacity-0 group-hover/slider:opacity-100"
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
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-1.5 bg-black/30 backdrop-blur-[2px] px-2.5 py-1 rounded-full">
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