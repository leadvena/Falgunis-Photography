import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Star, Quote, Compass } from 'lucide-react';
import { CLIENT_REVIEWS } from '../data/portfolioData';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(() => {
      handleNext();
    }, 7000); // Premium slow rotation
    return () => clearInterval(interval);
  }, [currentIndex, autoplay]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % CLIENT_REVIEWS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + CLIENT_REVIEWS.length) % CLIENT_REVIEWS.length);
  };

  const activeReview = CLIENT_REVIEWS[currentIndex];

  return (
    <section id="testimonials-section" className="py-24 px-6 md:px-12 bg-charcoal-900/20 border-t border-charcoal-900 relative overflow-hidden">
      {/* Visual Accents */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 opacity-5 pointer-events-none hidden lg:block">
        <Quote size={200} className="text-champagne-500 fill-none" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-champagne-500 mb-3 block">
            Love Letters
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-champagne-50 font-light leading-tight">
            Loved by <span className="italic text-champagne-300 font-extralight">Fifty-Three Clients</span>
          </h2>
          <div className="flex items-center justify-center gap-1.5 mt-4">
            <span className="font-mono text-[10px] tracking-wider text-charcoal-400 uppercase">
              RELIABLE 5.0 RATING ON GOOGLE REVIEWS
            </span>
            <span className="h-1 w-1 bg-champagne-500 rounded-full" />
            <div className="flex text-champagne-500 text-xs">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={11} className="fill-current" />
              ))}
            </div>
          </div>
        </div>

        {/* Carousel Holder with Framer Motion transitions */}
        <div
          id="testimonial-carousel-slider"
          className="relative min-h-[340px] flex flex-col justify-between"
          onMouseEnter={() => setAutoplay(false)}
          onMouseLeave={() => setAutoplay(true)}
        >
          {/* Active Review Box */}
          <div className="w-full flex flex-col items-center text-center px-4 sm:px-12">
            <AnimatePresence mode="wait">
              <motion.div
                id={`testimonial-${activeReview.id}`}
                key={activeReview.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="space-y-6"
              >
                {/* Visual Stars */}
                <div className="flex justify-center text-champagne-500 gap-1">
                  {[...Array(activeReview.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-champagne-500 stroke-none" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="font-serif text-base sm:text-lg md:text-xl text-champagne-105 font-light leading-relaxed italic max-w-3xl">
                  "{activeReview.reviewText}"
                </p>

                {/* Client Info Tag */}
                <div className="pt-4">
                  <div className="font-sans text-xs sm:text-sm tracking-[0.1em] text-champagne-300 font-semibold uppercase">
                    {activeReview.author}
                  </div>
                  <div className="flex items-center justify-center gap-2 mt-1.5 text-[10px] font-mono tracking-wider text-charcoal-400 uppercase">
                    <span>{activeReview.serviceType}</span>
                    <span className="h-1 w-1 bg-charcoal-700 rounded-full" />
                    <span>{activeReview.location}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls Bar */}
          <div className="flex items-center justify-between max-w-xs mx-auto w-full mt-12 border-t border-charcoal-800/60 pt-6">
            <button
              id="testimonial-prev-arrow"
              onClick={handlePrev}
              className="p-3 border border-charcoal-800 text-charcoal-400 hover:text-champagne-300 hover:border-champagne-500 transition-all cursor-pointer rounded-full bg-charcoal-950/40"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={16} />
            </button>

            {/* Slides Indicator Bullets */}
            <div className="flex gap-2">
              {CLIENT_REVIEWS.map((_, idx) => (
                <button
                  id={`testimonial-bullet-${idx}`}
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-1.5 transition-all ${
                    idx === currentIndex ? 'w-6 bg-champagne-500' : 'w-1.5 bg-charcoal-800 hover:bg-charcoal-700'
                  } rounded-full cursor-pointer`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              id="testimonial-next-arrow"
              onClick={handleNext}
              className="p-3 border border-charcoal-800 text-charcoal-400 hover:text-champagne-300 hover:border-champagne-500 transition-all cursor-pointer rounded-full bg-charcoal-950/40"
              aria-label="Next testimonial"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
