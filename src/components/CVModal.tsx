import React, { useEffect, useState } from 'react';
import { profileData, academicEducation, professionalCourse, skillsData, toolsList } from '../data/portfolioData';
import { Language } from '../types';
import { X, Printer, Download, Check, Phone, Mail, MapPin, MessageSquare, GraduationCap, Award, Wrench } from 'lucide-react';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose, lang }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopySummary = () => {
    const educationList = academicEducation
      .map((edu) => `- ${edu.degree} (${edu.desc}) - ${edu.status}`)
      .join('\n');

    const text = `
CURRICULUM VITAE - ${profileData.nameEn}
Role: ${profileData.roleEn}
Phone: ${profileData.phone}
WhatsApp: ${profileData.whatsapp}
Email: ${profileData.email}
Location: ${profileData.location}

BIO:
${profileData.bioEn}

EDUCATION:
${educationList}

PROFESSIONAL TRAINING:
- ${professionalCourse.institution} - ${professionalCourse.courseName} (${professionalCourse.batch})
  Topics: Video Editing, Graphic Design, Meta Marketing, Generative AI Tools

SOFTWARE PROFICIENCY:
- Adobe Premiere Pro, Adobe After Effects, Adobe Photoshop, Adobe Illustrator, DaVinci Resolve, CapCut Pro
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div
      id="cv-download-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/90 backdrop-blur-xl animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[92vh] bg-[#070b14] border border-sky-500/50 rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(56,189,248,0.25)] flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* CV Modal Toolbar */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-black/80 print:hidden">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-white">
              {lang === 'bn' ? 'আব্দুল্লাহ এর অফিশিয়াল সিভি' : 'Curriculum Vitae'}
            </span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-sky-500/20 text-sky-300 border border-sky-500/35 font-mono">
              2026
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopySummary}
              className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Copy text summary"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Download className="w-3.5 h-3.5" />}
              <span>{copied ? (lang === 'bn' ? 'কপি হয়েছে' : 'Copied!') : (lang === 'bn' ? 'টেক্সট কপি' : 'Copy Text')}</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 text-xs font-extrabold flex items-center gap-1.5 transition-colors cursor-pointer shadow-md shadow-sky-950"
              title="Print CV"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>{lang === 'bn' ? 'প্রিন্ট / পিডিএফ' : 'Print / PDF'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors cursor-pointer ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CV Scrollable Content (Stylized Paper View) */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6 text-slate-200 print:text-black print:bg-white">
          {/* Header */}
          <div className="border-b border-white/10 pb-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <img
                  src={profileData.heroImage}
                  alt={profileData.nameEn}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover object-top border-2 border-sky-400 shadow-[0_0_20px_rgba(56,189,248,0.35)] shrink-0"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-white print:text-black tracking-tight">
                    {lang === 'bn' ? profileData.name : profileData.nameEn}
                  </h1>
                  <p className="text-sm font-semibold text-sky-400 print:text-sky-600 mt-0.5 uppercase tracking-wider">
                    {lang === 'bn' ? profileData.role : profileData.roleEn}
                  </p>
                  <p className="text-xs text-slate-300 print:text-slate-700 max-w-xl mt-2 leading-relaxed">
                    {lang === 'bn' ? profileData.bio : profileData.bioEn}
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 mt-5 pt-4 border-t border-white/10 print:border-slate-300 text-xs">
              <div className="flex items-center gap-2 text-slate-300 print:text-slate-700">
                <Phone className="w-3.5 h-3.5 text-sky-400" />
                <span>{profileData.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300 print:text-slate-700">
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                <span>WA: {profileData.whatsapp}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300 print:text-slate-700 truncate">
                <Mail className="w-3.5 h-3.5 text-sky-400" />
                <span className="truncate">{profileData.email}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300 print:text-slate-700">
                <MapPin className="w-3.5 h-3.5 text-blue-400" />
                <span>{lang === 'bn' ? profileData.locationBn : profileData.location}</span>
              </div>
            </div>
          </div>

          {/* Academic Education Section */}
          <div className="space-y-3">
            <h2 className="text-sm font-bold uppercase tracking-wider text-white print:text-black flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-sky-400" />
              <span>{lang === 'bn' ? 'শিক্ষাগত যোগ্যতা' : 'Academic Education'}</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {academicEducation.map((edu, idx) => (
                <div
                  key={idx}
                  className={`p-3.5 rounded-xl bg-white/[0.03] border border-white/10 print:border-slate-300 flex flex-col justify-between ${
                    idx === 0 ? 'sm:col-span-2' : ''
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-xs font-bold text-white print:text-black">
                        {lang === 'bn' ? edu.degreeBn : edu.degree}
                      </h3>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-sky-500/10 text-sky-300 border border-sky-500/25">
                        {lang === 'bn' ? edu.yearBn : edu.year}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 print:text-slate-600 mt-1 leading-relaxed">
                      {lang === 'bn' ? edu.descBn : edu.desc}
                    </p>
                  </div>
                  <span className="text-[10px] text-sky-400 font-medium mt-2 pt-1 border-t border-white/5">
                    {lang === 'bn' ? 'স্ট্যাটাস: ' : 'Status: '}
                    {lang === 'bn' ? edu.statusBn : edu.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Training Section */}
          <div className="space-y-3">
            <h2 className="text-sm font-bold uppercase tracking-wider text-white print:text-black flex items-center gap-2">
              <Award className="w-4 h-4 text-sky-400" />
              <span>{lang === 'bn' ? 'প্রফেশনাল স্কিল কোর্স' : 'Professional Training'}</span>
            </h2>

            <div className="p-4 rounded-xl bg-white/[0.03] border border-sky-500/25 print:border-slate-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-sm font-bold text-white print:text-black">
                    {lang === 'bn' ? professionalCourse.institutionBn : professionalCourse.institution}
                  </h3>
                  <p className="text-xs text-sky-300 print:text-sky-700 font-semibold">
                    {professionalCourse.courseName} • {professionalCourse.batch}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2 pt-2 border-t border-white/10">
                {professionalCourse.topics.map((top, idx) => (
                  <div key={idx} className="text-xs">
                    <span className="font-bold text-white print:text-black">
                      • {lang === 'bn' ? top.nameBn : top.name}:
                    </span>{' '}
                    <span className="text-slate-400 print:text-slate-600 font-mono text-[11px]">{top.tools}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Software Skills */}
          <div className="space-y-3">
            <h2 className="text-sm font-bold uppercase tracking-wider text-white print:text-black flex items-center gap-2">
              <Wrench className="w-4 h-4 text-sky-400" />
              <span>{lang === 'bn' ? 'সফটওয়্যার ও টেকনিক্যাল দক্ষতা' : 'Software Proficiency'}</span>
            </h2>

            <div className="flex flex-wrap gap-2">
              {toolsList.map((tool, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-semibold text-slate-200 print:text-black print:border-slate-300"
                >
                  {tool.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
