export interface HTMItem {
  label: string;
  price: string;
}

export interface Spot {
  id: string;
  name: string;
  description: string;
  coordinates: [number, number]; // [Latitude, Longitude]
  gmapsUrl: string;
  zoom: number;
  category: "kuliner" | "taman" | "fasilitas";
  images: string[];
}

export const spotsData: Spot[] = [
  {
    id: "1",
    name: "Parkir Mobil",
    description:
      "Area parkir yang luas, aman, dan tertata rapi khusus untuk kendaraan roda empat milik pengunjung.",
    coordinates: [-7.795493188377042, 112.52219678812925],
    gmapsUrl: "https://maps.app.goo.gl/bKxJBtrym43jegBF7",
    category: "fasilitas",
    zoom: 21,
    images: ["/wahana/crispa.webp"],
  },
  {
    id: "2",
    name: "Parkir Bus",
    description:
      "Lahan parkir khusus berkapasitas besar yang dirancang untuk menampung armada bus pariwisata rombongan.",
    coordinates: [-7.794927352142544, 112.5223623773322],
    gmapsUrl: "https://maps.app.goo.gl/RhDhZXw5EtzYPEFq7",
    category: "fasilitas",
    zoom: 21,
    images: ["/wahana/crispa.webp"],
  },
  {
    id: "3",
    name: "Parkir Motor",
    description:
      "Area parkir khusus kendaraan roda dua yang aman dan strategis dekat dengan pintu masuk.",
    coordinates: [-7.795302344288769, 112.52207513075567],
    gmapsUrl: "https://maps.app.goo.gl/XhjKX1VHWVrxbtVq7",
    category: "fasilitas",
    zoom: 21,
    images: ["/wahana/crispa.webp"],
  },
  {
    id: "4",
    name: "Loket",
    description:
      "Pusat pembelian tiket masuk resmi, penukaran reservasi, dan tempat mendapatkan informasi awal wisata.",
    coordinates: [-7.795683933460461, 112.52232036076474],
    gmapsUrl: "https://maps.app.goo.gl/XhjKX1VHWVrxbtVq7",
    category: "fasilitas",
    zoom: 21,
    images: ["/wahana/crispa.webp"],
  },
  {
    id: "5",
    name: "Wisata Jeep",
    description:
      "Layanan penyewaan dan titik keberangkatan armada Jeep untuk menikmati petualangan seru menyusuri rute wisata.",
    coordinates: [-7.795707608382016, 112.52212799985682],
    gmapsUrl: "https://maps.app.goo.gl/XhjKX1VHWVrxbtVq7",
    category: "fasilitas",
    zoom: 21,
    images: ["/wahana/crispa.webp"],
  },
  {
    id: "6",
    name: "Playground",
    description:
      "Area bermain luar ruangan yang ramah anak, dilengkapi dengan aneka wahana permainan yang aman dan seru.",
    coordinates: [-7.795707608382016, 112.52212799985689], //null
    gmapsUrl: "https://maps.app.goo.gl/XhjKX1VHWVrxbtVq7",
    category: "fasilitas",
    zoom: 21,
    images: ["/wahana/crispa.webp"],
  },
  {
    id: "7",
    name: "Omah Reservasi",
    description:
      "Kantor layanan khusus untuk informasi, pendaftaran kegiatan kelompok, dan pemesanan fasilitas wisata.",
    coordinates: [-7.795529893510635, 112.52242822531653],
    gmapsUrl: "https://maps.app.goo.gl/XhjKX1VHWVrxbtVq7",
    category: "fasilitas",
    zoom: 21,
    images: ["/wahana/crispa.webp"],
  },
  {
    id: "8",
    name: "Omah Dolanan",
    description:
      "Pusat rekreasi keluarga yang menyediakan berbagai pilihan permainan tradisional dan edukatif yang interaktif.",
    coordinates: [-7.7962290009281725, 112.522160997951],
    gmapsUrl: "https://maps.app.goo.gl/XhjKX1VHWVrxbtVq7",
    category: "fasilitas",
    zoom: 21,
    images: ["/fasilitas/omahDolanan.webp"],
  },
  {
    id: "9",
    name: "Latar Ombo",
    description:
      "Halaman terbuka yang sangat luas, ideal untuk titik kumpul utama, acara komunitas, atau aktivitas outbound.",
    coordinates: [-7.796689324292636, 112.52205727585151],
    gmapsUrl: "https://maps.app.goo.gl/XhjKX1VHWVrxbtVq7",
    category: "fasilitas",
    zoom: 21,
    images: ["/fasilitas/latarOmbo.webp"],
  },
  {
    id: "10",
    name: "Panggung",
    description:
      "Fasilitas panggung permanen untuk menggelar pertunjukan live music, pentas seni, dan hiburan berkala.",
    coordinates: [-7.796871395551559, 112.52199115790305],
    gmapsUrl: "https://maps.app.goo.gl/XhjKX1VHWVrxbtVq7",
    category: "fasilitas",
    zoom: 21,
    images: ["/fasilitas/panggung.webp"],
  },
  {
    id: "11",
    name: "Amphitheater",
    description:
      "Gelanggang teater terbuka bergaya tribun berundak untuk menyaksikan pementasan seni dan budaya dengan nyaman.",
    coordinates: [-7.796274248372732, 112.52147394588145],
    gmapsUrl: "https://maps.app.goo.gl/XhjKX1VHWVrxbtVq7",
    category: "fasilitas",
    zoom: 21,
    images: ["/fasilitas/amphitheater.webp"],
  },
  {
    id: "12",
    name: "Guest House",
    description:
      "Fasilitas penginapan dengan suasana asri dan nyaman untuk pengunjung yang ingin bermalam bersama keluarga.",
    coordinates: [-7.795984258502745, 112.52145831652192],
    gmapsUrl: "https://maps.app.goo.gl/XhjKX1VHWVrxbtVq7",
    category: "fasilitas",
    zoom: 21,
    images: ["/fasilitas/guestHouse.webp", "/fasilitas/guestHouse1.webp", "/fasilitas/guestHouse2.webp", "/fasilitas/guestHouse3.webp", "/fasilitas/guestHouse4.webp", "/fasilitas/guestHouse5.webp"],
  },
  {
    id: "13",
    name: "Parkir Guest House",
    description:
      "Area parkir kendaraan khusus yang disediakan dekat dengan lokasi penginapan demi kenyamanan tamu bermalam.",
    coordinates: [-7.79633598744321, 112.52195497459879], //null
    gmapsUrl: "https://maps.app.goo.gl/XhjKX1VHWVrxbtVq7",
    category: "fasilitas",
    zoom: 21,
    images: ["/wahana/crispa.webp"],
  },
  {
    id: "14",
    name: "Jajan Foto",
    description:
      "Kawasan berburu kuliner ringan yang dilengkapi dengan berbagai dekorasi estetik untuk latar belakang berfoto.",
    coordinates: [-7.79633598744321, 112.52195497459873],
    gmapsUrl: "https://maps.app.goo.gl/XhjKX1VHWVrxbtVq7",
    category: "fasilitas",
    zoom: 21,
    images: ["/wahana/crispa.webp"],
  },
  {
    id: "15",
    name: "Kiosk Bunga",
    description:
      "Toko yang menyediakan aneka tanaman hias, bunga segar, serta suvenir hijau sebagai buah tangan khas area wisata.",
    coordinates: [-7.79633598744321, 112.52195497459870], //null
    gmapsUrl: "https://maps.app.goo.gl/XhjKX1VHWVrxbtVq7",
    category: "fasilitas",
    zoom: 21,
    images: ["/wahana/crispa.webp"],
  },
  {
    id: "16",
    name: "Warung Soto",
    description:
      "Kedai makan yang menyajikan hidangan soto berkuah hangat dan gurih dengan bumbu rempah pilihan, sangat pas dinikmati di cuaca sejuk.",
    coordinates: [-7.795485862472751, 112.52199398222814],
    gmapsUrl: "https://maps.app.goo.gl/XhjKX1VHWVrxbtVq7",
    category: "kuliner",
    zoom: 21,
    images: ["/wahana/crispa.webp"],
  },
  {
    id: "17",
    name: "Pasar Buah & Sayur",
    description:
      "Pusat belanja hasil bumi yang menawarkan berbagai macam buah-buahan dan sayuran segar langsung dari petani lokal untuk oleh-oleh.",
    coordinates: [-7.795669927288336, 112.52204840644517],
    gmapsUrl: "https://maps.app.goo.gl/XhjKX1VHWVrxbtVq7",
    category: "kuliner",
    zoom: 21,
    images: ["/wahana/crispa.webp"],
  },
  {
    id: "18",
    name: "Omah Kawi",
    description:
      "Paviliun kuliner berkonsep tradisional yang menyajikan hidangan lokal otentik dengan suasana santai dan nyaman layaknya di rumah sendiri.",
    coordinates: [-7.7960020359739355, 112.52214305790386],
    gmapsUrl: "https://maps.app.goo.gl/XhjKX1VHWVrxbtVq7",
    category: "kuliner",
    zoom: 21,
    images: ["/wahana/crispa.webp"],
  },
  {
    id: "19",
    name: "Omah Panderman",
    description:
      "Tempat bersantap berdesain klasik bernuansa kayu yang menawarkan aneka menu masakan nusantara dengan suasana pedesaan yang tenang.",
    coordinates: [-7.795974188319111, 112.52198890746898],
    gmapsUrl: "https://maps.app.goo.gl/XhjKX1VHWVrxbtVq7",
    category: "kuliner",
    zoom: 21,
    images: ["/wahana/crispa.webp"],
  },
  {
    id: "20",
    name: "Omah Semeru",
    description:
      "Area makan tradisional yang luas, cocok untuk rombongan keluarga yang ingin menikmati sajian kuliner khas dengan porsi besar yang menggugah selera.",
    coordinates: [-7.795943351516698, 112.52194498641136],
    gmapsUrl: "https://maps.app.goo.gl/XhjKX1VHWVrxbtVq7",
    category: "kuliner",
    zoom: 21,
    images: ["/wahana/crispa.webp"],
  },
  {
    id: "21",
    name: "Bleztro Cafe",
    description:
      "Kafe bergaya modern yang menyajikan aneka kopi, minuman kekinian, dan makanan ringan, menjadikannya spot nongkrong favorit anak muda.",
    coordinates: [-7.796042940550561, 112.52245263642881],
    gmapsUrl: "https://maps.app.goo.gl/XhjKX1VHWVrxbtVq7",
    category: "kuliner",
    zoom: 21,
    images: ["/wahana/crispa.webp"],
  },
  {
    id: "22",
    name: "Sapawon",
    description:
      "Restoran berkonsep dapur tradisional (pawon) yang menghidangkan menu-menu rumahan khas Nusantara dengan cita rasa otentik yang kaya rempah.",
    coordinates: [-7.796153520149111, 112.522588313191],
    gmapsUrl: "https://maps.app.goo.gl/XhjKX1VHWVrxbtVq7",
    category: "kuliner",
    zoom: 21,
    images: ["/wahana/crispa.webp"],
  },
  {
    id: "23",
    name: "Omah Arjuna",
    description:
      "Spot kuliner yang asri dan estetik, menawarkan pengalaman bersantap menu khas daerah sembari menikmati angin sejuk dan pemandangan sekitar.",
    coordinates: [-7.7961190907714615, 112.5213665256535],
    gmapsUrl: "https://maps.app.goo.gl/XhjKX1VHWVrxbtVq7",
    category: "kuliner",
    zoom: 21,
    images: ["/wahana/crispa.webp"],
  },
  {
    id: "24",
    name: "Omah Welirang",
    description:
      "Pendopo makan yang nyaman dengan kapasitas memadai, menyajikan hidangan lezat dan hangat yang sangat pas dinikmati setelah lelah berkeliling.",
    coordinates: [-7.796258352260067, 112.52131962243656],
    gmapsUrl: "https://maps.app.goo.gl/XhjKX1VHWVrxbtVq7",
    category: "kuliner",
    zoom: 21,
    images: ["/wahana/crispa.webp"],
  },
  {
    id: "25",
    name: "Street Food",
    description:
      "Sentra jajanan kaki lima yang menghadirkan beragam camilan manis, gurih, dan minuman segar yang praktis dinikmati sambil jalan-jalan.",
    coordinates: [-7.796434582738692, 112.52203935350929],
    gmapsUrl: "https://maps.app.goo.gl/XhjKX1VHWVrxbtVq7",
    category: "kuliner",
    zoom: 21,
    images: ["/wahana/crispa.webp"],
  },
  {
    id: "26",
    name: "Alas Tropis",
    description:
      "Kawasan rindang bernuansa hutan tropis yang menyejukkan, menawarkan udara segar dan suasana alam yang tenang untuk berjalan-jalan.",
    coordinates: [-7.79627827103794, 112.52199902096999],
    gmapsUrl: "https://maps.app.goo.gl/XhjKX1VHWVrxbtVq7",
    category: "taman",
    zoom: 21,
    images: ["/taman/alasTropis.webp", "/taman/alasTropis.webp1", "/taman/alasTropis2.webp", "/taman/alasTropis3.webp", "/taman/alasTropis4.webp"],
  },
  {
    id: "27",
    name: "Wono Joglo",
    description:
      "Taman asri yang dipadukan dengan bangunan tradisional berarsitektur Joglo, sangat cocok untuk bersantai sambil menikmati nuansa klasik Jawa.",
    coordinates: [-7.7961712845051565, 112.52244374724202],
    gmapsUrl: "https://maps.app.goo.gl/XhjKX1VHWVrxbtVq7",
    category: "taman",
    zoom: 21,
    images: ["/taman/wonoJoglo.webp"],
  },
  {
    id: "28",
    name: "Taman Kurcaci",
    description:
      "Area taman tematik estetik yang dihiasi dengan rumah-rumah miniatur dan ornamen kurcaci yang sangat digemari anak-anak sebagai spot berfoto.",
    coordinates: [-7.796201047066092, 112.52149099608967],
    gmapsUrl: "https://maps.app.goo.gl/XhjKX1VHWVrxbtVq7",
    category: "taman",
    zoom: 21,
    images: ["/taman/tamanKurcaci.webp", "/taman/tamanKurcari1.webp"],
  },
  {
    id: "29",
    name: "Taman Lukis",
    description:
      "Ruang terbuka hijau yang inspiratif, didedikasikan bagi pengunjung dan anak-anak untuk mengekspresikan kreativitas seni melalui aktivitas melukis.",
    coordinates: [-7.796730148052206, 112.52219794006936],
    gmapsUrl: "https://maps.app.goo.gl/XhjKX1VHWVrxbtVq7",
    category: "taman",
    zoom: 21,
    images: ["/taman/tamanLukis.webp"],
  },
  {
    id: "30",
    name: "Taman Kelinci",
    description:
      "Taman wisata edukasi dan interaktif di mana pengunjung dapat bermain, berinteraksi, serta memberi makan kelinci-kelinci lucu secara langsung.",
    coordinates: [-7.796850492045255, 112.52225237812326],
    gmapsUrl: "https://maps.app.goo.gl/XhjKX1VHWVrxbtVq7",
    category: "taman",
    zoom: 21,
    images: ["/taman/tamanKelinci.webp", "/taman/tamanKelinci1.webp"],
  },
  {
    id: "31",
    name: "Taman Hortensia",
    description:
      "Hamparan taman bunga yang menyuguhkan keindahan pesona warna-warni bunga hortensia (panca warna), menciptakan lanskap yang memanjakan mata.",
    coordinates: [-7.79672304173261, 112.5213199514238],
    gmapsUrl: "https://maps.app.goo.gl/XhjKX1VHWVrxbtVq7",
    category: "taman",
    zoom: 21,
    images: ["/taman/tamanHortnesia.webp", "/taman/tamanHortnesia1.webp", "/taman/tamanHortnesia2.webp"],
  },
  {
    id: "32",
    name: "Edukasi Bumbu Dapur",
    description:
      "Taman botani edukatif yang menanam aneka ragam rempah dan tanaman bumbu dapur, memberikan wawasan langsung tentang kekayaan flora Nusantara.",
    coordinates: [-7.796410596443097, 112.52179157676993],
    gmapsUrl: "https://maps.app.goo.gl/XhjKX1VHWVrxbtVq7",
    category: "taman",
    zoom: 21,
    images: ["/taman/bumbuDapur.webp", "/taman/bumbuDapur1.webp", "/taman/bumbuDapur2.webp", "/taman/bumbuDapur3.webp"],
  },
  {
    id: "33",
    name: "Coban Alas",
    description:
      "Spot alam berupa miniatur air terjun (coban) yang mengalir di tengah rimbunnya pepohonan, menghadirkan suara gemercik air yang menenangkan jiwa.",
    coordinates: [-7.796350682442884, 112.52123093858569],
    gmapsUrl: "https://maps.app.goo.gl/XhjKX1VHWVrxbtVq7",
    category: "taman",
    zoom: 21,
    images: ["/taman/cobanAlas.webp", "/taman/cobanAlas1.webp", "/taman/cobanAlas2.webp"],
  },
  {
    id: "34",
    name: "Museum Cilik",
    description:
      "Fasilitas pameran edukatif skala kecil di area taman yang menampilkan benda-benda informatif dan bersejarah, dirancang khusus untuk wawasan anak-anak.",
    coordinates: [-7.79547070617909, 112.5225023021879],
    gmapsUrl: "https://maps.app.goo.gl/XhjKX1VHWVrxbtVq7",
    category: "taman",
    zoom: 21,
    images: ["/wahana/crispa.webp"],
  }
];
