import React, { useState, useEffect } from 'react';
import {
  Terminal,
  Volume2,
  VolumeX,
  FileText,
  Menu,
  X
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';
import { toggleSound, playClickSound, playHoverSound } from '../utils/audio';

interface NavbarProps {
  onOpenTerminal: () => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTerminal, onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundActive, setSoundActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSoundToggle = () => {
    const active = toggleSound();
    setSoundActive(active);
  };

  const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Activity', href: '#activity' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? 'bg-slate-950/85 backdrop-blur-xl border-b border-slate-800/80 shadow-2xl shadow-black/50 py-3'
          : 'bg-transparent py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#"
          onMouseEnter={playHoverSound}
          onClick={playClickSound}
          className="group flex items-center gap-3"
        >
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 via-indigo-500 to-purple-600 p-[1.5px] shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all duration-300">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center font-mono font-bold text-cyan-400 group-hover:scale-105 transition-transform">
              HK
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-bold text-base tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                Harsha Kumar
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Open to Work
              </span>
            </div>
            <span className="text-[11px] font-mono text-slate-400">Full Stack & AI</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-slate-800/80 shadow-inner">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onMouseEnter={playHoverSound}
              onClick={playClickSound}
              className="text-sm font-medium text-slate-300 hover:text-cyan-400 px-3 py-1.5 rounded-full hover:bg-slate-800/60 transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Audio FX Toggle */}
          <button
            onClick={handleSoundToggle}
            onMouseEnter={playHoverSound}
            title={soundActive ? "Mute interactive audio FX" : "Enable futuristic audio FX"}
            className={`p-2 rounded-xl border transition-all duration-200 flex items-center gap-1.5 text-xs font-mono ${soundActive
                ? 'bg-cyan-500/15 border-cyan-500/40 text-cyan-300 shadow-sm shadow-cyan-500/20'
                : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-slate-200'
              }`}
          >
            {soundActive ? <Volume2 size={16} className="text-cyan-400 animate-pulse" /> : <VolumeX size={16} />}
            <span className="text-[11px] hidden lg:inline">{soundActive ? 'SFX ON' : 'SFX'}</span>
          </button>

          {/* Interactive Terminal Launcher Button */}
          <button
            onClick={() => {
              playClickSound();
              onOpenTerminal();
            }}
            onMouseEnter={playHoverSound}
            title="Open Interactive Developer Terminal (Press ` or T)"
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-800/80 text-slate-300 hover:text-cyan-400 text-xs font-mono transition-all group"
          >
            <Terminal size={15} className="text-cyan-400 group-hover:rotate-6 transition-transform" />
            <span>CLI Terminal</span>
            <kbd className="hidden xl:inline text-[10px] bg-slate-800 px-1 py-0.5 rounded text-slate-400 border border-slate-700">T</kbd>
          </button>

          {/* Resume Modal Button */}
          <button
            onClick={() => {
              playClickSound();
              onOpenResume();
            }}
            onMouseEnter={playHoverSound}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 border border-cyan-500/30 hover:border-cyan-400 text-cyan-300 hover:text-white text-xs font-semibold hover:shadow-lg hover:shadow-cyan-500/20 transition-all"
          >
            <FileText size={15} />
            <span>CV</span>
          </button>

          {/* GitHub Link */}
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={playHoverSound}
            onClick={playClickSound}
            className="p-2 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-all"
            title="Harsha's GitHub Profile"
          >
            <GithubIcon size={17} />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={() => {
              playClickSound();
              onOpenTerminal();
            }}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-cyan-400"
          >
            <Terminal size={18} />
          </button>
          <button
            onClick={() => {
              playClickSound();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden px-4 pt-4 pb-6 bg-slate-950/95 border-b border-slate-800 backdrop-blur-2xl space-y-3">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
            <span className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              Open to Opportunities
            </span>
            <button
              onClick={handleSoundToggle}
              className="text-xs font-mono text-slate-400 flex items-center gap-1"
            >
              {soundActive ? <Volume2 size={15} className="text-cyan-400" /> : <VolumeX size={15} />}
              {soundActive ? 'SFX ON' : 'SFX OFF'}
            </button>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  playClickSound();
                  setMobileMenuOpen(false);
                }}
                className="px-3 py-2.5 rounded-lg bg-slate-900/60 border border-slate-800 text-sm font-medium text-slate-200 hover:text-cyan-400 hover:border-cyan-500/30"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex gap-2 pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="flex-1 py-2.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-lg shadow-cyan-600/30"
            >
              <FileText size={15} />
              View Resume
            </button>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 flex items-center justify-center gap-1.5 text-xs font-semibold"
            >
              <GithubIcon size={16} />
              GitHub
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

