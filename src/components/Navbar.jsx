import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b-4 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <div
              className="bg-neo-yellow px-4 py-2 border-4 border-black font-black text-2xl tracking-tighter uppercase transform -rotate-2 hover:rotate-0 transition-transform cursor-pointer"
              style={{ boxShadow: '4px 4px 0px 0px #000' }}
            >
              AWBuilder
            </div>
          </div>

          <div className="hidden md:flex space-x-8 items-center font-bold text-lg">
            <a href="#layanan" className="hover:text-neo-pink hover:underline decoration-4 underline-offset-4 transition-colors">Layanan</a>
            <a href="#fitur" className="hover:text-neo-cyan hover:underline decoration-4 underline-offset-4 transition-colors">Fitur</a>
            <a href="#harga" className="hover:text-neo-yellow hover:underline decoration-4 underline-offset-4 transition-colors">Harga</a>
          </div>

          <div className="hidden md:flex">
            <a
              href="#kontak"
              className="border-4 border-black px-6 py-3 font-black uppercase tracking-wider bg-neo-green hover:bg-neo-pink hover:text-white transition-all duration-150 inline-block"
              style={{ boxShadow: '6px 6px 0px 0px #000' }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = '2px 2px 0px 0px #000'; e.currentTarget.style.transform = 'translate(4px, 4px)'; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = '6px 6px 0px 0px #000'; e.currentTarget.style.transform = 'translate(0, 0)'; }}
            >
              Konsultasi Gratis
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 border-4 border-black bg-neo-lavender"
              style={{ boxShadow: '4px 4px 0px 0px #000' }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t-4 border-black bg-white">
          <div className="px-4 pt-4 pb-6 space-y-4 flex flex-col font-bold text-xl">
            <a href="#layanan" className="block px-3 py-2 border-2 border-transparent hover:border-black hover:bg-neo-yellow" onClick={() => setIsOpen(false)}>Layanan</a>
            <a href="#fitur" className="block px-3 py-2 border-2 border-transparent hover:border-black hover:bg-neo-cyan" onClick={() => setIsOpen(false)}>Fitur</a>
            <a href="#harga" className="block px-3 py-2 border-2 border-transparent hover:border-black hover:bg-neo-pink" onClick={() => setIsOpen(false)}>Harga</a>
            <a
              href="#kontak"
              className="block mt-4 border-4 border-black px-6 py-3 font-black uppercase tracking-wider bg-neo-green text-center"
              style={{ boxShadow: '4px 4px 0px 0px #000' }}
              onClick={() => setIsOpen(false)}
            >
              Konsultasi Gratis
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
