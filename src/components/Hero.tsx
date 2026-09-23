import React from 'react';
import { profileData, videoProjects } from '../data/portfolioData';
import { Language, VideoProject } from '../types';
import { Play, MessageSquare, ArrowRight, Film, Sparkles } from 'lucide-react';

interface HeroProps {
  lang: Language;
  onOpenVideo?: (project: VideoProject) => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onOpenVideo }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Video 2 as requested ("vedio-2" or fallback)
  const featuredVideo = videoProjects.find((p) => p.id === 'vedio-2') || videoProjects[1] || videoProjects[0];

  const handleVideoClick = () => {
    if (onOpenVideo && featuredVideo) {
      onOpenVideo(featuredVideo);
    } else {
      scrollTo('portfolio');
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
        {/* Main Content Layout - 2 columns on lg screens */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center max-w-6xl mx-auto py-2">
          
          {/* Left / Main Text & Intro Column */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Top Status Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#070b14]/90 border border-sky-500/40 text-slate-200 text-xs sm:text-sm font-semibold tracking-wider uppercase backdrop-blur-xl shadow-[0_0_16px_rgba(56,189,248,0.2)] mb-5">
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

            {/* Display Heading Typography */}
            <div className="w-full mb-3">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95] uppercase select-none drop-shadow-[0_4px_30px_rgba(0,0,0,0.95)]">
                <span className="block text-white/95 drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]">
                  ABDULLAH
                </span>
                <span className="block bg-gradient-to-r from-sky-300 via-sky-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_4px_32px_rgba(56,189,248,0.7)]">
                  {lang === 'bn' ? 'ভিজ্যুয়ালস' : 'VISUALS'}
                </span>
              </h1>
            </div>

            {/* Hero Core Tagline */}
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight leading-snug drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
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
            <p className="text-slate-300 text-sm sm:text-base max-w-xl mt-4 leading-relaxed font-normal">
              {lang === 'bn' ? profileData.bio : profileData.bioEn}
            </p>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 mt-7">
              <button
                onClick={() => scrollTo('portfolio')}
                className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white text-sm font-extrabold tracking-wide transition-all shadow-[0_0_25px_rgba(56,189,248,0.45)] hover:shadow-[0_0_35px_rgba(56,189,248,0.7)] hover:scale-105 cursor-pointer"
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
                className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 rounded-full bg-[#070b14]/90 hover:bg-slate-900 border border-sky-500/40 hover:border-sky-400 text-white text-sm font-extrabold tracking-wide transition-all hover:scale-105 cursor-pointer shadow-lg"
                id="hero-whatsapp-cta-btn"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>{lang === 'bn' ? 'হোয়াটসঅ্যাপে কথা বলুন' : 'Talk on WhatsApp'}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Goal Shape (Circular) Profile Picture Frame */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            
            {/* Ambient Circular Aura & Glow Behind */}
            <div className="absolute w-72 h-72 sm:w-88 sm:h-88 rounded-full bg-sky-500/25 blur-[70px] pointer-events-none" />
            <div className="absolute w-60 h-60 sm:w-72 sm:h-72 rounded-full bg-blue-600/30 blur-[50px] pointer-events-none" />

            {/* Circular Profile Picture (Goal Shape) Element */}
            <div className="relative group w-64 h-64 sm:w-80 sm:h-80 md:w-88 md:h-88 lg:w-96 lg:h-96 rounded-full p-2 sm:p-2.5 bg-gradient-to-tr from-sky-400 via-blue-500 to-cyan-300 shadow-[0_0_50px_rgba(56,189,248,0.45)] hover:shadow-[0_0_75px_rgba(56,189,248,0.75)] transition-all duration-500">
              {/* Outer Decorative Rings */}
              <div className="absolute -inset-1.5 rounded-full border border-sky-400/50 animate-pulse pointer-events-none" />
              <div className="absolute -inset-3.5 rounded-full border border-sky-500/25 border-dashed animate-spin-slow pointer-events-none" />

              {/* Inner Round Profile Picture Container */}
              <div className="w-full h-full rounded-full overflow-hidden relative bg-gradient-to-b from-[#0d1627] via-[#070b14] to-black border-2 border-sky-400/80 shadow-2xl flex items-center justify-center">
                <img
                  src={profileData.heroImage}
                  alt={profileData.nameEn}
                  loading="eager"
                  decoding="async"
                  className="w-full h-full object-cover object-top hover:scale-108 transition-transform duration-700 select-none drop-shadow-[0_12px_30px_rgba(0,0,0,0.9)]"
                  style={{
                    filter: `
                      contrast(105%)
                      brightness(103%)
                    `
                  }}
                  referrerPolicy="no-referrer"
                />

                {/* Subtle Bottom Vignette */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />

                {/* Name Tag at bottom of circle */}
                <div className="absolute bottom-4 inset-x-0 flex justify-center pointer-events-none">
                  <div className="px-4 py-1 rounded-full bg-black/80 border border-sky-500/50 backdrop-blur-md shadow-lg">
                    <p className="text-xs sm:text-sm font-extrabold text-white tracking-wide">
                      {profileData.nameEn}
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Top Badge */}
              <div className="absolute -top-2 -right-2 px-3.5 py-1.5 rounded-full bg-[#070b14]/95 border border-sky-400 text-sky-300 text-xs font-bold shadow-[0_0_20px_rgba(56,189,248,0.5)] flex items-center gap-1.5 backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-sky-400 animate-spin-slow" />
                <span>{lang === 'bn' ? 'ক্রিয়েটিভ ভিডিও এডিটর' : 'Creative Editor'}</span>
              </div>

              {/* Floating Experience / Video Watch Button on Bottom Corner */}
              <button
                onClick={handleVideoClick}
                className="absolute -bottom-2 -left-2 sm:-left-3 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white text-xs font-extrabold shadow-[0_0_20px_rgba(56,189,248,0.6)] hover:scale-105 transition-all cursor-pointer border border-sky-300/40"
                title={lang === 'bn' ? 'শো-রিল ভিডিও দেখুন' : 'Watch Showreel'}
              >
                <div className="w-4 h-4 rounded-full bg-white text-sky-600 flex items-center justify-center">
                  <Play className="w-2.5 h-2.5 fill-sky-600 text-sky-600 ml-0.5" />
                </div>
                <span>{lang === 'bn' ? 'শো-রিল ভিডিও' : 'Watch Reel'}</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

