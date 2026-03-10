import { motion } from 'framer-motion';
import { HiCheckCircle, HiLightningBolt } from 'react-icons/hi';
import { IoLogoWhatsapp } from 'react-icons/io5';
import { fadeUp, stagger, viewportOnce } from '../animations';

const PLANS = [
  {
    id: 'basic',
    name: 'Basic',
    tagline: 'Cocok untuk bisnis yang baru mulai go digital',
    priceRange: 'Rp 1.500.000 – Rp 3.000.000',
    color: '#22d3ee',
    gradient: 'linear-gradient(135deg, #164e63, #0c4a6e)',
    border: 'rgba(34,211,238,0.25)',
    features: [
      'Desain Web Responsif & Profesional',
      'Optimasi SEO On-Page Dasar',
      'Halaman Inti (Home, About, Services, Contact)',
      'Integrasi Google Maps & Form Kontak',
      'Domain & Hosting 1 Tahun Pertama',
      'Pelatihan Pengelolaan Konten (CMS)',
    ],
    cta: 'Pilih Basic',
    featured: false,
  },
  {
    id: 'advanced',
    name: 'Advanced',
    tagline: 'Solusi terlengkap untuk bisnis yang serius berkembang',
    priceRange: 'Rp 4.000.000 – Rp 8.000.000',
    color: '#a78bfa',
    gradient: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
    border: 'rgba(139,92,246,0.5)',
    features: [
      'Semua Fitur BASIC',
      'Desain Kustom Eksklusif (Tanpa Template)',
      'Optimasi SEO Lengkap & Strategi Konten',
      'Sistem CRM / Pemesanan Sederhana',
      'Layanan Input Konten Awal (1 Bulan)',
      'Keamanan Lanjut & SSL Premium',
      'Analitik & Pelaporan Google (Google Analytics)',
    ],
    cta: 'Pilih Advanced',
    featured: true,
    badge: 'PALING POPULER',
  },
  {
    id: 'premium',
    name: 'Premium',
    tagline: 'Sistem lengkap untuk skala enterprise & bisnis besar',
    priceRange: 'Rp 10.000.000 – Rp 15.000.000',
    color: '#34d399',
    gradient: 'linear-gradient(135deg, #064e3b, #065f46)',
    border: 'rgba(52,211,153,0.25)',
    features: [
      'Semua Fitur ADVANCED',
      'Pengembangan Backend & Frontend Khusus',
      'Integrasi Gateway Pembayaran & Sistem Eksternal',
      'Optimasi Kinerja Situs Tingkat Lanjut',
      'Manajemen Konten Penuh (3 Bulan)',
      'Konsultasi Branding Terintegrasi',
      'Dedicated Project Manager & Dukungan Prioritas',
    ],
    cta: 'Pilih Premium',
    featured: false,
  },
];

const Pricing = () => {
  return (
    <section id="harga" className="py-28 relative overflow-hidden">
      <div className="blob w-[500px] h-[500px] bottom-0 right-[-100px] opacity-20"
        style={{ background: 'radial-gradient(circle, #06b6d4, transparent)' }} />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Header */}
        <motion.div className="text-center mb-16"
          variants={stagger(0.15)} initial="hidden" whileInView="visible" viewport={viewportOnce}>
          <motion.p variants={fadeUp} className="text-sm font-semibold tracking-widest mb-4" style={{ color: '#34d399' }}>
            PAKET HARGA
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Transparan, <span className="gradient-text">No Hidden Cost</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-white/50 text-lg max-w-2xl mx-auto">
            Pilih paket yang sesuai kebutuhan, atau konsultasi gratis untuk penawaran custom.
          </motion.p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6 items-stretch">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.id}
              className={`glass rounded-3xl overflow-hidden flex flex-col relative ${plan.featured ? 'md:scale-[1.03] sm:col-span-2 md:col-span-1' : ''}`}
              style={{ border: `1px solid ${plan.border}` }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: plan.featured ? -4 : -6, transition: { duration: 0.25 } }}
            >
              {/* Featured badge */}
              {plan.badge && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                  <span className="text-xs font-bold px-4 py-1.5 rounded-full text-white flex items-center gap-1"
                    style={{ background: 'linear-gradient(135deg, #7c3aed, #06b6d4)' }}>
                    <HiLightningBolt size={12} className="fill-current" /> {plan.badge}
                  </span>
                </div>
              )}

              <div className="p-5 sm:p-8 pb-5 sm:pb-6" style={{ background: plan.gradient, opacity: plan.featured ? 1 : 0.7 }}>
                <p className="text-xs sm:text-sm font-bold mb-2 sm:mb-3 tracking-wider" style={{ color: plan.color }}>{plan.name.toUpperCase()}</p>
                <p className="text-lg sm:text-2xl md:text-3xl font-extrabold text-white leading-tight mb-1 sm:mb-2 break-words">
                  {plan.priceRange}
                </p>
                <p className="text-white/55 text-xs sm:text-sm mt-2 sm:mt-3 leading-relaxed">{plan.tagline}</p>
              </div>

              {/* Features */}
              <div className="p-5 sm:p-8 pt-5 sm:pt-6 flex flex-col grow">
                <ul className="space-y-3 grow mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-white/70">
                      <HiCheckCircle size={17} className="shrink-0 mt-0.5" style={{ color: plan.color }} />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <motion.a
                  href="https://wa.me/6282281862751"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3.5 rounded-2xl font-bold text-sm w-full"
                  style={
                    plan.featured
                      ? { background: 'linear-gradient(135deg, #7c3aed, #06b6d4)', color: '#fff' }
                      : { background: 'rgba(255,255,255,0.07)', color: plan.color, border: `1px solid ${plan.border}` }
                  }
                  whileHover={{ scale: 1.04, ...(plan.featured ? { boxShadow: '0 16px 48px rgba(124,58,237,0.5)' } : {}) }}
                  whileTap={{ scale: 0.97 }}
                >
                  <IoLogoWhatsapp size={18} /> {plan.cta}
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          className="text-center text-white/35 text-sm mt-10"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={viewportOnce} transition={{ delay: 0.5 }}
        >
          * Harga final bergantung pada kompleksitas dan scope proyek. Konsultasi gratis!
        </motion.p>
      </div>
    </section>
  );
};

export default Pricing;
