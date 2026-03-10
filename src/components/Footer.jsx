import { PiInstagramLogoFill, PiTwitterLogoFill, PiLinkedinLogoFill, PiGithubLogoFill } from 'react-icons/pi';
import { MdOutlineEmail } from 'react-icons/md';
import { IoLogoWhatsapp } from 'react-icons/io5';
import { TbBolt } from 'react-icons/tb';

const SOCIAL = [
  { icon: <PiInstagramLogoFill size={20} />, href: '#', label: 'Instagram' },
  { icon: <PiTwitterLogoFill size={20} />, href: '#', label: 'Twitter' },
  { icon: <PiLinkedinLogoFill size={20} />, href: '#', label: 'LinkedIn' },
  { icon: <PiGithubLogoFill size={20} />, href: '#', label: 'GitHub' },
];

const FOOTER_LINKS = {
  Layanan: ['Website Development', 'Mobile App', 'Branding Partner', 'UI/UX Design'],
  Perusahaan: ['Tentang Kami', 'Portofolio', 'Blog', 'Karir'],
  Support: ['Kontak', 'FAQ', 'Syarat & Ketentuan', 'Kebijakan Privasi'],
};

const Footer = () => {
  return (
    <footer id="kontak" className="relative overflow-hidden" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
      <div className="blob w-[500px] h-[500px] top-[-100px] right-[-100px] opacity-20"
        style={{ background: 'radial-gradient(circle, #7c3aed, transparent)' }} />
      <div className="blob w-[400px] h-[400px] bottom-0 left-[-100px] opacity-15"
        style={{ background: 'radial-gradient(circle, #06b6d4, transparent)' }} />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-28 relative z-10">
        {/* Big CTA */}
        <div
          className="glass rounded-3xl p-12 md:p-16 text-center mb-24 relative overflow-hidden"
          style={{ border: '1px solid rgba(139,92,246,0.25)' }}
        >
          <div className="absolute inset-0 rounded-3xl opacity-5"
            style={{ background: 'linear-gradient(135deg, #7c3aed, #06b6d4)' }} />

          <p className="text-sm font-semibold tracking-widest mb-4 relative z-10" style={{ color: '#a78bfa' }}>
            READY TO GO DIGITAL?
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8 relative z-10">
            Yuk,{' '}
            <span className="gradient-text">Wujudkan Ide</span>
            <br />Bersama R.J Partner
          </h2>
          <p className="text-white/55 text-lg md:text-xl mb-12 max-w-2xl mx-auto relative z-10">
            Konsultasi gratis, tanpa biaya tersembunyi. Ceritakan visumu dan kami akan wujudkan bersama.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <a
              href="mailto:hi@awbuilder.id"
              className="gradient-btn text-white font-bold px-8 py-4 rounded-2xl text-lg flex items-center justify-center gap-2"
            >
              <MdOutlineEmail size={22} /> Kirim Email
            </a>
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-lg font-semibold text-white/80 hover:text-white transition-all"
              style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)' }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.12)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.07)'}
            >
              <IoLogoWhatsapp size={22} className="text-green-400" /> Chat WhatsApp
            </a>
          </div>
        </div>

        {/* Footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
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
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white/60 hover:text-white transition-all"
                  style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(139,92,246,0.2)'; e.currentTarget.style.borderColor = 'rgba(139,92,246,0.4)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links  */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-bold text-sm tracking-wide mb-5 text-white/90">{category}</h4>
              <ul className="space-y-3">
                {links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-white/45 hover:text-white/80 transition-colors">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8"
          style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
        >
          <p className="text-white/30 text-sm">© {new Date().getFullYear()} R.J Partner. Semua hak dilindungi.</p>
          <p className="text-white/30 text-sm">Dibuat dengan ❤️ di Indonesia</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
