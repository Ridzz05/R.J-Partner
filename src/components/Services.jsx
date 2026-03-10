import { Briefcase, ShoppingCart, Code } from 'lucide-react';

const SERVICES = [
  {
    id: 1,
    title: 'Company Profile',
    description: 'Untuk validasi dan profesionalitas bisnis. Tampil meyakinkan di mata klien potensial.',
    bg: '#ffe800',
    textClass: 'text-black',
    icon: <Briefcase size={44} strokeWidth={2.5} />,
  },
  {
    id: 2,
    title: 'E-Commerce / Toko Online',
    description: 'Jualan otomatis 24/7 dengan payment gateway. Kelola produk & pesanan makin gampang.',
    bg: '#ff007f',
    textClass: 'text-white',
    icon: <ShoppingCart size={44} strokeWidth={2.5} />,
  },
  {
    id: 3,
    title: 'Custom Web App',
    description: 'Sistem kompleks sesuai kebutuhan unik operasionalmu. Otomatisasi proses bisnis tanpa batas.',
    bg: '#00e5ff',
    textClass: 'text-black',
    icon: <Code size={44} strokeWidth={2.5} />,
  },
];

const Services = () => {
  return (
    <section id="layanan" className="py-24 bg-neo-lavender border-b-4 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-6xl font-black uppercase tracking-tighter inline-block bg-white px-6 py-3 border-4 border-black transform rotate-1"
            style={{ boxShadow: '6px 6px 0px 0px #000' }}
          >
            Pilih Kategori Website Kamu
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {SERVICES.map((s) => (
            <div
              key={s.id}
              className={`flex flex-col h-full border-4 border-black p-8 transition-all duration-150`}
              style={{ backgroundColor: s.bg, boxShadow: '8px 8px 0px 0px #000' }}
            >
              <div className={`mb-4 ${s.textClass}`}>{s.icon}</div>
              <h3 className={`text-2xl font-black uppercase mb-3 ${s.textClass}`}>{s.title}</h3>
              <div className="w-full h-1 bg-black mb-4"></div>
              <p className={`font-bold text-lg mb-8 flex-grow ${s.textClass}`}>{s.description}</p>
              <button
                className="border-4 border-black bg-white text-black px-6 py-3 font-black uppercase tracking-wider w-full flex justify-between items-center transition-all duration-150 hover:bg-black hover:text-white"
                style={{ boxShadow: '4px 4px 0px 0px #000' }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = '1px 1px 0px 0px #000'; e.currentTarget.style.transform = 'translate(3px, 3px)'; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = '4px 4px 0px 0px #000'; e.currentTarget.style.transform = 'translate(0, 0)'; }}
              >
                <span>Pesen Sekarang</span>
                <span className="text-2xl font-serif font-bold">→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
