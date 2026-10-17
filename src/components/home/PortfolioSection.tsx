import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ShieldCheck, ArrowRight, Globe, CheckCircle } from 'lucide-react';
import { PORTFOLIO_PROJECTS } from '../../data/portfolio';

export const PortfolioSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredProjects = activeFilter === 'all'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter(p => p.industry.toLowerCase().includes(activeFilter.toLowerCase()));

  return (
    <section id="portfolio" className="py-24 bg-navy-950 border-b border-navy-850 relative">
      <div className="absolute inset-0 bg-grid-dark-pattern opacity-15 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-400 bg-orange-500/10 px-3.5 py-1 rounded-full border border-orange-500/20">
              Verified Track Record
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">Real Businesses</span>
            </h2>
            <p className="text-base text-slate-300">
              Explore actual platforms engineered for established distributors, renewable energy firms, and commercial enterprises. No fabricated case studies or unverified figures.
            </p>
          </div>

          <Link
            to="/portfolio"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-navy-700 bg-navy-900/80 hover:bg-navy-800 text-white font-bold text-xs shadow-md transition"
          >
            <span>View All Case Studies</span>
            <ArrowRight className="w-4 h-4 text-orange-400" />
          </Link>
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-navy-900/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-navy-800 shadow-xl hover:shadow-2xl hover:border-orange-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Browser Mockup Frame */}
              <div className="relative aspect-[16/10] overflow-hidden bg-navy-950 border-b border-navy-800 flex flex-col">
                {/* Browser Top Bar */}
                <div className="bg-navy-900/90 px-4 py-2 border-b border-navy-800 flex items-center justify-between text-xs select-none">
                  <div className="flex items-center space-x-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <div className="flex items-center gap-1.5 bg-navy-950/80 px-3 py-1 rounded-md text-[11px] text-slate-400 border border-navy-800/80 font-mono">
                    <Globe className="w-3 h-3 text-orange-400" />
                    <span>{project.liveUrl ? project.liveUrl.replace('https://', '') : `${project.id}.com`}</span>
                  </div>
                  <div className="text-[10px] text-emerald-400 font-bold flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" /> Live
                  </div>
                </div>

                {/* Screenshot & Visual Area */}
                <div className="relative flex-1 bg-gradient-to-br from-navy-900 via-navy-950 to-slate-900 flex items-center justify-center p-6 overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} - Smart Multi Solutions case study`}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    loading="lazy"
                    onError={(e) => {
                      // Elegant fallback banner if external image fails
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  
                  {/* Overlay Monogram & Info if image fails or before load */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none p-6 text-center -z-0 opacity-40 group-hover:opacity-60 transition">
                    <span className="text-5xl font-black text-white/20 tracking-widest uppercase">
                      {project.clientName.slice(0, 3)}
                    </span>
                  </div>

                  {/* Verified Tag */}
                  <div className="absolute top-3 left-3 bg-navy-950/90 backdrop-blur-md text-white border border-navy-700 px-3 py-1 rounded-full text-[11px] font-bold flex items-center gap-1.5 shadow-sm">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Verified SMS Client</span>
                  </div>

                  {/* Industry Tag */}
                  <div className="absolute top-3 right-3 bg-orange-500/20 border border-orange-500/30 text-orange-300 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-extrabold shadow-sm">
                    {project.industry}
                  </div>
                </div>
              </div>

              {/* Card Details */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="text-xs font-bold text-orange-400 uppercase tracking-wider mb-1">
                    {project.clientName}
                  </div>
                  <h3 className="text-xl font-extrabold text-white leading-snug group-hover:text-orange-300 transition">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-2.5">
                    {project.description}
                  </p>
                </div>

                {/* Delivered Services Pills */}
                <div className="space-y-3 pt-3 border-t border-navy-800">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Delivered Capabilities:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.servicesDelivered.map((srv, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] bg-navy-800/90 border border-navy-700 text-slate-200 font-semibold px-2.5 py-1 rounded-md"
                      >
                        {srv}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Link */}
                <div className="pt-4 border-t border-navy-800 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-medium">
                    Verified Deployment
                  </span>
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-extrabold text-orange-400 hover:text-orange-300 group/link transition"
                    >
                      <span>Visit Live Platform</span>
                      <ExternalLink className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition" />
                    </a>
                  ) : (
                    <Link
                      to="/portfolio"
                      className="inline-flex items-center gap-1.5 text-xs font-extrabold text-white hover:text-orange-400 transition"
                    >
                      <span>View Project Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  )}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
