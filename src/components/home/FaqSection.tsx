import React, { useState } from 'react';
import { ChevronDown, Search, HelpCircle, MessageSquare } from 'lucide-react';
import { FAQS_DATA } from '../../data/faqs';
import { getWhatsAppUrl } from '../../data/packages';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', 'Pricing & Packages', 'E-Commerce', 'Process', 'AI & Automation', 'Marketing & SEO'];

  const filteredFaqs = FAQS_DATA.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="faq" className="py-24 bg-navy-950 border-b border-navy-850 relative">
      <div className="absolute inset-0 bg-grid-dark-pattern opacity-10 pointer-events-none" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-400 bg-orange-500/10 px-3.5 py-1 rounded-full border border-orange-500/20">
            Clear Answers
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">Questions</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal">
            Everything you need to know about website costs, e-commerce stores, payment gateways, and business automation in Pakistan.
          </p>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="mb-10 space-y-4">
          <div className="relative max-w-md mx-auto">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions (e.g., cost, WooCommerce, COD, SEO)..."
              className="w-full text-xs sm:text-sm pl-10 pr-4 py-3 rounded-xl border border-navy-700 bg-navy-900/90 text-white placeholder-slate-500 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none shadow-inner"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-1.5 pt-1">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold capitalize transition ${
                  selectedCategory === cat
                    ? 'bg-orange-500 text-white shadow-md'
                    : 'bg-navy-900/80 text-slate-300 border border-navy-800 hover:bg-navy-850'
                }`}
              >
                {cat === 'all' ? 'All Questions' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;

              return (
                <div
                  key={faq.id}
                  className="rounded-2xl border border-navy-800 bg-navy-900/70 backdrop-blur-sm overflow-hidden shadow-lg transition hover:border-navy-700"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-base font-extrabold text-white leading-snug">
                      {faq.question}
                    </span>
                    <span className={`p-1.5 rounded-full text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180 text-orange-400 bg-orange-500/20' : ''}`}>
                      <ChevronDown className="w-5 h-5" />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-navy-800 animate-in fade-in duration-200">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-10 bg-navy-900/70 rounded-2xl border border-navy-800 p-6">
              <HelpCircle className="w-10 h-10 text-slate-500 mx-auto mb-2" />
              <p className="text-sm text-slate-300 font-semibold">No questions matched your search query.</p>
              <button
                onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
                className="mt-2 text-xs font-bold text-orange-400 hover:underline"
              >
                Reset Search Filters
              </button>
            </div>
          )}
        </div>

        {/* Have another question? */}
        <div className="mt-12 text-center bg-navy-900/90 p-6 rounded-2xl border border-navy-800 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="text-sm font-bold text-white">Have a specific question about your project?</h4>
            <p className="text-xs text-slate-400">Ask us directly on WhatsApp and receive a direct answer from an advisor.</p>
          </div>
          <a
            href={getWhatsAppUrl("Hi SMS team, I have a question about my business.")}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-2 shadow-md transition"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Ask on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
