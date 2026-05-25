import { Star, ShieldCheck, Camera, HelpCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function SocialProof() {
  const highlights = [
    {
      icon: <HelpCircle className="text-champagne-400 stroke-1" size={20} />,
      label: '5-Star Curated Artisan',
      text: 'As Seen on Google Reviews'
    },
    {
      icon: (
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={13} className="fill-champagne-400 stroke-none" />
          ))}
        </div>
      ),
      label: '5.0 Rating • 53 Reviews',
      text: 'Every single client review rated 5/5 stars'
    },
    {
      icon: <ShieldCheck className="text-champagne-400 stroke-1" size={20} />,
      label: 'Adelaide & SA Coverages',
      text: 'Bespoke location commissions'
    }
  ];

  return (
    <section id="social-proof-strip" className="relative bg-charcoal-900 border-y border-charcoal-800/60 py-10 z-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 items-center">
          {highlights.map((hl, idx) => (
            <motion.div
              id={`social-badge-${idx}`}
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="flex flex-col items-center text-center p-4"
            >
              <div className="mb-3 p-2 bg-charcoal-950/60 rounded-full border border-charcoal-800/40">
                {hl.icon}
              </div>
              <h3 className="font-serif text-sm tracking-[0.15em] text-champagne-300 uppercase font-medium">
                {hl.label}
              </h3>
              <p className="font-sans text-[11px] text-charcoal-400 tracking-wider mt-1 font-light">
                {hl.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
