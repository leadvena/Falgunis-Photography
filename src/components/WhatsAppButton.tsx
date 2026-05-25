import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const phoneNumber = '61469753238'; // Australia prefix, no +
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hello%20Falguni%2C%20I%20am%2520interested%20in%20booking%20a%20luxury%20photography%20session%20with%20you.%20Could%20we%20connect%3F`;

  return (
    <div className="fixed bottom-6 right-6 z-40 group select-none">
      {/* Dynamic Hover Tooltip */}
      <div className="absolute right-14 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none mr-2">
        <div className="bg-charcoal-900 border border-charcoal-850 px-3.5 py-1.5 shadow-xl">
          <span className="font-sans text-[10px] text-champagne-300 tracking-widest font-semibold uppercase whitespace-nowrap">
            WhatsApp Falguni
          </span>
        </div>
      </div>

      <motion.a
        id="whatsapp-floating-button"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', delay: 1.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-12 h-12 rounded-full bg-champagne-500 text-charcoal-950 flex items-center justify-center shadow-lg hover:bg-champagne-400 border border-champagne-400 group-hover:shadow-champagne-500/20 cursor-pointer"
        aria-label="Contact Falguni on WhatsApp"
      >
        <MessageCircle size={22} className="stroke-[2.5]" />
        
        {/* Pulsing halo ring */}
        <span className="absolute -inset-1 rounded-full border border-champagne-500/30 animate-ping opacity-40 pointer-events-none" />
      </motion.a>
    </div>
  );
}
