import React, { useState } from 'react';
import { RESUME_DATA } from '../data/resumeData';
import { X, Printer, Download, Copy, Check, FileText } from 'lucide-react';

interface ResumeViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeViewerModal: React.FC<ResumeViewerModalProps> = ({
  isOpen,
  onClose
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadTxt = () => {
    const content = `NIRJARA VIJAYKUMAR CHAVAN
Email: ${RESUME_DATA.personalInfo.email}
Phone: ${RESUME_DATA.personalInfo.phone}
LinkedIn: ${RESUME_DATA.personalInfo.linkedInName}
Permanent Address: ${RESUME_DATA.personalInfo.permanentAddress.full}

OBJECTIVE:
${RESUME_DATA.careerObjective}

ABOUT ME:
${RESUME_DATA.aboutMe}

ACADEMICS:
${RESUME_DATA.academics
  .map(
    (a) =>
      `• ${a.course} | ${a.year} | ${a.institute} | Score: ${a.score}`
  )
  .join('\n')}

TECHNICAL SKILLS:
${RESUME_DATA.technicalSkills.map((s) => `• ${s}`).join('\n')}

COMPETENCIES:
${RESUME_DATA.competencies.map((c) => `• ${c}`).join('\n')}

LANGUAGES KNOWN:
${RESUME_DATA.languages.map((l) => `• ${l.language} (${l.proficiency})`).join('\n')}

PERSONAL INTERESTS:
${RESUME_DATA.personalInterests.map((p) => `• ${p.interest}`).join('\n')}
`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Nirjara_Chavan_Resume.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleCopyAll = () => {
    const summary = `Nirjara Vijaykumar Chavan\n${RESUME_DATA.personalInfo.headline}\nEmail: ${RESUME_DATA.personalInfo.email} | Phone: +91 ${RESUME_DATA.personalInfo.phone}\nIMDR Pune (PGDM Pursuing 2026-28) | Swaraj College (B.Com - 6.84) | HSC - 87% | CBSE - 78%\nSkills: ${RESUME_DATA.technicalSkills.join(', ')}\nCompetencies: ${RESUME_DATA.competencies.join(', ')}`;
    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/50 backdrop-blur-xs overflow-y-auto no-print">
      <div className="bg-white border border-[#E5E7DF] rounded-2xl w-full max-w-3xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150 my-auto">
        {/* Header Bar */}
        <div className="px-6 py-4 bg-[#FBFBF9] border-b border-[#E5E7DF] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <FileText className="w-4 h-4 text-[#4A5D3E]" />
            <span className="text-sm font-semibold text-[#1F2421]">
              Executive Resume Sheet — Nirjara Chavan
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyAll}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#1F2421] bg-white border border-[#E5E7DF] rounded-md hover:bg-[#F4F4F0] transition-colors"
              title="Copy executive summary"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#4A5D3E]" />
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy ATS</span>
                </>
              )}
            </button>

            <button
              onClick={handleDownloadTxt}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#1F2421] bg-white border border-[#E5E7DF] rounded-md hover:bg-[#F4F4F0] transition-colors"
              title="Download text resume"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download (.txt)</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-white bg-[#4A5D3E] hover:bg-[#38462F] rounded-md transition-colors"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-[#575D56] hover:text-[#1F2421] rounded-md ml-1"
              title="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Sheet Body */}
        <div className="flex-1 overflow-y-auto p-8 sm:p-10 font-sans text-[#1F2421] space-y-6 bg-white">
          {/* Header of Resume */}
          <div className="border-b-2 border-[#1F2421] pb-4">
            <h1 className="text-2xl font-bold uppercase tracking-tight text-[#1F2421]">
              {RESUME_DATA.personalInfo.fullName}
            </h1>
            <div className="text-xs text-[#575D56] mt-1.5 flex flex-wrap gap-x-3 gap-y-1">
              <span>Email: {RESUME_DATA.personalInfo.email}</span>
              <span>•</span>
              <span>Phone: +91 {RESUME_DATA.personalInfo.phone}</span>
              <span>•</span>
              <span>LinkedIn: {RESUME_DATA.personalInfo.linkedInName}</span>
              <span>•</span>
              <span>Address: {RESUME_DATA.personalInfo.permanentAddress.full}</span>
            </div>
          </div>

          {/* Objective */}
          <div className="space-y-1.5">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#4A5D3E] border-b border-[#E5E7DF] pb-1">
              Objective
            </h2>
            <p className="text-xs leading-relaxed text-[#1F2421]">
              {RESUME_DATA.careerObjective}
            </p>
          </div>

          {/* About Me */}
          <div className="space-y-1.5">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#4A5D3E] border-b border-[#E5E7DF] pb-1">
              About Me
            </h2>
            <p className="text-xs leading-relaxed text-[#1F2421]">
              {RESUME_DATA.aboutMe}
            </p>
          </div>

          {/* Academics */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#4A5D3E] border-b border-[#E5E7DF] pb-1">
              Academics
            </h2>
            <div className="border border-[#E5E7DF] rounded overflow-hidden">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#FBFBF9] border-b border-[#E5E7DF] text-[#575D56] font-semibold">
                  <tr>
                    <th className="p-2.5">Course</th>
                    <th className="p-2.5">Yr. of Passing</th>
                    <th className="p-2.5">Institute</th>
                    <th className="p-2.5 text-right">CGPA / %</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E5E7DF]">
                  {RESUME_DATA.academics.map((item) => (
                    <tr key={item.id}>
                      <td className="p-2.5 font-medium">{item.course}</td>
                      <td className="p-2.5 text-[#575D56]">{item.year}</td>
                      <td className="p-2.5 text-[#575D56]">{item.institute}</td>
                      <td className="p-2.5 text-right font-semibold font-mono tabular-nums">
                        {item.score}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Skills & Competencies Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-1">
            <div className="space-y-1.5">
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#4A5D3E] border-b border-[#E5E7DF] pb-1">
                Technical Skills
              </h2>
              <ul className="text-xs space-y-1 text-[#1F2421]">
                {RESUME_DATA.technicalSkills.map((s) => (
                  <li key={s}>• {s}</li>
                ))}
              </ul>
            </div>

            <div className="space-y-1.5">
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#4A5D3E] border-b border-[#E5E7DF] pb-1">
                Competencies
              </h2>
              <ul className="text-xs space-y-1 text-[#1F2421]">
                {RESUME_DATA.competencies.map((c) => (
                  <li key={c}>• {c}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Languages & Personal Interests */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-1">
            <div className="space-y-1.5">
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#4A5D3E] border-b border-[#E5E7DF] pb-1">
                Languages Known
              </h2>
              <ul className="text-xs space-y-1 text-[#1F2421]">
                {RESUME_DATA.languages.map((l) => (
                  <li key={l.language}>• {l.language} ({l.proficiency})</li>
                ))}
              </ul>
            </div>

            <div className="space-y-1.5">
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#4A5D3E] border-b border-[#E5E7DF] pb-1">
                Personal Interests
              </h2>
              <ul className="text-xs space-y-1 text-[#1F2421]">
                {RESUME_DATA.personalInterests.map((p) => (
                  <li key={p.interest}>• {p.interest}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
