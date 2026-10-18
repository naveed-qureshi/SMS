import React, { useState } from 'react';
import { ExternalLink, ShieldCheck, ArrowRight, Globe, CheckCircle, Monitor, Smartphone, Sparkles } from 'lucide-react';
import { PORTFOLIO_PROJECTS } from '../data/portfolio';
import { getWhatsAppUrl } from '../data/packages';

export const PortfolioPage: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [deviceViews, setDeviceViews] = useState<Record<string, 'desktop' | 'mobile'>>({});

  const industries = ['all', 'Consumer Electronics', 'Luxury Electronics', 'Clean Energy', 'Hardware', 'On-Demand Services', 'FMCG'];

  const filteredProjects = selectedFilter === 'all'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter(p => p.industry.toLowerCase().includes(selectedFilter.toLowerCase()));

  const toggleView = (projectId: string, view: 'desktop' | 'mobile') => {
    setDeviceViews(prev => ({ ...prev, [projectId]: view }));
  };

  return (
    <div className="bg-navy-950 text-slate-100 min-h-screen pt-24 pb-20">
      
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-gradient-to-b from-navy-900 to-navy-950 py-16 sm:py-24 border-b border-navy-800">
        <div className="absolute inset-0 bg-grid-dark-pattern opacity-10 pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-400 bg-orange-500/10 px-3.5 py-1 rounded-full border border-orange-500/20">
            Real Work for Real Businesses
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            Verified Case Studies & <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">Portfolio</span>
          </h1>
          <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Smart Multi Solutions has delivered successful e-commerce platforms, corporate websites, and operational systems for respected Pakistani brands. Inspect each website in both <strong>Laptop/Desktop</strong> and <strong>Mobile</strong> responsive formats.
          </p>
          <div className="inline-flex items-center gap-2 text-xs font-bold text-slate-300 bg-navy-900/90 px-4 py-2 rounded-full border border-navy-700 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>100% Genuine Client Partnerships • No Fabricated Data</span>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="flex items-center justify-center gap-2 flex-wrap">
          {industries.map((ind, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedFilter(ind)}
              className={`px-4 py-2 rounded-xl text-xs font-bold capitalize transition ${
                selectedFilter === ind
                  ? 'bg-orange-500 text-white shadow-lg'
                  : 'bg-navy-900/80 text-slate-300 border border-navy-800 hover:bg-navy-850'
              }`}
            >
              {ind === 'all' ? 'All Verified Projects' : ind}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {filteredProjects.map((project) => {
            const currentView = deviceViews[project.id] || 'desktop';

            return (
              <div
                key={project.id}
                className="bg-navy-900/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-navy-800 shadow-xl hover:shadow-2xl hover:border-orange-500/40 transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Visual Area */}
                <div className="relative bg-navy-950 border-b border-navy-800 flex flex-col">
                  {/* Browser Bar */}
                  <div className="bg-navy-900 px-4 py-2.5 border-b border-navy-800 flex flex-wrap items-center justify-between gap-2 text-xs select-none">
                    <div className="flex items-center space-x-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                    </div>

                    <div className="flex items-center gap-1.5 bg-navy-950 px-3 py-1 rounded-md text-[11px] text-slate-300 border border-navy-800 font-mono">
                      <Globe className="w-3 h-3 text-orange-400" />
                      <span>{project.liveUrl ? project.liveUrl.replace('https://', '') : `${project.id}.com`}</span>
                    </div>

                    {/* Format Switcher */}
                    <div className="flex items-center gap-1 bg-navy-950/90 p-0.5 rounded-lg border border-navy-800">
                      <button
                        onClick={() => toggleView(project.id, 'desktop')}
                        className={`flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-bold transition ${
                          currentView === 'desktop'
                            ? 'bg-gradient-to-r from-orange-sms to-orange-sms-hover text-white shadow'
                            : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        <Monitor className="w-3.5 h-3.5" />
                        <span>Laptop</span>
                      </button>
                      <button
                        onClick={() => toggleView(project.id, 'mobile')}
                        className={`flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-bold transition ${
                          currentView === 'mobile'
                            ? 'bg-gradient-to-r from-orange-sms to-orange-sms-hover text-white shadow'
                            : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        <Smartphone className="w-3.5 h-3.5" />
                        <span>Mobile</span>
                      </button>
                    </div>
                  </div>

                  {/* Screenshots */}
                  {currentView === 'desktop' ? (
                    <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-navy-900 via-navy-950 to-slate-900 flex items-center justify-center">
                      <img
                        src={project.desktopImage || project.image}
                        alt={`${project.title} - Laptop desktop view`}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 opacity-95 group-hover:opacity-100"
                        loading="lazy"
                      />
                      <div className="absolute top-4 left-4 bg-navy-950/90 border border-navy-700 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-sm">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                        <span>{project.industry}</span>
                      </div>
                      <button
                        onClick={() => toggleView(project.id, 'mobile')}
                        className="absolute bottom-3 right-3 bg-navy-950/95 hover:bg-orange-sms text-white border border-navy-700 hover:border-orange-sms px-3 py-1.5 rounded-xl text-[11px] font-bold flex items-center gap-1.5 shadow-lg transition-all"
                      >
                        <Smartphone className="w-3.5 h-3.5 text-orange-400 group-hover:text-white" />
                        <span>📱 Switch to Mobile View</span>
                      </button>
                    </div>
                  ) : (
                    <div className="relative py-6 px-4 bg-gradient-to-b from-navy-950 via-slate-950 to-navy-950 flex flex-col items-center justify-center min-h-[420px]">
                      <div className="w-[240px] sm:w-[260px] aspect-[9/18.5] bg-slate-950 rounded-[2.2rem] border-4 border-slate-700 shadow-2xl p-1 relative flex flex-col mx-auto overflow-hidden ring-4 ring-orange-sms/20">
                        <div className="w-20 h-4 bg-slate-900 rounded-full mx-auto mt-2 mb-1 z-20 flex items-center justify-center">
                          <span className="w-2 h-2 rounded-full bg-slate-800" />
                        </div>
                        <div className="flex-1 w-full rounded-[1.8rem] overflow-hidden bg-slate-900 relative">
                          <img
                            src={project.mobileImage || project.desktopImage}
                            alt={`${project.title} - Mobile view`}
                            className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                          />
                        </div>
                        <div className="w-20 h-1 bg-slate-600 rounded-full mx-auto my-1.5" />
                      </div>
                      <button
                        onClick={() => toggleView(project.id, 'desktop')}
                        className="mt-4 bg-navy-900 hover:bg-navy-800 text-slate-200 border border-navy-700 px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow transition"
                      >
                        <Monitor className="w-3.5 h-3.5 text-orange-400" />
                        <span>Switch to Laptop View</span>
                      </button>
                    </div>
                  )}

                </div>

                {/* Body Content */}
                <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      {project.logo && (
                        <div className="w-8 h-8 rounded-lg bg-white p-1 flex items-center justify-center shadow-sm border border-slate-200 shrink-0">
                          <img src={project.logo} alt="" className="max-h-full max-w-full object-contain" />
                        </div>
                      )}
                      <span className="text-xs font-extrabold text-orange-400 uppercase tracking-wider">
                        {project.clientName}
                      </span>
                    </div>

                    <h3 className="text-2xl font-extrabold text-white leading-snug group-hover:text-orange-300 transition">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed mt-3">
                      {project.description}
                    </p>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-navy-800">
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Services Delivered:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.servicesDelivered.map((srv, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-navy-800 border border-navy-700 text-slate-200 font-semibold px-3 py-1 rounded-lg"
                        >
                          {srv}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-navy-800 flex items-center justify-between">
                    <a
                      href={getWhatsAppUrl(`Hi SMS team, I saw your case study for ${project.clientName} and want to discuss a similar project.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-extrabold text-orange-400 hover:text-orange-300 transition"
                    >
                      <span>Build Something Similar</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-300 hover:text-white"
                      >
                        <span>Visit Live Store</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};
