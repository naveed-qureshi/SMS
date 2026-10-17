import React from 'react';
import { ExternalLink, ShieldCheck, Sparkles, Building2, CheckCircle2 } from 'lucide-react';

export interface ClientBrand {
  name: string;
  domain: string;
  url: string;
  category: string;
  description: string;
  accentColor: string;
  badge: string;
}

export const CLIENT_BRANDS: ClientBrand[] = [
  {
    name: 'Edifier Pakistan',
    domain: 'edifier.pk',
    url: 'https://edifier.pk',
    category: 'Premium Audio & E-Commerce',
    description: 'Official online storefront & digital sales growth',
    accentColor: 'from-slate-900 to-slate-800 text-white',
    badge: 'Official E-Commerce'
  },
  {
    name: 'SkyVolt',
    domain: 'skyvolt.pk',
    url: 'https://skyvolt.pk',
    category: 'Solar & Renewable Energy',
    description: 'Corporate web platform & solar consultation funnel',
    accentColor: 'from-amber-600 to-emerald-600 text-white',
    badge: 'Clean-Tech Platform'
  },
  {
    name: 'Organity Electronics',
    domain: 'organityengineering.com',
    url: 'https://organityengineering.com',
    category: 'Hardware & IoT Engineering',
    description: 'Technical product showcase & corporate portal',
    accentColor: 'from-cyan-900 to-blue-900 text-white',
    badge: 'Engineering & IoT'
  },
  {
    name: 'Serwizo',
    domain: 'serwizo.com',
    url: 'https://serwizo.com',
    category: 'On-Demand Multi-Services',
    description: 'Service booking ecosystem & provider marketplace',
    accentColor: 'from-blue-700 to-indigo-900 text-white',
    badge: 'Service Marketplace'
  },
  {
    name: 'Shan Foods',
    domain: 'shanfoodspk.com',
    url: 'https://shanfoodspk.com',
    category: 'FMCG & Global Food Brand',
    description: 'Digital presence initiatives & product showcases',
    accentColor: 'from-red-800 to-rose-900 text-white',
    badge: 'Enterprise Partner'
  }
];

export const ClientLogos: React.FC = () => {
  return (
    <section id="clients" className="py-14 bg-white border-y border-slate-100 relative overflow-hidden">
      {/* Background soft ambient */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-sms/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Trust Label */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 font-bold text-xs uppercase tracking-wider mb-3">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Trusted Digital Partner</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight">
            Powering Digital Growth for Leading Brands
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            From established nationwide enterprises to fast-growing digital ventures, we build and manage tailored digital solutions.
          </p>
        </div>

        {/* 5 Main Client Brand Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {CLIENT_BRANDS.map((client, idx) => (
            <a
              key={idx}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-surface-50 hover:bg-white rounded-2xl p-5 border border-slate-200 hover:border-orange-sms/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Top Row: Category & Link Icon */}
              <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                <span className="font-mono text-[11px] font-semibold text-slate-500 group-hover:text-orange-sms transition">
                  {client.domain}
                </span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-orange-sms group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>

              {/* Logo / Brand Representation */}
              <div className="my-2 py-3 px-2 rounded-xl bg-white group-hover:bg-slate-50/80 border border-slate-100 flex items-center justify-center text-center transition">
                {client.name === 'Edifier Pakistan' && (
                  <div className="flex flex-col items-center">
                    <span className="font-black text-xl tracking-[0.2em] text-slate-900 font-sans">
                      EDIFIER
                    </span>
                    <span className="text-[9px] uppercase tracking-wider text-orange-sms font-bold">
                      Pakistan
                    </span>
                  </div>
                )}
                {client.name === 'SkyVolt' && (
                  <div className="flex items-center gap-1.5 font-extrabold text-lg tracking-tight text-slate-900">
                    <span className="text-amber-500 text-xl font-black">⚡</span>
                    <span>Sky</span>
                    <span className="text-emerald-600">Volt</span>
                  </div>
                )}
                {client.name === 'Organity Electronics' && (
                  <div className="flex flex-col items-center">
                    <span className="font-extrabold text-base tracking-tight text-slate-900 flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-cyan-600 animate-pulse"></span>
                      ORGANITY
                    </span>
                    <span className="text-[9px] tracking-wider text-slate-500 font-semibold uppercase">
                      Electronics
                    </span>
                  </div>
                )}
                {client.name === 'Serwizo' && (
                  <div className="flex items-center gap-1 font-black text-lg text-blue-700">
                    <span className="text-orange-sms text-xl">✦</span>
                    <span className="tracking-wide">serwizo</span>
                    <span className="text-[10px] text-slate-400 font-normal">.com</span>
                  </div>
                )}
                {client.name === 'Shan Foods' && (
                  <div className="flex flex-col items-center">
                    <div className="px-3 py-0.5 bg-red-600 rounded text-white font-serif font-black text-sm tracking-wider shadow-sm">
                      Shan
                    </div>
                    <span className="text-[9px] tracking-wider text-slate-600 font-bold uppercase mt-1">
                      Foods
                    </span>
                  </div>
                )}
              </div>

              {/* Bottom Details */}
              <div className="mt-3 pt-3 border-t border-slate-100">
                <div className="text-xs font-bold text-navy-900 group-hover:text-orange-sms transition">
                  {client.name}
                </div>
                <p className="text-[11px] text-slate-500 leading-snug mt-1">
                  {client.description}
                </p>
                <div className="mt-2.5 inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  {client.badge}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Pipeline / Growing Client Roster Notice */}
        <div className="mt-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 font-medium">
            <Sparkles className="w-3.5 h-3.5 text-orange-sms" />
            <span>
              <strong>+ Several upcoming enterprise & D2C client deployments in process.</strong> Every solution is built bespoke to your business goals.
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
