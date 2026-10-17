import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, CheckCircle2, TrendingUp, ShoppingCart, 
  Bot, ShieldCheck, Sparkles, Star, ChevronRight, BarChart3, Globe, MessageSquare 
} from 'lucide-react';
import { getWhatsAppUrl } from '../../data/packages';

interface HeroProps {
  onStartJourney?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartJourney }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 pt-10 sm:pt-16 pb-20 lg:pb-28 border-b border-navy-800">
      {/* Subtle Animated Background Grid & Glow */}
      <div className="absolute inset-0 bg-grid-dark-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-orange-sms/15 to-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & High-Conversion Copy (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Supporting Category Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-sms/15 border border-orange-sms/30 text-orange-sms font-bold text-xs uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Websites • E-Commerce • Marketing • SEO • AI • Automation</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] text-balance">
              Build Your Business.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-sms via-orange-400 to-amber-400 block mt-1">
                Grow It Digitally.
              </span>
            </h1>

            {/* Supporting Headline */}
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              From high-converting e-commerce storefronts and custom websites to automated operations and performance marketing — we engineer tailored digital solutions for your business.
            </p>

            {/* SME Trust Anchors */}
            <div className="pt-1 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-5 text-xs text-slate-300 font-semibold">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                Tailored to Your Exact Scope
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                Direct WhatsApp Consultation
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                Lahore, Pakistan & Global
              </span>
            </div>

            {/* CTAs */}
            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onStartJourney || (() => {
                  const el = document.getElementById('consultation-wizard');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                  else window.location.href = '/contact-us';
                })}
                className="w-full sm:w-auto px-7 py-4 rounded-xl text-base font-extrabold text-white bg-gradient-to-r from-orange-sms to-orange-sms-hover shadow-lg hover:shadow-orange-sms/25 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Request a Custom Quote</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={getWhatsAppUrl("Hi Smart Multi Solutions team, I'd like to discuss a custom digital project for my business.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-4 rounded-xl text-base font-bold text-white bg-navy-900 border border-navy-700 hover:border-orange-sms hover:bg-navy-850 shadow-sm hover:shadow transition flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-5 h-5 text-emerald-400" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Genuine Client Proof Snippet with Monogram Avatars for clean rendering */}
            <div className="pt-4 border-t border-navy-800 flex items-center justify-center lg:justify-start gap-4 text-xs text-slate-400">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-slate-900 text-white font-black text-[11px] flex items-center justify-center border-2 border-navy-950 shadow">
                  ED
                </div>
                <div className="w-8 h-8 rounded-full bg-amber-500 text-navy-950 font-black text-[11px] flex items-center justify-center border-2 border-navy-950 shadow">
                  SV
                </div>
                <div className="w-8 h-8 rounded-full bg-red-600 text-white font-black text-[11px] flex items-center justify-center border-2 border-navy-950 shadow">
                  SF
                </div>
              </div>
              <div>
                <span className="font-bold text-slate-300">Trusted by industry leaders:</span> <span className="font-bold text-white">Edifier.pk</span>, <span className="font-bold text-white">SkyVolt.pk</span>, <span className="font-bold text-white">Shan Foods</span> & <span className="font-bold text-white">Serwizo</span>.
              </div>
            </div>

          </div>

          {/* Right Column: Modern Digital Business Ecosystem Graphic (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Outer Glow & Glass Card Frame */}
              <div className="relative rounded-2xl bg-gradient-to-tr from-navy-900 to-navy-800 p-3 sm:p-5 shadow-2xl border border-navy-700/50 text-white overflow-hidden">
                
                {/* Background circuit/data lines */}
                <div className="absolute inset-0 bg-grid-dark-pattern opacity-30 pointer-events-none" />

                {/* Top Ecosystem Bar */}
                <div className="relative flex items-center justify-between pb-3 border-b border-slate-700 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                    <span className="ml-2 font-mono text-[11px] text-slate-400">ecosystem.smartmultisolutions.com</span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-emerald-400 text-[10px] font-bold bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                    SYSTEM ACTIVE
                  </span>
                </div>

                {/* Interactive Multi-layered Elements */}
                <div className="relative pt-4 space-y-3">
                  
                  {/* Layer 1: E-Commerce Store & Checkout Node */}
                  <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-700/80 shadow-md flex items-center justify-between hover:border-orange-sms/60 transition">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-orange-sms/20 text-orange-sms flex items-center justify-center font-bold">
                        <ShoppingCart className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white flex items-center gap-1.5">
                          Online Store & Custom Checkout
                          <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-1.5 rounded font-semibold">COD & Cards</span>
                        </div>
                        <p className="text-[11px] text-slate-400">Orders routed automatically to WhatsApp & Couriers</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-bold text-orange-400">24/7 Sales</span>
                    </div>
                  </div>

                  {/* Layer 2: Real-time Analytics & Business Growth */}
                  <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-700/80 shadow-md flex items-center justify-between hover:border-blue-500/60 transition">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold">
                        <TrendingUp className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white flex items-center gap-1.5">
                          SEO & Customer Traffic
                          <span className="text-[10px] bg-blue-500/20 text-blue-300 px-1.5 rounded font-semibold">Top Rankings</span>
                        </div>
                        <p className="text-[11px] text-slate-400">High-intent searches & targeted customer reach</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-bold text-emerald-400 flex items-center gap-0.5 justify-end">
                        <BarChart3 className="w-3.5 h-3.5" /> High ROI
                      </span>
                    </div>
                  </div>

                  {/* Layer 3: AI & Process Automation Node */}
                  <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-700/80 shadow-md flex items-center justify-between hover:border-purple-500/60 transition">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold">
                        <Bot className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white flex items-center gap-1.5">
                          AI & Workflow Automation
                          <span className="text-[10px] bg-purple-500/20 text-purple-300 px-1.5 rounded font-semibold">24/7 Response</span>
                        </div>
                        <p className="text-[11px] text-slate-400">WhatsApp assistant & Google Sheets synced</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-mono text-slate-400">Auto</span>
                    </div>
                  </div>

                  {/* Layer 4: Central Single-Partner Guarantee Banner */}
                  <div className="p-3 rounded-xl bg-gradient-to-r from-orange-sms/20 via-slate-800 to-navy-950 border border-orange-sms/40 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-orange-sms shrink-0" />
                      <span className="font-semibold text-slate-200">
                        Smart Multi Solutions: <span className="text-white font-bold">All Under One Roof</span>
                      </span>
                    </div>
                    <span className="text-[11px] text-orange-sms font-bold">Your Partner</span>
                  </div>

                </div>
              </div>

              {/* Decorative Floating Metric Tag */}
              <div className="absolute -bottom-5 -left-5 bg-white p-3 rounded-xl shadow-xl border border-slate-200 text-slate-800 hidden sm:flex items-center gap-3 animate-float-slow">
                <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-extrabold text-navy-900">Proven Results</div>
                  <div className="text-[11px] text-slate-500">Strategy → Launch → Scale</div>
                </div>
              </div>

              {/* Decorative Floating Scope Tag */}
              <div className="absolute -top-4 -right-4 bg-navy-900 text-white p-3 rounded-xl shadow-xl border border-slate-700 hidden sm:flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-orange-sms"></span>
                <span className="text-xs font-bold">100% Bespoke Solutions</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
