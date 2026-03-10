import { motion } from 'framer-motion';
import { PiInstagramLogoFill, PiTwitterLogoFill, PiLinkedinLogoFill, PiGithubLogoFill } from 'react-icons/pi';
import { MdOutlineEmail } from 'react-icons/md';
import { IoLogoWhatsapp } from 'react-icons/io5';
import { TbBolt } from 'react-icons/tb';
import { fadeUp, stagger, viewportOnce } from '../animations';

const SOCIAL = [
  { icon: <PiInstagramLogoFill size={20} />, href: '#', label: 'Instagram', hoverColor: '#e1306c' },
  { icon: <PiTwitterLogoFill size={20} />, href: '#', label: 'Twitter', hoverColor: '#1da1f2' },
  { icon: <PiLinkedinLogoFill size={20} />, href: '#', label: 'LinkedIn', hoverColor: '#0077b5' },
  { icon: <PiGithubLogoFill size={20} />, href: '#', label: 'GitHub', hoverColor: '#fff' },
];

const FOOTER_LINKS = {
  Layanan: ['Website Development', 'Mobile App', 'Branding Partner', 'UI/UX Design'],
  Perusahaan: ['Tentang Kami', 'Portofolio', 'Blog', 'Karir'],
  Support: ['Kontak', 'FAQ', 'Syarat & Ketentuan', 'Kebijakan Privasi'],
};

const Footer = () => {
  return (
    <footer id="kontak" className="relative overflow-hidden" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
      {/* Animated blobs */}
      <motion.div
        className="blob w-[500px] h-[500px] top-[-100px] right-[-100px]"
        style={{ background: 'radial-gradient(circle, #7c3aed, transparent)', opacity: 0.2 }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="blob w-[400px] h-[400px] bottom-0 left-[-100px]"
        style={{ background: 'radial-gradient(circle, #06b6d4, transparent)', opacity: 0.15 }}
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-28 relative z-10">
        {/* Big CTA */}
        <motion.div
          className="glass rounded-3xl p-12 md:p-16 text-center mb-24 relative overflow-hidden"
          style={{ border: '1px solid rgba(139,92,246,0.25)' }}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute inset-0 rounded-3xl opacity-5"
            style={{ background: 'linear-gradient(135deg, #7c3aed, #06b6d4)' }} />

          <motion.p
            className="text-sm font-semibold tracking-widest mb-4 relative z-10"
            style={{ color: '#a78bfa' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewportOnce}
            transition={{ delay: 0.2 }}
          >
            READY TO GO DIGITAL?
          </motion.p>

          <motion.h2
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8 relative z-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            Yuk,{' '}
            <span className="gradient-text">Wujudkan Ide</span>
            <br />Bersama R.J Partner
          </motion.h2>

          <motion.p
            className="text-white/55 text-lg md:text-xl mb-12 max-w-2xl mx-auto relative z-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewportOnce}
            transition={{ delay: 0.5 }}
          >
            Konsultasi gratis, tanpa biaya tersembunyi. Ceritakan visumu dan kami akan wujudkan bersama.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ delay: 0.6 }}
          >
            <motion.a
              href="mailto:hi@rjpartner.id"
              className="gradient-btn text-white font-bold px-8 py-4 rounded-2xl text-lg flex items-center justify-center gap-2"
              whileHover={{ scale: 1.06, boxShadow: '0 20px 60px rgba(124,58,237,0.55)' }}
              whileTap={{ scale: 0.97 }}
            >
              <MdOutlineEmail size={22} /> Kirim Email
            </motion.a>
            <motion.a
              href="https://wa.me/6282281862751"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-lg font-semibold text-white/80 hover:text-white"
              style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)' }}
              whileHover={{ background: 'rgba(255,255,255,0.13)', scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <IoLogoWhatsapp size={22} className="text-green-400" /> Chat WhatsApp
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Footer grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16"
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {/* Brand */}
          <motion.div variants={fadeUp}>
            <a href="#" className="flex items-center gap-2 mb-5">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #7c3aed, #06b6d4)' }}>
                <TbBolt size={20} color="white" strokeWidth={2.5} />
              </div>
              <span className="font-extrabold text-xl text-white">R.J<span className="gradient-text"> Partner</span></span>
            </a>
            <p className="text-white/45 text-sm leading-relaxed mb-6">
              Agensi digital full-service untuk Website, Mobile App, dan Branding bisnis kamu.
            </p>
            <div className="flex gap-3">
              {SOCIAL.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white/60"
                  style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)' }}
                  whileHover={{ scale: 1.2, color: s.hoverColor, background: 'rgba(255,255,255,0.12)', borderColor: 'transparent' }}
                  whileTap={{ scale: 0.9 }}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <motion.div key={category} variants={fadeUp}>
              <h4 className="font-bold text-sm tracking-wide mb-5 text-white/90">{category}</h4>
              <ul className="space-y-3">
                {links.map((l) => (
                  <li key={l}>
                    <motion.a
                      href="#"
                      className="text-sm text-white/45 hover:text-white/80 transition-colors inline-block"
                      whileHover={{ x: 4 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    >
                      {l}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8"
          style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportOnce}
          transition={{ delay: 0.3 }}
        >
          <p className="text-white/30 text-sm">© {new Date().getFullYear()} R.J Partner. Semua hak dilindungi.</p>
          <p className="text-white/30 text-sm">Dibuat dengan ❤️ di Indonesia</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
