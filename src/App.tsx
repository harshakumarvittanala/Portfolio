import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { ProjectModal } from './components/ProjectModal';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { GithubActivity } from './components/GithubActivity';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { TerminalModal } from './components/TerminalModal';
import { ResumeModal } from './components/ResumeModal';
import { Project } from './types';
import { PROJECTS } from './data/portfolioData';

export function App() {
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Global hotkeys (T or Backquote for terminal)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is typing inside an input or textarea
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }

      if (e.key === 't' || e.key === 'T' || e.key === '`') {
        e.preventDefault();
        setTerminalOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSelectProjectById = (projectId: string) => {
    const found = PROJECTS.find((p) => p.id === projectId);
    if (found) {
      setSelectedProject(found);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Navigation Header */}
      <Navbar
        onOpenTerminal={() => setTerminalOpen(true)}
        onOpenResume={() => setResumeOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero
          onOpenTerminal={() => setTerminalOpen(true)}
          onOpenResume={() => setResumeOpen(true)}
        />
        <Projects
          onSelectProject={(project) => setSelectedProject(project)}
        />
        <Experience />
        <Skills />
        <GithubActivity />
        <Testimonials />
        <Contact />
      </main>

      {/* Footer */}
      <Footer onOpenTerminal={() => setTerminalOpen(true)} />

      {/* Floating Interactive Terminal Trigger Beacon */}
      <div className="fixed bottom-5 right-5 z-40">
        <button
          onClick={() => setTerminalOpen(true)}
          className="group relative flex items-center gap-2 px-3.5 py-2.5 rounded-2xl bg-slate-900/90 border border-slate-700/80 hover:border-cyan-500 text-slate-200 hover:text-cyan-400 font-mono text-xs shadow-2xl shadow-cyan-950/40 backdrop-blur-xl transition-all hover:scale-105"
          title="Open Developer CLI Terminal (Press 'T')"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="font-semibold">Terminal</span>
          <kbd className="hidden sm:inline bg-slate-800 text-[10px] px-1.5 py-0.5 rounded text-slate-400 border border-slate-700">T</kbd>
        </button>
      </div>

      {/* Modals */}
      <TerminalModal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
        onSelectProject={handleSelectProjectById}
        onOpenResume={() => setResumeOpen(true)}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </div>
  );
}

export default App;

