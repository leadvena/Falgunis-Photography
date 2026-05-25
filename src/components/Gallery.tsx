import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Eye, X, Camera, MapPin, Compass, Info, MessageSquareCode } from 'lucide-react';
import { PORTFOLIO_ITEMS } from '../data/portfolioData';
import { PortfolioItem } from '../types';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'newborn' | 'maternity' | 'milestone' | 'family'>('all');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filterOptions = [
    { id: 'all', label: 'All Portfolios' },
    { id: 'newborn', label: 'Newborn Art' },
    { id: 'maternity', label: 'Maternity Silhouettes' },
    { id: 'milestone', label: 'Baby Milestones' },
    { id: 'family', label: 'Family Legacies' }
  ] as const;

  const filteredItems = activeFilter === 'all'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter(item => item.category === activeFilter);

  // Helper to resolve specific layout spans for asymmetric editorial grit
  const getGridSpanClasses = (id: string, idx: number) => {
    switch (id) {
      case 'p1': return 'md:col-span-2 md:row-span-2 aspect-[4/3] md:aspect-auto'; // Big primary hero
      case 'p2': return 'md:col-span-1 md:row-span-2 aspect-[3/4] md:aspect-auto'; // Tall portrait
      case 'p3': return 'md:col-span-1 md:row-span-1 aspect-[4/3] md:aspect-auto'; // standard box
      case 'p4': return 'md:col-span-1 md:row-span-1 aspect-[4/3] md:aspect-auto'; // standard box
      case 'p5': return 'md:col-span-1 md:row-span-1 aspect-[4/3] md:aspect-auto'; // standard box
      case 'p6': return 'md:col-span-1 md:row-span-1 aspect-[4/3] md:aspect-auto'; // standard box
      case 'p7': return 'md:col-span-2 md:row-span-1 aspect-[16/9] md:aspect-auto'; // Wide landscape
      default: return 'md:col-span-1 md:row-span-1 aspect-square md:aspect-auto';
    }
  };

  return (
    <section id="gallery-section" className="py-24 px-6 md:px-12 bg-charcoal-950">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center md:text-left mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-xl">
            <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-champagne-500 mb-3 block">
              Curated Collections
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-champagne-50 font-light leading-tight">
              Capturing Timeless <br />
              <span className="italic text-champagne-300 font-extralight">Bespoke Perspectives</span>
            </h2>
          </div>
          <p className="md:max-w-md font-sans text-xs text-charcoal-300 tracking-wide leading-relaxed font-light text-left md:text-right">
            Every file is a unique curation. We calibrate color grading, natural balance, 
            and precise geometric symmetry to write a classic, luxury editorial about your milestone.
          </p>
        </div>

        {/* Dynamic Filters Bar */}
        <div id="gallery-filters" className="flex flex-wrap justify-center md:justify-start gap-2 mb-12 border-b border-charcoal-800/40 pb-4">
          {filterOptions.map((opt) => (
            <button
              id={`filter-opt-${opt.id}`}
              key={opt.id}
              onClick={() => setActiveFilter(opt.id)}
              className={`px-4 py-2 text-[10px] sm:text-xs font-sans tracking-widest uppercase rounded-none transition-all duration-300 cursor-pointer ${
                activeFilter === opt.id
                  ? 'text-champagne-300 border-b border-champagne-400 font-medium'
                  : 'text-charcoal-400 hover:text-champagne-100'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Asymmetric Portfolio Grid */}
        <motion.div
          id="portfolio-items-grid"
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:auto-rows-[300px]"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                id={`gallery-card-${item.id}`}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className={`relative overflow-hidden group cursor-pointer border border-charcoal-900 bg-charcoal-900 ${getGridSpanClasses(item.id, index)}`}
              >
                {/* Image */}
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                />

                {/* Elegant Overlay */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/70 to-transparent p-6 flex flex-col justify-end translate-y-3 opacity-90 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in-out h-1/2">
                  <div className="flex items-center gap-1.5 text-champagne-300 text-[10px] font-mono uppercase tracking-[0.2em] mb-1.5">
                    <MapPin size={10} />
                    <span>{item.location.split(',')[0]}</span>
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl text-champagne-100 font-normal leading-snug">
                    {item.title}
                  </h3>
                  <div className="flex items-center justify-between mt-4 pb-1 border-t border-charcoal-800/40 pt-3">
                    <span className="font-sans text-[10px] tracking-widest uppercase text-charcoal-400 group-hover:text-champagne-200 transition-colors">
                      View Frame details
                    </span>
                    <Eye size={14} className="text-champagne-400 transform scale-75 group-hover:scale-100 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Luxury Immersive Lightbox Display */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            id="lightbox-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-charcoal-950/98 flex items-center justify-center p-4 sm:p-8 backdrop-blur-md overflow-y-auto"
          >
            {/* Close Button on Top Right of backdrop */}
            <button
              id="lightbox-close-top"
              onClick={() => setSelectedItem(null)}
              className="absolute top-6 right-6 p-3 text-charcoal-400 hover:text-champagne-300 transition-colors z-50 cursor-pointer rounded-full bg-charcoal-900/60 border border-charcoal-800/60"
            >
              <X size={20} />
            </button>

            <motion.div
              id="lightbox-container"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 180 }}
              className="bg-charcoal-900 border border-charcoal-800/80 w-full max-w-5xl rounded-none shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-12 max-h-[90vh] md:max-h-[80vh]"
            >
              {/* Photo Area (Holds 7 columns on desktop) */}
              <div className="relative md:col-span-7 bg-charcoal-950 flex items-center justify-center h-[50vh] md:h-full group">
                <img
                  src={selectedItem.imageUrl}
                  alt={selectedItem.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain max-h-[50vh] md:max-h-[80vh]"
                />
                <div className="absolute top-4 left-4 bg-charcoal-950/60 border border-charcoal-800/60 px-3 py-1 text-[9px] font-mono tracking-widest text-champagne-300 uppercase">
                  Curated Frame
                </div>
              </div>

              {/* Informational Panel (Holds 5 columns) */}
              <div className="md:col-span-5 p-6 sm:p-8 flex flex-col justify-between h-full overflow-y-auto border-t md:border-t-0 md:border-l border-charcoal-800/80">
                <div>
                  {/* Location Tag */}
                  <div className="flex items-center gap-1.5 text-champagne-400 text-[10px] font-mono uppercase tracking-[0.25em] mb-3">
                    <MapPin size={11} />
                    <span>{selectedItem.location}</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-2xl sm:text-3xl text-champagne-150 font-light mb-4">
                    {selectedItem.title}
                  </h3>

                  {/* Review / Story */}
                  <div className="mb-6 pb-6 border-b border-charcoal-800/60 text-charcoal-250">
                    <span className="font-sans text-[10px] tracking-widest text-charcoal-400 uppercase font-medium mb-2 block flex items-center gap-1">
                      <Compass size={11} className="text-champagne-400" />
                      Artistic Direction
                    </span>
                    <p className="font-sans text-xs sm:text-sm font-light leading-relaxed text-charcoal-300 italic">
                      "{selectedItem.story}"
                    </p>
                  </div>

                  {/* Camera Settings Rig Info */}
                  <div className="space-y-4">
                    <span className="font-sans text-[10px] tracking-widest text-charcoal-400 uppercase font-medium block flex items-center gap-1">
                      <Camera size={11} aria-hidden="true" className="text-champagne-400" />
                      Exif Metadata
                    </span>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-3 bg-charcoal-950 p-4 border border-charcoal-800/40">
                      <div>
                        <span className="block text-[8px] font-mono uppercase text-charcoal-500">Camera Body</span>
                        <span className="text-xs font-mono text-champagne-200">{selectedItem.settings.camera}</span>
                      </div>
                      <div>
                        <span className="block text-[8px] font-mono uppercase text-charcoal-500">Optics Line</span>
                        <span className="text-xs font-mono text-champagne-200">{selectedItem.settings.lens}</span>
                      </div>
                      <div>
                        <span className="block text-[8px] font-mono uppercase text-charcoal-500">Aperture</span>
                        <span className="text-xs font-mono text-champagne-200">{selectedItem.settings.aperture}</span>
                      </div>
                      <div>
                        <span className="block text-[8px] font-mono uppercase text-charcoal-500">Exposure</span>
                        <span className="text-xs font-mono text-champagne-200">{selectedItem.settings.shutterSpeed}</span>
                      </div>
                      <div className="col-span-2">
                        <span className="block text-[8px] font-mono uppercase text-charcoal-500">Film Sensitivity (ISO)</span>
                        <span className="text-xs font-mono text-champagne-200">{selectedItem.settings.iso}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Call-to-action */}
                <div className="mt-8 pt-4 border-t border-charcoal-800/60">
                  <a
                    href="#contact"
                    onClick={() => {
                      setSelectedItem(null);
                      // Custom delay to let scroll trigger after modal disappears
                      setTimeout(() => {
                        const target = document.getElementById('contact-section');
                        if (target) target.scrollIntoView({ behavior: 'smooth' });
                      }, 200);
                    }}
                    className="w-full text-center block bg-transparent hover:bg-champagne-500 text-champagne-300 hover:text-charcoal-950 border border-champagne-500/40 hover:border-champagne-500 py-3 text-[10px] font-sans font-semibold tracking-widest uppercase transition-all duration-300"
                  >
                    Discuss a Similar Frame
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
