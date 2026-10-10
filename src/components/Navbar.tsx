import React, { useState } from 'react';
import { FileText, MessageSquare, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenChat: () => void;
  onOpenResumeModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenChat, onOpenResumeModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#FBFBF9]/90 backdrop-blur-md border-b border-[#E5E7DF] no-print">
      <div className="max-w-6xl mx-auto px-6 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#home"
          className="text-lg font-semibold tracking-tight text-[#1F2421] hover:text-[#4A5D3E] transition-colors whitespace-nowrap shrink-0"
        >
          Nirjara Chavan
        </a>

        {/* Zone 2: 4–5 clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#575D56]">
          <a
            href="#about"
            className="hover:text-[#1F2421] transition-colors whitespace-nowrap shrink-0"
          >
            About
          </a>
          <a
            href="#education"
            className="hover:text-[#1F2421] transition-colors whitespace-nowrap shrink-0"
          >
            Education
          </a>
          <a
            href="#skills"
            className="hover:text-[#1F2421] transition-colors whitespace-nowrap shrink-0"
          >
            Skills
          </a>
          <a
            href="#internships"
            className="hover:text-[#1F2421] transition-colors whitespace-nowrap shrink-0"
          >
            Career Focus
          </a>
          <a
            href="#contact"
            className="hover:text-[#1F2421] transition-colors whitespace-nowrap shrink-0"
          >
            Contact
          </a>
        </nav>

        {/* Zone 3: 1 primary action area */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenResumeModal}
            className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-medium text-[#1F2421] bg-white border border-[#E5E7DF] rounded-md hover:bg-[#F4F4F0] transition-colors whitespace-nowrap shrink-0 shadow-2xs"
            title="View executive resume sheet"
          >
            <FileText className="w-3.5 h-3.5 text-[#4A5D3E]" />
            <span>Resume PDF</span>
          </button>

          <button
            onClick={onOpenChat}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-white bg-[#4A5D3E] hover:bg-[#38462F] rounded-md transition-colors whitespace-nowrap shrink-0 shadow-2xs"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Ask My Resume</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenChat}
            className="p-2 text-[#4A5D3E] bg-[#EDF1E8] rounded-md"
            aria-label="Open Ask My Resume chat"
          >
            <MessageSquare className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#1F2421] rounded-md hover:bg-[#F4F4F0]"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#E5E7DF] bg-[#FBFBF9] px-6 py-4 space-y-3">
          <nav className="flex flex-col space-y-2 text-sm font-medium text-[#575D56]">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#1F2421]"
            >
              About Me
            </a>
            <a
              href="#education"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#1F2421]"
            >
              Education & Academics
            </a>
            <a
              href="#skills"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#1F2421]"
            >
              Skills & Competencies
            </a>
            <a
              href="#internships"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#1F2421]"
            >
              Internship & Career Focus
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#1F2421]"
            >
              Contact Nirjara
            </a>
          </nav>
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResumeModal();
              }}
              className="w-full flex items-center justify-center gap-2 px-3 py-2 text-xs font-medium text-[#1F2421] bg-white border border-[#E5E7DF] rounded-md"
            >
              <FileText className="w-3.5 h-3.5 text-[#4A5D3E]" />
              View Resume Document
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenChat();
              }}
              className="w-full flex items-center justify-center gap-2 px-3 py-2 text-xs font-medium text-white bg-[#4A5D3E] rounded-md"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              Ask My Resume Chatbot
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
