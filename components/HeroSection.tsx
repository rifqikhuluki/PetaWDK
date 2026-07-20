"use client";

export default function HeroSection() {
  return (
    <header className="relative w-full h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      {/* Gambar Latar Belakang Cover */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.65)), url('/taman/tamanHortnesia.webp')`,
        }}
      />

      {/* Teks Konten Banner */}
      <div className="relative z-10 max-w-4xl mx-auto space-y-6 text-white px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight drop-shadow-md">
          Peta Wisata 
          <br />
          Wisata Dusun Kuliner
        </h1>
        <p className="text-lg md:text-2xl font-light text-slate-200 drop-shadow max-w-2xl mx-auto">
          Kawasan Destinasi Wisata Wisata Dusun Kuliner
        </p>

        <div className="pt-4 border-t border-white/20 max-w-xl mx-auto">
          <p className="text-xs md:text-sm font-medium tracking-widest uppercase text-emerald-400">
            UM-BBM TEMATIK INFORMATIKA 2026
          </p>
        </div>
      </div>

      {/* Indikator Panah Scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/70 animate-bounce flex flex-col items-center gap-1 text-xs">
        <span>Gulir ke bawah untuk menjelajah</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
    </header>
  );
}
