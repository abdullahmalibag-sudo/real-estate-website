import React, { useState, useEffect } from 'react';
import { BrandLogo } from './BrandLogo';
import { profileData } from '../data/portfolioData';
import { Language } from '../types';
import { Download, Share2, Check, Menu, X, MessageSquareCode, Globe, PhoneCall } from 'lucide-react';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  onOpenCV: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, setLang, onOpenCV }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'portfolio', 'expertise', 'education', 'contact'];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'হোম', labelEn: 'Home', href: '#home' },
    { id: 'portfolio', label: 'মাই প্রজেক্টস', labelEn: 'My Projects', href: '#portfolio' },
    { id: 'expertise', label: 'কোর এক্সপার্টিজ অ্যান্ড স্কিলস', labelEn: 'Skills & Expertise', href: '#expertise' },
    { id: 'education', label: 'এডুকেশন', labelEn: 'Education', href: '#education' },
    { id: 'contact', label: 'যোগাযোগ', labelEn: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleShare = async () => {
    const shareData = {
      title: `${profileData.nameEn} - ${profileData.roleEn}`,
      text: `${profileData.bioEn} | Phone/WhatsApp: ${profileData.phone}`,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch {
        // Fallback to clipboard
      }
    }

    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#030712]/92 backdrop-blur-md border-b border-sky-500/25 shadow-2xl shadow-black/80 py-3 sm:py-3.5'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3 sm:gap-4">
          {/* Brand Logo & Name */}
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, '#home')}
            className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none shrink-0"
            id="brand-logo-link"
          >
            <BrandLogo size="md" />
            <div className="text-left">
              <span className="text-base sm:text-lg font-black tracking-tight text-white block leading-tight group-hover:text-sky-400 transition-colors">
                {lang === 'bn' ? profileData.name : profileData.nameEn}
              </span>
              <span className="text-[10px] sm:text-[11px] font-bold text-sky-400 tracking-wider uppercase block">
                {lang === 'bn' ? profileData.role : profileData.roleEn}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden xl:flex items-center gap-1 bg-white/[0.04] p-1.5 rounded-full border border-sky-500/35 backdrop-blur-md shadow-[0_0_15px_rgba(56,189,248,0.15)]"
            id="desktop-nav-menu"
          >
            {navLinks.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  id={`nav-link-${item.id}`}
                  className={`px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-full transition-all duration-200 flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-sky-500/20 text-white shadow-sm border border-sky-400/50 shadow-[0_0_12px_rgba(56,189,248,0.25)]'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{lang === 'bn' ? item.label : item.labelEn}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shadow-[0_0_6px_rgba(56,189,248,0.8)]" />}
                </a>
              );
            })}

            {/* CV Download CTA in pill */}
            <button
              onClick={onOpenCV}
              id="nav-download-cv-btn"
              className="px-3.5 py-1.5 text-xs sm:text-sm font-semibold rounded-full transition-all duration-200 flex items-center gap-1.5 text-sky-400 hover:text-white hover:bg-sky-500/20 border border-sky-500/30 hover:border-sky-400/60 cursor-pointer ml-1"
              title={lang === 'bn' ? 'সিভি দেখুন ও ডাউনলোড করুন' : 'View & Download CV'}
            >
              <Download className="w-3.5 h-3.5 text-sky-400" />
              <span>{lang === 'bn' ? 'সিভি ডাউনলোড' : 'Download CV'}</span>
            </button>
          </nav>

          {/* Right Action Icons & Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Share Portfolio Button */}
            <button
              onClick={handleShare}
              className="p-2 sm:px-3 sm:py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer"
              title={lang === 'bn' ? 'পোর্টফোলিও লিংক শেয়ার করুন' : 'Share Portfolio Link'}
              id="share-portfolio-btn"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="hidden md:inline text-emerald-400 font-medium">
                    {lang === 'bn' ? 'কপি হয়েছে!' : 'Copied!'}
                  </span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5 text-sky-400" />
                  <span className="hidden md:inline">{lang === 'bn' ? 'শেয়ার' : 'Share'}</span>
                </>
              )}
            </button>

            {/* Language Switcher Toggle */}
            <button
              onClick={() => setLang(lang === 'bn' ? 'en' : 'bn')}
              className="px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl bg-[#080d1a] border border-sky-500/40 hover:border-sky-400 text-xs font-bold text-sky-200 transition-all flex items-center gap-1.5 cursor-pointer shadow-sm shadow-blue-950/40"
              id="language-switch-btn"
              title="Change Language"
            >
              <Globe className="w-3.5 h-3.5 text-sky-400" />
              <span>{lang === 'bn' ? 'EN' : 'বাংলা'}</span>
            </button>

            {/* Direct Call / Contact Button */}
            <a
              href={`tel:${profileData.phone}`}
              className="hidden lg:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white text-xs font-bold transition-all shadow-[0_0_20px_rgba(56,189,248,0.35)] hover:shadow-[0_0_28px_rgba(56,189,248,0.6)] cursor-pointer"
              id="nav-contact-cta-btn"
            >
              <PhoneCall className="w-3.5 h-3.5 text-white" />
              <span>{profileData.phoneDisplay}</span>
            </a>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-slate-200 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              id="mobile-menu-toggle-btn"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-sky-400" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="xl:hidden bg-[#030712]/98 backdrop-blur-2xl border-b border-sky-500/30 px-5 pt-4 pb-6 space-y-3 shadow-2xl transition-all"
        >
          <div className="flex flex-col space-y-1.5">
            {navLinks.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center justify-between ${
                    isActive
                      ? 'bg-sky-500/20 text-sky-300 border border-sky-500/40'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{lang === 'bn' ? item.label : item.labelEn}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-sky-400" />}
                </a>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCV();
              }}
              className="w-full py-2.5 px-4 rounded-xl text-xs font-bold bg-sky-500/15 border border-sky-500/40 text-sky-300 hover:bg-sky-500/25 flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>{lang === 'bn' ? 'সিভি ডাউনলোড করুন' : 'Download CV'}</span>
            </button>

            <a
              href={`tel:${profileData.phone}`}
              className="w-full py-2.5 px-4 rounded-xl text-xs font-bold bg-white/5 border border-white/10 text-white flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-sky-400" />
              <span>{lang === 'bn' ? 'কল করুন: ' : 'Call: '} {profileData.phoneDisplay}</span>
            </a>

            <a
              href={profileData.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-xl text-xs font-bold bg-emerald-500 hover:bg-emerald-400 text-slate-950 flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
            >
              <MessageSquareCode className="w-4 h-4" />
              <span>{lang === 'bn' ? 'হোয়াটসঅ্যাপে চ্যাট' : 'Chat on WhatsApp'}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
