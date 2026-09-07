import React, { useState } from 'react';
import {
  ArrowUpRight,
  Layers,
  FolderGit2
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { PROJECTS, PERSONAL_INFO } from '../data/portfolioData';
import { Project } from '../types';
import { playClickSound, playHoverSound } from '../utils/audio';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

const CATEGORIES = ['All', 'AI / ML', 'Cloud & Systems', 'Full Stack', 'Mobile'] as const;

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Realistic Engineering Desk Background Image Layer */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat filter blur-[3px] brightness-[0.14] contrast-[1.2] opacity-60"
        style={{ backgroundImage: `url(${PERSONAL_INFO.deskBg})` }}
      />
      {/* Dark Vignette & Mesh Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/90 to-slate-950 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs mb-3">
              <FolderGit2 size={14} />
              <span>PRODUCTION & OPEN SOURCE SYSTEMS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Featured Work & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Architectures</span>
            </h2>
            <p className="text-slate-400 text-base sm:text-lg mt-2 max-w-2xl">
              Scalable, resilient applications designed with precision engineering, real-world utility, and clean design systems.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1.5 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-md self-start md:self-auto">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  playClickSound();
                  setSelectedCategory(cat);
                }}
                onMouseEnter={playHoverSound}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${selectedCategory === cat
                    ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md shadow-cyan-500/20 font-semibold'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`group relative flex flex-col rounded-2xl bg-slate-900/70 border transition-all duration-300 hover:-translate-y-1.5 overflow-hidden backdrop-blur-md ${project.featured
                  ? 'border-cyan-500/40 hover:border-cyan-400/80 shadow-xl shadow-cyan-950/20'
                  : 'border-slate-800 hover:border-slate-700 shadow-lg shadow-black/40'
                }`}
            >
              {/* Project Image Container with Overlay */}
              <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-950">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500 filter brightness-90 contrast-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                {/* Category & Status Pill */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold bg-slate-950/80 text-cyan-300 border border-slate-700/80 backdrop-blur-md">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold bg-emerald-950/90 text-emerald-400 border border-emerald-600/50 backdrop-blur-md">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Featured
                    </span>
                  )}
                </div>

                {/* Quick Link Overlay Icon */}
                <div className="absolute top-3 right-3 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        e.stopPropagation();
                        playClickSound();
                      }}
                      className="p-2 rounded-xl bg-slate-950/80 text-white hover:text-cyan-400 border border-slate-700 hover:border-cyan-400 backdrop-blur-md transition-all shadow-lg"
                      title="Open Live Preview"
                    >
                      <ArrowUpRight size={15} />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        e.stopPropagation();
                        playClickSound();
                      }}
                      className="p-2 rounded-xl bg-slate-950/80 text-white hover:text-cyan-400 border border-slate-700 hover:border-cyan-400 backdrop-blur-md transition-all shadow-lg"
                      title="View GitHub Source"
                    >
                      <GithubIcon size={15} />
                    </a>
                  )}
                </div>
              </div>

              {/* Card Body */}
              <div className="flex-1 p-5 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors flex items-center justify-between">
                    <span>{project.title}</span>
                  </h3>
                  <p className="text-xs font-medium text-cyan-300/90 mt-1 mb-2">
                    {project.tagline}
                  </p>
                  <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Metrics Badges */}
                <div className="grid grid-cols-3 gap-2 py-2 border-y border-slate-800/80 bg-slate-950/40 rounded-lg px-2">
                  {project.metrics.map((m, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-xs font-mono font-bold text-cyan-300">{m.value}</div>
                      <div className="text-[10px] text-slate-500 uppercase tracking-tighter truncate">{m.label}</div>
                    </div>
                  ))}
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 text-[11px] font-mono border border-slate-700/60"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="px-2 py-0.5 rounded bg-slate-800/40 text-slate-500 text-[11px] font-mono">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>

                {/* Action CTA */}
                <button
                  onClick={() => {
                    playClickSound();
                    onSelectProject(project);
                  }}
                  onMouseEnter={playHoverSound}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-800/70 hover:bg-gradient-to-r hover:from-cyan-600 hover:to-indigo-600 text-slate-200 hover:text-white text-xs font-semibold border border-slate-700/70 hover:border-transparent transition-all flex items-center justify-center gap-2 group/btn"
                >
                  <Layers size={14} className="text-cyan-400 group-hover/btn:text-white transition-colors" />
                  <span>View Case Study & Architecture</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

