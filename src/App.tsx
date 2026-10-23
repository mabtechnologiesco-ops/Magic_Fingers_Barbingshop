import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Gallery from '@/components/Gallery';
import About from '@/components/About';
import WhyChooseUs from '@/components/WhyChooseUs';
import SpecialOffers from '@/components/SpecialOffers';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingActions from '@/components/FloatingActions';

function App() {
  return (
    <div className="min-h-screen bg-matte text-cream">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <About />
        <WhyChooseUs />
        <SpecialOffers />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}

export default App;
