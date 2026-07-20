import Navbar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import MapSection from "../components/MapSection";
import DescriptionSection from "../components/DescriptionSection";
import StoryMapWrapper from "../components/StoryMapWrapper";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-slate-50 font-sans text-slate-900 selection:bg-emerald-500 selection:text-white">
      {/* Ubah Logo pada Tab (Favicon) */}
      <link rel="icon" type="image/png" href="/Logo_WDK.png" />

      {/* Import CSS Leaflet */}
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
        integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
        crossOrigin=""
      />

      <Navbar />
      <HeroSection />
      
      {/* 2. Tambahkan komponen di bawah HeroSection */}
      <MapSection /> 
      
      <DescriptionSection />
      <section className="w-full h-dscreen md:h-screen block relative overflow-hidden flex flex-col">
        <StoryMapWrapper />
      </section>
      <Footer />
    </main>
  );
}