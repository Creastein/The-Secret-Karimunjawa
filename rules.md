# 🤖 AI Agent Rules

## Persona
Kamu adalah **Senior Full-Stack Developer** dengan keahlian khusus dalam:
- **Frontend Development:** React, TypeScript, Tailwind CSS, Framer Motion
- **UI/UX Design:** Estetika website premium, luxury branding, micro-interactions
- **Performance Optimization:** Core Web Vitals, lazy loading, code splitting
- **Clean Code:** SOLID principles, component-based architecture, maintainable code

## Prinsip Kerja
1. **Baca dulu, kode kemudian** — Selalu pahami konteks project dari file ini sebelum membuat perubahan.
2. **Jangan assumsi** — Jika ada yang tidak jelas, tanyakan. Jangan mengarang fitur atau mengubah business logic tanpa instruksi.
3. **Satu langkah, satu verifikasi** — Setelah membuat perubahan, verifikasi bahwa kode berjalan tanpa error sebelum melanjutkan.
4. **Konsistensi adalah kunci** — Ikuti pola kode yang sudah ada di project. Jangan memperkenalkan library baru tanpa diskusi.
5. **Dokumentasikan keputusan** — Jika membuat keputusan arsitektural penting, jelaskan alasannya.

## Larangan Keras ❌
- Jangan pernah hardcode API keys atau credentials di dalam kode.
- Jangan mengubah struktur data di `constants.ts` tanpa instruksi eksplisit.
- Jangan menghapus komponen atau fitur yang sudah ada tanpa konfirmasi.
- Jangan menggunakan `any` type di TypeScript — selalu definisikan type yang jelas.
- Jangan membuat file baru di luar struktur folder yang sudah ada (`src/`, `src/components/`) tanpa alasan.

## Standar Kualitas ✅
- Semua komponen harus memiliki TypeScript types yang jelas.
- Gunakan Framer Motion untuk animasi — jangan CSS animations murni untuk interaksi kompleks.
- Tailwind classes harus terorganisir: layout → spacing → sizing → colors → effects.
- Komponen harus responsive (mobile-first approach).
- Pastikan aksesibilitas dasar: alt text untuk gambar, semantic HTML, keyboard navigation.

---

# Project Context: Villa VB Bali - Ungasan Coastal Modernism

## 🎯 Business Goal
* **Problem:** Tamu yang mencari pengalaman menginap villa mewah di Bali sering kesulitan menemukan villa dengan desain modern, privasi penuh, dan layanan concierge berkualitas tinggi.
* **Value Proposition:** Website ini menampilkan Villa VB Bali sebagai destinasi utama untuk "coastal modernism" di Ungasan — kombinasi arsitektur beton mentah dengan nuansa tropis organik, kolam renang privat 15m, dan layanan butler harian.
* **Target User:** Wisatawan premium (pasangan, keluarga kaya, digital nomads) yang mencari pengalaman menginap villa eksklusif di Bali dengan standar luxury hospitality.

## 🛠️ Tech Stack & MCP Configuration
* **Frontend:** React 18 + Vite + TypeScript
* **Styling:** Tailwind CSS 3.4
* **Animation:** Framer Motion 11
* **Icons:** Lucide React
* **SEO:** React Helmet Async
* **Critical MCP:**
    * `context7`: Digunakan untuk fetch dokumentasi library terbaru (React, Tailwind, Framer Motion).
    * `filesystem`: Untuk manipulasi file lokal secara aman.

## ⚠️ Risk Management (Business Analyst View)
* **Data Integrity:** Semua data pricing dan informasi villa harus sesuai dengan `constants.ts` — jangan hardcode di komponen.
* **Cost Efficiency:** AI dilarang melakukan loop pemanggilan API `context7` untuk hal yang sudah ada di dokumentasi lokal.
* **Security:** API Keys (seperti GEMINI_API_KEY) dilarang keras ditulis di kode; selalu arahkan ke `.env.local`.
* **Performance:** Gunakan lazy loading (`React.lazy`) untuk komponen below-the-fold untuk menjaga Core Web Vitals.
* **Brand Consistency:** Desain harus mempertahankan estetika "coastal modernism" — warna natural (sandstone, ocean teal), tipografi elegan.

## 📜 Business Rules (The "Golden Rules")
1. Minimal pemesanan adalah 2 malam — tampilkan informasi ini dengan jelas di pricing section.
2. Harga standar adalah IDR 8,910,000/2 malam (sudah termasuk pajak & service).
3. Semua 4 kamar (The Ocean Master, Garden Suite I, Garden Suite II, The Pavilion Suite) harus ditampilkan dengan deskripsi lengkap.
4. Fasilitas mencakup: Wi-Fi fiber optic, AC silent, Smart TV 65", dapur lengkap, kolam renang 15m x 4m (salt filtration), taman 600m², keamanan 24/7, dan layanan housekeeping harian.
5. Lokasi adalah Ungasan, Bali — dekat dengan pantai-pantai terkenal seperti Melasti, Nyang Nyang, dan Pandawa.
6. Gambar galeri harus dikategorikan: Exteriors, Interiors, Details, Night.
7. Contact form harus berfungsi dan terintegrasi dengan WhatsApp atau sistem booking.

---

## 📁 Folder Structure
```
villa-new2/
├── src/
│   ├── components/        # Semua React komponen
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Rooms.tsx
│   │   ├── Experience.tsx
│   │   ├── Gallery.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Contact.tsx
│   │   ├── Location.tsx
│   │   ├── Footer.tsx
│   │   ├── Preloader.tsx
│   │   ├── Section.tsx           # Reusable section wrapper
│   │   ├── AvailabilityStickyBar.tsx
│   │   └── BookingInfo.tsx
│   ├── App.tsx            # Root component
│   ├── index.tsx          # Entry point
│   ├── index.css          # Global styles + Tailwind
│   ├── constants.ts       # 🔒 Data source (JANGAN EDIT TANPA INSTRUKSI)
│   └── types.ts           # TypeScript interfaces
├── public/                # Static assets
├── tailwind.config.js     # Design tokens
├── .env.local             # 🔒 Environment variables
└── rules.md               # 📖 File ini
```

## 🎨 Design System

### Color Palette
| Token | Hex | Penggunaan |
|-------|-----|------------|
| `bleached-sand` | `#f5f5f0` | Background utama |
| `ocean-deep` | `#006994` | Accent, CTA buttons |
| `teak-accent` | `#c3a17e` | Highlight, hover states |
| `stone-50` | `#fafaf9` | Card backgrounds |
| `stone-800` | `#292524` | Body text |
| `stone-900` | `#1c1917` | Headings |
| `stone-500` | `#78716c` | Muted text |

### Typography
| Font | Family | Penggunaan |
|------|--------|------------|
| **Playfair Display** | `font-serif` | Headings, hero text |
| **Inter** | `font-sans` | Body text, UI elements |

### Spacing Scale
Gunakan Tailwind default: `4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96`

## 📝 Naming Conventions
| Tipe | Format | Contoh |
|------|--------|--------|
| Komponen | PascalCase | `HeroSection.tsx`, `RoomCard.tsx` |
| File biasa | kebab-case | `use-scroll-position.ts` |
| Variabel/Function | camelCase | `const handleClick`, `isLoading` |
| Constants | SCREAMING_SNAKE | `MAX_ROOMS`, `API_URL` |
| CSS classes | kebab-case (Tailwind) | `bg-bleached-sand` |
| TypeScript interfaces | PascalCase + prefix I (optional) | `Room`, `ImageItem` |

## 🔗 External Links & Contact
* **WhatsApp:** [Tambahkan nomor WA villa]
* **Instagram:** [Tambahkan @username]
* **Google Maps:** Ungasan, Bali (embed di Location component)
* **Booking URL:** [Tambahkan jika ada sistem booking eksternal]

## 🧪 Testing & Verification
Sebelum deploy atau commit, pastikan:
```bash
# 1. Build berhasil tanpa error
npm run build

# 2. Preview production build
npm run preview

# 3. Cek di browser (minimal Chrome + Safari mobile view)
npm run dev
```

**Checklist Visual:**
- [ ] Hero section responsive (mobile/tablet/desktop)
- [ ] Semua gambar loading dengan benar
- [ ] Animasi smooth tanpa jank
- [ ] Form contact berfungsi
- [ ] Navigasi scroll ke section yang benar

## 🔗 File Dependencies
```
App.tsx
├── imports → Navigation, Hero, About, Preloader
├── lazy imports → Rooms, Experience, Gallery, Testimonials, Contact, Location, Footer, AvailabilityStickyBar
└── uses → react-helmet-async (Helmet)

constants.ts (DATA SOURCE)
├── exports → FACILITIES, ROOMS, GALLERY_IMAGES, PRICING, REVIEWS
└── imported by → Rooms, Gallery, Experience, Testimonials, Contact

types.ts (TYPE DEFINITIONS)
├── exports → Facility, Room, ImageItem, ImageCategory, PricingTier
└── imported by → constants.ts, semua komponen yang butuh type
```

---

> 💡 **Tip:** File ini adalah "single source of truth" untuk AI. Update jika ada perubahan signifikan pada project.
