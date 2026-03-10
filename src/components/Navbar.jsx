import { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Layanan', href: '#layanan' },
  { label: 'Keunggulan', href: '#keunggulan' },
  { label: 'Portofolio', href: '#portofolio' },
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
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? 'rgba(3, 2, 13, 0.85)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.07)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex justify-between h-20 items-center">

          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #7c3aed, #06b6d4)' }}
            >
              <Zap size={18} fill="white" color="white" />
            </div>
            <span className="font-extrabold text-xl tracking-tight text-white">
              AW<span className="gradient-text">Builder</span>
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <a
              href="#kontak"
              className="gradient-btn text-white text-sm font-semibold px-5 py-2.5 rounded-xl inline-block"
            >
              Mulai Proyek ↗
            </a>
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl text-white/80 hover:text-white"
            style={{ background: 'rgba(255,255,255,0.07)' }}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div
          className="md:hidden mx-4 mb-4 rounded-2xl p-5 flex flex-col gap-4"
          style={{ background: 'rgba(12, 11, 30, 0.95)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.1)' }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/80 hover:text-white font-medium py-1 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#kontak"
            className="gradient-btn text-white text-sm font-semibold px-5 py-3 rounded-xl text-center mt-2 block"
            onClick={() => setIsOpen(false)}
          >
            Mulai Proyek ↗
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
