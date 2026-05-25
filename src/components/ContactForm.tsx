import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, Calendar, Clock, MapPin, CheckCircle2, Ticket, Sparkles, Send, RefreshCw, X, HelpCircle } from 'lucide-react';
import { BookingInquiry } from '../types';

interface ContactFormProps {
  selectedService: string | null;
  basePrice: number | null;
  selectedExtras: string[];
  totalPrice: number | null;
  onClearSelection: () => void;
}

export default function ContactForm({
  selectedService,
  basePrice,
  selectedExtras,
  totalPrice,
  onClearSelection
}: ContactFormProps) {
  // Input fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [serviceType, setServiceType] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [message, setMessage] = useState('');

  // Local state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedInquiries, setSubmittedInquiries] = useState<BookingInquiry[]>([]);
  const [showInquiryStatus, setShowInquiryStatus] = useState<BookingInquiry | null>(null);
  const [successVisible, setSuccessVisible] = useState(false);

  // Load inquiries on reload
  useEffect(() => {
    const historical = localStorage.getItem('falgunis_inquiries');
    if (historical) {
      try {
        const parsed = JSON.parse(historical) as BookingInquiry[];
        setSubmittedInquiries(parsed);
      } catch (err) {
        console.warn("Couldn't retrieve historical inquiries data from localstorage");
      }
    }
  }, []);

  // Sync serviceType selection when prop changes
  useEffect(() => {
    if (selectedService) {
      setServiceType(selectedService);
    }
  }, [selectedService]);

  const handleInquirySubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone || !eventDate) {
      alert("Please populate all primary contact details (Name, Email, Phone, Event Date).");
      return;
    }

    setIsSubmitting(true);

    // Simulate luxury-grade processing delay
    setTimeout(() => {
      const uniqueId = `FP-${Date.now().toString().slice(-6)}`;
      const newInquiry: BookingInquiry = {
        id: uniqueId,
        name,
        email,
        phone,
        serviceType: serviceType || 'Unspecified Narrative Session',
        eventDate,
        message: message || 'I look forward to discussing our customized photo session with Falguni.',
        estimatedPrice: totalPrice || (serviceType ? 450 : 0), // fallback pricing if any
        selectedExtras: selectedExtras,
        dateSubmitted: new Date().toLocaleDateString('en-AU', { day: 'numeric', month: 'short', year: 'numeric' }),
        status: 'Pending'
      };

      const updated = [newInquiry, ...submittedInquiries];
      setSubmittedInquiries(updated);
      localStorage.setItem('falgunis_inquiries', JSON.stringify(updated));

      // Reset fields
      setName('');
      setEmail('');
      setPhone('');
      setEventDate('');
      setMessage('');
      onClearSelection();

      setIsSubmitting(false);
      setShowInquiryStatus(newInquiry);
      setSuccessVisible(true);
    }, 1200);
  };

  const handleClearInquiryHistory = () => {
    if (window.confirm("Do you wish to delete your stored historical booking records?")) {
      localStorage.removeItem('falgunis_inquiries');
      setSubmittedInquiries([]);
    }
  };

  return (
    <section id="contact-section" className="py-24 px-6 md:px-12 bg-charcoal-950 relative border-t border-charcoal-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Direct Info, Studio Venue, Stored Enquiries */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-champagne-500 mb-3 block">
                Connect With Us
              </span>
              <h2 className="font-serif text-3xl md:text-5xl text-champagne-50 font-light leading-tight mb-5">
                Reserve Your <br />
                <span className="italic text-champagne-300 font-extralight">Bespoke Session</span>
              </h2>
              <p className="font-sans text-xs sm:text-sm text-charcoal-350 tracking-wide font-light leading-relaxed">
                We accept a strictly restricted amount of wedding and portrait commissions every season to preserve 
                individual focus and flawless post-production. Complete and send your form below.
              </p>
            </div>

            {/* Studio Info List */}
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="p-3 bg-charcoal-900 border border-charcoal-800 shrink-0 text-champagne-400">
                  <MapPin size={16} />
                </div>
                <div>
                  <h4 className="font-serif text-xs tracking-widest text-champagne-200 uppercase font-semibold">
                    The Lightsview Atelier
                  </h4>
                  <p className="font-sans text-xs text-charcoal-400 font-light tracking-wide mt-1">
                    26 South Pkwy, Northfield SA 5085 • South Australia
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="p-3 bg-charcoal-900 border border-charcoal-800 shrink-0 text-champagne-400">
                  <Mail size={16} />
                </div>
                <div>
                  <h4 className="font-serif text-xs tracking-widest text-champagne-200 uppercase font-semibold">
                    Digital Inbox
                  </h4>
                  <button
                    onClick={() => window.location.href = 'mailto:mercuritesolutions@gmail.com'}
                    className="font-mono text-xs text-charcoal-400 font-light hover:text-champagne-300 transition-colors mt-1 block"
                  >
                    mercuritesolutions@gmail.com
                  </button>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="p-3 bg-charcoal-900 border border-charcoal-800 shrink-0 text-champagne-400">
                  <Phone size={16} />
                </div>
                <div>
                  <h4 className="font-serif text-xs tracking-widest text-champagne-200 uppercase font-semibold">
                    Call / WhatsApp Dedicated Line
                  </h4>
                  <a
                    href="tel:+61469753238"
                    className="font-mono text-xs text-charcoal-400 font-light hover:text-champagne-300 transition-colors mt-1 block"
                  >
                    +61 469 753 238
                  </a>
                </div>
              </div>
            </div>

            {/* Live tracking list of submitted bookings inside localStorage */}
            {submittedInquiries.length > 0 && (
              <div id="booking-tracking-card" className="border border-charcoal-850 p-5 bg-charcoal-900/60 rounded-none">
                <div className="flex justify-between items-center mb-4 border-b border-charcoal-800 pb-3">
                  <h4 className="font-serif text-xs tracking-widest text-champagne-300 uppercase font-semibold">
                    Your Inquiries ({submittedInquiries.length})
                  </h4>
                  <button
                    id="btn-clear-inquiries"
                    onClick={handleClearInquiryHistory}
                    className="text-[9px] font-mono tracking-wider text-charcoal-500 hover:text-red-400 transition-colors uppercase border border-charcoal-800 hover:border-red-400/30 px-2 py-1"
                  >
                    Clear Records
                  </button>
                </div>

                <div className="space-y-3.5 max-h-[220px] overflow-y-auto pr-1">
                  {submittedInquiries.map((inq) => (
                    <button
                      id={`stored-inquiry-${inq.id}`}
                      key={inq.id}
                      onClick={() => {
                        setShowInquiryStatus(inq);
                        setSuccessVisible(true);
                      }}
                      className="w-full text-left p-3 border border-charcoal-800/80 hover:border-champagne-500/40 bg-charcoal-950 flex justify-between items-center transition-all cursor-pointer group"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-1.5">
                          <span className="font-mono text-[9px] text-champagne-400 font-semibold">{inq.id}</span>
                          <span className="text-[8px] bg-champagne-500/10 text-champagne-300 px-1 py-0.2 uppercase font-mono">{inq.status}</span>
                        </div>
                        <h5 className="font-sans text-[11px] font-medium text-charcoal-200 uppercase group-hover:text-champagne-200 transition-colors">
                          {inq.serviceType}
                        </h5>
                      </div>
                      <div className="text-right">
                        <span className="font-mono text-[11px] text-champagne-300 font-semibold">${inq.estimatedPrice}</span>
                        <span className="block text-[8px] font-mono text-charcoal-500 uppercase">{inq.eventDate}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Custom Interactive Form */}
          <div className="lg:col-span-7 bg-charcoal-900/60 border border-charcoal-850 p-6 sm:p-10 shadow-2xl relative">
            <h3 className="font-serif text-xl sm:text-2xl text-champagne-150 font-light mb-6">
              Narrative Setup Detail
            </h3>

            {/* Display package configuration recap if user clicked customized package button */}
            {selectedService && (
              <motion.div
                id="preselected-package-summary-card"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8 p-4 bg-champagne-500/5 border border-champagne-500/20 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 relative"
              >
                <div>
                  <span className="block text-[8px] font-mono uppercase text-champagne-400 tracking-wider">
                    ESTIMATED CONTRACT QUOTE CONFIGURED
                  </span>
                  <h4 className="font-serif text-base text-champagne-200 font-medium">
                    {selectedService}
                  </h4>
                  {selectedExtras.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-2">
                      {selectedExtras.map((ext, idx) => (
                        <span key={idx} className="font-mono text-[9px] text-charcoal-400 bg-charcoal-950 border border-charcoal-800 px-1.5 py-0.5 rounded-none">
                          +{ext}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <div className="text-right shrink-0 flex sm:flex-col items-baseline sm:items-end justify-between w-full sm:w-auto border-t sm:border-0 border-charcoal-850 pt-2 sm:pt-0">
                  <span className="font-mono text-xl text-champagne-300 font-semibold">
                    ${totalPrice?.toLocaleString()}
                  </span>
                  <button
                    id="btn-remove-custom-selection"
                    onClick={onClearSelection}
                    className="p-1 px-1.5 text-[8px] font-mono uppercase bg-charcoal-950 text-charcoal-450 hover:text-red-400 hover:border-red-400 bg-transparent transition-colors hover:bg-red-440/10"
                  >
                    Reset Quote
                  </button>
                </div>
              </motion.div>
            )}

            {/* Interactive Form */}
            <form id="contact-booking-form" onSubmit={handleInquirySubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="input-name" className="block text-[10px] font-serif tracking-widest text-champagne-300 uppercase mb-2">
                    Your Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="input-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Margaret Smith"
                    className="w-full bg-charcoal-950 border border-charcoal-800 focus:border-champagne-400 px-4 py-3.5 text-xs text-charcoal-100 placeholder-charcoal-500 rounded-none focus:outline-none transition-colors font-sans"
                  />
                </div>

                <div>
                  <label htmlFor="input-email" className="block text-[10px] font-serif tracking-widest text-champagne-300 uppercase mb-2">
                    Digital Mailing Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="input-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. margaret@luxemail.com"
                    className="w-full bg-charcoal-950 border border-charcoal-800 focus:border-champagne-400 px-4 py-3.5 text-xs text-charcoal-100 placeholder-charcoal-500 rounded-none focus:outline-none transition-colors font-sans"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="input-phone" className="block text-[10px] font-serif tracking-widest text-champagne-300 uppercase mb-2">
                    Telephone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="input-phone"
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. +61 400 000 000"
                    className="w-full bg-charcoal-950 border border-charcoal-800 focus:border-champagne-400 px-4 py-3.5 text-xs text-charcoal-100 placeholder-charcoal-500 rounded-none focus:outline-none transition-colors font-sans"
                  />
                </div>

                <div>
                  <label htmlFor="input-date" className="block text-[10px] font-serif tracking-widest text-champagne-300 uppercase mb-2">
                    Preferred Event / Shoot Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="input-date"
                    type="date"
                    required
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    className="w-full bg-charcoal-950 border border-charcoal-800 focus:border-champagne-400 px-4 py-3 text-xs text-charcoal-100 placeholder-charcoal-500 rounded-none focus:outline-none transition-colors font-mono"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="input-service" className="block text-[10px] font-serif tracking-widest text-champagne-300 uppercase mb-2">
                  Session Silhouette / Theme
                </label>
                <select
                  id="input-service"
                  value={serviceType}
                  onChange={(e) => setServiceType(e.target.value)}
                  className="w-full bg-charcoal-950 border border-charcoal-800 focus:border-champagne-400 px-4 py-3.5 text-xs text-charcoal-100 rounded-none focus:outline-none transition-colors font-sans"
                >
                  <option value="">-- Choose A Beautiful Blueprint --</option>
                  <option value="The Editorial Love Story">Wedding: The Editorial Love Story</option>
                  <option value="The Fine-Art Portraiture">Portrait: The Fine-Art Portraiture</option>
                  <option value="The Living Legacy">Family: The Living Legacy</option>
                  <option value="The Prestige Brand Campaign">Commercial: The Prestige Brand Campaign</option>
                </select>
              </div>

              <div>
                <label htmlFor="input-message" className="block text-[10px] font-serif tracking-widest text-champagne-300 uppercase mb-2">
                  Artistic Vision & Message Details
                </label>
                <textarea
                  id="input-message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  placeholder="Describe your timeline, venue details (e.g. Lightsview, Adelaide Hills, McLaren Vale) or unique artistic desires..."
                  className="w-full bg-charcoal-950 border border-charcoal-800 focus:border-champagne-400 px-4 py-3.5 text-xs text-charcoal-100 placeholder-charcoal-500 rounded-none focus:outline-none transition-colors font-sans resize-none"
                />
              </div>

              <button
                id="btn-submit-contact-form"
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-champagne-500 hover:bg-champagne-400 text-charcoal-950 text-[10px] font-sans font-bold tracking-[0.25em] uppercase py-4 rounded-none cursor-pointer flex items-center justify-center gap-2 border border-champagne-500 disabled:opacity-50 transition-all duration-300 shadow-lg"
              >
                {isSubmitting ? (
                  <>
                    <RefreshCw className="animate-spin" size={12} />
                    Securing Connection...
                  </>
                ) : (
                  <>
                    <Send size={11} />
                    Dispatch Narrative Request
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Inquiry Success Invoice/Slip Card */}
      <AnimatePresence>
        {successVisible && showInquiryStatus && (
          <motion.div
            id="success-invoice-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-charcoal-950/95 flex items-center justify-center p-4 backdrop-blur-md overflow-y-auto"
          >
            <motion.div
              id="success-invoice-card"
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="bg-charcoal-900 border border-charcoal-800 w-full max-w-lg p-6 sm:p-8 relative text-left shadow-2xl overflow-y-auto max-h-[90vh]"
            >
              {/* Close Button */}
              <button
                id="btn-close-invoice"
                onClick={() => {
                  setSuccessVisible(false);
                  setShowInquiryStatus(null);
                }}
                className="absolute top-4 right-4 p-2 text-charcoal-500 hover:text-champagne-300 transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>

              <div className="text-center mb-6">
                <div className="w-12 h-12 bg-champagne-500/10 border border-champagne-500/30 rounded-full flex items-center justify-center mx-auto mb-3 text-champagne-400">
                  <CheckCircle2 size={24} />
                </div>
                <span className="font-mono text-[9px] tracking-widest text-champagne-400 uppercase">
                  COMMISSION INQUIRY CONFIRMED
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-champagne-100 font-light mt-1">
                  Bespoke Voucher Sent
                </h3>
                <p className="font-sans text-[11px] text-charcoal-400 mt-1 font-light">
                  A digital summary has been cached in your local secure browser storage.
                </p>
              </div>

              {/* Receipt Body */}
              <div className="bg-charcoal-950 border border-charcoal-850 p-5 space-y-4 font-mono text-xs text-charcoal-300">
                <div className="flex justify-between border-b border-charcoal-850 pb-2">
                  <span className="text-charcoal-500 uppercase text-[9px]">Receipt Identification</span>
                  <span className="text-champagne-300 font-bold">{showInquiryStatus.id}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-charcoal-500 uppercase text-[9px]">Inquirer</span>
                  <span className="text-charcoal-200">{showInquiryStatus.name}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-charcoal-500 uppercase text-[9px]">Shoot Date Request</span>
                  <span className="text-charcoal-200">{showInquiryStatus.eventDate}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-charcoal-500 uppercase text-[9px]">Scope Blueprint</span>
                  <span className="text-charcoal-200 text-right max-w-[200px] truncate">{showInquiryStatus.serviceType}</span>
                </div>

                {showInquiryStatus.selectedExtras.length > 0 && (
                  <div className="border-t border-charcoal-850 pt-2">
                    <span className="block text-charcoal-500 uppercase text-[9px] mb-1">Tailored Options Checklist:</span>
                    <ul className="space-y-1 pl-2">
                      {showInquiryStatus.selectedExtras.map((ext, i) => (
                        <li key={i} className="text-[10px] text-champagne-400/80">• {ext}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="flex justify-between border-t border-charcoal-850 pt-3">
                  <span className="text-charcoal-500 uppercase text-[9px] font-bold">Invested Estimate</span>
                  <span className="text-champagne-300 text-base font-bold">${showInquiryStatus.estimatedPrice} AUD</span>
                </div>

                <div className="flex justify-between border-t border-charcoal-850 pt-3 flex-col sm:flex-row gap-2">
                  <span className="text-charcoal-500 uppercase text-[9px]">Calibration Status</span>
                  <span className="text-[10px] text-champagne-300 font-bold bg-champagne-500/10 px-2.5 py-0.5 border border-champagne-400/20 uppercase rounded-none self-start sm:self-auto text-center font-sans tracking-widest animate-pulse">
                    ● Pending Partner Review
                  </span>
                </div>
              </div>

              {/* Instructions on next steps */}
              <div className="mt-5 space-y-2">
                <span className="font-serif text-[11px] text-champagne-300 font-semibold uppercase block">
                  What Happens Next?
                </span>
                <p className="font-sans text-[11px] text-charcoal-400 font-light leading-relaxed">
                  Falguni will examine your shoot parameters within 1 business day. We will email or call you to discuss scheduling, coffee scouting times, and curate your bespoke photoshoot guide!
                </p>
              </div>

              <div className="mt-8">
                <button
                  id="btn-dismiss-invoice-box"
                  onClick={() => {
                    setSuccessVisible(false);
                    setShowInquiryStatus(null);
                  }}
                  className="w-full text-center block bg-champagne-500 hover:bg-champagne-400 text-charcoal-950 font-sans text-xs font-bold tracking-widest uppercase py-3.5 rounded-none transition-colors cursor-pointer"
                >
                  Return to Portfolio
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
