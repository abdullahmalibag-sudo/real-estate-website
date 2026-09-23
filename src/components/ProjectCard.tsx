import React from 'react';
import { VideoProject, DesignProject, Language } from '../types';
import { Play, Eye, Film, Sparkles, Layers, ArrowUpRight } from 'lucide-react';

interface VideoCardProps {
  project: VideoProject;
  lang: Language;
  onOpen: (project: VideoProject) => void;
}

export const VideoCard: React.FC<VideoCardProps> = ({ project, lang, onOpen }) => {
  const isVertical = project.aspectRatio === '9:16';

  return (
    <div
      onClick={() => onOpen(project)}
      className="group relative rounded-2xl bg-[#070b14]/90 border border-sky-500/25 hover:border-sky-400 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-[0_0_30px_rgba(56,189,248,0.3)] hover:-translate-y-1 cursor-pointer flex flex-col justify-between"
    >
      {/* Thumbnail Container */}
      <div className={`relative overflow-hidden bg-black ${isVertical ? 'aspect-[9/14] sm:aspect-[9/13]' : 'aspect-video'}`}>
        {project.thumbnail ? (
          <img
            src={project.thumbnail}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-950 via-[#070b14] to-sky-950/40 p-4 text-center">
            <Film className="w-10 h-10 text-sky-400 mb-2 opacity-80" />
            <span className="text-xs text-slate-300 font-semibold">{project.title}</span>
          </div>
        )}

        {/* Hover overlay with glowing play icon */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity flex items-center justify-center">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-sky-500 group-hover:bg-sky-400 text-slate-950 flex items-center justify-center shadow-[0_0_25px_rgba(56,189,248,0.85)] transform group-hover:scale-110 transition-transform">
            <Play className="w-6 h-6 fill-slate-950 ml-0.5" />
          </div>
        </div>

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          <span className="px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-bold uppercase bg-black/80 backdrop-blur-md text-sky-300 border border-sky-500/40">
            {lang === 'bn' ? project.categoryLabelBn : project.categoryLabel}
          </span>
          <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-black/80 backdrop-blur-md text-slate-300 border border-white/10">
            {project.duration}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between gap-2 text-xs text-slate-400 mb-1.5">
            <span className="font-semibold text-slate-300 truncate">
              {project.client}
            </span>
            <span className="text-sky-400 font-medium shrink-0 flex items-center gap-1">
              <Film className="w-3 h-3" />
              {project.aspectRatio}
            </span>
          </div>

          <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-sky-400 transition-colors leading-snug line-clamp-2">
            {lang === 'bn' ? project.titleBn : project.title}
          </h3>

          <p className="text-xs text-slate-400 line-clamp-2 mt-1.5 leading-relaxed">
            {lang === 'bn' ? project.descriptionBn : project.description}
          </p>
        </div>

        {/* Tools Badges & CTA */}
        <div className="pt-3 mt-3 border-t border-white/10 flex items-center justify-between gap-2">
          <div className="flex flex-wrap gap-1">
            {project.toolsUsed.slice(0, 2).map((tool, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 rounded bg-sky-500/10 border border-sky-500/20 text-[10px] text-sky-200 font-mono"
              >
                {tool}
              </span>
            ))}
          </div>

          <span className="text-xs font-bold text-sky-400 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
            <span>
              {lang === 'bn'
                ? project.youtubeChannelUrl
                  ? 'চ্যানেল দেখুন'
                  : 'প্লে করুন'
                : project.youtubeChannelUrl
                ? 'Channel'
                : 'Watch'}
            </span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </div>
  );
};

interface DesignCardProps {
  project: DesignProject;
  lang: Language;
  onOpen: (project: DesignProject) => void;
}

export const DesignCard: React.FC<DesignCardProps> = ({ project, lang, onOpen }) => {
  return (
    <div
      onClick={() => onOpen(project)}
      className="group relative rounded-2xl bg-[#070b14]/90 border border-sky-500/25 hover:border-sky-400 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-[0_0_30px_rgba(56,189,248,0.3)] hover:-translate-y-1 cursor-pointer flex flex-col justify-between"
    >
      {/* Image Container */}
      <div className="relative overflow-hidden bg-black/60 aspect-square">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Hover preview icon */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-sky-400 text-slate-950 flex items-center justify-center shadow-[0_0_25px_rgba(56,189,248,0.85)] transform group-hover:scale-110 transition-transform">
            <Eye className="w-6 h-6" />
          </div>
        </div>

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          <span className="px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-bold uppercase bg-black/80 backdrop-blur-md text-sky-300 border border-sky-500/40">
            {lang === 'bn' ? project.categoryLabelBn : project.categoryLabel}
          </span>
          <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-black/80 backdrop-blur-md text-slate-300 border border-white/10">
            {project.dimensions.split(' ')[0]}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between gap-2 text-xs text-slate-400 mb-1.5">
            <span className="font-semibold text-slate-300 truncate">
              {project.client}
            </span>
          </div>

          <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-sky-400 transition-colors leading-snug line-clamp-2">
            {lang === 'bn' ? project.titleBn : project.title}
          </h3>

          <p className="text-xs text-slate-400 line-clamp-2 mt-1.5 leading-relaxed">
            {lang === 'bn' ? project.descriptionBn : project.description}
          </p>
        </div>

        {/* Tools & CTA */}
        <div className="pt-3 mt-3 border-t border-white/10 flex items-center justify-between gap-2">
          <div className="flex flex-wrap gap-1">
            {project.toolsUsed.map((tool, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 rounded bg-sky-500/10 border border-sky-500/25 text-[10px] text-sky-200 font-mono"
              >
                {tool}
              </span>
            ))}
          </div>

          <span className="text-xs font-bold text-sky-400 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
            <span>{lang === 'bn' ? 'দেখুন' : 'View'}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </div>
  );
};
