import React, { useState } from 'react';
import { 
  Check, Sparkles, ArrowRight, MessageSquare, 
  HelpCircle, ShieldCheck, Plus, Layers, Sliders, CheckCircle2 
} from 'lucide-react';
import { PACKAGES_DATA, COMPARISON_DIMENSIONS, getWhatsAppUrl, COMPANY_CONTACT } from '../data/packages';
import { PackageComparison } from '../components/home/PackageComparison';
import { ClientLogos } from '../components/home/ClientLogos';

export const PackagesPage: React.FC = () => {
  const [selectedModules, setSelectedModules] = useState<string[]>([]);
  const [selectedPackageId, setSelectedPackageId] = useState<string>('ecommerce-solution');

  const specializedModules = [
    { id: 'custom-domain', name: '.PK / .COM Official Domain & Cloud Business Email' },
    { id: 'brand-identity', name: 'Brand Identity, Typography & Vector Design Kit' },
    { id: 'custom-ui', name: 'Bespoke Custom UI/UX & Responsive Web Architecture' },
    { id: 'speed-cdn', name: 'Global CDN, Caching & Nitro Performance Optimization' },
    { id: 'ecommerce-engine', name: 'WooCommerce / Shopify E-Commerce Store & Payment Gateways' },
    { id: 'courier-sync', name: 'Automated Courier (Trax / Leopards / M&P) & COD Dispatch' },
    { id: 'ai-video-ads', name: 'AI Generated Video Ads for Meta, TikTok & YouTube' },
    { id: 'ai-chatbot', name: '24/7 AI-Powered WhatsApp & Web Chatbot Integration' },
    { id: 'seo-dominance', name: 'Search Engine Optimization (SEO) & Google Map Ranking' },
    { id: 'bi-dashboards', name: 'Real-Time Executive Dashboards & Automated Invoicing' },
  ];

  const toggleModule = (id: string) => {
    setSelectedModules(prev => 
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  return (
    <div className="bg-navy-950 text-slate-100 min-h-screen pt-24 pb-20">
      
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-gradient-to-b from-navy-900 to-navy-950 py-16 sm:py-24 border-b border-navy-800">
        <div className="absolute inset-0 bg-grid-dark-pattern opacity-15 pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-400 bg-orange-500/10 px-3.5 py-1 rounded-full border border-orange-500/20">
            Tailored Scopes • 100% Bespoke Execution
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            Tailored Digital Solutions & <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">Capabilities</span>
          </h1>
          <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Every company has distinct goals. We scope, architect, and deliver digital solutions customized to your business stage, technical needs, and timeline.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs font-bold text-slate-300">
            <span className="flex items-center gap-1.5 bg-navy-900/90 px-3 py-1.5 rounded-lg border border-navy-700 shadow-sm">
              <ShieldCheck className="w-4 h-4 text-emerald-400" /> Custom Tailored Scopes
            </span>
            <span className="flex items-center gap-1.5 bg-navy-900/90 px-3 py-1.5 rounded-lg border border-navy-700 shadow-sm">
              <Check className="w-4 h-4 text-emerald-400" /> Post-Launch Training & Handover Included
            </span>
            <span className="flex items-center gap-1.5 bg-navy-900/90 px-3 py-1.5 rounded-lg border border-navy-700 shadow-sm">
              <Check className="w-4 h-4 text-emerald-400" /> 100% Data & Code Ownership
            </span>
          </div>
        </div>
      </section>

      {/* Featured Client Logos */}
      <ClientLogos />

      {/* 5 Solutions Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Explore Core Capability Pillars
          </h2>
          <p className="text-sm text-slate-400">
            Select a solution pillar to review core capabilities or request a customized proposal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 items-stretch">
          {PACKAGES_DATA.map((pkg) => {
            const isSelected = pkg.id === selectedPackageId;

            return (
              <div
                key={pkg.id}
                onClick={() => setSelectedPackageId(pkg.id)}
                className={`relative rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between cursor-pointer group ${
                  isSelected
                    ? 'bg-navy-900/95 text-white shadow-2xl border-2 border-orange-500 ring-4 ring-orange-500/20 scale-100 lg:-translate-y-2 z-10'
                    : 'bg-navy-900/80 backdrop-blur-sm text-slate-200 border border-navy-800 shadow-xl hover:shadow-2xl hover:border-slate-600'
                }`}
              >
                {pkg.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className={`text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1 ${
                      isSelected
                        ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md'
                        : 'bg-navy-800 text-slate-300 border border-navy-700'
                    }`}>
                      {isSelected && <Sparkles className="w-3 h-3 text-white" />}
                      {pkg.badge}
                    </span>
                  </div>
                )}

                <div>
                  <div className="pt-2 mb-4">
                    <h3 className={`text-xl font-extrabold tracking-tight ${isSelected ? 'text-white' : 'text-slate-100 group-hover:text-white'}`}>
                      {pkg.name}
                    </h3>
                    <p className={`text-xs mt-1 leading-snug ${isSelected ? 'text-orange-200/90' : 'text-slate-400'}`}>
                      For {pkg.targetAudience}
                    </p>
                  </div>

                  <div className={`py-3 px-4 rounded-xl mb-5 ${isSelected ? 'bg-navy-800/90 border border-orange-500/40' : 'bg-navy-950/80 border border-navy-800'}`}>
                    <div className={`text-[11px] font-semibold ${isSelected ? 'text-orange-300' : 'text-slate-400'}`}>Pricing Model</div>
                    <div className="flex items-baseline gap-1">
                      <span className={`text-base lg:text-lg font-extrabold tracking-tight ${isSelected ? 'text-orange-400' : 'text-white'}`}>
                        {pkg.price}
                      </span>
                    </div>
                  </div>

                  <p className={`text-xs leading-relaxed mb-5 ${isSelected ? 'text-slate-200' : 'text-slate-300'}`}>
                    {pkg.tagline}
                  </p>

                  <div className="space-y-2.5 pt-2 border-t border-navy-800">
                    <div className={`text-[11px] font-bold uppercase tracking-wider ${isSelected ? 'text-orange-400' : 'text-slate-400'}`}>
                      Core Capabilities:
                    </div>
                    <ul className="space-y-2">
                      {pkg.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs">
                          <Check className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${isSelected ? 'text-orange-400' : 'text-emerald-400'}`} />
                          <span className={feat.highlighted ? (isSelected ? 'font-bold text-white' : 'font-bold text-slate-100') : (isSelected ? 'text-slate-200' : 'text-slate-300')}>
                            {feat.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-navy-800">
                  <a
                    href={getWhatsAppUrl(`Hi Smart Multi Solutions team, I want to request a customized quote for: ${pkg.name}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className={`w-full py-3 px-4 rounded-xl text-xs font-extrabold transition-all duration-200 flex items-center justify-center gap-2 ${
                      isSelected
                        ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg hover:shadow-orange-500/25 hover:scale-[1.02]'
                        : 'bg-navy-800 hover:bg-navy-750 text-white border border-navy-700'
                    }`}
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>{pkg.ctaText}</span>
                  </a>
                </div>

              </div>
            );
          })}
        </div>
      </section>

      {/* Interactive Custom Scope Builder */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="bg-navy-900/90 backdrop-blur-md rounded-3xl p-8 sm:p-12 border border-navy-800 shadow-2xl space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-wider">
              <Sliders className="w-3.5 h-3.5" />
              <span>Scope Builder</span>
            </div>
            <h2 className="text-3xl font-extrabold text-white">
              Build Your Custom Project Scope
            </h2>
            <p className="text-sm text-slate-300">
              Select the capabilities your business needs. Send them directly to our advisory team on WhatsApp for an immediate consultation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {specializedModules.map((mod) => {
              const isSelected = selectedModules.includes(mod.id);

              return (
                <div
                  key={mod.id}
                  onClick={() => toggleModule(mod.id)}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-start justify-between gap-3 ${
                    isSelected
                      ? 'border-orange-500 bg-orange-500/15 ring-2 ring-orange-500/30 shadow-lg text-white'
                      : 'border-navy-800 hover:border-navy-700 bg-navy-950/80 text-slate-300'
                  }`}
                >
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-white block">
                      {mod.name}
                    </span>
                    <span className="text-[11px] text-slate-400 block">
                      Tailored Integration
                    </span>
                  </div>
                  <div className={`w-5 h-5 rounded-lg border flex items-center justify-center shrink-0 mt-0.5 ${
                    isSelected ? 'bg-orange-500 border-orange-500 text-white' : 'border-navy-700 bg-navy-900'
                  }`}>
                    {isSelected && <Check className="w-3.5 h-3.5" />}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="pt-6 border-t border-navy-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm text-slate-300 text-center sm:text-left">
              {selectedModules.length > 0 ? (
                <span>You selected <strong className="text-orange-400">{selectedModules.length} module(s)</strong> for your custom project.</span>
              ) : (
                <span>Select modules above to construct your custom proposal.</span>
              )}
            </div>

            <a
              href={getWhatsAppUrl(
                selectedModules.length > 0
                  ? `Hi Smart Multi Solutions team, I would like to request a custom scope quote with the following modules: ${selectedModules.map(id => specializedModules.find(m => m.id === id)?.name).join(', ')}.`
                  : `Hi Smart Multi Solutions team, I want to discuss a tailored digital solution for my business.`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white font-extrabold text-sm flex items-center gap-2 shadow-lg hover:shadow-orange-500/25 hover:scale-[1.02] transition"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Request Custom Scope on WhatsApp</span>
            </a>
          </div>

        </div>
      </section>

      {/* Capabilities Breakdown Matrix */}
      <PackageComparison />

    </div>
  );
};
