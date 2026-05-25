import { motion } from 'motion/react';
import { ChevronDown, Star, Calendar, ArrowRight } from 'lucide-react';
import { HERO_IMAGE } from '../data/portfolioData';

interface HeroProps {
  onPortfolioCall: () => void;
  onBookingCall: () => void;
}

export default function Hero({ onPortfolioCall, onBookingCall }: HeroProps) {
  return (
    <section
      id="hero-section"
      className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-charcoal-950"
    >
      {/* Background Image with Dramatic Ken Burns Zoom Effect */}
      <div className="absolute inset-0 z-0">
        <motion.div
          id="hero-image-zoom"
          animate={{
            scale: [1.02, 1.08],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeOut",
          }}
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${HERO_IMAGE})`,
          }}
        />
        {/* Soft, multi-layered vignette and dark luxury overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/40 to-charcoal-950/50 z-10" />
        <div className="absolute inset-0 bg-charcoal-950/30 mix-blend-multiply z-10" />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center flex flex-col items-center select-none pt-12">
        {/* Subtle Luxury Category Intro */}
        <motion.div
          id="hero-intro-badge"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="flex items-center space-x-2 bg-champagne-500/10 border border-champagne-300/20 backdrop-blur-md px-4 py-2 rounded-full mb-6"
        >
          <span className="font-mono text-[10px] tracking-[0.3em] text-champagne-300 uppercase">
            Bespoke Light-Artists SA
          </span>
          <span className="h-1 w-1 bg-champagne-400 rounded-full" />
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, idx) => (
              <Star key={idx} size={9} className="fill-champagne-400 stroke-none" />
            ))}
          </div>
        </motion.div>

        {/* Cinematic Main Title */}
        <motion.h1
          id="hero-lead-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.4 }}
          className="font-serif text-5xl sm:text-7xl md:text-8xl text-champagne-50 font-light tracking-tight leading-tight mb-6"
        >
          Bespoke Frames <br className="hidden sm:inline" />
          <span className="italic text-champagne-300 font-extralight">For Eternal Stories</span>
        </motion.h1>

        {/* Elegant Tagline */}
        <motion.p
          id="hero-tagline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.7 }}
          className="max-w-2xl text-charcoal-200 text-sm sm:text-lg font-sans font-light tracking-wide leading-relaxed mb-10"
        >
          Award-winning editorial and luxury photography in South Australia. 
          Preserving pristine, high-fashion moments of weddings, fine art portraits, 
          and brand campaigns. Crafted by Falguni.
        </motion.p>

        {/* Action CTAs */}
        <motion.div
          id="hero-cta-wrapper"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md"
        >
          <button
            id="hero-cta-book"
            onClick={onBookingCall}
            className="w-full sm:w-auto bg-champagne-500 hover:bg-champagne-400 text-charcoal-950 font-sans text-xs font-semibold tracking-[0.2em] uppercase py-4 px-8 rounded-none transition-all duration-300 flex items-center justify-center gap-2 border border-champagne-500 cursor-pointer shadow-lg hover:shadow-champagne-500/20"
          >
            <Calendar size={13} />
            Reserve A Date
          </button>
          
          <button
            id="hero-cta-portfolio"
            onClick={onPortfolioCall}
            className="w-full sm:w-auto bg-transparent hover:bg-charcoal-500/10 text-champagne-100 font-sans text-xs font-semibold tracking-[0.2em] uppercase py-4 px-8 rounded-none transition-all duration-300 flex items-center justify-center gap-2 border border-charcoal-700 hover:border-champagne-400 cursor-pointer"
          >
            View Curated Works
            <ArrowRight size={13} />
          </button>
        </motion.div>
      </div>

      {/* Floating Animated Scroll Down Navigation Indicator */}
      <div className="absolute bottom-10 left-10 z-20 hidden md:block">
        <div className="flex items-center space-x-3">
          <span className="font-mono text-[9px] tracking-[0.4em] uppercase text-charcoal-400">
            Lightsview • Adelaide
          </span>
          <div className="h-[1px] w-12 bg-charcoal-700" />
        </div>
      </div>

      <motion.div
        id="hero-scroll-indicator"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
        onClick={onPortfolioCall}
        className="absolute bottom-8 cursor-pointer z-20 p-2 rounded-full border border-charcoal-800 text-champagne-300 hover:text-champagne-100 hover:border-champagne-500 transition-all duration-300"
      >
        <ChevronDown size={18} />
      </motion.div>
    </section>
  );
}
