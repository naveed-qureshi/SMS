import React, { useState } from 'react';
import { 
  Video, Sparkles, Play, CheckCircle2, 
  ArrowRight, MessageSquare, Zap, TrendingUp, Layers, Award
} from 'lucide-react';
import { getWhatsAppUrl } from '../../data/packages';

interface VideoSample {
  id: string;
  title: string;
  client: string;
  campaign: string;
  videoSrc: string;
  badge: string;
  description: string;
  aspect: string;
}

export const AiVideoAdsSection: React.FC = () => {
  const [activeVideoId, setActiveVideoId] = useState<string>('cleaning-ad');

  const videoSamples: VideoSample[] = [
    {
      id: 'cleaning-ad',
      title: 'Serwizo Home Maintenance & Deep Cleaning',
      client: 'Serwizo (serwizo.com)',
      campaign: 'Direct Response Meta & TikTok Commercial',
      videoSrc: '/videos/Serwizo-Cleaning ad1-final.mp4',
      badge: 'High Conversion UGC Ad',
      description: 'Engaging, problem-solving video commercial designed to generate direct WhatsApp service bookings for on-demand home cleaning.',
      aspect: 'Vertical 9:16'
    },
    {
      id: 'solar-ad-1',
      title: 'Serwizo Solar Energy Solutions',
      client: 'Serwizo Solar',
      campaign: 'Commercial & Residential Energy Savings',
      videoSrc: '/videos/Serwizo-Solar-ad1.mp4',
      badge: 'High-Ticket Lead Gen',
      description: 'Educational authority ad designed to capture qualified solar consultation leads and quote requests from homeowners and factories.',
      aspect: 'Vertical 9:16'
    },
    {
      id: 'solar-ad-2',
      title: 'Serwizo Solar - "Right Time" Campaign',
      client: 'Serwizo Solar',
      campaign: 'Urgency & Inflation Hedge Hook',
      videoSrc: '/videos/Serwizo-Solar-ad2-rightTime.mp4',
      badge: 'Viral Hook Creative',
      description: 'High-retention social hook ad tackling electricity tariff hikes and positioning solar installation as an urgent investment.',
      aspect: 'Vertical 9:16'
    }
  ];

  const activeVideo = videoSamples.find(v => v.id === activeVideoId) || videoSamples[0];

  return (
    <section id="ai-video-ads" className="py-24 bg-navy-950 border-b border-navy-850 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute inset-0 bg-grid-dark-pattern opacity-10 pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 font-extrabold text-xs uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>High-ROAS Creative Strategy</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            AI Generated <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">Video Ads</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Stop spending weeks and hundreds of thousands of rupees on camera crews. We create high-converting, studio-grade video commercials for Meta, TikTok & YouTube powered by cutting-edge AI.
          </p>
        </div>

        {/* 4 Feature Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          <div className="bg-navy-900/70 border border-navy-800 p-4 rounded-xl flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/20 text-orange-400 flex items-center justify-center shrink-0">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">48-72h Delivery</div>
              <div className="text-[11px] text-slate-400">Rapid ad testing</div>
            </div>
          </div>

          <div className="bg-navy-900/70 border border-navy-800 p-4 rounded-xl flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">80% Lower Cost</div>
              <div className="text-[11px] text-slate-400">Zero crew or studio fees</div>
            </div>
          </div>

          <div className="bg-navy-900/70 border border-navy-800 p-4 rounded-xl flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">Multi-Hook Testing</div>
              <div className="text-[11px] text-slate-400">Higher Meta & TikTok ROAS</div>
            </div>
          </div>

          <div className="bg-navy-900/70 border border-navy-800 p-4 rounded-xl flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">Urdu & English</div>
              <div className="text-[11px] text-slate-400">Natural voiceover accents</div>
            </div>
          </div>
        </div>

        {/* Video Player + Selector Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-navy-900/60 rounded-3xl p-6 sm:p-10 border border-navy-800 shadow-2xl">
          
          {/* Main Video Screen (Phone Frame) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[320px] rounded-[36px] p-3 bg-gradient-to-b from-navy-800 via-navy-900 to-navy-950 border-4 border-navy-700/80 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
              {/* Dynamic Island / Notch */}
              <div className="w-24 h-4 bg-navy-950 rounded-full mx-auto mb-2 border border-navy-800 flex items-center justify-center">
                <span className="w-2 h-2 rounded-full bg-slate-700 mr-2" />
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500/80" />
              </div>

              {/* Video Element */}
              <div className="relative rounded-[24px] overflow-hidden bg-black aspect-[9/16] flex items-center justify-center shadow-inner">
                <video
                  key={activeVideo.videoSrc}
                  controls
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover"
                >
                  <source src={activeVideo.videoSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Phone Bottom Home Bar */}
              <div className="w-32 h-1 bg-slate-600/60 rounded-full mx-auto mt-3" />
            </div>
          </div>

          {/* Video Selector & Campaign Context */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-400 uppercase tracking-wider bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/20 mb-3">
                <Video className="w-3.5 h-3.5" />
                <span>Featured Video Ad Showcase</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                {activeVideo.title}
              </h3>
              <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                {activeVideo.description}
              </p>
            </div>

            {/* Campaign Selection Tabs */}
            <div className="space-y-3">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Select AI Video Ad Sample:
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {videoSamples.map((sample) => {
                  const isSelected = sample.id === activeVideoId;

                  return (
                    <button
                      key={sample.id}
                      onClick={() => setActiveVideoId(sample.id)}
                      className={`text-left p-3.5 rounded-xl border transition duration-200 ${
                        isSelected
                          ? 'bg-orange-500/15 border-orange-500/60 shadow-lg text-white'
                          : 'bg-navy-950/70 border-navy-800 text-slate-300 hover:bg-navy-800/80 hover:border-navy-700'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] font-extrabold text-orange-400 uppercase tracking-wider">
                          {sample.aspect}
                        </span>
                        {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-orange-400" />}
                      </div>
                      <div className="font-bold text-xs line-clamp-1 text-white">
                        {sample.client}
                      </div>
                      <div className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                        {sample.badge}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Deliverables Checklist */}
            <div className="pt-2 border-t border-navy-800 grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-300 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Native Urdu & English AI Voices</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Full Commercial Broadcast License</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Direct-Response Scriptwriting</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Subtitles & Animated Text Hooks</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <a
                href={getWhatsAppUrl(`Hi Smart Multi Solutions team, I want to create an AI Generated Video Ad for my business. Can you share details and packages?`)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-lg hover:shadow-orange-500/25 transition duration-200"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Order Custom AI Video Ad</span>
              </a>

              <a
                href="#consultation-wizard"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-navy-800 hover:bg-navy-700 text-white font-bold text-xs border border-navy-700 flex items-center justify-center gap-2 transition"
              >
                <span>Discuss Creative Strategy</span>
                <ArrowRight className="w-4 h-4 text-orange-400" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
