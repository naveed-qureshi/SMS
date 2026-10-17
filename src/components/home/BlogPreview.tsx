import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Clock, ArrowRight, Sparkles } from 'lucide-react';
import { ARTICLES_DATA } from '../../data/articles';

export const BlogPreview: React.FC = () => {
  // Show top 3 featured articles on the homepage
  const featuredArticles = ARTICLES_DATA.slice(0, 3);

  return (
    <section id="resources" className="py-24 bg-navy-900/50 border-b border-navy-850 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-400 bg-orange-500/10 px-3.5 py-1 rounded-full border border-orange-500/20">
              Free Knowledge & Strategy
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Digital Business <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">Resources</span>
            </h2>
            <p className="text-base text-slate-300">
              Practical, actionable guides on e-commerce costs, online selling, local Pakistani SEO, and AI automation written for entrepreneurs and small businesses.
            </p>
          </div>

          <Link
            to="/resources"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-navy-700 bg-navy-900/80 hover:bg-navy-850 text-white font-bold text-xs shadow-md transition"
          >
            <span>Browse All Resources</span>
            <ArrowRight className="w-4 h-4 text-orange-400" />
          </Link>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredArticles.map((article) => (
            <article
              key={article.id}
              className="bg-navy-950/80 backdrop-blur-sm rounded-2xl p-6 sm:p-7 border border-navy-800 shadow-xl hover:shadow-2xl hover:border-orange-500/40 transition flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                  <span className="font-bold text-orange-400 uppercase tracking-wider bg-orange-500/15 border border-orange-500/20 px-2.5 py-0.5 rounded-full text-[10px]">
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1 text-slate-400">
                    <Clock className="w-3.5 h-3.5" />
                    {article.readTime}
                  </span>
                </div>

                <h3 className="text-lg font-extrabold text-white group-hover:text-orange-300 transition leading-snug mb-3">
                  <Link to={`/resources#${article.slug}`}>
                    {article.title}
                  </Link>
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3 mb-4">
                  {article.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-navy-800 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-medium">{article.author}</span>
                <Link
                  to={`/resources#${article.slug}`}
                  className="font-bold text-orange-400 group-hover:text-orange-300 flex items-center gap-1 transition"
                >
                  <span>Read Guide</span>
                  <ArrowRight className="w-3.5 h-3.5 text-orange-400" />
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
