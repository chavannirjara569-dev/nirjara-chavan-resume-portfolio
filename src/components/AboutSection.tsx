import React from 'react';
import { RESUME_DATA } from '../data/resumeData';
import { BookOpen, Mic, Sparkles, Music, Globe } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 border-b border-[#E5E7DF]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Section Heading & Context */}
          <div className="lg:col-span-4 space-y-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#4A5D3E]">
              Executive Profile
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-[#1F2421]">
              About Nirjara
            </h2>
            <p className="text-sm text-[#575D56] leading-relaxed">
              A candidate narrative driven by academic discipline, commerce rigor, and proactive readiness for corporate finance environments.
            </p>

            {/* Address & Origin Metadata */}
            <div className="pt-6 border-t border-[#E5E7DF] space-y-3 text-xs text-[#575D56]">
              <div>
                <span className="font-semibold text-[#1F2421] block mb-0.5">Permanent Address:</span>
                <span>{RESUME_DATA.personalInfo.permanentAddress.full}</span>
              </div>
              <div>
                <span className="font-semibold text-[#1F2421] block mb-0.5">Current Institutional Base:</span>
                <span>Pune, Maharashtra (IMDR Campus)</span>
              </div>
            </div>
          </div>

          {/* Core Content */}
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-white border border-[#E5E7DF] rounded-xl p-8 shadow-2xs space-y-6">
              <h3 className="text-xl font-semibold text-[#1F2421]">
                Professional Summary & Approach
              </h3>
              <p className="text-base text-[#1F2421] leading-relaxed">
                {RESUME_DATA.aboutMe}
              </p>

              {/* Core Qualities Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#E5E7DF]">
                <div className="space-y-1">
                  <div className="text-xs uppercase tracking-wider font-semibold text-[#4A5D3E]">
                    Analytical Mindset
                  </div>
                  <div className="text-xs text-[#575D56] leading-relaxed">
                    Strong comfort with financial statements, commercial numbers, and structured problem-solving.
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="text-xs uppercase tracking-wider font-semibold text-[#4A5D3E]">
                    Communication & Poise
                  </div>
                  <div className="text-xs text-[#575D56] leading-relaxed">
                    Refined through live stage anchoring, clear interpersonal rapport, and collaborative teamwork.
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="text-xs uppercase tracking-wider font-semibold text-[#4A5D3E]">
                    Growth & Adaptability
                  </div>
                  <div className="text-xs text-[#575D56] leading-relaxed">
                    Responsible work discipline with a positive outlook and genuine curiosity to learn new systems quickly.
                  </div>
                </div>
              </div>
            </div>

            {/* Languages & Personal Interests Split */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Languages Box */}
              <div className="bg-white border border-[#E5E7DF] rounded-xl p-6 shadow-2xs space-y-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-[#1F2421]">
                  <Globe className="w-4 h-4 text-[#4A5D3E]" />
                  <span>Languages Known</span>
                </div>
                <div className="space-y-3">
                  {RESUME_DATA.languages.map((l) => (
                    <div
                      key={l.language}
                      className="flex items-center justify-between pb-2 border-b border-[#E5E7DF] last:border-0 last:pb-0"
                    >
                      <span className="text-sm font-medium text-[#1F2421]">{l.language}</span>
                      <span className="text-xs text-[#575D56]">{l.proficiency}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Personal Interests Box */}
              <div className="bg-white border border-[#E5E7DF] rounded-xl p-6 shadow-2xs space-y-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-[#1F2421]">
                  <Sparkles className="w-4 h-4 text-[#4A5D3E]" />
                  <span>Personal Interests</span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <BookOpen className="w-4 h-4 text-[#4A5D3E] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-medium text-[#1F2421]">Reading novels</div>
                      <div className="text-xs text-[#575D56]">Sustains focus, deep thinking, and conceptual articulation.</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mic className="w-4 h-4 text-[#4A5D3E] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-medium text-[#1F2421]">Anchoring</div>
                      <div className="text-xs text-[#575D56]">Public speaking, stage management, and hosting events.</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Sparkles className="w-4 h-4 text-[#4A5D3E] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-medium text-[#1F2421]">Curious to learn new concepts</div>
                      <div className="text-xs text-[#575D56]">Inquisitive approach to financial mechanisms and industry trends.</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Music className="w-4 h-4 text-[#4A5D3E] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-medium text-[#1F2421]">Listening to songs</div>
                      <div className="text-xs text-[#575D56]">Recharges creative energy and emotional equilibrium.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
