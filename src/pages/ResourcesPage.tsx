import React, { useState, useMemo } from 'react';
import {
  BookOpen,
  Search,
  Clock,
  Calendar,
  User,
  ArrowRight,
  CheckCircle2,
  X,
  MessageCircle,
  Share2,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { ARTICLES_DATA, ArticleItem } from '../data/articles';
import { COMPANY_CONTACT, getWhatsAppUrl } from '../data/packages';

export const ResourcesPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeArticle, setActiveArticle] = useState<ArticleItem | null>(null);

  const categories = useMemo(() => {
    const cats = ['All'];
    ARTICLES_DATA.forEach((art) => {
      if (!cats.includes(art.category)) {
        cats.push(art.category);
      }
    });
    return cats;
  }, []);

  const filteredArticles = useMemo(() => {
    return ARTICLES_DATA.filter((article) => {
      const matchesCat = selectedCategory === 'All' || article.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        article.title.toLowerCase().includes(query) ||
        article.excerpt.toLowerCase().includes(query) ||
        article.content.some((p) => p.toLowerCase().includes(query));
      return matchesCat && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-20">
      {/* Header Banner */}
      <section className="bg-navy-950 text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#F97316_1px,transparent_1px)] [background-size:24px_24px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sms-orange/20 border border-sms-orange/30 text-sms-orange text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>SMS Knowledge Center & Guides</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
              Practical Insights for Pakistani Entrepreneurs
            </h1>
            <p className="mt-4 text-lg text-slate-300">
              No generic theory or recycled foreign advice. Battle-tested guides on e-commerce, courier cash-on-delivery management, local SEO, WhatsApp automation, and digital growth in Pakistan.
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filter Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200/80 space-y-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search input */}
            <div className="relative w-full md:max-w-md">
              <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles, e-commerce, SEO, WhatsApp..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sms-orange focus:border-transparent text-sm transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Results count */}
            <span className="text-xs text-slate-500 font-medium whitespace-nowrap">
              Showing {filteredArticles.length} {filteredArticles.length === 1 ? 'article' : 'articles'}
            </span>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-navy-950 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {filteredArticles.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-slate-200">
            <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-navy-950">No matching guides found</h3>
            <p className="text-slate-500 text-sm mt-1">Try refining your search keyword or reset the category filter.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="mt-4 px-4 py-2 text-xs font-bold text-sms-orange bg-orange-50 hover:bg-orange-100 rounded-lg transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <article
                key={article.id}
                className="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                <div className="p-6 sm:p-7 space-y-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="px-2.5 py-1 rounded-md bg-orange-50 text-sms-orange font-bold uppercase tracking-wider text-[11px]">
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1 text-slate-400">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{article.readTime}</span>
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-navy-950 group-hover:text-sms-orange transition-colors leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>

                  <div className="pt-2">
                    <span className="text-[11px] font-bold text-navy-950 uppercase tracking-wider block mb-2">
                      Key Takeaways:
                    </span>
                    <ul className="space-y-1.5">
                      {article.keyTakeaways.slice(0, 2).map((takeaway, idx) => (
                        <li key={idx} className="flex items-start gap-1.5 text-xs text-slate-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-sms-orange shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{takeaway}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-medium flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{article.date}</span>
                  </span>
                  <button
                    onClick={() => setActiveArticle(article)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-sms-orange hover:text-sms-orange-dark transition-colors"
                  >
                    <span>Read Complete Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* Article Reader Modal */}
      {activeArticle && (
        <div
          className="fixed inset-0 z-50 bg-navy-950/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          onClick={() => setActiveArticle(null)}
        >
          <div
            className="bg-white w-full max-w-3xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8 max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-6 sm:p-8 bg-slate-50 border-b border-slate-100 flex items-start justify-between gap-4">
              <div>
                <span className="px-2.5 py-1 rounded-md bg-orange-100 text-sms-orange text-xs font-bold uppercase tracking-wider inline-block mb-2">
                  {activeArticle.category}
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-navy-950 leading-snug">
                  {activeArticle.title}
                </h2>
                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 mt-2">
                  <span className="flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-slate-400" />
                    <span>{activeArticle.author}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{activeArticle.date}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{activeArticle.readTime}</span>
                  </span>
                </div>
              </div>
              <button
                onClick={() => setActiveArticle(null)}
                className="p-2 rounded-xl bg-slate-200/80 hover:bg-slate-300 text-slate-600 transition-colors shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-700 text-sm sm:text-base leading-relaxed">
              {/* Key Takeaways Highlight Box */}
              <div className="bg-amber-50/60 border-l-4 border-sms-orange p-5 rounded-r-xl">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-navy-950 mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-sms-orange" />
                  <span>Executive Key Takeaways</span>
                </h4>
                <ul className="space-y-2">
                  {activeArticle.keyTakeaways.map((takeaway, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-sms-orange shrink-0 mt-0.5" />
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Full Content Paragraphs */}
              <div className="space-y-4">
                {activeArticle.content.map((paragraph, idx) => (
                  <p key={idx} className="text-slate-700 leading-relaxed text-sm sm:text-base">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Modal Footer CTA */}
            <div className="p-6 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-500">
                Want to implement this strategy in your business?
              </div>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <a
                  href={getWhatsAppUrl(`Hello SMS team, I just read your article "${activeArticle.title}" and would like to discuss implementing this for my business.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-sms-orange text-white text-xs font-bold hover:bg-sms-orange-dark transition-colors shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Discuss on WhatsApp</span>
                </a>
                <button
                  onClick={() => setActiveArticle(null)}
                  className="px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-100 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
