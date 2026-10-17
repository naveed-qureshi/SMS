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
    <div className="bg-surface-50 min-h-screen">
      
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-xs text-slate-500 flex items-center gap-2">
          <Link to="/" className="hover:text-orange-sms">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
          <Link to="/solutions" className="hover:text-orange-sms">{service.categoryTitle}</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
          <span className="text-slate-800 font-bold">{service.name}</span>
        </div>
      </div>

      {/* Hero Banner */}
      <section className="bg-gradient-to-b from-white to-surface-100 py-16 sm:py-20 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-sms/10 text-orange-sms font-bold text-xs uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{service.categoryTitle} • Pakistan & Global</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-navy-900 tracking-tight leading-tight">
            {service.name} in Pakistan
          </h1>

          <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {service.fullDesc}
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <a
              href={getWhatsAppUrl(`Hi Smart Multi Solutions team, I need information and pricing for: ${service.name}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-orange-sms to-orange-sms-hover text-white font-extrabold text-xs sm:text-sm flex items-center gap-2 shadow-md hover:shadow-lg transition"
            >
              <span>Get Free Consultation for {service.name}</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={`tel:${COMPANY_CONTACT.phone.replace(/\s+/g, '')}`}
              className="px-5 py-3.5 rounded-xl bg-white border border-slate-300 hover:bg-slate-50 text-navy-900 font-bold text-xs sm:text-sm flex items-center gap-2 shadow-sm transition"
            >
              <Phone className="w-4 h-4 text-orange-sms" />
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
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
              <h2 className="text-2xl font-extrabold text-navy-900">
                Key Highlights & Capabilities
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-surface-50 border border-slate-100">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-semibold text-slate-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Deliverables Section */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
              <h2 className="text-2xl font-extrabold text-navy-900">
                What We Deliver
              </h2>
              <ul className="space-y-3">
                {service.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                    <span className="w-6 h-6 rounded-full bg-orange-sms/10 text-orange-sms font-bold flex items-center justify-center shrink-0 text-xs">
                      {idx + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Who Needs This Section */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
              <h2 className="text-2xl font-extrabold text-navy-900">
                Who Needs This Solution?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {service.whoNeedsThis.map((who, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 font-medium">
                    {who}
                  </div>
                ))}
              </div>
            </div>

            {/* Service-Specific FAQs */}
            {service.faqs.length > 0 && (
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
                <h2 className="text-2xl font-extrabold text-navy-900">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {service.faqs.map((faq, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-surface-50 border border-slate-200">
                      <h3 className="font-bold text-sm text-navy-900 mb-2">
                        {faq.question}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
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
            <div className="bg-navy-900 text-white rounded-2xl p-6 shadow-xl border border-navy-800 space-y-4 sticky top-24">
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-orange-sms/20 text-orange-sms text-[11px] font-bold">
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
                  className="w-full py-3 px-4 rounded-xl bg-orange-sms hover:bg-orange-sms-hover text-white font-bold text-xs flex items-center justify-center gap-2 transition"
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
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
                <h4 className="text-sm font-extrabold text-navy-900 uppercase tracking-wider">
                  Related {service.categoryTitle} Services
                </h4>
                <div className="space-y-2">
                  {relatedServices.map((rel) => (
                    <Link
                      key={rel.id}
                      to={`/${rel.slug}`}
                      className="block p-3 rounded-xl hover:bg-surface-50 border border-transparent hover:border-slate-200 transition"
                    >
                      <div className="text-xs font-bold text-navy-900 hover:text-orange-sms flex items-center justify-between">
                        <span>{rel.name}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                      </div>
                      <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">
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
