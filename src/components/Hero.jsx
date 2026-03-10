import { motion } from 'framer-motion';
import { HiArrowRight, HiStar, HiUsers } from 'react-icons/hi';
import { TbWorldWww } from 'react-icons/tb';
import { fadeUp, stagger } from '../animations';

const STATS = [
  { value: '20+', label: 'Proyek Selesai' },
  { value: '99%', label: 'Klien Puas' },
  { value: '5+', label: 'Tahun Pengalaman' },
];

const TECH_TAGS = ['React', 'Next.js', 'Flutter', 'Node.js', 'Figma'];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 overflow-hidden">
      {/* Animated background blobs */}
      <motion.div
        className="blob w-[600px] h-[600px] top-[-150px] left-[-150px]"
        style={{ background: 'radial-gradient(circle, #7c3aed, transparent)' }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.35, 0.5, 0.35] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="blob w-[500px] h-[500px] top-[5%] right-[-100px]"
        style={{ background: 'radial-gradient(circle, #06b6d4, transparent)' }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.45, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />
      <motion.div
        className="blob w-[350px] h-[350px] bottom-[5%] left-[30%]"
        style={{ background: 'radial-gradient(circle, #f472b6, transparent)', opacity: 0.2 }}
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-8"
          style={{ background: 'rgba(139,92,246,0.15)', border: '1px solid rgba(139,92,246,0.3)', color: '#a78bfa' }}
        >
          <HiStar className="fill-current" size={14} />
          Agensi Digital Terpercaya #1 di Indonesia
        </motion.div>

        {/* Headline — word by word stagger */}
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.05] mb-8 max-w-5xl"
          variants={stagger(0.08, 0.3)}
          initial="hidden"
          animate="visible"
        >
          {['Wujudkan', 'Bisnis', 'Digital'].map((word) => (
            <motion.span key={word} variants={fadeUp} className="inline-block mr-4">{word}</motion.span>
          ))}
          <motion.span variants={fadeUp} className="gradient-text inline-block mr-4">Impian Kamu</motion.span>
          {['Bersama', 'Kami'].map((word) => (
            <motion.span key={word} variants={fadeUp} className="inline-block mr-4">{word}</motion.span>
          ))}
        </motion.h1>

        <motion.p
          className="text-white/60 text-xl md:text-2xl mb-12 max-w-2xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          Website, Mobile App, hingga Branding — kami hadirkan solusi digital end-to-end yang modern, cepat, dan siap scale bersama bisnismu.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.5 }}
        >
          <motion.a
            href="#kontak"
            className="gradient-btn text-white font-bold px-8 py-4 rounded-2xl text-lg flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05, boxShadow: '0 20px 60px rgba(124,58,237,0.5)' }}
            whileTap={{ scale: 0.97 }}
          >
            Mulai Proyek Sekarang <HiArrowRight size={20} />
          </motion.a>
          <motion.a
            href="#layanan"
            className="px-8 py-4 rounded-2xl text-lg font-semibold text-white/80 hover:text-white flex items-center justify-center gap-2 transition-all"
            style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)' }}
            whileHover={{ background: 'rgba(255,255,255,0.13)', scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Lihat Portofolio
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="flex flex-wrap gap-10"
          variants={stagger(0.12, 1.3)}
          initial="hidden"
          animate="visible"
        >
          {STATS.map((s) => (
            <motion.div key={s.label} variants={fadeUp}>
              <p className="text-4xl font-extrabold gradient-text">{s.value}</p>
              <p className="text-white/50 text-sm mt-1">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating bento preview cards */}
        <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[400px] space-y-3">
          {/* Card 1 */}
          <motion.div
            className="glass glass-hover p-5"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.03, y: -4 }}
            animate2={{ y: [0, -14, 0] }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg,#7c3aed,#06b6d4)' }}>
                <TbWorldWww size={18} color="white" />
              </div>
              <span className="font-semibold text-sm">Website Development</span>
            </div>
            <div className="h-2 bg-white/10 rounded-full mb-2 overflow-hidden">
              <motion.div
                className="h-2 rounded-full"
                style={{ background: 'linear-gradient(90deg,#7c3aed,#06b6d4)' }}
                initial={{ width: 0 }}
                animate={{ width: '82%' }}
                transition={{ delay: 1.2, duration: 1, ease: 'easeOut' }}
              />
            </div>
            <p className="text-white/40 text-xs">82% proyek selesai tepat waktu</p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="glass glass-hover p-5"
            style={{ marginLeft: '2rem' }}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.0, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.03, y: -4 }}
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg,#f472b6,#a78bfa)' }}>
                <HiUsers size={18} color="white" />
              </div>
              <span className="font-semibold text-sm">Klien Aktif</span>
            </div>
            <motion.p
              className="text-3xl font-extrabold gradient-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
            >
              47
            </motion.p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="glass glass-hover p-5"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.03, y: -4 }}
          >
            <p className="text-white/40 text-xs mb-2">Teknologi yang kami pakai</p>
            <div className="flex flex-wrap gap-2">
              {TECH_TAGS.map((t, i) => (
                <motion.span
                  key={t}
                  className="text-xs px-2.5 py-1 rounded-lg font-medium text-purple-300"
                  style={{ background: 'rgba(139,92,246,0.2)' }}
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.4 + i * 0.07 }}
                  whileHover={{ scale: 1.1, background: 'rgba(139,92,246,0.4)' }}
                >
                  {t}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
