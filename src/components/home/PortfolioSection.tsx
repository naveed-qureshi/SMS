import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import { PORTFOLIO_PROJECTS, ProjectItem } from '../../data/portfolio';

export const PortfolioSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredProjects = activeFilter === 'all'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter(p => p.industry.toLowerCase().includes(activeFilter.toLowerCase()));

  return (
    <section id="portfolio" className="py-24 bg-surface-50 border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-sms bg-orange-sms/10 px-3.5 py-1 rounded-full border border-orange-sms/20">
              Verified Track Record
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight">
              Built for Real Businesses
            </h2>
            <p className="text-base text-slate-600">
              Explore actual platforms engineered for established distributors, renewable energy firms, and commercial enterprises. No fabricated case studies or unverified figures.
            </p>
          </div>

          <Link
            to="/portfolio"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-navy-900 font-bold text-xs shadow-sm transition"
          >
            <span>View All Case Studies</span>
            <ArrowRight className="w-4 h-4 text-orange-sms" />
          </Link>
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Screenshot Frame */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 border-b border-slate-100">
                <img
                  src={project.image}
                  alt={`${project.title} - Smart Multi Solutions case study`}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                
                {/* Verified Tag */}
                <div className="absolute top-3 left-3 bg-navy-950/80 backdrop-blur-md text-white px-3 py-1 rounded-full text-[11px] font-bold flex items-center gap-1.5 shadow-sm">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Verified SMS Project</span>
                </div>

                {/* Industry Tag */}
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md text-navy-900 px-3 py-1 rounded-full text-[11px] font-extrabold shadow-sm">
                  {project.industry}
                </div>
              </div>

              {/* Card Details */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="text-xs font-bold text-orange-sms uppercase tracking-wider mb-1">
                    {project.clientName}
                  </div>
                  <h3 className="text-xl font-extrabold text-navy-900 leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2.5">
                    {project.description}
                  </p>
                </div>

                {/* Delivered Services Pills */}
                <div className="space-y-3 pt-3 border-t border-slate-100">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Delivered Capabilities:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.servicesDelivered.map((srv, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] bg-slate-100 text-slate-700 font-semibold px-2.5 py-1 rounded-md"
                      >
                        {srv}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Link */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-medium">
                    Verified Deployment
                  </span>
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-extrabold text-orange-sms hover:text-orange-sms-hover group/link"
                    >
                      <span>View Live Store</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <Link
                      to="/portfolio"
                      className="inline-flex items-center gap-1.5 text-xs font-extrabold text-navy-900 hover:text-orange-sms"
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
