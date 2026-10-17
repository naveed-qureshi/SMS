import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Globe, TrendingUp, Cpu, Layers, 
  ArrowRight, CheckCircle2, Sparkles, Phone, MessageSquare 
} from 'lucide-react';
import { SERVICES_DATA, getAllServices } from '../data/services';
import { getWhatsAppUrl, COMPANY_CONTACT } from '../data/packages';

export const SolutionsPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const iconsMap: Record<string, any> = {
    Globe,
    TrendingUp,
    Cpu,
    Layers
  };

  const displayedCategories = activeFilter === 'all'
    ? SERVICES_DATA
    : SERVICES_DATA.filter(c => c.id === activeFilter);

  return (
    <div className="bg-surface-50 min-h-screen">
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-white to-surface-100 py-16 sm:py-24 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-sms bg-orange-sms/10 px-3.5 py-1 rounded-full border border-orange-sms/20">
            End-to-End Digital Ecosystem
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy-900 tracking-tight">
            Practical Digital Solutions for Every Stage
          </h1>
          <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            From establishing your very first website to scaling customer acquisition and automating daily operations, explore our 4 core operational pillars.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <a
              href={getWhatsAppUrl("Hi SMS team, I want to explore digital solutions for my business.")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-orange-sms to-orange-sms-hover text-white font-extrabold text-xs sm:text-sm flex items-center gap-2 shadow-md hover:shadow-lg transition"
            >
              <span>Speak to a Digital Consultant</span>
              <MessageSquare className="w-4 h-4" />
            </a>
            <Link
              to="/contact-us"
              className="px-5 py-3.5 rounded-xl bg-white border border-slate-300 hover:bg-slate-50 text-navy-900 font-bold text-xs sm:text-sm shadow-sm transition"
            >
              Request Custom Scope
            </Link>
          </div>
        </div>
      </section>

      {/* Filter Category Bar */}
      <div className="sticky top-[73px] z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center gap-2 overflow-x-auto scrollbar-none">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap ${
              activeFilter === 'all'
                ? 'bg-navy-900 text-white shadow-sm'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            All 4 Pillars
          </button>
          {SERVICES_DATA.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap ${
                activeFilter === cat.id
                  ? 'bg-navy-900 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>
      </div>

      {/* Services List by Category */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {displayedCategories.map((cat) => {
          const CatIcon = iconsMap[cat.icon] || Globe;

          return (
            <div key={cat.id} className="space-y-8">
              {/* Category Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-orange-sms/10 text-orange-sms flex items-center justify-center shrink-0">
                    <CatIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-extrabold uppercase tracking-wider text-orange-sms">
                      {cat.badge}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900">
                      {cat.title}
                    </h2>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 max-w-lg">
                  {cat.description}
                </p>
              </div>

              {/* 6 Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cat.services.map((srv) => (
                  <div
                    key={srv.id}
                    className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-lg hover:border-slate-300 transition flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-extrabold text-lg text-navy-900">
                          {srv.name}
                        </h3>
                        {srv.popular && (
                          <span className="text-[10px] bg-orange-sms/10 text-orange-sms font-bold px-2 py-0.5 rounded-full uppercase">
                            Core
                          </span>
                        )}
                      </div>

                      <p className="text-xs text-slate-600 leading-relaxed mb-4">
                        {srv.shortDesc}
                      </p>

                      <div className="space-y-1.5 pt-3 border-t border-slate-100">
                        {srv.highlights.map((hl, i) => (
                          <div key={i} className="flex items-start gap-1.5 text-xs text-slate-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{hl}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                      <Link
                        to={`/${srv.slug}`}
                        className="font-bold text-orange-sms hover:text-orange-sms-hover flex items-center gap-1 transition"
                      >
                        <span>Explore Capabilities</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>

                      <a
                        href={getWhatsAppUrl(`Hi SMS team, I want to inquire about: ${srv.name}.`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-emerald-600 transition"
                        title="Chat on WhatsApp"
                      >
                        <MessageSquare className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Consultation Banner */}
      <section className="bg-navy-900 text-white py-16 border-t border-navy-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl font-extrabold">Need Help Deciding Where to Start?</h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Book a complimentary 20-minute digital roadmap call with our senior consultants in Lahore.
          </p>
          <a
            href={getWhatsAppUrl("Hi SMS team, I'd like to book a free digital roadmap call.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-orange-sms hover:bg-orange-sms-hover text-white font-extrabold text-xs shadow-lg transition"
          >
            <span>Book Free Roadmap Call</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
};
