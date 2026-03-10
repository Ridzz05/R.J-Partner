import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TbArrowUpRight, TbWorld, TbDeviceMobileCode, TbBrush } from 'react-icons/tb';
import { fadeUp, stagger, scaleIn, viewportOnce } from '../animations';

const CATEGORIES = ['Semua', 'Website', 'Mobile App', 'Branding'];

const PROJECTS = [
  {
    id: 1,
    title: 'TokoBaju.id',
    category: 'Website',
    type: 'E-Commerce',
    icon: <TbWorld size={16} />,
    color: '#a78bfa',
    bg: 'from-purple-900/40 to-indigo-900/40',
    accent: 'rgba(139,92,246,0.3)',
    tags: ['Next.js', 'Stripe', 'Tailwind'],
    desc: 'Platform e-commerce fashion lokal dengan fitur manajemen stok dan payment gateway.',
    span: 'md:col-span-2',
  },
  {
    id: 2,
    title: 'RentalKu App',
    category: 'Mobile App',
    type: 'Android & iOS',
    icon: <TbDeviceMobileCode size={16} />,
    color: '#f472b6',
    bg: 'from-pink-900/40 to-rose-900/40',
    accent: 'rgba(244,114,182,0.3)',
    tags: ['Flutter', 'Firebase', 'Google Maps'],
    desc: 'Aplikasi rental kendaraan berbasis lokasi dengan sistem booking real-time.',
    span: 'md:col-span-1',
  },
  {
    id: 3,
    title: 'CaféLuna Branding',
    category: 'Branding',
    type: 'Visual Identity',
    icon: <TbBrush size={16} />,
    color: '#34d399',
    bg: 'from-emerald-900/40 to-teal-900/40',
    accent: 'rgba(52,211,153,0.3)',
    tags: ['Logo', 'Brand Guide', 'Social Kit'],
    desc: 'Rebranding total untuk coffee shop lokal — dari logo hingga packaging.',
    span: 'md:col-span-1',
  },
  {
    id: 4,
    title: 'LegalHub Platform',
    category: 'Website',
    type: 'Web App',
    icon: <TbWorld size={16} />,
    color: '#22d3ee',
    bg: 'from-cyan-900/40 to-blue-900/40',
    accent: 'rgba(34,211,238,0.3)',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    desc: 'Platform konsultasi hukum online dengan sistem booking & manajemen dokumen.',
    span: 'md:col-span-1',
  },
  {
    id: 5,
    title: 'FitTrack Mobile',
    category: 'Mobile App',
    type: 'Android & iOS',
    icon: <TbDeviceMobileCode size={16} />,
    color: '#fbbf24',
    bg: 'from-amber-900/40 to-orange-900/40',
    accent: 'rgba(251,191,36,0.3)',
    tags: ['React Native', 'HealthKit', 'Charts'],
    desc: 'Aplikasi fitness tracker dengan analisis kesehatan personal berbasis AI.',
    span: 'md:col-span-1',
  },
  {
    id: 6,
    title: 'Arsitek Studio',
    category: 'Branding',
    type: 'Visual Identity',
    icon: <TbBrush size={16} />,
    color: '#a78bfa',
    bg: 'from-violet-900/40 to-purple-900/40',
    accent: 'rgba(139,92,246,0.3)',
    tags: ['Logo', 'Pitch Deck', 'Stationery'],
    desc: 'Identitas brand premium untuk firma arsitektur bergaya minimalis modern.',
    span: 'md:col-span-2',
  },
];

const Portfolio = () => {
  const [active, setActive] = useState('Semua');

  const filtered = active === 'Semua' ? PROJECTS : PROJECTS.filter(p => p.category === active);

  return (
    <section id="portofolio" className="py-28 relative overflow-hidden">
      <div className="blob w-[500px] h-[500px] top-0 left-[-200px] opacity-20"
        style={{ background: 'radial-gradient(circle, #7c3aed, transparent)' }} />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Header */}
        <motion.div className="text-center mb-12"
          variants={stagger(0.15)} initial="hidden" whileInView="visible" viewport={viewportOnce}>
          <motion.p variants={fadeUp} className="text-sm font-semibold tracking-widest mb-4" style={{ color: '#f472b6' }}>
            PORTOFOLIO
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Karya <span className="gradient-text-pink">Terbaik</span> Kami
          </motion.h2>
          <motion.p variants={fadeUp} className="text-white/50 text-lg max-w-2xl mx-auto">
            Setiap proyek adalah cerita sukses klien yang kami banggakan.
          </motion.p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce}
        >
          {CATEGORIES.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActive(cat)}
              className="px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-200"
              style={{
                background: active === cat ? 'linear-gradient(135deg, #7c3aed, #06b6d4)' : 'rgba(255,255,255,0.07)',
                border: `1px solid ${active === cat ? 'transparent' : 'rgba(255,255,255,0.1)'}`,
                color: active === cat ? '#fff' : 'rgba(255,255,255,0.6)',
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.div
                key={p.id}
                layout
                className={`glass group cursor-pointer overflow-hidden rounded-2xl ${p.span}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6, boxShadow: `0 30px 80px ${p.accent}` }}
              >
                {/* Card header gradient */}
                <div className={`h-40 bg-gradient-to-br ${p.bg} relative overflow-hidden flex items-end p-5`}
                  style={{ borderBottom: `1px solid rgba(255,255,255,0.07)` }}>
                  {/* Glow blob */}
                  <div className="absolute inset-0 opacity-20"
                    style={{ background: `radial-gradient(circle at 30% 50%, ${p.color}, transparent 70%)` }} />
                  {/* Top right arrow */}
                  <motion.div
                    className="absolute top-4 right-4 w-9 h-9 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ background: p.color }}
                  >
                    <TbArrowUpRight size={18} color="#000" strokeWidth={2.5} />
                  </motion.div>
                  {/* Type badge */}
                  <span className="text-xs font-bold px-3 py-1 rounded-full relative z-10"
                    style={{ background: 'rgba(255,255,255,0.1)', color: p.color, border: `1px solid ${p.color}44` }}>
                    {p.icon} {p.type}
                  </span>
                </div>

                {/* Card body */}
                <div className="p-6">
                  <h3 className="text-xl font-extrabold mb-2">{p.title}</h3>
                  <p className="text-white/50 text-sm mb-4 leading-relaxed">{p.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map(t => (
                      <span key={t} className="text-xs px-2.5 py-1 rounded-lg font-medium"
                        style={{ background: 'rgba(255,255,255,0.06)', color: p.color }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
