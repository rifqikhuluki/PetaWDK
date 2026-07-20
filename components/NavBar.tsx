"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 h-16 md:h-20 bg-white backdrop-blur-md border-b border-slate-100 z-50 px-4 md:px-8 flex items-center justify-between shadow-sm">
      {/* Tombol Kembali */}
      <div>
        <Link
          href="/"
          className="group flex items-center gap-1.5 md:gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-slate-50 hover:bg-slate-100 text-slate-600 hover:text-slate-900 rounded-full border border-slate-200 transition-all duration-300 shadow-sm"
        >
          <span className="text-base md:text-lg transition-transform duration-300 group-hover:-translate-x-1">←</span>
          <span className="font-medium text-xs md:text-sm">Kembali</span>
        </Link>
      </div>

      {/* Spacer agar logo tetap di kanan */}
      <div className="flex-1"></div>

      {/* Logo */}
      <div className="flex items-center gap-2 md:gap-5">
        <Link
          href="/"
          className="flex items-center hover:opacity-90 transition-opacity cursor-pointer"
        >
          <div className="flex items-center gap-1.5 md:gap-2">
            {/* Logo 1: Universitas */}
            <div className="w-8 h-8 md:w-12 md:h-12 rounded-full overflow-hidden bg-slate-50 flex items-center justify-center">
              <img
                src="/Logo_UM.webp"
                alt="Logo Universitas"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Logo 2: Tulungrejo */}
            <div className="w-8 h-8 md:w-12 md:h-12 rounded-full overflow-hidden bg-slate-50 flex items-center justify-center">
              <img
                src="/Logo_Tulungrejo.webp"
                alt="Logo KKN"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Logo 3: KKN */}
            <div className="w-8 h-8 md:w-12 md:h-12 rounded-full overflow-hidden bg-slate-50 flex items-center justify-center">
              <img
                src="/Logo_WDK.png"
                alt="Logo KKN"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Logo 3: KKN */}
            <div className="w-8 h-8 md:w-12 md:h-12 rounded-full overflow-hidden bg-slate-50 flex items-center justify-center">
              <img
                src="/Logo_UM_BBM.webp"
                alt="Logo KKN"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </Link>
      </div>
    </nav>
  );
}