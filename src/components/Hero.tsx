import React from 'react';
import { profileData } from '../data/portfolioData';
import { Language } from '../types';
import { Play, MessageSquare, ArrowRight, Sparkles, Film, CheckCircle2, Zap } from 'lucide-react';

interface HeroProps {
  lang: Language;
}

export const Hero: React.FC<HeroProps> = ({ lang }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[85vh] sm:min-h-[88vh] lg:min-h-[92vh] flex items-center justify-center pt-24 sm:pt-28 pb-12 sm:pb-16 overflow-hidden"
    >
      {/* Background ambient lighting glows */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-sky-500/12 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-400/8 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col justify-center my-auto">
        {/* Main Content Layout */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto my-auto py-2">
          
          {/* Top Status Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#070b14]/90 border border-sky-500/40 text-slate-200 text-xs sm:text-sm font-semibold tracking-wider uppercase backdrop-blur-xl shadow-[0_0_16px_rgba(56,189,248,0.2)] mb-4">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-sky-400" />
            </span>
            <span className="text-white font-bold">
              {lang === 'bn' ? 'ক্রিয়েটিভ ভিজ্যুয়ালাইজার' : 'Creative Visualizer'}
            </span>
            <span className="text-slate-500">•</span>
            <span className="text-sky-300 font-bold">
              {lang === 'bn' ? 'ভিডিও এডিটর' : 'Video Editor'}
            </span>
          </div>

          {/* Massive Display Heading Typography with Portrait Overlay */}
          <div className="relative w-full flex flex-col items-center justify-center -mt-1 mb-2">
            {/* Giant Background typography */}
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight leading-[0.9] uppercase select-none relative z-0 -mb-16 sm:-mb-24 lg:-mb-32 drop-shadow-[0_4px_30px_rgba(0,0,0,0.95)]">
              <span className="block text-white/95">ABDULLAH</span>
              <span className="block bg-gradient-to-r from-sky-300 via-sky-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_4px_32px_rgba(56,189,248,0.5)]">
                {lang === 'bn' ? 'ভিজ্যুয়ালস' : 'VISUALS'}
              </span>
            </h1>

            {/* Central Artistic Portrait with Cyan/Light Blue Rim Glow */}
            <div
              className="relative z-10 w-64 h-72 sm:w-80 sm:h-96 lg:w-96 lg:h-[420px] flex items-end justify-center"
              style={{
                maskImage: 'linear-gradient(to bottom, black 0%, black 75%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 75%, transparent 100%)'
              }}
            >
              <img
                src={profileData.heroImage}
                alt={profileData.nameEn}
                loading="eager"
                decoding="async"
                className="w-full h-full object-contain object-bottom select-none pointer-events-none drop-shadow-[0_12px_35px_rgba(0,0,0,0.9)]"
                style={{
                  filter: `
                    drop-shadow(0 0 4px rgba(56, 189, 248, 0.95))
                    drop-shadow(0 0 14px rgba(14, 165, 233, 0.75))
                    drop-shadow(0 0 28px rgba(2, 132, 199, 0.4))
                    contrast(106%)
                    brightness(104%)
                  `
                }}
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Hero Core Tagline */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug px-3 -mt-6 sm:-mt-8 relative z-20 drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
            {lang === 'bn' ? (
              <>
                কাঁচা মুহূর্তগুলোকে রূপ দিই{' '}
                <span className="bg-gradient-to-r from-sky-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                  চিরন্তন গল্পে
                </span>
              </>
            ) : (
              <>
                Cutting Raw Moments into{' '}
                <span className="bg-gradient-to-r from-sky-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                  Timeless Stories
                </span>
              </>
            )}
          </h2>

          {/* Bio Subtitle */}
          <p className="text-slate-300 text-sm sm:text-base lg:text-lg max-w-2xl mt-4 leading-relaxed font-normal px-4">
            {lang === 'bn' ? profileData.bio : profileData.bioEn}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-8">
            <button
              onClick={() => scrollTo('portfolio')}
              className="inline-flex items-center gap-2.5 px-6 sm:px-8 py-3.5 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white text-sm font-extrabold tracking-wide transition-all shadow-[0_0_25px_rgba(56,189,248,0.45)] hover:shadow-[0_0_35px_rgba(56,189,248,0.7)] hover:scale-105 cursor-pointer"
              id="hero-projects-cta-btn"
            >
              <Film className="w-4 h-4" />
              <span>{lang === 'bn' ? 'মাই প্রজেক্টস দেখুন' : 'View My Projects'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={profileData.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 sm:px-8 py-3.5 rounded-full bg-[#070b14]/90 hover:bg-slate-900 border border-sky-500/40 hover:border-sky-400 text-white text-sm font-extrabold tracking-wide transition-all hover:scale-105 cursor-pointer shadow-lg"
              id="hero-whatsapp-cta-btn"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>{lang === 'bn' ? 'হোয়াটসঅ্যাপে কথা বলুন' : 'Talk on WhatsApp'}</span>
            </a>
          </div>

          {/* Quick Metrics & Badges Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-12 w-full max-w-4xl pt-8 border-t border-sky-500/20">
            <div className="p-4 rounded-2xl bg-[#070b14]/80 border border-sky-500/20 backdrop-blur-md flex flex-col items-center justify-center group hover:border-sky-400/50 transition-colors">
              <span className="text-2xl sm:text-3xl font-black text-white group-hover:text-sky-400 transition-colors">
                {profileData.completedProjects}
              </span>
              <span className="text-xs text-slate-400 font-medium mt-1">
                {lang === 'bn' ? 'প্রজেক্ট সম্পন্ন' : 'Projects Completed'}
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-[#070b14]/80 border border-sky-500/20 backdrop-blur-md flex flex-col items-center justify-center group hover:border-sky-400/50 transition-colors">
              <span className="text-2xl sm:text-3xl font-black text-sky-400">
                {profileData.clientSatisfaction}
              </span>
              <span className="text-xs text-slate-400 font-medium mt-1">
                {lang === 'bn' ? 'ক্লায়েন্ট সন্তুষ্টি' : 'Client Satisfaction'}
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-[#070b14]/80 border border-sky-500/20 backdrop-blur-md flex flex-col items-center justify-center group hover:border-sky-400/50 transition-colors">
              <span className="text-2xl sm:text-3xl font-black text-cyan-300">
                {profileData.avgRetention}
              </span>
              <span className="text-xs text-slate-400 font-medium mt-1">
                {lang === 'bn' ? 'গড় অডিয়েন্স রিটেনশন' : 'Avg Retention Rate'}
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-[#070b14]/80 border border-sky-500/20 backdrop-blur-md flex flex-col items-center justify-center group hover:border-sky-400/50 transition-colors">
              <span className="text-2xl sm:text-3xl font-black text-sky-200">
                24/7
              </span>
              <span className="text-xs text-slate-400 font-medium mt-1">
                {lang === 'bn' ? 'সরাসরি সাপোর্ট' : 'Direct Support'}
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
