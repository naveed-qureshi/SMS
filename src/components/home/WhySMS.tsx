import React from 'react';
import { Target, Lightbulb, TrendingUp, Layers, HeartHandshake, CheckCircle2 } from 'lucide-react';

export const WhySMS: React.FC = () => {
  const pillars = [
    {
      title: 'BUSINESS FIRST',
      quote: 'We start with your goals, not technology.',
      desc: 'We do not sell software tools for the sake of selling technology. We evaluate your profit margins, customer purchase behavior, and commercial targets before writing a single line of code.',
      icon: Target,
      color: 'from-blue-600 to-indigo-600'
    },
    {
      title: 'PRACTICAL SOLUTIONS',
      quote: 'We focus on solutions that make business sense.',
      desc: 'No unnecessary complexity or bloated enterprise subscriptions. We deliver lean, effective systems designed around how Pakistani businesses and consumers actually transact.',
      icon: Lightbulb,
      color: 'from-amber-500 to-orange-sms'
    },
    {
      title: 'MODULAR & SCALABLE',
      quote: 'Start with what you need and expand as you grow.',
      desc: 'Launch with a focused digital foundation and expand smoothly to full e-commerce, automated workflows, or performance marketing as your revenues justify expansion. You never rebuild from zero.',
      icon: TrendingUp,
      color: 'from-emerald-600 to-teal-600'
    },
    {
      title: 'ONE DIGITAL PARTNER',
      quote: 'Website, e-commerce, marketing, SEO, AI and automation under one roof.',
      desc: 'Never again waste time coordinating between a web designer who blames your host, an SEO person who blames your code, and an ad agency with no technical skills. We handle the whole ecosystem.',
      icon: Layers,
      color: 'from-purple-600 to-indigo-600'
    },
    {
      title: 'PERSONAL SUPPORT',
      quote: 'We stay involved beyond the initial launch.',
      desc: 'Our relationship does not end when your website deploys. We provide admin walkthroughs, post-launch care, and ongoing operational maintenance for your peace of mind.',
      icon: HeartHandshake,
      color: 'from-rose-500 to-pink-600'
    }
  ];

  return (
    <section id="why-sms" className="py-24 bg-white border-b border-slate-200/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-sms bg-orange-sms/10 px-3.5 py-1 rounded-full border border-orange-sms/20">
            Our Core Distinction
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight">
            More Than a Service Provider.{' '}
            <span className="text-orange-sms block mt-1">Your Digital Growth Partner.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            We operate as an extension of your team, providing practical guidance tailored to your specific scope and business stage.
          </p>
        </div>

        {/* 5 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;

            return (
              <div
                key={idx}
                className="bg-surface-50 rounded-2xl p-6 border border-slate-200 hover:border-slate-300 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} text-white flex items-center justify-center mb-5 shadow-sm group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-base font-extrabold text-navy-900 tracking-tight mb-2">
                    {item.title}
                  </h3>

                  <div className="text-xs font-bold text-orange-sms mb-3 italic">
                    "{item.quote}"
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-1.5 text-[11px] font-bold text-emerald-700">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>SMS Standard</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
