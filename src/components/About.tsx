import { motion } from 'motion/react';
import { Award, Camera, Heart, CheckCircle2, ShieldAlert } from 'lucide-react';
import { FALGUNI_PORTRAIT } from '../data/portfolioData';

export default function About() {
  const coreValues = [
    {
      title: 'Certified Safety & Calm',
      desc: 'As a certified and fully immunized newborn handler, your baby’s safety and absolute comfort are my primary directives. Our custom-designed Lightsview studio is meticulously sanitized, temperature-regulated to a soothing 26°C, and paired with custom white-noise environments.'
    },
    {
      title: 'Bespoke Organic Textures',
      desc: 'I carefully procure organic merino wool wraps, pure heritage silks, and hand-crafted willow nests from curated global artisans, ensuring your infant rests on elements of unparalleled luxury and tenderness.'
    },
    {
      title: 'Choreographed Tenderness',
      desc: 'While I orchestrate classic editorial alignments, the raw, unscripted in-between breaths—micro-curls of tiny fingers, soft yawns, and a mother’s peaceful exhale—form the true soulful core of your luxury album.'
    }
  ];

  return (
    <section id="about-section" className="py-24 px-6 md:px-12 bg-charcoal-950 border-t border-charcoal-900 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          {/* Left Column: Portrait under luxury editorial frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, rotate: -2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              className="relative p-4 bg-charcoal-900 border border-charcoal-800 shadow-2xl skew-y-1 hover:skew-y-0 transition-transform duration-500"
            >
              <div className="relative">
                <img
                  src={FALGUNI_PORTRAIT}
                  alt="Portrait of Falguni"
                  referrerPolicy="no-referrer"
                  className="w-full max-w-[360px] aspect-[3/4] object-cover transition-all duration-700 hover:scale-[1.02]"
                />
                {/* Thin elegant frame overlay */}
                <div className="absolute inset-2 border border-champagne-400/40 pointer-events-none" />
              </div>

              {/* Polaroid-style margin caption */}
              <div className="pt-6 pb-2 text-center select-none">
                <span className="font-serif text-charcoal-100 text-lg leading-relaxed block tracking-wider font-light">
                  Falguni
                </span>
                <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-champagne-500 mt-1 block">
                  CHIEF IMAGE-ARTIST, SA
                </span>
              </div>
            </motion.div>

            {/* Absolute element block behind */}
            <div className="absolute -left-6 -bottom-6 w-32 h-32 bg-champagne-500/10 pointer-events-none z-0 border border-champagne-400/10" />
          </div>

          {/* Right Column: Bio Content */}
          <div className="lg:col-span-7 space-y-8 relative z-10">
            <div>
              <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-champagne-500 mb-3 block">
                The Storyteller
              </span>
              <h2 className="font-serif text-3xl md:text-5xl text-champagne-50 font-light tracking-tight leading-tight mb-5">
                Chasing Shadows in <br />
                <span className="italic text-champagne-300 font-extralight">South Australia</span>
              </h2>
              <div className="h-[1px] w-20 bg-champagne-500/60 mb-6" />
            </div>

            <div className="font-sans text-xs sm:text-sm text-charcoal-300 font-light tracking-wide leading-relaxed space-y-4">
              <p>
                Hello, I am Falguni. My love affair with capturing beginning chapters started in the heritage vineyard valleys of South Australia, 
                where I discovered how a fleeting moment of pure, raw connection could write a family's eternal narrative. 
                Today, I call the beautiful, master-planned suburb of <strong className="text-champagne-200">Lightsview, South Australia</strong> my home and creative headquarters.
              </p>
              <p>
                My working signature lies in the intersection of <strong className="text-champagne-200">fine art newborn photography, organic light curation, and safety-first luxury styling</strong>. 
                My style is heavily inspired by classical European minimalism and heritage aesthetic layouts—focusing on 
                candid micro-movements, tiny features, and the serene, quiet elegance of new life.
              </p>
              <p>
                At my climate-controlled, fully-equipped Lightsview studio, I design a custom, peaceful sanctuary where mothers feel like goddesses during maternity sessions 
                and infants sleep in safety-certified bliss. My ultimate quest remains unchanged: 
                to hand-craft timeless, breathtaking legacy publications for families who appreciate the luxury of details.
              </p>
            </div>

            {/* Core Values Rows */}
            <div className="border-t border-charcoal-800/40 pt-8 mt-5 space-y-6">
              {coreValues.map((val, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="shrink-0 pt-0.5">
                    <CheckCircle2 size={13} className="text-champagne-400" />
                  </div>
                  <div>
                    <h4 className="font-serif text-sm tracking-wider text-champagne-200 font-medium uppercase">
                      {val.title}
                    </h4>
                    <p className="font-sans text-xs text-charcoal-405 font-light tracking-wide mt-1 leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Gear Rig Callout */}
            <div className="bg-charcoal-900 border border-charcoal-800/60 p-5 mt-4 flex items-start gap-4">
              <Camera size={18} className="text-champagne-400 shrink-0 mt-0.5" />
              <div>
                <span className="block font-mono text-[9px] tracking-widest text-charcoal-450 uppercase mb-1">
                  Inside the Studio Bag:
                </span>
                <p className="font-sans text-[11px] text-charcoal-350 tracking-wider font-light">
                  Dual high-megapixel Sony Alpha 7R V full-frame systems, G-Master prime lenses (35mm f/1.4, 50mm f/1.2, 85mm f/1.4), luxury Profoto strobe lighting, and custom-bound velvet layout catalogs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
