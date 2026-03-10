import { Instagram, Twitter, Linkedin, Github } from 'lucide-react';

const SOCIAL = [
  { icon: <Instagram size={24} />, label: 'Instagram', href: '#' },
  { icon: <Twitter size={24} />, label: 'Twitter', href: '#' },
  { icon: <Linkedin size={24} />, label: 'LinkedIn', href: '#' },
  { icon: <Github size={24} />, label: 'GitHub', href: '#' },
];

const Footer = () => {
  return (
    <footer id="kontak" className="bg-neo-blue text-white overflow-hidden relative">
      {/* Decorative shapes */}
      <div className="hidden md:block absolute top-[20%] left-[10%] w-32 h-32 bg-neo-yellow border-4 border-black z-0 transform rotate-[15deg]"></div>
      <div className="hidden md:block absolute bottom-[10%] right-[15%] w-24 h-24 bg-neo-pink border-4 border-black rounded-full z-0 transform -rotate-12"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-12 relative z-10">

        {/* Big CTA */}
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-none mb-10 transform -rotate-2"
            style={{ textShadow: '6px 6px 0px rgba(0,0,0,0.5)' }}
          >
            Siap Go Digital<br />Sekarang?
          </h2>
          <a
            href="mailto:hi@awbuilder.id"
            className="inline-block border-4 border-black px-12 py-6 font-black uppercase tracking-widest text-2xl md:text-4xl bg-neo-yellow text-black transition-all duration-150"
            style={{ boxShadow: '12px 12px 0px 0px #000' }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = '4px 4px 0px 0px #000'; e.currentTarget.style.transform = 'translate(8px, 8px)'; }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = '12px 12px 0px 0px #000'; e.currentTarget.style.transform = 'translate(0, 0)'; }}
          >
            Hubungi Kami
          </a>
        </div>

        {/* Footer bottom bar */}
        <div className="border-t-4 border-black pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div
            className="bg-white text-black px-4 py-2 border-4 border-black font-black text-2xl tracking-tighter uppercase transform rotate-2"
            style={{ boxShadow: '4px 4px 0px 0px #000' }}
          >
            AWBuilder
          </div>

          <div className="flex space-x-4">
            {SOCIAL.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="p-3 bg-white text-black border-4 border-black transition-all duration-150 hover:bg-neo-cyan"
                style={{ boxShadow: '4px 4px 0px 0px #000' }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = '1px 1px 0px 0px #000'; e.currentTarget.style.transform = 'translate(3px, 3px)'; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = '4px 4px 0px 0px #000'; e.currentTarget.style.transform = 'translate(0, 0)'; }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="bg-black text-white px-4 py-2 inline-block font-bold uppercase tracking-wide">
            © {new Date().getFullYear()} AWBuilder. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
