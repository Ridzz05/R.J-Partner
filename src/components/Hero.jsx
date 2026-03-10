const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-neo-yellow py-20 lg:py-32 border-b-4 border-black">
      {/* Decorative background shapes */}
      <div className="hidden md:block absolute top-10 right-10 w-24 h-24 bg-neo-pink border-4 border-black transform rotate-12 z-0"></div>
      <div className="hidden md:block absolute bottom-20 right-40 w-32 h-32 bg-neo-cyan border-4 border-black transform -rotate-6 z-0 rounded-full"></div>
      <div className="hidden md:block absolute top-40 left-10 w-16 h-16 bg-white border-4 border-black transform rotate-45 z-0"></div>
      <div className="hidden lg:block absolute top-24 right-1/3 w-10 h-10 bg-neo-lavender border-4 border-black z-0 transform rotate-6"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-none mb-8">
            <span className="bg-white px-3 py-1 inline-block mb-3">Bikin Website Impian,</span>
            <br />
            <span className="bg-neo-cyan px-3 py-1 inline-block mt-2">Nggak Pake Ribet.</span>
          </h1>

          <div
            className="border-4 border-black p-4 bg-white inline-block transform -rotate-1 mb-10"
            style={{ boxShadow: '6px 6px 0px 0px #000' }}
          >
            <p className="text-xl md:text-2xl font-bold max-w-2xl">
              Layanan pembuatan website profesional untuk segala kebutuhan.
              Desain modern, performa tinggi, dan siap scale-up bisnis kamu.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 mt-8">
            <a
              href="#mulai"
              className="border-4 border-black px-8 py-4 font-black uppercase tracking-wider text-xl bg-neo-pink text-white text-center transition-all duration-150 cursor-pointer"
              style={{ boxShadow: '8px 8px 0px 0px #000' }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = '2px 2px 0px 0px #000'; e.currentTarget.style.transform = 'translate(6px, 6px)'; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = '8px 8px 0px 0px #000'; e.currentTarget.style.transform = 'translate(0, 0)'; }}
            >
              Mulai Proyek
            </a>
            <a
              href="#kategori"
              className="border-4 border-black px-8 py-4 font-black uppercase tracking-wider text-xl bg-white text-black text-center transition-all duration-150 cursor-pointer"
              style={{ boxShadow: '8px 8px 0px 0px #000' }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = '2px 2px 0px 0px #000'; e.currentTarget.style.transform = 'translate(6px, 6px)'; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = '8px 8px 0px 0px #000'; e.currentTarget.style.transform = 'translate(0, 0)'; }}
            >
              Lihat Kategori
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
