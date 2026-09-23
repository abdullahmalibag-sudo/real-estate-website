import React from 'react';
import { academicEducation, professionalCourse } from '../data/portfolioData';
import { Language } from '../types';
import { GraduationCap, Award, BookOpen, Book, CheckCircle2, Sparkles, Building2, Layers } from 'lucide-react';

interface EducationSectionProps {
  lang: Language;
}

const eduIconMap: Record<string, React.FC<{ className?: string }>> = {
  GraduationCap,
  BookOpen,
  Award,
  Book
};

export const EducationSection: React.FC<EducationSectionProps> = ({ lang }) => {
  return (
    <section id="education" className="py-20 sm:py-24 relative overflow-hidden bg-[#030712]/80 border-t border-sky-500/20">
      {/* Background lights */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-sky-500/8 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600/8 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#070b14]/90 border border-sky-500/40 text-sky-300 text-xs font-semibold tracking-wider uppercase backdrop-blur-xl shadow-[0_0_20px_rgba(56,189,248,0.2)]">
            <GraduationCap className="w-4 h-4 text-sky-400" />
            <span>{lang === 'bn' ? 'শিক্ষাগত যোগ্যতা ও প্রশিক্ষণ' : 'Education & Professional Training'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]">
            {lang === 'bn' ? (
              <>
                আমার এডুকেশন ও{' '}
                <span className="bg-gradient-to-r from-sky-300 via-sky-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_4px_28px_rgba(56,189,248,0.4)]">
                  ক্রিয়েটিভ লার্নিং
                </span>
              </>
            ) : (
              <>
                My Education &{' '}
                <span className="bg-gradient-to-r from-sky-300 via-sky-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_4px_28px_rgba(56,189,248,0.4)]">
                  Creative Learning
                </span>
              </>
            )}
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-sky-400 to-transparent mx-auto mt-4 rounded-full opacity-80" />
        </div>

        {/* 2-Column Grid: Academic & Professional */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Academic Education */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2.5 rounded-xl bg-sky-500/15 border border-sky-500/30 text-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.2)]">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">
                  {lang === 'bn' ? 'একাডেমিক এডুকেশন' : 'Academic Background'}
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 flex-1">
              {academicEducation.map((edu, idx) => {
                const IconComponent = eduIconMap[edu.iconType] || GraduationCap;

                return (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-[#070b14]/85 border border-sky-500/25 hover:border-sky-400/60 transition-all duration-300 backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.6)] flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2.5">
                        <span className="p-2 rounded-lg bg-sky-500/10 text-sky-400 group-hover:scale-105 transition-transform">
                          <IconComponent className="w-4 h-4" />
                        </span>
                        <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[#0b1220] border border-sky-500/30 text-sky-300">
                          {lang === 'bn' ? edu.yearBn : edu.year}
                        </span>
                      </div>

                      <h4 className="text-base font-bold text-white tracking-tight group-hover:text-sky-300 transition-colors">
                        {lang === 'bn' ? edu.degreeBn : edu.degree}
                      </h4>

                      <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                        {lang === 'bn' ? edu.descBn : edu.desc}
                      </p>
                    </div>

                    <div className="mt-3 pt-2.5 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                      <span>{lang === 'bn' ? 'স্ট্যাটাস:' : 'Status:'}</span>
                      <span className="text-sky-400 font-medium">
                        {lang === 'bn' ? edu.statusBn : edu.status}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Professional Skill Development */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2.5 rounded-xl bg-sky-500/15 border border-sky-500/30 text-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.2)]">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">
                  {lang === 'bn' ? 'প্রফেশনাল স্কিল ডেভেলপমেন্ট' : 'Professional Skill Development'}
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-[#070b14]/95 via-black/90 to-[#070b14]/95 border-2 border-sky-500/35 shadow-[0_0_35px_rgba(56,189,248,0.15)] flex-1 flex flex-col justify-between backdrop-blur-xl">
              <div>
                {/* Institution badge */}
                <div className="flex items-start justify-between gap-4 mb-4 pb-4 border-b border-white/10">
                  <div>
                    <div className="flex items-center gap-2 text-sky-400 text-xs font-mono font-bold uppercase mb-1">
                      <Building2 className="w-3.5 h-3.5" />
                      <span>{professionalCourse.batch}</span>
                    </div>
                    <h4 className="text-lg sm:text-xl font-black text-white tracking-tight">
                      {lang === 'bn' ? professionalCourse.institutionBn : professionalCourse.institution}
                    </h4>
                    <p className="text-xs sm:text-sm text-sky-300 font-semibold mt-0.5">
                      {professionalCourse.courseName}
                    </p>
                  </div>
                </div>

                {/* Course Modules List */}
                <div className="space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                    {lang === 'bn' ? 'কোর্স কারিকুলাম ও প্রশিক্ষণ মডিউল' : 'Course Curriculum & Training Modules'}
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {professionalCourse.topics.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-sky-500/40 transition-colors"
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                          <h5 className="text-xs font-bold text-white">
                            {lang === 'bn' ? item.nameBn : item.name}
                          </h5>
                        </div>
                        <p className="text-[11px] text-slate-400 font-mono pl-5">
                          {item.tools}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
                  {lang === 'bn' ? 'সার্টিফাইড প্র্যাকটিশনার' : 'Certified Practitioner'}
                </span>
                <span className="text-slate-300 font-mono text-[11px]">
                  Professional Hands-on Training
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
