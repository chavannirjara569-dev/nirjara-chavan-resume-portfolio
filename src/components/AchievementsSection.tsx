import React from 'react';
import { RESUME_DATA } from '../data/resumeData';
import { Award, CheckCircle2, TrendingUp, Sparkles } from 'lucide-react';

export const AchievementsSection: React.FC = () => {
  return (
    <section id="achievements" className="py-20 md:py-28 border-b border-[#E5E7DF]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#4A5D3E] mb-2">
            Verified Milestones
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-[#1F2421]">
            Academic Achievements & Highlights
          </h2>
          <p className="text-sm text-[#575D56] mt-2 leading-relaxed">
            Tangible, verified accomplishments directly grounded in Nirjara Chavan's academic records and personal leadership capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {RESUME_DATA.achievements.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#E5E7DF] rounded-xl p-6 shadow-2xs hover:border-[#4A5D3E]/40 transition-colors space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="p-2 bg-[#EDF1E8] rounded-md text-[#4A5D3E]">
                    <Award className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-mono font-semibold text-[#4A5D3E]">
                    0{idx + 1}
                  </span>
                </div>

                <div className="text-2xl font-semibold text-[#1F2421] font-mono tabular-nums pt-1">
                  {item.metric}
                </div>

                <h3 className="text-sm font-semibold text-[#1F2421]">
                  {item.title}
                </h3>
              </div>

              <p className="text-xs text-[#575D56] leading-relaxed pt-2 border-t border-[#E5E7DF]">
                {item.context}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
