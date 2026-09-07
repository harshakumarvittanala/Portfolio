import React, { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, CornerDownLeft, Sparkles } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, SKILL_CATEGORIES } from '../data/portfolioData';
import { playTerminalKeySound, playClickSound, playSuccessSound } from '../utils/audio';
import { triggerHireConfetti } from '../utils/confetti';

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProject: (projectId: string) => void;
  onOpenResume: () => void;
}

interface CommandHistoryItem {
  id: string;
  command: string;
  output: React.ReactNode;
}

export const TerminalModal: React.FC<TerminalModalProps> = ({
  isOpen,
  onClose,
  onSelectProject,
  onOpenResume
}) => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<CommandHistoryItem[]>([
    {
      id: 'welcome',
      command: 'welcome',
      output: (
        <div className="space-y-1 text-slate-300">
          <p className="text-cyan-400 font-bold">HarshaOS DevTerminal v2.6.4 [Production Edge]</p>
          <p className="text-slate-400">Type <span className="text-emerald-400 font-semibold">'help'</span> to view available commands or <span className="text-emerald-400 font-semibold">'sudo hire'</span> to trigger fast track.</p>
        </div>
      )
    }
  ]);
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [historyPointer, setHistoryPointer] = useState<number>(-1);
  const [isMaximized, setIsMaximized] = useState(false);

  const inputRef = useRef<HTMLInputElement | null>(null);
  const terminalEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  // Global key listener for ESC to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
      if ((e.key === 't' || e.key === 'T') && !isOpen && document.activeElement?.tagName !== 'INPUT' && document.activeElement?.tagName !== 'TEXTAREA') {
        // can toggle terminal
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    playTerminalKeySound();

    if (!trimmed) return;

    // Add to command history list for up/down arrows
    setCmdHistory((prev) => [...prev, cmd]);
    setHistoryPointer(-1);

    let output: React.ReactNode = null;

    switch (trimmed) {
      case 'help':
        output = (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono py-1">
            <div><span className="text-cyan-400 font-semibold">about</span> - Brief bio & technical philosophy</div>
            <div><span className="text-cyan-400 font-semibold">projects</span> - View featured production projects</div>
            <div><span className="text-cyan-400 font-semibold">skills</span> - Breakdown of top technical skills</div>
            <div><span className="text-cyan-400 font-semibold">gramsathi</span> - Deep dive into GramSathi AI</div>
            <div><span className="text-cyan-400 font-semibold">contact</span> - Direct contact channels</div>
            <div><span className="text-cyan-400 font-semibold">resume</span> - Open complete developer resume</div>
            <div><span className="text-cyan-400 font-semibold">github</span> - Launch GitHub profile</div>
            <div><span className="text-cyan-400 font-semibold">sudo hire</span> - Direct partnership / hire sequence</div>
            <div><span className="text-cyan-400 font-semibold">clear</span> - Flush terminal screen</div>
            <div><span className="text-cyan-400 font-semibold">date</span> - Display system edge timestamp</div>
          </div>
        );
        break;

      case 'about':
      case 'whoami':
        output = (
          <div className="space-y-2 text-xs leading-relaxed text-slate-300">
            <p className="text-emerald-400 font-semibold">{PERSONAL_INFO.name} ({PERSONAL_INFO.handle})</p>
            <p>{PERSONAL_INFO.role}</p>
            <p className="text-slate-400">{PERSONAL_INFO.about}</p>
            <p className="text-cyan-300">Location: {PERSONAL_INFO.location}</p>
          </div>
        );
        break;

      case 'projects':
        output = (
          <div className="space-y-2.5 py-1 text-xs">
            <p className="text-slate-400">Featured engineering projects:</p>
            <div className="space-y-2">
              {PROJECTS.map((p) => (
                <div key={p.id} className="p-2 rounded bg-slate-900/80 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="text-cyan-300 font-bold">{p.title}</span>
                    <span className="text-slate-500 text-[11px] ml-2">[{p.category}]</span>
                    <p className="text-slate-400 text-[11px] mt-0.5">{p.tagline}</p>
                  </div>
                  <button
                    onClick={() => {
                      onSelectProject(p.id);
                      onClose();
                    }}
                    className="self-start sm:self-auto px-2.5 py-1 bg-cyan-950/80 hover:bg-cyan-900 border border-cyan-700/50 text-cyan-300 text-[11px] rounded"
                  >
                    View Details
                  </button>
                </div>
              ))}
            </div>
          </div>
        );
        break;

      case 'gramsathi':
        output = (
          <div className="space-y-2 text-xs bg-slate-900/90 p-3 rounded-lg border border-emerald-500/30">
            <p className="text-emerald-400 font-bold">🌾 GramSathi AI — Rural Agricultural Copilot</p>
            <p className="text-slate-300">Live URL: <a href="https://gram-sathi-ai-silk.vercel.app" target="_blank" rel="noreferrer" className="text-cyan-400 underline">https://gram-sathi-ai-silk.vercel.app</a></p>
            <p className="text-slate-300">Repo: <a href="https://github.com/harshakumarvittanala/GramSathiAi" target="_blank" rel="noreferrer" className="text-cyan-400 underline">github.com/harshakumarvittanala/GramSathiAi</a></p>
            <p className="text-slate-400">Empowers farmers with real-time agronomy diagnostics, multilingual voice recognition, and edge-caching for intermittent network connectivity.</p>
          </div>
        );
        break;

      case 'skills':
        output = (
          <div className="space-y-3 py-1 text-xs">
            {SKILL_CATEGORIES.map((cat, i) => (
              <div key={i} className="space-y-1">
                <span className="text-indigo-400 font-semibold">{cat.category}</span>
                <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-slate-300">
                  {cat.skills.map((s, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <span>{s.name}</span>
                      <span className="text-emerald-400 font-mono">[{'#'.repeat(Math.round(s.level / 15))}{'.'.repeat(7 - Math.round(s.level / 15))}] {s.level}%</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );
        break;

      case 'contact':
      case 'email':
        output = (
          <div className="space-y-1.5 text-xs">
            <p className="text-slate-300">Email: <a href={`mailto:${PERSONAL_INFO.email}`} className="text-cyan-400 underline">{PERSONAL_INFO.email}</a></p>
            <p className="text-slate-300">GitHub: <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="text-cyan-400 underline">{PERSONAL_INFO.github}</a></p>
            <p className="text-slate-300">LinkedIn: <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="text-cyan-400 underline">{PERSONAL_INFO.linkedin}</a></p>
          </div>
        );
        break;

      case 'resume':
      case 'cat resume':
      case 'cv':
        onOpenResume();
        output = <p className="text-emerald-400">Opening full graphical resume drawer...</p>;
        break;

      case 'github':
        window.open(PERSONAL_INFO.github, '_blank');
        output = <p className="text-cyan-400">Opening GitHub repository stream in new window...</p>;
        break;

      case 'clear':
      case 'cls':
        setHistory([]);
        return;

      case 'date':
        output = <p className="text-slate-300 font-mono">{new Date().toUTCString()}</p>;
        break;

      case 'sudo hire':
      case 'hire':
        playSuccessSound();
        triggerHireConfetti();
        output = (
          <div className="p-3 rounded bg-gradient-to-r from-emerald-950/80 to-cyan-950/80 border border-emerald-500/40 space-y-1.5">
            <p className="text-emerald-400 font-bold flex items-center gap-1.5">
              <Sparkles size={14} /> Priority Access Granted!
            </p>
            <p className="text-slate-300 text-xs">
              Thank you for your interest in collaborating with Harsha. You can reach out directly via{' '}
              <a href={`mailto:${PERSONAL_INFO.email}`} className="text-cyan-300 underline font-semibold">
                {PERSONAL_INFO.email}
              </a>{' '}
              or scroll down to the Contact Hub to book a 15-min discovery sync.
            </p>
          </div>
        );
        break;

      default:
        output = (
          <p className="text-rose-400">
            zsh: command not found: {cmd}. Type <span className="text-cyan-400 font-bold">help</span> to see available commands.
          </p>
        );
    }

    setHistory((prev) => [
      ...prev,
      {
        id: Math.random().toString(),
        command: cmd,
        output
      }
    ]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(inputVal);
      setInputVal('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (cmdHistory.length === 0) return;
      const nextPointer = historyPointer === -1 ? cmdHistory.length - 1 : Math.max(0, historyPointer - 1);
      setHistoryPointer(nextPointer);
      setInputVal(cmdHistory[nextPointer]);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyPointer === -1) return;
      const nextPointer = historyPointer + 1;
      if (nextPointer >= cmdHistory.length) {
        setHistoryPointer(-1);
        setInputVal('');
      } else {
        setHistoryPointer(nextPointer);
        setInputVal(cmdHistory[nextPointer]);
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      {/* Terminal Window Container */}
      <div
        className={`w-full flex flex-col bg-slate-950/95 border border-slate-700/80 rounded-2xl shadow-2xl shadow-cyan-950/40 overflow-hidden transition-all duration-300 ${isMaximized ? 'h-[95vh] max-w-[95vw]' : 'h-[550px] max-w-3xl'
          }`}
      >
        {/* Terminal Header Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800 select-none">
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                playClickSound();
                onClose();
              }}
              className="w-3.5 h-3.5 rounded-full bg-rose-500/80 hover:bg-rose-500 flex items-center justify-center transition-colors group"
              title="Close terminal"
            >
              <X size={8} className="text-rose-950 opacity-0 group-hover:opacity-100" />
            </button>
            <button
              onClick={() => {
                playClickSound();
                setIsMaximized(!isMaximized);
              }}
              className="w-3.5 h-3.5 rounded-full bg-amber-500/80 hover:bg-amber-500 flex items-center justify-center transition-colors"
              title="Toggle size"
            />
            <button
              onClick={() => {
                playClickSound();
                setIsMaximized(!isMaximized);
              }}
              className="w-3.5 h-3.5 rounded-full bg-emerald-500/80 hover:bg-emerald-500 flex items-center justify-center transition-colors"
              title="Maximize"
            />
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <TerminalIcon size={14} className="text-cyan-400" />
            <span>harsha@edge-mesh:~ (zsh)</span>
          </div>

          <div className="flex items-center gap-2 text-slate-400">
            <button
              onClick={() => setIsMaximized(!isMaximized)}
              className="hover:text-white transition-colors"
            >
              {isMaximized ? <Minimize2 size={15} /> : <Maximize2 size={15} />}
            </button>
            <button
              onClick={onClose}
              className="hover:text-white transition-colors ml-1"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Terminal Body Screen */}
        <div
          onClick={() => inputRef.current?.focus()}
          className="flex-1 p-4 sm:p-5 font-mono text-sm overflow-y-auto space-y-3 scrollbar-thin scrollbar-thumb-slate-800"
        >
          {history.map((item) => (
            <div key={item.id} className="space-y-1.5">
              <div className="flex items-center gap-2 text-slate-400 text-xs">
                <span className="text-emerald-400">harsha@macbook</span>
                <span className="text-slate-600">:</span>
                <span className="text-cyan-400">~</span>
                <span className="text-slate-500">$</span>
                <span className="text-white font-medium">{item.command}</span>
              </div>
              <div className="pl-4 border-l border-slate-800 text-slate-300">
                {item.output}
              </div>
            </div>
          ))}

          {/* Prompt input line */}
          <div className="flex items-center gap-2 pt-1 text-xs">
            <span className="text-emerald-400">harsha@macbook</span>
            <span className="text-slate-600">:</span>
            <span className="text-cyan-400">~</span>
            <span className="text-slate-500">$</span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => {
                setInputVal(e.target.value);
                playTerminalKeySound();
              }}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent text-cyan-300 outline-none border-none font-mono text-xs caret-cyan-400"
              placeholder="Type 'help' or 'sudo hire'..."
              autoFocus
            />
            <CornerDownLeft size={12} className="text-slate-600" />
          </div>

          <div ref={terminalEndRef} />
        </div>

        {/* Terminal Footer Quick Bar */}
        <div className="px-4 py-2 bg-slate-900/60 border-t border-slate-800/80 flex flex-wrap items-center justify-between text-[11px] font-mono text-slate-500">
          <div className="flex items-center gap-2">
            <span>Quick:</span>
            {['help', 'gramsathi', 'projects', 'skills', 'sudo hire'].map((cmd) => (
              <button
                key={cmd}
                onClick={() => handleCommand(cmd)}
                className="px-1.5 py-0.5 rounded bg-slate-800/80 hover:bg-slate-700 text-cyan-400 hover:text-white transition-colors"
              >
                {cmd}
              </button>
            ))}
          </div>
          <span className="hidden sm:inline">Press ESC to dismiss</span>
        </div>
      </div>
    </div>
  );
};

