import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Globe, TrendingUp, Cpu, Layers, 
  ArrowRight, CheckCircle2, Sparkles, ExternalLink 
} from 'lucide-react';
import { SERVICES_DATA } from '../../data/services';

export const ServicesOverview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('digital-business');

  const iconsMap: Record<string, any> = {
    Globe,
    TrendingUp,
    Cpu,
    Layers
  };

  const activeCategory = SERVICES_DATA.find(c => c.id === activeTab) || SERVICES_DATA[0];
  const CategoryIcon = iconsMap[activeCategory.icon] || Globe;

  return (
    <section id="services" className="py-24 bg-white border-b border-slate-200/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider">
            <span>Specialized Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight">
            Integrated Services Under One Roof
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Whether establishing your digital foundation, driving customer acquisition, or automating operations, explore our four specialized pillars.
          </p>
        </div>

        {/* 4 Category Navigation Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-12">
          {SERVICES_DATA.map((cat) => {
            const Icon = iconsMap[cat.icon] || Globe;
            const isActive = activeTab === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`p-4 sm:p-5 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                  isActive
                    ? 'bg-navy-900 text-white border-navy-900 shadow-lg ring-2 ring-orange-sms/40'
                    : 'bg-surface-50 text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-white'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-2.5 rounded-xl ${isActive ? 'bg-orange-sms text-white' : 'bg-white text-navy-900 border border-slate-200 shadow-sm'}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                    isActive ? 'bg-navy-800 text-orange-sms' : 'bg-slate-200/80 text-slate-600'
                  }`}>
                    {cat.badge}
                  </span>
                </div>
                <div>
                  <h3 className={`font-extrabold text-sm sm:text-base ${isActive ? 'text-white' : 'text-navy-900'}`}>
                    {cat.title}
                  </h3>
                  <p className={`text-xs mt-1 leading-snug line-clamp-1 ${isActive ? 'text-slate-300' : 'text-slate-500'}`}>
                    {cat.tagline}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Category Showcase Box */}
        <div className="bg-surface-50 rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm">
          
          {/* Category Top Banner */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-slate-200">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-orange-sms"></span>
                <span className="text-xs font-bold uppercase tracking-wider text-orange-sms">
                  {activeCategory.tagline}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-900">
                {activeCategory.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {activeCategory.description}
              </p>
            </div>

            <Link
              to="/solutions"
              className="shrink-0 px-6 py-3 rounded-xl bg-navy-900 hover:bg-navy-850 text-white text-xs font-extrabold flex items-center justify-center gap-2 shadow-md transition self-start lg:self-center"
            >
              <span>Explore All {activeCategory.title} Solutions</span>
              <ArrowRight className="w-4 h-4 text-orange-sms" />
            </Link>
          </div>

          {/* 6 Services Grid for Active Category */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
            {activeCategory.services.map((srv) => (
              <div
                key={srv.id}
                className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-slate-300 transition flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-extrabold text-base text-navy-900">
                      {srv.name}
                    </h4>
                    {srv.popular && (
                      <span className="text-[10px] bg-orange-sms/10 text-orange-sms font-extrabold px-2 py-0.5 rounded-full uppercase">
                        Core
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {srv.shortDesc}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-slate-100">
                    {srv.highlights.slice(0, 3).map((h, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <Link
                    to={`/${srv.slug}`}
                    className="font-bold text-orange-sms hover:text-orange-sms-hover flex items-center gap-1 transition"
                  >
                    <span>View Service Page</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
