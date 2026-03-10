import { useState } from 'react';
import { motion } from 'framer-motion';
import { PiInstagramLogoFill, PiTwitterLogoFill, PiLinkedinLogoFill, PiGithubLogoFill } from 'react-icons/pi';
import { IoLogoWhatsapp } from 'react-icons/io5';
import { TbSend } from 'react-icons/tb';
import logo from '../assets/logo.png';
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

const WA_NUMBER = '6282281862751';

const Footer = () => {
  const [form, setForm] = useState({ nama: '', email: '', deskripsi: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message =
      `Halo R.J Partner! 👋\n\n` +
      `*Nama:* ${form.nama}\n` +
      `*Email:* ${form.email}\n` +
      `*Kebutuhan:*\n${form.deskripsi}`;
    const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank');
  };

  const inputStyle = {
    background: 'rgba(255,255,255,0.06)',
    border: '1px solid rgba(255,255,255,0.12)',
    color: '#fff',
    outline: 'none',
  };
  const inputFocus = 'focus:border-purple-500/60 focus:ring-1 focus:ring-purple-500/30';

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
        {/* CTA + Contact Form */}
        <motion.div
          className="glass rounded-3xl p-8 md:p-16 mb-24 relative overflow-hidden"
          style={{ border: '1px solid rgba(139,92,246,0.25)' }}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute inset-0 rounded-3xl opacity-5"
            style={{ background: 'linear-gradient(135deg, #7c3aed, #06b6d4)' }} />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
            {/* Left — text */}
            <div>
              <motion.p
                className="text-sm font-semibold tracking-widest mb-4"
                style={{ color: '#a78bfa' }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={viewportOnce}
                transition={{ delay: 0.2 }}
              >
                HUBUNGI KAMI
              </motion.p>
              <motion.h2
                className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                Yuk, <span className="gradient-text">Wujudkan Ide</span> Bersama Kami
              </motion.h2>
              <motion.p
                className="text-white/55 text-base md:text-lg mb-8 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={viewportOnce}
                transition={{ delay: 0.5 }}
              >
                Isi form di samping dan kami akan langsung terhubung via WhatsApp. Konsultasi gratis, tanpa biaya tersembunyi!
              </motion.p>

              <motion.div
                className="flex items-center gap-3 text-white/50 text-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={viewportOnce}
                transition={{ delay: 0.6 }}
              >
                <IoLogoWhatsapp size={20} className="text-green-400" />
                <span>Data form akan dikirim langsung ke WhatsApp kami</span>
              </motion.div>
            </div>

            {/* Right — form */}
            <motion.form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewportOnce}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div>
                <label className="text-white/60 text-sm font-medium mb-1.5 block">Nama Lengkap</label>
                <input
                  type="text"
                  name="nama"
                  value={form.nama}
                  onChange={handleChange}
                  required
                  placeholder="Masukkan nama kamu"
                  className={`w-full px-4 py-3 rounded-xl text-sm placeholder-white/25 transition-all ${inputFocus}`}
                  style={inputStyle}
                />
              </div>

              <div>
                <label className="text-white/60 text-sm font-medium mb-1.5 block">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="email@contoh.com"
                  className={`w-full px-4 py-3 rounded-xl text-sm placeholder-white/25 transition-all ${inputFocus}`}
                  style={inputStyle}
                />
              </div>

              <div>
                <label className="text-white/60 text-sm font-medium mb-1.5 block">Deskripsi Kebutuhan</label>
                <textarea
                  name="deskripsi"
                  value={form.deskripsi}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Ceritakan kebutuhan proyek kamu..."
                  className={`w-full px-4 py-3 rounded-xl text-sm placeholder-white/25 transition-all resize-none ${inputFocus}`}
                  style={inputStyle}
                />
              </div>

              <motion.button
                type="submit"
                className="gradient-btn text-white font-bold px-6 py-3.5 rounded-xl text-sm flex items-center justify-center gap-2 mt-2 w-full"
                whileHover={{ scale: 1.03, boxShadow: '0 16px 48px rgba(124,58,237,0.5)' }}
                whileTap={{ scale: 0.97 }}
              >
                <TbSend size={18} /> Kirim via WhatsApp
              </motion.button>
            </motion.form>
          </div>
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
              <img src={logo} alt="R.J Partner" className="h-9 w-auto rounded-xl border border-white/30" />
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
