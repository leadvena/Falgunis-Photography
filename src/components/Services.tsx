import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Plus, Minus, ArrowRight, Sparkles, HelpCircle, Film, BookOpen, Clock, Layers } from 'lucide-react';
import { SERVICE_PACKAGES } from '../data/portfolioData';
import { ServicePackage, ExtraCustomOption } from '../types';

interface ServicesProps {
  onSelectServiceAndExtras: (serviceName: string, basePrice: number, selectedExtras: string[], totalPrice: number) => void;
}

export default function Services({ onSelectServiceAndExtras }: ServicesProps) {
  // Store selected extras by package ID as a set
  const [selectedExtrasByPackage, setSelectedExtrasByPackage] = useState<Record<string, string[]>>({});
  const [activePackageId, setActivePackageId] = useState<string>('s_wedding');

  const handleToggleExtra = (packageId: string, extraId: string) => {
    setSelectedExtrasByPackage((prev) => {
      const current = prev[packageId] || [];
      const updated = current.includes(extraId)
        ? current.filter(id => id !== extraId)
        : [...current, extraId];
      return { ...prev, [packageId]: updated };
    });
  };

  const getPackagePrice = (pkg: ServicePackage) => {
    const selected = selectedExtrasByPackage[pkg.id] || [];
    const extrasPrice = pkg.extraOptions
      .filter(ext => selected.includes(ext.id))
      .reduce((acc, current) => acc + current.price, 0);
    return pkg.basePrice + extrasPrice;
  };

  const activePackage = SERVICE_PACKAGES.find(p => p.id === activePackageId) || SERVICE_PACKAGES[0];

  return (
    <section id="services-section" className="py-24 px-6 md:px-12 bg-charcoal-900/40 border-t border-charcoal-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 animate-fade-in">
          <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-champagne-500 mb-3 block">
            Core Commissions
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-champagne-50 font-light tracking-tight leading-tight mb-4">
            Customizable <span className="italic text-champagne-300 font-extralight">Artistic Services</span>
          </h2>
          <p className="font-sans text-xs sm:text-sm text-charcoal-350 tracking-wide leading-relaxed font-light">
            We provide upfront pricing, customizable options, and crystal-clear inclusions. Use the interactive 
            pricing calculator below to construct a collection scaled precisely to your requirements.
          </p>
        </div>

        {/* Dynamic Service Selection Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16 max-w-4xl mx-auto">
          {SERVICE_PACKAGES.map((pkg) => (
            <button
              id={`service-tab-${pkg.id}`}
              key={pkg.id}
              onClick={() => setActivePackageId(pkg.id)}
              className={`px-5 py-3 text-[10px] sm:text-xs font-sans tracking-widest uppercase transition-all duration-300 border cursor-pointer ${
                activePackageId === pkg.id
                  ? 'bg-champagne-500 text-charcoal-950 font-semibold border-champagne-500 shadow-lg'
                  : 'bg-transparent text-charcoal-300 border-charcoal-800 hover:border-champagne-500/50 hover:text-champagne-200'
              }`}
            >
              {pkg.name.split(' ').slice(1).join(' ') || pkg.name}
            </button>
          ))}
        </div>

        {/* Featured Service Calculator Card */}
        <div id="service-calculator-container" className="bg-charcoal-950 border border-charcoal-800/80 p-6 sm:p-10 md:p-12 shadow-xl relative overflow-hidden">
          {/* Subtle design element */}
          <div className="absolute right-0 top-0 opacity-5 pointer-events-none transform translate-x-12 -translate-y-12">
            <Sparkles size={300} className="text-champagne-400" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative z-10">
            {/* Left Column: Scope Info */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <div className="flex items-center gap-2 text-[10px] tracking-widest text-champagne-400 font-mono uppercase mb-3">
                  <span className="px-2 py-0.5 bg-champagne-500/10 border border-champagne-500/20">
                    {activePackage.category}
                  </span>
                  <span>•</span>
                  <span>PRESTIGE STANDARD</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-4xl text-champagne-100 font-light mb-4">
                  {activePackage.name}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-charcoal-300 tracking-wide font-light leading-relaxed">
                  {activePackage.tagline}
                </p>
              </div>

              {/* Package Meta Specs */}
              <div className="grid grid-cols-2 gap-4 border-y border-charcoal-800/40 py-6">
                <div>
                  <span className="block text-[8px] font-mono uppercase text-charcoal-500">Duration</span>
                  <span className="text-xs sm:text-sm text-champagne-200 font-sans tracking-wider font-light flex items-center gap-1.5 mt-1">
                    <Clock size={13} className="text-champagne-400" />
                    {activePackage.duration}
                  </span>
                </div>
                <div>
                  <span className="block text-[8px] font-mono uppercase text-charcoal-500">Curated Deliverables</span>
                  <span className="text-xs sm:text-sm text-champagne-200 font-sans tracking-wider font-light flex items-center gap-1.5 mt-1">
                    <Layers size={13} className="text-champagne-400" />
                    {activePackage.deliverables}
                  </span>
                </div>
              </div>

              {/* Inclusions checklist */}
              <div>
                <span className="block text-[10px] font-mono uppercase tracking-widest text-champagne-300/80 mb-4 font-semibold">
                  Always Included:
                </span>
                <ul className="space-y-3.5">
                  {activePackage.inclusions.map((inc, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-0.5 rounded-full p-0.5 bg-champagne-500/10 border border-champagne-500/20">
                        <Check size={11} className="text-champagne-400" />
                      </div>
                      <span className="font-sans text-xs text-charcoal-300 font-light tracking-wide">
                        {inc}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: Customizer & Price Calculator */}
            <div className="lg:col-span-5 bg-charcoal-900 border border-charcoal-800/60 p-6 sm:p-8 flex flex-col justify-between h-full">
              <div className="space-y-6">
                <div>
                  <span className="block text-[9px] font-mono uppercase tracking-[0.25em] text-charcoal-400 font-medium mb-1">
                    BESPOKE CUSTOMIZER
                  </span>
                  <h4 className="font-serif text-lg text-champagne-200 font-normal">
                    Enhance Your Collection
                  </h4>
                  <p className="font-sans text-[11px] text-charcoal-400 font-light mt-1">
                    Select additional upgrades to create your unique custom package.
                  </p>
                </div>

                {/* Customizable options list */}
                <div className="space-y-4">
                  {activePackage.extraOptions.map((opt) => {
                    const isChecked = (selectedExtrasByPackage[activePackage.id] || []).includes(opt.id);
                    return (
                      <div
                        id={`extra-card-${opt.id}`}
                        key={opt.id}
                        onClick={() => handleToggleExtra(activePackage.id, opt.id)}
                        className={`p-3.5 border cursor-pointer transition-all duration-300 flex items-start justify-between gap-4 ${
                          isChecked
                            ? 'bg-champagne-500/10 border-champagne-500/60 shadow-inner'
                            : 'bg-charcoal-950 border-charcoal-800/80 hover:border-charcoal-700'
                        }`}
                      >
                        <div className="space-y-1">
                          <h5 className="font-sans text-xs font-semibold tracking-wide text-champagne-105">
                            {opt.name}
                          </h5>
                          <p className="font-sans text-[10px] text-charcoal-400 font-light leading-relaxed">
                            {opt.description}
                          </p>
                        </div>
                        <div className="text-right shrink-0 flex flex-col items-end gap-1.5 pt-0.5">
                          <span className="font-mono text-xs text-champagne-300 font-semibold">
                            +${opt.price}
                          </span>
                          <div className={`w-4 h-4 rounded-none border flex items-center justify-center transition-all ${
                            isChecked
                              ? 'bg-champagne-500 border-champagne-500 text-charcoal-950'
                              : 'border-charcoal-700 bg-charcoal-900'
                          }`}>
                            {isChecked && <Check size={10} className="stroke-[3]" />}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Total Summary */}
              <div className="mt-8 pt-6 border-t border-charcoal-800/80 flex flex-col gap-5">
                <div className="flex justify-between items-end">
                  <div>
                    <span className="block text-[8px] font-mono tracking-widest text-charcoal-400 uppercase">
                      Total Calculated Investment
                    </span>
                    <span className="block text-[10px] font-sans text-charcoal-400 font-light mt-0.5">
                      Base rate + selected custom extras
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="font-mono text-3xl text-champagne-300 font-light leading-none">
                      ${getPackagePrice(activePackage).toLocaleString()}
                    </span>
                    <span className="block text-[8px] font-mono text-charcoal-500 uppercase mt-0.5">
                      AUD Inc. GST
                    </span>
                  </div>
                </div>

                <button
                  id="btn-service-book-cta"
                  onClick={() => {
                    const selExtras = activePackage.extraOptions
                      .filter(ext => (selectedExtrasByPackage[activePackage.id] || []).includes(ext.id))
                      .map(ext => ext.name);
                    const finalPrice = getPackagePrice(activePackage);
                    onSelectServiceAndExtras(activePackage.name, activePackage.basePrice, selExtras, finalPrice);
                  }}
                  className="w-full bg-champagne-500 hover:bg-champagne-400 text-charcoal-950 text-[10px] font-sans font-bold tracking-[0.25em] uppercase py-4 rounded-none border border-champagne-500 hover:border-champagne-400 cursor-pointer shadow-lg hover:shadow-champagne-500/20 text-center flex items-center justify-center gap-2 transition-all duration-300"
                >
                  Configure and Book This Story
                  <ArrowRight size={12} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
