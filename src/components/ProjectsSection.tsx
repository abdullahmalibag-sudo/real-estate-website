import React, { useState, useMemo } from 'react';
import { videoProjects, designProjects } from '../data/portfolioData';
import { VideoProject, DesignProject, Language } from '../types';
import { VideoCard, DesignCard } from './ProjectCard';
import { Film, Palette, Sparkles, SlidersHorizontal, Layers } from 'lucide-react';

interface ProjectsSectionProps {
  lang: Language;
  onOpenVideo: (project: VideoProject) => void;
  onOpenDesign: (project: DesignProject) => void;
}

type MainTab = 'video' | 'design' | 'all';

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  lang,
  onOpenVideo,
  onOpenDesign
}) => {
  const [activeTab, setActiveTab] = useState<MainTab>('video');
  const [videoFilter, setVideoFilter] = useState<string>('all');
  const [designFilter, setDesignFilter] = useState<string>('all');

  const filteredVideos = useMemo(() => {
    if (videoFilter === 'all') return videoProjects;
    return videoProjects.filter((p) => p.category === videoFilter);
  }, [videoFilter]);

  const filteredDesigns = useMemo(() => {
    if (designFilter === 'all') return designProjects;
    return designProjects.filter((p) => p.category === designFilter);
  }, [designFilter]);

  return (
    <section
      id="portfolio"
      className="py-20 sm:py-24 bg-[#030712]/70 backdrop-blur-[2px] relative border-t border-sky-500/20"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-sky-500/8 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#070b14]/90 border border-sky-500/40 text-sky-300 text-xs sm:text-sm font-semibold tracking-wider uppercase backdrop-blur-md shadow-[0_0_15px_rgba(56,189,248,0.2)]">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            <span>{lang === 'bn' ? 'মাই প্রজেক্টস' : 'MY PROJECTS'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
            {lang === 'bn' ? (
              <>
                মাই <span className="bg-gradient-to-r from-sky-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">প্রজেক্টস</span>
              </>
            ) : (
              <>
                My <span className="bg-gradient-to-r from-sky-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">Projects</span>
              </>
            )}
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            {lang === 'bn'
              ? 'ইউটিউব লং-ফর্ম, কমার্শিয়াল প্রোমো, সোশ্যাল মিডিয়া রিলস ও সিনেমাটিক ভিডিও এডিটের নির্বাচিত পোর্টফোলিও।'
              : 'Featured showcase of commercial promos, viral social reels, motion graphics, and high-impact video edits.'}
          </p>

          {/* Primary Tabs Switcher */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            {/* Video Tab */}
            <button
              onClick={() => setActiveTab('video')}
              id="filter-video-projects"
              className={`flex items-center gap-2.5 px-6 sm:px-7 py-3 rounded-full text-xs sm:text-sm font-extrabold transition-all cursor-pointer ${
                activeTab === 'video'
                  ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-[0_0_24px_rgba(56,189,248,0.55)] scale-105 border border-sky-400'
                  : 'bg-[#070b14]/80 text-slate-300 hover:text-white hover:bg-slate-900 border border-slate-800'
              }`}
            >
              <Film className={`w-4 h-4 ${activeTab === 'video' ? 'text-white' : 'text-sky-400'}`} />
              <span>{lang === 'bn' ? 'ভিডিও এডিটিং' : 'Video Editing'}</span>
              <span
                className={`text-[11px] px-2.5 py-0.5 rounded-full font-mono font-bold ${
                  activeTab === 'video' ? 'bg-black/40 text-sky-100' : 'bg-slate-800 text-slate-300'
                }`}
              >
                {videoProjects.length}
              </span>
            </button>

            {/* Design Tab */}
            <button
              onClick={() => setActiveTab('design')}
              id="filter-design-projects"
              className={`flex items-center gap-2.5 px-6 sm:px-7 py-3 rounded-full text-xs sm:text-sm font-extrabold transition-all cursor-pointer ${
                activeTab === 'design'
                  ? 'bg-sky-400 text-slate-950 shadow-[0_0_24px_rgba(56,189,248,0.55)] scale-105 border border-sky-200'
                  : 'bg-[#070b14]/80 text-slate-300 hover:text-white hover:bg-slate-900 border border-slate-800'
              }`}
            >
              <Palette className={`w-4 h-4 ${activeTab === 'design' ? 'text-slate-950' : 'text-sky-400'}`} />
              <span>{lang === 'bn' ? 'গ্রাফিক ডিজাইন' : 'Graphic Design'}</span>
              <span
                className={`text-[11px] px-2.5 py-0.5 rounded-full font-mono font-bold ${
                  activeTab === 'design' ? 'bg-slate-950/20 text-slate-950' : 'bg-slate-800 text-slate-300'
                }`}
              >
                {designProjects.length}
              </span>
            </button>

            {/* All Tab */}
            <button
              onClick={() => setActiveTab('all')}
              id="filter-all-projects"
              className={`flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-white/15 text-white border border-sky-400/40 shadow-[0_0_15px_rgba(56,189,248,0.2)]'
                  : 'bg-[#070b14]/80 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>{lang === 'bn' ? 'সব প্রজেক্ট' : 'All Projects'}</span>
            </button>
          </div>
        </div>

        {/* Video Editing Subsection */}
        {(activeTab === 'video' || activeTab === 'all') && (
          <div id="sub-section-video-editing" className="space-y-6 mb-16">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-3 border-b border-sky-500/25">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-sky-500/15 border border-sky-500/40 flex items-center justify-center text-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.2)]">
                  <Film className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {lang === 'bn' ? 'ভিডিও এডিট' : 'Video Editing'}
                    </h3>
                    <span className="px-2 py-0.5 rounded-md bg-sky-500/20 text-sky-300 text-xs font-mono font-bold">
                      {videoProjects.length} {lang === 'bn' ? 'টি প্রজেক্ট' : 'Projects'}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300">
                    {lang === 'bn'
                      ? 'ইউটিউব লং-ফর্ম, সোশ্যাল মিডিয়া রিলস ও কমার্শিয়াল ভিডিও বিজ্ঞাপন'
                      : 'Commercial video ads, viral social reels, and YouTube longforms'}
                  </p>
                </div>
              </div>

              {/* Video Sub-filter Pills */}
              <div className="flex flex-wrap items-center gap-1.5 text-xs">
                {[
                  { id: 'all', label: 'All Videos', labelBn: 'সব ভিডিও' },
                  { id: 'commercial', label: 'Commercial Promos', labelBn: 'কমার্শিয়াল' },
                  { id: 'reels', label: 'Vertical Reels (9:16)', labelBn: 'রিলস (৯:১৬)' },
                  { id: 'motion', label: 'Motion Graphics', labelBn: 'মোশন গ্রাফিক্স' },
                ].map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setVideoFilter(f.id)}
                    className={`px-3 py-1 rounded-lg transition-colors cursor-pointer text-xs font-medium ${
                      videoFilter === f.id
                        ? 'bg-sky-500/20 text-sky-300 border border-sky-500/50'
                        : 'bg-white/5 text-slate-400 hover:text-white border border-transparent'
                    }`}
                  >
                    {lang === 'bn' ? f.labelBn : f.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Video Projects Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredVideos.map((project) => (
                <VideoCard
                  key={project.id}
                  project={project}
                  lang={lang}
                  onOpen={onOpenVideo}
                />
              ))}
            </div>
          </div>
        )}

        {/* Graphic Design Subsection */}
        {(activeTab === 'design' || activeTab === 'all') && (
          <div id="sub-section-graphic-design" className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-3 border-b border-sky-500/25">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-sky-500/15 border border-sky-500/40 flex items-center justify-center text-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.2)]">
                  <Palette className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {lang === 'bn' ? 'গ্রাফিক ডিজাইন' : 'Graphic Design'}
                    </h3>
                    <span className="px-2 py-0.5 rounded-md bg-sky-500/20 text-sky-300 text-xs font-mono font-bold">
                      {designProjects.length} {lang === 'bn' ? 'টি ডিজাইন' : 'Designs'}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300">
                    {lang === 'bn'
                      ? 'প্রিমিয়াম প্রোডাক্ট শোকেস, কমার্শিয়াল অ্যাড ব্যানার ও ব্র্যান্ডিং ক্রিয়েটিভ ডিজাইন'
                      : 'Premium product showcase, commercial ad banners, and promotional brand creatives'}
                  </p>
                </div>
              </div>

              {/* Design Sub-filter Pills */}
              <div className="flex flex-wrap items-center gap-1.5 text-xs">
                {[
                  { id: 'all', label: 'All Designs', labelBn: 'সব ডিজাইন' },
                  { id: 'ad-creative', label: 'Product Ads', labelBn: 'প্রোডাক্ট অ্যাড' },
                  { id: 'branding', label: 'Branding Showcase', labelBn: 'ব্র্যান্ডিং শোকেস' },
                ].map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setDesignFilter(f.id)}
                    className={`px-3 py-1 rounded-lg transition-colors cursor-pointer text-xs font-medium ${
                      designFilter === f.id
                        ? 'bg-sky-500/20 text-sky-300 border border-sky-500/50'
                        : 'bg-white/5 text-slate-400 hover:text-white border border-transparent'
                    }`}
                  >
                    {lang === 'bn' ? f.labelBn : f.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Design Projects Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
              {filteredDesigns.map((project) => (
                <DesignCard
                  key={project.id}
                  project={project}
                  lang={lang}
                  onOpen={onOpenDesign}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
