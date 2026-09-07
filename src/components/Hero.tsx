import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  Terminal,
  Sparkles,
  Code2,
  Cpu,
  Layers,
  ShieldCheck,
  Flame,
  ExternalLink,
  ChevronDown
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ParticleCanvas } from './ParticleCanvas';
import { playClickSound, playHoverSound } from '../utils/audio';

interface HeroProps {
  onOpenTerminal: () => void;
  onOpenResume: () => void;
}

const ROLES = [
  'Full Stack Systems Architect',
  'AI & Autonomous Agent Developer',
  'Creator of GramSathi AI',
  'Cloud & Microservice Specialist',
  'Next.js & React Innovator'
];

export const Hero: React.FC<HeroProps> = ({ onOpenTerminal, onOpenResume }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  // Typewriter effect
  useEffect(() => {
    const currentRole = ROLES[roleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        setTypingSpeed(75);

        if (displayText === currentRole) {
          // Pause at full word
          setTypingSpeed(1800);
          setIsDeleting(true);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        setTypingSpeed(35);

        if (displayText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % ROLES.length);
          setTypingSpeed(300);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, typingSpeed]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Photorealistic Dark Workstation Background Image Layer */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 transform filter blur-[1px] brightness-[0.22] contrast-[1.15]"
        style={{ backgroundImage: `url(${PERSONAL_INFO.heroBg})` }}
      />

      {/* Cybernetic High-Tech Grid & Scanline Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Gradient Lighting & Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/80 to-slate-950 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-500/15 via-indigo-500/10 to-purple-600/15 blur-[120px] rounded-full pointer-events-none" />

      {/* Dynamic 60fps Interactive Particle Simulation */}
      <ParticleCanvas />

      {/* Main Content Container */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">

        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/80 backdrop-blur-xl shadow-lg shadow-black/40 mb-6 group hover:border-cyan-500/40 transition-all">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-mono text-slate-300">
            {PERSONAL_INFO.status}
          </span>
          <span className="text-slate-600">•</span>
          <span className="text-xs font-mono text-cyan-400 font-semibold">2026 Ready</span>
        </div>

        {/* Realistic Avatar & Identity Ring */}
        <div className="relative mb-6 group">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 rounded-full blur-md opacity-70 group-hover:opacity-100 transition duration-500 group-hover:scale-105"></div>
          <img
            src={PERSONAL_INFO.avatar}
            alt={PERSONAL_INFO.name}
            className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover border-2 border-slate-800 bg-slate-900 shadow-2xl"
          />
          <div className="absolute bottom-1 right-1 bg-slate-900 border border-cyan-500/50 p-1.5 rounded-full shadow-lg text-cyan-400">
            <Sparkles size={16} />
          </div>
        </div>

        {/* Name Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-3">
          Hi, I'm{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 drop-shadow-sm">
            {PERSONAL_INFO.name}
          </span>
        </h1>

        {/* Dynamic Typewriter Terminal Heading */}
        <div className="h-10 sm:h-12 flex items-center justify-center mb-6">
          <div className="flex items-center gap-2 font-mono text-lg sm:text-2xl text-slate-300">
            <span className="text-cyan-400">&gt;</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-300 font-semibold">
              {displayText}
            </span>
            <span className="inline-block w-2.5 h-6 bg-cyan-400 animate-pulse"></span>
          </div>
        </div>

        {/* Bio Tagline */}
        <p className="max-w-2xl text-base sm:text-lg text-slate-400 leading-relaxed mb-8">
          {PERSONAL_INFO.tagline} Focused on shipping resilient architectures, offline-first intelligent tools, and reactive frontends.
        </p>

        {/* CTA Buttons Group */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mb-14">
          <a
            href="#projects"
            onMouseEnter={playHoverSound}
            onClick={playClickSound}
            className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold text-sm shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all duration-200"
          >
            <span>Explore Featured Projects</span>
            <ArrowRight size={16} />
          </a>

          <button
            onClick={() => {
              playClickSound();
              onOpenTerminal();
            }}
            onMouseEnter={playHoverSound}
            className="flex items-center gap-2.5 px-5 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800/90 border border-slate-700/80 hover:border-cyan-500/50 text-slate-200 hover:text-cyan-400 font-mono text-sm shadow-lg shadow-black/50 hover:-translate-y-0.5 transition-all duration-200 group"
          >
            <Terminal size={17} className="text-cyan-400 group-hover:scale-110 transition-transform" />
            <span>Launch CLI Terminal</span>
          </button>

          <a
            href="#contact"
            onMouseEnter={playHoverSound}
            onClick={playClickSound}
            className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-950/80 hover:bg-slate-900 border border-slate-800 hover:border-slate-600 text-slate-300 hover:text-white text-sm font-medium transition-all"
          >
            Get In Touch
          </a>
        </div>

        {/* Live Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-4 w-full max-w-4xl">
          {PERSONAL_INFO.stats.map((stat, i) => (
            <div
              key={i}
              onMouseEnter={playHoverSound}
              className="relative group p-4 rounded-2xl bg-slate-900/60 border border-slate-800/90 hover:border-cyan-500/40 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-black/40"
            >
              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-300 mb-1">
                {stat.value}
              </div>
              <div className="text-xs font-medium text-slate-400 group-hover:text-slate-200 transition-colors">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <a
          href="#projects"
          onMouseEnter={playHoverSound}
          className="mt-12 text-slate-500 hover:text-cyan-400 transition-colors flex flex-col items-center gap-1 text-xs font-mono"
        >
          <span>SCROLL TO EXPLORE</span>
          <ChevronDown size={16} className="animate-bounce text-cyan-400" />
        </a>

      </div>
    </section>
  );
};

