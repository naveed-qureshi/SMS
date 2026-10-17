import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare, Sparkles, CheckCircle2 } from 'lucide-react';
import { getWhatsAppUrl } from '../../data/packages';

interface FinalCtaProps {
  onOpenConsultation?: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onOpenConsultation }) => {
  return (
    <section className="relative py-24 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-850 text-white overflow-hidden">
      {/* Background patterns and glowing orbs */}
      <div className="absolute inset-0 bg-grid-dark-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-sms/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-sms/20 border border-orange-sms/40 text-orange-sms font-extrabold text-xs uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Smart Multi Solutions • Your Growth Partner</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-balance leading-tight">
          Your Business Has Potential.{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-sms via-orange-400 to-amber-300 block mt-2">
            Let's Take It Digital.
          </span>
        </h2>

        {/* Supporting Copy */}
        <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal text-balance">
          Whether you're starting from zero or ready for your next stage of growth, Smart Multi Solutions can help you choose, build and improve the right digital solution.
        </p>

        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-slate-300 font-semibold pt-2">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Tailored Scopes & Transparent ROI
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Direct 1-on-1 Consultation
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Post-Launch Support Included
          </span>
        </div>

        {/* Three Action Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
          <button
            onClick={onOpenConsultation || (() => {
              const el = document.getElementById('consultation-wizard');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
              else window.location.href = '/contact-us';
            })}
            className="w-full sm:w-auto px-7 py-4 rounded-xl text-sm font-extrabold text-white bg-gradient-to-r from-orange-sms to-orange-sms-hover shadow-lg hover:shadow-xl hover:scale-105 transition duration-200 flex items-center justify-center gap-2"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={getWhatsAppUrl("Hi Smart Multi Solutions team, I want to discuss taking my business digital.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-4 rounded-xl text-sm font-extrabold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md hover:shadow-lg transition flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-4 h-4" />
            <span>WhatsApp Us</span>
          </a>

          <Link
            to="/contact-us"
            className="w-full sm:w-auto px-7 py-4 rounded-xl text-sm font-bold text-slate-200 bg-white/10 hover:bg-white/20 border border-white/20 transition flex items-center justify-center gap-2"
          >
            <span>Get Free Consultation</span>
          </Link>
        </div>

      </div>
    </section>
  );
};
