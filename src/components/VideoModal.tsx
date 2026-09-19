import React, { useEffect } from 'react';
import { VideoProject, Language } from '../types';
import { profileData } from '../data/portfolioData';
import { X, Play, Clock, CheckCircle2, MessageSquareCode, Layers } from 'lucide-react';

interface VideoModalProps {
  project: VideoProject | null;
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const VideoModal: React.FC<VideoModalProps> = ({ project, isOpen, onClose, lang }) => {
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

  const isVertical = project.aspectRatio === '9:16';
  const whatsappUrl = `https://wa.me/8801333655040?text=${encodeURIComponent(
    `Hello Abdullah, I watched your project "${project.title}" on your portfolio and I would like to order a similar video project!`
  )}`;

  return (
    <div
      id="video-player-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/90 backdrop-blur-xl animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] bg-[#070b14] border border-sky-500/40 rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(56,189,248,0.25)] flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-black/60">
          <div className="flex items-center gap-2.5">
            <span className="px-2.5 py-1 rounded-full text-xs font-bold uppercase bg-sky-500/20 text-sky-300 border border-sky-500/35">
              {lang === 'bn' ? project.categoryLabelBn : project.categoryLabel}
            </span>
            <span className="text-xs text-slate-400 font-medium hidden sm:inline">
              Client: <strong className="text-slate-200">{project.client}</strong>
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

        {/* Modal Body with Scrollable Area */}
        <div className="overflow-y-auto p-4 sm:p-6 space-y-6">
          {/* Video Player Container (Supports YouTube, HTML5 MP4 & Vimeo) */}
          <div
            className={`relative mx-auto rounded-2xl overflow-hidden bg-black border border-white/10 shadow-2xl ${
              isVertical ? 'max-w-[340px] aspect-[9/16]' : 'w-full aspect-video'
            }`}
          >
            {project.youtubeEmbedUrl || project.youtubeId ? (
              <iframe
                src={project.youtubeEmbedUrl || `https://www.youtube.com/embed/${project.youtubeId}?autoplay=1&rel=0`}
                title={project.title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : project.isDirectVideo || project.videoSrc ? (
              <video
                src={project.videoSrc}
                controls
                autoPlay
                playsInline
                className="w-full h-full object-contain bg-black"
                poster={project.thumbnail}
              >
                Your browser does not support the video tag.
              </video>
            ) : project.vimeoEmbedUrl ? (
              <iframe
                src={project.vimeoEmbedUrl}
                title={project.title}
                className="w-full h-full"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                allowFullScreen
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center text-slate-300">
                <Play className="w-12 h-12 text-sky-400 mb-3" />
                <p className="font-bold text-sm text-white">{project.title}</p>
                <p className="text-xs text-slate-400 mt-1">
                  {lang === 'bn'
                    ? 'ভিডিওটি প্লে করার জন্য প্রস্তুত'
                    : 'Video ready for playback'}
                </p>
              </div>
            )}
          </div>

          {/* Project Details */}
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

            {/* Key Features Breakdown */}
            <div className="space-y-2 pt-2 border-t border-white/10">
              <h4 className="text-xs font-bold uppercase tracking-wider text-sky-400">
                {lang === 'bn' ? 'প্রধান বৈশিষ্ট্যসমূহ' : 'Key Highlights'}
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

        {/* Modal Footer / Action CTA */}
        <div className="p-4 sm:p-5 border-t border-white/10 bg-black/70 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-400 text-center sm:text-left">
            <span>{lang === 'bn' ? 'আপনার কনটেন্টেও এমন ইমপ্যাক্ট তৈরি করতে চান?' : 'Want similar high-retention video results?'}</span>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-all shadow-lg shadow-emerald-500/25 cursor-pointer"
          >
            <MessageSquareCode className="w-4 h-4" />
            <span>{lang === 'bn' ? 'এই ভিডিও নিয়ে হোয়াটসঅ্যাপে কথা বলুন' : 'Discuss on WhatsApp'}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
