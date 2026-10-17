import React, { useState } from 'react';
import { 
  Search, Compass, Code2, Rocket, 
  TrendingUp, RefreshCw, CheckCircle2, ArrowRight 
} from 'lucide-react';
import { getWhatsAppUrl } from '../../data/packages';

export const GrowthTimeline: React.FC = () => {
  const [selectedPhase, setSelectedPhase] = useState<number>(0);

  const phases = [
    {
      number: '01',
      title: 'DISCOVER',
      subtitle: 'Understand your business and objectives.',
      description: 'We begin by actively listening to your commercial model, profit margins, target customers in Pakistan or abroad, and current operational bottlenecks.',
      details: [
        'Detailed business & competitor discovery interview',
        'Catalog, pricing, and operational workflow audit',
        'Budget and timeline alignment'
      ],
      icon: Search
    },
    {
      number: '02',
      title: 'PLAN',
      subtitle: 'Recommend the right technology and strategy.',
      description: 'We create a pragmatic technical blueprint. No bloated enterprise software if a lean WooCommerce or WordPress platform serves you best.',
      details: [
        'Technical stack selection (WooCommerce, Shopify, Custom)',
        'Sitemap architecture & conversion funnel layout',
        'Payment gateway & logistics integration planning'
      ],
      icon: Compass
    },
    {
      number: '03',
      title: 'BUILD',
      subtitle: 'Design and develop your digital platform.',
      description: 'Our engineering and UI/UX team designs and develops your platform with fast loading speeds, mobile-first responsiveness, and clean code.',
      details: [
        'Custom brand styling & high-conversion UI/UX',
        'Mobile optimization for Pakistani 4G networks',
        'WhatsApp click-to-chat & contact form configurations'
      ],
      icon: Code2
    },
    {
      number: '04',
      title: 'LAUNCH',
      subtitle: 'Make your business visible and ready for customers.',
      description: 'We handle server configurations, domain mappings, SSL certificates, payment testing, and verify your presence on Google Search and Maps.',
      details: [
        'Full checkout & COD transaction dry runs',
        'Google Business Profile & Search Console indexing',
        'Admin staff training & 30-day handover support'
      ],
      icon: Rocket
    },
    {
      number: '05',
      title: 'GROW',
      subtitle: 'Use SEO, marketing and analytics to increase opportunities.',
      description: 'Once your platform is live, we activate inbound organic search rankings, targeted Meta and Google ad campaigns, and conversion rate audits.',
      details: [
        'Local SEO ranking in Pakistani cities',
        'Targeted advertising with strict ROAS controls',
        'Customer conversion rate optimization (CRO)'
      ],
      icon: TrendingUp
    },
    {
      number: '06',
      title: 'AUTOMATE',
      subtitle: 'Reduce repetitive work using technology and AI.',
      description: 'As orders increase, we eliminate manual administration with 24/7 AI chat replies, auto-syncing spreadsheets, and automated order dispatches.',
      details: [
        'WhatsApp AI customer assistant trained on your FAQs',
        'Automatic Google Sheets & CRM lead sync',
        'Executive Looker/Power BI sales dashboards'
      ],
      icon: RefreshCw
    }
  ];

  return (
    <section id="process" className="py-24 bg-navy-900 border-b border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-sms bg-orange-sms/15 px-3.5 py-1 rounded-full border border-orange-sms/30">
            Step-by-Step Methodology
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            How We Help You Grow
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            A structured, transparent six-stage process that removes guesswork from your digital transformation.
          </p>
        </div>

        {/* 6 Step Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {phases.map((phase, idx) => {
            const Icon = phase.icon;
            const isSelected = selectedPhase === idx;

            return (
              <div
                key={idx}
                onClick={() => setSelectedPhase(idx)}
                className={`p-6 sm:p-7 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-navy-950 border-orange-sms shadow-2xl ring-2 ring-orange-sms/30 -translate-y-1'
                    : 'bg-navy-950/80 border-navy-800 hover:border-navy-700 hover:bg-navy-950'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black font-mono text-orange-sms">
                      {phase.number}
                    </span>
                    <div className={`p-2.5 rounded-xl ${isSelected ? 'bg-orange-sms text-white' : 'bg-navy-900 text-slate-300 border border-navy-800'}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-extrabold text-white mb-1">
                    {phase.title}
                  </h3>
                  <div className="text-xs font-bold text-orange-sms mb-3">
                    {phase.subtitle}
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {phase.description}
                  </p>

                  <div className="space-y-1.5 pt-3 border-t border-navy-850">
                    {phase.details.map((d, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-navy-850 text-[11px] font-bold text-slate-400 flex items-center justify-between">
                  <span>Stage {phase.number} / 06</span>
                  <span className={`${isSelected ? 'text-orange-sms' : 'text-slate-400'}`}>
                    {isSelected ? 'Active Focus' : 'Learn More →'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <div className="mt-12 text-center">
          <a
            href={getWhatsAppUrl("Hi SMS team, I want to discuss your 6-step growth process for my business.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-navy-900 hover:bg-navy-850 text-white font-extrabold text-xs shadow-md transition"
          >
            <span>Start with Phase 01: Free Discovery Session</span>
            <ArrowRight className="w-4 h-4 text-orange-sms" />
          </a>
        </div>

      </div>
    </section>
  );
};
