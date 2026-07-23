"use client";

export default function Footer() {
  return (
    <footer className="w-full bg-white text-slate-600 p-8 md:p-12 border-t border-slate-200 shadow-sm relative z-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        {/* BAGIAN KIRI: LOGO & COPYRIGHT */}
        <div className="flex flex-col gap-4 sm:flex items-center">
          {/* 3 Logo Sejajar */}
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 bg-slate-100 rounded-full  overflow-hidden flex items-center justify-center">
              <img
                src="/Logo_UM.webp"
                alt="Logo UM"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="w-14 h-14 bg-slate-100 rounded-full  overflow-hidden flex items-center justify-center">
              <img
                src="/Logo_Tulungrejo.webp"
                alt="Logo Tulungrejo"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="w-14 h-14 bg-slate-100 rounded-full  overflow-hidden flex items-center justify-center">
              <img
                src="/Logo_WDK.webp"
                alt="Logo Tulungrejo"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="w-14 h-14 bg-slate-100 rounded-full  overflow-hidden  flex items-center justify-center">
              <img
                src="/Logo_UM_BBM.webp"
                alt="Logo KKN"
                className="h-full w-full object-contain"
              />
            </div>
          </div>

          {/* Copyright */}
          <div className="text-xs font-mono text-slate-400 tracking-wide">
            &copy; 2026. All rights reserved.
          </div>
        </div>

        {/* DESKRIPSI KREDIT PROKER */}
        <div className="max-w-md flex flex-col gap-2 border-t border-slate-100 md:border-t-0 pt-6 md:pt-0">
          <h4 className="text-black font-bold uppercase tracking-wider flex items-center gap-2">
            Kredit Pengembang
          </h4>
          <p className="text-xs text-slate-500 leading-relaxed text-justify font-light">
            Peta wisata interaktif ini merupakan hasil program kerja (Proker){" "}
            <strong className="text-slate-800 font-semibold">
              UM-BBM Tematik Teknik Informatika 2026
            </strong>
            . Dikembangkan sebagai media informasi digital untuk pemetaan
            fasilitas penunjang serta seluruh spot wisata Mikutopia.
          </p>
        </div>

        <div className="w-full flex flex-row items-center border-t border-slate-100 pt-3 mt-1 gap-5">
          {/* Instagram KKN*/}
          <a
            href="https://www.instagram.com/umbbm.desatulungrejo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[11px] sm:text-xs font-medium text-slate-600 hover:text-black transition-colors group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-slate-500 group-hover:text-black transition-colors shrink-0"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            <span className="truncate">@umbbm.desatulungrejo</span>
          </a>

          {/* TikTok KKN */}
          <a
            href="https://www.tiktok.com/@umbbmdesatulungrejo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[11px] sm:text-xs font-medium text-slate-600 hover:text-black transition-colors group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-slate-500 group-hover:text-black transition-colors shrink-0"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 1 1-5.2-1.74 2.89 2.89 0 0 1 2.31-2.82V7.63a6.33 6.33 0 1 0 6.34 6.33V9a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.43z" />
            </svg>
            <span className="truncate">@umbbmdesatulungrejo</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
