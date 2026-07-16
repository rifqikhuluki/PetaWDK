"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 h-20 bg-white backdrop-blur-md border-b border-slate-100 z-50 px-4 md:px-8 flex items-center justify-between shadow-sm">
      <div className="flex items-center gap-5">
        <Link
          href="/"
          className="flex items-center gap-3 hover:opacity-90 transition-opacity cursor-pointer"
        >
          <div className="flex items-center gap-2">
            {/* Logo 1: Universitas */}
            <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-50 flex items-center justify-center">
              <img
                src="/Logo_UM.webp"
                alt="Logo Universitas"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Logo 2: Tulungrejo */}
            <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-50 flex items-center justify-center">
              <img
                src="/Logo_Tulungrejo.webp"
                alt="Logo KKN"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Logo 3: KKN */}
            <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-50 flex items-center justify-center">
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
