import { HiCheckCircle, HiArrowRight } from 'react-icons/hi';
import { TbWorldWww } from 'react-icons/tb';
import { MdOutlinePhoneIphone } from 'react-icons/md';
import { IoColorPaletteOutline } from 'react-icons/io5';

const SERVICES = [
  {
    id: 'web',
    icon: <TbWorldWww size={30} />,
    iconBg: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
    label: 'Website Development',
    tag: 'LAYANAN UTAMA',
    tagColor: 'rgba(139,92,246,0.2)',
    tagText: '#a78bfa',
    description:
      'Company profile, landing page, hingga sistem web kompleks. Kami bangun dengan performa tinggi, SEO-ready, dan desain yang bikin klienmu WOW.',
    features: ['Company Profile', 'Landing Page', 'Web App & Dashboard', 'E-Commerce'],
    accentColor: '#a78bfa',
    span: 'lg:col-span-5',
  },
  {
    id: 'app',
    icon: <MdOutlinePhoneIphone size={30} />,
    iconBg: 'linear-gradient(135deg, #f472b6, #a78bfa)',
    label: 'Mobile App',
    tag: 'ANDROID & IOS',
    tagColor: 'rgba(244,114,182,0.2)',
    tagText: '#f472b6',
    description:
      'Aplikasi mobile native & cross-platform yang smooth, intuitif, dan siap publish ke App Store maupun Google Play.',
    features: ['Flutter & React Native', 'UI/UX Modern', 'API Integration', 'App Store Ready'],
    accentColor: '#f472b6',
    span: 'lg:col-span-4',
  },
  {
    id: 'brand',
    icon: <IoColorPaletteOutline size={30} />,
    iconBg: 'linear-gradient(135deg, #34d399, #06b6d4)',
    label: 'Branding Partner',
    tag: 'IDENTITAS BRAND',
    tagColor: 'rgba(52,211,153,0.2)',
    tagText: '#34d399',
    description:
      'Dari logo, brand guideline, hingga social media kit. Kami jadi partner branding jangka panjang bisnis kamu.',
    features: ['Logo & Visual Identity', 'Brand Guideline', 'Social Media Kit', 'Pitch Deck'],
    accentColor: '#34d399',
    span: 'lg:col-span-3',
  },
];

const Services = () => {
  return (
    <section id="layanan" className="py-28 relative overflow-hidden">
      <div className="blob w-[500px] h-[500px] top-0 right-[-150px] opacity-20"
        style={{ background: 'radial-gradient(circle, #06b6d4, transparent)' }} />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest mb-4" style={{ color: '#a78bfa' }}>LAYANAN KAMI</p>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Solusi Digital <span className="gradient-text">360°</span>
          </h2>
          <p className="text-white/50 text-lg md:text-xl max-w-2xl mx-auto">
            Satu agensi, semua kebutuhan digital bisnis kamu terpenuhi.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {SERVICES.map((s) => (
            <div
              key={s.id}
              className={`glass glass-hover p-8 flex flex-col ${s.span} group cursor-pointer`}
            >
              <span
                className="text-xs font-bold tracking-widest px-3 py-1 rounded-full self-start mb-5"
                style={{ background: s.tagColor, color: s.tagText }}
              >
                {s.tag}
              </span>

              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-6"
                style={{ background: s.iconBg }}
              >
                {s.icon}
              </div>

              <h3 className="text-2xl font-extrabold mb-3">{s.label}</h3>
              <p className="text-white/55 text-sm leading-relaxed mb-6">{s.description}</p>

              <ul className="space-y-2 mb-8 flex-grow">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-white/70">
                    <HiCheckCircle size={16} style={{ color: s.accentColor, flexShrink: 0 }} />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#kontak"
                className="flex items-center gap-2 text-sm font-semibold transition-all duration-200 group-hover:gap-3 mt-auto"
                style={{ color: s.accentColor }}
              >
                Pelajari Lebih Lanjut <HiArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
