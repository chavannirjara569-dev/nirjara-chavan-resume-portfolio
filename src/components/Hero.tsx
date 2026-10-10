import React from 'react';
import { RESUME_DATA } from '../data/resumeData';
import { ArrowUpRight, MessageSquare, FileText, Mail, MapPin } from 'lucide-react';

interface HeroProps {
  onOpenChat: () => void;
  onOpenResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenChat, onOpenResumeModal }) => {
  return (
    <section id="home" className="pt-14 pb-20 md:pt-20 md:pb-28 border-b border-[#E5E7DF]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Subtle unboxed kicker metadata */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-[#4A5D3E] tracking-wide mb-5">
          <span>Deccan Education Society</span>
          <span aria-hidden="true">·</span>
          <span>IMDR® Pune (PGDM 2026–28)</span>
          <span aria-hidden="true">·</span>
          <span>Finance & Business Management</span>
        </div>

        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8 space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#1F2421] text-balance">
              {RESUME_DATA.personalInfo.fullName}
            </h1>

            <p className="text-lg sm:text-xl text-[#4A5D3E] font-medium tracking-tight">
              {RESUME_DATA.personalInfo.headline}
            </p>

            <p className="text-base sm:text-lg text-[#575D56] leading-relaxed max-w-2xl">
              First-year PGDM candidate with a solid Commerce foundation and a keen interest in Finance and Business Management. Bringing strong analytical capabilities, responsible work ethic, and quick learning agility to high-impact corporate teams.
            </p>

            {/* Career Objective Editorial Callout */}
            <div className="p-6 bg-white border border-[#E5E7DF] rounded-xl relative shadow-2xs">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#4A5D3E] block mb-2">
                Career Objective
              </span>
              <p className="text-base text-[#1F2421] italic leading-relaxed">
                "{RESUME_DATA.careerObjective}"
              </p>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenChat}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-white bg-[#4A5D3E] hover:bg-[#38462F] rounded-lg transition-colors shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Ask My Resume</span>
              </button>

              <button
                onClick={onOpenResumeModal}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-[#1F2421] bg-white hover:bg-[#F4F4F0] border border-[#E5E7DF] rounded-lg transition-colors shadow-2xs"
              >
                <FileText className="w-4 h-4 text-[#4A5D3E]" />
                <span>View & Print Resume</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-3 text-sm font-medium text-[#575D56] hover:text-[#1F2421] transition-colors"
              >
                <span>Connect With Me</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Recruiter Summary Column */}
          <div className="lg:col-span-4 bg-white border border-[#E5E7DF] rounded-xl p-6 space-y-6 shadow-2xs">
            <div className="border-b border-[#E5E7DF] pb-4">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#4A5D3E] mb-1">
                Candidate Profile
              </div>
              <div className="text-base font-semibold text-[#1F2421]">
                Placement & Internship Dossier
              </div>
            </div>

            <div className="space-y-4 text-sm">
              <div>
                <span className="text-xs text-[#575D56] block">Current Institution</span>
                <span className="font-medium text-[#1F2421]">
                  IMDR® Pune (Est. 1974)
                </span>
              </div>

              <div>
                <span className="text-xs text-[#575D56] block">Program & Batch</span>
                <span className="font-medium text-[#1F2421]">
                  PGDM [2026–2028] · 1st Year
                </span>
              </div>

              <div>
                <span className="text-xs text-[#575D56] block">Primary Focus</span>
                <span className="font-medium text-[#1F2421]">
                  Finance & Business Management
                </span>
              </div>

              <div>
                <span className="text-xs text-[#575D56] block">Prior Foundation</span>
                <span className="font-medium text-[#1F2421]">
                  Graduation in Commerce (2026) · 87% HSC
                </span>
              </div>

              <div className="pt-2 border-t border-[#E5E7DF] space-y-2">
                <a
                  href={`mailto:${RESUME_DATA.personalInfo.email}`}
                  className="flex items-center gap-2 text-xs text-[#575D56] hover:text-[#4A5D3E] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#4A5D3E]" />
                  <span className="truncate">{RESUME_DATA.personalInfo.email}</span>
                </a>
                <div className="flex items-center gap-2 text-xs text-[#575D56]">
                  <MapPin className="w-3.5 h-3.5 text-[#4A5D3E]" />
                  <span>Pune / Sangli, Maharashtra</span>
                </div>
              </div>
            </div>

            <div className="bg-[#EDF1E8] p-3.5 rounded-lg text-xs text-[#38462F] leading-relaxed">
              <span className="font-semibold block mb-0.5">Recruiter Availability:</span>
              Open for Summer/Winter Internships, Financial Research projects, and corporate traineeships.
            </div>
          </div>
        </div>

        {/* Full-width strip below hero with unboxed typographic metadata */}
        <div className="mt-14 pt-8 border-t border-[#E5E7DF] grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm">
          <div>
            <div className="text-xs text-[#575D56] uppercase tracking-wider mb-1">Academic Status</div>
            <div className="font-semibold text-[#1F2421]">PGDM Pursuing</div>
            <div className="text-xs text-[#575D56]">Batch 2026–2028</div>
          </div>
          <div>
            <div className="text-xs text-[#575D56] uppercase tracking-wider mb-1">12th HSC Score</div>
            <div className="font-semibold text-[#1F2421] font-mono tabular-nums">87.00%</div>
            <div className="text-xs text-[#575D56]">Distinction Honors</div>
          </div>
          <div>
            <div className="text-xs text-[#575D56] uppercase tracking-wider mb-1">Commerce Degree</div>
            <div className="font-semibold text-[#1F2421] font-mono tabular-nums">6.84 CGPA</div>
            <div className="text-xs text-[#575D56]">Swaraj College, Pune</div>
          </div>
          <div>
            <div className="text-xs text-[#575D56] uppercase tracking-wider mb-1">Languages Spoken</div>
            <div className="font-semibold text-[#1F2421]">English, Hindi, Marathi</div>
            <div className="text-xs text-[#575D56]">Trilingual Fluency</div>
          </div>
        </div>
      </div>
    </section>
  );
};
