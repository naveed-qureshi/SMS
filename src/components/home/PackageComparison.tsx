import React, { useState } from 'react';
import { Check, X, ChevronDown, ChevronUp, Sparkles, MessageSquare } from 'lucide-react';
import { PACKAGES_DATA, COMPARISON_DIMENSIONS, getWhatsAppUrl } from '../../data/packages';

export const PackageComparison: React.FC = () => {
  const [selectedMobilePackage, setSelectedMobilePackage] = useState<string>('ecommerce-solution');

  return (
    <section id="comparison" className="py-20 bg-white border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
            Capabilities Matrix
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
            Comprehensive Capabilities Breakdown
          </h2>
          <p className="text-base text-slate-600">
            Compare our specialized operational pillars side-by-side to understand which solution matches your business requirements.
          </p>
        </div>

        {/* Desktop View: Full Responsive Comparison Table */}
        <div className="hidden lg:block overflow-x-auto rounded-2xl border border-slate-200 shadow-sm bg-white">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-50 border-b border-slate-200">
                <th className="py-5 px-6 font-extrabold text-sm text-navy-900 w-1/4">
                  Feature / Capability
                </th>
                {PACKAGES_DATA.map((pkg) => (
                  <th 
                    key={pkg.id} 
                    className={`py-5 px-4 font-bold text-center w-[15%] ${
                      pkg.id === 'ecommerce-solution' 
                        ? 'bg-orange-sms/10 text-navy-900 border-x border-orange-sms/30' 
                        : 'text-slate-800'
                    }`}
                  >
                    <div className="text-sm font-extrabold">{pkg.name}</div>
                    <div className="text-[11px] text-orange-sms font-bold mt-0.5">{pkg.badge}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs">
              {COMPARISON_DIMENSIONS.map((dim, idx) => (
                <tr 
                  key={idx} 
                  className={`hover:bg-slate-50/80 transition ${
                    idx % 2 === 0 ? 'bg-white' : 'bg-surface-50/50'
                  }`}
                >
                  <td className="py-4 px-6 font-semibold text-navy-900">
                    {dim.name}
                  </td>
                  {PACKAGES_DATA.map((pkg) => {
                    const val = dim.values[pkg.id];
                    const isEcom = pkg.id === 'ecommerce-solution';

                    return (
                      <td 
                        key={pkg.id} 
                        className={`py-4 px-4 text-center ${
                          isEcom ? 'bg-orange-sms/5 border-x border-orange-sms/20 font-medium' : ''
                        }`}
                      >
                        {typeof val === 'boolean' ? (
                          val ? (
                            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 text-emerald-700">
                              <Check className="w-3.5 h-3.5" />
                            </span>
                          ) : (
                            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-slate-100 text-slate-300">
                              <X className="w-3.5 h-3.5" />
                            </span>
                          )
                        ) : (
                          <span className={`text-xs ${isEcom ? 'font-bold text-navy-900' : 'text-slate-700'}`}>
                            {val}
                          </span>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="bg-surface-50 border-t border-slate-200">
                <td className="py-5 px-6 font-bold text-xs text-slate-500">
                  Ready to proceed?
                </td>
                {PACKAGES_DATA.map((pkg) => (
                  <td 
                    key={pkg.id} 
                    className={`py-4 px-3 text-center ${
                      pkg.id === 'ecommerce-solution' ? 'bg-orange-sms/10 border-x border-orange-sms/30' : ''
                    }`}
                  >
                    <a
                      href={getWhatsAppUrl(`Hi Smart Multi Solutions, I would like to discuss: ${pkg.name}.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center justify-center gap-1 py-2 px-3 rounded-lg text-xs font-bold transition ${
                        pkg.id === 'ecommerce-solution'
                          ? 'bg-orange-sms text-white hover:bg-orange-sms-hover shadow-sm'
                          : 'bg-navy-900 text-white hover:bg-navy-800'
                      }`}
                    >
                      <span>Inquire</span>
                    </a>
                  </td>
                ))}
              </tr>
            </tfoot>
          </table>
        </div>

        {/* Mobile View: Expandable Tabs */}
        <div className="lg:hidden space-y-4">
          <div className="flex space-x-2 overflow-x-auto pb-2 scrollbar-none">
            {PACKAGES_DATA.map((pkg) => (
              <button
                key={pkg.id}
                onClick={() => setSelectedMobilePackage(pkg.id)}
                className={`px-4 py-2 rounded-xl text-xs font-extrabold whitespace-nowrap transition ${
                  selectedMobilePackage === pkg.id
                    ? 'bg-orange-sms text-white shadow-md'
                    : 'bg-surface-100 text-slate-700 hover:bg-surface-200'
                }`}
              >
                {pkg.name}
              </button>
            ))}
          </div>

          {/* Active Mobile Card */}
          {(() => {
            const activePkg = PACKAGES_DATA.find(p => p.id === selectedMobilePackage) || PACKAGES_DATA[1];
            return (
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-6">
                <div className="flex justify-between items-start border-b border-slate-100 pb-4">
                  <div>
                    <span className="text-[10px] font-bold text-orange-sms uppercase tracking-wider">{activePkg.badge}</span>
                    <h3 className="text-xl font-extrabold text-navy-900">{activePkg.name}</h3>
                    <p className="text-xs text-slate-500 mt-1">{activePkg.targetAudience}</p>
                  </div>
                </div>

                <div className="space-y-3 text-xs">
                  {COMPARISON_DIMENSIONS.map((dim, idx) => (
                    <div key={idx} className="flex justify-between py-2 border-b border-slate-50 gap-4">
                      <span className="font-semibold text-slate-600">{dim.name}</span>
                      <span className="font-bold text-navy-900 text-right">
                        {typeof dim.values[activePkg.id] === 'boolean' ? (
                          dim.values[activePkg.id] ? (
                            <span className="text-emerald-600 font-bold">Included</span>
                          ) : (
                            <span className="text-slate-400">Optional</span>
                          )
                        ) : (
                          dim.values[activePkg.id]
                        )}
                      </span>
                    </div>
                  ))}
                </div>

                <a
                  href={getWhatsAppUrl(`Hi Smart Multi Solutions team, I want to discuss: ${activePkg.name}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-orange-sms text-white font-extrabold text-xs flex items-center justify-center gap-2 hover:bg-orange-sms-hover shadow-md transition"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Request Scope Quote on WhatsApp</span>
                </a>
              </div>
            );
          })()}
        </div>

      </div>
    </section>
  );
};
