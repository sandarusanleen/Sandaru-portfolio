import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, Layers, Cpu, Compass, Palette } from 'lucide-react';
import { playClick } from '../utils/audio';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const handleClose = () => {
    playClick();
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-space-950/85 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={handleClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl glass-panel border border-white/15 p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.8)] animate-in zoom-in-95 duration-200"
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          aria-label="Close project modal"
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/15 text-slate-400 hover:text-white border border-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Category & Status */}
        <div className="flex items-center gap-2 mb-3 text-xs font-mono">
          <span className="px-2.5 py-1 rounded-md bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan">
            {project.category}
          </span>
          <span className="text-slate-400">•</span>
          <span className="text-slate-400">{project.year}</span>
        </div>

        {/* Modal Title */}
        <h2 id="modal-project-title" className="text-2xl sm:text-3xl font-extrabold text-white font-display mb-4">
          {project.title}
        </h2>

        {/* Hero Artwork Preview Banner */}
        <div
          style={{ background: project.previewImage }}
          className="w-full h-56 rounded-2xl mb-6 relative overflow-hidden flex items-center justify-center border border-white/10 shadow-2xl"
        >
          <div className="absolute inset-0 bg-space-950/20 backdrop-blur-[1px]" />
          <div className="z-10 text-center p-6">
            <Compass className="w-12 h-12 text-white/80 mx-auto mb-2 animate-orbit-spin" />
            <span className="text-xs font-mono tracking-widest text-slate-200 uppercase">
              Interactive Simulation Specimen
            </span>
          </div>
        </div>

        {/* Architectural Overview */}
        <div className="mb-6">
          <h4 className="text-xs font-mono uppercase tracking-wider text-neon-cyan mb-2 flex items-center gap-1.5">
            <Cpu className="w-4 h-4" />
            <span>Architecture & Execution</span>
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Key Metrics */}
        <div className="mb-6">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-neon-emerald" />
            <span>Key Engineering Highlights</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            {project.metrics.map((m, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-space-900/80 border border-white/10 text-xs font-mono text-slate-200"
              >
                {m}
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Matrix */}
        <div className="mb-8">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-1.5">
            <Layers className="w-4 h-4 text-neon-violet" />
            <span>Deployed Technologies</span>
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-full text-xs font-mono bg-white/[0.04] border border-white/15 text-slate-300"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/10">
          <div className="flex items-center gap-3">
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-xl bg-neon-cyan hover:bg-cyan-300 text-space-950 text-xs font-mono font-bold tracking-wider uppercase flex items-center gap-2 shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all"
            >
              <span>{project.figmaUrl ? "Open Figma Prototype" : "Launch Live Demo"}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href={project.figmaUrl || project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 rounded-xl glass-button text-xs font-mono text-slate-300 hover:text-white flex items-center gap-2 border border-white/10"
            >
              {project.figmaUrl ? <Palette className="w-4 h-4 text-neon-pink" /> : <Github className="w-4 h-4" />}
              <span>{project.figmaUrl ? "Figma Design Workspace" : "Source Repository"}</span>
            </a>
          </div>

          <button
            onClick={handleClose}
            className="text-xs font-mono text-slate-400 hover:text-white transition-colors"
          >
            Press [ESC] to Exit
          </button>
        </div>
      </div>
    </div>
  );
}
