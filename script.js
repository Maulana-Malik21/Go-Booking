// ===== DATA VENUES SECTION =====
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

// ===== GLOBAL STATE SECTION =====
let currentVenueId = null;
let currentPrice = 0;
let selectedSlots = []; // Array of {id, price, date, time}

// ===== QR PAYMENT STATE SECTION =====
let qrPollingInterval = null;
let qrCountdownTimer = null;
let qrSecondsLeft = 60;
let qrcodeInstance = null;
let currentTransactionId = null;

// ===== AUTHENTICATION SECTION =====
function showLoginModal() {
    const registerModal = bootstrap.Modal.getInstance(document.getElementById("registerModal"));
    if (registerModal) registerModal.hide();

    const modal = new bootstrap.Modal(document.getElementById("loginModal"));
    modal.show();
}

function showRegisterModal() {
    const loginModal = bootstrap.Modal.getInstance(document.getElementById("loginModal"));
    if (loginModal) loginModal.hide();

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

    const users = JSON.parse(localStorage.getItem("gelora_users") || "[]");
    const user = users.find((u) => u.email === email && u.password === password);

    if (!user) {
        alert("Email atau password salah.");
        return;
    }

    localStorage.setItem("gelora_current_user", JSON.stringify(user));
    updateAuthUI();

    const modalEl = document.getElementById("loginModal");
    const modal = bootstrap.Modal.getInstance(modalEl);
    if (modal) modal.hide();

    alert("Login berhasil!");

    if (!user.username && typeof showProfile === "function") {
        showProfile();
    }
}

function registerUser() {
    const name = document.getElementById("register-name").value.trim();
    const email = document.getElementById("register-email").value.trim();
    const password = document.getElementById("register-password").value.trim();
    const confirmPassword = document.getElementById("register-confirm-password").value.trim();

    if (!name || !email || !password || !confirmPassword) {
        alert("Lengkapi semua field pendaftaran.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Konfirmasi password tidak sesuai.");
        return;
    }

    const users = JSON.parse(localStorage.getItem("gelora_users") || "[]");
    if (users.find((u) => u.email === email)) {
        alert("Email sudah terdaftar. Silakan login.");
        return;
    }

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
        sports: []
    };

    users.push(newUser);
    localStorage.setItem("gelora_users", JSON.stringify(users));

    const modalEl = document.getElementById("registerModal");
    const modal = bootstrap.Modal.getInstance(modalEl);
    if (modal) modal.hide();

    alert("Pendaftaran berhasil! Silakan login dengan akun baru Anda.");
    showLoginModal();
}

function logoutUser() {
    localStorage.removeItem("gelora_current_user");
    updateAuthUI();
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
            "'": "&#039;"
        }[m];
    });
}

// ===== NAVIGATION SECTION =====
function openBooking(id) {
    const data = venuesData[id];
    if (!data) return;

    currentVenueId = id;
    currentPrice = data.price;

    document.getElementById("detail-title").innerText = data.name;
    document.getElementById("detail-loc").innerText = `${data.loc} (${data.type})`;
    document.getElementById("detail-img").src = data.img;

    document.getElementById("venue-description").innerText = data.description;
    document.getElementById("venue-location").innerText = data.location;
    document.getElementById("venue-area").innerText = data.area;
    document.getElementById("venue-length").innerText = data.length;
    document.getElementById("venue-number").innerText = data.number;

    loadGoogleMapsEmbed(id);

    const facilitiesList = document.getElementById("venue-facilities");
    facilitiesList.innerHTML = "";
    data.facilities.forEach((facility) => {
        const li = document.createElement("li");
        li.className = "mb-1";
        li.innerHTML = `<i class="fas fa-check text-success me-2"></i>${facility}`;
        facilitiesList.appendChild(li);
    });

    selectedSlots = [];
    updateCartAndCheckout();
    renderSchedule();

    hideAllViews();
    document.getElementById("view-booking").classList.remove("d-none");
    window.scrollTo(0, 0);
}

// ===== GOOGLE MAPS SECTION =====
const venueMapsLinks = {
  asatu: "https://maps.app.goo.gl/GeM6dgcPETfTT43S6", 
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

function loadGoogleMapsEmbed(venueId) {
    const mapsContainer = document.getElementById("google-maps-embed");
    const venue = venuesData[venueId];

    if (!venue || !mapsContainer) {
        console.log("Maps container atau venue tidak ditemukan");
        return;
    }

    const encodedAddress = encodeURIComponent(venue.location);
    const embedUrl = `https://maps.google.com/maps?q=${encodedAddress}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

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

function openGoogleMaps() {
    const venueId = currentVenueId;
    const venue = venuesData[venueId];

    if (!venue) return;

    const customLink = venueMapsLinks[venueId];
    if (customLink && !customLink.includes("example")) {
        window.open(customLink, "_blank");
    } else {
        const encodedAddress = encodeURIComponent(venue.location);
        const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
        window.open(mapsUrl, "_blank");
    }
}

// ===== VIEW MANAGEMENT SECTION =====
function hideAllViews() {
    const views = [
        'view-home',
        'view-booking', 
        'view-venue-list',
        'view-activity',
        'view-list-venue',
        'view-profile',
        'view-my-booking'
    ];

    views.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.classList.add('d-none');
    });
    
    const navbar = document.querySelector('.navbar');
    if (navbar) navbar.classList.remove('navbar-hidden');
}

function setupMobileMenu() {
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector(".navbar-collapse");
  
    if (navbarToggler && navbarCollapse) {
        const allNavLinks = document.querySelectorAll(".nav-link, .dropdown-item, .btn-list-venue");
        
        allNavLinks.forEach((link) => {
            link.addEventListener("click", function (e) {
                if (this.classList.contains("dropdown-toggle")) {
                    return; 
                }

                if (window.innerWidth < 992 && navbarCollapse.classList.contains("show")) {
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
    hideAllViews();
    document.getElementById("view-home").classList.remove("d-none");
    window.scrollTo(0, 0);
}

function showVenueList() {
    hideAllViews();
    document.getElementById("view-venue-list").classList.remove("d-none");
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

function showProfile() {
    const user = getCurrentUser();
    if (!user) {
        closeMobileMenu(); 
        forceCloseDropdown();
        alert("Silakan login terlebih dahulu.");
        showLoginModal();
        return;
    }

    closeMobileMenu();
    forceCloseDropdown();
    hideAllViews();
    document.getElementById("view-profile").classList.remove("d-none");
    
    const navbar = document.querySelector('.navbar');
    if (navbar) navbar.classList.remove('navbar-hidden');

    setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 50);
    
    document.getElementById("sidebar-name").innerText = user.name;
    document.getElementById("sidebar-username").innerText = user.username || "@username";
    
    document.getElementById("profile-name").value = user.name || "";
    document.getElementById("profile-username").value = user.username || "";
    document.getElementById("profile-phone").value = user.phone || "";
    document.getElementById("profile-gender").value = user.gender || "";
    document.getElementById("profile-month").value = user.dobMonth || "";
    document.getElementById("profile-year").value = user.dobYear || "";
    document.getElementById("profile-date").value = user.dobDate || "";

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

    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 100);
}

function showMyBooking() {
    const user = getCurrentUser();
    if (!user) {
        closeMobileMenu();
        alert("Silakan login untuk melihat riwayat booking.");
        showLoginModal();
        return;
    }

    closeMobileMenu();
    hideAllViews();
    document.getElementById("view-my-booking").classList.remove("d-none");

    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 100);

    const listContainer = document.getElementById("my-booking-list");
    const emptyState = document.getElementById("empty-booking-state");
    
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
                            
                            <div class="mt-2">
                                <button class="btn btn-sm btn-outline-primary me-1" onclick="showETicket('${booking.id}')">
                                    <i class="fas fa-ticket-alt me-1"></i>E-Tiket
                                </button>
                                <button class="btn btn-sm btn-outline-danger" onclick="deleteBooking('${booking.id}')" title="Hapus Riwayat">
                                    <i class="fas fa-trash-alt"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            listContainer.innerHTML += cardHtml;
        });
    }
}

function switchTab(tabName) {
    document.querySelectorAll(".tab-item").forEach((tab) => {
        tab.classList.remove("active");
    });
    event.target.classList.add("active");

    document.querySelectorAll(".tab-content").forEach((content) => {
        content.classList.remove("active");
    });
    document.getElementById(`tab-${tabName}`).classList.add("active");
}

// ===== UTILITY FUNCTIONS SECTION =====
function formatRupiah(num) {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
    }).format(num);
}

function closeMobileMenu() {
    const navbarCollapse = document.getElementById("navbarNav");
    if (navbarCollapse && navbarCollapse.classList.contains("show")) {
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse) || new bootstrap.Collapse(navbarCollapse);
        bsCollapse.hide();
    }
}

function forceCloseDropdown() {
    const dropdownToggle = document.getElementById("userDropdown");
    const dropdownMenu = document.querySelector("#nav-auth-area .dropdown-menu");

    if (dropdownToggle && dropdownToggle.classList.contains("show")) {
        dropdownToggle.classList.remove("show");
        dropdownToggle.setAttribute("aria-expanded", "false");
    }

    if (dropdownMenu && dropdownMenu.classList.contains("show")) {
        dropdownMenu.classList.remove("show");
    }
}

// ===== SCHEDULE MANAGEMENT SECTION =====
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

    for (let i = 0; i < 7; i++) {
        let d = new Date(today);
        d.setDate(today.getDate() + i);

        let dateNum = d.getDate();
        let monthShort = d.toLocaleString("default", { month: "short" });
        let dateStr = `${dateNum} ${monthShort}`;
        let dayName = days[d.getDay()];

        let col = document.createElement("div");
        col.className = "day-column";

        col.innerHTML = `
            <div class="day-header">
                <div class="day-date">${dateStr}</div>
                <div class="day-name">${dayName}</div>
            </div>
        `;

        for (let h = 8; h < 23; h++) {
            let start = h < 10 ? `0${h}.00` : `${h}.00`;
            let end = h + 1 < 10 ? `0${h + 1}.00` : `${h + 1}.00`;
            let timeStr = `${start} - ${end}`;
            let slotId = `${dateStr}-${start}`;

            let isBooked = false;
            const venuePattern = getVenueBookingPattern(currentVenueId);

            if (venuePattern === "weekend") {
                isBooked = d.getDay() === 0 || d.getDay() === 6 ? Math.random() < 0.6 : Math.random() < 0.2;
            } else if (venuePattern === "evening") {
                isBooked = h >= 17 && h <= 21 ? Math.random() < 0.7 : Math.random() < 0.15;
            } else if (venuePattern === "popular") {
                isBooked = Math.random() < 0.5;
            } else {
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
                    <span class="slot-price">${formatRupiah(currentPrice)}</span>
                    <span class="slot-status">${isBooked ? "Booked" : "Available"}</span>
                </div>
            `;
            col.innerHTML += slotHtml;
        }
        container.appendChild(col);
    }
}

function getVenueBookingPattern(venueId) {
    const patterns = {
        weekend: ["bali_soccer", "bali_futsal", "bali_tennis", "bogor_soccer", "bandung"],
        evening: ["surabaya_futsal", "semarang_futsal", "medan_futsal", "tarena", "elite"],
        popular: ["asatu", "permata", "bintaro", "surabaya_soccer", "medan_soccer"]
    };

    for (const [pattern, venues] of Object.entries(patterns)) {
        if (venues.some((venue) => venueId.includes(venue))) {
            return pattern;
        }
    }

    return "default";
}

function toggleSlot(el, id, date, time) {
    if (el.classList.contains("booked")) return;

    if (el.classList.contains("selected")) {
        el.classList.remove("selected");
        selectedSlots = selectedSlots.filter((s) => s.id !== id);
    } else {
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

    let total = selectedSlots.reduce((acc, item) => acc + item.price, 0);

    if (selectedSlots.length > 0) {
        cartBadge.style.display = "inline-block";
        cartBadge.innerText = selectedSlots.length;
    } else {
        cartBadge.style.display = "none";
    }

    slotCount.innerText = selectedSlots.length;
    totalPrice.innerText = formatRupiah(total);

    if (selectedSlots.length > 0) {
        bar.classList.add("active");
    } else {
        bar.classList.remove("active");
    }
}

// ===== PAYMENT FLOW SECTION =====
function showPaymentModal() {
    const modal = new bootstrap.Modal(document.getElementById("paymentModal"));
    document.getElementById("modal-venue-name").innerText = venuesData[currentVenueId].name;

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

function openQrPayment() {
    const user = getCurrentUser();
    if (!user) {
        alert("Silakan login terlebih dahulu sebelum melakukan pembayaran.");
        showLoginModal();
        return;
    }

    const pmEl = document.getElementById("paymentModal");
    const pmInst = bootstrap.Modal.getInstance(pmEl);
    if (pmInst) pmInst.hide();

    const txnId = "TXN-" + Date.now();
    currentTransactionId = txnId;

    let amount = selectedSlots.reduce((acc, item) => acc + item.price, 0);
    if (amount <= 0) {
        alert("Pilih minimal 1 slot sebelum melakukan pembayaran.");
        return;
    }

    const payload = JSON.stringify({
        txn: txnId,
        venue: currentVenueId,
        user: user.email,
        amount: amount,
        createdAt: new Date().toISOString()
    });

    const modal = new bootstrap.Modal(document.getElementById("qrPaymentModal"));
    modal.show();

    renderQr(payload, amount);
    startQrPollingSim(txnId);
}

function renderQr(payload, amount) {
    const container = document.getElementById("qrContainer");
    container.innerHTML = "";
    qrcodeInstance = new QRCode(container, {
        text: payload,
        width: 200,
        height: 200,
        correctLevel: QRCode.CorrectLevel.H
    });

    document.getElementById("qr-amount").innerText = formatRupiah(amount);
    document.getElementById("qr-status").innerText = "Menunggu pembayaran...";
    document.getElementById("qr-time-left").innerText = 60;
    qrSecondsLeft = 60;
}

function startQrPollingSim(txnId) {
    stopQrPolling();

    const autoPayDelay = Math.floor(Math.random() * 12) + 7;
    let elapsed = 0;

    qrCountdownTimer = setInterval(() => {
        qrSecondsLeft--;
        document.getElementById("qr-time-left").innerText = qrSecondsLeft;
        if (qrSecondsLeft <= 0) {
            stopQrPolling();
            document.getElementById("qr-status").innerText = "QR expired. Silakan coba ulang.";
        }
    }, 1000);

    qrPollingInterval = setInterval(() => {
        elapsed++;
        if (elapsed >= autoPayDelay) {
            onPaymentSuccess(txnId);
        } else {
            document.getElementById("qr-status").innerText = "Menunggu pembayaran" + ".".repeat((elapsed % 3) + 1);
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

function simulateManualPaid() {
    if (!currentTransactionId) return;
    onPaymentSuccess(currentTransactionId);
}

function onPaymentSuccess(txnId) {
    if (!qrPollingInterval && !qrCountdownTimer) return;

    stopQrPolling();
    document.getElementById("qr-status").innerText = "Pembayaran berhasil ✅";
    document.getElementById("qr-time-left").innerText = 0;

    const currentUser = getCurrentUser();
    if (currentUser) {
        const newBooking = {
            id: txnId,
            venueName: venuesData[currentVenueId].name,
            venueImg: venuesData[currentVenueId].img,
            items: selectedSlots,
            totalPrice: selectedSlots.reduce((acc, item) => acc + item.price, 0),
            bookingDate: new Date().toLocaleDateString("id-ID", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric"
            }),
            status: "Lunas"
        };

        const users = JSON.parse(localStorage.getItem("gelora_users") || "[]");
        const userIndex = users.findIndex((u) => u.email === currentUser.email);

        if (userIndex !== -1) {
            if (!users[userIndex].bookingHistory) {
                users[userIndex].bookingHistory = [];
            }

            users[userIndex].bookingHistory.unshift(newBooking);
            localStorage.setItem("gelora_users", JSON.stringify(users));

            currentUser.bookingHistory = users[userIndex].bookingHistory;
            localStorage.setItem("gelora_current_user", JSON.stringify(currentUser));
        }
    }

    setTimeout(() => {
        const modalEl = document.getElementById("qrPaymentModal");
        const modal = bootstrap.Modal.getInstance(modalEl);
        if (modal) modal.hide();

        alert("Pembayaran Berhasil! Cek tiket Anda di menu My Booking.");

        selectedSlots = [];
        updateCartAndCheckout();
        currentTransactionId = null;
        showMyBooking();
    }, 900);
}

// ===== VENUE LIST & FILTER SECTION =====
function renderVenueCards(venueIds) {
    const container = document.getElementById("venue-list-container");
    container.innerHTML = "";

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

    venueIds.forEach((venueId) => {
        const venue = venuesData[venueId];
        if (!venue) return;

        const isCustomVenue = String(venueId).startsWith("custom_");
        
        const col = document.createElement("div");
        col.className = "col-md-6 col-lg-4 mb-4";
        col.style.animation = "fadeIn 0.5s";

        let deleteButtonHtml = "";
        if (isCustomVenue) {
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

function applyFilters() {
    const cityVal = document.getElementById("filter-city").value;
    const typeVal = document.getElementById("filter-type").value;
    const priceVal = document.getElementById("filter-price").value;

    const filteredIds = Object.keys(venuesData).filter((id) => {
        const venue = venuesData[id];
        let matchCity = false;
        let matchType = false;
        let matchPrice = false;

        if (cityVal === "all") {
            matchCity = true;
        } else {
            matchCity = venue.loc.toLowerCase().includes(cityVal.toLowerCase());
        }

        if (typeVal === "all") {
            matchType = true;
        } else {
            if (typeVal === "Soccer") {
                matchType = venue.type.includes("Soccer") || venue.type.includes("Mini Soccer");
            } else if (typeVal === "Tennis") {
                matchType = venue.type.includes("Tennis") || venue.type.includes("Padel");
            } else {
                matchType = venue.type === typeVal;
            }
        }

        if (priceVal === "all") {
            matchPrice = true;
        } else {
            const p = venue.price;
            if (priceVal === "range1" && p <= 200000) matchPrice = true;
            else if (priceVal === "range2" && p > 200000 && p <= 500000) matchPrice = true;
            else if (priceVal === "range3" && p > 500000 && p <= 1000000) matchPrice = true;
            else if (priceVal === "range4" && p > 1000000) matchPrice = true;
        }

        return matchCity && matchType && matchPrice;
    });

    renderVenueCards(filteredIds);
}

// ===== E-TICKET SECTION =====
function showETicket(bookingId) {
    const user = getCurrentUser();
    if (!user || !user.bookingHistory) return;

    const booking = user.bookingHistory.find((b) => b.id === bookingId);
    if (!booking) {
        alert("Data tiket tidak ditemukan.");
        return;
    }

    document.getElementById("ticket-venue-name").innerText = booking.venueName;
    document.getElementById("ticket-id").innerText = "#" + booking.id;

    let venueLoc = "Lokasi Venue";
    for (const [key, val] of Object.entries(venuesData)) {
        if (val.name === booking.venueName) {
            venueLoc = val.loc;
            break;
        }
    }
    document.getElementById("ticket-location").innerText = venueLoc;

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

    const qrContainer = document.getElementById("ticket-qr-code");
    qrContainer.innerHTML = "";

    const qrData = JSON.stringify({
        id: booking.id,
        user: user.email,
        valid: true
    });

    new QRCode(qrContainer, {
        text: qrData,
        width: 150,
        height: 150
    });

    const modal = new bootstrap.Modal(document.getElementById("eTicketModal"));
    modal.show();
}

function deleteBooking(bookingId) {
    if (!confirm("Apakah Anda yakin ingin menghapus riwayat booking ini?")) {
        return;
    }

    const currentUser = getCurrentUser();
    if (!currentUser || !currentUser.bookingHistory) return;

    const oldLength = currentUser.bookingHistory.length;
    currentUser.bookingHistory = currentUser.bookingHistory.filter(b => b.id !== bookingId);

    if (currentUser.bookingHistory.length === oldLength) {
        alert("Gagal menghapus data. ID tidak ditemukan.");
        return;
    }

    localStorage.setItem('gelora_current_user', JSON.stringify(currentUser));

    let allUsers = JSON.parse(localStorage.getItem('gelora_users') || "[]");
    const userIndex = allUsers.findIndex(u => u.email === currentUser.email);
    
    if (userIndex !== -1) {
        allUsers[userIndex] = currentUser; 
        localStorage.setItem('gelora_users', JSON.stringify(allUsers));
    }

    alert("Riwayat booking berhasil dihapus.");
    showMyBooking();
}

// ===== SEARCH & SCHEDULE CHECK SECTION =====
let selectedCity = "";
let selectedSport = "";

function selectCity(city) {
    selectedCity = city;
    document.getElementById("cityDropdown").textContent = city;
}

function selectSport(sport) {
    selectedSport = sport;
    document.getElementById("sportDropdown").textContent = sport;
}

const availableCities = [
    "Jakarta", "Tangerang", "Bekasi", "Depok", "Bandung", 
    "Bogor", "Surabaya", "Semarang", "Medan", "Bali"
];

function isCityAvailable(city) {
    if (city === "Other") {
        return true;
    }
    return availableCities.some(
        (availableCity) =>
            city.toLowerCase().includes(availableCity.toLowerCase()) ||
            availableCity.toLowerCase().includes(city.toLowerCase())
    );
}

function checkSchedule() {
    console.log("🔍 checkSchedule() dipanggil");

    const city = selectedCity;
    const sport = selectedSport;
    const selectedDate = document.getElementById("search-date").value;

    console.log("📊 Input:", { city, sport, selectedDate });

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

    if (city !== "Other" && !isCityAvailable(city)) {
        alert(
            ` Maaf, saat ini kami belum melayani booking untuk kota ${city}.\n\nKota yang tersedia: ${availableCities.join(", ")}`
        );
        return;
    }

    console.log(" Validasi passed, memproses...");

    const filteredVenues = Object.keys(venuesData).filter((venueId) => {
        const venue = venuesData[venueId];
        let matchCity = true;
        let matchSport = true;

        if (city && city !== "Other") {
            matchCity = venue.loc.toLowerCase().includes(city.toLowerCase());
        }

        const sportMapping = {
            "Sepak Bola": ["Soccer", "Mini Soccer"],
            Futsal: ["Futsal"],
            Badminton: ["Badminton"],
            Tenis: ["Tennis", "Padel"],
            Basket: ["Basket"],
            Voli: ["Voli"],
            Fitness: ["Fitness"]
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

    const availableVenues = filteredVenues.filter((venueId) => {
        return Math.random() < 0.8;
    });

    console.log(" Available venues:", availableVenues);

    if (availableVenues.length === 0) {
        alert(
            ` Maaf, tidak ada jadwal kosong pada tanggal ${formatDateDisplay(selectedDate)}.\n\nCoba tanggal lain atau lihat semua venue.`
        );
        return;
    }

    showFilteredVenueList(availableVenues, city, sport, selectedDate);
}

function showFilteredVenueList(venueIds, city, sport, selectedDate) {
    sessionStorage.setItem(
        "lastSearchFilter",
        JSON.stringify({
            venueIds: venueIds,
            city: city,
            sport: sport,
            date: selectedDate
        })
    );

    showVenueList();

    setTimeout(() => {
        setFiltersFromSearch(city, sport);
        renderFilteredVenues(venueIds, city, sport, selectedDate);
    }, 100);
}

function setFiltersFromSearch(city, sport) {
    const cityFilter = document.getElementById("filter-city");
    if (cityFilter && city) {
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

    const typeFilter = document.getElementById("filter-type");
    if (typeFilter && sport && sport !== "Pilih olahraga") {
        const sportMapping = {
            "Sepak Bola": "Soccer",
            Futsal: "Futsal",
            Badminton: "Badminton",
            Tenis: "Tennis"
        };

        const filterValue = sportMapping[sport] || sport;
        typeFilter.value = filterValue;
    }
}

function renderFilteredVenues(venueIds, city, sport, selectedDate) {
    const container = document.getElementById("venue-list-container");
    if (!container) return;

    updateVenueListTitle(venueIds.length, city, sport, selectedDate);
    container.innerHTML = "";

    venueIds.forEach((venueId) => {
        const venue = venuesData[venueId];
        const col = document.createElement("div");
        col.className = "col-md-6 col-lg-4 mb-4";
        col.style.animation = "fadeIn 0.5s";

        const availabilityInfo = generateAvailabilityInfo(selectedDate);

        col.innerHTML = `
            <div class="card venue-card h-100" onclick="openBooking('${venueId}')">
                <img src="${venue.img}" class="card-img-top" alt="${venue.name}" style="height: 200px; object-fit: cover;">
                <div class="card-body">
                    <div class="venue-name">${venue.name}</div>
                    <div class="venue-loc text-muted mb-2" style="font-size:12px">
                        <i class="fas fa-map-marker-alt me-1"></i> ${venue.loc}
                    </div>
                    <div class="badge bg-light text-dark border mb-2">${venue.type}</div>
                    
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
                    
                    <div class="venue-price mt-2">${formatRupiah(venue.price)} / jam</div>
                    
                    <button class="btn btn-sm btn-primary w-100 mt-2" onclick="event.stopPropagation(); openBooking('${venueId}')">
                        <i class="fas fa-calendar-plus me-1"></i>Pesan Sekarang
                    </button>
                </div>
            </div>
        `;
        container.appendChild(col);
    });
}

function updateVenueListTitle(venueCount, city, sport, date) {
    const sectionTitle = document.querySelector("#view-venue-list .section-title");
    if (!sectionTitle) return;

    let titleHTML = `Ditemukan <span>${venueCount} Venue</span> Tersedia`;

    const subtitle = document.createElement("p");
    subtitle.className = "text-muted mb-4";

    let subtitleText = `Pada ${formatDateDisplay(date)}`;
    if (city && city !== "Other") {
        subtitleText += ` di ${city}`;
    }
    if (sport && sport !== "Pilih olahraga") {
        subtitleText += ` untuk ${sport}`;
    }

    subtitle.textContent = subtitleText;
    sectionTitle.innerHTML = titleHTML;

    const existingSubtitle = sectionTitle.nextElementSibling;
    if (existingSubtitle && existingSubtitle.className.includes("text-muted")) {
        existingSubtitle.remove();
    }
    sectionTitle.parentNode.insertBefore(subtitle, sectionTitle.nextSibling);
}

function generateAvailabilityInfo(selectedDate) {
    const slotCount = Math.floor(Math.random() * 5) + 4;
    const allHours = ["08.00", "10.00", "12.00", "14.00", "16.00", "18.00", "20.00", "22.00"];

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
        timesHtml: timesHtml
    };
}

function formatDateDisplay(dateString) {
    try {
        const date = new Date(dateString);
        const options = {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
        };
        return date.toLocaleDateString("id-ID", options);
    } catch (e) {
        return dateString;
    }
}

// ===== CART MANAGEMENT SECTION =====
function showCartModal() {
    const modal = new bootstrap.Modal(document.getElementById("cartModal"));
    renderCartItems();
    modal.show();
}

function renderCartItems() {
    const container = document.getElementById("cart-items-container");
    const emptyState = document.getElementById("cart-empty-state");
    const totalEl = document.getElementById("cart-total-price");
    const btnPay = document.querySelector("#cartModal .btn-danger");

    container.innerHTML = "";

    if (selectedSlots.length === 0) {
        emptyState.classList.remove("d-none");
        btnPay.disabled = true;
        totalEl.innerText = formatRupiah(0);
        return;
    }

    emptyState.classList.add("d-none");
    btnPay.disabled = false;

    let total = 0;

    selectedSlots.forEach((slot, index) => {
        total += slot.price;

        const venueName = venuesData[currentVenueId] ? venuesData[currentVenueId].name : "Venue Pilihan";

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
                        <div class="fw-bold text-danger" style="font-size:14px;">${formatRupiah(slot.price)}</div>
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

function removeFromCart(slotId) {
    selectedSlots = selectedSlots.filter((s) => s.id !== slotId);
    updateCartAndCheckout();

    const gridSlots = document.querySelectorAll(".time-slot.selected");
    gridSlots.forEach((el) => {
        if (el.getAttribute("onclick") && el.getAttribute("onclick").includes(slotId)) {
            el.classList.remove("selected");
        }
    });

    renderCartItems();
}

function proceedToPaymentFromCart() {
    const cartModalEl = document.getElementById("cartModal");
    const cartModal = bootstrap.Modal.getInstance(cartModalEl);
    if (cartModal) {
        cartModal.hide();
    }

    setTimeout(() => {
        if (selectedSlots.length > 0) {
            showPaymentModal();
        } else {
            alert("Keranjang kosong.");
        }
    }, 400);
}

// ===== PROFILE MANAGEMENT SECTION =====
let tempSelectedSports = [];
let tempProfileImage = "";

function handleImageUpload(input) {
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            document.getElementById('profile-preview-img').src = e.target.result;
            tempProfileImage = e.target.result;
        }
        
        reader.readAsDataURL(input.files[0]);
    }
}

function toggleSport(element, sportName) {
    element.classList.toggle('selected');
    
    if (tempSelectedSports.includes(sportName)) {
        tempSelectedSports = tempSelectedSports.filter(s => s !== sportName);
    } else {
        tempSelectedSports.push(sportName);
    }
    
    console.log("Olahraga dipilih:", tempSelectedSports);
}

function saveProfile() {
    const currentUser = getCurrentUser();
    if (!currentUser) return;

    const newName = document.getElementById('profile-name').value;
    const newUsername = document.getElementById('profile-username').value;
    const newPhone = document.getElementById('profile-phone').value;
    const newGender = document.getElementById('profile-gender').value;
    const newMonth = document.getElementById('profile-month').value;
    const newYear = document.getElementById('profile-year').value;
    const newDate = document.getElementById('profile-date').value;

    currentUser.name = newName;
    currentUser.username = newUsername;
    currentUser.phone = newPhone;
    currentUser.gender = newGender;
    currentUser.dobMonth = newMonth;
    currentUser.dobYear = newYear;
    currentUser.dobDate = newDate;
    
    currentUser.sports = tempSelectedSports;
    if (tempProfileImage) {
        currentUser.avatar = tempProfileImage;
    }

    localStorage.setItem('gelora_current_user', JSON.stringify(currentUser));

    let allUsers = JSON.parse(localStorage.getItem('gelora_users') || "[]");
    const userIndex = allUsers.findIndex(u => u.email === currentUser.email);
    
    if (userIndex !== -1) {
        allUsers[userIndex] = currentUser;
        localStorage.setItem('gelora_users', JSON.stringify(allUsers));
    }

    document.getElementById('sidebar-name').innerText = currentUser.name;
    document.getElementById('sidebar-username').innerText = currentUser.username || "@username";
    updateAuthUI();

    alert("Profil berhasil disimpan!");
}

// ===== VENUE REGISTRATION SECTION =====
let tempVenueImageBase64 = "";

function handleVenueImageUpload(input) {
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            const imgPreview = document.getElementById('venue-preview-img');
            imgPreview.src = e.target.result;
            imgPreview.style.display = 'block';
            tempVenueImageBase64 = e.target.result;
        }
        
        reader.readAsDataURL(input.files[0]);
    }
}

function registerVenue() {
    const currentUser = getCurrentUser();
    if (!currentUser) {
        alert("Silakan login terlebih dahulu untuk mendaftarkan venue.");
        showLoginModal();
        return;
    }

    const name = document.getElementById('reg-name').value;
    const sport = document.getElementById('reg-sport').value;
    const address = document.getElementById('reg-address').value;
    const city = document.getElementById('reg-city').value;
    const price = parseInt(document.getElementById('reg-price').value) || 0;
    const fieldCount = document.getElementById('reg-fields').value || 1;
    
    const facilities = [];
    document.querySelectorAll('.reg-facility:checked').forEach((checkbox) => {
        facilities.push(checkbox.value);
    });

    const imgUrl = tempVenueImageBase64 || "https://images.unsplash.com/photo-1522778119026-d647f0565c6a?w=500&q=80";
    const newId = "custom_" + Date.now();

    const newVenue = {
        name: name,
        loc: `${city} - ${address}`,
        location: address,
        price: price,
        img: imgUrl,
        type: sport,
        description: `Venue ${sport} terbaik di ${city} dengan fasilitas lengkap.`,
        facilities: facilities.length > 0 ? facilities : ["Parkir", "Toilet"],
        area: "Standar Internasional",
        length: "Standar",
        number: `Total ${fieldCount} Lapangan`
    };

    const customVenues = JSON.parse(localStorage.getItem('gelora_custom_venues') || "{}");
    customVenues[newId] = newVenue;
    localStorage.setItem('gelora_custom_venues', JSON.stringify(customVenues));

    venuesData[newId] = newVenue;

    document.getElementById('form-register-venue').reset();
    document.getElementById('venue-preview-img').style.display = 'none';
    tempVenueImageBase64 = "";
    
    alert("Venue berhasil didaftarkan! Venue Anda akan langsung muncul di halaman pencarian.");
    showVenueList();
}

function loadCustomVenues() {
    try {
        const customVenues = JSON.parse(localStorage.getItem('gelora_custom_venues') || "{}");
        
        for (const [key, value] of Object.entries(customVenues)) {
            venuesData[key] = value;
        }
        console.log("Custom venues loaded:", Object.keys(customVenues).length);
    } catch (e) {
        console.error("Gagal memuat custom venues", e);
    }
}

function deleteVenue(venueId, event) {
    if (event) {
        event.stopPropagation();
        event.preventDefault();
    }

    if (!confirm("Apakah Anda yakin ingin menghapus venue ini? Tindakan ini tidak dapat dibatalkan.")) {
        return;
    }

    try {
        const customVenues = JSON.parse(localStorage.getItem('gelora_custom_venues') || "{}");
        
        if (customVenues[venueId]) {
            delete customVenues[venueId];
            localStorage.setItem('gelora_custom_venues', JSON.stringify(customVenues));
        }
    } catch (e) {
        console.error("Gagal menghapus dari storage", e);
    }

    if (venuesData[venueId]) {
        delete venuesData[venueId];
    }

    alert("Venue berhasil dihapus.");
    
    const venueListVisible = !document.getElementById("view-venue-list").classList.contains("d-none");
    
    if (venueListVisible) {
        showVenueList();
    } else {
        showVenueList();
    }
}

// ===== INITIALIZATION SECTION =====
function initializeDropdowns() {
    selectedCity = "";
    selectedSport = "";
    document.getElementById("cityDropdown").textContent = "Pilih kota";
    document.getElementById("sportDropdown").textContent = "Pilih olahraga";
}

document.addEventListener("DOMContentLoaded", function () {
    loadCustomVenues();
    
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

window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
        const navbarCollapse = document.querySelector(".navbar-collapse");
        if (navbarCollapse) {
            navbarCollapse.classList.remove("show");
        }
    }
});