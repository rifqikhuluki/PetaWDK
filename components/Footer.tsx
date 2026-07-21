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
      </div>
    </footer>
  );
}
