import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Globe, TrendingUp, Cpu, Layers, 
  ArrowRight, CheckCircle2, ChevronRight, Sparkles 
} from 'lucide-react';
import { SERVICES_DATA, getAllServices } from '../../data/services';

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
    <section id="services" className="py-24 bg-navy-950 border-b border-navy-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-navy-800 text-orange-sms text-xs font-bold uppercase tracking-wider border border-navy-700">
            <span>Specialized Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Integrated Services Under One Roof
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
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
                className={`p-4 rounded-2xl border text-left flex items-center gap-3.5 transition-all ${
                  isActive
                    ? 'bg-navy-900 border-orange-sms shadow-xl ring-2 ring-orange-sms/20 -translate-y-0.5'
                    : 'bg-navy-900/60 border-navy-800 text-slate-400 hover:text-white hover:bg-navy-900'
                }`}
              >
                <div className={`p-2.5 rounded-xl shrink-0 ${
                  isActive ? 'bg-orange-sms text-white' : 'bg-navy-800 text-slate-400'
                }`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className={`text-sm font-extrabold ${isActive ? 'text-white' : 'text-slate-300'}`}>
                    {cat.title}
                  </div>
                  <div className="text-[11px] text-slate-400">
                    {cat.services.length} Core Services
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Category Showcase Box */}
        <div className="bg-navy-900 rounded-3xl p-6 sm:p-10 border border-navy-800 shadow-xl">
          
          {/* Category Top Banner */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-navy-800">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-orange-sms"></span>
                <span className="text-xs font-bold uppercase tracking-wider text-orange-sms">
                  {activeCategory.tagline}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {activeCategory.title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {activeCategory.description}
              </p>
            </div>

            <Link
              to="/solutions"
              className="shrink-0 px-6 py-3 rounded-xl bg-orange-sms hover:bg-orange-sms-hover text-white text-xs font-extrabold flex items-center justify-center gap-2 shadow-md transition self-start lg:self-center"
            >
              <span>Explore All {activeCategory.title} Solutions</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </Link>
          </div>

          {/* 6 Services Grid for Active Category */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
            {activeCategory.services.map((srv) => (
              <div
                key={srv.id}
                className="bg-navy-950 rounded-2xl p-6 border border-navy-800 shadow-sm hover:shadow-xl hover:border-orange-sms/40 transition flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-extrabold text-base text-white">
                      {srv.name}
                    </h4>
                    {srv.popular && (
                      <span className="text-[10px] bg-orange-sms/20 text-orange-sms font-extrabold px-2 py-0.5 rounded-full uppercase border border-orange-sms/30">
                        Core
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {srv.shortDesc}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-navy-850">
                    {srv.highlights.slice(0, 3).map((h, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-navy-850">
                  <Link
                    to={`/services/${srv.slug}`}
                    className="text-xs font-bold text-orange-sms hover:text-orange-sms-hover flex items-center justify-between group"
                  >
                    <span>View Specifications</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
