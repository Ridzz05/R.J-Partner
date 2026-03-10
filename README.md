# ⚡ R.J Partner — Digital Agency Landing Page

Landing page modern untuk **R.J Partner**, agensi digital yang melayani pembuatan **Website**, **Mobile App**, dan **Branding** bisnis.

> Dibangun dengan konsep **Dark Glassmorphism + Bento Grid Layout**, menghadirkan tampilan premium, interaktif, dan eye-catching.

---

## 🚀 Tech Stack

| Teknologi | Versi | Fungsi |
|---|---|---|
| **React** | 18.3 | UI Library |
| **Vite** | 5.4 | Build Tool & Dev Server |
| **Tailwind CSS** | 4.2 | Utility-first CSS Framework |
| **Framer Motion** | 12.x | Animasi & Transisi |
| **React Icons** | 5.6 | Icon Library (Heroicons, Tabler, Phosphor, dll) |

---

## 🎨 Desain & Fitur

### Design System
- 🌑 **Dark Glassmorphism** — background gelap `#03020d` dengan kartu transparan blur
- 🟣 **Gradient Accent** — ungu (`#7c3aed`) + cyan (`#06b6d4`) + pink (`#f472b6`)
- ✨ **Animasi Modern** — scroll-triggered, stagger, hover lift, blob pulsing (Framer Motion)
- 🔤 **Typography** — Plus Jakarta Sans (Google Fonts)

### Sections (9 Total)
| # | Section | Deskripsi |
|---|---|---|
| 1 | **Navbar** | Glassmorphism, scroll-aware, mobile responsive |
| 2 | **Hero** | Headline stagger animation, floating preview cards, stats |
| 3 | **Client Logos** | Marquee infinite scroll — "Dipercaya 50+ klien" |
| 4 | **Services** | Bento Grid 3 kartu: Website Dev, Mobile App, Branding |
| 5 | **Portfolio** | Filterable project grid (Semua / Website / Mobile / Branding) |
| 6 | **Features** | 6 keunggulan + process timeline (Discovery → Launch) |
| 7 | **Testimonials** | Bento grid review klien + stats bar |
| 8 | **Pricing** | 3 tier: Starter (Rp3jt), Professional (Rp8jt), Enterprise (Custom) |
| 9 | **FAQ** | Accordion animated — 6 pertanyaan umum |
| 10 | **Footer** | CTA besar + social links + navigasi |

---

## 📁 Struktur Project

```
src/
├── animations.js           # Shared Framer Motion variants
├── index.css               # Design system (glass, gradient, blob, animations)
├── App.jsx                 # Root component
└── components/
    ├── Navbar.jsx           # Fixed glassmorphism navbar
    ├── Hero.jsx             # Hero section + floating cards
    ├── Clients.jsx          # Client marquee + FAQ accordion
    ├── Services.jsx         # Bento grid layanan
    ├── Portfolio.jsx        # Filterable project showcase
    ├── Features.jsx         # Keunggulan + process timeline
    ├── Testimonials.jsx     # Review klien bento grid
    ├── Pricing.jsx          # 3-tier pricing cards
    └── Footer.jsx           # CTA + social + navigasi
```

---

## ⚙️ Getting Started

```bash
# Clone repo
git clone https://github.com/Ridzz05/R.J-Partner.git
cd R.J-Partner

# Install dependencies
npm install

# Jalankan dev server
npm run dev

# Build untuk production
npm run build
```

---

## 📱 Responsivitas

Halaman sepenuhnya responsive di semua ukuran layar:
- 📱 Mobile (< 640px)
- 📟 Tablet (640px – 1024px)
- 🖥️ Desktop (> 1024px)

---

## 📞 Kontak

- **WhatsApp**: [wa.me/6282281862751](https://wa.me/6282281862751)
- **GitHub**: [github.com/Ridzz05](https://github.com/Ridzz05)

---

<p align="center">Dibuat dengan ❤️ di Indonesia</p>
