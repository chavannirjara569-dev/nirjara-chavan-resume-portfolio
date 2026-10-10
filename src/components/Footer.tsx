import React from 'react';
import { RESUME_DATA } from '../data/resumeData';
import { ArrowUp, Mail, Phone, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#E5E7DF] bg-[#FBFBF9] py-12 text-xs text-[#575D56] no-print">
      <div className="max-w-6xl mx-auto px-6 space-y-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="text-base font-semibold text-[#1F2421]">
              {RESUME_DATA.personalInfo.fullName}
            </div>
            <p className="text-xs text-[#575D56] mt-1">
              PGDM Candidate (Batch 2026–2028) · Institute of Management Development & Research (IMDR®), Pune
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={`mailto:${RESUME_DATA.personalInfo.email}`}
              className="hover:text-[#1F2421] transition-colors"
            >
              Email
            </a>
            <a
              href={`tel:+91${RESUME_DATA.personalInfo.phone}`}
              className="hover:text-[#1F2421] transition-colors"
            >
              Phone
            </a>
            <a
              href={RESUME_DATA.personalInfo.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#1F2421] transition-colors"
            >
              LinkedIn
            </a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-[#1F2421] transition-colors ml-2"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="pt-6 border-t border-[#E5E7DF] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[11px] text-[#575D56]">
          <div>
            Official portfolio representation grounded in the candidate's verified resume. No fabricated information.
          </div>
          <div>
            Permanent Base: Ashta, Tal. Walwa, Dist. Sangli, Maharashtra
          </div>
        </div>
      </div>
    </footer>
  );
};
