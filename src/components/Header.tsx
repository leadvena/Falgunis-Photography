import { useState, useEffect } from 'react';
import { Menu, X, Camera, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  activePage: string;
  setActivePage: (page: string) => void;
}

export default function Header({ activePage, setActivePage }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'gallery', label: 'Portfolio' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About Falguni' },
    { id: 'contact', label: 'Bookings' }
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
        scrolled || mobileMenuOpen
          ? 'bg-charcoal-950/95 shadow-md border-b border-charcoal-800/40 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Brand Logo */}
        <button
          id="btn-logo-home"
          onClick={() => {
            setActivePage('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex flex-col items-start cursor-pointer text-left focus:outline-none group"
        >
          <span className="font-serif text-xl sm:text-2xl letter tracking-[0.25em] text-champagne-300 font-medium group-hover:text-champagne-100 transition-colors uppercase">
            Falguni
          </span>
          <span className="font-mono text-[9px] tracking-[0.4em] uppercase text-charcoal-400 group-hover:text-champagne-400 transition-colors">
            Photography
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav id="desktop-nav" className="hidden md:flex items-center space-x-10">
          {navItems.map((item) => (
            <button
              id={`nav-item-${item.id}`}
              key={item.id}
              onClick={() => {
                setActivePage(item.id);
              }}
              className="relative py-2 font-sans text-xs tracking-widest uppercase transition-all duration-300 cursor-pointer focus:outline-none focus:text-champagne-300"
            >
              <span
                className={`${
                  activePage === item.id
                    ? 'text-champagne-300 font-medium'
                    : 'text-charcoal-300 hover:text-champagne-200'
                }`}
              >
                {item.label}
              </span>
              {activePage === item.id && (
                <motion.div
                  layoutId="activeNavLine"
                  className="absolute bottom-0 left-0 w-full h-[1px] bg-champagne-400"
                  initial={false}
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
          
          {/* Subtle rating bubble */}
          <div className="flex items-center gap-1 bg-champagne-500/10 border border-champagne-500/30 px-3 py-1.5 rounded-full text-[10px] font-mono uppercase tracking-wider text-champagne-300">
            <Star size={10} className="fill-champagne-400 stroke-none" />
            <span>Lightsview SA • 5.0 ★</span>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          id="btn-mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-charcoal-300 hover:text-champagne-300 transition-colors focus:outline-none"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu-overlay"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-[72px] left-0 w-full bg-charcoal-950/98 border-b border-charcoal-800/80 p-8 flex flex-col space-y-6 text-center shadow-lg"
          >
            {navItems.map((item, idx) => (
              <motion.button
                id={`mobile-nav-item-${item.id}`}
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                onClick={() => {
                  setMobileMenuOpen(false);
                  setTimeout(() => {
                    setActivePage(item.id);
                  }, 100);
                }}
                className={`text-sm tracking-widest uppercase transition-all py-3 ${
                  activePage === item.id
                    ? 'text-champagne-300 font-medium'
                    : 'text-charcoal-300 hover:text-champagne-200'
                }`}
              >
                {item.label}
              </motion.button>
            ))}

            <div className="pt-4 border-t border-charcoal-800/40 flex flex-col items-center gap-2">
              <span className="font-mono text-[9px] tracking-widest text-charcoal-500 uppercase">
                Lightsview, SA • 53 Reviews
              </span>
              <div className="flex text-champagne-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} className="fill-current" />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
