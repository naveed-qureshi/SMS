import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  CheckCircle2,
  Sparkles,
  ShieldAlert,
  ArrowRight,
  HelpCircle
} from 'lucide-react';
import { COMPANY_CONTACT, getWhatsAppUrl } from '../data/packages';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    businessName: '',
    service: 'E-Commerce Store & Online Ordering Platform',
    budget: 'Growing SME / E-Commerce Expansion',
    message: '',
    preferredContact: 'WhatsApp'
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Please enter your full name';
    if (!formData.phone.trim()) errs.phone = 'Please enter your WhatsApp or phone number';
    if (!formData.email.trim() || !formData.email.includes('@')) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) errs.message = 'Please share a brief summary of what you are looking to build';
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setIsSubmitting(true);

    // Simulate reliable state progression
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const whatsappInquiryMessage = `Hello Smart Multi Solutions! 
My Name: ${formData.fullName}
Business: ${formData.businessName || 'New Venture'}
Service Required: ${formData.service}
Budget: ${formData.budget}
Details: ${formData.message}`;

  return (
    <div className="min-h-screen bg-navy-950 text-slate-100 pt-28 pb-20">
      {/* Header Banner */}
      <section className="bg-navy-950 text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark-pattern opacity-15 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sms-orange/20 border border-sms-orange/30 text-sms-orange text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Let&apos;s Build Together</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
              Connect with Your Growth Partner
            </h1>
            <p className="mt-4 text-lg text-slate-300">
              Have a question about starting an online store, running Meta ads, automating WhatsApp orders, or upgrading your existing website? We are based in Lahore and always glad to speak with you.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form & Contact Information Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Contact Cards & Quick WhatsApp Triggers */}
          <div className="lg:col-span-5 space-y-6">
            {/* Primary Direct Card */}
            <div className="bg-navy-900 text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-navy-800">
              <h3 className="text-xl font-extrabold text-white mb-2">Direct Contact Channels</h3>
              <p className="text-slate-300 text-xs sm:text-sm mb-6 leading-relaxed">
                Reach out directly for an immediate response during business hours. We prefer WhatsApp for fast, direct communication.
              </p>

              <div className="space-y-4">
                <a
                  href={getWhatsAppUrl("Hello SMS! I would like to speak with a digital business advisor.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-3.5 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-sms-orange/20 text-sms-orange flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">WhatsApp / Phone</span>
                    <strong className="text-white text-sm font-semibold group-hover:text-sms-orange transition-colors">
                      {COMPANY_CONTACT.phone}
                    </strong>
                    <span className="text-[11px] text-emerald-400 block mt-0.5">&bull; Online for immediate chats</span>
                  </div>
                </a>

                <a
                  href={`mailto:${COMPANY_CONTACT.email}`}
                  className="flex items-start gap-4 p-3.5 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Official Inquiries</span>
                    <strong className="text-white text-sm font-semibold group-hover:text-blue-300 transition-colors">
                      {COMPANY_CONTACT.email}
                    </strong>
                    <span className="text-[11px] text-slate-400 block mt-0.5">Response within 24 hours</span>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Headquarters</span>
                    <strong className="text-white text-sm font-semibold">
                      {COMPANY_CONTACT.address}
                    </strong>
                    <span className="text-[11px] text-slate-400 block mt-0.5">Lahore, Punjab, Pakistan</span>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Operating Hours</span>
                    <strong className="text-white text-sm font-semibold">
                      Monday &ndash; Saturday: 10:00 AM &ndash; 7:00 PM PKT
                    </strong>
                    <span className="text-[11px] text-slate-400 block mt-0.5">Sundays: Emergency support only</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp Topics */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Quick WhatsApp Discussions</span>
              <div className="grid grid-cols-1 gap-2 pt-1">
                {[
                  {
                    title: 'Start an E-Commerce Store',
                    msg: 'Hello SMS! I want to start an e-commerce store with COD in Pakistan.'
                  },
                  {
                    title: 'Automate WhatsApp Operations',
                    msg: 'Hello SMS! I would like to automate WhatsApp order confirmations and customer support.'
                  },
                  {
                    title: 'Create AI Generated Video Ads',
                    msg: 'Hello SMS! I want to create high-converting AI Video Ads for my products.'
                  },
                  {
                    title: 'Request a Custom Business Audit',
                    msg: 'Hello SMS! I would like to request an audit of my current website and digital marketing.'
                  }
                ].map((item, idx) => (
                  <a
                    key={idx}
                    href={getWhatsAppUrl(item.msg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-navy-950 hover:bg-navy-850 border border-navy-800 hover:border-orange-500/40 text-xs font-medium text-slate-200 transition-all group"
                  >
                    <span>{item.title}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-orange-400 group-hover:translate-x-1 transition-transform" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Form */}
          <div className="lg:col-span-7">
            <div className="bg-navy-900/80 backdrop-blur-md rounded-2xl p-6 sm:p-10 shadow-2xl border border-navy-800">
              {submitted ? (
                <div className="text-center py-12 space-y-6">
                  <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-extrabold text-navy-950">Thank You, {formData.fullName}!</h3>
                    <p className="text-slate-600 text-sm mt-2 max-w-md mx-auto leading-relaxed">
                      Your consultation request has been received by our Lahore strategy team. We will review your project requirements and follow up via {formData.preferredContact}.
                    </p>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={getWhatsAppUrl(whatsappInquiryMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-sms-orange text-white text-sm font-bold hover:bg-sms-orange-dark transition-colors shadow-md"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Forward Details to WhatsApp Now</span>
                    </a>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="w-full sm:w-auto px-5 py-3 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-100 transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h2 className="text-2xl font-extrabold text-white">Schedule a Business Consultation</h2>
                    <p className="text-slate-400 text-xs sm:text-sm mt-1">
                      Tell us about your business goals. We review every project and respond with honest, practical recommendations.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Muhammad Usman"
                        className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 transition-all ${
                          errors.fullName
                            ? 'border-red-400 focus:ring-red-300 bg-red-950/20 text-white'
                            : 'border-navy-700 focus:ring-orange-500 focus:border-transparent bg-navy-950 text-white placeholder-slate-500'
                        }`}
                      />
                      {errors.fullName && <p className="text-red-400 text-[11px] mt-1">{errors.fullName}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                        WhatsApp / Phone Number *
                      </label>
                      <input
                        type="text"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="0320 0000000"
                        className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 transition-all ${
                          errors.phone
                            ? 'border-red-400 focus:ring-red-300 bg-red-950/20 text-white'
                            : 'border-navy-700 focus:ring-orange-500 focus:border-transparent bg-navy-950 text-white placeholder-slate-500'
                        }`}
                      />
                      {errors.phone && <p className="text-red-400 text-[11px] mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="yourname@domain.com"
                        className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 transition-all ${
                          errors.email
                            ? 'border-red-400 focus:ring-red-300 bg-red-950/20 text-white'
                            : 'border-navy-700 focus:ring-orange-500 focus:border-transparent bg-navy-950 text-white placeholder-slate-500'
                        }`}
                      />
                      {errors.email && <p className="text-red-400 text-[11px] mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                        Business Name or Website
                      </label>
                      <input
                        type="text"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        placeholder="e.g. Lahore Apparel (optional)"
                        className="w-full px-4 py-2.5 rounded-xl border border-navy-700 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-navy-950 text-white placeholder-slate-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                        Primary Service Needed
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-navy-700 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-navy-950 text-slate-200"
                      >
                        <option>E-Commerce Store & Online Ordering Platform</option>
                        <option>AI Generated Video Ads (Meta, TikTok & YouTube)</option>
                        <option>Custom Corporate / Business Website</option>
                        <option>Search Engine Optimization (SEO & Local Maps)</option>
                        <option>Digital Growth & Performance Marketing (Ads)</option>
                        <option>AI Chatbots & WhatsApp Automation</option>
                        <option>Executive BI Dashboards & Data Systems</option>
                        <option>Custom Web Application / Enterprise Portal</option>
                        <option>Full Digital Ecosystem & Ongoing Technology Partner</option>
                        <option>Other / Unsure (Need Strategic Consultation)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                        Project Stage / Scope
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-navy-700 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-navy-950 text-slate-200"
                      >
                        <option>Startup / New Launch Phase</option>
                        <option>Growing SME / E-Commerce Expansion</option>
                        <option>Established Business / Multi-Channel Scaling</option>
                        <option>Enterprise Custom Architecture & Automation</option>
                        <option>Flexible / Need Custom Scope Advisory</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                      Tell us about your project or current bottlenecks *
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="e.g. We have a clothing brand in Lahore and want to launch a website with Trax courier integration, COD verification, and WhatsApp checkout..."
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 transition-all ${
                        errors.message
                          ? 'border-red-400 focus:ring-red-300 bg-red-950/20 text-white'
                          : 'border-navy-700 focus:ring-orange-500 focus:border-transparent bg-navy-950 text-white placeholder-slate-500'
                      }`}
                    ></textarea>
                    {errors.message && <p className="text-red-400 text-[11px] mt-1">{errors.message}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                      Preferred Way to Discuss
                    </label>
                    <div className="flex flex-wrap gap-4">
                      {['WhatsApp', 'Phone Call', 'Email'].map((method) => (
                        <label key={method} className="flex items-center gap-2 cursor-pointer text-xs font-medium text-slate-300">
                          <input
                            type="radio"
                            name="preferredContact"
                            value={method}
                            checked={formData.preferredContact === method}
                            onChange={(e) => setFormData({ ...formData, preferredContact: e.target.value })}
                            className="text-orange-500 focus:ring-orange-500"
                          />
                          <span>{method}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-orange-500 text-white text-sm font-bold hover:bg-orange-600 transition-all duration-200 shadow-lg shadow-orange-500/20 disabled:opacity-60"
                    >
                      {isSubmitting ? (
                        <span>Submitting Request...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Request Business Consultation</span>
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-slate-400 mt-3 flex items-center gap-1">
                      <HelpCircle className="w-3.5 h-3.5 text-slate-400" />
                      <span>Zero spam. Direct advisory from our Lahore team. No aggressive sales pitching.</span>
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
