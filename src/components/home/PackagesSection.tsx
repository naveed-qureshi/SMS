import React from 'react';
import { Check, Sparkles, MessageSquare, ArrowRight, HelpCircle, ShieldCheck } from 'lucide-react';
import { PACKAGES_DATA, getWhatsAppUrl } from '../../data/packages';

interface PackagesSectionProps {
  onSelectPackage?: (packageId: string) => void;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({ onSelectPackage }) => {
  const [selectedId, setSelectedId] = React.useState<string>('ecommerce-solution');

  const handleSelect = (pkgId: string) => {
    setSelectedId(pkgId);
    if (onSelectPackage) {
      onSelectPackage(pkgId);
    }
  };

  return (
    <section id="solutions" className="py-24 bg-navy-900 border-b border-navy-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-sms/15 border border-orange-sms/30 text-orange-sms font-bold text-xs uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Tailored Digital Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Tailored Solutions Built for Your Business
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed font-normal">
            Every business has unique operational needs. Click any solution below to explore tailored capabilities and scope options.
          </p>
        </div>

        {/* 5 Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 items-stretch">
          {PACKAGES_DATA.map((pkg) => {
            const isSelected = pkg.id === selectedId;

            return (
              <div
                key={pkg.id}
                onClick={() => handleSelect(pkg.id)}
                className={`relative rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between cursor-pointer group ${
                  isSelected
                    ? 'bg-navy-950 text-white shadow-2xl border-2 border-orange-sms ring-4 ring-orange-sms/20 scale-100 lg:-translate-y-2 z-10'
                    : 'bg-navy-950/80 hover:bg-navy-900/90 text-slate-100 border border-navy-800 hover:border-slate-600 shadow-lg hover:shadow-2xl'
                }`}
              >
                {/* Badge */}
                {pkg.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className={`text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1 ${
                      isSelected
                        ? 'bg-gradient-to-r from-orange-sms to-amber-500 text-white shadow-md'
                        : 'bg-navy-800 text-slate-300 border border-navy-700'
                    }`}>
                      {isSelected && <Sparkles className="w-3 h-3 text-white" />}
                      {pkg.badge}
                    </span>
                  </div>
                )}

                <div>
                  {/* Title & Target Audience */}
                  <div className="pt-2 mb-4">
                    <h3 className={`text-xl font-extrabold tracking-tight ${isSelected ? 'text-white' : 'text-slate-100 group-hover:text-white'}`}>
                      {pkg.name}
                    </h3>
                    <p className={`text-xs mt-1 leading-snug ${isSelected ? 'text-orange-200/90' : 'text-slate-400'}`}>
                      For {pkg.targetAudience}
                    </p>
                  </div>

                  {/* Scope Badge */}
                  <div className={`py-3 px-4 rounded-xl mb-5 ${isSelected ? 'bg-navy-900 border border-orange-sms/40 shadow-inner' : 'bg-navy-900/80 border border-navy-800'}`}>
                    <div className={`text-[11px] font-semibold ${isSelected ? 'text-orange-300' : 'text-slate-400'}`}>Pricing Model</div>
                    <div className="flex items-baseline gap-1">
                      <span className={`text-lg lg:text-xl font-extrabold tracking-tight ${isSelected ? 'text-orange-sms' : 'text-slate-100'}`}>
                        {pkg.price}
                      </span>
                    </div>
                  </div>

                  {/* Tagline */}
                  <p className={`text-xs leading-relaxed mb-5 ${isSelected ? 'text-slate-200' : 'text-slate-300'}`}>
                    {pkg.tagline}
                  </p>

                  {/* Feature Checklist */}
                  <div className="space-y-2.5 pt-2 border-t border-navy-800">
                    <div className={`text-[11px] font-bold uppercase tracking-wider ${isSelected ? 'text-orange-400' : 'text-slate-400'}`}>
                      Core Capabilities:
                    </div>
                    <ul className="space-y-2">
                      {pkg.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs">
                          <Check className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                            isSelected ? 'text-orange-sms' : 'text-emerald-400'
                          }`} />
                          <span className={`${feat.highlighted ? (isSelected ? 'font-bold text-white' : 'font-bold text-slate-100') : (isSelected ? 'text-slate-200' : 'text-slate-300')}`}>
                            {feat.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA Action */}
                <div className="pt-6 mt-6 border-t border-navy-800 space-y-2">
                  <a
                    href={getWhatsAppUrl(`Hi Smart Multi Solutions team, I want to request a tailored quote for: ${pkg.name}. Can we discuss the scope?`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className={`w-full py-3 px-4 rounded-xl text-xs font-extrabold transition-all duration-200 flex items-center justify-center gap-2 ${
                      isSelected
                        ? 'bg-gradient-to-r from-orange-sms to-orange-sms-hover text-white shadow-lg hover:shadow-orange-sms/30 hover:scale-[1.02]'
                        : 'bg-navy-800 hover:bg-navy-750 text-slate-200 hover:text-white border border-navy-700'
                    }`}
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>{pkg.ctaText}</span>
                  </a>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSelect(pkg.id);
                      const el = document.getElementById('consultation-wizard');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`w-full py-2 text-center text-xs font-semibold rounded-lg transition ${
                      isSelected ? 'text-orange-300 hover:text-white font-bold' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Discuss in Wizard →
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Custom Scope Help Banner */}
        <div className="mt-16 bg-navy-900 rounded-2xl p-6 sm:p-10 text-white shadow-xl border border-navy-700 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 text-xs text-orange-sms font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>100% Customized Proposals</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold">
              Need a completely bespoke technical or marketing solution?
            </h3>
            <p className="text-sm text-slate-300 max-w-2xl">
              We engineer custom workflows matching your exact inventory size, backend APIs, payment integrations, or enterprise operations.
            </p>
          </div>
          <a
            href={getWhatsAppUrl("Hi Smart Multi Solutions, I have custom business requirements. I would like to get a tailored consultation.")}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-8 py-4 rounded-xl text-sm font-extrabold text-navy-900 bg-white hover:bg-slate-100 shadow-lg hover:shadow-xl transition flex items-center gap-2"
          >
            <MessageSquare className="w-4 h-4 text-emerald-600" />
            <span>Speak with a Consultant</span>
          </a>
        </div>

      </div>
    </section>
  );
};
