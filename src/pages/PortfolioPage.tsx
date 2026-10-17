import React, { useState } from 'react';
import { ExternalLink, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_PROJECTS } from '../data/portfolio';
import { getWhatsAppUrl } from '../data/packages';

export const PortfolioPage: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const industries = ['all', 'Consumer Electronics', 'Clean Energy', 'Hardware', 'On-Demand Services', 'FMCG'];

  const filteredProjects = selectedFilter === 'all'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter(p => p.industry.toLowerCase().includes(selectedFilter.toLowerCase()));

  return (
    <div className="bg-surface-50 min-h-screen">
      
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-white to-surface-100 py-16 sm:py-24 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-sms bg-orange-sms/10 px-3.5 py-1 rounded-full border border-orange-sms/20">
            Real Work for Real Businesses
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy-900 tracking-tight">
            Verified Case Studies & Portfolio
          </h1>
          <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Smart Multi Solutions has delivered successful e-commerce platforms, corporate websites, and operational systems for respected Pakistani brands.
          </p>
          <div className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
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
                  ? 'bg-navy-900 text-white shadow-sm'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
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
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Banner */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 border-b border-slate-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-navy-950/80 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-sm">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{project.industry}</span>
                </div>
              </div>

              {/* Body Content */}
              <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <div className="text-xs font-extrabold text-orange-sms uppercase tracking-wider mb-1">
                    {project.clientName}
                  </div>
                  <h3 className="text-2xl font-extrabold text-navy-900 leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mt-3">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-3 pt-4 border-t border-slate-100">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Services Delivered:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.servicesDelivered.map((srv, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-slate-100 text-slate-700 font-semibold px-3 py-1 rounded-lg"
                      >
                        {srv}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <a
                    href={getWhatsAppUrl(`Hi SMS team, I saw your case study for ${project.clientName} and want to discuss a similar project.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-extrabold text-navy-900 hover:text-orange-sms transition"
                  >
                    <span>Build Something Similar</span>
                    <ArrowRight className="w-4 h-4 text-orange-sms" />
                  </a>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-sms hover:text-orange-sms-hover"
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
