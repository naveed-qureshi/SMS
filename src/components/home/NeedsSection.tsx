import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Rocket, Store, ShoppingCart, Users, Cpu, 
  ArrowRight, Check, Sparkles, MessageSquare 
} from 'lucide-react';
import { getWhatsAppUrl } from '../../data/packages';

interface NeedsSectionProps {
  onSelectPath?: (pathId: string) => void;
}

export const NeedsSection: React.FC<NeedsSectionProps> = ({ onSelectPath }) => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const pathwayCards = [
    {
      id: 'start-business',
      title: 'Start a Business Online',
      quote: '"I have a business idea and need to establish my digital presence."',
      description: 'Turn your concept into a credible commercial venture with a complete initial brand identity, high-speed website, corporate email, and WhatsApp lead capture.',
      recommendedSolution: 'Custom Startup Web Presence',
      icon: Rocket,
      accentColor: 'from-blue-600 to-cyan-600',
      tagColor: 'bg-blue-50 text-blue-700 border-blue-200',
      bulletPoints: [
        'Domain setup & business emails',
        'Modern bespoke startup website',
        'Direct WhatsApp contact triggers',
        'Basic Google Analytics & training'
      ],
      ctaText: 'Start Your Business'
    },
    {
      id: 'take-business-online',
      title: 'Take My Business Online',
      quote: '"I already have an offline business and want an authoritative online presence."',
      description: 'Upgrade from word-of-mouth to an authoritative, search-optimized web presence that builds immense trust with corporate and retail clients.',
      recommendedSolution: 'Corporate Digital Platform',
      icon: Store,
      accentColor: 'from-emerald-600 to-teal-600',
      tagColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      bulletPoints: [
        'Custom bespoke UI/UX architecture',
        'Google Business Profile setup for local search',
        'Service catalogs & lead capture forms',
        'Speed & security hardening'
      ],
      ctaText: 'Establish Authority'
    },
    {
      id: 'start-selling-online',
      title: 'Start Selling Online',
      quote: '"I want an e-commerce store and want to sell products online seamlessly."',
      description: 'Stop relying solely on unpredictable Instagram DMs. Launch an automated storefront equipped with local card payments, Cash on Delivery, and courier sync.',
      recommendedSolution: 'Tailored E-Commerce Storefront',
      isHeroChoice: true,
      icon: ShoppingCart,
      accentColor: 'from-orange-sms to-amber-600',
      tagColor: 'bg-orange-sms/10 text-orange-sms border-orange-sms/30',
      bulletPoints: [
        'Full WooCommerce / Shopify store & shopping cart',
        'PayFast / Safepay & Cash on Delivery (COD)',
        'Automated WhatsApp order notices',
        'Product inventory management training'
      ],
      ctaText: 'Launch Online Store'
    },
    {
      id: 'get-more-customers',
      title: 'Get More Customers & Leads',
      quote: '"I already have an online presence but need traffic, leads and sales."',
      description: 'Ignite consistent customer demand with systematic Google SEO rankings, targeted Meta and Google ad campaigns, and conversion rate audits.',
      recommendedSolution: 'SEO & Performance Growth Strategy',
      icon: Users,
      accentColor: 'from-indigo-600 to-violet-600',
      tagColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      bulletPoints: [
        'Targeted local & technical SEO foundation',
        'Inbound sales funnels & conversion optimization',
        'Social media & paid ad campaigns',
        'Monthly ROI and pipeline tracking'
      ],
      ctaText: 'Drive Leads & Sales'
    },
    {
      id: 'automate-my-business',
      title: 'Automate My Business',
      quote: '"I want to save time with AI, automation, dashboards and digital tools."',
      description: 'Eliminate repetitive manual tasks. Connect your customer orders, spreadsheets, WhatsApp notifications, and accounting into an automated system.',
      recommendedSolution: 'AI Chatbots & Process Automation',
      icon: Cpu,
      accentColor: 'from-purple-600 to-pink-600',
      tagColor: 'bg-purple-50 text-purple-700 border-purple-200',
      bulletPoints: [
        '24/7 AI-powered WhatsApp assistants',
        'CRM, Google Sheets & automated invoicing',
        'Live business intelligence dashboards',
        'Custom API workflow automation'
      ],
      ctaText: 'Automate Workflows'
    }
  ];

  return (
    <section id="solutions-pathway" className="py-20 bg-navy-900 border-b border-navy-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-800 text-orange-sms text-xs font-bold uppercase tracking-wider border border-navy-700">
            <Sparkles className="w-3.5 h-3.5 text-orange-sms" />
            <span>Tailored Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            What Does Your Business Need Today?
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            Select where your business stands today. We will guide you directly to the practical digital solution tailored to your exact scope.
          </p>
        </div>

        {/* 5 Pathway Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {pathwayCards.map((card, idx) => {
            const Icon = card.icon;
            const isHovered = hoveredCard === card.id;

            return (
              <div 
                key={card.id}
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`group relative rounded-2xl p-7 transition-all duration-300 flex flex-col justify-between border ${
                  card.isHeroChoice 
                    ? 'bg-navy-950 border-orange-sms/60 shadow-xl shadow-orange-sms/10' 
                    : 'bg-navy-950/80 hover:bg-navy-950 border-navy-800 hover:border-navy-700 hover:shadow-xl'
                } ${idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
              >
                {card.isHeroChoice && (
                  <div className="absolute -top-3 left-6 px-3 py-0.5 rounded-full bg-orange-sms text-white text-[11px] font-extrabold tracking-wide uppercase shadow-sm">
                    Most Requested
                  </div>
                )}

                <div className="space-y-4">
                  {/* Icon & Title Row */}
                  <div className="flex items-center gap-3.5">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.accentColor} text-white flex items-center justify-center shadow-md shrink-0 group-hover:scale-105 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Goal 0{idx + 1}</span>
                      <h3 className="text-lg font-extrabold text-white leading-tight group-hover:text-orange-sms transition">
                        {card.title}
                      </h3>
                    </div>
                  </div>

                  {/* Customer Mindset Quote */}
                  <div className="p-3 rounded-lg bg-navy-900 text-xs italic text-slate-300 font-medium border-l-2 border-orange-sms">
                    {card.quote}
                  </div>

                  {/* Solution Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {card.description}
                  </p>

                  {/* What is included bullet points */}
                  <div className="space-y-1.5 pt-2 border-t border-navy-800">
                    {card.bulletPoints.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Area */}
                <div className="mt-6 pt-4 border-t border-navy-800 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400 font-medium">Recommended:</span>
                    <span className="font-bold text-white text-[11px]">
                      {card.recommendedSolution}
                    </span>
                  </div>

                  <a
                    href={getWhatsAppUrl(`Hi Smart Multi Solutions team, I want to discuss: "${card.title}" (${card.recommendedSolution}). Can we connect?`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                      card.isHeroChoice
                        ? 'bg-orange-sms text-white hover:bg-orange-sms-hover shadow-sm'
                        : 'bg-navy-800 text-white hover:bg-navy-700 border border-navy-700'
                    }`}
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>{card.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
