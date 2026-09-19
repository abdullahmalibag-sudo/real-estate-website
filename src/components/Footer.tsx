import React from 'react';
import { BrandLogo } from './BrandLogo';
import { profileData } from '../data/portfolioData';
import { Language } from '../types';
import { ArrowUp, Phone, Mail, MessageSquare, Heart, Shield } from 'lucide-react';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#030712] backdrop-blur-md border-t border-sky-500/20 py-12 sm:py-16 text-slate-400 text-xs relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10">
          {/* Brand Info */}
          <div className="flex items-center gap-3 text-center md:text-left">
            <BrandLogo size="md" />
            <div>
              <span className="text-lg font-black text-white block">
                {lang === 'bn' ? profileData.name : profileData.nameEn}
              </span>
              <span className="text-xs text-sky-400 font-bold uppercase tracking-wider">
                {lang === 'bn' ? profileData.role : profileData.roleEn}
              </span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-5 text-xs font-medium text-slate-300">
            <button
              onClick={() => scrollTo('home')}
              className="hover:text-sky-300 transition-colors cursor-pointer"
            >
              {lang === 'bn' ? 'হোম' : 'Home'}
            </button>
            <button
              onClick={() => scrollTo('portfolio')}
              className="hover:text-sky-300 transition-colors cursor-pointer"
            >
              {lang === 'bn' ? 'মাই প্রজেক্টস' : 'Projects'}
            </button>
            <button
              onClick={() => scrollTo('expertise')}
              className="hover:text-sky-300 transition-colors cursor-pointer"
            >
              {lang === 'bn' ? 'স্কিলস' : 'Skills'}
            </button>
            <button
              onClick={() => scrollTo('education')}
              className="hover:text-sky-300 transition-colors cursor-pointer"
            >
              {lang === 'bn' ? 'এডুকেশন' : 'Education'}
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="hover:text-sky-300 transition-colors cursor-pointer"
            >
              {lang === 'bn' ? 'যোগাযোগ' : 'Contact'}
            </button>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-[#070b14] hover:bg-sky-500/20 text-slate-300 hover:text-sky-300 border border-sky-500/30 hover:border-sky-400 transition-all cursor-pointer shadow-lg group"
            title="Scroll to top"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Contact Links & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400">
          <div className="flex items-center gap-4 text-xs font-mono">
            <a href={`tel:${profileData.phone}`} className="hover:text-sky-300 transition-colors flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-sky-400" />
              <span>{profileData.phoneDisplay}</span>
            </a>
            <span className="text-slate-700">•</span>
            <a href={`mailto:${profileData.email}`} className="hover:text-sky-300 transition-colors flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-sky-400" />
              <span>{profileData.email}</span>
            </a>
          </div>

          <div className="text-center sm:text-right text-slate-400">
            <p>
              © {new Date().getFullYear()} {profileData.nameEn}.{' '}
              {lang === 'bn' ? 'সর্বস্বত্ব সংরক্ষিত।' : 'All rights reserved.'}
            </p>
            <p className="text-[11px] text-slate-400 mt-0.5">
              {lang === 'bn'
                ? 'হাই-রিটেনশন ভিডিও এডিটিং ও ক্রিয়েটিভ ভিজ্যুয়ালাইজেশন'
                : 'High-Retention Video Editing & Creative Visualization'}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
