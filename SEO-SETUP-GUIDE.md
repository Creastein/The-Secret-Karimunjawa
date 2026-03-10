# SEO Setup Guide — The Secret Karimunjawa

Panduan lengkap untuk mengoptimalkan SEO website setelah deploy.

---

## 1. 🔍 Validasi Schema di Google Rich Results Test

### Apa yang di-validasi?
Website ini memiliki **2 schema** yang perlu divalidasi:
- **LodgingBusiness** — informasi villa, rating, harga, lokasi
- **FAQPage** — 17 pertanyaan FAQ untuk rich snippets di Google

### Langkah-langkah:
1. Buka [Google Rich Results Test](https://search.google.com/test/rich-results)
2. Masukkan URL: `https://thesecretkarimunjawa.com`
3. Klik **"Test URL"**
4. Tunggu proses scanning selesai
5. Periksa hasilnya:
   - ✅ Hijau = valid, siap tampil sebagai rich snippet
   - ⚠️ Kuning = warning (biasanya optional field yang kosong, tidak masalah)
   - ❌ Merah = error, perlu diperbaiki

### Hasil yang diharapkan:
| Schema | Expected Result |
|--------|----------------|
| LodgingBusiness | ✅ Rating 9.6, harga, alamat, amenities |
| FAQPage | ✅ 17 FAQ questions dari 5 kategori |

### Troubleshooting:
- Jika schema **tidak terdeteksi**, kemungkinan Google belum render JavaScript. Coba gunakan opsi **"Test Code"** dan paste source code HTML dari browser (Ctrl+U di halaman website).
- Jika ada **error pada field tertentu**, periksa file `src/App.tsx` pada bagian `<script type="application/ld+json">`.

---

## 2. 📊 Setup Google Search Console (GSC)

### Langkah 1: Buka Google Search Console
- URL: [https://search.google.com/search-console](https://search.google.com/search-console)
- Login dengan akun Google (bisa akun developer, nanti invite client)

### Langkah 2: Tambah Property
1. Klik **"Add Property"**
2. Pilih **"URL prefix"**
3. Masukkan: `https://thesecretkarimunjawa.com`
4. Klik **"Continue"**

### Langkah 3: Verifikasi Ownership
Pilih **salah satu** metode verifikasi berikut:

#### Opsi A: HTML File Upload (Recommended)
1. Download file verifikasi dari Google (misalnya `google1234567890abcdef.html`)
2. Taruh file tersebut di folder `public/` project ini
3. Deploy ulang website
4. Klik **"Verify"** di GSC

#### Opsi B: HTML Meta Tag
1. Copy meta tag yang diberikan Google, contoh:
   ```html
   <meta name="google-site-verification" content="KODE_VERIFIKASI_DISINI" />
   ```
2. Tambahkan ke file `index.html` di dalam `<head>`:
   ```html
   <head>
     <meta charset="UTF-8" />
     <meta name="google-site-verification" content="KODE_VERIFIKASI_DISINI" />
     ...
   </head>
   ```
3. Deploy ulang website
4. Klik **"Verify"** di GSC

#### Opsi C: DNS Record
1. Login ke domain registrar (Namecheap, GoDaddy, Cloudflare, dll)
2. Tambah TXT record sesuai instruksi dari Google
3. Tunggu propagasi DNS (biasanya 5 menit - 24 jam)
4. Klik **"Verify"** di GSC

### Langkah 4: Submit Sitemap
1. Di sidebar GSC, klik **"Sitemaps"**
2. Di field "Add a new sitemap", ketik: `sitemap.xml`
3. Klik **"Submit"**
4. Status akan berubah menjadi **"Success"** setelah Google crawl

### Langkah 5: Invite Client (Opsional)
1. Di GSC, klik ⚙️ **Settings** → **Users and permissions**
2. Klik **"Add user"**
3. Masukkan email client
4. Pilih permission:
   - **Owner** = full control (recommended untuk client)
   - **Full** = bisa lihat semua data, tapi tidak bisa hapus property

---

## 📅 Timeline SEO

| Milestone | Estimasi Waktu |
|-----------|---------------|
| Google mulai crawling | 1-3 hari setelah submit sitemap |
| Halaman mulai muncul di Google | 1-2 minggu |
| FAQ rich snippets muncul | 2-4 minggu |
| Ranking stabil untuk keyword target | 2-3 bulan |
| Optimal performance | 6-12 bulan (dengan konten konsisten) |

---

## 🔗 Link Penting

| Tool | URL | Fungsi |
|------|-----|--------|
| Google Search Console | https://search.google.com/search-console | Monitor SEO |
| Rich Results Test | https://search.google.com/test/rich-results | Validasi schema |
| PageSpeed Insights | https://pagespeed.web.dev | Cek kecepatan website |
| Meta Tags Preview | https://metatags.io | Preview tampilan di Google/Facebook/Twitter |
| Mobile-Friendly Test | https://search.google.com/test/mobile-friendly | Cek responsiveness |

---

## ✅ Checklist Setelah Deploy

- [ ] Deploy website ke `thesecretkarimunjawa.com`
- [ ] Setup Google Search Console
- [ ] Verifikasi ownership
- [ ] Submit sitemap (`sitemap.xml`)
- [ ] Validasi schema di Rich Results Test
- [ ] Test OG preview di metatags.io
- [ ] Cek kecepatan di PageSpeed Insights
- [ ] Invite email client ke GSC (jika perlu)
