import React, { useState } from 'react';
import { Cpu, Search, Sparkles, Code2, Database, Cloud, Terminal } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { playClickSound, playHoverSound } from '../utils/audio';

export const Skills: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', ...SKILL_CATEGORIES.map((c) => c.category)];

  const filteredCategories = SKILL_CATEGORIES.map((cat) => {
    const matchedSkills = cat.skills.filter((s) =>
      s.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return {
      ...cat,
      skills: matchedSkills
    };
  }).filter((cat) => {
    if (activeCategory !== 'All' && cat.category !== activeCategory) return false;
    return cat.skills.length > 0;
  });

  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-slate-950">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs mb-3">
              <Cpu size={14} />
              <span>TECHNICAL CAPABILITIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Core Competencies</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
              Battle-tested competencies across high-throughput distributed backends, AI prompt pipelines, and responsive frontend systems.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              placeholder="Search skill (e.g. Next.js, Redis)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-900 border border-slate-800 focus:border-cyan-500 text-xs text-white placeholder-slate-500 outline-none transition-all shadow-inner"
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                playClickSound();
                setActiveCategory(cat);
              }}
              onMouseEnter={playHoverSound}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${activeCategory === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold shadow-md shadow-cyan-500/20'
                  : 'bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCategories.map((categoryGroup, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md shadow-xl shadow-black/30 hover:border-slate-700 transition-all"
            >
              <h3 className="text-base font-bold text-white mb-5 flex items-center justify-between pb-3 border-b border-slate-800/80">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  {categoryGroup.category}
                </span>
                <span className="text-xs font-mono text-slate-500">
                  {categoryGroup.skills.length} competencies
                </span>
              </h3>

              <div className="space-y-4">
                {categoryGroup.skills.map((skill, idx) => (
                  <div key={idx} onMouseEnter={playHoverSound} className="group">
                    <div className="flex justify-between items-center text-xs mb-1.5">
                      <span className="font-semibold text-slate-200 group-hover:text-cyan-300 transition-colors">
                        {skill.name}
                      </span>
                      <div className="flex items-center gap-2 font-mono">
                        <span className="text-[11px] text-slate-500">{skill.experience}</span>
                        <span className="text-cyan-400 font-bold">{skill.level}%</span>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-2 rounded-full bg-slate-800/80 overflow-hidden p-0.5 border border-slate-800">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-cyan-500 via-sky-400 to-indigo-500 group-hover:brightness-125 transition-all duration-700"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

