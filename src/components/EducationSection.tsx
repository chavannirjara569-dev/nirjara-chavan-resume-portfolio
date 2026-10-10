import React from 'react';
import { RESUME_DATA } from '../data/resumeData';
import { GraduationCap, Award, Building2, Calendar } from 'lucide-react';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 md:py-28 border-b border-[#E5E7DF]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#4A5D3E] mb-2">
            Academic Track Record
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-[#1F2421]">
            Education & Qualifications
          </h2>
          <p className="text-sm text-[#575D56] mt-2 leading-relaxed">
            Verified academic trajectory spanning secondary schooling, distinction in higher secondary education, commerce graduation, and advanced management studies at IMDR Pune.
          </p>
        </div>

        {/* Academic Cards Grid */}
        <div className="space-y-6">
          {RESUME_DATA.academics.map((item, index) => (
            <div
              key={item.id}
              className="bg-white border border-[#E5E7DF] rounded-xl p-6 sm:p-8 hover:border-[#4A5D3E]/40 transition-colors shadow-2xs"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-[#575D56]">
                    <span className="font-semibold text-[#4A5D3E]">
                      {index === 0 ? 'Current Degree' : 'Completed Qualification'}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#575D56]" />
                      <span>{item.year}</span>
                    </span>
                    {item.affiliation && (
                      <>
                        <span aria-hidden="true">·</span>
                        <span>{item.affiliation}</span>
                      </>
                    )}
                  </div>

                  <h3 className="text-xl font-semibold text-[#1F2421]">
                    {item.course}
                  </h3>

                  <div className="flex items-center gap-2 text-sm text-[#575D56]">
                    <Building2 className="w-4 h-4 text-[#4A5D3E] shrink-0" />
                    <span>{item.institute}</span>
                  </div>
                </div>

                {/* Score badge area - Unboxed editorial styling */}
                <div className="lg:text-right shrink-0 bg-[#FBFBF9] border border-[#E5E7DF] rounded-lg p-3 lg:px-4 lg:py-3">
                  <div className="text-xs text-[#575D56] uppercase tracking-wider">
                    {item.scoreType}
                  </div>
                  <div className="text-2xl font-semibold text-[#1F2421] font-mono tabular-nums">
                    {item.score}
                  </div>
                  <div className="text-xs text-[#4A5D3E] font-medium">
                    {item.status === 'Pursuing' ? 'Batch 2026–2028' : 'Verified Board / Univ Record'}
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-[#E5E7DF] text-sm text-[#575D56] leading-relaxed">
                {item.summary}
              </div>
            </div>
          ))}
        </div>

        {/* Academic Comparison Table (Clean Tabular View) */}
        <div className="mt-12 bg-white border border-[#E5E7DF] rounded-xl overflow-hidden shadow-2xs">
          <div className="p-5 border-b border-[#E5E7DF] bg-[#FBFBF9] flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm font-semibold text-[#1F2421]">
              <GraduationCap className="w-4 h-4 text-[#4A5D3E]" />
              <span>Summary Matrix of Academic Credentials</span>
            </div>
            <span className="text-xs text-[#575D56]">Source: Official Resume PDF</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#FBFBF9] text-[#575D56] text-xs uppercase border-b border-[#E5E7DF]">
                <tr>
                  <th scope="col" className="px-6 py-3 font-semibold">Course</th>
                  <th scope="col" className="px-6 py-3 font-semibold">Year of Passing</th>
                  <th scope="col" className="px-6 py-3 font-semibold">Institute</th>
                  <th scope="col" className="px-6 py-3 font-semibold text-right">CGPA / %</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E7DF]">
                {RESUME_DATA.academics.map((row) => (
                  <tr key={row.id} className="hover:bg-[#FBFBF9]/60 transition-colors">
                    <td className="px-6 py-4 font-medium text-[#1F2421] whitespace-nowrap">
                      {row.course}
                    </td>
                    <td className="px-6 py-4 text-[#575D56] whitespace-nowrap">
                      {row.year}
                    </td>
                    <td className="px-6 py-4 text-[#575D56]">
                      {row.institute}
                    </td>
                    <td className="px-6 py-4 text-[#1F2421] font-semibold font-mono tabular-nums text-right whitespace-nowrap">
                      {row.score}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
