import { motion } from 'framer-motion';
import { HiCheckCircle, HiArrowRight, HiLightningBolt } from 'react-icons/hi';
import { IoLogoWhatsapp } from 'react-icons/io5';
import { fadeUp, stagger, viewportOnce } from '../animations';

const PLANS = [
  {
    id: 'starter',
    name: 'Starter',
    tagline: 'Cocok untuk bisnis yang baru mulai go digital',
    price: '3',
    unit: 'jt',
    suffix: '/ proyek',
    color: '#22d3ee',
    gradient: 'linear-gradient(135deg, #164e63, #0c4a6e)',
    border: 'rgba(34,211,238,0.25)',
    features: [
      'Landing Page 1 halaman',
      'Desain responsif (mobile-friendly)',
      'Form kontak & integrasi WhatsApp',
      'SEO dasar',
      'Gratis domain .com 1 tahun',
      'Support 1 bulan',
    ],
    cta: 'Pesan Sekarang',
    featured: false,
  },
  {
    id: 'pro',
    name: 'Professional',
    tagline: 'Solusi terlengkap untuk bisnis yang serius',
    price: '8',
    unit: 'jt',
    suffix: '/ proyek',
    color: '#a78bfa',
    gradient: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
    border: 'rgba(139,92,246,0.5)',
    features: [
      'Multi-halaman (hingga 10 halaman)',
      'Admin dashboard & CMS',
      'Integrasi payment gateway',
      'SEO lanjutan + Google Analytics',
      'Gratis domain & hosting 1 tahun',
      'Support 3 bulan + revisi unlimited',
      'Desain custom 100% original',
    ],
    cta: 'Mulai Sekarang',
    featured: true,
    badge: 'PALING POPULER',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    tagline: 'Sistem kompleks sesuai kebutuhan unikmu',
    price: 'Custom',
    unit: '',
    suffix: '',
    color: '#34d399',
    gradient: 'linear-gradient(135deg, #064e3b, #065f46)',
    border: 'rgba(52,211,153,0.25)',
    features: [
      'Web App / Mobile App skala enterprise',
      'Arsitektur sistem custom',
      'Integrasi API & third-party services',
      'Tim dedikasi (PM + Dev + Designer)',
      'SLA & uptime guarantee',
      'Support & maintenance ongoing',
      'Training & handover dokumentasi',
    ],
    cta: 'Diskusi Kebutuhan',
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.id}
              className={`glass rounded-3xl overflow-hidden flex flex-col relative ${plan.featured ? 'scale-[1.03]' : ''}`}
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

              {/* Card header */}
              <div className="p-8 pb-6" style={{ background: plan.gradient, opacity: plan.featured ? 1 : 0.7 }}>
                <p className="text-sm font-bold mb-1 opacity-80" style={{ color: plan.color }}>{plan.name.toUpperCase()}</p>
                <div className="flex items-end gap-1 mb-2">
                  {plan.price === 'Custom' ? (
                    <span className="text-4xl font-extrabold text-white">Custom</span>
                  ) : (
                    <>
                      <span className="text-white/60 text-lg font-semibold mb-1">Rp</span>
                      <span className="text-5xl font-extrabold text-white">{plan.price}</span>
                      <span className="text-white/60 font-semibold mb-1">{plan.unit}</span>
                    </>
                  )}
                </div>
                <p className="text-white/60 text-xs">{plan.suffix}</p>
                <p className="text-white/55 text-sm mt-3 leading-relaxed">{plan.tagline}</p>
              </div>

              {/* Features */}
              <div className="p-8 pt-6 flex flex-col flex-grow">
                <ul className="space-y-3 flex-grow mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-white/70">
                      <HiCheckCircle size={17} className="flex-shrink-0 mt-0.5" style={{ color: plan.color }} />
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
          * Semua harga mulai dari, harga final bergantung pada kompleksitas proyek. Konsultasi gratis!
        </motion.p>
      </div>
    </section>
  );
};

export default Pricing;
