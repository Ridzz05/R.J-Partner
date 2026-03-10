import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#f4f4f4] text-black font-sans selection:bg-neo-pink selection:text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Features />
      </main>
      <Footer />
    </div>
  );
}

export default App;
