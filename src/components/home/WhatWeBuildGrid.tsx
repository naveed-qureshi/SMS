import React, { useState } from 'react';
import { 
  Globe, ShoppingBag, Calendar, Building, Rocket, 
  Utensils, Briefcase, Megaphone, LineChart, Bot, Workflow, ArrowRight 
} from 'lucide-react';
import { getWhatsAppUrl } from '../../data/packages';

export const WhatWeBuildGrid: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const buildItems = [
    {
      title: 'Business Website',
      category: 'Foundation',
      desc: 'Clean 5-10 page corporate websites presenting your products, history, and contact channels.',
      icon: Globe,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Online Store',
      category: 'E-Commerce',
      desc: 'High-converting stores with shopping carts, Cash on Delivery, and courier integration.',
      icon: ShoppingBag,
      image: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Service Booking Website',
      category: 'Appointment Engine',
      desc: 'Direct calendar reservations for clinics, consultants, salons, and maintenance services.',
      icon: Calendar,
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Corporate Website',
      category: 'Enterprise Presence',
      desc: 'Authoritative, multi-departmental web platforms with investor relations and governance.',
      icon: Building,
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'High-Converting Landing Page',
      category: 'Campaign Lead Gen',
      desc: 'Single-page campaign funnels engineered strictly for PPC, Google Ads, and Meta conversions.',
      icon: Rocket,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Restaurant & Food Website',
      category: 'Hospitality',
      desc: 'Appetizing online menus, takeaway orders, table reservations, and WhatsApp ordering.',
      icon: Utensils,
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Portfolio & Consultant Website',
      category: 'Personal Brand',
      desc: 'Showcase your creative work, case studies, client logos, and speaking engagements.',
      icon: Briefcase,
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Digital Marketing System',
      category: 'Customer Acquisition',
      desc: 'Automated remarketing pixels, lead capture funnels, and email welcome sequences.',
      icon: Megaphone,
      image: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Executive Business Dashboard',
      category: 'Data & BI',
      desc: 'Live Looker / Power BI dashboards connecting sales, ad spend, and inventory in real time.',
      icon: LineChart,
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: '24/7 AI Assistant & Bot',
      category: 'AI Solution',
      desc: 'Intelligent WhatsApp and web chat assistants answering pricing and product inquiries.',
      icon: Bot,
      image: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Automation Workflow System',
      category: 'Efficiency',
      desc: 'Pipelines linking forms, Google Sheets, WhatsApp, and invoicing with zero human entry.',
      icon: Workflow,
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80'
    }
  ];

  return (
    <section className="py-24 bg-surface-50 border-b border-slate-200/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-sms bg-orange-sms/10 px-3.5 py-1 rounded-full border border-orange-sms/20">
            Versatile Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight">
            What Can We Build For You?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            From single landing pages to complete e-commerce stores and custom business automation, explore what we build for Pakistani businesses every day.
          </p>
        </div>

        {/* 11 Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {buildItems.map((item, idx) => {
            const Icon = item.icon;
            const isHovered = hoveredIndex === idx;

            return (
              <div
                key={idx}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group relative rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm transition-all duration-300 flex flex-col justify-between ${
                  isHovered ? '-translate-y-2 shadow-xl border-orange-sms/60' : ''
                }`}
              >
                {/* Image header */}
                <div className="relative h-44 overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/30 to-transparent" />
                  
                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-navy-900 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase">
                    {item.category}
                  </div>

                  {/* Icon badge */}
                  <div className="absolute bottom-3 left-3 w-9 h-9 rounded-xl bg-orange-sms text-white flex items-center justify-center shadow-md">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Orange Accent Line on Hover */}
                <div className={`h-1 bg-orange-sms transition-all duration-300 ${isHovered ? 'w-full' : 'w-0'}`} />

                {/* Body Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-extrabold text-base text-navy-900 group-hover:text-orange-sms transition">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mt-1.5">
                      {item.desc}
                    </p>
                  </div>

                  {/* CTA link revealed on hover / always visible */}
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-400 font-medium">Ready to build?</span>
                    <a
                      href={getWhatsAppUrl(`Hi Smart Multi Solutions team, I want to build a: ${item.title}. Can you share details and a tailored quote?`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-orange-sms hover:text-orange-sms-hover flex items-center gap-1 transition"
                    >
                      <span>Get Custom Quote</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
