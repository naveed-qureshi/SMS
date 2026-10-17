import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, X, Phone, MessageSquare, ChevronDown, 
  Globe, TrendingUp, Cpu, Layers, ArrowRight, CheckCircle2 
} from 'lucide-react';
import { COMPANY_CONTACT, getWhatsAppUrl } from '../../data/packages';

interface NavbarProps {
  onOpenConsultation?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page navigation
  useEffect(() => {
    setMobileMenuOpen(false);
    setSolutionsDropdownOpen(false);
  }, [location.pathname]);

  const solutionCategories = [
    {
      title: 'Digital Business',
      desc: 'Websites, E-Commerce, Domains & Hosting',
      icon: Globe,
      link: '/website-development',
      color: 'text-blue-600 bg-blue-50'
    },
    {
      title: 'Digital Growth',
      desc: 'SEO, Digital Marketing, Social Media & Ads',
      icon: TrendingUp,
      link: '/seo-services',
      color: 'text-emerald-600 bg-emerald-50'
    },
    {
      title: 'AI & Automation',
      desc: 'AI Chatbots, Process Automation & Workflows',
      icon: Cpu,
      link: '/ai-solutions',
      color: 'text-purple-600 bg-purple-50'
    },
    {
      title: 'Business Support',
      desc: 'Executive Dashboards, Excel Modeling & BI',
      icon: Layers,
      link: '/business-intelligence',
      color: 'text-orange-600 bg-orange-50'
    },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-navy-950/95 backdrop-blur-md shadow-lg border-b border-navy-800 py-3' 
        : 'bg-navy-950 border-b border-navy-800/80 py-4'
    }`}>
      {/* Top micro-bar for quick local credibility */}
      <div className="hidden lg:block border-b border-navy-800/80 pb-2 mb-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-xs text-slate-400 font-medium">
          <div className="flex items-center space-x-4">
            <span className="flex items-center text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 mr-1.5 animate-pulse"></span>
              Digital Business Partner for Pakistani Startups & SMEs
            </span>
            <span>•</span>
            <span>Lahore, Pakistan</span>
          </div>
          <div className="flex items-center space-x-4">
            <a 
              href={`tel:${COMPANY_CONTACT.phone.replace(/\s+/g, '')}`} 
              className="hover:text-orange-sms transition flex items-center gap-1"
            >
              <Phone className="w-3 h-3 text-orange-sms" /> {COMPANY_CONTACT.phone}
            </a>
            <span>•</span>
            <a 
              href={getWhatsAppUrl("Hi SMS team, I'd like a free consultation on digital solutions.")}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 transition font-semibold flex items-center gap-1"
            >
              <MessageSquare className="w-3 h-3 text-emerald-400" /> WhatsApp Direct
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <img 
                src="/logo.png" 
                alt="Smart Multi Solutions (SMS) Logo"
                className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105 brightness-110"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const fallback = document.getElementById('brand-fallback');
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              <div id="brand-fallback" className="hidden items-center gap-2">
                <div className="w-10 h-10 rounded-lg bg-navy-900 text-white font-extrabold flex items-center justify-center text-xl shadow-md border border-orange-sms">
                  <span className="text-white">S</span><span className="text-orange-sms">M</span><span className="text-white">S</span>
                </div>
                <div>
                  <span className="font-extrabold text-white text-lg leading-tight block">SMART MULTI</span>
                  <span className="text-[10px] tracking-wider text-orange-sms font-bold block uppercase">Solutions</span>
                </div>
              </div>
            </div>
            <div className="hidden sm:block border-l border-navy-700 pl-3">
              <span className="text-xs uppercase tracking-wider font-extrabold text-white block">
                YOUR GROWTH PARTNER
              </span>
              <span className="text-[11px] text-slate-400 font-medium block">
                Build • Grow • Automate
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            <Link 
              to="/" 
              className={`px-3 py-2 text-sm font-semibold rounded-md transition ${
                location.pathname === '/' 
                  ? 'text-orange-sms bg-orange-sms/10' 
                  : 'text-slate-300 hover:text-white hover:bg-navy-900'
              }`}
            >
              Home
            </Link>

            {/* Solutions Mega Menu */}
            <div 
              className="relative"
              onMouseEnter={() => setSolutionsDropdownOpen(true)}
              onMouseLeave={() => setSolutionsDropdownOpen(false)}
            >
              <button 
                className={`flex items-center gap-1 px-3 py-2 text-sm font-semibold rounded-md transition ${
                  location.pathname.includes('/website') || location.pathname.includes('/seo') || location.pathname.includes('/ai') || location.pathname.includes('/business')
                    ? 'text-orange-sms bg-orange-sms/10'
                    : 'text-slate-300 hover:text-white hover:bg-navy-900'
                }`}
                onClick={() => setSolutionsDropdownOpen(!solutionsDropdownOpen)}
                aria-expanded={solutionsDropdownOpen}
              >
                <span>Solutions</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${solutionsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Box */}
              {solutionsDropdownOpen && (
                <div className="absolute top-full left-0 w-80 lg:w-96 bg-navy-900 rounded-xl shadow-2xl border border-navy-700 p-3 mt-1 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-3 py-1.5">
                    Explore By Business Stage
                  </div>
                  <div className="space-y-1">
                    {solutionCategories.map((item, idx) => {
                      const Icon = item.icon;
                      return (
                        <Link 
                          key={idx}
                          to={item.link}
                          className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-navy-800 transition group"
                        >
                          <div className="p-2 rounded-lg shrink-0 bg-navy-800 text-orange-sms border border-navy-700">
                            <Icon className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="text-sm font-bold text-slate-200 group-hover:text-orange-sms transition flex items-center gap-1">
                              {item.title}
                              <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-orange-sms" />
                            </div>
                            <p className="text-xs text-slate-400 leading-snug">
                              {item.desc}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                  <div className="mt-2 pt-2 border-t border-navy-800 px-3 flex justify-between items-center text-xs">
                    <span className="text-slate-400 font-medium">All 4 digital pillars</span>
                    <Link to="/solutions" className="text-orange-sms font-bold hover:underline">
                      View All Solutions →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link 
              to="/solutions" 
              className={`px-3 py-2 text-sm font-semibold rounded-md transition ${
                location.pathname === '/solutions' 
                  ? 'text-orange-sms bg-orange-sms/10' 
                  : 'text-slate-300 hover:text-white hover:bg-navy-900'
              }`}
            >
              Solutions
            </Link>

            <Link 
              to="/portfolio" 
              className={`px-3 py-2 text-sm font-semibold rounded-md transition ${
                location.pathname === '/portfolio' 
                  ? 'text-orange-sms bg-orange-sms/10' 
                  : 'text-slate-300 hover:text-white hover:bg-navy-900'
              }`}
            >
              Portfolio
            </Link>

            <Link 
              to="/about-us" 
              className={`px-3 py-2 text-sm font-semibold rounded-md transition ${
                location.pathname === '/about-us' 
                  ? 'text-orange-sms bg-orange-sms/10' 
                  : 'text-slate-300 hover:text-white hover:bg-navy-900'
              }`}
            >
              About
            </Link>

            <Link 
              to="/resources" 
              className={`px-3 py-2 text-sm font-semibold rounded-md transition ${
                location.pathname === '/resources' 
                  ? 'text-orange-sms bg-orange-sms/10' 
                  : 'text-slate-300 hover:text-white hover:bg-navy-900'
              }`}
            >
              Resources
            </Link>

            <Link 
              to="/contact-us" 
              className={`px-3 py-2 text-sm font-semibold rounded-md transition ${
                location.pathname === '/contact-us' 
                  ? 'text-orange-sms bg-orange-sms/10' 
                  : 'text-slate-300 hover:text-white hover:bg-navy-900'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-2 lg:gap-3">
            <a 
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 rounded-lg transition border border-emerald-200"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenConsultation || (() => {
                const el = document.getElementById('consultation-wizard');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
                else window.location.href = '/contact-us';
              })}
              className="px-4 py-2.5 rounded-lg text-sm font-bold text-white bg-gradient-to-r from-orange-sms to-orange-sms-hover shadow-md hover:shadow-lg hover:opacity-95 transition flex items-center gap-2"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] bg-navy-950 border-b border-navy-800 shadow-2xl p-4 max-h-[85vh] overflow-y-auto animate-in slide-in-from-top-4 duration-200 text-white">
          <div className="flex flex-col space-y-2">
            <Link 
              to="/" 
              className="px-3 py-2.5 rounded-lg text-base font-bold text-white hover:bg-navy-900 flex items-center justify-between"
            >
              <span>Home</span>
            </Link>

            <div className="border-y border-navy-850 py-2">
              <div className="px-3 py-1 text-xs uppercase font-extrabold text-orange-sms tracking-wider">
                Solutions & Services
              </div>
              <div className="grid grid-cols-1 gap-1 mt-1">
                {solutionCategories.map((cat, idx) => (
                  <Link
                    key={idx}
                    to={cat.link}
                    className="px-3 py-2 text-sm font-semibold text-slate-300 hover:text-orange-sms hover:bg-navy-900 rounded-lg flex items-center justify-between"
                  >
                    <span>{cat.title}</span>
                    <span className="text-xs text-slate-400">Explore</span>
                  </Link>
                ))}
              </div>
            </div>

            <Link 
              to="/solutions" 
              className="px-3 py-2.5 rounded-lg text-base font-bold text-white hover:bg-navy-900 flex items-center justify-between"
            >
              <span>Solutions & Services</span>
              <span className="text-xs bg-orange-sms/20 text-orange-sms px-2 py-0.5 rounded-full font-bold">Custom Scope</span>
            </Link>

            <Link 
              to="/portfolio" 
              className="px-3 py-2.5 rounded-lg text-base font-bold text-white hover:bg-navy-900"
            >
              Verified Portfolio
            </Link>

            <Link 
              to="/about-us" 
              className="px-3 py-2.5 rounded-lg text-base font-bold text-white hover:bg-navy-900"
            >
              About Smart Multi Solutions
            </Link>

            <Link 
              to="/resources" 
              className="px-3 py-2.5 rounded-lg text-base font-bold text-white hover:bg-navy-900"
            >
              Knowledge & Guides
            </Link>

            <Link 
              to="/contact-us" 
              className="px-3 py-2.5 rounded-lg text-base font-bold text-white hover:bg-navy-900"
            >
              Contact Us
            </Link>

            {/* Mobile Actions */}
            <div className="pt-3 space-y-2 border-t border-slate-100">
              <a
                href={getWhatsAppUrl("Hi SMS, I want to talk on WhatsApp about a new project.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-lg bg-emerald-600 text-white font-bold flex items-center justify-center gap-2 shadow-sm"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Talk on WhatsApp</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenConsultation) {
                    onOpenConsultation();
                  } else {
                    const el = document.getElementById('consultation-wizard');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                    else window.location.href = '/contact-us';
                  }
                }}
                className="w-full py-3 px-4 rounded-lg bg-navy-900 text-white font-bold flex items-center justify-center gap-2 shadow-md hover:bg-navy-850"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4 text-orange-sms" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
