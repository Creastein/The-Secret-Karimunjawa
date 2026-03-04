# 🗺️ Project Plan: The Secret Karimunjawa
**Stack**: React 18 + TypeScript + Vite + Tailwind CSS v3 + Framer Motion + GSAP
**Live Preview**: https://the-secret-karimunjawa.vercel.app/
**Total Anggaran**: Rp 3.800.000

---

## Status Current (Baseline)
Sections yang sudah ada: `Hero`, `Estate`, `Suites`, `Experience`, `Gallery`, `Testimonials`, `Contact`, `Location`, `Footer`

❌ Data villa masih placeholder (bukan Cipaku/Birdsong/Tivoli Garden)
❌ Fasilitas di `site.ts` tidak akurat (ada "Beachfront", "Complimentary Transfer" — SALAH)
❌ Belum ada sistem multilingual (4 bahasa: ID, EN, ES, FR)
❌ Belum ada FAQ interaktif
❌ Harga masih hardcode Rp 1.350.000 (harus Rp 1.6M–2.0M dinamis)
❌ SEO keywords belum optimal untuk pasar global
❌ Belum ada Google Analytics
❌ WhatsApp booking message belum adaptive per bahasa

---

## Phase 1 — Data Cleanup & Content Accuracy
**Prioritas**: KRITIS — Semua data palsu/placeholder harus dihapus dulu sebelum UI.
**Estimasi**: 1–2 hari kerja

### 1.1 Perbaikan `src/config/site.ts`
- [x] Hapus fasilitas yang SALAH: "Beachfront Location", "Airport Transfer" (complimentary — SALAH)
- [x] Ganti dengan fasilitas yang benar:
  - Sea View & Sunset View (semua unit)
  - Private Veranda (Cipaku & Birdsong)
  - Private Kitchen (Cipaku)
  - Private Garden (Tivoli Garden)
  - Airport Transfer *(Non-Complimentary / Berbayar)*
  - Daily Housekeeping
  - Direct WhatsApp Booking (0% komisi)
- [x] Replace `ROOMS` dengan 3 unit resmi:
  - **Cipaku** — One-Bedroom | King Bed 2x2m | Private Kitchen + Veranda | 100% Privacy
  - **Birdsong** — Deluxe | King Bed | Sea & Sunset View | Spacious Veranda
  - **Tivoli Garden** — Superior | Queen Bed 1.8x2m + Single Bed 1.5x2m | Private Garden
- [x] Update `PRICING` ke range dinamis: Rp 1.600.000–2.000.000/malam (High/Low Season)
- [x] Update `REVIEWS` — verifikasi apakah review sudah real dari Booking.com

### 1.2 Perbaikan SEO Keywords di `App.tsx`
- [x] Tambah keywords: `villa sea view karimunjawa`, `villa sunset karimunjawa`, `penginapan eksklusif karimunjawa`, `karimunjawa private villa`, `luxury villa karimunjawa`, `villa cipaku karimunjawa`, `villa birdsong karimunjawa`, `villa tivoli karimunjawa`
- [x] Update `og:url` ke domain final (konfirmasi domain)
- [x] Update meta description mencakup 3 nama unit villa

---

## Phase 2 — Penyempurnaan Section & UI yang Ada
**Prioritas**: TINGGI — Benahi section yang datanya masih salah.
**Estimasi**: 2–3 hari kerja

### 2.1 Section `Suites.tsx` — Katalog 3 Unit
- [x] Rebuild card unit: dari 1 villa generic → 3 card (Cipaku, Birdsong, Tivoli Garden)
- [x] Tambah badge tipe kamar (One-Bedroom / Deluxe / Superior)
- [x] Tampilkan detail tempat tidur (ukuran kasur)
- [x] Tombol "Book Now" per unit → WhatsApp dengan pesan terformat:
  ```
  Halo, saya ingin memesan Villa [NAMA UNIT] untuk tanggal [TANGGAL]
  ```
  
### 2.2 Section `Experience.tsx` — Fasilitas
- [x] Sinkronkan icon & deskripsi dengan data baru dari Phase 1.1
- [x] Hapus mention fasilitas yang tidak ada

### 2.3 Section `Contact.tsx` — WhatsApp Booking
- [x] Pastikan nomor WhatsApp Admin sudah benar
- [x] Form inquiry dengan field: Nama, Tanggal Check-in, Tanggal Check-out, Pilihan Unit
- [x] Floating WhatsApp button selalu terlihat di semua halaman

### 2.4 Section `Location.tsx` — Google Maps
- [x] Embed Google Maps dengan pin koordinat presisi The Secret Karimunjawa
- [x] Tambah info cara sampai ke lokasi (dari bandara/pelabuhan)

### 2.5 Section `Testimonials.tsx`
- [x] Validasi review yang tampil — pastikan dari Booking.com/Google Maps nyata
- [x] Tambah skor rating 9.6/10 lebih prominend secara visual

---

## Phase 3 — Fitur Baru: FAQ Interaktif
**Prioritas**: TINGGI — Transparansi kepada tamu adalah USP.
**Estimasi**: 1 hari kerja

### 3.1 Buat `src/components/sections/FAQ.tsx`
- [x] Accordion FAQ interaktif (Framer Motion `AnimatePresence`)
- [x] Konten FAQ wajib mencakup:
  1. "Apakah ada Private Beach?" → **Tidak, properti tidak memiliki Private Beach.**
  2. "Apakah Airport Transfer gratis?" → **Tidak, layanan transfer bersifat berbayar.**
  3. "Berapa rentang harga per malam?" → **Rp 1.600.000–2.000.000 tergantung musim.**
  4. "Unit apa saja yang tersedia?" → Cipaku, Birdsong, Tivoli Garden
  5. "Apakah bisa pesan langsung tanpa OTA?" → **Ya, 0% komisi via WhatsApp.**
- [x] Daftarkan `FAQ` ke `App.tsx` setelah `Contact`

---

## Phase 4 — Sistem Multilingual (4 Bahasa)
**Prioritas**: TINGGI — Fitur berbayar (Rp 300.000 add-on).
**Estimasi**: 3–4 hari kerja
**Bahasa**: 🇮🇩 Indonesia • 🇬🇧 Inggris • 🇪🇸 Spanyol • 🇫🇷 Prancis

### 4.1 Setup i18n
- [x] Install `react-i18next` + `i18next`
- [x] Buat `src/i18n/` folder:
  ```
  src/i18n/
  ├── index.ts         ← init i18next
  └── locales/
      ├── id.json
      ├── en.json
      ├── es.json
      └── fr.json
  ```
- [x] Pindahkan semua string UI ke file locale (section by section)

### 4.2 Language Switcher UI
- [x] Buat `src/components/ui/LanguageSwitcher.tsx`
- [x] Integrasikan ke `Navigation` — dropdown Globe button
- [x] Simpan preferensi bahasa di `localStorage`

### 4.3 Adaptive WhatsApp Message
- [x] Pesan "Book Now" otomatis menyesuaikan bahasa aktif:
  - ID: `Halo, saya ingin memesan Villa Cipaku...`
  - EN: `Hello, I'd like to book Villa Cipaku...`
  - ES: `Hola, me gustaría reservar Villa Cipaku...`
  - FR: `Bonjour, je voudrais réserver Villa Cipaku...`

### 4.4 SEO Multi-bahasa
- [x] `react-helmet-async` generate `<html lang="">` dinamis per bahasa
- [x] Meta title & description unik per bahasa
- [x] `hreflang` tags untuk Google global indexing

---

## Phase 5 — SEO Lanjutan & Google Analytics
**Prioritas**: SEDANG — Visibilitas Google jangka panjang.
**Estimasi**: 1 hari kerja
**Catatan**: Google Analytics masih *pending konfirmasi klien*

### 5.1 On-Page SEO
- [x] Audit heading hierarchy (H1 → H2 → H3) di semua section
- [x] Alt text deskriptif di semua `<img>` dalam `Gallery.tsx`
- [x] Structured Data (JSON-LD) untuk `LodgingBusiness`:
  - Nama, alamat, rating, harga, foto
- [x] `sitemap.xml` + `robots.txt` di folder `public/`

### 5.2 Performance
- [x] Audit semua gambar → pastikan sudah WebP
- [x] Lazy load semua gambar di bawah fold
- [ ] Lighthouse score target: Performance ≥ 90, SEO = 100

### 5.3 Google Analytics *(Menunggu konfirmasi klien)*
- [ ] Pasang `GA4` measurement ID di `index.html`
- [ ] Track event: `book_now_clicked`, `language_changed`, `unit_viewed`

---

## Phase 6 — Quality Assurance & Pre-Launch
**Prioritas**: WAJIB sebelum go-live.
**Estimasi**: 1–2 hari kerja

### 6.1 Cross-Device Testing
- [ ] Mobile (≤ 390px): iPhone SE, iPhone 14 Pro
- [ ] Tablet (768px): iPad Air
- [ ] Desktop (1440px, 1920px)

### 6.2 Functional Testing
- [ ] Semua tombol "Book Now" → WhatsApp terbuka dengan pesan benar
- [ ] Language switcher → seluruh teks berganti tanpa reload
- [ ] FAQ accordion → buka/tutup smooth
- [ ] Gallery filter → category images benar

### 6.3 Checklist Final
- [ ] Zero TypeScript error (`tsc --noEmit`)
- [ ] Zero `console.log`
- [ ] Semua gambar unit villa sudah diterima dari klien & dioptimasi
- [ ] Domain final dikonfirmasi & DNS pointing ke Vercel
- [ ] SSL aktif (auto via Vercel)

---

## ⏳ Item Pending Konfirmasi Klien
| # | Item | Status |
|---|------|--------|
| 1 | Foto unit villa (Cipaku, Birdsong, Tivoli Garden) | ⏳ Belum diterima |
| 2 | Nomor WhatsApp Admin | ⏳ Konfirmasi |
| 3 | Domain final (.com atau .id) | ⏳ Konfirmasi |
| 4 | Google Analytics — jadi atau tidak? | ⏳ Konfirmasi |

---

## 📅 Estimasi Total Timeline
| Phase | Deskripsi | Estimasi |
|-------|-----------|----------|
| Phase 1 | Data Cleanup & Content | 1–2 hari |
| Phase 2 | Penyempurnaan Section | 2–3 hari |
| Phase 3 | FAQ Interaktif | 1 hari |
| Phase 4 | Multilingual 4 Bahasa | 3–4 hari |
| Phase 5 | SEO & Analytics | 1 hari |
| Phase 6 | QA & Pre-Launch | 1–2 hari |
| **Total** | | **~9–13 hari kerja** |

> ⚠️ Timeline dimulai setelah aset visual (foto unit) diterima lengkap dari klien.
