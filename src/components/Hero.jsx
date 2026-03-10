import { ArrowRight, Star, Users, Globe } from 'lucide-react';

const STATS = [
  { value: '150+', label: 'Proyek Selesai' },
  { value: '98%', label: 'Klien Puas' },
  { value: '5+', label: 'Tahun Pengalaman' },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 overflow-hidden">
      {/* Background blobs */}
      <div className="blob w-[500px] h-[500px] top-[-100px] left-[-100px]"
        style={{ background: 'radial-gradient(circle, #7c3aed, transparent)' }} />
      <div className="blob w-[400px] h-[400px] top-[10%] right-[-80px]"
        style={{ background: 'radial-gradient(circle, #06b6d4, transparent)' }} />
      <div className="blob w-[300px] h-[300px] bottom-[5%] left-[30%]"
        style={{ background: 'radial-gradient(circle, #f472b6, transparent)', opacity: 0.2 }} />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-8"
          style={{ background: 'rgba(139,92,246,0.15)', border: '1px solid rgba(139,92,246,0.3)', color: '#a78bfa' }}>
          <Star size={14} fill="currentColor" />
          Agensi Digital Terpercaya #1 di Indonesia
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.05] mb-8 max-w-5xl">
          Wujudkan Bisnis Digital{' '}
          <span className="gradient-text">Impian Kamu</span>{' '}
          Bersama Kami
        </h1>

        <p className="text-white/60 text-xl md:text-2xl mb-12 max-w-2xl leading-relaxed">
          Website, Mobile App, hingga Branding — kami hadirkan solusi digital end-to-end yang modern, cepat, dan siap scale bersama bisnismu.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-20">
          <a href="#kontak" className="gradient-btn text-white font-bold px-8 py-4 rounded-2xl text-lg flex items-center justify-center gap-2">
            Mulai Proyek Sekarang <ArrowRight size={20} />
          </a>
          <a
            href="#layanan"
            className="px-8 py-4 rounded-2xl text-lg font-semibold text-white/80 hover:text-white flex items-center justify-center gap-2 transition-all"
            style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)' }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.12)'}
            onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.07)'}
          >
            Lihat Portofolio
          </a>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap gap-10">
          {STATS.map((s) => (
            <div key={s.label}>
              <p className="text-4xl font-extrabold gradient-text">{s.value}</p>
              <p className="text-white/50 text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Floating bento preview cards – decorative */}
        <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[420px] space-y-3">
          {/* Card 1 */}
          <div className="glass glass-hover p-5 animate-float" style={{ animationDelay: '0s' }}>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg,#7c3aed,#06b6d4)' }}>
                <Globe size={16} color="white" />
              </div>
              <span className="font-semibold text-sm">Website Development</span>
            </div>
            <div className="h-2 bg-white/10 rounded-full mb-2">
              <div className="h-2 rounded-full" style={{ width: '82%', background: 'linear-gradient(90deg,#7c3aed,#06b6d4)' }} />
            </div>
            <p className="text-white/40 text-xs">82% proyek selesai tepat waktu</p>
          </div>

          {/* Card 2 */}
          <div className="glass glass-hover p-5 animate-float" style={{ animationDelay: '1.5s', marginLeft: '2rem' }}>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg,#f472b6,#a78bfa)' }}>
                <Users size={16} color="white" />
              </div>
              <span className="font-semibold text-sm">Klien Aktif</span>
            </div>
            <p className="text-3xl font-extrabold gradient-text">47</p>
          </div>

          {/* Card 3 */}
          <div className="glass glass-hover p-5 animate-float" style={{ animationDelay: '0.8s' }}>
            <p className="text-white/40 text-xs mb-2">Teknologi yang kami pakai</p>
            <div className="flex flex-wrap gap-2">
              {['React', 'Next.js', 'Flutter', 'Node.js', 'Figma'].map(t => (
                <span key={t} className="text-xs px-2.5 py-1 rounded-lg font-medium text-purple-300"
                  style={{ background: 'rgba(139,92,246,0.2)' }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
