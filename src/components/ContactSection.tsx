import React, { useState } from 'react';
import { profileData } from '../data/portfolioData';
import { Language } from '../types';
import {
  Phone,
  MessageSquare,
  Mail,
  MapPin,
  Copy,
  Check,
  Send,
  ExternalLink,
  Sparkles,
  Clock,
  MessageSquareCode,
  ShieldCheck,
  SendHorizontal
} from 'lucide-react';

interface ContactSectionProps {
  lang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ lang }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedWhatsApp, setCopiedWhatsApp] = useState(false);

  // Form state
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formService, setFormService] = useState('Video Editing');
  const [formMessage, setFormMessage] = useState('');
  const [formSent, setFormSent] = useState(false);

  const copyToClipboard = (text: string, type: 'email' | 'phone' | 'whatsapp') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } else if (type === 'phone') {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
    } else {
      setCopiedWhatsApp(true);
      setTimeout(() => setCopiedWhatsApp(false), 2500);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedMessage = `Hello Abdullah,
My Name: ${formName || 'Client'}
Email: ${formEmail || 'N/A'}
Phone/WhatsApp: ${formPhone || 'N/A'}
Service Required: ${formService}
Project Brief: ${formMessage || 'I would like to discuss a project with you.'}`;

    const url = `https://wa.me/8801333655040?text=${encodeURIComponent(formattedMessage)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setFormSent(true);
    setTimeout(() => setFormSent(false), 5000);
  };

  const contactCards = [
    {
      id: 'phone',
      name: lang === 'bn' ? 'সরাসরি ফোন কল' : 'Direct Phone Call',
      handle: profileData.phoneDisplay,
      desc: lang === 'bn' ? 'জরুরি আলোচনা ও সরাসরি কলের জন্য' : 'Fastest direct voice consultation',
      icon: Phone,
      accentColor: 'text-sky-400',
      borderColor: 'border-sky-500/40 hover:border-sky-400',
      glowColor: 'shadow-[0_0_25px_rgba(56,189,248,0.15)] hover:shadow-[0_0_35px_rgba(56,189,248,0.3)]',
      bgGlow: 'bg-sky-500/10',
      actionText: lang === 'bn' ? 'এখনই কল করুন' : 'Call Now',
      actionUrl: `tel:${profileData.phone}`,
      isPhone: true
    },
    {
      id: 'whatsapp',
      name: lang === 'bn' ? 'অফিসিয়াল হোয়াটসঅ্যাপ' : 'WhatsApp Chat',
      handle: profileData.phoneDisplay,
      desc: lang === 'bn' ? 'দ্রুততম মেসেজ ও ফাইল বা ফুটেজ পাঠানো' : 'Instant messages & project discussions',
      icon: MessageSquare,
      accentColor: 'text-emerald-400',
      borderColor: 'border-emerald-500/40 hover:border-emerald-400',
      glowColor: 'shadow-[0_0_25px_rgba(16,185,129,0.15)] hover:shadow-[0_0_35px_rgba(16,185,129,0.3)]',
      bgGlow: 'bg-emerald-500/10',
      actionText: lang === 'bn' ? 'হোয়াটসঅ্যাপে চ্যাট' : 'Chat on WhatsApp',
      actionUrl: profileData.whatsappUrl,
      isWhatsApp: true
    },
    {
      id: 'email',
      name: lang === 'bn' ? 'ইমেইল এড্রেস' : 'Email Address',
      handle: profileData.email,
      desc: lang === 'bn' ? 'অফিসিয়াল ইনকোয়ারি ও প্রজেক্ট ব্রিফ' : 'Official inquiries & detailed briefs',
      icon: Mail,
      accentColor: 'text-sky-300',
      borderColor: 'border-sky-400/40 hover:border-sky-300',
      glowColor: 'shadow-[0_0_25px_rgba(56,189,248,0.15)] hover:shadow-[0_0_35px_rgba(56,189,248,0.3)]',
      bgGlow: 'bg-sky-400/10',
      actionText: lang === 'bn' ? 'ইমেইল পাঠান' : 'Send Email',
      actionUrl: `mailto:${profileData.email}?subject=Project%20Inquiry%20for%20Abdullah`,
      isEmail: true
    },
    {
      id: 'location',
      name: lang === 'bn' ? 'কাজের লোকেশন' : 'Service Location',
      handle: lang === 'bn' ? 'মালিবাগ, ঢাকা-১২১৭' : 'Malibag, Dhaka-1217',
      desc: lang === 'bn' ? 'সারা বাংলাদেশ ও গ্লোবালি রিমোট ওয়ার্ক' : 'Dhaka based, available worldwide remotely',
      icon: MapPin,
      accentColor: 'text-blue-400',
      borderColor: 'border-blue-500/40 hover:border-blue-400',
      glowColor: 'shadow-[0_0_25px_rgba(59,130,246,0.15)] hover:shadow-[0_0_35px_rgba(59,130,246,0.3)]',
      bgGlow: 'bg-blue-500/10',
      actionText: lang === 'bn' ? 'ম্যাপে দেখুন' : 'View Location',
      actionUrl: 'https://maps.google.com/?q=Malibag,Dhaka,Bangladesh',
      isLocation: true
    }
  ];

  return (
    <section
      id="contact"
      className="py-20 sm:py-24 bg-[#030712]/95 backdrop-blur-[2px] relative border-t border-sky-500/20"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-sky-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#070b14]/90 border border-sky-500/40 text-sky-300 text-xs sm:text-sm font-semibold tracking-wider uppercase backdrop-blur-md shadow-[0_0_15px_rgba(56,189,248,0.2)]">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            <span>{lang === 'bn' ? 'কন্টাক্ট মি' : 'CONTACT ME'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
            {lang === 'bn' ? (
              <>
                যোগাযোগ{' '}
                <span className="bg-gradient-to-r from-sky-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                  করুন
                </span>
              </>
            ) : (
              <>
                Get In{' '}
                <span className="bg-gradient-to-r from-sky-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                  Touch
                </span>
              </>
            )}
          </h2>

          <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed max-w-xl mx-auto drop-shadow-md">
            {lang === 'bn'
              ? 'আপনার যেকোনো নতুন প্রজেক্ট, ভিডিও এডিটিং বা গ্রাফিক ডিজাইনের বিষয়ে সরাসরি আমার সাথে কথা বলতে পারেন।'
              : 'Feel free to connect directly for video editing, graphic design, or creative collaboration.'}
          </p>
        </div>

        {/* 4 Contact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-10">
          {contactCards.map((card) => {
            const IconComp = card.icon;

            return (
              <div
                key={card.id}
                id={`contact-card-${card.id}`}
                className={`group relative p-4 sm:p-5 rounded-2xl bg-[#070b14]/85 border ${card.borderColor} ${card.glowColor} transition-all duration-300 flex flex-col justify-between backdrop-blur-xl shadow-lg hover:-translate-y-1`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-11 h-11 rounded-xl ${card.bgGlow} border border-white/10 flex items-center justify-center ${card.accentColor} shrink-0 group-hover:scale-105 transition-transform shadow-md`}
                      >
                        <IconComp className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-sky-300 transition-colors leading-tight">
                          {card.name}
                        </h3>
                        <p className="text-xs font-mono font-semibold text-slate-300 truncate mt-0.5">
                          {card.handle}
                        </p>
                      </div>
                    </div>

                    {/* Copy Buttons */}
                    {card.isEmail && (
                      <button
                        type="button"
                        onClick={() => copyToClipboard(profileData.email, 'email')}
                        className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 hover:bg-sky-500/20 text-slate-300 hover:text-white border border-white/10 hover:border-sky-500/50 text-[11px] font-semibold transition-all cursor-pointer shrink-0"
                        title="Copy email address"
                      >
                        {copiedEmail ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-400" />
                            <span className="text-emerald-400">{lang === 'bn' ? 'কপি হয়েছে' : 'Copied!'}</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>{lang === 'bn' ? 'কপি' : 'Copy'}</span>
                          </>
                        )}
                      </button>
                    )}

                    {card.isPhone && (
                      <button
                        type="button"
                        onClick={() => copyToClipboard(profileData.phone, 'phone')}
                        className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 hover:bg-sky-500/20 text-slate-300 hover:text-white border border-white/10 hover:border-sky-500/50 text-[11px] font-semibold transition-all cursor-pointer shrink-0"
                        title="Copy phone number"
                      >
                        {copiedPhone ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-400" />
                            <span className="text-emerald-400">{lang === 'bn' ? 'কপি হয়েছে' : 'Copied!'}</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>{lang === 'bn' ? 'কপি' : 'Copy'}</span>
                          </>
                        )}
                      </button>
                    )}

                    {card.isWhatsApp && (
                      <button
                        type="button"
                        onClick={() => copyToClipboard(profileData.whatsapp, 'whatsapp')}
                        className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 hover:bg-emerald-500/20 text-slate-300 hover:text-white border border-white/10 hover:border-emerald-500/50 text-[11px] font-semibold transition-all cursor-pointer shrink-0"
                        title="Copy WhatsApp number"
                      >
                        {copiedWhatsApp ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-400" />
                            <span className="text-emerald-400">{lang === 'bn' ? 'কপি হয়েছে' : 'Copied!'}</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>{lang === 'bn' ? 'কপি' : 'Copy'}</span>
                          </>
                        )}
                      </button>
                    )}
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed pl-0.5">
                    {card.desc}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-white/10">
                  <a
                    href={card.actionUrl}
                    target={card.id === 'email' || card.id === 'phone' ? '_self' : '_blank'}
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-xs font-bold bg-white/5 hover:bg-white/10 text-white border border-white/15 hover:border-white/30 transition-all cursor-pointer"
                  >
                    <span>{card.actionText}</span>
                    <ExternalLink className="w-3 h-3 text-slate-300" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Big Official Location & Remote Banner */}
        <div
          id="contact-official-location-card"
          className="relative p-7 sm:p-9 rounded-3xl bg-gradient-to-br from-[#070b14]/95 via-black/95 to-[#070b14]/95 border-2 border-sky-500/40 shadow-[0_0_40px_rgba(56,189,248,0.18)] backdrop-blur-2xl overflow-hidden mb-12"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-sky-500/15 via-transparent to-transparent rounded-full pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/15 border border-sky-500/35 text-sky-300 text-xs font-mono font-bold uppercase">
                <MapPin className="w-3.5 h-3.5 text-sky-400" />
                <span>{lang === 'bn' ? 'আমার ঠিকানা ও কাজের স্থান' : 'Official Location'}</span>
              </div>

              <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight">
                {lang === 'bn' ? profileData.locationBn : profileData.location}
              </h3>

              <p className="text-sm sm:text-base text-slate-300 max-w-xl font-normal leading-relaxed">
                {lang === 'bn'
                  ? 'ঢাকা থেকে সারা বাংলাদেশে এবং আন্তর্জাতিক ক্লায়েন্টদের সাথে যেকোনো ভিডিও এডিটিং ও ভিজ্যুয়াল ডিজাইনে রিমোটলি কাজ করতে প্রস্তুত।'
                  : 'Based in Malibag, Dhaka, Bangladesh — Available worldwide for remote video editing and graphic design collaborations.'}
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2 text-xs">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/35 text-emerald-300 font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>{lang === 'bn' ? 'নতুন প্রজেক্টের জন্য এভেইলেবল' : 'Available for New Projects'}</span>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#070b14]/80 border border-sky-500/30 text-sky-200">
                  <Clock className="w-3.5 h-3.5 text-sky-400" />
                  <span>{lang === 'bn' ? 'রেসপন্স: ২ ঘণ্টার মধ্যে' : 'Response: Within 2 Hours'}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0 pt-2 md:pt-0">
              <a
                href={profileData.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-bold text-sm bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-all shadow-lg shadow-emerald-500/25 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{lang === 'bn' ? 'হোয়াটসঅ্যাপে লিখুন' : 'Chat on WhatsApp'}</span>
              </a>

              <a
                href={`mailto:${profileData.email}?subject=Project%20Discussion`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-bold text-sm bg-gradient-to-r from-sky-400 to-blue-600 hover:from-sky-300 hover:to-blue-500 text-black font-extrabold transition-all shadow-lg shadow-sky-500/25 cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>{lang === 'bn' ? 'সরাসরি ইমেইল করুন' : 'Direct Email'}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Interactive Direct Message / Project Inquiry Form */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#070b14]/90 border border-sky-500/25 backdrop-blur-xl shadow-2xl">
          <div className="max-w-xl mx-auto text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {lang === 'bn' ? 'দ্রুত প্রজেক্ট ইনকোয়ারি পাঠান' : 'Send Quick Project Inquiry'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              {lang === 'bn'
                ? 'ফরমটি পূরণ করলে সরাসরি আমার হোয়াটসঅ্যাপে আপনার রিকোয়ারমেন্টসহ মেসেজ ওপেন হয়ে যাবে।'
                : 'Fill out this quick form to send your project requirements directly to my WhatsApp.'}
            </p>
          </div>

          <form onSubmit={handleFormSubmit} className="max-w-2xl mx-auto space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  {lang === 'bn' ? 'আপনার নাম' : 'Your Name'} *
                </label>
                <input
                  type="text"
                  required
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  placeholder={lang === 'bn' ? 'আপনার নাম লিখুন' : 'e.g. Tanvir Ahmed'}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 focus:border-sky-400 focus:ring-1 focus:ring-sky-400 text-white text-sm outline-none transition-all placeholder:text-slate-600"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  {lang === 'bn' ? 'ফোন বা হোয়াটসঅ্যাপ নম্বর' : 'Phone / WhatsApp Number'} *
                </label>
                <input
                  type="text"
                  required
                  value={formPhone}
                  onChange={(e) => setFormPhone(e.target.value)}
                  placeholder={lang === 'bn' ? '০১XXXXXXXXX' : '+8801XXXXXXXXX'}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 focus:border-sky-400 focus:ring-1 focus:ring-sky-400 text-white text-sm outline-none transition-all placeholder:text-slate-600"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  {lang === 'bn' ? 'ইমেইল এড্রেস' : 'Email Address'}
                </label>
                <input
                  type="email"
                  value={formEmail}
                  onChange={(e) => setFormEmail(e.target.value)}
                  placeholder="yourname@gmail.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 focus:border-sky-400 focus:ring-1 focus:ring-sky-400 text-white text-sm outline-none transition-all placeholder:text-slate-600"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  {lang === 'bn' ? 'সার্ভিস টাইপ' : 'Service Needed'}
                </label>
                <select
                  value={formService}
                  onChange={(e) => setFormService(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#0b1220] border border-sky-500/20 focus:border-sky-400 text-white text-sm outline-none transition-all cursor-pointer"
                >
                  <option value="Commercial Video Ad">
                    {lang === 'bn' ? 'Commercial Video Ad / কমার্শিয়াল ভিডিও' : 'Commercial Video Ad'}
                  </option>
                  <option value="YouTube Longform Video">
                    {lang === 'bn' ? 'YouTube Longform Video / ইউটিউব ভিডিও' : 'YouTube Longform Video'}
                  </option>
                  <option value="Social Media Reels (9:16)">
                    {lang === 'bn' ? 'Social Media Reels (9:16) / টিকটক ও রিলস' : 'Social Media Reels (9:16)'}
                  </option>
                  <option value="Motion Graphics & VFX">
                    {lang === 'bn' ? 'Motion Graphics & VFX / মোশন গ্রাফিক্স' : 'Motion Graphics & VFX'}
                  </option>
                  <option value="YouTube Thumbnail Design">
                    {lang === 'bn' ? 'YouTube Thumbnail Design / থাম্বনেইল' : 'YouTube Thumbnail Design'}
                  </option>
                  <option value="Social Media Poster & Branding">
                    {lang === 'bn' ? 'Poster & Branding / পোস্টার ও ব্র্যান্ডিং' : 'Social Media Poster & Branding'}
                  </option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                {lang === 'bn' ? 'প্রজেক্টের বিবরণ / মেসেজ' : 'Project Brief / Message'} *
              </label>
              <textarea
                required
                rows={3}
                value={formMessage}
                onChange={(e) => setFormMessage(e.target.value)}
                placeholder={
                  lang === 'bn'
                    ? 'আপনার প্রজেক্টের কাজ, সময়সীমা এবং প্রয়োজনীয় তথ্যাদি সংক্ষেপে লিখুন...'
                    : 'Briefly describe your footage, video style, deadline, or design requirements...'
                }
                className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 focus:border-sky-400 focus:ring-1 focus:ring-sky-400 text-white text-sm outline-none transition-all placeholder:text-slate-600 resize-none"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-slate-400 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>{lang === 'bn' ? 'আপনার তথ্য সম্পূর্ণ সুরক্ষিত থাকবে' : 'Your details are strictly private'}</span>
              </span>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-sky-400 to-blue-600 hover:from-sky-300 hover:to-blue-500 text-slate-950 text-sm font-extrabold shadow-lg shadow-sky-500/25 hover:scale-[1.02] transition-all cursor-pointer"
              >
                <SendHorizontal className="w-4 h-4" />
                <span>{lang === 'bn' ? 'হোয়াটসঅ্যাপে মেসেজ পাঠান' : 'Submit to WhatsApp'}</span>
              </button>
            </div>

            {formSent && (
              <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs text-center font-semibold">
                {lang === 'bn'
                  ? 'ধন্যবাদ! হোয়াটসঅ্যাপ ওপেন হয়েছে, সরাসরি মেসেজ সেন্ড করুন।'
                  : 'Thank you! WhatsApp has been launched with your project details.'}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
