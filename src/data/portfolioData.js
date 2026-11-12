export const personalInfo = {
  name: "Moch Alfin Burhanudin Alqodri",
  fullName: "Moch. Alfin Burhanudin Alqodri",
  role: "FULL STACK DEVELOPER",
  headlinePrefix: "Welcome to",
  headlineMain: "My Portfolio",
  roles: [
    "Full Stack Developer",
    "Creative Developer",
    "UI/UX Specialist",
    "Tech Enthusiast"
  ],
  heroDescription: "Saya merancang dan membangun pengalaman web dan aplikasi yang berpusat pada pengguna, menggabungkan ketepatan rekayasa perangkat lunak dengan antarmuka kreatif. Berdedikasi pada arsitektur bersih, interaksi yang halus, dan detail yang bernilai nyata.",
  university: "Politeknik Negeri Malang",
  major: "D4 Teknik Informatika",
  status: "Available for Internship & Projects",
  email: "alfin9827@gmail.com",
  whatsapp: "https://wa.me/6285748982798",
  location: "Malang, Jawa Timur, Indonesia",
  websiteUrl: "https://www.alfari.my.id",
  
  aboutDescription: "Saya adalah seorang developer yang memiliki ketertarikan pada pengembangan aplikasi web, sistem informasi, dan teknologi modern. Saya senang membangun aplikasi yang tidak hanya memiliki tampilan menarik, tetapi juga fungsional, responsif, dan mudah digunakan.",
  
  socials: {
    github: "https://github.com/Alfinnn24",
    instagram: "https://instagram.com/alfinburhanudinn",
    linkedin: "https://www.linkedin.com/in/mochalfinburhanudin/",
    tiktok: "https://tiktok.com/@alfinburhanudin",
    whatsapp: "https://wa.me/6285748982798",
    email: "mailto:alfin9827@gmail.com"
  }
};

export const educationData = [
  {
    institution: "Politeknik Negeri Malang (POLINEMA)",
    degree: "D4 Teknik Informatika",
    period: "2023 - Sekarang",
    status: "Aktif (Semester 4)",
    description: "Fokus studi pada Rekayasa Perangkat Lunak, Arsitektur Basis Data, Pemrograman Web Full Stack, Pengembangan Aplikasi Mobile, dan Sistem Tertanam (IoT).",
    badge: "Undergraduate Program",
    highlights: ["IPK Konsisten Memuaskan", "Ketua Tim PBL Web System", "Aktif Workshop Tech & Cloud"]
  }
];

export const experienceData = [
  {
    role: "Full Stack & Web Developer",
    organization: "Project-Based Learning (PBL) POLINEMA",
    period: "2024",
    type: "Academic & Production Project",
    description: "Merancang dan mengimplementasikan sistem pencatatan prestasi mahasiswa berskala institusi (PRESMA) menggunakan Laravel dan MySQL dengan arsitektur role-based access control.",
    technologies: ["Laravel", "PHP", "MySQL", "Bootstrap", "Git"]
  },
  {
    role: "Mobile App Developer",
    organization: "PBL Mobile Computing",
    period: "2024",
    type: "Cross-Platform Project",
    description: "Mengembangkan aplikasi personal finance tracker (Monerize) menggunakan Flutter dan Firebase dengan fitur kategorisasi transaksi real-time dan analisis grafik keuangan.",
    technologies: ["Flutter", "Dart", "Firebase", "State Management"]
  },
  {
    role: "IoT & Embedded System Engineer",
    organization: "Smart Campus Innovation Lab",
    period: "2024",
    type: "Hardware & Software Integration",
    description: "Membangun sistem deteksi okupansi ruang kelas otomatis dengan mikrokontroler ESP32, sensor PIR, DHT, dan dashboard React untuk monitoring energi kampus.",
    technologies: ["ESP32", "C++", "React.js", "Firebase Realtime DB", "IoT Sensors"]
  }
];

export const personalInterests = [
  { label: "Interactive 3D Web", icon: "Boxes", desc: "Eksplorasi Three.js, Canvas, dan WebGL shader" },
  { label: "Clean System Architecture", icon: "Cpu", desc: "Desain sistem terukur, REST API, & database relation" },
  { label: "Modern UI/UX Design", icon: "Palette", desc: "Estetika modern, micro-interaction & typography" },
  { label: "Music & Creative Coding", icon: "Headphones", desc: "Coding ditemani audio lo-fi & ambient soundtrack" }
];

export const projectsData = [
  {
    id: "monerize",
    title: "MONERIZE",
    fullTitle: "Monerize — E-Commerce & Financial App",
    subtitle: "E-Commerce & Financial App",
    category: "Mobile & FinTech",
    badge: "01 • FINTECH APP",
    image: "/monerize.png",
    overview: "Aplikasi mobile manajemen keuangan dan pencatatan arus kas pribadi yang menggabungkan kemudahan e-commerce budgeting, kategorisasi transaksi otomatis, dan analisis grafik pengeluaran real-time.",
    problem: "Banyak mahasiswa dan profesional muda kesulitan mengendalikan pengeluaran harian karena pencatatan manual yang merepotkan dan tidak adanya visualisasi kategori alokasi dana yang mudah dipahami.",
    solution: "Merancang antarmuka mobile modern dan intuitif berbasis Flutter dengan sinkronisasi cloud Firebase, fitur one-tap transaction input, grafik interaktif, dan notifikasi batas anggaran bulanan.",
    techStack: ["Flutter", "Dart", "Firebase Firestore", "REST APIs", "Fl Chart"],
    features: [
      "Input Transaksi Cepat & Kategorisasi Otomatis Pengeluaran",
      "Visualisasi Grafik Pie & Bar Real-time Arus Kas",
      "Sinkronisasi Multi-Device dengan Akun Pengguna Aman",
      "Peringatan Over-budget dan Ringkasan Tabungan Bulanan"
    ],
    githubUrl: "https://github.com/sayevvv/PBL_Mobile.git",
    liveUrl: "https://github.com/sayevvv/PBL_Mobile.git",
    featured: true
  },
  {
    id: "operasional",
    title: "OPERASIONAL",
    fullTitle: "Operasional — Enterprise Dashboard & Management System",
    subtitle: "Enterprise Dashboard",
    category: "Web Application",
    badge: "02 • ENTERPRISE SYSTEM",
    image: "/operasional.png",
    overview: "Sistem dashboard operasional terpadu untuk monitoring alur kerja perusahaan, inventaris aset, pencatatan logistik harian, serta manajemen data multi-departemen secara efisien dan aman.",
    problem: "Proses tracking operasional dan koordinasi antar divisi sering terkendala komunikasi terpisah dan laporan manual yang rawan kehilangan data dan duplikasi pencatatan berkas.",
    solution: "Membangun web portal terpusat dengan role-based authorization, visualisasi metrik performa real-time, approval workflow bertingkat, serta otomatisasi pembuatan laporan operasional.",
    techStack: ["React.js", "Laravel", "Tailwind CSS", "MySQL", "REST APIs"],
    features: [
      "Real-time Enterprise Operations Monitoring Dashboard",
      "Sistem Verifikasi & Approval Bertingkat Multi-User",
      "Manajemen Aset & Laporan Inventaris Otomatis",
      "Ekspor Laporan Harian & Bulanan Terintegrasi"
    ],
    githubUrl: "https://github.com/Alfinnn24",
    liveUrl: "https://github.com/Alfinnn24",
    featured: true
  },
  {
    id: "pkl-umumcsr",
    title: "PKL & CSR TRACKER",
    fullTitle: "PKL & CSR Tracker — Public Management & Community System",
    subtitle: "Public Management System",
    category: "Public Sector System",
    badge: "03 • PUBLIC SYSTEM",
    image: "/pkl-umumcsr.png",
    overview: "Platform digital terintegrasi untuk pengelolaan, pendaftaran, verifikasi kegiatan Praktik Kerja Lapangan (PKL), serta monitoring program Corporate Social Responsibility (CSR) masyarakat secara transparan.",
    problem: "Pencatatan program pengabdian, tracking kegiatan magang/PKL, dan penyaluran program CSR masih manual dan sulit diaudit perkembangannya oleh instansi terkait.",
    solution: "Mengembangkan aplikasi manajemen publik berbasis web dengan alur pendaftaran peserta terstruktur, timeline monitoring real-time, dan dokumentasi laporan kegiatan yang terpusat.",
    techStack: ["Laravel", "PHP", "Bootstrap 5", "MySQL", "JavaScript"],
    features: [
      "Portal Pendaftaran & Verifikasi Peserta PKL Terpusat",
      "Tracking Real-time Milestone Progres CSR Komunitas",
      "Dokumentasi Laporan Lapangan & Upload Bukti Kegiatan",
      "Dashboard Rekapitulasi Data Peserta & Mitra Publik"
    ],
    githubUrl: "https://github.com/Alfinnn24",
    liveUrl: "https://github.com/Alfinnn24",
    featured: true
  },
  {
    id: "presma",
    title: "PORTAL PRESMA",
    fullTitle: "Portal PRESMA — Student Achievement Platform",
    subtitle: "Student Achievement Platform",
    category: "Academic System",
    badge: "04 • ACADEMIC PORTAL",
    image: "/presma.png",
    overview: "Sistem informasi berbasis web yang dirancang untuk memfasilitasi pencatatan, verifikasi bertingkat, dan rekapitulasi data prestasi akademik maupun non-akademik mahasiswa di lingkungan perguruan tinggi secara terpusat.",
    problem: "Sebelumnya, proses pelaporan dan verifikasi prestasi mahasiswa masih dilakukan secara manual menggunakan spreadsheet dan formulir fisik, mengakibatkan keterlambatan verifikasi dan redundansi berkas.",
    solution: "Membangun platform terpusat berbasis Laravel dengan otentikasi multi-level (Mahasiswa, Dosen Pembina, Admin Jurusan), sistem upload bukti berkas terenkripsi, status approval real-time, dan ekspor laporan rekapitulasi otomatis.",
    techStack: ["Laravel 10", "PHP", "MySQL", "Bootstrap 5", "SCSS", "Blade Engine"],
    features: [
      "Multi-level Authentication & Role-based Authorization",
      "Sistem Validasi dan Verifikasi Berkas Prestasi Real-time",
      "Dashboard Statistik Prestasi Mahasiswa per Angkatan & Program Studi",
      "Ekspor Data Terintegrasi (PDF & Excel)"
    ],
    githubUrl: "https://github.com/ren5602/PBL-PRESMA.git",
    liveUrl: "https://github.com/ren5602/PBL-PRESMA.git",
    featured: true
  },
  {
    id: "smartclass",
    title: "SMART CLASS",
    fullTitle: "SmartClass — EdTech & Smart IoT Platform",
    subtitle: "EdTech Platform",
    category: "IoT & EdTech",
    badge: "05 • IOT & EDTECH",
    image: "/smartclass.png",
    overview: "Sistem cerdas pemantauan ketersediaan dan okupansi ruang kelas secara real-time. Mengintegrasikan mikrokontroler ESP32 dengan sensor PIR, DHT, dan IR untuk kalkulasi jumlah mahasiswa, deteksi keberadaan, serta otomatisasi efisiensi energi kampus.",
    problem: "Sering terjadi jadwal bentrok, ketidaktahuan mahasiswa tentang ruangan kosong yang bisa digunakan untuk belajar kelompok, serta pemborosan energi listrik di ruang kelas tak berpenghuni.",
    solution: "Mengembangkan rangkaian mikrokontroler terhubung Wi-Fi berbasis ESP32 yang mendeteksi kehadiran gerak dan suhu ruangan, mengirimkan data sensor ke Firebase, dan menampilkannya di dashboard web responsif secara real-time.",
    techStack: ["React.js", "Node.js", "ESP32", "C++", "Firebase Realtime DB", "PIR & DHT11 Sensors"],
    features: [
      "Deteksi Okupansi Ruang Kelas Real-time via Sensor Hardware",
      "Dashboard Web Monitoring Visual Denah Ruangan Interaktif",
      "Pengukuran Suhu dan Kelembapan Ruang Otomatis",
      "Notifikasi Ketersediaan Ruangan untuk Mahasiswa & Dosen"
    ],
    githubUrl: "https://github.com/Najwaalya/smart-classroom-pbl.git",
    liveUrl: "https://github.com/Najwaalya/smart-classroom-pbl.git",
    featured: true
  }
];

export const certificatesData = [
  {
    id: "cert-1",
    title: "Project-Based Learning Web Engineering Certification",
    issuer: "Politeknik Negeri Malang & Jurusan Teknologi Informasi",
    date: "2024",
    badge: "ACADEMIC EXCELLENCE",
    credentialId: "TI-POLINEMA-PBL-2024-089",
    skills: ["Full Stack Laravel", "Team Git Workflow", "System Architecture"],
    description: "Sertifikasi kelulusan proyek rekayasa perangkat lunak berskala besar dengan fokus pada ketepatan arsitektur, clean code, serta kolaborasi tim berbasis standar industri."
  },
  {
    id: "cert-2",
    title: "Mobile Application Developer with Flutter & Dart",
    issuer: "Mobile Innovation Academy & Polinema Tech Club",
    date: "2024",
    badge: "MOBILE COMPETENCY",
    credentialId: "MOB-DEV-POLINEMA-2024-114",
    skills: ["Flutter", "State Management", "Firebase Integration"],
    description: "Sertifikasi penguasaan pengembangan aplikasi multi-platform, pembuatan UI responsif, state management, dan konektivitas database real-time cloud."
  },
  {
    id: "cert-3",
    title: "Internet of Things & Embedded Microcontroller Specialist",
    issuer: "Hardware & IoT Systems Lab",
    date: "2024",
    badge: "HARDWARE & IOT",
    credentialId: "IOT-ESP32-CERT-2024-042",
    skills: ["ESP32 Firmware", "C++", "Sensor Interfacing", "MQTT & Firebase"],
    description: "Sertifikasi perancangan sistem cerdas berbasis mikrokontroler ESP32, integrasi sensor lingkungan (PIR, DHT, IR), dan protokol komunikasi IoT ke dashboard web."
  },
  {
    id: "cert-4",
    title: "Modern Database Design & Relational MySQL Optimization",
    issuer: "Database Engineering Competence",
    date: "2023",
    badge: "DATABASE DESIGN",
    credentialId: "DB-SQL-POLINEMA-2023-205",
    skills: ["Relational MySQL", "Normalization", "Query Optimization"],
    description: "Pengujian kompetensi dalam perancangan skema relasional, normalisasi data hingga 3NF, optimasi indeks, dan integritas data transaksi perbankan & akademik."
  }
];

export const achievementsData = [
  {
    id: "ach-1",
    title: "Finalist Best Project-Based Learning System 2024",
    category: "Academic Competition",
    year: "2024",
    issuer: "Jurusan Teknologi Informasi Politeknik Negeri Malang",
    description: "Membawa proyek PBL-PRESMA menjadi salah satu sistem terpilih untuk peragaan dan implementasi sistem informasi rekam prestasi kampus.",
    stats: "Top 5 Finalist"
  },
  {
    id: "ach-2",
    title: "Active Core Developer in 3 Cross-Disciplinary Projects",
    category: "Engineering Delivery",
    year: "2023 - 2024",
    issuer: "Politeknik Negeri Malang",
    description: "Berhasil menyelesaikan 3 solusi perangkat lunak end-to-end: web sistem institusional, mobile fintech, dan sistem hardware IoT terintegrasi cloud.",
    stats: "3 Systems Shipped"
  },
  {
    id: "ach-3",
    title: "100% On-Time Milestones in Collaborative Sprint Cycles",
    category: "Agile Execution",
    year: "2024",
    issuer: "Informatics Team Engineering",
    description: "Memimpin integrasi Git repository dan konsistensi code review tanpa keterlambatan rilis jadwal akademik.",
    stats: "100% Delivery"
  }
];

export const counterStats = [
  { value: 3, suffix: "+", label: "Production & PBL Projects", detail: "Web, Mobile, and IoT Systems" },
  { value: 14, suffix: "+", label: "Technologies & Frameworks", detail: "Modern Frontend, Backend & Microcontrollers" },
  { value: 100, suffix: "%", label: "Code Dedication", detail: "Clean, Maintainable & Scalable" },
  { value: 24, suffix: "/7", label: "Continuous Learning", detail: "Exploring 3D & Advanced Web Tech" }
];

export const spotifyConfig = {
  title: "A Little Music.",
  subtitle: "A Lot of Ideas.",
  description: "Musik yang menemani proses saya mengubah ide menjadi sesuatu yang nyata. Berikut playlist yang sering saya dengarkan saat coding, eksplorasi arsitektur perangkat lunak, dan membedah logika algoritma.",
  playlistEmbedUrl: "https://open.spotify.com/embed/playlist/37i9dQZF1DXdLEN7aqioXM?utm_source=generator&theme=0",
  spotifyUrl: "https://open.spotify.com/playlist/37i9dQZF1DXdLEN7aqioXM"
};
