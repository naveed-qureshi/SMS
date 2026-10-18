import React from 'react';
import { ExternalLink, ShieldCheck, Sparkles, Building2, CheckCircle2 } from 'lucide-react';

export interface ClientBrand {
  name: string;
  domain: string;
  url: string;
  category: string;
  description: string;
  logo: string;
  badge: string;
}

export const CLIENT_BRANDS: ClientBrand[] = [
  {
    name: 'Edifier Pakistan',
    domain: 'edifier.pk',
    url: 'https://edifier.pk',
    category: 'Premium Audio & E-Commerce',
    description: 'Official online storefront & digital sales growth',
    logo: '/Clients/Edifier-logo1.jpg',
    badge: 'Official E-Commerce'
  },
  {
    name: 'Electronics Mart',
    domain: 'electronicsmart.pk',
    url: 'https://electronicsmart.pk',
    category: 'Full-Scale Appliance E-Commerce',
    description: 'Luxury appliance showroom & nationwide e-commerce store',
    logo: '/Clients/ElectronicsMart-logo.jpg',
    badge: 'Full-Scale E-Commerce'
  },
  {
    name: 'SkyVolt',
    domain: 'skyvolt.pk',
    url: 'https://skyvolt.pk',
    category: 'Solar & Renewable Energy',
    description: 'Corporate web platform & solar consultation funnel',
    logo: '/Clients/SkyVolt-logo.jpg',
    badge: 'Clean-Tech Platform'
  },
  {
    name: 'Organity Electronics',
    domain: 'organityengineering.com',
    url: 'https://organityengineering.com',
    category: 'Hardware & IoT Engineering',
    description: 'Technical product showcase & corporate portal',
    logo: '/Clients/Organity-logo.jpg',
    badge: 'Engineering & IoT'
  },
  {
    name: 'Serwizo',
    domain: 'serwizo.com',
    url: 'https://serwizo.com',
    category: 'On-Demand Multi-Services',
    description: 'Service booking ecosystem & provider marketplace',
    logo: '/Clients/Serwizo-logo3.jpg',
    badge: 'Service Marketplace'
  },
  {
    name: 'Shan Foods',
    domain: 'shanfoodspk.com',
    url: 'https://shanfoodspk.com',
    category: 'FMCG & Food Retail',
    description: 'Online ordering platform & brand presence initiatives',
    logo: '/Clients/ShanFoods-logo.jpg',
    badge: 'Enterprise Partner'
  }
];

export const ClientLogos: React.FC = () => {
  return (
    <section id="clients" className="py-14 bg-navy-950 border-y border-navy-800 relative overflow-hidden">
      {/* Background soft ambient */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-sms/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Trust Label */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-800 text-emerald-400 font-bold text-xs uppercase tracking-wider mb-3">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Trusted Digital Partner</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Powering Digital Growth for Leading Brands
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            From established nationwide enterprises to fast-growing digital ventures, we build and manage tailored digital solutions.
          </p>
        </div>

        {/* 6 Main Client Brand Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {CLIENT_BRANDS.map((client, idx) => (
            <a
              key={idx}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-navy-900/90 hover:bg-navy-850 rounded-2xl p-4 sm:p-5 border border-navy-800 hover:border-orange-sms/50 hover:shadow-2xl hover:shadow-orange-sms/10 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Top Row: Category & Link Icon */}
              <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                <span className="font-mono text-[11px] font-semibold text-slate-400 group-hover:text-orange-sms transition truncate pr-1">
                  {client.domain}
                </span>
                <ExternalLink className="w-3.5 h-3.5 shrink-0 text-slate-500 group-hover:text-orange-sms group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>

              {/* Logo Box with clean backdrop */}
              <div className="my-2 py-2 px-3 rounded-xl bg-white flex items-center justify-center text-center shadow-md h-20 transition group-hover:scale-[1.02]">
                <img
                  src={client.logo}
                  alt={`${client.name} official logo`}
                  className="max-h-12 max-w-[130px] object-contain transition-transform duration-300"
                  loading="lazy"
                />
              </div>

              {/* Bottom Details */}
              <div className="mt-3 pt-3 border-t border-navy-800">
                <div className="text-xs font-bold text-white group-hover:text-orange-sms transition truncate">
                  {client.name}
                </div>
                <p className="text-[11px] text-slate-400 leading-snug mt-1 line-clamp-2">
                  {client.description}
                </p>
                <div className="mt-2.5 inline-flex items-center gap-1 text-[10px] font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-900">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  <span>{client.badge}</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Pipeline / Growing Client Roster Notice */}
        <div className="mt-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-navy-900 border border-navy-800 text-xs text-slate-300 font-medium">
            <Sparkles className="w-3.5 h-3.5 text-orange-sms" />
            <span>
              <strong className="text-white">+ Several upcoming enterprise & D2C client deployments in process.</strong> Every solution is built bespoke to your business goals.
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
