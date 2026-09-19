import React from 'react';
import { skillsData, toolsList } from '../data/portfolioData';
import { Language } from '../types';
import { Sparkles, Video, Palette, Eye, FileText, Mic, Award, CheckCircle, Wrench, Layers } from 'lucide-react';

interface ExpertiseSectionProps {
  lang: Language;
}

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Video,
  Palette,
  Eye,
  FileText,
  Mic,
  Award
};

export const ExpertiseSection: React.FC<ExpertiseSectionProps> = ({ lang }) => {
  return (
    <section
      id="expertise"
      className="py-20 sm:py-24 bg-[#030712]/90 backdrop-blur-[2px] text-slate-100 relative overflow-hidden border-t border-sky-500/20"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-sky-500/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#070b14]/90 border border-sky-500/40 text-sky-300 text-xs font-semibold tracking-wider uppercase backdrop-blur-md shadow-[0_0_15px_rgba(56,189,248,0.2)]">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            <span>{lang === 'bn' ? 'কোর এক্সপার্টিজ অ্যান্ড স্কিলস' : 'CORE EXPERTISE & SKILLS'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
            {lang === 'bn' ? (
              <>
                দক্ষতা ও{' '}
                <span className="bg-gradient-to-r from-sky-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                  টেকনিক্যাল পারদর্শিতা
                </span>
              </>
            ) : (
              <>
                Skills &{' '}
                <span className="bg-gradient-to-r from-sky-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                  Technical Expertise
                </span>
              </>
            )}
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
            {lang === 'bn'
              ? 'উচ্চমানের ভিজ্যুয়াল স্টোরিটেলিং, নিখুঁত অডিও-ভিডিও সিঙ্ক এবং কনভার্সন-ড্রাইভেন ডিজাইন ক্রিয়েশন।'
              : 'End-to-end visual storytelling, precise rhythm cutting, and conversion-optimized graphic design.'}
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-16">
          {skillsData.map((skill) => {
            const IconComponent = iconMap[skill.iconName] || Sparkles;

            return (
              <div
                key={skill.id}
                className="p-6 rounded-2xl bg-[#070b14]/85 border border-sky-500/25 hover:border-sky-400 transition-all duration-300 backdrop-blur-xl group flex flex-col justify-between shadow-[0_0_20px_rgba(56,189,248,0.08)] hover:shadow-[0_0_30px_rgba(56,189,248,0.25)] hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center gap-3.5 mb-3.5">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-sky-500/25 to-blue-600/15 border border-sky-500/40 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-md shadow-black/50">
                      <IconComponent className="w-5 h-5 text-sky-400" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-sky-300 transition-colors tracking-wide">
                      {lang === 'bn' ? skill.titleBn : skill.title}
                    </h3>
                  </div>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
                    {lang === 'bn' ? skill.descriptionBn : skill.description}
                  </p>
                </div>

                {skill.tools && skill.tools.length > 0 && (
                  <div className="pt-3 mt-4 border-t border-sky-500/20 flex flex-wrap items-center gap-1.5">
                    {skill.tools.map((tool, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 rounded-md bg-sky-500/10 border border-sky-500/30 text-sky-200 text-[11px] font-mono font-semibold tracking-wide"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Software Tools Ribbon Bar */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#070b14]/90 border border-sky-500/25 backdrop-blur-xl shadow-2xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-xl bg-sky-500/15 border border-sky-500/30 text-sky-400">
              <Wrench className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">
                {lang === 'bn' ? 'সফটওয়্যার স্যুট ও প্রোডাকশন টুলস' : 'Software Suite & Production Tools'}
              </h3>
              <p className="text-xs text-slate-400">
                {lang === 'bn'
                  ? 'প্রতিদিনের প্রজেক্টে ব্যবহৃত শীর্ষস্থানীয় প্রফেশনাল সফটওয়্যার'
                  : 'Industry-standard creative applications utilized daily'}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {toolsList.map((tool, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-sky-400/50 hover:bg-sky-500/10 transition-all flex items-center gap-3 group"
              >
                <div className="w-8 h-8 rounded-lg bg-black/60 border border-white/10 flex items-center justify-center text-sky-400 group-hover:scale-105 transition-transform">
                  <Layers className="w-4 h-4" />
                </div>
                <div className="overflow-hidden">
                  <h4 className="text-xs font-bold text-white group-hover:text-sky-200 truncate">
                    {tool.name}
                  </h4>
                  <span className="text-[10px] text-slate-400 font-mono">
                    {tool.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
