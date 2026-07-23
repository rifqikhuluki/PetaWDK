"use client";
import { useState, useEffect, useRef, useMemo } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import "leaflet/dist/leaflet.css";

import { spotsData, Spot } from "../data/mapData";
import CardImageSlider from "./CardImageSlider";

const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false },
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false },
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false },
);
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), {
  ssr: false,
});
const MapController = dynamic(() => import("./MapController"), { ssr: false });

export default function StoryMapSidecar() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredSpots = useMemo(() => {
    return spotsData.filter((spot) => {
      const matchesSearch =
        spot.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        spot.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === "all" || spot.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const [activeSpot, setActiveSpot] = useState<Spot>(spotsData[0]);
  
  // FIX 1: Save the actual Leaflet library into state instead of an unused customIcon
  const [L, setL] = useState<typeof import("leaflet") | null>(null);
  
  const cardRefs = useRef<HTMLDivElement[]>([]);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const isClickScrolling = useRef<boolean>(false);

  const activeIndex = useMemo(() => {
    return filteredSpots.findIndex((s) => s.id === activeSpot?.id);
  }, [filteredSpots, activeSpot]);

  useEffect(() => {
    if (filteredSpots.length > 0) {
      setActiveSpot(filteredSpots[0]);
    }
  }, [filteredSpots]);

  // FIX 2: Dynamically import Leaflet safely on the client
  useEffect(() => {
    import("leaflet").then((leafletModule) => {
      setL(leafletModule.default || leafletModule);
    });
  }, []);

  const handleMarkerClick = (spot: Spot) => {
    setActiveSpot(spot);

    const targetIndex = filteredSpots.findIndex((s) => s.id === spot.id);

    if (targetIndex !== -1) {
      const targetCard = cardRefs.current[targetIndex];
      if (targetCard) {
        isClickScrolling.current = true;

        targetCard.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });

        setTimeout(() => {
          isClickScrolling.current = false;
        }, 800);
      }
    }
  };

  useEffect(() => {
    const sidebarElement = sidebarRef.current;
    if (!sidebarElement) return;

    const observerOptions = {
      root: sidebarElement,
      rootMargin:
        window.innerWidth >= 768 ? "-30% 0px -45% 0px" : "-20% 0px -40% 0px",
      threshold: 0.1,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      if (isClickScrolling.current) return;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("data-id");
          const found = filteredSpots.find((s) => s.id === id);
          if (found) {
            setActiveSpot(found);
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );
    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, [filteredSpots]);

  return (
    <div className="relative w-full h-full bg-slate-100 overflow-hidden flex flex-col md:flex-row">
      {/* Container Peta */}
      <div className="relative md:absolute top-0 left-0 w-full h-[25vh] md:h-full z-10 bg-slate-200">
        {/* FIX 3: Wait for Leaflet (L) to load before mounting MapContainer to avoid race conditions */}
        {L ? (
          <MapContainer
            center={activeSpot?.coordinates || [0, 0]}
            zoom={activeSpot?.zoom || 13}
            className="w-full h-full"
            zoomControl={false}
            scrollWheelZoom={false}
            maxZoom={21}
            minZoom={3}
          >
            <TileLayer
              attribution='&copy; <a href="https://carto.com/">CartoDB</a>'
              url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
              maxZoom={21}
              maxNativeZoom={18}
            />

            {activeSpot && (
              <MapController
                center={activeSpot.coordinates}
                zoom={activeSpot.zoom}
              />
            )}

            {spotsData.map((spot, idx) => {
              const isSelected = activeSpot?.id === spot.id;

              let markerColors = "";
              if (isSelected) {
                markerColors =
                  spot.category === "kuliner"
                    ? "bg-emerald-600 text-white ring-4 ring-emerald-500/40 z-50 scale-125"
                    : spot.category === "taman"
                      ? "bg-amber-600 text-white ring-4 ring-amber-500/40 z-50 scale-125"
                      : "bg-blue-600 text-white ring-4 ring-blue-500/40 z-50 scale-125";
              } else {
                markerColors =
                  spot.category === "kuliner"
                    ? "bg-emerald-400 text-emerald-950 scale-100 z-10"
                    : spot.category === "taman"
                      ? "bg-amber-400 text-amber-950 scale-100 z-10"
                      : "bg-blue-400 text-blue-950 scale-100 z-10";
              }

              return (
                <Marker
                  key={spot.id}
                  position={spot.coordinates}
                  eventHandlers={{
                    click: () => handleMarkerClick(spot),
                  }}
                  // FIX 4: Use the safely imported L instance instead of window.L
                  icon={L.divIcon({
                    className: "custom-marker",
                    html: `<div class="w-9 h-9 rounded-full border-4 border-white flex items-center justify-center font-black text-xs shadow-xl transition-all duration-500 ${markerColors}">
                             ${idx + 1}
                           </div>`,
                    iconSize: [36, 36],
                    iconAnchor: [18, 18],
                  })}
                >
                  <Popup>
                    <div className="text-xs font-bold text-slate-900">
                      {spot.name}
                    </div>
                  </Popup>
                </Marker>
              );
            })}
          </MapContainer>
        ) : (
          /* Fallback loading state while leaflet is initializing */
          <div className="w-full h-full flex items-center justify-center text-slate-400 text-sm animate-pulse">
            Memuat Peta...
          </div>
        )}
      </div>

      {/* Container Sidecar / Sidebar */}
      <div className="relative md:absolute inset-x-0 bottom-0 md:inset-y-0 md:left-0 w-full md:w-[430px] lg:w-[460px] h-[60vh] md:h-full z-30 bg-slate-50/95 md:bg-transparent flex flex-col pointer-events-auto shadow-2xl md:shadow-none">
        
        {/* PANEL INPUT - No changes required here */}
        <div className="p-4 bg-white/95 backdrop-blur border-b border-slate-200 shadow-sm md:mt-4 md:mx-4 md:rounded-2xl md:border z-40 space-y-3 flex-shrink-0">
          <div className="relative">
            <input
              type="text"
              placeholder="Cari lokasi atau deskripsi..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full text-xs font-medium pl-9 pr-4 py-2.5 bg-slate-100 hover:bg-slate-200/70 focus:bg-white text-slate-900 placeholder-slate-400 rounded-xl border border-transparent focus:border-slate-300 focus:outline-none transition-all"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="absolute left-3 top-3 w-4 h-4 text-slate-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.604 10.604z"
              />
            </svg>
          </div>

          <div className="flex gap-1.5 text-xs font-bold">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`flex-1 py-2 rounded-xl transition-all ${
                selectedCategory === "all"
                  ? "bg-slate-900 text-white shadow-md shadow-slate-900/10"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200/60"
              }`}
            >
              Semua
            </button>
            <button
              onClick={() => setSelectedCategory("kuliner")}
              className={`flex-1 py-2 rounded-xl transition-all ${
                selectedCategory === "kuliner"
                  ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/10"
                  : "bg-emerald-50 text-emerald-700 hover:bg-emerald-100/70"
              }`}
            >
              Kuliner
            </button>
            <button
              onClick={() => setSelectedCategory("taman")}
              className={`flex-1 py-2 rounded-xl transition-all ${
                selectedCategory === "taman"
                  ? "bg-amber-600 text-white shadow-md shadow-amber-600/10"
                  : "bg-amber-50 text-amber-700 hover:bg-amber-100/70"
              }`}
            >
              Taman
            </button>
            <button
              onClick={() => setSelectedCategory("fasilitas")}
              className={`flex-1 py-2 rounded-xl transition-all ${
                selectedCategory === "fasilitas"
                  ? "bg-blue-600 text-white shadow-md shadow-blue-600/10"
                  : "bg-blue-50 text-blue-700 hover:bg-blue-100/70"
              }`}
            >
              Fasilitas
            </button>
          </div>
        </div>

        <div
          ref={sidebarRef}
          className="flex-1 overflow-y-auto snap-y snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] px-0 pt-2 pb-[12vh]"
        >
          <div className="h-4 md:h-6 flex-shrink-0 pointer-events-none" />

          {filteredSpots.length === 0 ? (
            <div className="p-8 text-center text-slate-500 font-medium text-xs space-y-1">
              <p>Tidak ada lokasi yang cocok ditemukan.</p>
              <p className="font-light text-slate-400">
                Coba kata kunci atau filter lain.
              </p>
            </div>
          ) : (
            filteredSpots.map((spot, index) => {
              const originalIndex = spotsData.findIndex(
                (s) => s.id === spot.id,
              );

              const isCardNearActive = Math.abs(index - activeIndex) <= 5;

              return (
                <div
                  key={spot.id}
                  ref={(el) => {
                    cardRefs.current[index] = el!;
                  }}
                  data-id={spot.id}
                  className={`w-full min-h-[50vh] md:min-h-[65vh] flex-shrink-0 p-4 md:p-6 flex flex-col justify-center snap-start transition-all duration-500 ${
                    activeSpot?.id === spot.id
                      ? "opacity-100 scale-100"
                      : "opacity-40 md:opacity-30 scale-95"
                  }`}
                >
                  <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xl overflow-hidden flex flex-col relative">
                    <div className="absolute top-4 left-3 z-20 w-8 h-8 bg-amber-400 text-slate-900 border-2 border-white font-black rounded-full flex items-center justify-center shadow text-xs">
                      {originalIndex + 1}
                    </div>

                    {isCardNearActive ? (
                      <CardImageSlider images={spot.images} />
                    ) : (
                      <div className="w-full aspect-[16/11] bg-slate-100 animate-pulse flex items-center justify-center text-slate-300">
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    )}

                    <div className="p-4 md:p-5 flex flex-col justify-between bg-white">
                      <div className="space-y-1.5 md:space-y-2">
                        <div className="flex items-center justify-between gap-2">
                          <span
                            className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                              spot.category === "kuliner"
                                ? "bg-emerald-100 text-emerald-800"
                                : spot.category === "taman"
                                  ? "bg-amber-100 text-amber-800"
                                  : "bg-blue-100 text-blue-800"
                            }`}
                          >
                            {spot.category}
                          </span>
                        </div>
                        <h3 className="text-base md:text-lg font-bold text-slate-900 tracking-tight">
                          {spot.name}
                        </h3>
                        <p className="text-[11px] md:text-xs text-slate-600 leading-normal text-justify font-light line-clamp-2 md:line-clamp-3">
                          {spot.description}
                        </p>
                      </div>

                      <div className="pt-4 mt-4 border-t border-slate-100 flex gap-2">
                        <a
                          href={spot.gmapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full inline-flex items-center justify-center gap-1.5 text-xs font-bold text-white transition-all bg-emerald-600 hover:bg-emerald-700 px-3 py-2.5 rounded-xl text-center shadow-md"
                        >
                          Petunjuk Rute
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}

          <div className="hidden md:block h-[10vh] flex-shrink-0 pointer-events-none" />
        </div>
      </div>
    </div>
  );
}