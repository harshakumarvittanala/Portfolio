import React from 'react';
import { ArrowUp, Mail, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';
import { playClickSound, playHoverSound } from '../utils/audio';

interface FooterProps {
  onOpenTerminal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenTerminal }) => {
  const scrollToTop = () => {
    playClickSound();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-slate-950 border-t border-slate-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Left Info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
          <div className="flex items-center gap-2">
            <span className="font-bold text-white text-base tracking-tight">{PERSONAL_INFO.name}</span>
            <span className="text-xs font-mono text-cyan-400 font-semibold">{PERSONAL_INFO.handle}</span>
          </div>
          <p className="text-xs text-slate-500 font-mono">
            {PERSONAL_INFO.role} • 2026 Production Edition
          </p>
        </div>

        {/* Middle Operational Status & Terminal Trigger */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Systems Online • Edge Latency 14ms</span>
          </div>
          <button
            onClick={() => {
              playClickSound();
              onOpenTerminal();
            }}
            onMouseEnter={playHoverSound}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/40 text-[11px] font-mono text-cyan-400 transition-colors"
          >
            <Terminal size={12} />
            <span>Open CLI</span>
          </button>
        </div>

        {/* Right Socials & Back to top */}
        <div className="flex items-center gap-3">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={playHoverSound}
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-all"
            title="GitHub"
          >
            <GithubIcon size={16} />
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={playHoverSound}
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-all"
            title="LinkedIn"
          >
            <LinkedinIcon size={16} />
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            onMouseEnter={playHoverSound}
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-all"
            title="Email"
          >
            <Mail size={16} />
          </a>
          <button
            onClick={scrollToTop}
            onMouseEnter={playHoverSound}
            className="p-2 rounded-xl bg-cyan-950/80 hover:bg-cyan-900 border border-cyan-700/60 text-cyan-400 hover:text-white transition-all shadow-md"
            title="Scroll to Top"
          >
            <ArrowUp size={16} />
          </button>
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-slate-900/80 text-center text-xs text-slate-600 font-mono">
        Built with React 18, TypeScript, Tailwind CSS & Canvas Particle Physics. Designed for high performance and responsiveness.
      </div>
    </footer>
  );
};

