import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, Mail, MapPin, MessageSquare, 
  ArrowRight, Shield, Heart, ExternalLink 
} from 'lucide-react';
import { COMPANY_CONTACT, getWhatsAppUrl } from '../../data/packages';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          
          {/* Brand Col (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block">
              <img 
                src="/logo.png" 
                alt="Smart Multi Solutions"
                className="h-12 w-auto object-contain brightness-110"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const fallback = document.getElementById('footer-brand-fallback');
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              <div id="footer-brand-fallback" className="hidden items-center gap-2">
                <div className="w-10 h-10 rounded-lg bg-white/10 text-white font-extrabold flex items-center justify-center text-xl border border-orange-sms">
                  <span className="text-white">S</span><span className="text-orange-sms">M</span><span className="text-white">S</span>
                </div>
                <div>
                  <span className="font-extrabold text-white text-lg block">SMART MULTI SOLUTIONS</span>
                  <span className="text-xs text-orange-sms font-bold block uppercase tracking-wider">Your Growth Partner</span>
                </div>
              </div>
            </Link>

            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              Smart Multi Solutions (SMS) is a Pakistan-based digital solutions agency helping startups, small businesses, retailers, and established companies build their digital presence, sell online, attract customers, automate operations, and scale sustainably.
            </p>

            <div className="flex items-center space-x-2 text-xs text-orange-sms font-bold uppercase tracking-wider bg-orange-sms/10 p-2.5 rounded-lg border border-orange-sms/20 max-w-sm">
              <span>Build</span>
              <span>•</span>
              <span>Grow</span>
              <span>•</span>
              <span>Automate</span>
              <span className="text-slate-400 font-normal ml-auto">Lahore, Pakistan</span>
            </div>

            {/* Social Channels */}
            <div className="pt-2">
              <span className="text-xs font-semibold text-slate-400 block mb-2">Connect With Us</span>
              <div className="flex items-center space-x-3">
                <a 
                  href="https://www.facebook.com/SmartMultiSolutions/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition"
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white hover:bg-pink-600 hover:border-pink-600 transition"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white hover:bg-blue-700 hover:border-blue-700 transition"
                  aria-label="LinkedIn"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a 
                  href="https://youtube.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white hover:bg-red-600 hover:border-red-600 transition"
                  aria-label="YouTube"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Solutions */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2 flex items-center justify-between">
              <span>Solutions</span>
              <span className="w-2 h-2 rounded-full bg-orange-sms"></span>
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/website-development" className="hover:text-orange-sms transition flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-slate-500" /> Web Development
                </Link>
              </li>
              <li>
                <Link to="/ecommerce-development" className="hover:text-orange-sms transition flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-slate-500" /> E-Commerce Stores
                </Link>
              </li>
              <li>
                <Link to="/seo-services" className="hover:text-orange-sms transition flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-slate-500" /> SEO & Google Ranking
                </Link>
              </li>
              <li>
                <Link to="/digital-marketing" className="hover:text-orange-sms transition flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-slate-500" /> Digital Marketing
                </Link>
              </li>
              <li>
                <Link to="/ai-solutions" className="hover:text-orange-sms transition flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-slate-500" /> AI Business Tools
                </Link>
              </li>
              <li>
                <Link to="/business-automation" className="hover:text-orange-sms transition flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-slate-500" /> Business Automation
                </Link>
              </li>
              <li>
                <Link to="/business-intelligence" className="hover:text-orange-sms transition flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-slate-500" /> Executive Dashboards
                </Link>
              </li>
              <li>
                <Link to="/business-support" className="hover:text-orange-sms transition flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-slate-500" /> Remote Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Navigation */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-orange-sms transition">Home</Link>
              </li>
              <li>
                <Link to="/solutions" className="hover:text-orange-sms transition flex items-center gap-1">
                  <span>Custom Solutions</span>
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-orange-sms transition">Verified Portfolio</Link>
              </li>
              <li>
                <Link to="/about-us" className="hover:text-orange-sms transition">About SMS</Link>
              </li>
              <li>
                <Link to="/resources" className="hover:text-orange-sms transition">Knowledge Center</Link>
              </li>
              <li>
                <Link to="/contact-us" className="hover:text-orange-sms transition">Free Consultation</Link>
              </li>
              <li>
                <a 
                  href="#faq" 
                  onClick={() => {
                    const el = document.getElementById('faq');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-orange-sms transition"
                >
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Local Presence */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Contact & Location
            </h4>
            <div className="space-y-3.5 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-orange-sms mt-0.5 shrink-0" />
                <span className="text-slate-300">
                  Lahore, Punjab, Pakistan
                  <span className="block text-xs text-slate-500">Serving clients nationwide and worldwide</span>
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-orange-sms shrink-0" />
                <a href={`tel:${COMPANY_CONTACT.phone.replace(/\s+/g, '')}`} className="text-slate-300 hover:text-white font-medium">
                  {COMPANY_CONTACT.phone}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <MessageSquare className="w-4 h-4 text-emerald-500 shrink-0" />
                <a 
                  href={getWhatsAppUrl()} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 font-semibold"
                >
                  WhatsApp Direct Chat
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-orange-sms shrink-0" />
                <a href={`mailto:${COMPANY_CONTACT.email}`} className="text-slate-300 hover:text-white">
                  {COMPANY_CONTACT.email}
                </a>
              </div>

              <div className="pt-2 text-xs text-slate-400">
                Operating Hours:<br />
                <span className="text-slate-300 font-medium">{COMPANY_CONTACT.hours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} <span className="text-slate-300 font-semibold">Smart Multi Solutions</span> (SMS). All rights reserved.
            <span className="block sm:inline sm:ml-2 text-slate-500">
              Your Digital Growth Partner. Built for Pakistani Startups & SMEs.
            </span>
          </div>

          <div className="flex items-center space-x-5">
            <Link to="/privacy-policy" className="hover:text-slate-300 transition">Privacy Policy</Link>
            <span>•</span>
            <Link to="/terms-and-conditions" className="hover:text-slate-300 transition">Terms & Conditions</Link>
            <span>•</span>
            <Link to="/cookie-policy" className="hover:text-slate-300 transition">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
