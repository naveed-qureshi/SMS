import React, { useState } from 'react';
import { ExternalLink, ShieldCheck, ArrowRight, Globe, CheckCircle } from 'lucide-react';
import { PORTFOLIO_PROJECTS } from '../data/portfolio';
import { getWhatsAppUrl } from '../data/packages';

export const PortfolioPage: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const industries = ['all', 'Consumer Electronics', 'Clean Energy', 'Hardware', 'On-Demand Services', 'FMCG'];

  const filteredProjects = selectedFilter === 'all'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter(p => p.industry.toLowerCase().includes(selectedFilter.toLowerCase()));

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
            Smart Multi Solutions has delivered successful e-commerce platforms, corporate websites, and operational systems for respected Pakistani brands.
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-navy-900/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-navy-800 shadow-xl hover:shadow-2xl hover:border-orange-500/40 transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Browser Mockup Header */}
              <div className="relative aspect-[16/10] overflow-hidden bg-navy-950 border-b border-navy-800 flex flex-col">
                <div className="bg-navy-900 px-4 py-2 border-b border-navy-800 flex items-center justify-between text-xs select-none">
                  <div className="flex items-center space-x-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <div className="flex items-center gap-1.5 bg-navy-950 px-3 py-1 rounded-md text-[11px] text-slate-400 border border-navy-800 font-mono">
                    <Globe className="w-3 h-3 text-orange-400" />
                    <span>{project.liveUrl ? project.liveUrl.replace('https://', '') : `${project.id}.com`}</span>
                  </div>
                  <div className="text-[10px] text-emerald-400 font-bold flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" /> Live
                  </div>
                </div>

                <div className="relative flex-1 bg-gradient-to-br from-navy-900 via-navy-950 to-slate-900 flex items-center justify-center overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <div className="absolute top-4 left-4 bg-navy-950/90 border border-navy-700 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-sm">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{project.industry}</span>
                  </div>
                </div>
              </div>

              {/* Body Content */}
              <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <div className="text-xs font-extrabold text-orange-400 uppercase tracking-wider mb-1">
                    {project.clientName}
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
          ))}
        </div>
      </div>

    </div>
  );
};
