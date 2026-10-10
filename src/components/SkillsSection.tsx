import React, { useState } from 'react';
import { RESUME_DATA } from '../data/resumeData';
import { CheckCircle2, Monitor, BarChart3, Users, Zap } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'technical' | 'competencies'>('all');

  return (
    <section id="skills" className="py-20 md:py-28 border-b border-[#E5E7DF]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#4A5D3E] mb-2">
              Capabilities & Proficiencies
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-[#1F2421]">
              Skills & Core Competencies
            </h2>
            <p className="text-sm text-[#575D56] mt-2 leading-relaxed">
              Every technical skill and competency below is taken directly from Nirjara's verified resume, pairing core commercial knowledge with presentation and analytical capabilities.
            </p>
          </div>

          {/* Interactive filter control (allowed for button tabs) */}
          <div className="flex items-center gap-1 p-1 bg-[#F4F4F0] border border-[#E5E7DF] rounded-lg shrink-0 self-start md:self-auto">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                activeTab === 'all'
                  ? 'bg-white text-[#1F2421] shadow-2xs'
                  : 'text-[#575D56] hover:text-[#1F2421]'
              }`}
            >
              All Skills
            </button>
            <button
              onClick={() => setActiveTab('technical')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                activeTab === 'technical'
                  ? 'bg-white text-[#1F2421] shadow-2xs'
                  : 'text-[#575D56] hover:text-[#1F2421]'
              }`}
            >
              Technical & Office
            </button>
            <button
              onClick={() => setActiveTab('competencies')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                activeTab === 'competencies'
                  ? 'bg-white text-[#1F2421] shadow-2xs'
                  : 'text-[#575D56] hover:text-[#1F2421]'
              }`}
            >
              Competencies
            </button>
          </div>
        </div>

        {/* Skill Displays */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Technical Skills Card */}
          {(activeTab === 'all' || activeTab === 'technical') && (
            <div className="bg-white border border-[#E5E7DF] rounded-xl p-8 shadow-2xs space-y-6">
              <div className="flex items-center gap-3 border-b border-[#E5E7DF] pb-4">
                <div className="p-2.5 bg-[#EDF1E8] rounded-lg text-[#4A5D3E]">
                  <Monitor className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#1F2421]">
                    Technical Skills
                  </h3>
                  <div className="text-xs text-[#575D56]">
                    Productivity software & basic computing workflows
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-[#FBFBF9] border border-[#E5E7DF] rounded-lg space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-sm text-[#1F2421]">WPS Office Suite</span>
                    <span className="text-xs text-[#4A5D3E]">Spreadsheets & Docs</span>
                  </div>
                  <p className="text-xs text-[#575D56]">
                    Proficient in documents drafting, data entry, basic formula usage, formatting financial summaries, and table management.
                  </p>
                </div>

                <div className="p-4 bg-[#FBFBF9] border border-[#E5E7DF] rounded-lg space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-sm text-[#1F2421]">Presentation Preparation</span>
                    <span className="text-xs text-[#4A5D3E]">Slide Design & Delivery</span>
                  </div>
                  <p className="text-xs text-[#575D56]">
                    Structuring executive slides, visual financial outlines, and business reports ready for management review.
                  </p>
                </div>

                <div className="p-4 bg-[#FBFBF9] border border-[#E5E7DF] rounded-lg space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-sm text-[#1F2421]">Basic Computer Skills</span>
                    <span className="text-xs text-[#4A5D3E]">Digital Operations</span>
                  </div>
                  <p className="text-xs text-[#575D56]">
                    File management, digital research, business email communication, and navigating modern workplace applications.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Competencies Card */}
          {(activeTab === 'all' || activeTab === 'competencies') && (
            <div className="bg-white border border-[#E5E7DF] rounded-xl p-8 shadow-2xs space-y-6">
              <div className="flex items-center gap-3 border-b border-[#E5E7DF] pb-4">
                <div className="p-2.5 bg-[#EDF1E8] rounded-lg text-[#4A5D3E]">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#1F2421]">
                    Domain & Professional Competencies
                  </h3>
                  <div className="text-xs text-[#575D56]">
                    Quantitative foundations & interpersonal strengths
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {RESUME_DATA.competencies.map((comp) => (
                  <div
                    key={comp}
                    className="p-3.5 bg-[#FBFBF9] border border-[#E5E7DF] rounded-lg flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#4A5D3E] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-semibold text-[#1F2421]">
                        {comp}
                      </div>
                      <div className="text-[11px] text-[#575D56] mt-0.5">
                        Verified resume attribute
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-[#EDF1E8] rounded-lg text-xs text-[#38462F] leading-relaxed">
                <span className="font-semibold block mb-0.5">Academic Immersion:</span>
                Currently deepening expertise in financial analysis, corporate finance structures, and management frameworks as part of her 2026–2028 PGDM program at IMDR Pune.
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
