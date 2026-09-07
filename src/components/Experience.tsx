import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';
import { playHoverSound } from '../utils/audio';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-slate-950/90 border-t border-slate-900">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-mono text-xs mb-3">
            <Briefcase size={14} />
            <span>CAREER TRACK & TRAJECTORY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Work Experience & <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Milestones</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            A history of building production software, architecting resilient pipelines, and mentoring developer teams.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-8 space-y-10">
          {EXPERIENCES.map((exp, index) => (
            <div
              key={exp.id}
              onMouseEnter={playHoverSound}
              className="relative pl-7 sm:pl-10 group"
            >
              {/* Timeline Glowing Node Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-cyan-500 group-hover:border-cyan-400 group-hover:scale-125 transition-all shadow-md shadow-cyan-500/30">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 m-auto mt-0.5 animate-pulse" />
              </div>

              {/* Experience Card */}
              <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/60 border border-slate-800/80 group-hover:border-cyan-500/30 backdrop-blur-md transition-all duration-300 shadow-xl shadow-black/40">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-semibold text-cyan-300 flex items-center gap-2 mt-0.5">
                      <span>{exp.company}</span>
                      <span className="text-slate-600">•</span>
                      <span className="px-2 py-0.5 text-[11px] rounded bg-slate-800 text-slate-400 font-normal">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar size={13} className="text-indigo-400" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={13} className="text-cyan-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Bullets */}
                <ul className="space-y-2 mb-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {exp.description.map((point, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <ChevronRight size={15} className="text-cyan-400 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/60">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md bg-slate-800/80 text-slate-300 text-xs font-mono border border-slate-700/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

