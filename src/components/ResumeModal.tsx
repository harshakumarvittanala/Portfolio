import React, { useEffect } from 'react';
import { X, Printer, Download, Mail, MapPin } from 'lucide-react';
import { GithubIcon } from './Icons';
import { PERSONAL_INFO, EXPERIENCES, PROJECTS, SKILL_CATEGORIES } from '../data/portfolioData';
import { playClickSound } from '../utils/audio';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    playClickSound();
    window.print();
  };

  const handleDownloadTxt = () => {
    playClickSound();
    const text = `
HARSHA KUMAR VITTANALA
Full Stack & AI Systems Engineer
Email: ${PERSONAL_INFO.email}
GitHub: ${PERSONAL_INFO.github}
LinkedIn: ${PERSONAL_INFO.linkedin}
Location: ${PERSONAL_INFO.location}

SUMMARY:
${PERSONAL_INFO.about}

KEY PROJECTS:
${PROJECTS.map(p => `- ${p.title} (${p.category}): ${p.tagline}\n  Tags: ${p.tags.join(', ')}\n  Demo: ${p.demoUrl || 'N/A'}`).join('\n\n')}

EXPERIENCE:
${EXPERIENCES.map(e => `- ${e.role} at ${e.company} (${e.period})\n  ${e.description.join('\n  ')}`).join('\n\n')}

SKILLS:
${SKILL_CATEGORIES.map(c => `${c.category}: ${c.skills.map(s => s.name).join(', ')}`).join('\n')}
    `.trim();

    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Harsha_Kumar_Vittanala_Resume.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-white text-slate-900 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Controls Bar */}
        <div className="flex items-center justify-between px-6 py-3.5 bg-slate-100 border-b border-slate-200 print:hidden">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-slate-700">Curriculum Vitae Preview</span>
            <span className="text-slate-400">•</span>
            <span className="text-xs text-emerald-600 font-medium">Ready for Print / PDF Export</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition-colors shadow-sm"
            >
              <Printer size={13} />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={handleDownloadTxt}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-semibold transition-colors"
            >
              <Download size={13} />
              <span>Plaintext .txt</span>
            </button>
            <button
              onClick={() => {
                playClickSound();
                onClose();
              }}
              className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors ml-1"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Printable Resume Document Sheet */}
        <div className="overflow-y-auto p-8 sm:p-10 space-y-6 text-sm bg-white">
          {/* Resume Header */}
          <div className="border-b border-slate-200 pb-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl font-extrabold text-slate-950 tracking-tight">
                  {PERSONAL_INFO.name}
                </h1>
                <p className="text-base font-semibold text-cyan-700 mt-0.5">
                  {PERSONAL_INFO.role}
                </p>
              </div>
              <div className="text-xs text-slate-600 space-y-1 sm:text-right font-mono">
                <div className="flex sm:justify-end items-center gap-1.5">
                  <Mail size={12} className="text-slate-400" />
                  <span>{PERSONAL_INFO.email}</span>
                </div>
                <div className="flex sm:justify-end items-center gap-1.5">
                  <GithubIcon size={12} className="text-slate-400" />
                  <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="text-cyan-700 hover:underline">
                    github.com/harshakumarvittanala
                  </a>
                </div>
                <div className="flex sm:justify-end items-center gap-1.5">
                  <MapPin size={12} className="text-slate-400" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
              </div>
            </div>

            <p className="mt-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
              {PERSONAL_INFO.about}
            </p>
          </div>

          {/* Featured Production Engineering Projects */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mb-3 border-b border-slate-200 pb-1">
              KEY PRODUCTION SYSTEMS & PROJECTS
            </h2>
            <div className="space-y-4">
              {PROJECTS.slice(0, 3).map((p) => (
                <div key={p.id}>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900">{p.title}</span>
                    <span className="text-xs font-mono text-cyan-800">{p.category}</span>
                  </div>
                  <p className="text-xs text-slate-600 mt-0.5">{p.tagline}</p>
                  <ul className="list-disc list-inside text-xs text-slate-700 mt-1 space-y-0.5">
                    {p.architecture.slice(0, 2).map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                  <div className="text-[11px] font-mono text-slate-500 mt-1">
                    Tech Stack: {p.tags.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Work Experience */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mb-3 border-b border-slate-200 pb-1">
              PROFESSIONAL EXPERIENCE
            </h2>
            <div className="space-y-4">
              {EXPERIENCES.map((e) => (
                <div key={e.id}>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <span className="font-bold text-slate-900">{e.role} — <span className="font-medium text-slate-700">{e.company}</span></span>
                    <span className="text-xs font-mono text-slate-500">{e.period}</span>
                  </div>
                  <ul className="list-disc list-inside text-xs text-slate-700 mt-1 space-y-1">
                    {e.description.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Core Technical Matrix */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mb-3 border-b border-slate-200 pb-1">
              TECHNICAL COMPETENCIES
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {SKILL_CATEGORIES.map((c, idx) => (
                <div key={idx}>
                  <span className="font-semibold text-slate-900">{c.category}: </span>
                  <span className="text-slate-600">{c.skills.map(s => s.name).join(', ')}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

