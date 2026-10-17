import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { getWhatsAppUrl, COMPANY_CONTACT } from '../../data/packages';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [quickQuery, setQuickQuery] = useState('');

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const finalMsg = quickQuery.trim() 
      ? `Hi SMS team, I have an inquiry about my business: ${quickQuery}` 
      : "Hi Smart Multi Solutions team, I'd like to get a free consultation on my digital project.";
    window.open(getWhatsAppUrl(finalMsg), '_blank');
    setIsOpen(false);
    setQuickQuery('');
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end print:hidden">
      {/* Quick popup message box */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in slide-in-from-bottom-5 duration-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-lg">
                <MessageSquare className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-sm">Smart Multi Solutions</h4>
                <p className="text-xs text-emerald-100 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse"></span>
                  Online • Typically replies in 15 mins
                </p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-emerald-100 hover:text-white p-1 rounded-lg hover:bg-white/10 transition"
              aria-label="Close WhatsApp chat prompt"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-slate-50 space-y-3">
            <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm text-xs text-slate-700 leading-relaxed">
              👋 Salam & Hello! Looking to start your website, online store, or automate your business operations? Tell us your goal and our Pakistani advisory team will assist you immediately.
            </div>

            <form onSubmit={handleSendMessage} className="space-y-2">
              <input
                type="text"
                value={quickQuery}
                onChange={(e) => setQuickQuery(e.target.value)}
                placeholder="What are you looking to build?"
                className="w-full text-xs px-3 py-2.5 rounded-lg border border-slate-300 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none"
              />
              <button
                type="submit"
                className="w-full py-2.5 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition"
              >
                <span>Send WhatsApp Message</span>
                <MessageSquare className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2.5 px-4 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
        aria-label="Chat on WhatsApp with Smart Multi Solutions"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-100"></span>
        </span>
        <MessageSquare className="w-5 h-5" />
        <span className="text-xs font-extrabold uppercase tracking-wide hidden sm:inline">
          WhatsApp Us
        </span>
      </button>
    </div>
  );
};
