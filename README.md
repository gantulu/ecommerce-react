# Templat Toko Daring — React 19 + Tailwind CSS 4

Aplikasi toko daring sisi pelanggan yang dibangun menggunakan React 19, TypeScript, Vite 6, dan Tailwind CSS v4. Seluruh antarmuka dan konten contoh ditampilkan dalam Bahasa Indonesia.

## Fitur

Aplikasi menyediakan 17 halaman berbasis rute:

- Beranda: produk unggulan, kategori, dan produk terlaris.
- Katalog: daftar produk dengan filter kategori, harga, merek, dan penilaian.
- Kategori dan pencarian produk.
- Detail produk: galeri, pilihan warna dan ukuran, ulasan, serta produk terkait.
- Keranjang: pengelolaan jumlah produk dan kupon.
- Checkout bertahap dan konfirmasi pesanan.
- Halaman Tentang dan Kontak.
- Masuk, pendaftaran, dan area akun pelanggan.
- Area akun: ringkasan, pesanan, alamat, dan daftar favorit.
- Halaman 404.
- Keranjang mini yang dapat dibuka dari halaman mana pun.

Seluruh konten produk saat ini menggunakan data contoh di dalam berkas TypeScript; backend tidak diperlukan untuk menjalankan templat.

## Teknologi

- React 19 dan React DOM 19
- TypeScript 5.7
- Vite 6
- Tailwind CSS 4
- React Router 7
- Zustand 5
- Formik 2 dan Yup 1
- i18next dan react-i18next untuk pengelolaan teks Bahasa Indonesia
- vite-plugin-pwa untuk dukungan Progressive Web App

## Persyaratan

- Node.js 18 atau lebih baru
- npm

## Menjalankan aplikasi

```bash
npm ci
npm run dev
```

Server pengembangan berjalan di `http://localhost:5173`.

## Build produksi

```bash
npm run build
```

Perintah build menjalankan pemeriksaan tipe TypeScript lalu menghasilkan berkas produksi di direktori `dist/`. Gunakan `npm run preview` untuk memeriksa hasil build secara lokal.

## Struktur proyek

```
src/
  assets/styles/       Gaya dan token tema Tailwind
  components/
    cart/              Keranjang mini
    catalog/           Komponen katalog, filter, dan pengurutan
    layout/            Navbar, footer, dan tata letak toko
    product/           Komponen kartu produk
    ui/                Komponen antarmuka bersama
  data/                Data contoh produk, kategori, dan tipe
  i18n/                Konfigurasi Bahasa Indonesia
  lib/                 Fungsi format angka dan mata uang
  pages/               Halaman toko dan subhalaman akun
  stores/              State aplikasi menggunakan Zustand
  App.tsx              Konfigurasi rute
  main.tsx             Titik masuk aplikasi
```

## Bahasa aplikasi

Bahasa aplikasi ditetapkan menjadi Bahasa Indonesia (`id-ID`). Aplikasi tidak menyediakan pemilih bahasa, deteksi bahasa browser, maupun locale Portuguese, English, atau Spanish. Teks antarmuka dan konten contoh yang ditampilkan kepada pengguna dikelola dalam Bahasa Indonesia.

## Tema dan kustomisasi

Konfigurasi Tailwind CSS v4 berada di `src/assets/styles/app.css`. Mode gelap menggunakan class `.dark` dan preferensi tampilannya dikelola oleh store `ui`.

## Integrasi backend

Konten contoh berada di `src/data/`. Untuk menghubungkan backend, ganti sumber data tersebut dengan pemanggilan API dan pertahankan kontrak tipe pada `src/data/types.ts`. Store Zustand dapat diperluas secara bertahap sesuai kebutuhan integrasi.

## PWA

`vite-plugin-pwa` menghasilkan service worker dan manifest instalasi. Ikon aplikasi tersedia di direktori `public/`.

## Lisensi

MIT. Lihat [LICENSE](./LICENSE).
