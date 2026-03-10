import { Zap, ShieldCheck, Search, Smartphone, BarChart2, HeadphonesIcon } from 'lucide-react';

const FEATURES = [
  {
    icon: <Search size={24} />,
    title: 'SEO Optimized',
    desc: 'Struktur kode yang bersih, meta tag lengkap, dan performa Core Web Vitals tinggi.',
    color: '#a78bfa',
    bg: 'rgba(139,92,246,0.12)',
    span: 'lg:col-span-4',
  },
  {
    icon: <Smartphone size={24} />,
    title: 'Mobile-First Design',
    desc: 'Setiap pixel didesain untuk tampil sempurna di semua ukuran layar.',
    color: '#22d3ee',
    bg: 'rgba(34,211,238,0.12)',
    span: 'lg:col-span-4',
  },
  {
    icon: <Zap size={24} />,
    title: 'Super Fast Load',
    desc: 'Dioptimasi dengan lazy loading, CDN, dan caching strategi terbaik.',
    color: '#fbbf24',
    bg: 'rgba(251,191,36,0.12)',
    span: 'lg:col-span-4',
  },
  {
    icon: <ShieldCheck size={24} />,
    title: 'Keamanan Enterprise',
    desc: 'HTTPS, CSRF protection, input sanitization, dan security audit berkala.',
    color: '#34d399',
    bg: 'rgba(52,211,153,0.12)',
    span: 'lg:col-span-3',
  },
  {
    icon: <BarChart2 size={24} />,
    title: 'Analitik & Reporting',
    desc: 'Dashboard analitik terintegrasi untuk memantau performa website real-time.',
    color: '#f472b6',
    bg: 'rgba(244,114,182,0.12)',
    span: 'lg:col-span-5',
  },
  {
    icon: <HeadphonesIcon size={24} />,
    title: 'Support 24/7',
    desc: 'Tim kami siap membantu kamu kapanpun — bahkan di tengah malam.',
    color: '#a78bfa',
    bg: 'rgba(139,92,246,0.12)',
    span: 'lg:col-span-4',
  },
];

const PROCESS = [
  { step: '01', title: 'Discovery', desc: 'Analisis kebutuhan & riset kompetitor' },
  { step: '02', title: 'Design', desc: 'Wireframe, prototyping & UI/UX design' },
  { step: '03', title: 'Development', desc: 'Coding dengan teknologi terkini' },
  { step: '04', title: 'Launch', desc: 'Deploy, testing & go-live' },
];

const Features = () => {
  return (
    <section id="keunggulan" className="py-28 relative overflow-hidden">
      {/* blob */}
      <div className="blob w-[600px] h-[600px] bottom-0 left-[-200px] opacity-20"
        style={{ background: 'radial-gradient(circle, #7c3aed, transparent)' }} />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest mb-4" style={{ color: '#22d3ee' }}>KEUNGGULAN KAMI</p>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Standar{' '}
            <span className="gradient-text">Premium</span>,<br />Harga Terjangkau
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Setiap produk yang kami bangun melewati standar kualitas ketat sebelum diserahkan kepada klien.
          </p>
        </div>

        {/* Bento Grid Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 mb-20">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className={`glass glass-hover p-7 ${f.span}`}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ background: f.bg, color: f.color }}
              >
                {f.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{f.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Process timeline */}
        <div
          className="glass p-10 rounded-3xl"
          style={{ border: '1px solid rgba(139,92,246,0.2)' }}
        >
          <p className="text-center text-sm font-semibold tracking-widest mb-10" style={{ color: '#a78bfa' }}>CARA KERJA KAMI</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {PROCESS.map((p, i) => (
              <div key={p.step} className="flex flex-col items-center text-center">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center font-extrabold text-lg mb-4 animate-pulse-glow"
                  style={{ background: 'linear-gradient(135deg, #7c3aed, #06b6d4)' }}
                >
                  {p.step}
                </div>
                {i < PROCESS.length - 1 && (
                  <div className="hidden md:block absolute" />
                )}
                <h4 className="font-bold text-base mb-1">{p.title}</h4>
                <p className="text-white/45 text-xs">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
