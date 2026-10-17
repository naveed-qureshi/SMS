import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Award,
  Target,
  Users,
  Compass,
  Zap,
  TrendingUp,
  HeartHandshake,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Clock,
  Sparkles,
  MapPin,
  Building2,
  Store,
  Briefcase
} from 'lucide-react';
import { COMPANY_CONTACT, getWhatsAppUrl } from '../data/packages';
import { TESTIMONIALS_DATA } from '../data/testimonials';

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-navy-950 text-slate-100 pt-28 pb-20">
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-navy-950 text-white py-20 lg:py-28">
        <div className="absolute inset-0 bg-grid-dark-pattern opacity-15 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold uppercase tracking-wider mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>About Smart Multi Solutions</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              We Don&apos;t Just Build Websites. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
                We Build Digital Businesses.
              </span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed">
              Smart Multi Solutions (SMS) was founded in Lahore with a single conviction: Pakistani startups, retailers, and established brands don&apos;t need another web development vendor that dumps code and vanishes. They need an accountable, practical <strong>Digital Growth Partner</strong> that helps them acquire customers, generate revenue, and automate operations.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={getWhatsAppUrl("Hello SMS! I'd like to learn more about partnering with Smart Multi Solutions.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-orange-500 text-white font-bold hover:bg-orange-600 transition-all duration-300 shadow-lg shadow-orange-500/25"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Talk Directly with Us</span>
              </a>
              <Link
                to="/solutions"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-navy-900 text-white font-semibold hover:bg-navy-850 transition-colors border border-navy-750"
              >
                <span>Explore All Solutions</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Core Problem & Our Mission */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        <div className="bg-navy-900/80 backdrop-blur-md rounded-2xl p-8 sm:p-12 shadow-2xl border border-navy-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-400">The Problem in Pakistan&apos;s Tech Market</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Why Traditional Agency Models Fail Growing Businesses
            </h2>
            <p className="text-slate-300 leading-relaxed">
              Most business owners in Pakistan have experienced the frustrating cycle: one freelancer designs a website that looks fine on a desktop but fails on mobile phones. Another marketer runs Meta ads that burn through ad spend without generating qualified inquiries. A third person promises SEO that never yields organic rank, while order management remains trapped in manual WhatsApp chats and paper notebooks.
            </p>
            <p className="text-slate-300 leading-relaxed font-medium">
              Smart Multi Solutions eliminates this vendor fragmentation. When you partner with SMS, your storefront design, payment gateway integration, WhatsApp customer order workflows, digital advertising, and cloud management all work in unison under one accountable roof.
            </p>
          </div>
          <div className="lg:col-span-5 bg-navy-950/90 border border-navy-800 rounded-xl p-6 sm:p-8 text-white space-y-4">
            <div className="flex items-center gap-3 text-orange-400">
              <Compass className="w-6 h-6" />
              <h3 className="font-bold text-lg text-white">Our Mission</h3>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              To empower Pakistani entrepreneurs and established enterprises with practical, battle-tested digital infrastructure that increases sales, saves manual labor hours, and builds long-term enterprise value.
            </p>
            <div className="pt-4 border-t border-navy-850 space-y-3">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <MapPin className="w-4 h-4 text-orange-400 shrink-0" />
                <span>Headquartered in Lahore, Pakistan</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Transparent tailored scopes & verifiable client references</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 4 Principles That Guide Every Project */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-orange-400">How We Operate</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
            The 4 Foundational Principles of SMS
          </h2>
          <p className="text-slate-300 mt-3">
            Every technical decision, design choice, and marketing recommendation we provide is filtered through these four commitments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-navy-900/80 backdrop-blur-sm rounded-2xl p-8 border border-navy-800 shadow-xl hover:border-orange-500/40 transition">
            <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400 flex items-center justify-center mb-6">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">1. Business First, Technology Second</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              We never recommend a framework, tool, or ad channel simply because it is trendy. If a simple, fast WooCommerce store with WhatsApp checkout generates faster ROI than a heavy custom enterprise app, that is what we recommend. Technology serves your balance sheet, not our ego.
            </p>
          </div>

          <div className="bg-navy-900/80 backdrop-blur-sm rounded-2xl p-8 border border-navy-800 shadow-xl hover:border-orange-500/40 transition">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-6">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">2. Single Point of Accountability</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              No more finger-pointing between your designer, your web developer, your hosting provider, and your social media manager. SMS handles the entire digital stack, ensuring cohesive brand identity, consistent tracking pixels, and seamless customer user journeys.
            </p>
          </div>

          <div className="bg-navy-900/80 backdrop-blur-sm rounded-2xl p-8 border border-navy-800 shadow-xl hover:border-orange-500/40 transition">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-6">
              <Store className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">3. Grounded in Pakistani Market Realities</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              We understand that over 80% of online shoppers in Pakistan prefer Cash on Delivery (COD), that WhatsApp is the primary communication channel, and that courier return ratios (RTO) can make or break an e-commerce brand. We build workflows specifically engineered for local commercial behavior.
            </p>
          </div>

          <div className="bg-navy-900/80 backdrop-blur-sm rounded-2xl p-8 border border-navy-800 shadow-xl hover:border-orange-500/40 transition">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center mb-6">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">4. Radical Scope & Timeline Transparency</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              We provide fixed-scope milestones and clear, tailored proposal scopes. You will never be hit with surprise hidden fees, mystery maintenance retainers, or hostage situations where developers withhold your domain or source code.
            </p>
          </div>
        </div>
      </section>

      {/* The Digital Growth Pathway */}
      <section className="bg-navy-900/50 border-y border-navy-850 text-white mt-24 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-400">The 6-Stage Roadmap</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
              How We Guide You from Concept to Autonomous Growth
            </h2>
            <p className="text-slate-300 mt-3 text-sm sm:text-base">
              Wherever you are starting from, SMS provides the exact next step suited to your scope and organizational maturity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                step: '01',
                title: 'Idea & Validation',
                desc: 'Auditing your value proposition, competitive landscape, target Pakistani audience, and product unit economics.',
                icon: Compass
              },
              {
                step: '02',
                title: 'Digital Foundation',
                desc: 'Building responsive, fast, secure web infrastructure with domain, business email, and brand identity.',
                icon: Building2
              },
              {
                step: '03',
                title: 'Commercial Enablement',
                desc: 'Setting up e-commerce catalogs, shopping carts, WhatsApp ordering, COD options, and payment gateway connections.',
                icon: Store
              },
              {
                step: '04',
                title: 'Customer Acquisition',
                desc: 'Driving organic search visibility (SEO) and high-converting Meta / Google ad campaigns with precise pixel tracking.',
                icon: TrendingUp
              },
              {
                step: '05',
                title: 'Process Automation & AI',
                desc: 'Eliminating manual data entry by connecting lead inquiries to CRM, AI video ads, automated WhatsApp confirmations, and dispatch.',
                icon: Zap
              },
              {
                step: '06',
                title: 'Scaling & Intelligence',
                desc: 'Deploying custom business dashboards, customer retention systems, and proactive maintenance retainers.',
                icon: Award
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-navy-950/80 border border-navy-800 rounded-xl p-6 relative hover:border-orange-500/40 transition-colors">
                <span className="text-orange-400 font-mono font-extrabold text-2xl mb-2 block">{item.step}</span>
                <div className="flex items-center gap-2 mb-2">
                  <item.icon className="w-5 h-5 text-orange-400" />
                  <h3 className="font-bold text-white text-lg">{item.title}</h3>
                </div>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verified Client Relationships */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-orange-400">Real Relationships</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
            Trusted by Leaders in Pakistan
          </h2>
          <p className="text-slate-300 mt-2 text-sm">
            We don&apos;t display fake awards or generic stock photos. Here are real business leaders who trust Smart Multi Solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS_DATA.slice(0, 2).map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-navy-900/80 backdrop-blur-sm rounded-2xl p-8 border border-navy-800 shadow-xl flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <blockquote className="text-slate-300 italic text-sm sm:text-base leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
              </div>
              <div className="flex items-center gap-4 mt-6 pt-6 border-t border-navy-800">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-14 h-14 rounded-full object-cover border-2 border-orange-400/40"
                  onError={(e) => {
                    e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.author)}&background=0A192F&color=fff`;
                  }}
                />
                <div>
                  <h4 className="font-bold text-white text-base">{testimonial.author}</h4>
                  <p className="text-xs text-orange-400">{testimonial.role} &bull; <strong className="text-slate-300">{testimonial.company}</strong></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Location & Contact CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="bg-gradient-to-br from-navy-900 via-navy-950 to-navy-900 rounded-3xl p-8 sm:p-14 text-white relative overflow-hidden border border-navy-800 shadow-2xl">
          <div className="max-w-3xl">
            <span className="text-orange-400 font-bold text-xs uppercase tracking-wider">Ready to Start?</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
              Let&apos;s Discuss Your Business Growth Strategy Today
            </h2>
            <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              Whether you are an established retailer in Lahore looking to double your digital revenue or an entrepreneur with a new product idea, we are ready to listen, advise, and execute.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={getWhatsAppUrl("Hello SMS! I am interested in scheduling a consultation with your strategy team.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-orange-500 text-white font-bold hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/25"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Message on WhatsApp ({COMPANY_CONTACT.phone})</span>
              </a>
              <Link
                to="/contact-us"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-navy-800 text-white font-semibold hover:bg-navy-750 transition-colors border border-navy-700"
              >
                <span>Complete Inquiry Form</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
