import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { TbBolt } from 'react-icons/tb';

const NAV_LINKS = [
  { label: 'Layanan', href: '#layanan' },
  { label: 'Portofolio', href: '#portofolio' },
  { label: 'Keunggulan', href: '#keunggulan' },
  { label: 'Harga', href: '#harga' },
  { label: 'Kontak', href: '#kontak' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(3, 2, 13, 0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.07)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex justify-between h-20 items-center">

          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center gap-2 group"
            whileHover={{ scale: 1.04 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          >
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #7c3aed, #06b6d4)' }}
            >
              <TbBolt size={20} color="white" strokeWidth={2.5} />
            </div>
            <span className="font-extrabold text-xl tracking-tight text-white">
              R.J<span className="gradient-text"> Partner</span>
            </span>
          </motion.a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-200 relative"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.07, duration: 0.4 }}
                whileHover={{ y: -2 }}
              >
                {link.label}
              </motion.a>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            className="hidden md:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.45, duration: 0.4 }}
          >
            <motion.a
              href="#kontak"
              className="gradient-btn text-white text-sm font-semibold px-5 py-2.5 rounded-xl inline-block"
              whileHover={{ scale: 1.06, boxShadow: '0 12px 40px rgba(124,58,237,0.5)' }}
              whileTap={{ scale: 0.97 }}
            >
              Mulai Proyek ↗
            </motion.a>
          </motion.div>

          {/* Mobile burger */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl text-white/80 hover:text-white"
            style={{ background: 'rgba(255,255,255,0.07)' }}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden mx-4 mb-4 rounded-2xl overflow-hidden"
            style={{ background: 'rgba(12, 11, 30, 0.95)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.1)' }}
          >
            <div className="p-5 flex flex-col gap-4">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="text-white/80 hover:text-white font-medium py-1 transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#kontak"
                className="gradient-btn text-white text-sm font-semibold px-5 py-3 rounded-xl text-center mt-2 block"
                whileTap={{ scale: 0.96 }}
                onClick={() => setIsOpen(false)}
              >
                Mulai Proyek ↗
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
