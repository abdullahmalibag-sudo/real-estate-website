import React, { useState } from 'react';
import { profileData } from '../data/portfolioData';
import { Language } from '../types';
import { MessageSquareCode, X } from 'lucide-react';

interface FloatingWhatsAppProps {
  lang: Language;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ lang }) => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip speech bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-2xl bg-black/90 border border-emerald-500/40 text-white text-xs font-semibold shadow-2xl backdrop-blur-md animate-fade-in">
          <span>{lang === 'bn' ? 'প্রজেক্ট নিয়ে কথা বলুন!' : 'Chat about your project!'}</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-white p-0.5 rounded cursor-pointer"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={profileData.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group p-3.5 sm:p-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-[0_0_25px_rgba(16,185,129,0.5)] hover:shadow-[0_0_35px_rgba(16,185,129,0.8)] transition-all duration-300 transform hover:scale-110 flex items-center justify-center cursor-pointer"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-40 pointer-events-none" />
        <MessageSquareCode className="w-6 h-6 sm:w-7 sm:h-7 text-slate-950" />
      </a>
    </div>
  );
};
