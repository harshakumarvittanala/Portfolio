import React, { useState, useMemo } from 'react';
import { Flame, GitCommit, GitPullRequest, Star, ExternalLink } from 'lucide-react';
import { GithubIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';
import { playHoverSound, playClickSound } from '../utils/audio';

export const GithubActivity: React.FC = () => {
  const [hoveredDay, setHoveredDay] = useState<{ date: string; count: number } | null>(null);

  // Generate 52 weeks of realistic commit activity
  const weeks = useMemo(() => {
    const totalWeeks = 52;
    const daysPerWeek = 7;
    const result: { date: string; count: number; level: number }[][] = [];

    const now = new Date();
    // Start roughly 52 weeks ago
    const startDate = new Date(now.getTime() - 52 * 7 * 24 * 60 * 60 * 1000);

    for (let w = 0; w < totalWeeks; w++) {
      const week: { date: string; count: number; level: number }[] = [];
      for (let d = 0; d < daysPerWeek; d++) {
        const currentDate = new Date(startDate.getTime() + (w * 7 + d) * 24 * 60 * 60 * 1000);

        // Realistic distribution: higher activity on weekdays, bursts on active project sprint weeks
        const isWeekend = d === 0 || d === 6;
        const rand = Math.random();
        let count = 0;
        let level = 0;

        if (rand > (isWeekend ? 0.6 : 0.28)) {
          count = Math.floor(Math.random() * 8) + 1;
          if (w > 40 && rand > 0.4) count += Math.floor(Math.random() * 6); // Recent surge

          if (count === 0) level = 0;
          else if (count <= 2) level = 1;
          else if (count <= 5) level = 2;
          else if (count <= 9) level = 3;
          else level = 4;
        }

        week.push({
          date: currentDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
          count,
          level
        });
      }
      result.push(week);
    }
    return result;
  }, []);

  const getCellColor = (level: number) => {
    switch (level) {
      case 1:
        return 'bg-emerald-950 border-emerald-900/60 hover:bg-emerald-800';
      case 2:
        return 'bg-emerald-700/80 border-emerald-600/60 hover:bg-emerald-600';
      case 3:
        return 'bg-emerald-500 border-emerald-400/80 hover:bg-emerald-400';
      case 4:
        return 'bg-emerald-400 border-emerald-300 hover:bg-emerald-300 shadow-sm shadow-emerald-400/50';
      default:
        return 'bg-slate-900/80 border-slate-800 hover:bg-slate-800';
    }
  };

  return (
    <section id="activity" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-slate-950/80 border-t border-slate-900">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs mb-3">
              <GithubIcon size={14} />
              <span>CONTINUOUS INTEGRATION & COMMITS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Open Source & <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">GitHub Cadence</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
              Consistent production cadence, daily incremental improvements, and active repository commits.
            </p>
          </div>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={playHoverSound}
            onClick={playClickSound}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-850 border border-slate-800 hover:border-slate-700 text-slate-200 hover:text-white text-xs font-mono transition-all self-start md:self-auto"
          >
            <span>Visit @harshakumarvittanala</span>
            <ExternalLink size={14} className="text-cyan-400" />
          </a>
        </div>

        {/* Heatmap Card */}
        <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md shadow-2xl shadow-black/40">

          {/* Top Quick Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6 pb-6 border-b border-slate-800/80">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                <GitCommit size={18} />
              </div>
              <div>
                <div className="text-lg font-bold font-mono text-white">640+ Commits</div>
                <div className="text-[11px] text-slate-400">Annual Contribution</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400">
                <Flame size={18} />
              </div>
              <div>
                <div className="text-lg font-bold font-mono text-white">28 Days</div>
                <div className="text-[11px] text-slate-400">Longest Streak</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                <GitPullRequest size={18} />
              </div>
              <div>
                <div className="text-lg font-bold font-mono text-white">100% Merge Rate</div>
                <div className="text-[11px] text-slate-400">Clean Review Standard</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400">
                <Star size={18} />
              </div>
              <div>
                <div className="text-lg font-bold font-mono text-white">GramSathi AI</div>
                <div className="text-[11px] text-slate-400">Top Shipped Project</div>
              </div>
            </div>
          </div>

          {/* Interactive Heatmap Matrix */}
          <div className="overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-slate-800">
            <div className="min-w-[720px]">
              <div className="flex gap-[3.5px]">
                {weeks.map((week, wIdx) => (
                  <div key={wIdx} className="flex flex-col gap-[3.5px]">
                    {week.map((day, dIdx) => (
                      <div
                        key={dIdx}
                        onMouseEnter={() => {
                          setHoveredDay({ date: day.date, count: day.count });
                          if (day.count > 0) playHoverSound();
                        }}
                        onMouseLeave={() => setHoveredDay(null)}
                        className={`w-3 h-3 rounded-[3px] border transition-colors cursor-pointer ${getCellColor(day.level)}`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tooltip & Legend Bar */}
          <div className="mt-4 pt-4 border-t border-slate-800/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono text-slate-400">
            <div>
              {hoveredDay ? (
                <span className="text-cyan-300 font-medium">
                  {hoveredDay.count} contribution{hoveredDay.count === 1 ? '' : 's'} on {hoveredDay.date}
                </span>
              ) : (
                <span className="text-slate-500">Hover over any block to view day stats</span>
              )}
            </div>

            <div className="flex items-center gap-2 self-end sm:self-auto">
              <span>Less</span>
              <div className="flex gap-1">
                <span className="w-2.5 h-2.5 rounded-[2px] bg-slate-900 border border-slate-800" />
                <span className="w-2.5 h-2.5 rounded-[2px] bg-emerald-950 border border-emerald-900/60" />
                <span className="w-2.5 h-2.5 rounded-[2px] bg-emerald-700/80 border border-emerald-600/60" />
                <span className="w-2.5 h-2.5 rounded-[2px] bg-emerald-500 border border-emerald-400/80" />
                <span className="w-2.5 h-2.5 rounded-[2px] bg-emerald-400 border border-emerald-300" />
              </div>
              <span>More</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

