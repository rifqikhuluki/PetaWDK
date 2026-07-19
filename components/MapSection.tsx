import Image from "next/image";

export default function MapSection() {
  return (
    <section
      className="w-full py-16 px-6 flex flex-col items-center"
      aria-labelledby="map-heading"
    >
      {/* ===== HEADER ===== */}
      <header className="text-center mb-12">
        <h1
          id="map-heading"
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Peta & Denah Area Wisata Dusun Kuliner
        </h1>

        <p className="text-muted-foreground max-w-2xl mx-auto">
          Lihat denah lengkap area Wisata Dusun Kuliner dan temukan lokasi kami
          secara langsung melalui Google Maps sebelum Anda berkunjung.
        </p>
      </header>

      {/* ===== DENAH AREA ===== */}
      <figure className="w-full max-w-5xl rounded-xl overflow-hidden shadow-lg bg-white p-4 mb-16">

        {/* MOBILE IMAGE */}
        <Image
          src="/map/Map1.jpeg"
          alt="Denah vertikal area Wisata Dusun Kuliner untuk tampilan mobile"
          width={800}
          height={1200}
          className="w-full h-auto object-contain md:hidden"
          loading="lazy"
        />

        {/* DESKTOP IMAGE */}
        <Image
          src="/map/Map2.jpg"
          alt="Denah horizontal area Wisata Dusun Kuliner untuk tampilan desktop"
          width={1200}
          height={800}
          className="hidden md:block w-full h-auto object-contain"
          loading="lazy"
        />

        <figcaption className="text-sm text-center text-gray-500 mt-4">
          Denah resmi area Wisata Dusun Kuliner untuk memudahkan pengunjung menemukan fasilitas dan spot favorit.
        </figcaption>
      </figure>

      {/* ===== GOOGLE MAP EMBED ===== */}
      {/* <div className="w-full max-w-5xl">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
          Lokasi Wisata Dusun Kuliner di Google Maps
        </h2>

        <div className="rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.9517546284037!2d112.522694!3d-7.794933100000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e787d6690d787ef%3A0xebf5f0303edee9e9!2sWisata%20Dusun%20%26%20Kuliner!5e0!3m2!1sen!2sid!4v1770783861686!5m2!1sen!2sid" 
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen // <-- Perubahan ada di sini, cukup tuliskan nama atributnya saja
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Lokasi Wisata Dusun Kuliner di Google Maps"
          ></iframe>
        </div>

        <div className="text-center mt-6">
          <a
            href="https://share.google/eKUUqAMbzowuc1AR1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
          >
            Buka di Google Maps
          </a>
        </div>
      </div> */}
    </section>
  );
}