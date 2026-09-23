/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { ExpertiseSection } from './components/ExpertiseSection';
import { EducationSection } from './components/EducationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { VideoModal } from './components/VideoModal';
import { DesignModal } from './components/DesignModal';
import { CVModal } from './components/CVModal';
import { VideoProject, DesignProject, Language } from './types';

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [selectedVideo, setSelectedVideo] = useState<VideoProject | null>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [selectedDesign, setSelectedDesign] = useState<DesignProject | null>(null);
  const [isDesignModalOpen, setIsDesignModalOpen] = useState(false);
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

  const handleOpenVideo = (project: VideoProject) => {
    setSelectedVideo(project);
    setIsVideoModalOpen(true);
  };

  const handleOpenDesign = (project: DesignProject) => {
    setSelectedDesign(project);
    setIsDesignModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 font-sans selection:bg-sky-500 selection:text-slate-950 relative">
      {/* Background subtle light-blue glow and midnight black styling */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-500/10 via-[#030712] to-[#030712] z-0" />

      {/* Main Content Sections */}
      <div className="relative z-10">
        {/* Navigation Header */}
        <Navbar
          lang={lang}
          setLang={setLang}
          onOpenCV={() => setIsCVModalOpen(true)}
        />

        {/* Hero Banner with Portrait & Flame Visuals */}
        <Hero lang={lang} onOpenVideo={handleOpenVideo} />

        {/* Featured Projects with Video & Design Tabs */}
        <ProjectsSection
          lang={lang}
          onOpenVideo={handleOpenVideo}
          onOpenDesign={handleOpenDesign}
        />

        {/* Core Expertise, Skills & Software Suite */}
        <ExpertiseSection lang={lang} />

        {/* Education & Professional Training (SBMC Batch 36) */}
        <EducationSection lang={lang} />

        {/* Contact Information & Interactive Project Inquiry Form */}
        <ContactSection lang={lang} />

        {/* Footer */}
        <Footer lang={lang} />
      </div>

      {/* Floating Instant WhatsApp Button */}
      <FloatingWhatsApp lang={lang} />

      {/* Lightbox / Action Modals */}
      <VideoModal
        project={selectedVideo}
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        lang={lang}
      />

      <DesignModal
        project={selectedDesign}
        isOpen={isDesignModalOpen}
        onClose={() => setIsDesignModalOpen(false)}
        lang={lang}
      />

      <CVModal
        isOpen={isCVModalOpen}
        onClose={() => setIsCVModalOpen(false)}
        lang={lang}
      />
    </div>
  );
}

