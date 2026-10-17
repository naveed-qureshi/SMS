import React, { useState } from 'react';
import { 
  Lightbulb, Palette, Globe, ShoppingBag, 
  Megaphone, Users, Bot, TrendingUp, CheckCircle, ArrowRight 
} from 'lucide-react';
import { getWhatsAppUrl } from '../../data/packages';

export const ValueProposition: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(2);

  const journeySteps = [
    {
      id: 0,
      label: 'IDEA',
      title: 'Business Idea Validation',
      desc: 'Clarifying your market opportunity, audience demand, and commercial viability.',
      icon: Lightbulb,
      color: 'bg-amber-500 text-white'
    },
    {
      id: 1,
      label: 'BRAND',
      title: 'Brand Identity & Setup',
      desc: 'Securing your corporate identity, custom domain (.pk / .com), and professional business emails.',
      icon: Palette,
      color: 'bg-pink-500 text-white'
    },
    {
      id: 2,
      label: 'WEBSITE',
      title: 'High-Speed Web Platform',
      desc: 'A bespoke mobile-responsive website that builds trust and showcases your service offerings.',
      icon: Globe,
      color: 'bg-blue-600 text-white'
    },
    {
      id: 3,
      label: 'ONLINE STORE',
      title: 'E-Commerce Storefront',
      desc: 'Seamless shopping cart, Cash on Delivery (COD), local card gateways, and courier integration.',
      icon: ShoppingBag,
      color: 'bg-orange-sms text-white'
    },
    {
      id: 4,
      label: 'MARKETING',
      title: 'Organic SEO & Paid Ads',
      desc: 'Getting listed in the Google Map 3-pack and launching targeted Meta ad campaigns.',
      icon: Megaphone,
      color: 'bg-red-500 text-white'
    },
    {
      id: 5,
      label: 'CUSTOMERS',
      title: 'Active Inbound Pipeline',
      desc: 'Turning site visitors into direct WhatsApp inquiries, qualified leads, and repeat orders.',
      icon: Users,
      color: 'bg-emerald-600 text-white'
    },
    {
      id: 6,
      label: 'AUTOMATION',
      title: 'AI & Routine Automation',
      desc: '24/7 AI chat replies, auto-syncing orders to Google Sheets, and automated notifications.',
      icon: Bot,
      color: 'bg-purple-600 text-white'
    },
    {
      id: 7,
      label: 'GROWTH',
      title: 'Sustainable Business Scale',
      desc: 'Executive performance dashboards, inventory optimization, and long-term partner advisory.',
      icon: TrendingUp,
      color: 'bg-cyan-600 text-white'
    }
  ];

  return (
    <section className="py-20 bg-white border-y border-slate-200/70 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Value Proposition Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-sms bg-orange-sms/10 px-3.5 py-1 rounded-full border border-orange-sms/20">
            One Single Digital Partner
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight">
            Everything You Need to Build, Grow & Automate.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed text-balance">
            Starting a digital business can feel complicated. You need a website, domain, hosting, online payments, social media, marketing, analytics and sometimes automation.
          </p>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm font-semibold max-w-2xl mx-auto">
            Instead of managing five different vendors, <span className="text-navy-900 font-extrabold">Smart Multi Solutions</span> brings practical digital solutions together under one roof.
          </div>
        </div>

        {/* Visual Interactive Journey */}
        <div className="bg-gradient-to-b from-surface-50 to-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm">
          
          <div className="text-center mb-8">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">
              The Proven Digital Business Journey
            </h3>
            <p className="text-sm font-semibold text-navy-900 mt-1">
              Click any stage to see how Smart Multi Solutions guides you through it:
            </p>
          </div>

          {/* Interactive Steps Horizontal Chain */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 relative">
            {journeySteps.map((step) => {
              const Icon = step.icon;
              const isCurrent = activeStep === step.id;

              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={`group relative p-3 rounded-xl border text-center transition-all flex flex-col items-center justify-between ${
                    isCurrent
                      ? 'bg-white border-orange-sms shadow-md ring-2 ring-orange-sms/20 -translate-y-1'
                      : 'bg-white/80 border-slate-200 hover:border-slate-300 hover:bg-white'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-lg ${step.color} flex items-center justify-center mb-2 shadow-sm`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className={`text-xs font-extrabold tracking-wide uppercase ${isCurrent ? 'text-orange-sms' : 'text-slate-700'}`}>
                    {step.label}
                  </div>
                  <div className="text-[10px] text-slate-400 mt-1">
                    Phase 0{step.id + 1}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Step Active Spotlight Box */}
          <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className={`w-14 h-14 rounded-2xl ${journeySteps[activeStep].color} flex items-center justify-center shrink-0 shadow-md`}>
                {React.createElement(journeySteps[activeStep].icon, { className: 'w-7 h-7' })}
              </div>
              <div className="space-y-1 text-left">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-orange-sms">
                    Stage 0{activeStep + 1}
                  </span>
                  <span className="text-slate-300">•</span>
                  <span className="text-xs text-slate-500 font-semibold">
                    {journeySteps[activeStep].label}
                  </span>
                </div>
                <h4 className="text-xl font-extrabold text-navy-900">
                  {journeySteps[activeStep].title}
                </h4>
                <p className="text-sm text-slate-600 max-w-2xl">
                  {journeySteps[activeStep].desc}
                </p>
              </div>
            </div>

            <div className="shrink-0 flex items-center gap-3 w-full md:w-auto">
              <a
                href={getWhatsAppUrl(`Hi SMS team, I need help with the ${journeySteps[activeStep].label} stage of my business.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto px-5 py-3 rounded-xl bg-navy-900 hover:bg-navy-850 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition"
              >
                <span>Discuss This Stage</span>
                <ArrowRight className="w-4 h-4 text-orange-sms" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
