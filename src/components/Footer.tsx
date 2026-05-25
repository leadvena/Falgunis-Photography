import { Camera, Mail, Phone, MapPin, Instagram, Facebook, Compass } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="main-footer" className="bg-charcoal-950 border-t border-charcoal-850/80 pt-20 pb-10 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 items-start">
          
          {/* Logo & Manifesto block */}
          <div className="space-y-4">
            <div className="flex flex-col">
              <span className="font-serif text-2xl letter tracking-[0.25em] text-champagne-300 font-medium uppercase leading-none">
                Falguni
              </span>
              <span className="font-mono text-[9px] tracking-[0.4em] uppercase text-charcoal-450 mt-1">
                Photography
              </span>
            </div>
            <p className="font-sans text-xs text-charcoal-400 font-light leading-relaxed tracking-wide">
              Bespoke, magazine-grade photo artistry preserving family legacies, fine art portraits, 
              and editorial wedding stories with luxury attention across Lightsview, Adelaide, and South Australia.
            </p>
          </div>

          {/* Quick Nav links */}
          <div className="space-y-4">
            <h4 className="font-serif text-[10px] tracking-[0.2em] uppercase text-champagne-400 font-semibold">
              The Collection Pages
            </h4>
            <ul className="space-y-2.5">
              {[
                { id: 'home', label: 'Home Entrance' },
                { id: 'gallery', label: 'Curated Portfolios' },
                { id: 'services', label: 'Artisan Pricing' },
                { id: 'about', label: 'About Falguni' },
                { id: 'contact', label: 'Bookings & Dates' }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => {
                      onNavigate(link.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="font-sans text-xs text-charcoal-400 hover:text-champagne-300 font-light tracking-wide transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Location & Studio details */}
          <div className="space-y-4">
            <h4 className="font-serif text-[10px] tracking-[0.2em] uppercase text-champagne-400 font-semibold">
              The Lightsview Atelier
            </h4>
            <p className="font-sans text-xs text-charcoal-400 font-light tracking-wide leading-relaxed">
              26 South Pkwy, Northfield SA 5085 <br />
              Lightsview Master-Community <br />
              Adelaide, South Australia
            </p>
            <div className="pt-2">
              <a
                href="https://maps.google.com/?q=26+South+Pkwy,+Northfield+SA+5085"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-wider text-champagne-300 hover:text-champagne-200 transition-colors border border-charcoal-800 hover:border-champagne-500/40 px-3 py-1.5"
              >
                <Compass size={11} />
                Get GPS Directions
              </a>
            </div>
          </div>

          {/* Operating hours & social check-ins */}
          <div className="space-y-4">
            <h4 className="font-serif text-[10px] tracking-[0.2em] uppercase text-champagne-400 font-semibold">
              Studio Consultations
            </h4>
            <ul className="space-y-1.5 font-sans text-xs text-charcoal-400 font-light tracking-wide">
              <li className="flex justify-between border-b border-charcoal-900 pb-1">
                <span>Monday - Friday</span>
                <span className="text-champagne-200 font-mono">09:00 - 18:00</span>
              </li>
              <li className="flex justify-between border-b border-charcoal-900 pb-1">
                <span>Saturday Sessions</span>
                <span className="text-champagne-200 font-mono">10:00 - 16:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday Coverages</span>
                <span className="text-champagne-400 font-mono uppercase text-[9px] font-semibold">By Invitation</span>
              </li>
            </ul>

            {/* Social channels */}
            <div className="pt-3 flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-charcoal-900 hover:bg-charcoal-850 hover:text-champagne-300 transition-colors border border-charcoal-850 text-charcoal-400"
                aria-label="Falguni on Instagram"
              >
                <Instagram size={14} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-charcoal-900 hover:bg-charcoal-850 hover:text-champagne-300 transition-colors border border-charcoal-850 text-charcoal-400"
                aria-label="Falguni on Facebook"
              >
                <Facebook size={14} />
              </a>
            </div>
          </div>

        </div>

        {/* Closing details */}
        <div className="border-t border-charcoal-900 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <p className="font-sans text-[10px] text-charcoal-500 tracking-wider font-light">
            © {currentYear} Falguni's Photography. All rights reserved. Made in South Australia.
          </p>
          <div className="flex gap-4 font-mono text-[9px] text-charcoal-500 tracking-wider">
            <span className="hover:text-champagne-400 cursor-pointer">PRIVACY BLUEPRINT</span>
            <span>•</span>
            <span className="hover:text-champagne-400 cursor-pointer">COMMISSION CONTRACTS</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
