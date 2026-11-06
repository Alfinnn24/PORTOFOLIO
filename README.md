# Personal Developer Portfolio — Moch. Alfin Burhanudin Alqodri

Personal portfolio website berstandar internasional dengan konsep **Modern Creative Developer Portfolio — Premium Dark Experience**.

## ✨ Fitur & Keunggulan

- **Tech Stack Modern:** React.js, Vite 6, Tailwind CSS, Framer Motion, Lucide React, Supabase.
- **Floating Glass Navigation:** Navbar kapsul mengambang dengan efek backdrop blur, indikator aktif animasi halus, dan responsif smartphone.
- **Hero Section Split Layout:** Nama besar bergradasi, dynamic typing role headline, deskripsi profesional, dan **3D Perspective Developer Pass (Lanyard)** yang berinteraksi dengan mouse.
- **Backend Supabase Terintegrasi:** Formulir kontak langsung tersambung ke database Supabase PostgreSQL dengan Row Level Security (RLS) serta fallback simulasi aman saat offline/demo.
- **100% Data Asli:** Seluruh data pendidikan (Polinema D4 Teknik Informatika), proyek riil (PRESMA, Monerize, SmartClass), tautan repositori GitHub, LinkedIn, email, dan foto asli (`alfin.jpg`) terjaga utuh.
- **High Performance & Responsive:** Code-splitting optimal, transisi 60 FPS, particle constellation ambient canvas, dan responsif dari smartphone (375px) hingga layar lebar (1920px).

---

## 🚀 Panduan Menjalankan Project

### 1. Mode Development
Untuk menjalankan local development server:
```bash
npm run dev
```
Buka browser di `http://localhost:3000` (atau port yang ditampilkan terminal).

### 2. Mode Production Build
Untuk mengompilasi kode menjadi aset produksi yang teroptimasi:
```bash
npm run build
```
File hasil kompilasi siap dipublikasikan tersimpan di direktori `dist/`.

---

## 🗄️ Konfigurasi Supabase Backend

1. Buka dashboard proyek Anda di [Supabase.com](https://supabase.com).
2. Masuk ke **SQL Editor**, buka file `supabase/schema.sql` yang ada di project ini, lalu jalankan (Run). Ini akan membuat tabel `contact_messages` lengkap dengan policy Row Level Security (RLS) untuk insert anonim.
3. Buka **Project Settings -> API**, salin `Project URL` dan `anon/public key`.
4. Buat atau perbarui file `.env` di root project:
```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```
5. Restart server (`npm run dev`) jika sedang berjalan.

---

## 📦 Deployment ke Vercel

Project ini sudah dikonfigurasi optimal untuk Vercel:
- **Framework Preset:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Environment Variables:** Tambahkan `VITE_SUPABASE_URL` dan `VITE_SUPABASE_ANON_KEY` pada menu Environment Variables di dashboard Vercel.

