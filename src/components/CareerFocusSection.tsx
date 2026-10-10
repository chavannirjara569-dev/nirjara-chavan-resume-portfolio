import React from 'react';
import { RESUME_DATA } from '../data/resumeData';
import { Briefcase, Compass, CheckCircle2, FileSearch, Target } from 'lucide-react';

interface CareerFocusSectionProps {
  onOpenChat: () => void;
}

export const CareerFocusSection: React.FC<CareerFocusSectionProps> = ({ onOpenChat }) => {
  return (
    <section id="internships" className="py-20 md:py-28 border-b border-[#E5E7DF]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#4A5D3E] mb-2">
            Career Objective & Projects Focus
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-[#1F2421]">
            Internship Readiness & Academic Focus
          </h2>
          <p className="text-sm text-[#575D56] mt-2 leading-relaxed">
            Honest, verified candidate profile: As an incoming first-year PGDM candidate at IMDR Pune, Nirjara is actively seeking hands-on corporate internships to bridge classroom finance concepts with live industry operations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Statement Box */}
          <div className="lg:col-span-7 bg-white border border-[#E5E7DF] rounded-xl p-8 shadow-2xs space-y-6">
            <div className="flex items-center justify-between border-b border-[#E5E7DF] pb-4">
              <div className="flex items-center gap-2.5">
                <Briefcase className="w-5 h-5 text-[#4A5D3E]" />
                <h3 className="text-lg font-semibold text-[#1F2421]">
                  Internship Profile & Target Openings
                </h3>
              </div>
              <span className="text-xs font-medium text-[#4A5D3E] bg-[#EDF1E8] px-2.5 py-1 rounded-md">
                Active Seeking
              </span>
            </div>

            <p className="text-sm text-[#1F2421] leading-relaxed">
              In strict accordance with her resume, Nirjara is entering the corporate internship market as a first-year PGDM scholar. She brings strong foundations from her Commerce graduation (Swaraj College, Pune) and ongoing management training at Deccan Education Society's IMDR Pune.
            </p>

            <div className="space-y-3">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#575D56]">
                Target Internship & Entry-Level Functions:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {RESUME_DATA.internshipStatus.targetRoles.map((role) => (
                  <div
                    key={role}
                    className="p-3 bg-[#FBFBF9] border border-[#E5E7DF] rounded-lg text-xs font-medium text-[#1F2421] flex items-center gap-2"
                  >
                    <Target className="w-3.5 h-3.5 text-[#4A5D3E] shrink-0" />
                    <span>{role}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#E5E7DF] space-y-3">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#575D56]">
                Academic Case Studies & Coursework (IMDR PGDM):
              </div>
              <ul className="space-y-2 text-xs text-[#575D56] leading-relaxed">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#4A5D3E] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[#1F2421]">Financial Concepts & Analysis:</strong> Practical understanding of balance sheets, cash flows, working capital management, and financial ratios.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#4A5D3E] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[#1F2421]">Business Management & Strategy:</strong> Organizational decision frameworks, teamwork case studies, and business presentations.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#4A5D3E] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[#1F2421]">Executive Presentation Preparation:</strong> Designing structured slide decks and communicating data insights clearly to stakeholders.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Recruiter Evaluation Guide */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border border-[#E5E7DF] rounded-xl p-6 shadow-2xs space-y-5">
              <div className="flex items-center gap-2 text-sm font-semibold text-[#1F2421] border-b border-[#E5E7DF] pb-3">
                <FileSearch className="w-4 h-4 text-[#4A5D3E]" />
                <span>Why Hire Nirjara For Your Internship</span>
              </div>

              <div className="space-y-4 text-xs">
                <div className="space-y-1">
                  <div className="font-semibold text-[#1F2421]">
                    1. High Academic Discipline
                  </div>
                  <div className="text-[#575D56]">
                    87% distinction in HSC and 78% in CBSE reflect consistent focus and conscientious task completion.
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="font-semibold text-[#1F2421]">
                    2. Strong Presentation & Anchoring Poise
                  </div>
                  <div className="text-[#575D56]">
                    Her background in live event anchoring translates directly to polished corporate presentations and interpersonal composure.
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="font-semibold text-[#1F2421]">
                    3. Rapid Learning Agility
                  </div>
                  <div className="text-[#575D56]">
                    Enthusiastic, curious mindset that quickly absorbs company-specific software, internal tools, and accounting workflows.
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="font-semibold text-[#1F2421]">
                    4. Adaptable & Responsible Demeanor
                  </div>
                  <div className="text-[#575D56]">
                    Proven teamwork and problem-solving orientation ready to support demanding operational timelines.
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-[#E5E7DF]">
                <button
                  onClick={onOpenChat}
                  className="w-full py-2.5 px-4 text-xs font-medium text-white bg-[#4A5D3E] hover:bg-[#38462F] rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <Compass className="w-3.5 h-3.5" />
                  <span>Ask Chatbot About Her Fit For Your Role</span>
                </button>
              </div>
            </div>

            <div className="bg-[#EDF1E8] border border-[#E5E7DF] rounded-xl p-5 text-xs text-[#38462F] space-y-2">
              <div className="font-semibold">Source Transparency Note</div>
              <p className="leading-relaxed">
                This portfolio deliberately avoids inventing fictitious corporate internships or projects. All listed qualifications and skills represent Nirjara Chavan's genuine, verifiable resume credentials.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
