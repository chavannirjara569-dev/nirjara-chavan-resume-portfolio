/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { EducationSection } from './components/EducationSection';
import { SkillsSection } from './components/SkillsSection';
import { CareerFocusSection } from './components/CareerFocusSection';
import { AchievementsSection } from './components/AchievementsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeChatbotModal } from './components/ResumeChatbotModal';
import { ResumeViewerModal } from './components/ResumeViewerModal';
import { MessageSquare, FileText } from 'lucide-react';

export default function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FBFBF9] text-[#1F2421] flex flex-col font-sans selection:bg-[#4A5D3E]/15 selection:text-[#2A3A22]">
      {/* Navigation */}
      <Navbar
        onOpenChat={() => setIsChatOpen(true)}
        onOpenResumeModal={() => setIsResumeModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        <Hero
          onOpenChat={() => setIsChatOpen(true)}
          onOpenResumeModal={() => setIsResumeModalOpen(true)}
        />
        <AboutSection />
        <EducationSection />
        <SkillsSection />
        <CareerFocusSection onOpenChat={() => setIsChatOpen(true)} />
        <AchievementsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Recruiter Speed Dial Widget */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 no-print">
        <button
          onClick={() => setIsChatOpen(true)}
          className="group flex items-center gap-2.5 px-4 py-3 bg-[#4A5D3E] hover:bg-[#38462F] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
          aria-label="Open Ask My Resume Chatbot"
        >
          <MessageSquare className="w-4 h-4" />
          <span className="text-xs font-semibold tracking-wide">
            Ask My Resume
          </span>
        </button>
      </div>

      {/* Recruiter Chatbot Modal */}
      <ResumeChatbotModal
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
      />

      {/* Printable / Downloadable Resume Sheet Modal */}
      <ResumeViewerModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}
