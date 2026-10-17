import React, { useState } from 'react';
import { Shield, FileText, CheckCircle2, Clock, Lock, Sparkles, HelpCircle } from 'lucide-react';
import { COMPANY_CONTACT } from '../data/packages';

interface LegalPageProps {
  initialTab?: 'privacy' | 'terms' | 'milestones' | 'cookies';
}

export const LegalPage: React.FC<LegalPageProps> = ({ initialTab = 'privacy' }) => {
  const [activeTab, setActiveTab] = useState<'privacy' | 'terms' | 'milestones' | 'cookies'>(initialTab);

  return (
    <div className="min-h-screen bg-navy-950 text-slate-100 pt-28 pb-20">
      {/* Header Banner */}
      <section className="bg-navy-950 text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark-pattern opacity-15 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <Shield className="w-3.5 h-3.5" />
              <span>Transparency & Governance</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
              Legal, Privacy & <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">Milestone Policies</span>
            </h1>
            <p className="mt-4 text-lg text-slate-300">
              Clear terms, total asset ownership, and radical transparency. We believe honest partnerships begin with explicit expectations.
            </p>
          </div>
        </div>
      </section>

      {/* Policy Container */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="bg-navy-900/90 backdrop-blur-md rounded-2xl shadow-2xl border border-navy-800 overflow-hidden">
          {/* Tab Navigation */}
          <div className="flex border-b border-navy-800 bg-navy-950 overflow-x-auto">
            <button
              onClick={() => setActiveTab('privacy')}
              className={`flex items-center gap-2 px-6 py-4 text-xs sm:text-sm font-bold border-b-2 whitespace-nowrap transition-colors ${
                activeTab === 'privacy'
                  ? 'border-orange-500 text-white bg-navy-900'
                  : 'border-transparent text-slate-400 hover:text-white'
              }`}
            >
              <Lock className="w-4 h-4 text-orange-400" />
              <span>Privacy Policy</span>
            </button>

            <button
              onClick={() => setActiveTab('terms')}
              className={`flex items-center gap-2 px-6 py-4 text-xs sm:text-sm font-bold border-b-2 whitespace-nowrap transition-colors ${
                activeTab === 'terms'
                  ? 'border-orange-500 text-white bg-navy-900'
                  : 'border-transparent text-slate-400 hover:text-white'
              }`}
            >
              <FileText className="w-4 h-4 text-orange-400" />
              <span>Terms of Service</span>
            </button>

            <button
              onClick={() => setActiveTab('milestones')}
              className={`flex items-center gap-2 px-6 py-4 text-xs sm:text-sm font-bold border-b-2 whitespace-nowrap transition-colors ${
                activeTab === 'milestones'
                  ? 'border-orange-500 text-white bg-navy-900'
                  : 'border-transparent text-slate-400 hover:text-white'
              }`}
            >
              <CheckCircle2 className="w-4 h-4 text-orange-400" />
              <span>Milestones & Ownership</span>
            </button>

            <button
              onClick={() => setActiveTab('cookies')}
              className={`flex items-center gap-2 px-6 py-4 text-xs sm:text-sm font-bold border-b-2 whitespace-nowrap transition-colors ${
                activeTab === 'cookies'
                  ? 'border-orange-500 text-white bg-navy-900'
                  : 'border-transparent text-slate-400 hover:text-white'
              }`}
            >
              <HelpCircle className="w-4 h-4 text-orange-400" />
              <span>Cookie Policy</span>
            </button>
          </div>

          {/* Policy Body */}
          <div className="p-6 sm:p-12 text-slate-300 leading-relaxed text-sm sm:text-base space-y-8">
            {activeTab === 'privacy' && (
              <>
                <div>
                  <h2 className="text-2xl font-extrabold text-white mb-3">Privacy Policy</h2>
                  <p className="text-xs text-slate-500">Last updated: October 2026</p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-white">1. Information We Collect</h3>
                  <p>
                    When you contact Smart Multi Solutions or request a consultation via our website or WhatsApp, we collect information you voluntarily provide, including your name, contact phone/WhatsApp number, email address, business name, and project requirements.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-white">2. How We Use Your Data</h3>
                  <p>
                    We use this information exclusively to communicate regarding your project, formulate technical proposals, execute agreed deliverables, and provide support. We never sell, rent, or trade your personal or commercial contact information to third-party marketing firms.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-white">3. Confidentiality of Client Systems</h3>
                  <p>
                    During the course of building e-commerce stores, hosting servers, or integrating APIs, you may grant us access to store credentials, server keys, or database access. Smart Multi Solutions treats all client credentials as strictly confidential under non-disclosure obligations. We advise clients to update all passwords upon final project handover.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-white">4. Contact Information</h3>
                  <p>
                    For questions regarding your data privacy, please email us at <a href={`mailto:${COMPANY_CONTACT.email}`} className="text-orange-400 font-semibold underline">{COMPANY_CONTACT.email}</a>.
                  </p>
                </div>
              </>
            )}

            {activeTab === 'terms' && (
              <>
                <div>
                  <h2 className="text-2xl font-extrabold text-white mb-3">Terms of Service</h2>
                  <p className="text-xs text-slate-500">Last updated: October 2026</p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-white">1. Engagement Scope</h3>
                  <p>
                    All services provided by Smart Multi Solutions are governed by agreed project scopes and formalized statements of work. Scope expansions are quoted transparently before execution.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-white">2. Client Cooperation & Asset Provision</h3>
                  <p>
                    Timely project delivery depends upon client provision of essential assets, including product images, brand guidelines, payment gateway merchant credentials, and content approvals. Delays in client feedback or asset provision automatically extend target delivery timelines.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-white">3. Third-Party Platform Policies</h3>
                  <p>
                    Third-party software, plugins, hosting providers, Meta/Google ad networks, and courier APIs are subject to their respective terms and service conditions. SMS is not responsible for policy changes, account bans, or price fluctuations implemented by third parties (e.g. Meta Ads policies or courier operational delays).
                  </p>
                </div>
              </>
            )}

            {activeTab === 'milestones' && (
              <>
                <div>
                  <h2 className="text-2xl font-extrabold text-white mb-3">Milestone Delivery & Asset Ownership Policy</h2>
                  <p className="text-xs text-slate-500">Last updated: October 2026</p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-white">1. 100% Client Asset Ownership</h3>
                  <p>
                    Unlike predatory developers who hold domains or code hostage, Smart Multi Solutions guarantees that once final payment is cleared, <strong>you own 100% of your website code, database, design files, and domain credentials</strong>. We register accounts in your name or transfer administrative control unconditionally.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-white">2. Milestone Structure</h3>
                  <p>
                    Projects follow clear structured milestones:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-slate-300">
                    <li><strong>Initial Deposit:</strong> Initiates project planning, UI mockup design, and cloud staging setup.</li>
                    <li><strong>Midpoint Review:</strong> Demonstration of working storefront, functional checkout, and database architecture.</li>
                    <li><strong>Final Handover:</strong> Quality assurance testing, live domain launch, and delivery of all administrative logins and documentation.</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-white">3. Post-Launch Warranty Support</h3>
                  <p>
                    Every website and custom digital build includes complimentary post-launch bug fixing and warranty support covering any errors within original project specifications.
                  </p>
                </div>
              </>
            )}

            {activeTab === 'cookies' && (
              <>
                <div>
                  <h2 className="text-2xl font-extrabold text-white mb-3">Cookie & Analytics Policy</h2>
                  <p className="text-xs text-slate-500">Last updated: October 2026</p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-white">1. How We Use Cookies</h3>
                  <p>
                    We use standard, anonymous cookies and analytics pixels to evaluate website traffic, understand which solution guides are most useful to visitors, and optimize our user interface. No sensitive personal data is extracted through our cookie implementations.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-white">2. Managing Preferences</h3>
                  <p>
                    You can configure your browser settings to decline cookies or alert you when cookies are being placed on your device. Most features of our website remain accessible even with third-party tracking disabled.
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
