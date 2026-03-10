import { motion } from 'framer-motion';
import { HiStar } from 'react-icons/hi';
import { fadeUp, stagger, scaleIn, viewportOnce } from '../animations';

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Budi Santoso',
    role: 'CEO, TokoBaju.id',
    avatar: 'BS',
    avatarBg: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
    stars: 5,
    text: 'R.J Partner bener-bener ngerti kebutuhan bisnis kami. Website e-commerce kami sekarang jauh lebih cepat dan konversinya naik 3x lipat sejak redesign. Tim-nya responsif dan profesional banget!',
    accentColor: '#a78bfa',
    span: 'lg:col-span-4',
    featured: true,
  },
  {
    id: 2,
    name: 'Sari Wulandari',
    role: 'Founder, CaféLuna',
    avatar: 'SW',
    avatarBg: 'linear-gradient(135deg, #34d399, #06b6d4)',
    stars: 5,
    text: 'Branding baru CaféLuna bikin pelanggan langsung notice! Identitas visual kami sekarang jauh lebih kuat dan konsisten di semua platform.',
    accentColor: '#34d399',
    span: 'lg:col-span-4',
  },
  {
    id: 3,
    name: 'Ahmad Fauzi',
    role: 'CTO, RentalKu',
    avatar: 'AF',
    avatarBg: 'linear-gradient(135deg, #f472b6, #a78bfa)',
    stars: 5,
    text: 'Aplikasi Flutter kami selesai lebih cepat dari jadwal, performa smooth, dan sudah live di Play Store & App Store. Top banget!',
    accentColor: '#f472b6',
    span: 'lg:col-span-4',
  },
  {
    id: 4,
    name: 'Diana Kusuma',
    role: 'Marketing Director, LegalHub',
    avatar: 'DK',
    avatarBg: 'linear-gradient(135deg, #22d3ee, #7c3aed)',
    stars: 5,
    text: 'Dashboard internal kami jadi jauh lebih efisien. Tim paralegal kini bisa handle 2x lebih banyak kasus dengan sistem manajemen dokumen yang baru.',
    accentColor: '#22d3ee',
    span: 'lg:col-span-6',
  },
  {
    id: 5,
    name: 'Reza Firmansyah',
    role: 'Product Manager, FitTrack',
    avatar: 'RF',
    avatarBg: 'linear-gradient(135deg, #fbbf24, #f472b6)',
    stars: 5,
    text: 'React Native app kami ratingnya 4.8 di App Store. User experience-nya sangat diperhatikan oleh tim R.J Partner dari awal sampai launch.',
    accentColor: '#fbbf24',
    span: 'lg:col-span-6',
  },
];

const Stars = ({ count }) => (
  <div className="flex gap-1">
    {Array.from({ length: count }).map((_, i) => (
      <HiStar key={i} size={16} className="fill-current" style={{ color: '#fbbf24' }} />
    ))}
  </div>
);

const Testimonials = () => {
  return (
    <section id="testimonial" className="py-28 relative overflow-hidden">
      <div className="blob w-[600px] h-[600px] top-1/2 right-[-200px] opacity-20"
        style={{ background: 'radial-gradient(circle, #f472b6, transparent)' }} />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Header */}
        <motion.div className="text-center mb-16"
          variants={stagger(0.15)} initial="hidden" whileInView="visible" viewport={viewportOnce}>
          <motion.p variants={fadeUp} className="text-sm font-semibold tracking-widest mb-4" style={{ color: '#fbbf24' }}>
            TESTIMONI KLIEN
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Mereka <span className="gradient-text">Sudah Merasakan</span> Perbedaannya
          </motion.h2>
          <motion.p variants={fadeUp} className="text-white/50 text-lg max-w-2xl mx-auto">
            Kepuasan klien adalah standar kami, bukan target.
          </motion.p>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          className="glass rounded-2xl p-6 mb-12 grid grid-cols-3 gap-4 text-center"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce}
        >
          {[
            { label: 'Rating Rata-rata', val: '5.0 ⭐' },
            { label: 'Proyek Selesai', val: '150+' },
            { label: 'Klien Puas', val: '98%' },
          ].map(s => (
            <div key={s.label}>
              <p className="text-2xl md:text-3xl font-extrabold gradient-text">{s.val}</p>
              <p className="text-white/40 text-xs mt-1">{s.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Bento testimonial grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.id}
              className={`glass p-7 flex flex-col gap-5 ${t.span} ${t.featured ? 'border' : ''}`}
              style={t.featured ? { borderColor: `${t.accentColor}44` } : {}}
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -5, transition: { duration: 0.25 } }}
            >
              {/* Stars */}
              <Stars count={t.stars} />

              {/* Quote */}
              <p className="text-white/75 text-sm leading-relaxed flex-grow">"{t.text}"</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                  style={{ background: t.avatarBg }}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-white/40 text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
