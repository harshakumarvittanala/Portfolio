import React from 'react';
import { Quote, Star, CheckCircle } from 'lucide-react';
import { TESTIMONIALS } from '../data/portfolioData';
import { playHoverSound } from '../utils/audio';

export const Testimonials: React.FC = () => {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-slate-950 border-t border-slate-900">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs mb-3">
            <Star size={14} />
            <span>ENDORSEMENTS & COLLABORATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Peer Reviews & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Feedback</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            What leaders, founders, and engineering peers say about shipping software alongside Harsha.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              onMouseEnter={playHoverSound}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md flex flex-col justify-between hover:border-cyan-500/30 transition-all duration-300 shadow-xl shadow-black/30 group"
            >
              <div>
                <Quote size={24} className="text-cyan-400/50 mb-4 group-hover:text-cyan-400 transition-colors" />
                <p className="text-xs font-mono font-semibold text-cyan-300 mb-2">
                  "{t.highlight}"
                </p>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {t.content}
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-800/80">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover border border-slate-700"
                />
                <div>
                  <div className="text-sm font-bold text-white flex items-center gap-1.5">
                    <span>{t.name}</span>
                    <CheckCircle size={13} className="text-cyan-400" />
                  </div>
                  <div className="text-xs text-slate-400">
                    {t.role} • <span className="text-slate-500">{t.company}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

