import { motion } from 'framer-motion';
import { HiCheckCircle, HiArrowRight } from 'react-icons/hi';
import { TbWorldWww } from 'react-icons/tb';
import { MdOutlinePhoneIphone } from 'react-icons/md';
import { IoColorPaletteOutline } from 'react-icons/io5';
import { fadeUp, stagger, scaleIn, viewportOnce } from '../animations';

const SERVICES = [
  {
    id: 'web',
    icon: <TbWorldWww size={30} />,
    iconBg: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
    label: 'Website Development',
    tag: 'LAYANAN UTAMA',
    tagColor: 'rgba(139,92,246,0.2)',
    tagText: '#a78bfa',
    description: 'Company profile, landing page, hingga sistem web kompleks. Kami bangun dengan performa tinggi, SEO-ready, dan desain yang bikin klienmu WOW.',
    features: ['Company Profile', 'Landing Page', 'Web App & Dashboard', 'E-Commerce'],
    accentColor: '#a78bfa',
    span: 'lg:col-span-5',
    delay: 0,
  },
  {
    id: 'app',
    icon: <MdOutlinePhoneIphone size={30} />,
    iconBg: 'linear-gradient(135deg, #f472b6, #a78bfa)',
    label: 'Mobile App',
    tag: 'ANDROID & IOS',
    tagColor: 'rgba(244,114,182,0.2)',
    tagText: '#f472b6',
    description: 'Aplikasi mobile native & cross-platform yang smooth, intuitif, dan siap publish ke App Store maupun Google Play.',
    features: ['Flutter & React Native', 'UI/UX Modern', 'API Integration', 'App Store Ready'],
    accentColor: '#f472b6',
    span: 'lg:col-span-4',
    delay: 0.1,
  },
  {
    id: 'brand',
    icon: <IoColorPaletteOutline size={30} />,
    iconBg: 'linear-gradient(135deg, #34d399, #06b6d4)',
    label: 'Branding Partner',
    tag: 'IDENTITAS BRAND',
    tagColor: 'rgba(52,211,153,0.2)',
    tagText: '#34d399',
    description: 'Dari logo, brand guideline, hingga social media kit. Kami jadi partner branding jangka panjang bisnis kamu.',
    features: ['Logo & Visual Identity', 'Brand Guideline', 'Social Media Kit', 'Pitch Deck'],
    accentColor: '#34d399',
    span: 'lg:col-span-3',
    delay: 0.2,
  },
];

const Services = () => {
  return (
    <section id="layanan" className="py-28 relative overflow-hidden">
      <div className="blob w-[500px] h-[500px] top-0 right-[-150px] opacity-20"
        style={{ background: 'radial-gradient(circle, #06b6d4, transparent)' }} />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={stagger(0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.p variants={fadeUp} className="text-sm font-semibold tracking-widest mb-4" style={{ color: '#a78bfa' }}>
            LAYANAN KAMI
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Solusi Digital <span className="gradient-text">360°</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-white/50 text-lg md:text-xl max-w-2xl mx-auto">
            Satu agensi, semua kebutuhan digital bisnis kamu terpenuhi.
          </motion.p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {SERVICES.map((s) => (
            <motion.div
              key={s.id}
              className={`glass p-8 flex flex-col ${s.span} cursor-pointer`}
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              transition={{ delay: s.delay }}
              whileHover={{
                y: -8,
                boxShadow: `0 30px 80px rgba(${s.accentColor === '#a78bfa' ? '139,92,246' : s.accentColor === '#f472b6' ? '244,114,182' : '52,211,153'},0.2)`,
                borderColor: `${s.accentColor}55`,
                transition: { duration: 0.3 },
              }}
            >
              {/* Tag */}
              <motion.span
                className="text-xs font-bold tracking-widest px-3 py-1 rounded-full self-start mb-5"
                style={{ background: s.tagColor, color: s.tagText }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={viewportOnce}
              >
                {s.tag}
              </motion.span>

              {/* Icon */}
              <motion.div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-6"
                style={{ background: s.iconBg }}
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                transition={{ duration: 0.4 }}
              >
                {s.icon}
              </motion.div>

              <h3 className="text-2xl font-extrabold mb-3">{s.label}</h3>
              <p className="text-white/55 text-sm leading-relaxed mb-6">{s.description}</p>

              <ul className="space-y-2 mb-8 flex-grow">
                {s.features.map((f, i) => (
                  <motion.li
                    key={f}
                    className="flex items-center gap-2 text-sm text-white/70"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={viewportOnce}
                    transition={{ delay: s.delay + 0.15 + i * 0.06 }}
                  >
                    <HiCheckCircle size={16} style={{ color: s.accentColor, flexShrink: 0 }} />
                    {f}
                  </motion.li>
                ))}
              </ul>

              <motion.a
                href="#kontak"
                className="flex items-center gap-2 text-sm font-semibold mt-auto"
                style={{ color: s.accentColor }}
                whileHover={{ gap: '12px' }}
              >
                Pelajari Lebih Lanjut <HiArrowRight size={16} />
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
