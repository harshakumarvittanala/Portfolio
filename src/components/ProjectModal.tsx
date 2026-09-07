import React from 'react';
import { X, CheckCircle2, Cpu, Layers, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';
import { Project } from '../types';
import { playClickSound, playHoverSound } from '../utils/audio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-slate-950 border border-slate-700/80 rounded-2xl shadow-2xl shadow-cyan-950/40 overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-900/90 border-b border-slate-800 sticky top-0 z-20 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
              {project.category}
            </span>
            <span className="text-slate-500">•</span>
            <span className="text-xs font-mono text-slate-400">Engineering Case Study</span>
          </div>
          <button
            onClick={() => {
              playClickSound();
              onClose();
            }}
            onMouseEnter={playHoverSound}
            className="p-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Scrollable Modal Content */}
        <div className="overflow-y-auto p-6 space-y-6">
          {/* Project Media Banner */}
          <div className="relative h-64 sm:h-80 rounded-xl overflow-hidden border border-slate-800 group">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-1">
                  {project.title}
                </h2>
                <p className="text-sm text-cyan-300 font-medium">
                  {project.tagline}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={playClickSound}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-semibold shadow-lg shadow-cyan-600/30 transition-all"
                  >
                    <span>Live Demo</span>
                    <ArrowUpRight size={14} />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={playClickSound}
                    className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700 text-slate-200 text-xs font-semibold transition-all"
                  >
                    <GithubIcon size={14} />
                    <span>Source</span>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Key Production Metrics */}
          <div className="grid grid-cols-3 gap-3">
            {project.metrics.map((metric, i) => (
              <div key={i} className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800/80 text-center">
                <div className="text-xl sm:text-2xl font-mono font-bold text-cyan-400">
                  {metric.value}
                </div>
                <div className="text-[11px] font-medium text-slate-400 uppercase tracking-wider mt-0.5">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>

          {/* Deep Dive Description */}
          <div className="space-y-3">
            <h3 className="text-sm font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-2">
              <Layers size={16} className="text-indigo-400" />
              <span>Architectural Overview</span>
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed whitespace-pre-line bg-slate-900/40 p-4 rounded-xl border border-slate-800/60">
              {project.longDescription}
            </p>
          </div>

          {/* System Architecture Highlights */}
          <div className="space-y-3">
            <h3 className="text-sm font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-2">
              <Cpu size={16} className="text-cyan-400" />
              <span>Key Technical Highlights & Implementation</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.architecture.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-900/60 border border-slate-800/70 text-xs text-slate-300">
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div className="space-y-3">
            <h3 className="text-sm font-mono uppercase tracking-wider text-slate-400 font-semibold">
              Technologies & Frameworks
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-lg bg-slate-800/80 text-slate-300 text-xs font-mono border border-slate-700/60"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-slate-900/90 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <span>Harsha Kumar Engineering Project Portfolio</span>
          <button
            onClick={onClose}
            className="text-cyan-400 hover:underline font-mono"
          >
            Close Viewer [ESC]
          </button>
        </div>
      </div>
    </div>
  );
};

