import React, { useEffect } from 'react';
import { DesignProject, Language } from '../types';
import { X, CheckCircle2, MessageSquareCode, Layers, Maximize2 } from 'lucide-react';

interface DesignModalProps {
  project: DesignProject | null;
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const DesignModal: React.FC<DesignModalProps> = ({ project, isOpen, onClose, lang }) => {
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

  if (!isOpen || !project) return null;

  const whatsappUrl = `https://wa.me/8801333655040?text=${encodeURIComponent(
    `Hello Abdullah, I saw your design project "${project.title}" on your portfolio and I would like to order a similar graphic design!`
  )}`;

  return (
    <div
      id="design-preview-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/92 backdrop-blur-xl animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] bg-[#070b14] border border-sky-500/40 rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(56,189,248,0.2)] flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-black/60">
          <div className="flex items-center gap-2.5">
            <span className="px-2.5 py-1 rounded-full text-xs font-bold uppercase bg-sky-500/20 text-sky-300 border border-sky-500/35">
              {lang === 'bn' ? project.categoryLabelBn : project.categoryLabel}
            </span>
            <span className="text-xs text-slate-400 font-medium hidden sm:inline">
              Dimensions: <strong className="text-slate-200">{project.dimensions}</strong>
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/5 hover:bg-sky-500/20 text-slate-300 hover:text-white border border-white/10 transition-colors cursor-pointer"
            title="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-4 sm:p-6 space-y-6">
          {/* Main High-Res Image Display */}
          <div className="relative mx-auto rounded-2xl overflow-hidden bg-black/80 border border-white/10 shadow-2xl flex items-center justify-center max-h-[55vh]">
            <img
              src={project.image}
              alt={project.title}
              className="max-h-[55vh] w-auto object-contain rounded-xl"
              loading="lazy"
            />
          </div>

          {/* Details & Specs */}
          <div className="space-y-4">
            <div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                {lang === 'bn' ? project.titleBn : project.title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mt-2">
                {lang === 'bn' ? project.descriptionBn : project.description}
              </p>
            </div>

            {/* Tools Used */}
            <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-white/10">
              <span className="text-xs font-bold text-slate-400 flex items-center gap-1.5 mr-1">
                <Layers className="w-3.5 h-3.5 text-sky-400" />
                {lang === 'bn' ? 'ব্যবহৃত সফটওয়্যার:' : 'Tools Used:'}
              </span>
              {project.toolsUsed.map((tool, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-lg bg-sky-500/10 border border-sky-500/30 text-xs font-medium text-sky-200"
                >
                  {tool}
                </span>
              ))}
            </div>

            {/* Key Features */}
            <div className="space-y-2 pt-2 border-t border-white/10">
              <h4 className="text-xs font-bold uppercase tracking-wider text-sky-400">
                {lang === 'bn' ? 'ডিজাইন বৈশিষ্ট্যসমূহ' : 'Key Design Highlights'}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {(lang === 'bn' ? project.keyFeaturesBn : project.keyFeatures).map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 border-t border-white/10 bg-black/70 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-400 text-center sm:text-left">
            <span>Client: <strong className="text-slate-200">{project.client}</strong></span>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-all shadow-lg shadow-emerald-500/25 cursor-pointer"
          >
            <MessageSquareCode className="w-4 h-4" />
            <span>{lang === 'bn' ? 'এই ডিজাইনের মতো অর্ডার করুন' : 'Order Similar Design'}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
