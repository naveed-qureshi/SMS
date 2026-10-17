import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../../data/testimonials';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-white border-b border-slate-200/70 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-sms bg-orange-sms/10 px-3.5 py-1 rounded-full border border-orange-sms/20">
            Real Client Experiences
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight">
            Trusted by Business Leaders
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Read direct feedback from directors and managers at Edifier Pakistan and SkyVolt regarding our service, reliability, and business impact.
          </p>
        </div>

        {/* Testimonials Carousel Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS_DATA.map((item, idx) => (
            <div
              key={item.id}
              className="bg-surface-50 rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition flex flex-col justify-between"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center space-x-1 text-amber-400 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-6">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Bio */}
              <div className="pt-4 border-t border-slate-200/80 flex items-center gap-3">
                <img
                  src={item.avatar}
                  alt={item.author}
                  className="w-12 h-12 rounded-full object-cover border-2 border-orange-sms/40 shadow-sm"
                  onError={(e) => {
                    e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(item.author)}&background=0A192F&color=fff`;
                  }}
                />
                <div>
                  <h4 className="font-extrabold text-sm text-navy-900 leading-tight">
                    {item.author}
                  </h4>
                  <p className="text-xs text-orange-sms font-bold">
                    {item.role}
                  </p>
                  <p className="text-[11px] text-slate-500 font-medium">
                    {item.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Verification Note */}
        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 bg-slate-100 px-4 py-2 rounded-full">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>All testimonials are published with permission from verified SMS client partnerships.</span>
          </div>
        </div>

      </div>
    </section>
  );
};
