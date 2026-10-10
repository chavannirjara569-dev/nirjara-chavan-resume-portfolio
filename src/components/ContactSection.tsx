import React, { useState } from 'react';
import { RESUME_DATA } from '../data/resumeData';
import { Mail, Phone, MapPin, Copy, Check, Send, ExternalLink, Linkedin } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copiedType, setCopiedType] = useState<string | null>(null);
  const [subject, setSubject] = useState('Internship Opportunity / PGDM Candidate Interview');
  const [recruiterName, setRecruiterName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [message, setMessage] = useState('');

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleComposeEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const bodyContent = `Dear Nirjara,\n\nI am contacting you regarding an opportunity${companyName ? ` at ${companyName}` : ''}.\n\n${message || 'We would like to connect with you regarding your application / internship profile.'}\n\nBest regards,\n${recruiterName || 'Recruiting Team'}`;
    const mailtoUrl = `mailto:${RESUME_DATA.personalInfo.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(bodyContent)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#4A5D3E] mb-2">
            Get In Touch
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-[#1F2421]">
            Contact & Recruiter Inquiries
          </h2>
          <p className="text-sm text-[#575D56] mt-2 leading-relaxed">
            Direct channels to reach Nirjara Chavan for internship opportunities, project trainee openings, or academic discussions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Direct Details Card */}
          <div className="lg:col-span-5 bg-white border border-[#E5E7DF] rounded-xl p-8 shadow-2xs space-y-6">
            <h3 className="text-lg font-semibold text-[#1F2421] border-b border-[#E5E7DF] pb-4">
              Direct Contact Details
            </h3>

            {/* Email */}
            <div className="space-y-1">
              <span className="text-xs text-[#575D56] uppercase tracking-wider">Official Email</span>
              <div className="flex items-center justify-between gap-2 p-3 bg-[#FBFBF9] border border-[#E5E7DF] rounded-lg">
                <a
                  href={`mailto:${RESUME_DATA.personalInfo.email}`}
                  className="text-sm font-medium text-[#1F2421] hover:text-[#4A5D3E] transition-colors truncate"
                >
                  {RESUME_DATA.personalInfo.email}
                </a>
                <button
                  onClick={() => copyToClipboard(RESUME_DATA.personalInfo.email, 'email')}
                  className="p-1.5 text-[#575D56] hover:text-[#1F2421] rounded transition-colors"
                  title="Copy email address"
                >
                  {copiedType === 'email' ? (
                    <Check className="w-4 h-4 text-[#4A5D3E]" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Phone */}
            <div className="space-y-1">
              <span className="text-xs text-[#575D56] uppercase tracking-wider">Phone Number</span>
              <div className="flex items-center justify-between gap-2 p-3 bg-[#FBFBF9] border border-[#E5E7DF] rounded-lg">
                <a
                  href={`tel:+91${RESUME_DATA.personalInfo.phone}`}
                  className="text-sm font-medium text-[#1F2421] hover:text-[#4A5D3E] transition-colors"
                >
                  +91 {RESUME_DATA.personalInfo.phone}
                </a>
                <button
                  onClick={() => copyToClipboard(RESUME_DATA.personalInfo.phone, 'phone')}
                  className="p-1.5 text-[#575D56] hover:text-[#1F2421] rounded transition-colors"
                  title="Copy phone number"
                >
                  {copiedType === 'phone' ? (
                    <Check className="w-4 h-4 text-[#4A5D3E]" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="space-y-1">
              <span className="text-xs text-[#575D56] uppercase tracking-wider">LinkedIn Profile</span>
              <div className="flex items-center justify-between gap-2 p-3 bg-[#FBFBF9] border border-[#E5E7DF] rounded-lg">
                <span className="text-sm font-medium text-[#1F2421] flex items-center gap-2">
                  <Linkedin className="w-4 h-4 text-[#4A5D3E]" />
                  <span>{RESUME_DATA.personalInfo.linkedInName}</span>
                </span>
                <a
                  href={RESUME_DATA.personalInfo.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-[#4A5D3E] hover:underline font-medium"
                >
                  <span>Open Profile</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="space-y-1">
              <span className="text-xs text-[#575D56] uppercase tracking-wider">Permanent Address</span>
              <div className="p-3 bg-[#FBFBF9] border border-[#E5E7DF] rounded-lg text-xs text-[#1F2421] leading-relaxed flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#4A5D3E] shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium">{RESUME_DATA.personalInfo.permanentAddress.place}</div>
                  <div className="text-[#575D56]">
                    Taluka {RESUME_DATA.personalInfo.permanentAddress.taluka}, District {RESUME_DATA.personalInfo.permanentAddress.district}
                  </div>
                  <div className="text-[#575D56]">Maharashtra, India</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Recruiter Email Composer */}
          <div className="lg:col-span-7 bg-white border border-[#E5E7DF] rounded-xl p-8 shadow-2xs space-y-5">
            <div className="border-b border-[#E5E7DF] pb-4">
              <h3 className="text-lg font-semibold text-[#1F2421]">
                Send Quick Recruiter Message
              </h3>
              <p className="text-xs text-[#575D56] mt-1">
                Generates a formatted email directly to Nirjara with your subject and brief.
              </p>
            </div>

            <form onSubmit={handleComposeEmail} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#575D56] font-medium mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={recruiterName}
                    onChange={(e) => setRecruiterName(e.target.value)}
                    placeholder="e.g. John Doe / Campus Lead"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#E5E7DF] bg-[#FBFBF9] text-[#1F2421] focus:outline-none focus:border-[#4A5D3E]"
                  />
                </div>
                <div>
                  <label className="block text-[#575D56] font-medium mb-1">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="e.g. Financial Services Ltd"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#E5E7DF] bg-[#FBFBF9] text-[#1F2421] focus:outline-none focus:border-[#4A5D3E]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#575D56] font-medium mb-1">
                  Subject Line
                </label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#E5E7DF] bg-[#FBFBF9] text-[#1F2421] focus:outline-none focus:border-[#4A5D3E]"
                />
              </div>

              <div>
                <label className="block text-[#575D56] font-medium mb-1">
                  Message / Role Details
                </label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Describe your internship opportunity, timeline, stipend, or scheduling availability..."
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#E5E7DF] bg-[#FBFBF9] text-[#1F2421] focus:outline-none focus:border-[#4A5D3E] resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-[11px] text-[#575D56]">
                  Opens your default email client to chavannirjara0@gmail.com
                </span>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-medium text-white bg-[#4A5D3E] hover:bg-[#38462F] rounded-lg transition-colors shadow-2xs"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Launch Email</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
