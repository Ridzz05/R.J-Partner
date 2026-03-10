import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Features from './components/Features';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Clients from './components/Clients';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden" style={{ backgroundColor: '#03020d' }}>
      <Navbar />
      <main>
        <Hero />
        <Clients />
        <Services />
        <Portfolio />
        <Features />
        <Testimonials />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}

export default App;
