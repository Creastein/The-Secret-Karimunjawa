# 📑 Project Summary: Official Website The Secret Karimunjawa

## 1. Profil Proyek

| | |
| :--- | :--- |
| **Nama Brand** | The Secret Karimunjawa (Resmi) |
| **Klien** | Kak Patricia / Cici |
| **Link Preview** | https://the-secret-karimunjawa.vercel.app/ |
| **Teknologi** | React 18, TypeScript, Vite, Tailwind CSS, Framer Motion, GSAP |
| **Hosting** | Vercel (Cloud Hosting) — Auto-Scale, Global CDN, SSL Otomatis |

---

## 2. Rincian Biaya & Kesepakatan

| Item | Biaya |
| :--- | ---: |
| Paket Website Utama | Rp 3.500.000 |
| Add-on Multilingual (4 Bahasa) | Rp 300.000 |
| **Total Nilai Proyek** | **Rp 3.800.000** |

> **Status Pembayaran**: Biaya tambahan Rp 300.000 akan dibayarkan sekaligus saat pelunasan akhir proyek.

---

## 3. Fitur Website — Detail Lengkap

### 🎬 3.1 Loading Screen (Preloader)
Halaman pertama yang dilihat pengunjung saat membuka website.
- **Logo Brand Animasi**: Logo SVG `The Secret Karimunjawa` tampil dengan animasi sequence halus — memberikan kesan premium sejak detik pertama.
- **Teks Branding**: Elemen teks pendukung menggunakan custom font yang selaras dengan identitas visual brand.
- **Transisi Halus**: Setelah loading selesai, layar bertransisi ke Hero Section tanpa jeda kasar — pengalaman seperti membuka pintu gerbang resort virtual.

---

### 🏠 3.2 Hero Section
Bagian pembuka utama website yang langsung terlihat tanpa scroll.
- **Headline Animasi**: Teks judul dan tagline muncul dengan animasi entrance bertahap menggunakan **Framer Motion** — setiap kata tampil satu per satu setelah loading screen selesai.
- **Gambar Reveal**: Foto utama di sisi kanan tampil dengan efek reveal (tersingkap dari samping), menciptakan kesan dramatis dan sinematik.
- **Call-to-Action**: Tombol utama langsung mengarahkan pengunjung ke bagian booking atau WhatsApp.

---

### 🌿 3.3 Estate Section — Cerita & Keunggulan
Bagian yang menceritakan identitas The Secret Karimunjawa sebagai brand.
- **3 Highlight Utama** yang menjadi pembeda dari pesaing:
  1. **120° Sunset View** — Pemandangan sunset laut 120 derajat langsung dari properti.
  2. **Private Veranda** — Setiap villa memiliki teras pribadi menghadap laut.
  3. **Private Kitchen** — Dapur pribadi tersedia di unit pilihan (Cipaku).
- **Visual Premium**: Desain dengan animasi stagger (elemen muncul bertahap saat scroll) untuk kesan mewah dan interaktif.

---

### 🏡 3.4 Suites Section — Katalog 3 Unit Villa
Halaman katalog villa dengan informasi lengkap per unit.

| Nama Unit | Tipe Kamar | Harga/Malam | Fasilitas Utama | Detail Tempat Tidur |
| :--- | :--- | :--- | :--- | :--- |
| **Cipaku** | One-Bedroom | Rp 1.600.000 – 1.900.000 | Private Kitchen, Private Veranda, Sea View, Sunset View, 100% Privacy | King Size Bed (2×2m) |
| **Birdsong** | Deluxe | Rp 1.700.000 – 2.000.000 | Spacious Veranda, Sea View, Sunset View, Daily Housekeeping | King Size Bed |
| **Tivoli Garden** | Superior | Rp 1.700.000 – 1.900.000 | Private Garden, Garden View, Flexible Bedding, Daily Housekeeping | Queen Bed (1.8×2m) + Single Bed (1.5×2m) |

**Fitur Katalog:**
- **3 Card Villa Interaktif**: Setiap unit memiliki card tersendiri dengan foto, badge tipe kamar (One-Bedroom / Deluxe / Superior), detail kasur, dan daftar fasilitas.
- **Galeri Per Unit**: Klik pada card villa untuk melihat 3–4 foto tambahan dalam galeri lightbox.
- **Tombol "Book Now" Per Unit**: Menekan tombol langsung membuka WhatsApp dengan pesan yang sudah terformat otomatis:
  > *"Halo, saya ingin memesan Villa Cipaku untuk tanggal [TANGGAL]"*
- **Harga Dinamis**: Menampilkan rentang harga (Low Season – High Season) secara transparan, bukan harga tunggal yang bisa menyesatkan.

---

### 🎯 3.5 Experience Section — Fasilitas & Layanan
Menampilkan semua fasilitas dan layanan yang tersedia.
- **Layout Sticky Scroll**: Di desktop, kolom kiri (judul & deskripsi) tetap terlihat saat pengunjung scroll melalui daftar fasilitas di kolom kanan — menggunakan teknologi **GSAP ScrollTrigger.pin()**.
- **8 Fasilitas Resmi** yang ditampilkan dengan icon dan deskripsi:
  1. Sea & Sunset View — Pemandangan laut dan sunset 180°
  2. Private Veranda — Teras outdoor pribadi
  3. Private Kitchen — Dapur lengkap (unit tertentu)
  4. Private Garden — Taman tropis pribadi
  5. Airport Transfer — Layanan antar-jemput bandara *(berbayar)*
  6. Daily Housekeeping — Layanan kebersihan harian
  7. Direct Booking — Pesan langsung via WhatsApp, 0% komisi
  8. Sunrise Breakfast — Pilihan sarapan pagi
- **Tombol CTA**: "Request Services" langsung menghubungkan ke WhatsApp admin.

---

### 🖼️ 3.6 Gallery Section — Galeri Foto
Menampilkan koleksi foto properti dalam tampilan grid profesional.
- **8 Foto High-Quality**: Dikategorikan ke dalam 4 kategori — Exteriors, Interiors, Details, Night.
- **Filter Kategori**: Pengunjung bisa memfilter galeri berdasarkan kategori tertentu.
- **Layout Grid Dinamis**: Beberapa foto tampil lebih besar (span) untuk variasi visual yang menarik.
- **Lazy Loading**: Semua gambar di bawah fold dimuat secara bertahap, sehingga website tetap cepat meskipun banyak foto.

---

### ⭐ 3.7 Testimonials Section — Ulasan Tamu
Menampilkan ulasan nyata dari tamu yang pernah menginap.
- **Rating Prominens**: Skor **9.6/10 dari Booking.com** ditampilkan secara visual besar dan jelas — menjadi trust signal utama.
- **5 Ulasan Terverifikasi**: Semua review diambil dari **Google Maps** (review asli, bukan fabricated):
  - *Dedup* — Pengalaman 3 malam, pujikan fasilitas dan keramahan owner.
  - *Pak Pong* — Pelayanan, kebersihan, view luar biasa.
  - *Asyer Giandra* — Rekomendasi tempat liburan indah.
  - *Marcco Gatucci* — Review dari tamu internasional, memuji desain dan kebersihan.
  - *Mariana Cornicello* — Review dari tamu internasional, pujian staf dan kemudahan sewa skuter.
- **Rotasi Otomatis**: Ulasan berganti secara otomatis dengan animasi halus.

---

### 📍 3.8 Location Section — Peta & Lokasi Sekitar
Menampilkan lokasi properti dan tempat-tempat menarik di sekitarnya.
- **Google Maps Embed**: Peta interaktif dengan pin lokasi presisi The Secret Karimunjawa. Efek grayscale yang berubah berwarna saat di-hover.
- **Tombol "Get Directions"**: Link langsung ke Google Maps untuk navigasi.
- **Panel Nearby Places** (Style Google Maps): Panel kanan menampilkan tempat-tempat terdekat dalam format mirip aplikasi Google Maps.
- **6 Tab Navigasi Kategori**:

| Tab | Jumlah Tempat | Contoh Isi |
| :--- | :---: | :--- |
| **Terdekat** | 5 | Pantai Batu Topeng (786m), Bukit Maming (1.2km), Tanjung Gelam (1.7km) |
| **Kuliner** | 7 | Syamsinar (2.3km), Whaleys Cafe (2.6km), Alun-alun & Pasar Ikan (2.8km), Basa-basi (3.1km), dll. |
| **Bandara** | 1 | Bandar Udara Dewadaru (8km) |
| **Transportasi** | 1 | Pelabuhan Karimunjawa (4.9km) |
| **Atraksi** | 4 | Karimunjawa Package (3.7km), KarimunDjawa Tour (4.1km), Go Green Tour (4.3km), Tracking Mangrove (8.3km) |
| **Landmarks** | 12 | Pantai Batu Topeng, Bukit Maming, Tanjung Gelam, Alun-alun, Bukit Love, Bukit Bendera, Bukit Joko Tuwo, Pantai Bobi, Pantai Nirwana, dll. |

- **Total 30 Lokasi**: Setiap lokasi dilengkapi icon berwarna berdasarkan kategori, nama, sub-kategori, dan jarak dalam KM.
- **Animasi Tab Switching**: Perpindahan antar tab menggunakan transisi halus (AnimatePresence).
- **Scrollable List**: Tab dengan banyak data (terutama Landmarks) bisa di-scroll tanpa mengganggu layout.

---

### 📞 3.9 Contact Section — Formulir Inquiry & WhatsApp
Halaman kontak untuk tamu yang ingin bertanya atau booking.
- **Form Inquiry Lengkap** dengan field:
  - Nama Lengkap
  - Tanggal Check-in & Check-out
  - Pilihan Unit Villa (dropdown: Cipaku, Birdsong, Tivoli Garden)
- **Kirim via WhatsApp**: Setelah mengisi form, data dikirim langsung ke WhatsApp admin (+62 813 1011 434) dalam format pesan yang rapi:
  > *"Halo, saya ingin inquiry ketersediaan di The Secret Karimunjawa.*
  > *Nama: Diah Ayu*
  > *Check-in: 15 Maret 2026*
  > *Check-out: 17 Maret 2026*
  > *Unit: Cipaku"*
- **Floating WhatsApp Button**: Tombol WhatsApp mengambang di pojok kanan bawah, **selalu terlihat** di setiap halaman — tamu bisa langsung chat kapan saja tanpa harus scroll ke bawah.
- **Info Kontak Langsung**: Alamat lengkap, nomor WhatsApp, dan link Instagram ditampilkan jelas.

---

### ❓ 3.10 FAQ Section — Pertanyaan Umum
Accordion FAQ interaktif untuk menjawab pertanyaan yang paling sering ditanyakan tamu.
- **Accordion Animasi Halus**: Klik pertanyaan → jawaban muncul/menghilang dengan animasi smooth.
- **5 FAQ Penting**, termasuk:
  1. **"Apakah ada Private Beach?"** → Tidak, properti TIDAK memiliki Private Beach. *(Transparansi untuk menghindari ekspektasi salah)*
  2. **"Apakah Airport Transfer gratis?"** → Tidak, layanan transfer bersifat berbayar.
  3. **"Berapa rentang harga per malam?"** → Rp 1.600.000 – 2.000.000 tergantung musim.
  4. **"Unit apa saja yang tersedia?"** → Cipaku, Birdsong, Tivoli Garden.
  5. **"Apakah bisa booking langsung tanpa OTA?"** → Ya, 0% komisi via WhatsApp langsung.
- **Multibahasa**: Semua pertanyaan dan jawaban tersedia dalam 4 bahasa.

---

### 🦶 3.11 Footer Section
Bagian bawah website yang berisi navigasi dan informasi kontak.
- **Layout 4 Kolom Profesional**:
  1. **Brand**: Logo, deskripsi, dan alamat lengkap (Jl. I. J. Kasimo, Karimunjawa, Jepara 59455).
  2. **Explore**: Link navigasi cepat ke semua section (Our Story, Three Villas, Experience, Gallery, The Island).
  3. **Information**: Link ke Concierge, Activities, FAQ, dan Contact.
  4. **Get in Touch**: Akses langsung ke 3 channel komunikasi:
     - **WhatsApp** (+62 813 1011 434) — satu klik langsung chat
     - **Instagram** (@thesecretkarimunjawa) — satu klik buka profil IG
     - **Email** (thesecretkarimunjawa@gmail.com) — satu klik buka email
- **Back to Top**: Tombol untuk kembali ke atas halaman dengan scroll smooth.
- **Copyright & Tagline**: "Karimunjawa Has a Secret"

---

## 4. Sistem Multilingual Premium (4 Bahasa)

Fitur add-on berbayar yang memungkinkan website diakses dalam 4 bahasa berbeda.

| Bahasa | Kode | Target Pasar |
| :--- | :---: | :--- |
| 🇮🇩 Bahasa Indonesia | ID | Domestik (Indonesia) |
| 🇬🇧 English | EN | Internasional (Global) |
| 🇪🇸 Español | ES | Eropa & Amerika Latin |
| 🇫🇷 Français | FR | Eropa & Afrika Francophone |

**Detail Teknis:**
- **Language Switcher**: Tombol globe di navbar — klik untuk memilih bahasa, berganti **instan tanpa reload halaman**.
- **Preferensi Tersimpan**: Bahasa pilihan tamu disimpan di browser, jadi saat kembali ke website, bahasa otomatis sama seperti terakhir kali.
- **Adaptive WhatsApp Message**: Pesan booking otomatis menyesuaikan bahasa yang aktif:
  - 🇮🇩 *"Halo, saya ingin memesan Villa Cipaku..."*
  - 🇬🇧 *"Hello, I'd like to book Villa Cipaku..."*
  - 🇪🇸 *"Hola, me gustaría reservar Villa Cipaku..."*
  - 🇫🇷 *"Bonjour, je voudrais réserver Villa Cipaku..."*
- **SEO Multi-bahasa**: Setiap bahasa memiliki meta title & meta description unik agar website muncul di pencarian Google sesuai bahasa pengunjung (misal: orang Prancis search "villa Karimunjawa" → website muncul dalam bahasa Prancis).

---

## 5. Sistem Reservasi — Direct WhatsApp Booking (0% Komisi)

- **Tanpa OTA (Online Travel Agent)**: Tamu booking langsung ke admin, TANPA membayar komisi ke Booking.com, Agoda, Traveloka, dll.
- **Pesan Otomatis Terformat**: Setiap tombol "Book Now" menghasilkan pesan WhatsApp yang sudah berisi nama unit, sehingga admin tidak perlu bertanya ulang.
- **Floating WhatsApp Button**: Tombol chat selalu terlihat di seluruh halaman website.
- **Nomor Tujuan**: +62 813 1011 434 (WhatsApp Admin).

---

## 6. SEO & Visibilitas Google

- **On-Page SEO**: Optimasi heading hierarchy (H1→H2→H3), alt text pada semua gambar, dan keyword relevan.
- **Structured Data (JSON-LD)**: Schema `LodgingBusiness` agar Google menampilkan informasi terstruktur (nama, rating, harga, alamat) langsung di hasil pencarian.
- **Sitemap & Robots.txt**: File yang membantu Google mengindex semua halaman website.
- **Keywords yang Ditargetkan**: `the secret karimunjawa`, `luxury villa karimunjawa`, `villa sea view karimunjawa`, `villa sunset karimunjawa`, `villa cipaku karimunjawa`, `villa birdsong karimunjawa`, `villa tivoli karimunjawa`, `penginapan eksklusif karimunjawa`, `karimunjawa private villa`.
- **Multi-Language SEO**: Tag `hreflang` untuk setiap bahasa agar Google tahu ada 4 versi bahasa dari halaman yang sama.

---

## 7. Kebijakan yang Dicantumkan (Policy / Transparency)

| Kebijakan | Keterangan |
| :--- | :--- |
| **Private Beach** | **TIDAK ADA** — dicantumkan secara transparan di FAQ |
| **Airport Transfer** | Berbayar (non-complimentary) — dicantumkan di FAQ |
| **Harga** | Range dinamis Rp 1.6M–2.0M per malam (tergantung season) |
| **Booking** | Direct via WhatsApp, 0% komisi |

---

## 8. Infrastruktur Teknis

| Aspek | Detail |
| :--- | :--- |
| **Framework** | React 18 + TypeScript (modern, cepat, maintainable) |
| **Styling** | Tailwind CSS v3 (responsive di semua ukuran layar) |
| **Animasi** | Framer Motion + GSAP (animasi premium kelas dunia) |
| **Build Tool** | Vite (build cepat, hot reload instan saat develop) |
| **Hosting** | Vercel — Global CDN, auto-scale, zero-config deployment |
| **SSL Certificate** | Otomatis via Vercel (HTTPS aktif) |
| **Domain** | ⏳ Menunggu konfirmasi domain final (.com / .id) |
| **Performance** | Lazy loading gambar, optimasi WebP, code splitting |

---

## 9. Integrasi Eksternal

| Integrasi | Detail |
| :--- | :--- |
| **Google Maps** | Embed peta interaktif dengan pin lokasi presisi + link navigasi langsung |
| **WhatsApp Business** | Direct booking + floating button + pesan otomatis multibahasa |
| **Instagram** | Link langsung ke profil @thesecretkarimunjawa di navbar dan footer |
| **Email** | Link mailto ke thesecretkarimunjawa@gmail.com |
| **Google Analytics** | ⏳ *Menunggu konfirmasi klien* |

---

## 10. Progress Pengembangan (Update: 4 Maret 2026)

| Section / Fitur | Status | Catatan |
| :--- | :---: | :--- |
| Logo & Branding (Navbar, Footer, Favicon) | ✅ | Logo SVG custom terintegrasi |
| Loading Screen (Preloader) | ✅ | Redesign total dengan animasi brand |
| Hero Section | ✅ | Animasi entrance teks + image reveal |
| Estate Section | ✅ | 3 highlight utama, animasi stagger |
| Suites / Katalog Villa | ✅ | 3 unit lengkap dengan galeri & Book Now |
| Experience Section | ✅ | Sticky scroll layout, 8 fasilitas |
| Gallery Section | ✅ | Filter kategori, grid dinamis, lazy load |
| Testimonials Section | ✅ | 5 review real, rating 9.6/10 |
| Location Section | ✅ | Google Maps + 6 tab nearby places (30 lokasi) |
| Contact Section | ✅ | Form inquiry + floating WhatsApp |
| FAQ Section | ✅ | 5 FAQ accordion interaktif |
| Footer Section | ✅ | 4 kolom, Contact channel langsung |
| Multilingual (4 Bahasa) | ✅ | ID, EN, ES, FR + language switcher |
| Adaptive WhatsApp | ✅ | Pesan booking multibahasa |
| SEO On-Page | ✅ | Keywords, JSON-LD, sitemap, robots.txt |
| SEO Multi-bahasa | ✅ | hreflang tags, meta per bahasa |
| Responsive Design | ✅ | Mobile, Tablet, Desktop |
| Google Analytics | ⏳ | Menunggu konfirmasi klien |
| Domain Final | ⏳ | Menunggu konfirmasi klien |
| Foto Unit Villa Resmi | ⏳ | Menunggu aset dari klien |

---

## 11. Item Pending Konfirmasi Klien

| # | Item | Status |
| :---: | :--- | :---: |
| 1 | Foto unit villa resmi (Cipaku, Birdsong, Tivoli Garden) | ⏳ Belum diterima |
| 2 | Konfirmasi domain final (.com atau .id) | ⏳ Menunggu |
| 3 | Google Analytics — jadi atau tidak? | ⏳ Menunggu |