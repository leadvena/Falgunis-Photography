import { useState, useEffect } from 'react';
import SEO from './components/SEO';
import Header from './components/Header';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Gallery from './components/Gallery';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';

export default function App() {
  const [activePage, setActivePage] = useState('home');

  // Interactive booking selection state (passed from Services customizer to ContactForm)
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [basePrice, setBasePrice] = useState<number | null>(null);
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);
  const [totalPrice, setTotalPrice] = useState<number | null>(null);

  // Auto-scroll callback when choosing a configured package
  const handleSelectServiceAndExtras = (
    serviceName: string,
    basePrice: number,
    extras: string[],
    totalPrice: number
  ) => {
    setSelectedService(serviceName);
    setBasePrice(basePrice);
    setSelectedExtras(extras);
    setTotalPrice(totalPrice);

    // Scroll smoothly to contact form segment
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      setActivePage('contact');
    }
  };

  const handleClearSelection = () => {
    setSelectedService(null);
    setBasePrice(null);
    setSelectedExtras([]);
    setTotalPrice(null);
  };

  // Custom Navigation function to scroll or navigate
  const handleNavigate = (pageId: string) => {
    setActivePage(pageId);
    let elementId = '';
    
    if (pageId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    } else if (pageId === 'gallery') {
      elementId = 'gallery-section';
    } else if (pageId === 'services') {
      elementId = 'services-section';
    } else if (pageId === 'about') {
      elementId = 'about-section';
    } else if (pageId === 'contact') {
      elementId = 'contact-section';
    }

    const target = document.getElementById(elementId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Setup intersection observer to dynamically highlight navbar links on scroll
  useEffect(() => {
    const handleScrollTracking = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      const sections = [
        { id: 'home', top: 0 },
        { id: 'gallery', top: document.getElementById('gallery-section')?.offsetTop || 0 },
        { id: 'services', top: document.getElementById('services-section')?.offsetTop || 0 },
        { id: 'about', top: document.getElementById('about-section')?.offsetTop || 0 },
        { id: 'contact', top: document.getElementById('contact-section')?.offsetTop || 0 }
      ];

      // Sort sections by offset position
      const sorted = [...sections].sort((a, b) => b.top - a.top);
      const active = sorted.find((sec) => scrollPosition >= sec.top);

      if (active) {
        setActivePage(active.id);
      }
    };

    window.addEventListener('scroll', handleScrollTracking);
    return () => window.removeEventListener('scroll', handleScrollTracking);
  }, []);

  return (
    <div id="photography-app-root" className="min-h-screen bg-charcoal-950 font-sans text-charcoal-100 selection:bg-champagne-500 selection:text-charcoal-950 relative">
      {/* 1. SEO & Markup Injections */}
      <SEO />

      {/* 2. Premium Navbar Header */}
      <Header activePage={activePage} setActivePage={handleNavigate} />

      {/* 3. Hero Slide Segment */}
      <Hero
        onPortfolioCall={() => handleNavigate('gallery')}
        onBookingCall={() => handleNavigate('contact')}
      />

      {/* 4. Google Social Proof Strip */}
      <SocialProof />

      {/* 5. Asymmetric Filterable Gallery */}
      <div id="gallery-scroller-node">
        <Gallery />
      </div>

      {/* 6. Dynamic Services pricing customized catalog */}
      <div id="services-scroller-node">
        <Services onSelectServiceAndExtras={handleSelectServiceAndExtras} />
      </div>

      {/* 7. Warm About Falguni bio */}
      <div id="about-scroller-node">
        <About />
      </div>

      {/* 8. Client Testimonials Carousel */}
      <div id="testimonials-scroller-node">
        <Testimonials />
      </div>

      {/* 9. Booking and Contact Form with status updates */}
      <div id="contact-scroller-node">
        <ContactForm
          selectedService={selectedService}
          basePrice={basePrice}
          selectedExtras={selectedExtras}
          totalPrice={totalPrice}
          onClearSelection={handleClearSelection}
        />
      </div>

      {/* 10. Sticky WhatsApp Client Chat */}
      <WhatsAppButton />

      {/* 11. Luxury Cinematic Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
