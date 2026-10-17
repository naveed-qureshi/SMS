import React from 'react';
import { useLocation, useParams, Link, Navigate } from 'react-router-dom';
import { 
  CheckCircle2, ArrowRight, ShieldCheck, MessageSquare, 
  HelpCircle, ChevronRight, Phone, Sparkles, Globe 
} from 'lucide-react';
import { getServiceBySlug, getAllServices, ServiceItem } from '../data/services';
import { COMPANY_CONTACT, getWhatsAppUrl } from '../data/packages';

interface ServiceDetailPageProps {
  customSlug?: string;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ customSlug }) => {
  const location = useLocation();
  const params = useParams<{ slug?: string }>();
  const normalizedPath = location.pathname.replace(/^\//, '').replace(/^services\//, '');
  const slug = customSlug || params.slug || normalizedPath;
  const service = getServiceBySlug(slug);

  if (!service) {
    return <Navigate to="/solutions" replace />;
  }

  const relatedServices = getAllServices()
    .filter(s => s.id !== service.id && s.category === service.category)
    .slice(0, 3);

  return (
    <div className="bg-navy-950 text-slate-100 min-h-screen pt-24 pb-20">
      
      {/* Breadcrumbs */}
      <div className="bg-navy-950/90 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-xs text-slate-400 flex items-center gap-2">
          <Link to="/" className="hover:text-orange-400">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <Link to="/solutions" className="hover:text-orange-400">{service.categoryTitle}</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-white font-bold">{service.name}</span>
        </div>
      </div>

      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-gradient-to-b from-navy-900 to-navy-950 py-16 sm:py-20 border-b border-navy-800">
        <div className="absolute inset-0 bg-grid-dark-pattern opacity-15 pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 font-bold text-xs uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{service.categoryTitle} • Pakistan & Global</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {service.name} <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">in Pakistan</span>
          </h1>

          <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            {service.fullDesc}
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <a
              href={getWhatsAppUrl(`Hi Smart Multi Solutions team, I need information and custom proposal for: ${service.name}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-extrabold text-xs sm:text-sm flex items-center gap-2 shadow-lg hover:shadow-orange-500/25 transition"
            >
              <span>Get Free Consultation for {service.name}</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={`tel:${COMPANY_CONTACT.phone.replace(/\s+/g, '')}`}
              className="px-5 py-3.5 rounded-xl bg-navy-900 hover:bg-navy-850 border border-navy-750 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-md transition"
            >
              <Phone className="w-4 h-4 text-orange-400" />
              <span>{COMPANY_CONTACT.phone}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Content Column (8 cols) */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Highlights Section */}
            <div className="bg-navy-900/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-navy-800 shadow-xl space-y-6">
              <h2 className="text-2xl font-extrabold text-white">
                Key Highlights & Capabilities
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-navy-950/80 border border-navy-800">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-semibold text-slate-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Deliverables Section */}
            <div className="bg-navy-900/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-navy-800 shadow-xl space-y-6">
              <h2 className="text-2xl font-extrabold text-white">
                What We Deliver
              </h2>
              <ul className="space-y-3">
                {service.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                    <span className="w-6 h-6 rounded-full bg-orange-500/15 border border-orange-500/25 text-orange-400 font-bold flex items-center justify-center shrink-0 text-xs">
                      {idx + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Who Needs This Section */}
            <div className="bg-navy-900/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-navy-800 shadow-xl space-y-6">
              <h2 className="text-2xl font-extrabold text-white">
                Who Needs This Solution?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {service.whoNeedsThis.map((who, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-navy-950/80 border border-navy-800 text-xs sm:text-sm text-slate-300 font-medium">
                    {who}
                  </div>
                ))}
              </div>
            </div>

            {/* Service-Specific FAQs */}
            {service.faqs.length > 0 && (
              <div className="bg-navy-900/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-navy-800 shadow-xl space-y-6">
                <h2 className="text-2xl font-extrabold text-white">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {service.faqs.map((faq, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-navy-950/80 border border-navy-800">
                      <h3 className="font-bold text-sm text-white mb-2">
                        {faq.question}
                      </h3>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Sidebar CTA & Related (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Consultation Widget */}
            <div className="bg-navy-900 text-white rounded-2xl p-6 shadow-2xl border border-navy-800 space-y-4 sticky top-24">
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-orange-500/20 text-orange-400 text-[11px] font-bold border border-orange-500/30">
                <Sparkles className="w-3 h-3" />
                <span>Talk to an Advisor</span>
              </div>
              
              <h3 className="text-xl font-extrabold text-white">
                Start Your {service.name} Project
              </h3>

              <p className="text-xs text-slate-300 leading-relaxed">
                Connect directly with our senior digital strategists in Lahore to discuss your budget, timeline, and goals.
              </p>

              <div className="space-y-2 pt-2">
                <a
                  href={getWhatsAppUrl(`Hi SMS team, I would like to schedule a consultation regarding ${service.name}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Instant WhatsApp Connect</span>
                </a>

                <Link
                  to="/contact-us"
                  className="w-full py-3 px-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs flex items-center justify-center gap-2 transition shadow-md"
                >
                  <span>Request Custom Scope</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="pt-3 border-t border-navy-800 text-[11px] text-slate-400 space-y-1">
                <div>✓ 100% Customized Proposals & Scope</div>
                <div>✓ Direct Technical Advisory</div>
                <div>✓ Post-Launch Technical Support Included</div>
              </div>
            </div>

            {/* Related Services in Category */}
            {relatedServices.length > 0 && (
              <div className="bg-navy-900/80 backdrop-blur-sm rounded-2xl p-6 border border-navy-800 shadow-xl space-y-4">
                <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">
                  Related {service.categoryTitle} Services
                </h4>
                <div className="space-y-2">
                  {relatedServices.map((rel) => (
                    <Link
                      key={rel.id}
                      to={`/${rel.slug}`}
                      className="block p-3 rounded-xl hover:bg-navy-850 border border-transparent hover:border-navy-750 transition"
                    >
                      <div className="text-xs font-bold text-slate-200 hover:text-orange-400 flex items-center justify-between">
                        <span>{rel.name}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
                      </div>
                      <p className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">
                        {rel.shortDesc}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}

          </div>

        </div>
      </div>

    </div>
  );
};
