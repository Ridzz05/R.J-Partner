import { Search, Smartphone, Zap, ShieldCheck } from 'lucide-react';

const FEATURES = [
  { id: 1, title: 'SEO Optimized', icon: <Search size={52} strokeWidth={2} /> },
  { id: 2, title: 'Mobile Responsive', icon: <Smartphone size={52} strokeWidth={2} /> },
  { id: 3, title: 'Super Fast Load', icon: <Zap size={52} strokeWidth={2} /> },
  { id: 4, title: 'High Security', icon: <ShieldCheck size={52} strokeWidth={2} /> },
];

const Features = () => {
  return (
    <section id="fitur" className="bg-white py-24 border-b-4 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Marquee Banner */}
        <div
          className="overflow-hidden bg-neo-yellow border-4 border-black mb-16 py-4 transform -rotate-2"
          style={{ boxShadow: '6px 6px 0px 0px #000' }}
        >
          <div className="animate-marquee whitespace-nowrap flex items-center gap-8 text-3xl font-black uppercase tracking-widest text-black">
            {[...Array(6)].map((_, i) => (
              <span key={i} className="shrink-0 flex items-center gap-8">
                <span>FITUR MANTUL</span>
                <span>•</span>
                <span>GA PAKE LAMA</span>
                <span>•</span>
                <span>ANTI RIBET</span>
                <span>•</span>
              </span>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {FEATURES.map((f) => (
            <div
              key={f.id}
              className="border-4 border-black bg-white flex flex-col items-center justify-center py-12 px-4 text-center transition-all duration-150 hover:bg-neo-cyan cursor-default"
              style={{ boxShadow: '6px 6px 0px 0px #000' }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = '2px 2px 0px 0px #000'; e.currentTarget.style.transform = 'translate(4px, 4px)'; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = '6px 6px 0px 0px #000'; e.currentTarget.style.transform = 'translate(0, 0)'; }}
            >
              <div className="mb-6">{f.icon}</div>
              <h3 className="text-xl md:text-2xl font-black uppercase leading-tight">{f.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
