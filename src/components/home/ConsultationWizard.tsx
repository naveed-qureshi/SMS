import React, { useState } from 'react';
import { 
  Building2, ShoppingBag, Briefcase, Rocket, UserCheck, 
  Target, TrendingUp, Cpu, RefreshCw, MessageSquare, 
  Send, CheckCircle, ArrowRight, ArrowLeft 
} from 'lucide-react';
import { COMPANY_CONTACT, getWhatsAppUrl } from '../../data/packages';

export const ConsultationWizard: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [businessType, setBusinessType] = useState<string>('Startup / New Business Idea');
  const [goal, setGoal] = useState<string>('Build My First Professional Website');
  const [budget, setBudget] = useState<string>('Startup / New Digital Foundation');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    notes: ''
  });
  const [submitted, setSubmitted] = useState<boolean>(false);

  const businessTypes = [
    { label: 'Startup / New Idea', icon: Rocket },
    { label: 'Retailer / Physical Shop', icon: ShoppingBag },
    { label: 'Existing Business / SME', icon: Building2 },
    { label: 'Professional / Consultant', icon: Briefcase },
    { label: 'Other Organization', icon: UserCheck },
  ];

  const goals = [
    { label: 'Build My First Professional Website', icon: Target },
    { label: 'Start Selling Online with E-Commerce', icon: ShoppingBag },
    { label: 'Get More Customers, Traffic & SEO', icon: TrendingUp },
    { label: 'Automate Operations with AI & Dashboards', icon: Cpu },
    { label: 'Redesign Existing Website / Complete Revamp', icon: RefreshCw },
  ];

  const budgetTiers = [
    'Startup / New Digital Foundation',
    'Custom E-Commerce Storefront & Checkout',
    'Digital Growth, SEO & Marketing Expansion',
    'Custom Business Automation & Enterprise Architecture',
    'Flexible / Need Expert Advisory & Custom Quote'
  ];

  const handleNext = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Auto-generate detailed WhatsApp message
    const summaryText = `*New Consultation Request from smartmultisolutions.com*
👤 *Name:* ${formData.name || 'Not provided'}
📱 *Phone:* ${formData.phone || 'Not provided'}
📧 *Email:* ${formData.email || 'Not provided'}
🏢 *Business Type:* ${businessType}
🎯 *Primary Goal:* ${goal}
💰 *Approx. Budget:* ${budget}
📝 *Notes:* ${formData.notes || 'None'}`;

    window.open(getWhatsAppUrl(summaryText), '_blank');
  };

  return (
    <section id="consultation-wizard" className="py-24 bg-gradient-to-b from-surface-100 to-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-sms bg-orange-sms/10 px-3.5 py-1 rounded-full border border-orange-sms/20">
            Free Personalized Advisory
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
            Not Sure What You Need?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Tell us about your business, budget, and goals. We will help you identify the right digital solution without wasting money on tools you don't need yet.
          </p>
        </div>

        {/* Wizard Container */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl relative overflow-hidden">
          
          {/* Progress Indicator */}
          <div className="mb-8">
            <div className="flex items-center justify-between text-xs font-bold text-slate-500 mb-2">
              <span>Step {currentStep} of 4</span>
              <span className="text-orange-sms">
                {currentStep === 1 && '1. Your Business Type'}
                {currentStep === 2 && '2. Your Main Objective'}
                {currentStep === 3 && '3. Budget Bracket'}
                {currentStep === 4 && '4. Contact & Plan'}
              </span>
            </div>
            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
              <div 
                className="bg-gradient-to-r from-orange-sms to-orange-600 h-full transition-all duration-300 rounded-full"
                style={{ width: `${(currentStep / 4) * 100}%` }}
              />
            </div>
          </div>

          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-extrabold text-navy-900">
                Thank You, {formData.name || 'Friend'}!
              </h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Your consultation request has been received. A pre-filled WhatsApp message has opened so you can connect directly with our Lahore advisory team.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={getWhatsAppUrl(`Hi SMS team, this is ${formData.name}. I just filled the consultation form regarding my ${businessType}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Open WhatsApp Again</span>
                </a>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setCurrentStep(1);
                  }}
                  className="px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs"
                >
                  Submit Another Inquiry
                </button>
              </div>
            </div>
          ) : (
            <div>
              {/* Step 1: Business Type */}
              {currentStep === 1 && (
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-navy-900">
                    What type of business do you have?
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {businessTypes.map((item, idx) => {
                      const Icon = item.icon;
                      const isSelected = businessType === item.label;

                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setBusinessType(item.label)}
                          className={`p-4 rounded-xl border text-left flex items-center gap-3 transition ${
                            isSelected
                              ? 'border-orange-sms bg-orange-sms/5 ring-2 ring-orange-sms/20 text-navy-900 font-bold'
                              : 'border-slate-200 hover:border-slate-300 text-slate-700'
                          }`}
                        >
                          <div className={`p-2.5 rounded-lg shrink-0 ${isSelected ? 'bg-orange-sms text-white' : 'bg-slate-100 text-slate-600'}`}>
                            <Icon className="w-5 h-5" />
                          </div>
                          <span className="text-sm">{item.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Step 2: Main Objective */}
              {currentStep === 2 && (
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-navy-900">
                    What do you want to achieve digitally?
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {goals.map((item, idx) => {
                      const Icon = item.icon;
                      const isSelected = goal === item.label;

                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setGoal(item.label)}
                          className={`p-4 rounded-xl border text-left flex items-center gap-3 transition ${
                            isSelected
                              ? 'border-orange-sms bg-orange-sms/5 ring-2 ring-orange-sms/20 text-navy-900 font-bold'
                              : 'border-slate-200 hover:border-slate-300 text-slate-700'
                          }`}
                        >
                          <div className={`p-2.5 rounded-lg shrink-0 ${isSelected ? 'bg-orange-sms text-white' : 'bg-slate-100 text-slate-600'}`}>
                            <Icon className="w-5 h-5" />
                          </div>
                          <span className="text-sm">{item.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Step 3: Budget Bracket */}
              {currentStep === 3 && (
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-navy-900">
                    What is your approximate budget?
                  </h3>
                  <div className="space-y-2.5">
                    {budgetTiers.map((tier, idx) => {
                      const isSelected = budget === tier;

                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setBudget(tier)}
                          className={`w-full p-4 rounded-xl border text-left flex items-center justify-between transition ${
                            isSelected
                              ? 'border-orange-sms bg-orange-sms/5 ring-2 ring-orange-sms/20 text-navy-900 font-bold'
                              : 'border-slate-200 hover:border-slate-300 text-slate-700'
                          }`}
                        >
                          <span className="text-sm">{tier}</span>
                          <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${isSelected ? 'border-orange-sms bg-orange-sms text-white' : 'border-slate-300'}`}>
                            {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Step 4: Contact Information */}
              {currentStep === 4 && (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-lg font-bold text-navy-900">
                    How can our advisory team contact you?
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Tariq Mehmood"
                        className="w-full text-sm px-4 py-3 rounded-xl border border-slate-300 focus:border-orange-sms focus:ring-1 focus:ring-orange-sms outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        WhatsApp / Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 0320 1234567"
                        className="w-full text-sm px-4 py-3 rounded-xl border border-slate-300 focus:border-orange-sms focus:ring-1 focus:ring-orange-sms outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. tariq@mybusiness.com"
                      className="w-full text-sm px-4 py-3 rounded-xl border border-slate-300 focus:border-orange-sms focus:ring-1 focus:ring-orange-sms outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Any specific notes or existing website link?
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Tell us a little more about your products or current challenges..."
                      className="w-full text-sm px-4 py-3 rounded-xl border border-slate-300 focus:border-orange-sms focus:ring-1 focus:ring-orange-sms outline-none resize-none"
                    />
                  </div>

                  {/* Summary recap */}
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600 flex flex-wrap gap-x-4 gap-y-1">
                    <span><strong className="text-slate-800">Type:</strong> {businessType}</span>
                    <span>•</span>
                    <span><strong className="text-slate-800">Goal:</strong> {goal}</span>
                    <span>•</span>
                    <span><strong className="text-slate-800">Budget:</strong> {budget}</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-orange-sms to-orange-sms-hover text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition"
                  >
                    <span>Get Free Consultation & Recommendation</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}

              {/* Wizard Navigation Buttons */}
              {currentStep < 4 && (
                <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                  {currentStep > 1 ? (
                    <button
                      type="button"
                      onClick={handleBack}
                      className="px-4 py-2.5 rounded-lg border border-slate-300 text-slate-700 text-xs font-bold hover:bg-slate-50 flex items-center gap-1.5 transition"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Back</span>
                    </button>
                  ) : (
                    <div />
                  )}

                  <button
                    type="button"
                    onClick={handleNext}
                    className="px-6 py-3 rounded-xl bg-navy-900 hover:bg-navy-850 text-white text-xs font-extrabold flex items-center gap-2 shadow-md transition"
                  >
                    <span>Next Step</span>
                    <ArrowRight className="w-4 h-4 text-orange-sms" />
                  </button>
                </div>
              )}
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
