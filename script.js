// === DATA VENUES ===
const venuesData = {
  asatu: {
    name: "ASATU ARENA CIKINI",
    loc: "Jl. RP. Soeroso No.1, Cikini, Kec. Menteng, Kota Jakarta Pusat",
    price: 1050000,
    img: "https://gelora-public-storage.s3-ap-southeast-1.amazonaws.com/upload/public-20230327114416.jpg",
    type: "Mini Soccer",
    description:
      "Lapangan mini soccer outdoor dengan rumput sintetis berkualitas tinggi dan standar FIFA. Dilengkapi dengan pencahayaan yang optimal untuk pertandingan malam hari.",
    facilities: [
      "Rumput Sintetis Standar FIFA",
      "Pencahayaan LED",
      "Tribun Penonton",
      "Parkir Luas",
      "Kamar Ganti",
      "Toilet",
      "Mushola",
    ],
    location: "Jl. RP. Soeroso No.1, Cikini, Kec. Menteng, Kota Jakarta Pusat",
    area: "40m x 20m",
    length: "40 meter",
    number: "Lapangan 1",
  },

  permata: {
    name: "LAPANGAN 45 PERMATA HIJAU",
    loc: "Jl. Logam Jl. Komp. Permata Hijau, RT.7/RW.8, Grogol Utara, Kec. Kebayoran Lama, Jakarta, Daerah Khusus Ibukota Jakarta 12210",
    price: 1080000,
    img: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxavu4EFmQBesMKRbLR4Dn42fHGFTvrFW1Y9_rgRmkiBhlJNFNuE0y1awiZ9T1Rxz656u32Sx18FhzTi57WfflV6vnsfu02Umn8oakBRZ_RPNq90gR44fYJNaXY4WVaZolp4NdrJA=s680-w680-h510-rw",
    type: "Mini Soccer",
    description:
      "Venue lapangan mini soccer dengan lapangan berkualitas tinggi dan fasilitas lengkap. Cocok untuk latihan maupun pertandingan.",
    facilities: [
      "Rumput Sintetis Berkualitas",
      "Pencahayaan Optimal",
      "Tribun Penonton",
      "Kantin",
      "Parkir Luas",
      "Kamar Ganti",
      "Toilet",
    ],
    location:
      "Jl. Logam Jl. Komp. Permata Hijau, RT.7/RW.8, Grogol Utara, Kec. Kebayoran Lama, Jakarta, Daerah Khusus Ibukota Jakarta 12210",
    area: "38m x 18m",
    length: "38 meter",
    number: "Lapangan Utama",
  },

  tarena: {
    name: "T ARENA",
    loc: "Pasar Jaya, Jl. Tebet Timur Dalam Raya Lantai 3, Tebet Tim., Kec. Tebet, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12820",
    price: 250000,
    img: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSyauIsPohhVtrdldhQkwJBKGHz8SaF_Hsx-FoVdJLepmBrdUYZsLfk2nL3E2Igz_ESpo15R-edbTayYzX75wWoMiLUMRN6-wGrFauY5ZwzA30m9j6bwPjy8VIDMe4Qx5D0CbqrF=s680-w680-h510-rw",
    type: "Futsal",
    description:
      "Arena futsal dengan multiple court dan fasilitas modern. Terletak di lokasi strategis dengan akses mudah.",
    facilities: [
      "1 Lapangan Mini Soccer",
      "Pencahayaan LED",
      "Kantin",
      "Parkir Luas",
      "Kamar Ganti",
      "Toilet",
    ],
    location:
      "Pasar Jaya, Jl. Tebet Timur Dalam Raya Lantai 3, Tebet Tim., Kec. Tebet, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12820",
    area: "25m x 15m",
    length: "25 meter",
    number: "Lapangan A, B, C",
  },
  koci: {
    name: "KOCI SOCCER FIELD",
    loc: "Jl. Margonda Raya, Kemiri Muka, Kecamatan Beji, Kota Depok, Jawa Barat 16423",
    price: 600000,
    img: "https://lh3.googleusercontent.com/p/AF1QipNaCkG6yhccooSxxfLytDXqnbq1NcPYklMEnRRz=s680-w680-h510-rw",
    type: "Soccer",
    description:
      "Lapangan sepak bola full size dengan rumput alami dan fasilitas lengkap. Cocok untuk pertandingan resmi maupun latihan.",
    facilities: [
      "Rumput Alami",
      "Pencahayaan Stadion",
      "Tribun Penonton",
      "Parkir Luas",
      "Kamar Ganti",
      "Toilet",
      "Mushola",
    ],
    location:
      "Jl. Margonda Raya, Kemiri Muka, Kecamatan Beji, Kota Depok, Jawa Barat 16423",
    area: "105m x 68m",
    length: "105 meter",
    number: "Lapangan Utama",
  },

  bai: {
    name: "PADEL PRO",
    loc: "Jl. Kemang II No.35, Bangka, Mpg. Prapatan, South Jakarta City, Jakarta 12730",
    price: 800000,
    img: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSyjsmgzPwh-KeZ_pQx8py91RM0OMMx50KXv0Usx9MNk2vWPxKb-qyKkWnfi0b3e8szas_6XCq-7CtV3zKuU9Db_F_MciiXlztwGfZeIXs8cu6hC11Nc75_rgoZuzZeDTWik5uIz=s680-w680-h510-rw",
    type: "Padel",
    description:
      "Lapangan padel berukuran 20m x 10m dengan net setinggi 0,88 m di tengah dan 0,92 m di sisi. Bagian belakang menggunakan kaca tempered 3 m ditambah mesh hingga 4 m, sementara sisi samping terdiri dari kaca dan mesh setinggi 3 m. Desain ini mengikuti standar internasional untuk memberikan permainan yang aman dan nyaman.",
    facilities: [
      "Lapangan Standar Internasional",
      "Pencahayaan Optimal",
      "Tribun Penonton",
      "Parkir Luas",
      "Kamar Ganti",
      "Toilet",
      "Kafe",
      "Area Parkir Luas",
    ],
    location:
      "Jl. Kemang II No.35, Bangka, Mpg. Prapatan, South Jakarta City, Jakarta 12730",
    area: "20m x 10m",
    length: "20 meter",
    number: "Lapangan 1",
  },
  bandung: {
    name: "GOR BADMINTON LODAYA",
    loc: "Jl. Lodaya No.20, Malabar, Kec. Lengkong, Kota Bandung, Jawa Barat 40262",
    price: 125000,
    img: "https://i.pinimg.com/736x/98/dc/59/98dc5935665c2ab5732e52f92c32e05e.jpg",
    type: "Badminton",
    description:
      "Gedung bulutangkis dengan 2 lapangan dan fasilitas modern. Cocok untuk latihan maupun turnamen.",
    facilities: [
      "2 Lapangan Badminton",
      "Pencahayaan Optimal",
      "Kantin",
      "Parkir Luas",
      "Kamar Ganti",
      "Toilet",
    ],
    location:
      "Jl. Lodaya No.20, Malabar, Kec. Lengkong, Kota Bandung, Jawa Barat 40262",
    area: "13.4m x 6.1m",
    length: "13.4 meter",
    number: "Lapangan 1-8",
  },

  ganesha: {
    name: "GANESHA TENNIS",
    loc: "Jl. Tanah Mas IV, Kayu Putih, Kec. Pulo Gadung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13210",
    price: 100000,
    img: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxSfrAVaB0MMS7f3ShirudTCeHZujv7x1cI7nlJNQI_3cXnq0LuhjpfcPGC2Phz9i3rdozwKg8I8uAiZ1ke4PGR06v8LQoUKk5XshhvFlY448p_mKMJsF7OxEAgELeYGbT-3NXrCPL2S-5m=s680-w680-h510-rw",
    type: "Tennis",
    description:
      "Kompleks tenis dengan 5 lapangan berkualitas. Dilengkapi dengan fasilitas lengkap untuk kenyamanan bermain.",
    facilities: [
      "5 Lapangan Tennis",
      "Pencahayaan Optimal",
      "Kantin",
      "Parkir Luas",
      "Kamar Ganti",
      "Toilet",
      "Pro Shop",
    ],
    location:
      "Jl. Tanah Mas IV, Kayu Putih, Kec. Pulo Gadung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13210r",
    area: "23.77m x 10.97m",
    length: "23.77 meter",
    number: "Lapangan 1-5",
  },

  padel: {
    name: "PADEL CAFE",
    loc: "Jl. Buana No.5b, RT.2/RW.8, Pd. Pinang, Kec. Kebayoran Lama, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12310",
    price: 450000,
    img: "https://www.grahaexcel.com/storage/files/1/atap-lapangan-padel-cover.jpg",
    type: "Padel",
    description:
      "Venue padel tennis pertama di Jakarta dengan konsep cafe yang nyaman. Cocok untuk bersantai sambil berolahraga.",
    facilities: [
      "2 Lapangan Padel",
      "AC",
      "Pencahayaan Optimal",
      "Cafe",
      "Parkir Luas",
      "Kamar Ganti",
      "Toilet",
    ],
    location:
      "Jl. Buana No.5b, RT.2/RW.8, Pd. Pinang, Kec. Kebayoran Lama, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12310",
    area: "20m x 10m",
    length: "20 meter",
    number: "Lapangan 1 & 2",
  },

  dna: {
    name: "DNA ARENA CINERE",
    loc: "Jl. Raya Krukut No.7, Krukut, Kec. Limo, Kota Depok, Jawa Barat 16512",
    price: 900000,
    img: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxDHVL__qsA6khSc-HwvSDgHZ1ajL5UWvzFUuIn0gQj9cpL5To6QUielijNpzkq1MBN1ZWW0k6YAdv42UzU9cNKRh2kkYnw8zzKHdHD9DK1rHHJNx0enN2Xhd1H--_cx1k7os5Q=s680-w680-h510-rw",
    type: "Soccer",
    description:
      "Lapangan sepak bola dengan rumput sintetis berkualitas tinggi. Dilengkapi dengan fasilitas modern untuk kenyamanan bermain.",
    facilities: [
      "Rumput Sintetis Berkualitas",
      "Pencahayaan LED",
      "Tribun Penonton",
      "Parkir Luas",
      "Kamar Ganti",
      "Toilet",
      "Mushola",
    ],
    location:
      "Jl. Raya Krukut No.7, Krukut, Kec. Limo, Kota Depok, Jawa Barat 16512",
    area: "100m x 64m",
    length: "100 meter",
    number: "Lapangan Utama",
  },

  iti: {
    name: "ITI STADION ARENA",
    loc: "Kampus ITI, Jl. Raya Puspitek, Setu, Kec. Setu, Kota Tangerang Selatan, Banten 15314",
    price: 850000,
    img: "https://lh3.googleusercontent.com/p/AF1QipNf_yoUEayQCJST9BL3e2-0qLsYh5BOIh7rBEJZ=s680-w680-h510-rw",
    type: "Soccer",
    description:
      "Stadion luas dengan kapasitas penonton 50 orang. Cocok untuk pertandingan antar komunitas maupun perusahaan.",
    facilities: [
      "Rumput Sintetis Berkualitas",
      "Pencahayaan Stadion",
      "Tribun Penonton 50 Kursi",
      "Parkir Luas",
      "Kamar Ganti",
      "Toilet",
      "Mushola",
    ],
    location:
      "Kampus ITI, Jl. Raya Puspitek, Setu, Kec. Setu, Kota Tangerang Selatan, Banten 15314",
    area: "95m x 60m",
    length: "95 meter",
    number: "Lapangan Utama",
  },

  bintaro: {
    name: "SOCCER CHIEF",
    loc: "Jl. Bintaro Raya, RT.4/RW.10, Bintaro, Kec. Pesanggrahan, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12330",
    price: 950000,
    img: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxecTiQ8zM_yyE6KXBDAnac2TyVaG6vo8fv0GVWB0aulI5rnnfh2OyaffZ4X9I24sOvs97rbV-XrXyFZew3zsTzGkCwCu5W9N3XgdGVA_I6A0oI1bKmwOcmT6utRbnVqjRFceooBQ=s680-w680-h510-rw",
    type: "Soccer",
    description:
      "Lapangan sepak bola full size di kawasan Bintaro. Dilengkapi dengan rumput sintetis dan fasilitas lengkap.",
    facilities: [
      "Rumput Sintetis Berkualitas",
      "Pencahayaan Optimal",
      "Tribun Penonton",
      "Parkir Luas",
      "Kamar Ganti",
      "Toilet",
      "Mushola",
    ],
    location:
      "Jl. Bintaro Raya, RT.4/RW.10, Bintaro, Kec. Pesanggrahan, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12330",
    area: "105m x 68m",
    length: "105 meter",
    number: "Lapangan Utama",
  },
  // Tambahan venue baru
  sportiva: {
    name: "TIFOSI SPORT CENTER",
    loc: "Jl. Radin Inten II Jl. Kav. Dki No.31 No.A30, Duren Sawit, Durensawit, East Jakarta City, Jakarta 13440",
    price: 750000,
    img: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzzkqzpd5o608S4ZWo0YFk-9cNDLdrpBtZ6RG5DAg6Wuu7_m6Ps17iDtPAu6aIVHV3MlzY80DwmkHXcLrkSA9L4VWKVUMyXHcaGtc7-mdkmloTt6OP2RynJYlPzbQbTVeiS73ny=s680-w680-h510-rw",
    type: "Futsal",
    description:
      "Arena futsal modern dengan 3 lapangan indoor berkualitas. Cocok untuk latihan maupun turnamen.",
    facilities: [
      "3 Lapangan Futsal",
      "Pencahayaan LED",
      "Kantin",
      "Parkir Luas",
      "Kamar Ganti",
      "Toilet",
    ],
    location:
      "Jl. Radin Inten II Jl. Kav. Dki No.31 No.A30, Duren Sawit, Durensawit, East Jakarta City, Jakarta 13440",
    area: "25m x 15m",
    length: "25 meter",
    number: "Lapangan A, B, C",
  },
  elite: {
    name: "STADIUMS FUTSAL",
    loc: "Jl. Pondok Jagung Timur No.35, Pd. Jagung Tim., Kec. Serpong Utara, Kota Tangerang Selatan, Banten 15326",
    price: 300000,
    img: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwO6D9agNxqUPfZL5RX2fDGgH7MjqvDIfuT6Hs9NYR3u-_ylF9YeQR7JqC5MdC_Ar5vfdd7d59aufDtAhytrOJ6x64wqsG4a-lf9EkBBTI8E8-w9HaUgYrYFUl0kWEMPcUWlls=s680-w680-h510-rw",
    type: "Futsal",
    description:
      "Pusat futsal dengan 2 lapangan berkualitas dan fasilitas lengkap. Terletak di lokasi strategis.",
    facilities: [
      "2 Lapangan Futsal",
      "Pencahayaan Optimal",
      "Kantin",
      "Parkir Luas",
      "Kamar Ganti",
      "Toilet",
    ],
    location:
      "Jl. Pondok Jagung Timur No.35, Pd. Jagung Tim., Kec. Serpong Utara, Kota Tangerang Selatan, Banten 15326",
    area: "25m x 15m",
    length: "25 meter",
    number: "Lapangan 1-2",
  },
  badmintonplus: {
    name: "DIAN JAYA BADMINTON",
    loc: "Jl. Letnan Arsyad Raya No.2, RT.005/RW.012, Kayuringin Jaya, Kec. Bekasi Sel., Kota Bks, Jawa Barat 17144",
    price: 80000,
    img: "https://ik.imagekit.io/tvlk/blog/2024/07/shutterstock_1882495984.jpg?tr=q-70,c-at_max,w-1000,h-600",
    type: "Badminton",
    description:
      "Gedung bulutangkis dengan 3 lapangan dan sistem booking online. Fasilitas modern dan nyaman.",
    facilities: [
      "3 Lapangan Badminton",
      "Pencahayaan Optimal",
      "Kantin",
      "Parkir Luas",
      "Kamar Ganti",
      "Toilet",
    ],
    location:
      "Jl. Letnan Arsyad Raya No.2, RT.005/RW.012, Kayuringin Jaya, Kec. Bekasi Sel., Kota Bks, Jawa Barat 17144",
    area: "13.4m x 6.1m",
    length: "13.4 meter",
    number: "Lapangan 1-3",
  },
  tenniscity: {
    name: "LAPANGAN TENIS BUMI BINTARO PERMAI",
    loc: "Jl. Bintaro Melati II No.9 4, RT.4/RW.8, Pesanggrahan, Kec. Pesanggrahan, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12320",
    price: 120000,
    img: "https://gelora-public-storage.s3-ap-southeast-1.amazonaws.com/upload/public-20210216101046.jpg",
    type: "Tennis",
    description:
      "Kompleks tenis dengan 1 lapangan berkualitas. Dilengkapi dengan pelatih profesional untuk semua level.",
    facilities: [
      "1 Lapangan Tennis",
      "Pencahayaan Optimal",
      "Kantin",
      "Parkir Luas",
      "Kamar Ganti",
      "Toilet",
      "Pro Shop",
    ],
    location:
      "Jl. Bintaro Melati II No.9 4, RT.4/RW.8, Pesanggrahan, Kec. Pesanggrahan, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12320",
    area: "23.77m x 10.97m",
    length: "23.77 meter",
    number: "Lapangan 1",
  },
  bogor_soccer: {
    name: "MINI SOCCER ANNISA PRATAMA",
    loc: "Jl. Raya Karadenan No.KM 4, RT.003/RW.03, Karadenan, Kec. Cibinong, Kabupaten Bogor, Jawa Barat",
    price: 750000,
    img: "https://gelora-public-storage.s3-ap-southeast-1.amazonaws.com/upload/public-20220902071847.jpg",
    type: "Soccer",
    description:
      "Lapangan sepak bola dengan view pegunungan Bogor yang indah. Dilengkapi dengan rumput sintetis berkualitas tinggi.",
    facilities: [
      "Rumput Sintetis Berkualitas",
      "Pencahayaan Optimal",
      "Tribun Penonton",
      "Parkir Luas",
      "Kamar Ganti",
      "Toilet",
      "Kafe",
    ],
    location:
      "Jl. Raya Karadenan No.KM 4, RT.003/RW.03, Karadenan, Kec. Cibinong, Kabupaten Bogor, Jawa Barat",
    area: "100m x 64m",
    length: "100 meter",
    number: "Lapangan Utama",
  },
  bogor_futsal: {
    name: "LOLA FUTSAL",
    loc: "Jl. Mandala II No.2, RT.03/RW.02, Ciparigi, Kec. Bogor Utara, Kota Bogor, Jawa Barat 16710",
    price: 200000,
    img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgN2GNPuEmtgx5QonY_Mj5MqBdPCtwiRqlm1hAu5RGc2Dr7_THJ3jQKGSRPbb3tjckr6A0M_dByT1fMBOlD4q36f3VASwI5FY2tTyI8keOhsUBErQHidqJBkrZa0coFps2hxon5TQvr98E/s1600/pembuatan+lapangan+futsal.jpg",
    type: "Futsal",
    description:
      "Arena futsal indoor dengan 2 lapangan berkualitas. Cocok untuk latihan maupun turnamen.",
    facilities: [
      "2 Lapangan Futsal",
      "Pencahayaan LED",
      "Kantin",
      "Parkir Luas",
      "Kamar Ganti",
      "Toilet",
    ],
    location:
      "Jl. Mandala II No.2, RT.03/RW.02, Ciparigi, Kec. Bogor Utara, Kota Bogor, Jawa Barat 16710",
    area: "25m x 15m",
    length: "25 meter",
    number: "Lapangan 1-2",
  },
  bogor_badminton: {
    name: "KING BADMINTON",
    loc: " Jl. Sholeh Iskandar No.19, Kedung Jaya, Kec. Tanah Sereal, Kota Bogor, Jawa Barat 16164",
    price: 90000,
    img: "https://gelora-public-storage.s3-ap-southeast-1.amazonaws.com/upload/public-20250712075118.jpg",
    type: "Badminton",
    description:
      "Gedung bulutangkis dengan 2 lapangan dan sistem pencahayaan profesional.",
    facilities: [
      "2 Lapangan Badminton",
      "Pencahayaan Optimal",
      "Kantin",
      "Parkir Luas",
      "Kamar Ganti",
      "Toilet",
    ],
    location:
      "Jl. Sholeh Iskandar No.19, Kedung Jaya, Kec. Tanah Sereal, Kota Bogor, Jawa Barat 16164",
    area: "13.4m x 6.1m",
    length: "13.4 meter",
    number: "Lapangan 1-2",
  },
  bogor_tennis: {
    name: "Lapangan Tennis Indor Yasmin Sport Centre",
    loc: "Yasmin Centre, Jl. KH. R. Abdullah Bin Nuh, RT.06/RW.02, Curugmekar, Kec. Bogor Bar., Kota Bogor, Jawa Barat 16113",
    price: 150000,
    img: "https://gelora-public-storage.s3-ap-southeast-1.amazonaws.com/upload/public-20250206082043.jpg",
    type: "Tennis",
    description:
      "Klub tenis dengan 1 lapangan outdoor berkualitas. Dilengkapi dengan pelatih profesional.",
    facilities: [
      "1 Lapangan Tennis",
      "Pencahayaan Optimal",
      "Kantin",
      "Parkir Luas",
      "Kamar Ganti",
      "Toilet",
      "Pro Shop",
    ],
    location:
      "Yasmin Centre, Jl. KH. R. Abdullah Bin Nuh, RT.06/RW.02, Curugmekar, Kec. Bogor Bar., Kota Bogor, Jawa Barat 16113",
    area: "23.77m x 10.97m",
    length: "23.77 meter",
    number: "Lapangan 1",
  },
  bogor_mini: {
    name: "PADEL PARK BOGOR",
    loc: "Jl. Raya Tajur, RT.02/RW.07, Muarasari, Kec. Bogor Sel., Kota Bogor, Jawa Barat 16137",
    price: 500000,
    img: "https://gelora-public-storage.s3-ap-southeast-1.amazonaws.com/upload/public-20250122083301.jpg",
    type: "Padel",
    description:
      "Lapangan Padel dengan lantai vinyl berkualitas. Cocok untuk pertandingan kecil.",
    facilities: [
      "Rumput Sintetis Standar",
      "Pencahayaan LED",
      "Tribun Penonton",
      "Parkir Luas",
      "Kamar Ganti",
      "Toilet",
    ],
    location:
      "Jl. Raya Tajur, RT.02/RW.07, Muarasari, Kec. Bogor Sel., Kota Bogor, Jawa Barat 16137",
    area: "10m x 20m",
    length: "20 meter",
    number: "Lapangan 1",
  },
  bogor_basket: {
    name: "The Bucketlist Indonesia",
    loc: "Jl. R. H. Moh. Tohir No.1, RT.07/RW.10, Tanah Baru, Kec. Bogor Utara, Kota Bogor, Jawa Barat 16154",
    price: 180000,
    img: "https://9f2f1052.delivery.rocketcdn.me/wp-content/uploads/elementor/thumbs/%E6%A0%87%E5%87%86%E7%AF%AE%E7%90%83%E5%9C%BA_%E6%9C%A8%E7%BA%B9-qec43yf84eu250czwn0gdeu9v12n1hdvvwe6jhfccs.webp",
    type: "Basket",
    description:
      "Lapangan basket indoor dengan 1 court berkualitas. Dilengkapi dengan AC dan fasilitas lengkap.",
    facilities: [
      "1 Lapangan Basket",
      "AC",
      "Pencahayaan Optimal",
      "Kantin",
      "Parkir Luas",
      "Kamar Ganti",
      "Toilet",
      "cafe",
    ],
    location:
      "Jl. R. H. Moh. Tohir No.1, RT.07/RW.10, Tanah Baru, Kec. Bogor Utara, Kota Bogor, Jawa Barat 16154s",
    area: "28m x 15m",
    length: "28 meter",
    number: "Court 1 ",
  },

  // === KOTA BARU: SURABAYA (6 Lapangan) ===
  surabaya_soccer: {
    name: "Surabaya Mini Soccer",
    loc: "Jln. Raya Kuwukan No. 61, Dk Kuwukan 1 No.1, RT.1/RW.6, Lontar, Kec. Sambikerep, Surabaya, Jawa Timur 60216",
    price: 1200000,
    img: "https://awsimages.detik.net.id/community/media/visual/2025/07/09/lapangan-mini-soccer-bagian-dari-al-akbar-sport-center-1752045920297_169.jpeg?w=1200",
    type: "Soccer",
    description:
      "Stadion sepak bola modern dengan kapasitas besar. Cocok untuk pertandingan profesional.",
    facilities: [
      "Rumput Alami Berkualitas",
      "Pencahayaan Stadion",
      "Tribun Penonton 50 Kursi",
      "Parkir Luas",
      "Kamar Ganti",
      "Toilet",
      "Mushola",
    ],
    location:
      "Jln. Raya Kuwukan No. 61, Dk Kuwukan 1 No.1, RT.1/RW.6, Lontar, Kec. Sambikerep, Surabaya, Jawa Timur 60216",
    area: "105m x 68m",
    length: "105 meter",
    number: "Lapangan Utama",
  },
  surabaya_futsal: {
    name: "Baskhara Futsal Arena",
    loc: "Jl. Manyar Jaya Praja I No.47, Menur Pumpungan, Kec. Sukolilo, Surabaya, Jawa Timur 60118",
    price: 250000,
    img: "https://image.popmama.com/post/20250124/SFC-iGfiZeJ8hJtjcS2wrJhXZJWZUyCDT3YX.jpg",
    type: "Futsal",
    description:
      "Kompleks futsal dengan 2 lapangan indoor. Fasilitas modern dan nyaman.",
    facilities: [
      "2 Lapangan Futsal",
      "Pencahayaan LED",
      "Kantin",
      "Parkir Luas",
      "Kamar Ganti",
      "Toilet",
    ],
    location:
      "Jl. Manyar Jaya Praja I No.47, Menur Pumpungan, Kec. Sukolilo, Surabaya, Jawa Timur 60118",
    area: "25m x 15m",
    length: "25 meter",
    number: "Lapangan 1",
  },
  surabaya_badminton: {
    name: "SHS Badminton Courts Kenjeran",
    loc: "Jl. Kenjeran No.315, Gading, Kec. Tambaksari, Surabaya, Jawa Timur 60134",
    price: 110000,
    img: "https://direktori.vokasi.unair.ac.id/wp-content/uploads/2024/07/image-18-3.png",
    type: "Badminton",
    description:
      "Pusat bulutangkis dengan 4 lapangan profesional. Cocok untuk turnamen nasional.",
    facilities: [
      "4 Lapangan Badminton",
      "Pencahayaan Profesional",
      "Kantin",
      "Parkir Luas",
      "Kamar Ganti",
      "Toilet",
    ],
    location:
      "Jl. Kenjeran No.315, Gading, Kec. Tambaksari, Surabaya, Jawa Timur 60134a",
    area: "13.4m x 6.1m",
    length: "13.4 meter",
    number: "Lapangan 1-4",
  },
  surabaya_tennis: {
    name: "Lapangan Tenis Indoor",
    loc: " Jl. Ketintang No.156, Ketintang, Kec. Gayungan, Surabaya, Jawa Timur 60231",
    price: 180000,
    img: "https://asset.ayo.co.id/image/venue/174217663064767.image_cropper_76134A67-B2B9-43AC-9541-89FBDBD60734-27195-000003B134633EEF.jpg_middle.jpeg",
    type: "Tennis",
    description:
      "Kompleks tenis dengan 5 lapangan berkualitas. View taman yang menyegarkan.",
    facilities: [
      "5 Lapangan Tennis",
      "Pencahayaan Optimal",
      "Kantin",
      "Parkir Luas",
      "Kamar Ganti",
      "Toilet",
      "Pro Shop",
    ],
    location:
      "Jl. Ketintang No.156, Ketintang, Kec. Gayungan, Surabaya, Jawa Timur 60231",
    area: "23.77m x 10.97m",
    length: "23.77 meter",
    number: "Lapangan 1-5",
  },
  surabaya_mini: {
    name: "JUNGLE PADEL CITRALAND",
    loc: "SCBD CF-11, Citraland, Made, Kec. Sambikerep, Surabaya, Jawa Timur 60219",
    price: 600000,
    img: "https://www.goersapp.com/blog/wp-content/uploads/2025/08/Lapangan-Padel-di-Jogja.webp",
    type: "Padel",
    description:
      "Lapangan padel dengan standar internasional. Cocok untuk latihan tim.",
    facilities: [
      "5 Lapangan Padel",
      "Pencahayaan LED",
      "Tribun Penonton",
      "Parkir Luas",
      "Kamar Ganti",
      "Toilet",
    ],
    location:
      "CBD CF-11, Citraland, Made, Kec. Sambikerep, Surabaya, Jawa Timur 60219a",
    area: "10m x 20m",
    length: "20 meter",
    number: "Lapangan 1-5",
  },
  surabaya_volley: {
    name: "KSC Kebraon Sport Center",
    loc: "Jl. Kebraon II No.31, Kebraon, Kec. Karangpilang, Surabaya, Jawa Timur 60222",
    price: 120000,
    img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjJB4UEaVUvIHPGbW8U6nieTaRuAD-nnYJharjq_MVqQTQy98esL7Kdn_ddplADgz6lQh95rZkeW57Ow2KOSuDMOlqgYv_cuClMf5LWFpQspaSy9O3V8USVe9nNbXI2O8yEKo9TMpNxSxrW_am3AdnRr2mFf2y0FyklRWYAsGu2NKCBayHKmG7PO6zk1Ro/s612/voli13.webp",
    type: "Voli",
    description:
      "Lapangan voli indoor dengan 1 court berkualitas. Dilengkapi dengan AC dalam ruangan.",
    facilities: [
      "1 Lapangan Voli",
      "AC",
      "Pencahayaan Optimal",
      "Kantin",
      "Parkir Luas",
      "Kamar Ganti",
      "Toilet",
    ],
    location:
      "Jl. Kebraon II No.31, Kebraon, Kec. Karangpilang, Surabaya, Jawa Timur 60222",
    area: "18m x 9m",
    length: "18 meter",
    number: "Court 1",
  },

  // === KOTA BARU: SEMARANG (6 Lapangan) ===
  semarang_soccer: {
    name: "Kickoff Arena",
    loc: "Jalan bukit panorama kav 2 dan 3, graha candi golf, Kota Semarang, Jawa Tengah 50267",
    price: 850000,
    img: "https://diskominfomc.kalselprov.go.id/wp-content/uploads/2024/12/photo_2024-12-14_21-49-43.jpg",
    type: "Soccer",
    description:
      "Lapangan sepak bola dengan view pegunungan. Rumput sintetis berkualitas tinggi.",
    facilities: [
      "Rumput Sintetis Berkualitas",
      "Pencahayaan Optimal",
      "Tribun Penonton",
      "Parkir Luas",
      "Kamar Ganti",
      "Toilet",
      "Mushola",
    ],
    location:
      "Jalan bukit panorama kav 2 dan 3, graha candi golf, Kota Semarang, Jawa Tengah 50267",
    area: "100m x 64m",
    length: "100 meter",
    number: "Lapangan Utama",
  },
  semarang_futsal: {
    name: "Reham Futsal Arena",
    loc: "Jl. Mulawarman Sel. Dalam I, Kramas, Kec. Tembalang, Kota Semarang, Jawa Tengah 50278",
    price: 180000,
    img: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSy9uCzaQMMyjwRzn7wpknl1gOY3z3aBvgCudEG__uxtOaP0bM98JCTWh2yJ9ZW4dYORpRCjgR3Yo6fX5xUUl-MMgf9vXfjTigajSjU1DW-BhoadTwDizMgF7GapYdyFjT-7Iudu6w=s680-w680-h510-rw",
    type: "Futsal",
    description:
      "Zona futsal dengan lapangan modern. Lokasi strategis di pusat kota.",
    facilities: [
      "Pencahayaan LED",
      "Kantin",
      "Parkir Luas",
      "Kamar Ganti",
      "Toilet",
    ],
    location:
      "Jl. Mulawarman Sel. Dalam I, Kramas, Kec. Tembalang, Kota Semarang, Jawa Tengah 50278",
    area: "25m x 15m",
    length: "25 meter",
    number: "Lapangan 1",
  },
  semarang_badminton: {
    name: "Smashville Badminton Center",
    loc: "No.1G, Jl. Kr. Rejo Raya, Srondol Wetan, Kec. Banyumanik, Kota Semarang, Jawa Tengah 50264",
    price: 95000,
    img: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxIDVx0xYE-d5s6BNuW4wIMorXrcTsd8_KHIiyQQBUAo1Ahl2bniCnbM4cbO6kBCmaNYsDYydki5qcAmSETci4jbQYFrR9Ak5sNpD90QF7ubcNnI3mkiFBRIZqjWyoMb9YYxSNSoQ=s680-w680-h510-rw",
    type: "Badminton",
    description:
      "Arena bulutangkis dengan 5 lapangan profesional. Sistem booking online.",
    facilities: [
      "5 Lapangan Badminton",
      "Pencahayaan Optimal",
      "Kantin",
      "Parkir Luas",
      "Kamar Ganti",
      "Toilet",
    ],
    location:
      "No.1G, Jl. Kr. Rejo Raya, Srondol Wetan, Kec. Banyumanik, Kota Semarang, Jawa Tengah 50264",
    area: "13.4m x 6.1m",
    length: "13.4 meter",
    number: "Lapangan 1-5",
  },
  semarang_tennis: {
    name: "JJTC Bukitsari Tennis Park",
    loc: "Jl. B. Mangga Jl. Bukit Sari Raya No.3, Ngesrep, Kec. Banyumanik, Kota Semarang, Jawa Tengah 50261",
    price: 130000,
    img: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwO0DkIJgzfmNoxrZaPstvPQJTHO9bPkKLUo5ECnXVNQcdFPFrG3ZfECcyHZvuoWOOkyAjVSLQEG42y7Ln6jNlemPZHdRZkxkFH-YJAUgBNkFe5NiSNAVM40D66VF2uj_4WMLAq=s680-w680-h510-rw",
    type: "Tennis",
    description:
      "Taman tenis dengan 4 lapangan berkualitas. Suasana yang nyaman dan asri.",
    facilities: [
      "4 Lapangan Tennis",
      "Pencahayaan Optimal",
      "Kantin",
      "Parkir Luas",
      "Kamar Ganti",
      "Toilet",
      "Pro Shop",
    ],
    location:
      "Jl. B. Mangga Jl. Bukit Sari Raya No.3, Ngesrep, Kec. Banyumanik, Kota Semarang, Jawa Tengah 50261",
    area: "23.77m x 10.97m",
    length: "23.77 meter",
    number: "Lapangan 1-4",
  },
  semarang_mini: {
    name: "Padel Ground",
    loc: " Jl. Dr. Wahidin No.41, Candi, Kec. Candisari, Kota Semarang, Jawa Tengah 50257",
    price: 450000,
    img: "https://asset.ayo.co.id/image/venue-field/175335290994450.image_cropper_1753352903329.jpg.jpeg",
    type: "Padel",
    description: "Pusat padel dengan 2 lapangan. Cocok untuk komunitas.",
    facilities: [
      "Pencahayaan LED",
      "Tribun Penonton",
      "Parkir Luas",
      "Kamar Ganti",
      "Toilet",
    ],
    location:
      " Jl. Dr. Wahidin No.41, Candi, Kec. Candisari, Kota Semarang, Jawa Tengah 50257",
    area: "10m x 20m",
    length: "20 meter",
    number: "Lapangan A & B",
  },
  semarang_basket: {
    name: "SAHABAT ARENA SEMARANG",
    loc: " Jl. Supriyadi Jl. Sendangsari Utara XIII, Kalicari, Kec. Pedurungan, Kota Semarang, Jawa Tengah 50198",
    price: 140000,
    img: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzxJTBMrhoLTf5tZ5RnGjeKAmPQ6tLLnuPK3tU72EqoALhq6hkuhiPfOvX9OPVpeyn5EV2mqQ0LaiYoBpQ8hYm-G_Tx8bOHLEabeEMjKrlgz_UT8nmJ07VbKZ5Gt6L7fko8I3c=s680-w680-h510-rw",
    type: "Basket",
    description:
      "Gedung basket dengan 1 court indoor. Fasilitas lengkap untuk latihan.",
    facilities: [
      "1 Lapangan Basket",
      "Tribun Luas",
      "Pencahayaan Optimal",
      "Kantin",
      "Parkir Luas",
      "Kamar Ganti",
      "Toilet",
    ],
    location:
      " Jl. Supriyadi Jl. Sendangsari Utara XIII, Kalicari, Kec. Pedurungan, Kota Semarang, Jawa Tengah 50198",
    area: "28m x 15m",
    length: "28 meter",
    number: "Court 1",
  },

  // === KOTA BARU: MEDAN (6 Lapangan) ===
  medan_soccer: {
    name: "Medan Mini Soccer (MMSC)",
    loc: "Sempakata, Medan Selayang, Medan City, North Sumatra 20131",
    price: 950000,
    img: "https://lh3.googleusercontent.com/p/AF1QipN9mixJRyVUSlt5IJJAkkzJ2khPYs2tydboMP7r=s680-w680-h510-rw",
    type: "Soccer",
    description:
      "Stadion sepak bola dengan kapasitas besar. Cocok untuk pertandingan regional.",
    facilities: [
      "Rumput Sintesis Berkualitas",
      "Pencahayaan Stadion",
      "Tribun Penonton 30 Kursi",
      "Parkir Luas",
      "Kamar Ganti",
      "Toilet",
      "Mushola",
    ],
    location: "Sempakata, Medan Selayang, Medan City, North Sumatra 20131",
    area: "90m x 68m",
    length: "90 meter",
    number: "Lapangan Utama",
  },
  medan_futsal: {
    name: "Terminal Sport Center (Terminal Futsal)",
    loc: "Jl. SMTK Medan No.10, Padang Bulan Selayang I, Kec. Medan Selayang, Kota Medan, Sumatera Utara 20154",
    price: 220000,
    img: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSw-AXMSe_zl-MbdWPiNd3rNOY2C4mKOlZ1LTQvoSD5BdWPHtq-cSwXfhyUUntlqlENK_SE2GXxFBjWA5CbgPUhV1Z_rhUfqY9UdVt5AFpQbnZ4YRvHq1KQliN3agvKW3VVn3fg=s680-w680-h510-rw",
    type: "Futsal",
    description:
      "Arena futsal modern dengan 2 lapangan sintetis. Dilengkapi dengan sistem sound yang baik.",
    facilities: [
      "2 Lapangan Futsal",
      "Pencahayaan LED",
      "Kantin",
      "Parkir Luas",
      "Kamar Ganti",
      "Toilet",
    ],
    location:
      "Jl. SMTK Medan No.10, Padang Bulan Selayang I, Kec. Medan Selayang, Kota Medan, Sumatera Utara 20154",
    area: "25m x 15m",
    length: "25 meter",
    number: "Lapangan 1-2",
  },
  medan_badminton: {
    name: "AHS Badminton Centre",
    loc: "Jl. Letda Sujono No.88A, Tembung, Kec. Medan Tembung, Kota Medan, Sumatera Utara 20371",
    price: 100000,
    img: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzGQbW562MRfJh2B1j0hYaofaY94fMaG2ieCjg5gwTQ-0T9ayMEcjjsIzLeOS_shxYh3pG9Xa7bakYYeWLEijgDbShmEweA-RlNhWrQoX546Yo8Uz7OqvuqXLC5ay-6ETp31g_Nhg=s680-w680-h510-rw",
    type: "Badminton",
    description:
      "Stadion bulutangkis dengan 8 lapangan. Fasilitas turnamen kelas nasional.",
    facilities: [
      "8 Lapangan Badminton",
      "Pencahayaan Profesional",
      "Kantin",
      "Parkir Luas",
      "Kamar Ganti",
      "Toilet",
    ],
    location:
      "Jl. Letda Sujono No.88A, Tembung, Kec. Medan Tembung, Kota Medan, Sumatera Utara 20371",
    area: "13.4m x 6.1m",
    length: "13.4 meter",
    number: "Lapangan 1-8",
  },
  medan_tennis: {
    name: "Lapangan Tennis Telkom",
    loc: "Jl. Mongonsidi, Anggrung, Kec. Medan Polonia, Kota Medan, Sumatera Utara 20152",
    price: 160000,
    img: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzu6hva1oDQugc8RoxZjIH-CRA21OW-00_JoW8AidK0PhLLw_s0dZ1exymUhT55IIbk4ySb56Ho0vWaaQUJqDOSSoBlqcRKz_d_WataFzI2afaH1a5YFsE-o97ygj1gKY-6pdd7DLl85XYZ=s680-w680-h510-rw",
    type: "Tennis",
    description:
      "Klub tenis eksklusif dengan 1 lapangan. Pelatih profesional tersedia.",
    facilities: [
      "1s Lapangan Tennis",
      "Pencahayaan Optimal",
      "Kantin",
      "Parkir Luas",
      "Kamar Ganti",
      "Toilet",
      "Pro Shop",
    ],
    location:
      "Jl. Mongonsidi, Anggrung, Kec. Medan Polonia, Kota Medan, Sumatera Utara 20152",
    area: "23.77m x 10.97m",
    length: "23.77 meter",
    number: "Lapangan 1",
  },
  medan_mini: {
    name: "Ultimate Padel",
    loc: "Jl. H. Adam Malik No.90, Silalas, Kec. Medan Bar., Kota Medan, Sumatera Utara 20235",
    price: 550000,
    img: "https://asset.ayo.co.id/image/venue/176017798334388.image_cropper_1760177807876.jpg_middle.jpeg",
    type: "Padel",
    description:
      "lapangan Padel dengan kualitas internasional. Suasana yang nyaman untuk keluarga.",
    facilities: [
      "Pencahayaan LED",
      "Tribun Penonton",
      "Parkir Luas",
      "Kamar Ganti",
      "Toilet",
    ],
    location:
      "JJl. H. Adam Malik No.90, Silalas, Kec. Medan Bar., Kota Medan, Sumatera Utara 20235",
    area: "10m x 20m",
    length: "10 meter",
    number: "Lapangan 1",
  },
  medan_volley: {
    name: "Gaperta Volly Club",
    loc: "Jl. Gaperta No.100, Helvetia Tengah, Kec. Medan Helvetia, Kota Medan, Sumatera Utara 20123",
    price: 110000,
    img: "https://membuatlapanganfutsalsendiri.wordpress.com/wp-content/uploads/2017/11/kontraktor-lapangan-voli-di-kediri.jpg?w=1100",
    type: "Voli",
    description:
      "Pusat voli dengan 4 court indoor. Cocok untuk latihan tim profesional.",
    facilities: [
      "Pencahayaan Optimal",
      "Kantin",
      "Parkir Luas",
      "Kamar Ganti",
      "Toilet",
    ],
    location:
      "Jl. Gaperta No.100, Helvetia Tengah, Kec. Medan Helvetia, Kota Medan, Sumatera Utara 20123",
    area: "18m x 9m",
    length: "18 meter",
    number: "Court 1",
  },

  // === KOTA BARU: BALI (6 Lapangan) ===
  bali_soccer: {
    name: "BALI MINI SOCCER",
    loc: "Entrance Beside DINA, Gg. Kerinci, Padangsambian Klod, Denpasar Barat, Denpasar City, Bali 80117",
    price: 1300000,
    img: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwCGjNXDNmxYexUAovMMIX135GXwlJQNguWqi09sc1bCJcvCN9XDmDrsvjRlrqMwkvjmSJR1dNsoxQvmjEyady3qzCTApUw5NUU3_8hGxq5B8_VQleD0Bkok4RPm0GA5cRWEXRgSw=s680-w680-h510-rw",
    type: "Soccer",
    description:
      "Lapangan sepak bola dengan view pantai yang menakjubkan. Pengalaman bermain yang unik.",
    facilities: [
      "Rumput Sintetis Premium",
      "Pencahayaan Sunset",
      "Tribun Penonton",
      "Parkir Luas",
      "Kamar Ganti",
      "Toilet",
      "Cafe Beach",
    ],
    location:
      "Entrance Beside DINA, Gg. Kerinci, Padangsambian Klod, Denpasar Barat, Denpasar City, Bali 80117",
    area: "100m x 64m",
    length: "100 meter",
    number: "Lapangan Utama",
  },
  bali_futsal: {
    name: "BALI FUTSAL",
    loc: "Jl. Sipirok No.118, Padang Bulan Selayang I, Kec. Medan Selayang, Kota Medan, Sumatera Utara 20154",
    price: 300000,
    img: "https://lh3.googleusercontent.com/proxy/qca0WbNvRPVGoBTk9BU3JUIZrX3LsD0nl6lk4xmEbvFLeI7YXal34RhciIvDw1iiJ-vjOmTduKNN1Q3UE_OlSsZ3dhtmxPMmY4mXcCgZgfcvNhX3hzD41cI04Tgxc_SuTfNJD4tBZyZrMRw8IT1OtwuQb8YHbySiVkXjZg=s680-w680-h510-rw",
    type: "Futsal",
    description:
      "Resort futsal dengan konsep tropical. 1 lapangan outdodr dengan suasana kota rio de janeiro.",
    facilities: [
      "1 Lapangan Futsal",
      "Pencahayaan LED",
      "Restaurant",
      "Parkir Luas",
      "Kamar Ganti",
      "Toilet",
    ],
    location:
      "Jl. Sipirok No.118, Padang Bulan Selayang I, Kec. Medan Selayang, Kota Medan, Sumatera Utara 20154",
    area: "25m x 15m",
    length: "25 meter",
    number: "Lapangan 1",
  },
  bali_badminton: {
    name: "BALI BADMINTON VILLAGE",
    loc: "Jl. Glogor Carik, Pemogan, Denpasar Selatan, Kota Denpasar, Bali",
    price: 120000,
    img: "https://static.bali.live/uploads/107660/IMG_6499.webp",
    type: "Badminton",
    description:
      "Lapangan bulutangkis dengan 3 lapangan. Konsep tradisional Bali yang autentik.",
    facilities: [
      "3 Lapangan Badminton",
      "Pencahayaan Optimal",
      "Warung Bali",
      "Parkir Luas",
      "Kamar Ganti",
      "Toilet",
    ],
    location:
      "Jl. Glogor Carik, Pemogan, Denpasar Selatan, Kota Denpasar, Bali",
    area: "13.4m x 6.1m",
    length: "13.4 meter",
    number: "Lapangan 1-83",
  },
  bali_tennis: {
    name: "Liga Tennis & Padel Ubud",
    loc: " Jl. Katik Lantang, Singakerta, Kecamatan Ubud, Kabupaten Gianyar, Bali 80571",
    price: 200000,
    img: "https://lh3.googleusercontent.com/p/AF1QipMRgvkRyqBd3EBKC8k9BcuKT5TcvRchCd622HLc=s680-w680-h510-rw",
    type: "Tennis",
    description:
      "Klub tenis dengan view laut. 3 lapangan dengan standar internasional.",
    facilities: [
      "3 Lapangan Tennis",
      "Pencahayaan Sunset",
      "Beach Bar",
      "Parkir Luas",
      "Kamar Ganti",
      "Toilet",
      "Pro Shop",
    ],
    location:
      "Jl. Katik Lantang, Singakerta, Kecamatan Ubud, Kabupaten Gianyar, Bali 80571",
    area: "23.77m x 10.97m",
    length: "23.77 meter",
    number: "Lapangan 1-3",
  },
  bali_mini: {
    name: "Padel Club Indonesia - Jimbaran, Bali",
    loc: " Kawasan Jimbaran Hub Jalan Karang Mas Sejahtera, Jl. Pura Taksu, Jimbaran, Kec. Kuta Sel., Kabupaten Badung, Bali 80361",
    price: 700000,
    img: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSx3Jy7NMMLiZcKajpsi_4Rd68L7-Exf0D8i7YUHAhPlMoTHizmOU_Q8uokex3-trpMIhBid4foLRYT4_FJvhstEce68bwzBZzKP-R7fKYyyeXwHQREtWB7dNywQbX8MISmvaWNbMg=s680-w680-h510-rw",
    type: "Padel",
    description:
      "Padel Court dengan konsep beach front. Pengalaman bermain yang tak terlupakan.",
    facilities: [
      "Pencahayaan LED",
      "Beach Lounge",
      "Parkir Luas",
      "Kamar Ganti",
      "Toilet",
    ],
    location:
      " Kawasan Jimbaran Hub Jalan Karang Mas Sejahtera, Jl. Pura Taksu, Jimbaran, Kec. Kuta Sel., Kabupaten Badung, Bali 80361",
    area: "10m x 20m",
    length: "20 meter",
    number: "Lapangan Beach 1 & 2",
  },
  bali_yoga: {
    name: "LIGABALI",
    loc: "Jl. Bypass Ngurah Rai No.88, Kesiman Petilan, Kec. Denpasar Tim., Kota Denpasar, Bali 80237",
    price: 150000,
    img: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwvuzWGvLds2M5NKq0eWyHQWJqrRBc8X4_7ZfqKKRhs2wSzgZEHm8CUoT-Ak9es02PDJrp13Oy2Br_N0luZpGddwMyi_gVgeuBDdZNterPwyNIJKDH9y980Momsw_GreoarwL0SMg=s680-w680-h510-rw",
    type: "Fitness",
    description: "lapangan voli dengan lantai vinyl yang berkualitas",
    facilities: [
      "Pencahayaan LED",
      "Bench",
      "Parkir Luas",
      "Kamar Ganti",
      "Toilet",
    ],
    location:
      "l. Bypass Ngurah Rai No.88, Kesiman Petilan, Kec. Denpasar Tim., Kota Denpasar, Bali 80237",
    area: "18m x 9m",
    length: "18 meter",
    number: "Lapangan 1",
  },
};

// State Global
let currentVenueId = null;
let currentPrice = 0;
let selectedSlots = []; // Array of {id, price, date, time}

// QR Polling state
let qrPollingInterval = null;
let qrCountdownTimer = null;
let qrSecondsLeft = 60;
let qrcodeInstance = null;
let currentTransactionId = null;

// === AUTH (LocalStorage) ===
// === AUTH (LocalStorage) ===

function showLoginModal() {
  // Tutup modal register jika terbuka
  const registerModal = bootstrap.Modal.getInstance(
    document.getElementById("registerModal")
  );
  if (registerModal) registerModal.hide();

  // Tampilkan modal login
  const modal = new bootstrap.Modal(document.getElementById("loginModal"));
  modal.show();
}

function showRegisterModal() {
  // Tutup modal login jika terbuka
  const loginModal = bootstrap.Modal.getInstance(
    document.getElementById("loginModal")
  );
  if (loginModal) loginModal.hide();

  // Tampilkan modal register
  const modal = new bootstrap.Modal(document.getElementById("registerModal"));
  modal.show();
}

function loginUser() {
  const email = document.getElementById("login-email").value.trim();
  const password = document.getElementById("login-password").value.trim();

  if (!email || !password) {
    alert("Lengkapi semua field login.");
    return;
  }

  // Cek apakah user sudah terdaftar
  const users = JSON.parse(localStorage.getItem("gelora_users") || "[]");
  const user = users.find((u) => u.email === email && u.password === password);

  if (!user) {
    alert("Email atau password salah.");
    return;
  }

  // Simpan user yang login
  localStorage.setItem("gelora_current_user", JSON.stringify(user));

  // Update navbar
  updateAuthUI();

  // Close modal
  const modalEl = document.getElementById("loginModal");
  const modal = bootstrap.Modal.getInstance(modalEl);
  if (modal) modal.hide();

  alert("Login berhasil!");

  // Opsional: Jika data profil (username) masih kosong, langsung buka halaman profil
  if (!user.username && typeof showProfile === "function") {
    showProfile();
  }
}

function registerUser() {
  const name = document.getElementById("register-name").value.trim();
  const email = document.getElementById("register-email").value.trim();
  const password = document.getElementById("register-password").value.trim();
  const confirmPassword = document
    .getElementById("register-confirm-password")
    .value.trim();

  if (!name || !email || !password || !confirmPassword) {
    alert("Lengkapi semua field pendaftaran.");
    return;
  }

  if (password !== confirmPassword) {
    alert("Konfirmasi password tidak sesuai.");
    return;
  }

  // Cek apakah email sudah terdaftar
  const users = JSON.parse(localStorage.getItem("gelora_users") || "[]");
  if (users.find((u) => u.email === email)) {
    alert("Email sudah terdaftar. Silakan login.");
    return;
  }

  // Simpan user baru dengan template data profil kosong
  const newUser = {
    name,
    email,
    password,
    username: "",
    phone: "",
    gender: "",
    dobMonth: "",
    dobYear: "",
    dobDate: "",
    sports: [],
  };

  users.push(newUser);
  localStorage.setItem("gelora_users", JSON.stringify(users));

  // PERUBAHAN ALUR: Tidak ada auto-login di sini.
  // 1. Tutup Modal Register
  const modalEl = document.getElementById("registerModal");
  const modal = bootstrap.Modal.getInstance(modalEl);
  if (modal) modal.hide();

  // 2. Tampilkan pesan sukses
  alert("Pendaftaran berhasil! Silakan login dengan akun baru Anda.");

  // 3. Buka Modal Login agar user login manual
  showLoginModal();
}

function logoutUser() {
  localStorage.removeItem("gelora_current_user");
  updateAuthUI();

  // Opsional: Kembali ke home setelah logout
  if (typeof goHome === "function") goHome();
}

function getCurrentUser() {
  try {
    const u = localStorage.getItem("gelora_current_user");
    if (!u) return null;
    return JSON.parse(u);
  } catch (e) {
    return null;
  }
}

function updateAuthUI() {
  const container = document.getElementById("nav-auth-area");
  const user = getCurrentUser();
  container.innerHTML = "";

  if (user) {
    // show dropdown with name + logout
    container.className = "nav-item dropdown";
    container.innerHTML = `
            <a class="nav-link dropdown-toggle text-uppercase" href="#" id="userDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Hi, ${escapeHtml(user.name)}
            </a>
            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
                <li><a class="dropdown-item" href="#" onclick="showProfile()">Profil Saya</a></li>
                <li><a class="dropdown-item" href="#" onclick="showMyBooking()">My Booking</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item text-danger" href="#" onclick="logoutUser()">Logout</a></li>
            </ul>
        `;
  } else {
    // show login link
    container.className = "nav-item";
    container.innerHTML = `<a class="nav-link" href="javascript:void(0)" id="btnShowLogin" onclick="showLoginModal()">LOGIN</a>`;
  }
}

function escapeHtml(unsafe) {
  return unsafe.replace(/[&<"'>]/g, function (m) {
    return {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;",
    }[m];
  });
}

// === NAVIGATION ===
function openBooking(id) {
    const data = venuesData[id];
    if (!data) return;

    currentVenueId = id;
    currentPrice = data.price;

  // Populate Data
  document.getElementById("detail-title").innerText = data.name;
  document.getElementById(
    "detail-loc"
  ).innerText = `${data.loc} (${data.type})`;
  document.getElementById("detail-img").src = data.img;

  // Populate About Tab
  document.getElementById("venue-description").innerText = data.description;
  document.getElementById("venue-location").innerText = data.location;
  document.getElementById("venue-area").innerText = data.area;
  document.getElementById("venue-length").innerText = data.length;
  document.getElementById("venue-number").innerText = data.number;

  loadGoogleMapsEmbed(id);

  // Populate Facilities
  const facilitiesList = document.getElementById("venue-facilities");
  facilitiesList.innerHTML = "";
  data.facilities.forEach((facility) => {
    const li = document.createElement("li");
    li.className = "mb-1";
    li.innerHTML = `<i class="fas fa-check text-success me-2"></i>${facility}`;
    facilitiesList.appendChild(li);
  });

  // Reset Selection
  selectedSlots = [];
  updateCartAndCheckout();

  // Generate Schedule
  renderSchedule();

  // Switch Views
  hideAllViews(); // Sembunyikan home, profil, dll
    document.getElementById("view-booking").classList.remove("d-none");
    
    window.scrollTo(0, 0);
}



// === GOOGLE MAPS FUNCTIONS - SIMPLE VERSION ===

// Data link Google Maps untuk setiap venue
const venueMapsLinks = {
  asatu: "https://maps.app.goo.gl/GeM6dgcPETfTT43S6", // Ganti dengan link real
  permata: "https://maps.app.goo.gl/JTaakxNJ8fmah8E76",
  tarena: "https://maps.app.goo.gl/QFeBkiV2TKhCXB5W8",
  koci: "https://maps.app.goo.gl/x8WRG9rNY4dwSDYr6",
  dna: "https://maps.app.goo.gl/tYZ6QK713R5R3rZx9",
  iti: "https://maps.app.goo.gl/MxN83dEL9P2xTU1D6",
  bintaro: "https://maps.app.goo.gl/X6Guz9NMGanFUpibAs",
  bai: "https://maps.app.goo.gl/h6ac9Sn7KnzHxhnS7",
  bandung: "https://maps.app.goo.gl/aJBjStVvwP1wGyTbA",
  ganesha: "https://maps.app.goo.gl/1JEHhYb88b32tFK46",
  padel: "https://maps.app.goo.gl/Jr9LHUjK9rAtVLWq9",
  sportiva: "https://maps.app.goo.gl/1ZzSdaUNUj32ZeaQ6",
  elite: "https://maps.app.goo.gl/XZQ9jdezLWVEw7mD7",
  badmintonplus: "https://maps.app.goo.gl/yCx7UHtSVG76x2FT8",
  tenniscity: "https://maps.app.goo.gl/uyAgtU3aVrhq9fdUA",

  // Kota Bogor
  bogor_soccer: "https://maps.app.goo.gl/c6Ckx7KoRXX8U2fe6",
  bogor_futsal: "https://maps.app.goo.gl/7JPfTcHDUGauLgZR7",
  bogor_badminton: "https://maps.app.goo.gl/SXoZcXjHtoizXSPa8",
  bogor_tennis: "https://maps.app.goo.gl/iw4Z96QNoAeetUNW8",
  bogor_mini: "https://maps.app.goo.gl/nnCqWtrx6fkx9oyA9",
  bogor_basket: "https://maps.app.goo.gl/cQgYUrsi2C9r62Fa7",

  // Kota Surabaya
  surabaya_soccer: "https://maps.app.goo.gl/v9Qf77LzjcHYgs8MA",
  surabaya_futsal: "https://maps.app.goo.gl/v9Qf77LzjcHYgs8MA",
  surabaya_badminton: "https://maps.app.goo.gl/ZFT4sKzJw2uDxSgMA",
  surabaya_tennis: "https://maps.app.goo.gl/MqZs1fLTPTcETqSr6",
  surabaya_mini: "https://maps.app.goo.gl/GtNAZwqsxmbhKMyL9",
  surabaya_volley: "https://maps.app.goo.gl/U5WuyKGgnNe7JyR6A",

  // Kota Semarang
  semarang_soccer: "https://maps.app.goo.gl/Hu4ZqLTGFN3KNNyw6",
  semarang_futsal: "https://maps.app.goo.gl/dCp8kX24gVQUnm6A7",
  semarang_badminton: "https://maps.app.goo.gl/e4HrNxRa6Fdi3ykd8",
  semarang_tennis: "https://maps.app.goo.gl/YMBqiiLphHDaVXMw5",
  semarang_mini: "https://maps.app.goo.gl/GqPEsN7hiZ7hG81r8",
  semarang_basket: "https://maps.app.goo.gl/k8QB6W9MHw5oBTqy7",

  // Kota Medan
  medan_soccer: "https://maps.app.goo.gl/gFzv53jHQbth814t8",
  medan_futsal: "https://maps.app.goo.gl/PQ5VTbpFB3v9TkAA9",
  medan_badminton: "https://maps.app.goo.gl/ywsqN7JEGgRfViZx8",
  medan_tennis: "https://maps.app.goo.gl/kk4qoNArRRffmoP76",
  medan_mini: "https://maps.app.goo.gl/vjZy2SuHrstaR1AMA",
  medan_volley: "https://maps.app.goo.gl/mE5nNGMhwi2iYGEi9",

  // Kota Bali
  bali_soccer: "https://maps.app.goo.gl/bcfP1pBABbdqSdXJ9",
  bali_futsal: "https://maps.app.goo.gl/RHPgZE1iK7Mufyhg6",
  bali_badminton: "https://maps.app.goo.gl/cHmXYhk2jeMtfa99A",
  bali_tennis: "https://maps.app.goo.gl/1kX823BE9FmN79EZ9",
  bali_mini: "https://maps.app.goo.gl/zkBtkrWTzduDTLRa6",
  bali_yoga: "https://maps.app.goo.gl/GNQqeVGB5ek9jekC7sssas",
};

// Fungsi untuk load Google Maps embed
function loadGoogleMapsEmbed(venueId) {
  const mapsContainer = document.getElementById("google-maps-embed");
  const venue = venuesData[venueId];

  if (!venue || !mapsContainer) {
    console.log("Maps container atau venue tidak ditemukan");
    return;
  }

  // Encode alamat untuk Google Maps
  const encodedAddress = encodeURIComponent(venue.location);

  // Buat embed URL Google Maps (menggunakan public API key)
  const embedUrl = `https://maps.google.com/maps?q=${encodedAddress}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  // Buat iframe embed
  mapsContainer.innerHTML = `
       <iframe 
            src="${embedUrl}"
            width="100%" 
            height="100%" 
            style="border:0;" 
            allowfullscreen 
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="Peta Lokasi ${venue.name}">
        </iframe>
    `;
}

// Fungsi untuk buka Google Maps di tab baru
function openGoogleMaps() {
  const venueId = currentVenueId;
  const venue = venuesData[venueId];

  if (!venue) return;

  // Cek apakah ada link khusus
  const customLink = venueMapsLinks[venueId];

  if (customLink && !customLink.includes("example")) {
    // Gunakan link khusus jika ada
    window.open(customLink, "_blank");
  } else {
    // Fallback: buat link dari alamat
    const encodedAddress = encodeURIComponent(venue.location);
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
    window.open(mapsUrl, "_blank");
  }
}
// Fungsi Helper: Sembunyikan SEMUA halaman
// === PERBAIKAN FUNGSI NAVIGASI UTAMA ===

// 1. Fungsi untuk menyembunyikan SEMUA halaman
function hideAllViews() {
    const views = [
        'view-home',
        'view-booking', 
        'view-venue-list',
        'view-activity',
        'view-list-venue',
        'view-profile',      // Pastikan ID ini sesuai dengan HTML
        'view-my-booking'    // Pastikan ID ini sesuai dengan HTML
    ];

    views.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.classList.add('d-none');
    });
    
    // Pastikan navbar muncul kembali jika sebelumnya disembunyikan
    const navbar = document.querySelector('.navbar');
    if (navbar) navbar.classList.remove('navbar-hidden');
}

// 2. Fungsi Mobile Menu (Diperbaiki agar Profil bisa diklik)
function setupMobileMenu() {
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector(".navbar-collapse");
  
    if (navbarToggler && navbarCollapse) {
        // Ambil link nav dan item dropdown
        const allNavLinks = document.querySelectorAll(".nav-link, .dropdown-item, .btn-list-venue");
        
        allNavLinks.forEach((link) => {
            link.addEventListener("click", function (e) {
                // PENTING: Jika yang diklik adalah tombol "Hi, User" (Dropdown Toggle), JANGAN tutup menu
                if (this.classList.contains("dropdown-toggle")) {
                    return; 
                }

                // Jika mode mobile (< 992px) dan menu sedang terbuka
                if (window.innerWidth < 992 && navbarCollapse.classList.contains("show")) {
                    // Beri jeda 200ms agar fungsi onClick (seperti showProfile) jalan dulu, baru menu nutup
                    setTimeout(() => {
                        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse) || new bootstrap.Collapse(navbarCollapse);
                        bsCollapse.hide();
                    }, 200); 
                }
            });
        });
    }
}


function goHome() {
    hideAllViews(); // Sembunyikan profil, booking, dll
    document.getElementById("view-home").classList.remove("d-none");
    
    // Reset posisi scroll ke paling atas
    window.scrollTo(0, 0);
}

function showVenueList() {
    hideAllViews();
    document.getElementById("view-venue-list").classList.remove("d-none");
    
    // Reset filter visual jika perlu
    document.getElementById("filter-city").value = "all";
    renderVenueCards(Object.keys(venuesData));
    
    window.scrollTo(0, 0);
}

function showActivity() {
    hideAllViews();
    document.getElementById("view-activity").classList.remove("d-none");
    window.scrollTo(0, 0);
}

function showListYourVenue() {
    hideAllViews();
    document.getElementById("view-list-venue").classList.remove("d-none");
    window.scrollTo(0, 0);
}

// === GANTI FUNGSI showProfile DENGAN INI ===
function showProfile() {
    const user = getCurrentUser();
    if (!user) {
        // Jika belum login, paksa tutup navbar dan buka modal login
        closeMobileMenu(); 
        forceCloseDropdown(); // Tambahan baru
        alert("Silakan login terlebih dahulu.");
        showLoginModal();
        return;
    }

    // 1. Tutup Menu Mobile (Hamburger)
    closeMobileMenu();
    
    // 2. Tutup Dropdown User (Ini yang memperbaiki masalah Anda)
    forceCloseDropdown();

    // 3. Pindah Halaman
    hideAllViews();
    document.getElementById("view-profile").classList.remove("d-none");
    
    // 4. Pastikan Navbar terlihat (tidak hidden) dan scroll ke atas
    const navbar = document.querySelector('.navbar');
    if (navbar) navbar.classList.remove('navbar-hidden');

    setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 50);
    
    // --- LOAD DATA USER KE FORM (Kode Lama) ---
    document.getElementById("sidebar-name").innerText = user.name;
    document.getElementById("sidebar-username").innerText = user.username || "@username";
    
    document.getElementById("profile-name").value = user.name || "";
    document.getElementById("profile-username").value = user.username || "";
    document.getElementById("profile-phone").value = user.phone || "";
    document.getElementById("profile-gender").value = user.gender || "";
    document.getElementById("profile-month").value = user.dobMonth || "";
    document.getElementById("profile-year").value = user.dobYear || "";
    document.getElementById("profile-date").value = user.dobDate || "";

    // Load Foto & Sport
    const imgPreview = document.getElementById('profile-preview-img');
    if (user.avatar) {
        imgPreview.src = user.avatar;
        tempProfileImage = user.avatar;
    } else {
        imgPreview.src = "https://cdn-icons-png.flaticon.com/512/1077/1077114.png";
        tempProfileImage = "";
    }

    tempSelectedSports = user.sports || [];
    document.querySelectorAll('.sport-item').forEach(el => {
        el.classList.remove('selected');
    });

    document.querySelectorAll('.sport-item').forEach(el => {
        const onclickText = el.getAttribute('onclick');
        if (onclickText) {
            const match = onclickText.match(/'([^']+)'/);
            if (match && match[1]) {
                const sportName = match[1];
                if (tempSelectedSports.includes(sportName)) {
                    el.classList.add('selected');
                }
            }
        }
    });

  
    // Load Olahraga Favorit (Kode lama)
    tempSelectedSports = user.sports || [];
    document.querySelectorAll('.sport-item').forEach(el => {
        el.classList.remove('selected');
    });
    document.querySelectorAll('.sport-item').forEach(el => {
        const onclickText = el.getAttribute('onclick');
        if (onclickText) {
            const match = onclickText.match(/'([^']+)'/);
            if (match && match[1]) {
                const sportName = match[1];
                if (tempSelectedSports.includes(sportName)) {
                    el.classList.add('selected');
                }
            }
        }
    });

    // 5. Scroll Paksa ke Atas
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 100); // Beri jeda sedikit agar transisi menu selesai
}


// === GANTI FUNGSI showMyBooking DENGAN INI ===
function showMyBooking() {
    const user = getCurrentUser();
    if (!user) {
        closeMobileMenu();
        alert("Silakan login untuk melihat riwayat booking.");
        showLoginModal();
        return;
    }

    // 1. Tutup Menu Mobile
    closeMobileMenu();

    // 2. Pindah Halaman
    hideAllViews();
    document.getElementById("view-my-booking").classList.remove("d-none");

    // 3. Scroll Paksa ke Atas
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 100);

    // 4. Render List (Kode lama Anda)
    const listContainer = document.getElementById("my-booking-list");
    const emptyState = document.getElementById("empty-booking-state");
    
    // Pastikan user.bookingHistory ada
    const history = user.bookingHistory || [];
    
    listContainer.innerHTML = "";

    if (history.length === 0) {
        emptyState.classList.remove("d-none");
    } else {
        emptyState.classList.add("d-none");
        history.forEach((booking) => {
            let slotsHtml = "";
            booking.items.forEach((slot) => {
                slotsHtml += `<span class="badge bg-light text-dark border me-1 mb-1">${slot.date} (${slot.time})</span>`;
            });

            const cardHtml = `
                <div class="booking-history-card">
                    <div class="row align-items-center">
                        <div class="col-md-2">
                            <img src="${booking.venueImg}" class="img-fluid rounded" style="height: 80px; width:100%; object-fit: cover;">
                        </div>
                        <div class="col-md-6">
                            <h5 class="fw-bold mb-1">${booking.venueName}</h5>
                            <div class="text-muted small mb-2">Order ID: #${booking.id}</div>
                            <div class="mb-2">${slotsHtml}</div>
                            <div class="small text-muted">Dipesan pada: ${booking.bookingDate}</div>
                        </div>
                        <div class="col-md-4 text-md-end mt-3 mt-md-0">
                            <div class="booking-status status-paid d-inline-block mb-2">${booking.status}</div>
                            <h5 class="fw-bold text-primary">${formatRupiah(booking.totalPrice)}</h5>
                           <button class="btn btn-sm btn-outline-primary mt-1" onclick="showETicket('${booking.id}')">Lihat E-Tiket</button>
                        </div>
                    </div>
                </div>
            `;
            listContainer.innerHTML += cardHtml;
        });
    }
}
function switchTab(tabName) {
  // Update active tab
  document.querySelectorAll(".tab-item").forEach((tab) => {
    tab.classList.remove("active");
  });
  event.target.classList.add("active");

  // Show corresponding content
  document.querySelectorAll(".tab-content").forEach((content) => {
    content.classList.remove("active");
  });
  document.getElementById(`tab-${tabName}`).classList.add("active");
}

// === SCHEDULE LOGIC ===
function formatRupiah(num) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(num);
}

function changeVenueType() {
  const select = document.getElementById("field-select");
  if (select.value === "field2") {
    currentPrice = Math.floor(venuesData[currentVenueId].price * 0.8);
  } else {
    currentPrice = venuesData[currentVenueId].price;
  }
  selectedSlots = [];
  updateCartAndCheckout();
  renderSchedule();
}

function renderSchedule() {
  const container = document.getElementById("schedule-grid");
  container.innerHTML = "";

  const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  const today = new Date();

  // Generate 7 Hari
  for (let i = 0; i < 7; i++) {
    let d = new Date(today);
    d.setDate(today.getDate() + i);

    let dateNum = d.getDate();
    let monthShort = d.toLocaleString("default", { month: "short" });
    let dateStr = `${dateNum} ${monthShort}`;
    let dayName = days[d.getDay()];

    let col = document.createElement("div");
    col.className = "day-column";

    // Header Kolom
    col.innerHTML = `
            <div class="day-header">
                <div class="day-date">${dateStr}</div>
                <div class="day-name">${dayName}</div>
            </div>
        `;

    // Generate Jam 08:00 - 23:00 dengan variasi booked yang berbeda per venue
    for (let h = 8; h < 23; h++) {
      let start = h < 10 ? `0${h}.00` : `${h}.00`;
      let end = h + 1 < 10 ? `0${h + 1}.00` : `${h + 1}.00`;
      let timeStr = `${start} - ${end}`;
      let slotId = `${dateStr}-${start}`;

      // Random Booked Logic dengan variasi berdasarkan venue ID
      // Setiap venue memiliki pola booked yang berbeda
      let isBooked = false;
      const venuePattern = getVenueBookingPattern(currentVenueId);

      if (venuePattern === "weekend") {
        // Weekend lebih padat
        isBooked =
          d.getDay() === 0 || d.getDay() === 6
            ? Math.random() < 0.6
            : Math.random() < 0.2;
      } else if (venuePattern === "evening") {
        // Evening hours lebih padat
        isBooked =
          h >= 17 && h <= 21 ? Math.random() < 0.7 : Math.random() < 0.15;
      } else if (venuePattern === "popular") {
        // Venue populer - lebih banyak booked
        isBooked = Math.random() < 0.5;
      } else {
        // Default pattern
        isBooked = Math.random() < 0.3;
      }

      let slotHtml = `
                <div class="time-slot ${isBooked ? "booked" : ""}" 
                        onclick="toggleSlot(this, '${slotId}', '${dateStr}', '${timeStr}')">
                    <div class="slot-top">
                        <i class="fas fa-plus-circle icon-plus"></i>
                        <span class="slot-date-small">${dateStr}</span>
                    </div>
                    <span class="slot-time">${timeStr}</span>
                    <span class="slot-price">${formatRupiah(
                      currentPrice
                    )}</span>
                    <span class="slot-status">${
                      isBooked ? "Booked" : "Available"
                    }</span>
                </div>
            `;
      col.innerHTML += slotHtml;
    }
    container.appendChild(col);
  }
}

// Fungsi untuk menentukan pola booking berdasarkan venue ID
function getVenueBookingPattern(venueId) {
  const patterns = {
    weekend: [
      "bali_soccer",
      "bali_futsal",
      "bali_tennis",
      "bogor_soccer",
      "bandung",
    ],
    evening: [
      "surabaya_futsal",
      "semarang_futsal",
      "medan_futsal",
      "tarena",
      "elite",
    ],
    popular: ["asatu", "permata", "bintaro", "surabaya_soccer", "medan_soccer"],
  };

  for (const [pattern, venues] of Object.entries(patterns)) {
    if (venues.some((venue) => venueId.includes(venue))) {
      return pattern;
    }
  }

  return "default";
}

// === INTERACTION ===
function toggleSlot(el, id, date, time) {
  if (el.classList.contains("booked")) return;

  if (el.classList.contains("selected")) {
    // Unselect
    el.classList.remove("selected");
    selectedSlots = selectedSlots.filter((s) => s.id !== id);
  } else {
    // Select
    el.classList.add("selected");
    selectedSlots.push({ id, price: currentPrice, date, time });
  }
  updateCartAndCheckout();
}

function updateCartAndCheckout() {
  const bar = document.getElementById("checkout-bar");
  const cartBadge = document.getElementById("nav-cart-badge");
  const slotCount = document.getElementById("slot-count");
  const totalPrice = document.getElementById("total-price");

  // Hitung Total
  let total = selectedSlots.reduce((acc, item) => acc + item.price, 0);

  // Update Navbar Cart
  if (selectedSlots.length > 0) {
    cartBadge.style.display = "inline-block";
    cartBadge.innerText = selectedSlots.length;
  } else {
    cartBadge.style.display = "none";
  }

  // Update Sticky Bar
  slotCount.innerText = selectedSlots.length;
  totalPrice.innerText = formatRupiah(total);

  if (selectedSlots.length > 0) {
    bar.classList.add("active");
  } else {
    bar.classList.remove("active");
  }
}

// === PAYMENT FLOW ===
function showPaymentModal() {
  const modal = new bootstrap.Modal(document.getElementById("paymentModal"));
  document.getElementById("modal-venue-name").innerText =
    venuesData[currentVenueId].name;

  let listHtml = "";
  let total = 0;
  selectedSlots.forEach((s) => {
    listHtml += `<div>${s.date} | ${s.time} - ${formatRupiah(s.price)}</div>`;
    total += s.price;
  });

  document.getElementById("modal-items").innerHTML = listHtml;
  document.getElementById("modal-total").innerText = formatRupiah(total);
  modal.show();
}

// open QR modal and start auto-detect simulation
function openQrPayment() {
  const user = getCurrentUser();
  if (!user) {
    // require login
    alert("Silakan login terlebih dahulu sebelum melakukan pembayaran.");
    showLoginModal();
    return;
  }

  // close payment summary if open
  const pmEl = document.getElementById("paymentModal");
  const pmInst = bootstrap.Modal.getInstance(pmEl);
  if (pmInst) pmInst.hide();

  // build transaction (simulated)
  const txnId = "TXN-" + Date.now();
  currentTransactionId = txnId;

  // amount
  let amount = selectedSlots.reduce((acc, item) => acc + item.price, 0);
  if (amount <= 0) {
    alert("Pilih minimal 1 slot sebelum melakukan pembayaran.");
    return;
  }

  // Generate QR payload (simulasi QRIS-like string)
  const payload = JSON.stringify({
    txn: txnId,
    venue: currentVenueId,
    user: user.email,
    amount: amount,
    createdAt: new Date().toISOString(),
  });

  // show modal
  const modal = new bootstrap.Modal(document.getElementById("qrPaymentModal"));
  modal.show();

  // render QR
  renderQr(payload, amount);

  // start auto-polling simulation (auto detect paid)
  startQrPollingSim(txnId);
}

function renderQr(payload, amount) {
  const container = document.getElementById("qrContainer");
  container.innerHTML = "";
  // destroy previous qr if any
  qrcodeInstance = new QRCode(container, {
    text: payload,
    width: 200,
    height: 200,
    correctLevel: QRCode.CorrectLevel.H,
  });

  document.getElementById("qr-amount").innerText = formatRupiah(amount);
  document.getElementById("qr-status").innerText = "Menunggu pembayaran...";
  document.getElementById("qr-time-left").innerText = 60;
  qrSecondsLeft = 60;
}

// AUTO-DETECT SIMULATION
function startQrPollingSim(txnId) {
  stopQrPolling(); // clear existing

  // Simulate: after random 7-18s, payment completes automatically (simulate merchant/payment processor)
  const autoPayDelay = Math.floor(Math.random() * 12) + 7; // 7..18 sec
  let elapsed = 0;

  // countdown display
  qrCountdownTimer = setInterval(() => {
    qrSecondsLeft--;
    document.getElementById("qr-time-left").innerText = qrSecondsLeft;
    if (qrSecondsLeft <= 0) {
      // expired
      stopQrPolling();
      document.getElementById("qr-status").innerText =
        "QR expired. Silakan coba ulang.";
    }
  }, 1000);

  // polling interval to 'check' status (simulated)
  qrPollingInterval = setInterval(() => {
    elapsed++;
    // if elapsed reaches autoPayDelay => mark paid
    if (elapsed >= autoPayDelay) {
      // mark payment success
      onPaymentSuccess(txnId);
    } else {
      // still waiting - update status dots
      document.getElementById("qr-status").innerText =
        "Menunggu pembayaran" + ".".repeat((elapsed % 3) + 1);
    }
  }, 1000);
}

function stopQrPolling() {
  if (qrPollingInterval) {
    clearInterval(qrPollingInterval);
    qrPollingInterval = null;
  }
  if (qrCountdownTimer) {
    clearInterval(qrCountdownTimer);
    qrCountdownTimer = null;
  }
}

// manual simulate (for developer/testing)
function simulateManualPaid() {
  if (!currentTransactionId) return;
  onPaymentSuccess(currentTransactionId);
}

function onPaymentSuccess(txnId) {
  // ensure only once
  if (!qrPollingInterval && !qrCountdownTimer) return;

  stopQrPolling();
  document.getElementById("qr-status").innerText = "Pembayaran berhasil ✅";
  document.getElementById("qr-time-left").innerText = 0;

  // === LOGIKA PENYIMPANAN KE MY BOOKING ===
  const currentUser = getCurrentUser();

  if (currentUser) {
    // 1. Buat Objek Booking Baru
    const newBooking = {
      id: txnId,
      venueName: venuesData[currentVenueId].name,
      venueImg: venuesData[currentVenueId].img,
      items: selectedSlots, // Menyimpan slot yang dipilih {date, time, price}
      totalPrice: selectedSlots.reduce((acc, item) => acc + item.price, 0),
      bookingDate: new Date().toLocaleDateString("id-ID", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      status: "Lunas",
    };

    // 2. Ambil data users dari LocalStorage
    const users = JSON.parse(localStorage.getItem("gelora_users") || "[]");
    const userIndex = users.findIndex((u) => u.email === currentUser.email);

    if (userIndex !== -1) {
      // 3. Pastikan array bookingHistory ada
      if (!users[userIndex].bookingHistory) {
        users[userIndex].bookingHistory = [];
      }

      // 4. Push booking baru ke history (paling depan/atas)
      users[userIndex].bookingHistory.unshift(newBooking);

      // 5. Simpan kembali ke LocalStorage
      localStorage.setItem("gelora_users", JSON.stringify(users));

      // Update juga current user di session
      currentUser.bookingHistory = users[userIndex].bookingHistory;
      localStorage.setItem("gelora_current_user", JSON.stringify(currentUser));
    }
  }

  // === UI UPDATE ===
  setTimeout(() => {
    const modalEl = document.getElementById("qrPaymentModal");
    const modal = bootstrap.Modal.getInstance(modalEl);
    if (modal) modal.hide();

    alert("Pembayaran Berhasil! Cek tiket Anda di menu My Booking.");

    // Reset state cart
    selectedSlots = [];
    updateCartAndCheckout();
    currentTransactionId = null;

    // Langsung arahkan ke halaman My Booking
    showMyBooking();
  }, 900);
}

// === FILTER LOGIC ===

// 1. Fungsi untuk menampilkan list venue (Dipanggil saat menu VENUE diklik)
function showVenueList() {
  document.getElementById("view-home").classList.add("d-none");
  document.getElementById("view-booking").classList.add("d-none");
  document.getElementById("view-activity").classList.add("d-none");
  document.getElementById("view-list-venue").classList.add("d-none");
  document.getElementById("view-venue-list").classList.remove("d-none");

  // Reset filter ke default saat halaman dibuka
  document.getElementById("filter-city").value = "all";
  document.getElementById("filter-type").value = "all";
  document.getElementById("filter-price").value = "all";

  // Render semua venue (ambil semua keys dari data)
  renderVenueCards(Object.keys(venuesData));

  window.scrollTo(0, 0);
}

// 2. Fungsi inti untuk menerapkan filter
function applyFilters() {
  const cityVal = document.getElementById("filter-city").value;
  const typeVal = document.getElementById("filter-type").value;
  const priceVal = document.getElementById("filter-price").value;

  // Filter logic
  const filteredIds = Object.keys(venuesData).filter((id) => {
    const venue = venuesData[id];
    let matchCity = false;
    let matchType = false;
    let matchPrice = false;

    // Cek Kota (Case insensitive search)
    if (cityVal === "all") {
      matchCity = true;
    } else {
      // Mencari string kota di dalam lokasi venue (misal "Jakarta" ada di "Menteng, Jakarta Pusat")
      matchCity = venue.loc.toLowerCase().includes(cityVal.toLowerCase());
    }

    // Cek Tipe Olahraga
    if (typeVal === "all") {
      matchType = true;
    } else {
      // Khusus Sepak Bola kita gabungkan Soccer dan Mini Soccer
      if (typeVal === "Soccer") {
        matchType =
          venue.type.includes("Soccer") || venue.type.includes("Mini Soccer");
      } else if (typeVal === "Tennis") {
        // Mencakup Tennis dan Padel
        matchType =
          venue.type.includes("Tennis") || venue.type.includes("Padel");
      } else {
        matchType = venue.type === typeVal;
      }
    }

    // Cek Harga
    if (priceVal === "all") {
      matchPrice = true;
    } else {
      const p = venue.price;
      if (priceVal === "range1" && p <= 200000) matchPrice = true;
      else if (priceVal === "range2" && p > 200000 && p <= 500000)
        matchPrice = true;
      else if (priceVal === "range3" && p > 500000 && p <= 1000000)
        matchPrice = true;
      else if (priceVal === "range4" && p > 1000000) matchPrice = true;
    }

    // Venue harus memenuhi SEMUA kriteria (AND logic)
    return matchCity && matchType && matchPrice;
  });

  // Render hasil filter
  renderVenueCards(filteredIds);
}

// 3. Helper Function untuk merender kartu HTML
// === FUNGSI RENDER CARD (Ganti seluruh fungsi renderVenueCards yang ada dengan ini) ===
function renderVenueCards(venueIds) {
    const container = document.getElementById("venue-list-container");
    container.innerHTML = "";

    // 1. Tampilkan pesan jika tidak ada venue
    if (venueIds.length === 0) {
        container.innerHTML = `
            <div class="col-12 text-center py-5">
                <i class="fas fa-search fa-3x text-muted mb-3"></i>
                <h5 class="text-muted">Venue tidak ditemukan</h5>
                <p class="text-muted small">Coba ubah filter pencarian Anda.</p>
            </div>
        `;
        return;
    }

    // 2. Loop semua venue
    venueIds.forEach((venueId) => {
        const venue = venuesData[venueId];
        if (!venue) return; // Lewati jika data kosong

        // Cek apakah ini venue buatan user (ID dimulai dengan "custom_")
        const isCustomVenue = String(venueId).startsWith("custom_");
        
        const col = document.createElement("div");
        col.className = "col-md-6 col-lg-4 mb-4";
        col.style.animation = "fadeIn 0.5s";

        // === LOGIKA TOMBOL DELETE ===
        let deleteButtonHtml = "";
        if (isCustomVenue) {
            // Kita gunakan z-index: 100 agar tombol berada di paling atas layer
            deleteButtonHtml = `
                <button class="btn btn-danger btn-sm position-absolute" 
                        style="top: 10px; right: 10px; z-index: 100;"
                        onclick="deleteVenue('${venueId}', event)"
                        title="Hapus Venue Saya">
                    <i class="fas fa-trash-alt"></i> Hapus
                </button>
            `;
        }

        col.innerHTML = `
            <div class="card venue-card h-100 position-relative" onclick="openBooking('${venueId}')">
                ${deleteButtonHtml} 
                <img src="${venue.img}" class="card-img-top" alt="${venue.name}" style="height: 200px; object-fit: cover;">
                <div class="card-body">
                    <div class="venue-name">${venue.name}</div>
                    <div class="venue-loc text-muted mb-2" style="font-size:12px">
                        <i class="fas fa-map-marker-alt me-1"></i> ${venue.loc}
                    </div>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="badge bg-light text-dark border">${venue.type}</div>
                        ${isCustomVenue ? '<span class="badge bg-info text-white" style="font-size:10px;">Milik Anda</span>' : ''}
                    </div>
                    <div class="venue-price mt-2">Mulai ${formatRupiah(venue.price)} / jam</div>
                    
                    <button class="btn btn-sm btn-primary w-100 mt-2" onclick="event.stopPropagation(); openBooking('${venueId}')">
                        <i class="fas fa-calendar-plus me-1"></i> Pesan
                    </button>
                </div>
            </div>
        `;
        container.appendChild(col);
    });
}



// === E-TICKET LOGIC ===
function showETicket(bookingId) {
  const user = getCurrentUser();
  if (!user || !user.bookingHistory) return;

  // 1. Cari data booking berdasarkan ID
  const booking = user.bookingHistory.find((b) => b.id === bookingId);
  if (!booking) {
    alert("Data tiket tidak ditemukan.");
    return;
  }

  // 2. Isi data ke dalam Modal HTML
  document.getElementById("ticket-venue-name").innerText = booking.venueName;
  document.getElementById("ticket-id").innerText = "#" + booking.id;

  // Kita cari lokasi venue dari data master (venuesData)
  // Mencari key venue berdasarkan nama venue yang disimpan di history
  // (Cara ini agak manual, idealnya simpan venueId juga di history)
  let venueLoc = "Lokasi Venue";
  for (const [key, val] of Object.entries(venuesData)) {
    if (val.name === booking.venueName) {
      venueLoc = val.loc;
      break;
    }
  }
  document.getElementById("ticket-location").innerText = venueLoc;

  // Render list jadwal
  const slotsContainer = document.getElementById("ticket-slots");
  slotsContainer.innerHTML = "";
  booking.items.forEach((slot) => {
    const div = document.createElement("div");
    div.className = "d-flex justify-content-between border-bottom pb-1 mb-1";
    div.innerHTML = `
            <span class="fw-bold small">${slot.date}</span>
            <span class="small">${slot.time}</span>
        `;
    slotsContainer.appendChild(div);
  });

  // 3. Generate QR Code Unik
  const qrContainer = document.getElementById("ticket-qr-code");
  qrContainer.innerHTML = ""; // Bersihkan QR lama

  // Isi QR Code: Gabungan ID Booking + User
  const qrData = JSON.stringify({
    id: booking.id,
    user: user.email,
    valid: true,
  });

  new QRCode(qrContainer, {
    text: qrData,
    width: 150,
    height: 150,
  });

  // 4. Tampilkan Modal
  const modal = new bootstrap.Modal(document.getElementById("eTicketModal"));
  modal.show();
}

// === FITUR CEK JADWAL YANG TERSEDIA ===
// === FITUR CEK JADWAL YANG TERSEDIA ===
function checkSchedule() {
  console.log("🔍 checkSchedule() dipanggil");

  const city = document.getElementById("search-city").value.trim();
  const sportSelect = document.getElementById("search-sport");
  const sport = sportSelect.options[sportSelect.selectedIndex].text;
  const selectedDate = document.getElementById("search-date").value;

  console.log("📊 Input:", { city, sport, selectedDate });

  // Validasi input wajib - TANGGAL
  if (!selectedDate) {
    alert(" Silakan pilih tanggal terlebih dahulu.");
    document.getElementById("search-date").focus();
    return;
  }

  // Validasi olahraga
  if (!sport || sport === "Pilih olahraga") {
    alert(" Silakan pilih jenis olahraga.");
    sportSelect.focus();
    return;
  }

  console.log(" Validasi passed, memproses...");

  // Filter venue berdasarkan kota dan olahraga
  const filteredVenues = Object.keys(venuesData).filter((venueId) => {
    const venue = venuesData[venueId];
    let matchCity = true;
    let matchSport = true;

    // Filter kota (jika diisi)
    if (city) {
      matchCity = venue.loc.toLowerCase().includes(city.toLowerCase());
    }

    // Filter olahraga
    const sportMapping = {
      "Sepak Bola": ["Soccer", "Mini Soccer"],
      Futsal: ["Futsal"],
      Badminton: ["Badminton"],
      Tenis: ["Tennis", "Padel"],
    };

    const allowedTypes = sportMapping[sport] || [sport];
    matchSport = allowedTypes.some((type) => venue.type.includes(type));

    return matchCity && matchSport;
  });

  console.log(" Filtered venues:", filteredVenues);

  if (filteredVenues.length === 0) {
    alert(
      " Tidak ada venue yang sesuai dengan kriteria pencarian.\n\nCoba ubah kota atau jenis olahraga."
    );
    return;
  }

  // Simulasi ketersediaan jadwal - filter venue yang available
  const availableVenues = filteredVenues.filter((venueId) => {
    return Math.random() < 0.8; // 80% chance available
  });

  console.log(" Available venues:", availableVenues);

  if (availableVenues.length === 0) {
    alert(
      ` Maaf, tidak ada jadwal kosong pada tanggal ${formatDateDisplay(
        selectedDate
      )}.\n\nCoba tanggal lain atau lihat semua venue.`
    );
    return;
  }

  // Langsung buka halaman venue list dengan hasil filter
  showFilteredVenueList(availableVenues, city, sport, selectedDate);
}

// Fungsi untuk menampilkan venue list dengan filter hasil pencarian
function showFilteredVenueList(venueIds, city, sport, selectedDate) {
  // Simpan filter state ke sessionStorage untuk digunakan di venue list
  sessionStorage.setItem(
    "lastSearchFilter",
    JSON.stringify({
      venueIds: venueIds,
      city: city,
      sport: sport,
      date: selectedDate,
    })
  );

  // Buka halaman venue list
  showVenueList();

  // Set filter dropdown sesuai dengan pencarian
  setTimeout(() => {
    setFiltersFromSearch(city, sport);
    renderFilteredVenues(venueIds, city, sport, selectedDate);
  }, 100);
}

// Fungsi untuk set filter dropdown berdasarkan pencarian
function setFiltersFromSearch(city, sport) {
  // Set filter kota
  const cityFilter = document.getElementById("filter-city");
  if (cityFilter && city) {
    // Cari value yang sesuai dengan kota yang dicari
    const cityOptions = Array.from(cityFilter.options);
    const matchedOption = cityOptions.find(
      (option) =>
        option.text.toLowerCase().includes(city.toLowerCase()) ||
        city.toLowerCase().includes(option.text.toLowerCase())
    );
    if (matchedOption) {
      cityFilter.value = matchedOption.value;
    } else {
      cityFilter.value = "all";
    }
  }

  // Set filter tipe olahraga
  const typeFilter = document.getElementById("filter-type");
  if (typeFilter && sport && sport !== "Pilih olahraga") {
    const sportMapping = {
      "Sepak Bola": "Soccer",
      Futsal: "Futsal",
      Badminton: "Badminton",
      Tenis: "Tennis",
    };

    const filterValue = sportMapping[sport] || sport;
    typeFilter.value = filterValue;
  }
}

// Fungsi untuk render venue yang sudah difilter
function renderFilteredVenues(venueIds, city, sport, selectedDate) {
  const container = document.getElementById("venue-list-container");
  if (!container) return;

  // Update judul section
  updateVenueListTitle(venueIds.length, city, sport, selectedDate);

  // Render venue cards
  container.innerHTML = "";

  venueIds.forEach((venueId) => {
    const venue = venuesData[venueId];
    const col = document.createElement("div");
    col.className = "col-md-6 col-lg-4 mb-4";

    col.style.animation = "fadeIn 0.5s";

    // Generate info ketersediaan
    const availabilityInfo = generateAvailabilityInfo(selectedDate);

    col.innerHTML = `
            <div class="card venue-card h-100" onclick="openBooking('${venueId}')">
                <img src="${venue.img}" class="card-img-top" alt="${
      venue.name
    }" style="height: 200px; object-fit: cover;">
                <div class="card-body">
                    <div class="venue-name">${venue.name}</div>
                    <div class="venue-loc text-muted mb-2" style="font-size:12px">
                        <i class="fas fa-map-marker-alt me-1"></i> ${venue.loc}
                    </div>
                    <div class="badge bg-light text-dark border mb-2">${
                      venue.type
                    }</div>
                    
                    <!-- Info Ketersediaan -->
                    <div class="availability-info mb-2">
                        <small class="text-success fw-bold">
                            <i class="fas fa-calendar-check me-1"></i>
                            Tersedia ${availabilityInfo.slotCount} slot
                        </small>
                        <br>
                        <small class="text-muted">
                            ${formatDateDisplay(selectedDate)}
                        </small>
                    </div>
                    
                    <div class="available-times mb-2">
                        ${availabilityInfo.timesHtml}
                    </div>
                    
                    <div class="venue-price mt-2">${formatRupiah(
                      venue.price
                    )} / jam</div>
                    
                    <button class="btn btn-sm btn-primary w-100 mt-2" onclick="event.stopPropagation(); openBooking('${venueId}')">
                        <i class="fas fa-calendar-plus me-1"></i>Pesan Sekarang
                    </button>
                </div>
            </div>
        `;
    container.appendChild(col);
  });
}

// Fungsi untuk update judul venue list
function updateVenueListTitle(venueCount, city, sport, date) {
  const sectionTitle = document.querySelector(
    "#view-venue-list .section-title"
  );
  if (!sectionTitle) return;

  let titleHTML = `Ditemukan <span>${venueCount} Venue</span> Tersedia`;

  const subtitle = document.createElement("p");
  subtitle.className = "text-muted mb-4";

  let subtitleText = `Pada ${formatDateDisplay(date)}`;
  if (city) subtitleText += ` di ${city}`;
  if (sport && sport !== "Pilih olahraga") subtitleText += ` untuk ${sport}`;

  subtitle.textContent = subtitleText;

  // Update title dan tambahkan subtitle
  sectionTitle.innerHTML = titleHTML;

  // Hapus subtitle sebelumnya jika ada
  const existingSubtitle = sectionTitle.nextElementSibling;
  if (existingSubtitle && existingSubtitle.className.includes("text-muted")) {
    existingSubtitle.remove();
  }
  sectionTitle.parentNode.insertBefore(subtitle, sectionTitle.nextSibling);
}

// Fungsi untuk generate info ketersediaan
function generateAvailabilityInfo(selectedDate) {
  const slotCount = Math.floor(Math.random() * 5) + 4; // 4-8 slot
  const allHours = [
    "08.00",
    "10.00",
    "12.00",
    "14.00",
    "16.00",
    "18.00",
    "20.00",
    "22.00",
  ];

  const availableHours = [...allHours]
    .sort(() => Math.random() - 0.5)
    .slice(0, slotCount)
    .sort();

  let timesHtml = "";
  if (availableHours.length > 0) {
    timesHtml = `
            <div class="available-times-container">
                <small class="text-muted d-block mb-1">Jam Tersedia:</small>
                <div class="d-flex flex-wrap gap-1">
                    ${availableHours
                      .map(
                        (time) =>
                          `<span class="badge bg-success text-white border-0" style="font-size:9px; padding: 4px 6px;">${time}</span>`
                      )
                      .join("")}
                </div>
            </div>
        `;
  }

  return {
    slotCount: availableHours.length,
    timesHtml: timesHtml,
  };
}

// Fungsi helper untuk format tanggal tampilan
function formatDateDisplay(dateString) {
  try {
    const date = new Date(dateString);
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString("id-ID", options);
  } catch (e) {
    return dateString;
  }
}

// Modifikasi fungsi showVenueList untuk handle filter dari pencarian
function showVenueList() {
  document.getElementById("view-home").classList.add("d-none");
  document.getElementById("view-booking").classList.add("d-none");
  document.getElementById("view-activity").classList.add("d-none");
  document.getElementById("view-list-venue").classList.add("d-none");
  document.getElementById("view-venue-list").classList.remove("d-none");

  // Cek apakah ada filter dari pencarian
  const lastSearch = sessionStorage.getItem("lastSearchFilter");

  if (lastSearch) {
    const searchData = JSON.parse(lastSearch);
    // Set filter dan render venue yang difilter
    setTimeout(() => {
      setFiltersFromSearch(searchData.city, searchData.sport);
      renderFilteredVenues(
        searchData.venueIds,
        searchData.city,
        searchData.sport,
        searchData.date
      );
    }, 50);

    // Hapus session storage setelah digunakan
    sessionStorage.removeItem("lastSearchFilter");
  } else {
    // Default behavior - reset filter dan tampilkan semua
    document.getElementById("filter-city").value = "all";
    document.getElementById("filter-type").value = "all";
    document.getElementById("filter-price").value = "all";
    renderVenueCards(Object.keys(venuesData));
  }

  window.scrollTo(0, 0);
}

// Fungsi untuk mengecek apakah venue memiliki slot kosong pada tanggal tertentu
function hasAvailableSlots(venueId, date) {
  // Simulasi ketersediaan jadwal - 80% kemungkinan ada jadwal kosong
  // Untuk demo, kita buat lebih sering available
  const randomAvailable = Math.random() < 0.8;
  return randomAvailable;
}

// Fungsi untuk render venue yang tersedia
function renderAvailableVenues(venueIds, selectedDate) {
  const container = document.getElementById("venue-list-container");
  if (!container) {
    console.error("Container venue-list-container tidak ditemukan");
    return;
  }

  container.innerHTML = "";

  venueIds.forEach((venueId) => {
    const venue = venuesData[venueId];
    const col = document.createElement("div");
    col.className = "col-md-6 col-lg-4 mb-4";

    col.style.animation = "fadeIn 0.5s";

    // Generate info jadwal tersedia
    const availableSlots = generateAvailableSlotsInfo();

    col.innerHTML = `
            <div class="card venue-card h-100" onclick="openBookingWithDate('${venueId}', '${selectedDate}')">
                <img src="${venue.img}" class="card-img-top" alt="${
      venue.name
    }" style="height: 200px; object-fit: cover;">
                <div class="card-body">
                    <div class="venue-name">${venue.name}</div>
                    <div class="venue-loc text-muted mb-2" style="font-size:12px">
                        <i class="fas fa-map-marker-alt me-1"></i> ${venue.loc}
                    </div>
                    <div class="badge bg-light text-dark border mb-2">${
                      venue.type
                    }</div>
                    
                    <!-- Info Jadwal Tersedia -->
                    <div class="available-slots-info mb-2">
                        <small class="text-success fw-bold">
                            <i class="fas fa-calendar-check me-1"></i>
                            Tersedia ${availableSlots.count} slot
                        </small>
                        <br>
                        <small class="text-muted">
                            Pada ${formatDateDisplay(selectedDate)}
                        </small>
                    </div>
                    
                    <div class="available-times mb-2">
                        ${availableSlots.times}
                    </div>
                    
                    <div class="venue-price mt-2">Mulai ${formatRupiah(
                      venue.price
                    )} / jam</div>
                    
                    <button class="btn btn-sm btn-primary w-100 mt-2" onclick="event.stopPropagation(); openBookingWithDate('${venueId}', '${selectedDate}')">
                        <i class="fas fa-calendar-plus me-1"></i>Pilih Jadwal
                    </button>
                </div>
            </div>
        `;
    container.appendChild(col);
  });
}

// Fungsi untuk generate info slot yang tersedia
function generateAvailableSlotsInfo() {
  // Generate 4-8 jam acak untuk ditampilkan
  const slotCount = Math.floor(Math.random() * 5) + 4; // 4-8 slot
  const allHours = [
    "08.00",
    "09.00",
    "10.00",
    "11.00",
    "13.00",
    "14.00",
    "15.00",
    "16.00",
    "17.00",
    "18.00",
    "19.00",
    "20.00",
  ];

  // Acak jam yang tersedia
  const availableHours = [...allHours]
    .sort(() => Math.random() - 0.5)
    .slice(0, slotCount)
    .sort();

  let timesHtml = "";
  if (availableHours.length > 0) {
    timesHtml = `
            <div class="available-times-container">
                <small class="text-muted d-block mb-1">Jam Tersedia:</small>
                <div class="d-flex flex-wrap gap-1">
                    ${availableHours
                      .map(
                        (time) =>
                          `<span class="badge bg-success text-white border-0" style="font-size:9px; padding: 4px 6px;">${time}</span>`
                      )
                      .join("")}
                </div>
            </div>
        `;
  }

  return {
    count: availableHours.length,
    times: timesHtml,
  };
}

// Fungsi untuk buka booking dengan tanggal yang sudah dipilih
function openBookingWithDate(venueId, selectedDate) {
  console.log("Opening booking for:", venueId, "date:", selectedDate);
  openBooking(venueId);

  // Set tanggal di booking page setelah delay kecil
  setTimeout(() => {
    const dateInput = document.getElementById("booking-date");
    if (dateInput) {
      dateInput.value = selectedDate;
      // Re-render schedule untuk tanggal yang dipilih
      if (typeof renderSchedule === "function") {
        renderSchedule();
      }
    }
  }, 500);
}

// Fungsi helper untuk format tanggal tampilan
function formatDateDisplay(dateString) {
  try {
    const date = new Date(dateString);
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString("id-ID", options);
  } catch (e) {
    return dateString;
  }
}

// Fungsi untuk update judul hasil pencarian
function updateSearchResultTitle(venueCount, city, sport, date) {
  const sectionTitle = document.querySelector(
    "#view-venue-list .section-title"
  );
  if (!sectionTitle) return;

  // Hapus subtitle sebelumnya jika ada
  const existingSubtitle = sectionTitle.nextElementSibling;
  if (existingSubtitle && existingSubtitle.className.includes("text-muted")) {
    existingSubtitle.remove();
  }

  let titleHTML = `Ditemukan <span>${venueCount} Venue</span> Tersedia`;

  const subtitle = document.createElement("p");
  subtitle.className = "text-muted mb-4";

  let subtitleText = `Pada ${formatDateDisplay(date)}`;
  if (city)
    subtitleText += ` di ${city.charAt(0).toUpperCase() + city.slice(1)}`;
  if (sport && sport !== "Pilih olahraga") subtitleText += ` untuk ${sport}`;

  subtitle.textContent = subtitleText;

  // Update title dan tambahkan subtitle
  sectionTitle.innerHTML = titleHTML;
  sectionTitle.parentNode.insertBefore(subtitle, sectionTitle.nextSibling);
}

// Fungsi untuk switch ke view venue list
function switchToVenueListView() {
  document.getElementById("view-home").classList.add("d-none");
  document.getElementById("view-booking").classList.add("d-none");
  document.getElementById("view-activity").classList.add("d-none");
  document.getElementById("view-list-venue").classList.add("d-none");
  document.getElementById("view-profile").classList.add("d-none");
  document.getElementById("view-my-booking").classList.add("d-none");
  document.getElementById("view-venue-list").classList.remove("d-none");
}

// Inisialisasi datepicker dengan tanggal besok
document.addEventListener("DOMContentLoaded", function () {
  // Set default date untuk search (besok)
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dateInput = document.getElementById("search-date");
  if (dateInput) {
    dateInput.valueAsDate = tomorrow;
  }

  // Juga init booking date
  const bookingDateInput = document.getElementById("booking-date");
  if (bookingDateInput) {
    bookingDateInput.valueAsDate = new Date();
  }

  // Auth UI
  updateAuthUI();
});

// === DROPDOWN FUNCTIONS ===
let selectedCity = "";
let selectedSport = "";

function selectCity(city) {
  selectedCity = city;
  document.getElementById("cityDropdown").textContent = city;

  // Jika memilih "Other", tampilkan pesan info
  if (city === "Other") {
    console.log("Kota Other dipilih - akan menampilkan semua venue");
  }
}

function selectSport(sport) {
  selectedSport = sport;
  document.getElementById("sportDropdown").textContent = sport;
}

// === VALIDASI KOTA YANG TERSEDIA ===
const availableCities = [
  "Jakarta",
  "Tangerang",
  "Bekasi",
  "Depok",
  "Bandung",
  "Bogor",
  "Surabaya",
  "Semarang",
  "Medan",
  "Bali",
];

function isCityAvailable(city) {
  // Jika memilih "Other", selalu return true karena akan menampilkan semua venue
  if (city === "Other") {
    return true;
  }

  return availableCities.some(
    (availableCity) =>
      city.toLowerCase().includes(availableCity.toLowerCase()) ||
      availableCity.toLowerCase().includes(city.toLowerCase())
  );
}

// === MODIFIED CHECK SCHEDULE FUNCTION ===
function checkSchedule() {
  console.log("🔍 checkSchedule() dipanggil");

  const city = selectedCity;
  const sport = selectedSport;
  const selectedDate = document.getElementById("search-date").value;

  console.log("📊 Input:", { city, sport, selectedDate });

  // Validasi input wajib
  if (!city || city === "Pilih kota") {
    alert(" Silakan pilih kota terlebih dahulu.");
    document.getElementById("cityDropdown").focus();
    return;
  }

  if (!sport || sport === "Pilih olahraga") {
    alert(" Silakan pilih jenis olahraga.");
    document.getElementById("sportDropdown").focus();
    return;
  }

  if (!selectedDate) {
    alert(" Silakan pilih tanggal terlebih dahulu.");
    document.getElementById("search-date").focus();
    return;
  }

  // Validasi kota yang tersedia (kecuali Other)
  if (city !== "Other" && !isCityAvailable(city)) {
    alert(
      ` Maaf, saat ini kami belum melayani booking untuk kota ${city}.\n\nKota yang tersedia: ${availableCities.join(
        ", "
      )}`
    );
    return;
  }

  console.log(" Validasi passed, memproses...");

  // Filter venue berdasarkan kota dan olahraga
  const filteredVenues = Object.keys(venuesData).filter((venueId) => {
    const venue = venuesData[venueId];
    let matchCity = true;
    let matchSport = true;

    // Filter kota - jika "Other", tampilkan semua venue
    if (city && city !== "Other") {
      matchCity = venue.loc.toLowerCase().includes(city.toLowerCase());
    }

    // Filter olahraga
    const sportMapping = {
      "Sepak Bola": ["Soccer", "Mini Soccer"],
      Futsal: ["Futsal"],
      Badminton: ["Badminton"],
      Tenis: ["Tennis", "Padel"],
      Basket: ["Basket"],
      Voli: ["Voli"],
      Fitness: ["Fitness"],
    };

    const allowedTypes = sportMapping[sport] || [sport];
    matchSport = allowedTypes.some((type) => venue.type.includes(type));

    return matchCity && matchSport;
  });

  console.log(" Filtered venues:", filteredVenues);

  if (filteredVenues.length === 0) {
    let message = ` Tidak ada venue yang sesuai dengan kriteria pencarian.\n\n`;

    if (city === "Other") {
      message += `Olahraga: ${sport}\n`;
    } else {
      message += `Kota: ${city}\nOlahraga: ${sport}\n`;
    }

    message += `\nCoba ubah kriteria pencarian Anda.`;

    alert(message);
    return;
  }

  // Simulasi ketersediaan jadwal
  const availableVenues = filteredVenues.filter((venueId) => {
    return Math.random() < 0.8; // 80% chance available
  });

  console.log(" Available venues:", availableVenues);

  if (availableVenues.length === 0) {
    alert(
      ` Maaf, tidak ada jadwal kosong pada tanggal ${formatDateDisplay(
        selectedDate
      )}.\n\nCoba tanggal lain atau lihat semua venue.`
    );
    return;
  }

  // Langsung buka halaman venue list dengan hasil filter
  showFilteredVenueList(availableVenues, city, sport, selectedDate);
}

// === UPDATE VENUE LIST TITLE UNTUK "OTHER" ===
function updateVenueListTitle(venueCount, city, sport, date) {
  const sectionTitle = document.querySelector(
    "#view-venue-list .section-title"
  );
  if (!sectionTitle) return;

  let titleHTML = `Ditemukan <span>${venueCount} Venue</span> Tersedia`;

  const subtitle = document.createElement("p");
  subtitle.className = "text-muted mb-4";

  let subtitleText = `Pada ${formatDateDisplay(date)}`;

  // Jika kota adalah "Other", tidak tampilkan kota
  if (city && city !== "Other") {
    subtitleText += ` di ${city}`;
  }

  if (sport && sport !== "Pilih olahraga") {
    subtitleText += ` untuk ${sport}`;
  }

  subtitle.textContent = subtitleText;

  // Update title dan tambahkan subtitle
  sectionTitle.innerHTML = titleHTML;

  // Hapus subtitle sebelumnya jika ada
  const existingSubtitle = sectionTitle.nextElementSibling;
  if (existingSubtitle && existingSubtitle.className.includes("text-muted")) {
    existingSubtitle.remove();
  }
  sectionTitle.parentNode.insertBefore(subtitle, sectionTitle.nextSibling);
}

// === INITIALIZE DROPDOWNS ===
document.addEventListener("DOMContentLoaded", function () {
  // Set default date untuk search (besok)
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dateInput = document.getElementById("search-date");
  if (dateInput) {
    dateInput.valueAsDate = tomorrow;
  }

  // Juga init booking date
  const bookingDateInput = document.getElementById("booking-date");
  if (bookingDateInput) {
    bookingDateInput.valueAsDate = new Date();
  }

  // Auth UI
  updateAuthUI();

  // Initialize dropdowns
  initializeDropdowns();
});

function initializeDropdowns() {
  // Reset dropdown values
  selectedCity = "";
  selectedSport = "";
  document.getElementById("cityDropdown").textContent = "Pilih kota";
  document.getElementById("sportDropdown").textContent = "Pilih olahraga";
}

// === ENHANCED MOBILE MENU ===
// === GANTI FUNGSI setupMobileMenu YANG LAMA DENGAN INI ===

// === GANTI FUNGSI setupMobileMenu DI SCRIPT.JS ===

function setupMobileMenu() {
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector(".navbar-collapse");
  
    if (navbarToggler && navbarCollapse) {
        // Ambil SEMUA link nav, dropdown item, dan tombol list venue
        const allNavLinks = document.querySelectorAll(".nav-link, .dropdown-item, .btn-list-venue");
        
        allNavLinks.forEach((link) => {
            link.addEventListener("click", function (e) {
                // PENTING: Cek apakah yang diklik adalah Dropdown Toggle (Hi, User)
                // Jika ya, JANGAN tutup menu, biarkan Bootstrap membuka dropdown-nya
                if (this.classList.contains("dropdown-toggle")) {
                    return; 
                }

                // Cek jika layar sedang mode mobile (lebar < 992px)
                if (window.innerWidth < 992 && navbarCollapse.classList.contains("show")) {
                    // Tutup menu secara manual untuk link biasa (Home, Venue, Logout, dll)
                    setTimeout(() => {
                        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse) || new bootstrap.Collapse(navbarCollapse);
                        bsCollapse.hide();
                    }, 100); // Beri jeda sedikit agar terlihat natural
                }
            });
        });
    }
}
// === CART FEATURE LOGIC ===

// 1. Menampilkan Modal Cart
function showCartModal() {
  const modal = new bootstrap.Modal(document.getElementById("cartModal"));
  renderCartItems();
  modal.show();
}

// 2. Render Daftar Item di Cart
function renderCartItems() {
  const container = document.getElementById("cart-items-container");
  const emptyState = document.getElementById("cart-empty-state");
  const totalEl = document.getElementById("cart-total-price");
  const btnPay = document.querySelector("#cartModal .btn-danger"); // Tombol bayar

  container.innerHTML = "";

  // Cek jika cart kosong
  if (selectedSlots.length === 0) {
    emptyState.classList.remove("d-none");
    btnPay.disabled = true;
    totalEl.innerText = formatRupiah(0);
    return;
  }

  emptyState.classList.add("d-none");
  btnPay.disabled = false;

  let total = 0;

  // Loop selectedSlots untuk membuat list HTML
  selectedSlots.forEach((slot, index) => {
    total += slot.price;

    // Ambil nama venue (jika user pindah venue, nama venue perlu dijaga)
    const venueName = venuesData[currentVenueId]
      ? venuesData[currentVenueId].name
      : "Venue Pilihan";

    const itemHtml = `
            <div class="p-3 border-bottom position-relative cart-item-row">
                <div class="d-flex justify-content-between align-items-start">
                    <div>
                        <h6 class="fw-bold mb-1" style="font-size:14px;">${venueName}</h6>
                        <div class="text-muted small">
                            <i class="far fa-calendar me-1"></i> ${slot.date} 
                            <span class="mx-1">|</span> 
                            <i class="far fa-clock me-1"></i> ${slot.time}
                        </div>
                    </div>
                    <div class="text-end">
                        <div class="fw-bold text-danger" style="font-size:14px;">${formatRupiah(
                          slot.price
                        )}</div>
                    </div>
                </div>
                <button onclick="removeFromCart('${slot.id}')" 
                    class="btn btn-sm text-secondary position-absolute bottom-0 end-0 mb-2 me-2" 
                    style="font-size: 11px;">
                    <i class="fas fa-trash-alt me-1"></i> Hapus
                </button>
            </div>
        `;
    container.innerHTML += itemHtml;
  });

  totalEl.innerText = formatRupiah(total);
}

// 3. Menghapus Item dari Cart
function removeFromCart(slotId) {
  // Hapus dari array global selectedSlots
  selectedSlots = selectedSlots.filter((s) => s.id !== slotId);

  // Update UI Cart (Sticky bar & Badge)
  updateCartAndCheckout();

  // Hapus class 'selected' pada tampilan jadwal (Grid) secara visual jika sedang terbuka
  // Kita cari elemen DOM berdasarkan onclick parameter yang mengandung ID slot
  // Ini trik DOM manipulation agar sinkron
  const gridSlots = document.querySelectorAll(".time-slot.selected");
  gridSlots.forEach((el) => {
    // Cek apakah elemen ini memiliki slotId yang dihapus
    if (
      el.getAttribute("onclick") &&
      el.getAttribute("onclick").includes(slotId)
    ) {
      el.classList.remove("selected");
    }
  });

  // Render ulang modal cart
  renderCartItems();
}

// 4. Lanjut Bayar dari Cart
function proceedToPaymentFromCart() {
  // Tutup modal cart
  const cartModalEl = document.getElementById("cartModal");
  const cartModal = bootstrap.Modal.getInstance(cartModalEl);
  if (cartModal) {
    cartModal.hide();
  }

  // Tunggu sebentar agar animasi modal selesai, lalu buka payment modal
  setTimeout(() => {
    if (selectedSlots.length > 0) {
      showPaymentModal();
    } else {
      alert("Keranjang kosong.");
    }
  }, 400);
}


// Panggil setup mobile menu saat DOM ready
document.addEventListener("DOMContentLoaded", function () {
  setupMobileMenu();
});


// === GLOBAL VARIABLES UNTUK PROFIL ===
let tempSelectedSports = []; // Menyimpan olahraga yang dipilih sementara
let tempProfileImage = "";   // Menyimpan string base64 gambar sementara

// === 1. FUNGSI UPLOAD GAMBAR ===
function handleImageUpload(input) {
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            // Tampilkan preview gambar
            document.getElementById('profile-preview-img').src = e.target.result;
            // Simpan data base64 ke variabel sementara
            tempProfileImage = e.target.result;
        }
        
        // Baca file sebagai Data URL (Base64)
        reader.readAsDataURL(input.files[0]);
    }
}

// === 2. FUNGSI PILIH OLAHRAGA ===
function toggleSport(element, sportName) {
    // Toggle class visual
    element.classList.toggle('selected');
    
    // Logika array
    if (tempSelectedSports.includes(sportName)) {
        // Jika sudah ada, hapus
        tempSelectedSports = tempSelectedSports.filter(s => s !== sportName);
    } else {
        // Jika belum ada, tambahkan
        tempSelectedSports.push(sportName);
    }
    
    console.log("Olahraga dipilih:", tempSelectedSports);
}

// === 3. FUNGSI SIMPAN PROFIL ===
function saveProfile() {
    const currentUser = getCurrentUser();
    if (!currentUser) return;

    // Ambil nilai dari input form
    const newName = document.getElementById('profile-name').value;
    const newUsername = document.getElementById('profile-username').value;
    const newPhone = document.getElementById('profile-phone').value;
    const newGender = document.getElementById('profile-gender').value;
    const newMonth = document.getElementById('profile-month').value;
    const newYear = document.getElementById('profile-year').value;
    const newDate = document.getElementById('profile-date').value;

    // Update object user
    currentUser.name = newName;
    currentUser.username = newUsername;
    currentUser.phone = newPhone;
    currentUser.gender = newGender;
    currentUser.dobMonth = newMonth;
    currentUser.dobYear = newYear;
    currentUser.dobDate = newDate;
    
    // Update olahraga dan foto (jika ada perubahan)
    currentUser.sports = tempSelectedSports;
    if (tempProfileImage) {
        currentUser.avatar = tempProfileImage;
    }

    // SIMPAN KE LOCALSTORAGE (WAJIB UPDATE ARRAY UTAMA JUGA)
    // 1. Update Current User Session
    localStorage.setItem('gelora_current_user', JSON.stringify(currentUser));

    // 2. Update di dalam Array 'gelora_users' (Database semu)
    let allUsers = JSON.parse(localStorage.getItem('gelora_users') || "[]");
    const userIndex = allUsers.findIndex(u => u.email === currentUser.email);
    
    if (userIndex !== -1) {
        allUsers[userIndex] = currentUser; // Timpa data lama dengan yang baru
        localStorage.setItem('gelora_users', JSON.stringify(allUsers));
    }

    // Update tampilan sidebar langsung
    document.getElementById('sidebar-name').innerText = currentUser.name;
    document.getElementById('sidebar-username').innerText = currentUser.username || "@username";
    updateAuthUI(); // Update nama di navbar juga

    alert("Profil berhasil disimpan!");
}

// === 4. UPDATE FUNGSI SHOW PROFILE ===
// Ganti fungsi showProfile yang lama dengan yang ini
function showProfile() {
    const user = getCurrentUser();
    if (!user) {
        alert("Silakan login terlebih dahulu.");
        showLoginModal();
        return;
    }

    // Panggil fungsi helper navigasi (dari jawaban sebelumnya)
    hideAllViews(); 
    document.getElementById("view-profile").classList.remove("d-none");
    
    // --- LOAD DATA USER KE FORM ---
    document.getElementById("sidebar-name").innerText = user.name;
    document.getElementById("sidebar-username").innerText = user.username || "@username";
    
    // Load Input Values
    document.getElementById("profile-name").value = user.name || "";
    document.getElementById("profile-username").value = user.username || "";
    document.getElementById("profile-phone").value = user.phone || "";
    document.getElementById("profile-gender").value = user.gender || "";
    document.getElementById("profile-month").value = user.dobMonth || "";
    document.getElementById("profile-year").value = user.dobYear || "";
    document.getElementById("profile-date").value = user.dobDate || "";

    // --- LOAD FOTO PROFIL ---
    const imgPreview = document.getElementById('profile-preview-img');
    if (user.avatar) {
        imgPreview.src = user.avatar;
        tempProfileImage = user.avatar; // Set agar tidak hilang jika save ulang tanpa ganti foto
    } else {
        // Default avatar jika belum ada
        imgPreview.src = "https://cdn-icons-png.flaticon.com/512/1077/1077114.png";
        tempProfileImage = "";
    }

    // --- LOAD OLAHRAGA FAVORIT ---
    // Reset state visual dan variabel
    tempSelectedSports = user.sports || [];
    
    // Hapus semua class 'selected' dulu
    document.querySelectorAll('.sport-item').forEach(el => {
        el.classList.remove('selected');
    });

    // Loop elemen sport item untuk menandai yang sudah dipilih user
    document.querySelectorAll('.sport-item').forEach(el => {
        // Ambil nama sport dari atribut onclick
        // Cara parsing sederhana string onclick: toggleSport(this, 'Mini Soccer')
        const onclickText = el.getAttribute('onclick');
        if (onclickText) {
            // Ambil text di dalam tanda kutip tunggal
            const match = onclickText.match(/'([^']+)'/);
            if (match && match[1]) {
                const sportName = match[1];
                // Jika sportName ada di data user, tambahkan class selected
                if (tempSelectedSports.includes(sportName)) {
                    el.classList.add('selected');
                }
            }
        }
    });

    window.scrollTo(0, 0);
}

// === SMART NAVBAR & MOBILE MENU LOGIC ===

document.addEventListener("DOMContentLoaded", function () {
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');
    const navbarCollapse = document.getElementById('navbarNav'); // ID dari div collapse di HTML
    const navLinks = document.querySelectorAll('.nav-link, .btn-list-venue, .navbar-brand');

    // 1. LOGIKA SCROLL (NAIK/TURUN)
    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Logika Navbar Hilang/Muncul
        if (scrollTop > lastScrollTop && scrollTop > 50) {
            // Scroll ke BAWAH -> Sembunyikan Navbar
            // TAPI jangan sembunyikan jika menu mobile sedang terbuka
            if (!navbarCollapse.classList.contains('show')) {
                navbar.classList.add('navbar-hidden');
            }
        } else {
            // Scroll ke ATAS -> Munculkan Navbar
            navbar.classList.remove('navbar-hidden');
        }
        
        lastScrollTop = scrollTop;

        // Logika Tutup Menu Mobile saat Scroll
        // Jika user scroll layar saat menu terbuka, menu otomatis tertutup agar tidak menghalangi
        if (navbarCollapse.classList.contains('show')) {
            const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                toggle: false
            });
            bsCollapse.hide();
        }
    });

    // 2. LOGIKA KLIK (TUTUP MENU SAAT PINDAH HALAMAN)
    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            // Tutup menu mobile jika sedang terbuka
            if (navbarCollapse.classList.contains('show')) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                    toggle: false
                });
                bsCollapse.hide();
            }

            // Pastikan Navbar Muncul Kembali (Reset posisi ke atas)
            navbar.classList.remove('navbar-hidden');

            // Scroll halaman ke paling atas (Reset View)
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    });
});

// === LOGIKA SMART NAVBAR & INTERAKSI ===

document.addEventListener("DOMContentLoaded", function () {
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');
    const navbarCollapse = document.getElementById('navbarNav'); 
    
    // Fungsi Helper: Sembunyikan Navbar
    function hideNavbar() {
        // Jangan sembunyikan jika menu mobile sedang terbuka (biar user ga bingung)
        if (!navbarCollapse.classList.contains('show')) {
            navbar.classList.add('navbar-hidden');
        }
    }

    // Fungsi Helper: Munculkan Navbar
    function showNavbar() {
        navbar.classList.remove('navbar-hidden');
    }

    // 1. EVENT SCROLL (Naik = Muncul, Turun = Sembunyi)
    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 50) {
            // Scroll ke BAWAH -> Sembunyikan
            hideNavbar();
            closeMobileMenu(); // Tutup menu jika user iseng scroll saat menu buka
        } else if (scrollTop < lastScrollTop) {
            // Scroll ke ATAS -> Munculkan
            showNavbar();
        }
        lastScrollTop = scrollTop;
    }, { passive: true });


    // 2. EVENT KLIK/SENTUH AREA KONTEN (Action apapun -> Sembunyi)
    document.addEventListener('click', function(e) {
        // Jika yang diklik BUKAN bagian dari navbar (misal tombol booking, gambar, text)
        if (!navbar.contains(e.target)) {
            hideNavbar();
            closeMobileMenu();
        }
    });

    // Deteksi sentuhan jari di layar (untuk HP)
    document.addEventListener('touchstart', function(e) {
        // Jika menyentuh area konten (bukan navbar)
        if (!navbar.contains(e.target)) {
            // Beri sedikit delay agar tidak bentrok jika user mau scroll ke atas
            // Tapi karena requestnya "menyentuh apapun", kita langsung sembunyikan
            hideNavbar(); 
        }
    }, { passive: true });


    // 3. EVENT NAVIGASI (Pindah Halaman -> Reset ke Atas)
    // Ambil semua link navigasi dan tombol logo
    const allNavLinks = document.querySelectorAll('.nav-link, .navbar-brand, .btn-list-venue');
    
    allNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeMobileMenu(); // 1. Tutup menu mobile
            showNavbar();      // 2. Pastikan navbar turun dulu (biar kelihatan transisinya)
            
            // 3. Scroll ke paling atas
            window.scrollTo({ top: 0, behavior: 'smooth' }); 
        });
    });
});

// === TAMBAHKAN FUNGSI INI DI SCRIPT.JS (Bisa di bagian paling bawah) ===

function closeMobileMenu() {
    // Ambil elemen menu utama (yang background cokelat)
    const navbarCollapse = document.getElementById("navbarNav");
    
    // Cek apakah elemen ada dan sedang terbuka (memiliki class 'show')
    if (navbarCollapse && navbarCollapse.classList.contains("show")) {
        // Panggil fungsi Bootstrap untuk menutupnya
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse) || new bootstrap.Collapse(navbarCollapse);
        bsCollapse.hide();
    }
}

// Fungsi Khusus untuk Menutup Dropdown User (Profil/Logout)
function forceCloseDropdown() {
    // 1. Cari elemen tombol dropdown user
    const dropdownToggle = document.getElementById("userDropdown");
    const dropdownMenu = document.querySelector("#nav-auth-area .dropdown-menu");

    // 2. Jika menu sedang terbuka (memiliki class 'show'), kita tutup
    if (dropdownToggle && dropdownToggle.classList.contains("show")) {
        dropdownToggle.classList.remove("show");
        dropdownToggle.setAttribute("aria-expanded", "false");
    }

    if (dropdownMenu && dropdownMenu.classList.contains("show")) {
        dropdownMenu.classList.remove("show");
    }
}

// === VARIABLE GLOBAL UNTUK GAMBAR VENUE ===
let tempVenueImageBase64 = "";

// 1. Handle Upload Gambar Venue (Konversi ke Base64)
function handleVenueImageUpload(input) {
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            // Tampilkan preview
            const imgPreview = document.getElementById('venue-preview-img');
            imgPreview.src = e.target.result;
            imgPreview.style.display = 'block';
            
            // Simpan data string base64
            tempVenueImageBase64 = e.target.result;
        }
        
        reader.readAsDataURL(input.files[0]);
    }
}

// 2. Fungsi Register Venue
function registerVenue() {
    // Cek Login (Opsional: Hapus jika user tamu boleh daftar)
    const currentUser = getCurrentUser();
    if (!currentUser) {
        alert("Silakan login terlebih dahulu untuk mendaftarkan venue.");
        showLoginModal();
        return;
    }

    // Ambil nilai dari form
    const name = document.getElementById('reg-name').value;
    const sport = document.getElementById('reg-sport').value;
    const address = document.getElementById('reg-address').value;
    const city = document.getElementById('reg-city').value;
    const price = parseInt(document.getElementById('reg-price').value) || 0;
    const fieldCount = document.getElementById('reg-fields').value || 1;
    
    // Ambil Fasilitas yang dicentang
    const facilities = [];
    document.querySelectorAll('.reg-facility:checked').forEach((checkbox) => {
        facilities.push(checkbox.value);
    });

    // Validasi Gambar (Pakai default jika kosong)
    const imgUrl = tempVenueImageBase64 || "https://images.unsplash.com/photo-1522778119026-d647f0565c6a?w=500&q=80";

    // Buat ID unik
    const newId = "custom_" + Date.now();

    // Buat Objek Venue Baru (Struktur harus sama dengan venuesData)
    const newVenue = {
        name: name,
        loc: `${city} - ${address}`, // Format string lokasi
        location: address, // Alamat lengkap
        price: price,
        img: imgUrl,
        type: sport,
        description: `Venue ${sport} terbaik di ${city} dengan fasilitas lengkap.`,
        facilities: facilities.length > 0 ? facilities : ["Parkir", "Toilet"],
        area: "Standar Internasional",
        length: "Standar",
        number: `Total ${fieldCount} Lapangan`
    };

    // 3. Simpan ke LocalStorage
    // Kita ambil data venue custom yang sudah ada (jika ada)
    const customVenues = JSON.parse(localStorage.getItem('gelora_custom_venues') || "{}");
    
    // Tambahkan venue baru ke objek
    customVenues[newId] = newVenue;
    
    // Simpan balik ke storage
    localStorage.setItem('gelora_custom_venues', JSON.stringify(customVenues));

    // 4. Update Runtime Data (venuesData)
    // Karena venuesData adalah const object, kita bisa menambahkan property baru padanya
    venuesData[newId] = newVenue;

    // 5. Reset Form & Redirect
    document.getElementById('form-register-venue').reset();
    document.getElementById('venue-preview-img').style.display = 'none';
    tempVenueImageBase64 = "";
    
    alert("Venue berhasil didaftarkan! Venue Anda akan langsung muncul di halaman pencarian.");
    
    // Redirect ke list venue (otomatis akan merender ulang termasuk venue baru)
    showVenueList();
}

// 3. Fungsi Load Custom Venues (PENTING)
// Fungsi ini menggabungkan data hardcode dengan data dari localstorage saat halaman dimuat
function loadCustomVenues() {
    try {
        const customVenues = JSON.parse(localStorage.getItem('gelora_custom_venues') || "{}");
        
        // Loop setiap custom venue dan masukkan ke venuesData utama
        for (const [key, value] of Object.entries(customVenues)) {
            venuesData[key] = value;
        }
        console.log("Custom venues loaded:", Object.keys(customVenues).length);
    } catch (e) {
        console.error("Gagal memuat custom venues", e);
    }
}

// === FUNGSI HAPUS VENUE ===
function deleteVenue(venueId, event) {
    // PENTING: Mencegah event bubbling (agar card tidak membuka halaman booking)
    if (event) {
        event.stopPropagation();
        event.preventDefault();
    }

    // Konfirmasi penghapusan
    if (!confirm("Apakah Anda yakin ingin menghapus venue ini? Tindakan ini tidak dapat dibatalkan.")) {
        return;
    }

    // 1. Hapus dari LocalStorage
    try {
        const customVenues = JSON.parse(localStorage.getItem('gelora_custom_venues') || "{}");
        
        if (customVenues[venueId]) {
            delete customVenues[venueId];
            localStorage.setItem('gelora_custom_venues', JSON.stringify(customVenues));
        }
    } catch (e) {
        console.error("Gagal menghapus dari storage", e);
    }

    // 2. Hapus dari Variabel Global (Runtime)
    if (venuesData[venueId]) {
        delete venuesData[venueId];
    }

    // 3. Feedback ke User
    alert("Venue berhasil dihapus.");
    
    // 4. Render Ulang
    // Cek kita sedang di halaman mana
    const venueListVisible = !document.getElementById("view-venue-list").classList.contains("d-none");
    
    if (venueListVisible) {
        // Jika sedang di venue list, refresh list
        showVenueList();
    } else {
        // Jika di home atau lainnya, paksa ke venue list
        showVenueList();
    }
}

// Handle window resize
window.addEventListener("resize", function () {
  if (window.innerWidth > 768) {
    const navbarCollapse = document.querySelector(".navbar-collapse");
    if (navbarCollapse) {
      navbarCollapse.classList.remove("show");
    }
  }
});
// === INIT ===
document.addEventListener("DOMContentLoaded", function () {

  loadCustomVenues();
  // init booking date
  document.getElementById("booking-date").valueAsDate = new Date();
  // auth UI
 const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dateInput = document.getElementById("search-date");
  if (dateInput) {
    dateInput.valueAsDate = tomorrow;
  }

  const bookingDateInput = document.getElementById("booking-date");
  if (bookingDateInput) {
    bookingDateInput.valueAsDate = new Date();
  }

  updateAuthUI();
  initializeDropdowns();
  setupMobileMenu();
});