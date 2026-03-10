import { motion } from 'framer-motion';
import { useState } from 'react';
import { HiChevronDown } from 'react-icons/hi';
import { fadeUp, stagger, viewportOnce } from '../animations';

// Scrolling client logos (using letter-based avatars since no real logos)
const CLIENTS = [
  { name: 'TokoBaju.id', abbr: 'TB', color: '#a78bfa' },
  { name: 'CaféLuna', abbr: 'CL', color: '#34d399' },
  { name: 'RentalKu', abbr: 'RK', color: '#f472b6' },
  { name: 'LegalHub', abbr: 'LH', color: '#22d3ee' },
  { name: 'FitTrack', abbr: 'FT', color: '#fbbf24' },
  { name: 'Arsitek Studio', abbr: 'AS', color: '#a78bfa' },
  { name: 'NutriSmart', abbr: 'NS', color: '#34d399' },
  { name: 'EduPintar', abbr: 'EP', color: '#f472b6' },
];

const FAQ_ITEMS = [
  {
    q: 'Berapa lama proses pengerjaan website?',
    a: 'Tergantung kompleksitas. Landing page sederhana: 3–5 hari kerja. Company profile / multi-page: 1–2 minggu. Web app / e-commerce: 3–6 minggu. Kami selalu sepakati timeline di awal.',
  },
  {
    q: 'Apakah ada garansi revisi?',
    a: 'Ya! Semua paket sudah termasuk revisi selama masa pengerjaan. Paket Professional mendapatkan revisi unlimited selama proses development.',
  },
  {
    q: 'Teknologi apa yang kalian gunakan?',
    a: 'Untuk website: React, Next.js, atau pure HTML/CSS/JS tergantung kebutuhan. Mobile app: Flutter dan React Native. Backend: Node.js, Laravel, atau Python. Database: PostgreSQL, MySQL, MongoDB.',
  },
  {
    q: 'Bagaimana sistem pembayaran?',
    a: 'Sistem DP 50% di awal sebagai tanda jadi proyek, dan 50% sisanya setelah proyek selesai dan disetujui klien. Untuk proyek besar, bisa dicicil per milestone.',
  },
  {
    q: 'Apakah support setelah launch tersedia?',
    a: 'Ya! Setiap paket sudah termasuk support pasca-launch (1 bulan untuk Starter, 3 bulan untuk Professional). Untuk Entreprise, support maintenance bisa ongoing sesuai kontrak.',
  },
  {
    q: 'Apakah bisa meeting tatap muka?',
    a: 'Kami melayani meeting online (Zoom/Google Meet) dan bisa tatap muka untuk klien di area Jabodetabek. Untuk kota lain, meeting online adalah opsi utama.',
  },
];

const FAQItem = ({ item, index }) => {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      className="glass rounded-2xl overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ delay: index * 0.07 }}
    >
      <button
        className="w-full flex justify-between items-center p-6 text-left"
        onClick={() => setOpen(!open)}
      >
        <span className="font-semibold text-sm md:text-base pr-4">{item.q}</span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <HiChevronDown size={20} className="text-white/50 flex-shrink-0" />
        </motion.div>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden"
      >
        <p className="px-6 pb-6 text-white/55 text-sm leading-relaxed">{item.a}</p>
      </motion.div>
    </motion.div>
  );
};

const Clients = () => {
  const doubled = [...CLIENTS, ...CLIENTS];

  return (
    <>
      {/* Client logos marquee */}
      <section className="py-16 relative overflow-hidden" style={{ borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 mb-10">
          <motion.p
            className="text-center text-sm font-semibold tracking-widest text-white/30 mb-8"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={viewportOnce}
          >
            DIPERCAYA OLEH 50+ KLIEN
          </motion.p>
        </div>

        {/* Marquee container */}
        <div className="relative overflow-hidden">
          {/* Left/right fade */}
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10" style={{ background: 'linear-gradient(to right, #03020d, transparent)' }} />
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10" style={{ background: 'linear-gradient(to left, #03020d, transparent)' }} />

          <div className="animate-marquee whitespace-nowrap">
            {doubled.map((c, i) => (
              <span key={i} className="inline-flex items-center gap-3 mx-6">
                <span
                  className="w-10 h-10 rounded-xl inline-flex items-center justify-center text-sm font-bold text-white"
                  style={{ background: `${c.color}22`, border: `1px solid ${c.color}44` }}
                >
                  <span style={{ color: c.color }}>{c.abbr}</span>
                </span>
                <span className="text-white/40 font-medium text-sm">{c.name}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-28 relative overflow-hidden">
        <div className="blob w-[500px] h-[500px] top-0 left-[-150px] opacity-15"
          style={{ background: 'radial-gradient(circle, #22d3ee, transparent)' }} />

        <div className="max-w-4xl mx-auto px-5 sm:px-8 relative z-10">
          <motion.div className="text-center mb-16"
            variants={stagger(0.15)} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <motion.p variants={fadeUp} className="text-sm font-semibold tracking-widest mb-4" style={{ color: '#22d3ee' }}>
              FAQ
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
              Ada <span className="gradient-text">Pertanyaan?</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/50 text-lg">
              Jawaban dari pertanyaan yang paling sering ditanyakan klien kami.
            </motion.p>
          </motion.div>

          <div className="space-y-3">
            {FAQ_ITEMS.map((item, i) => (
              <FAQItem key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Clients;
