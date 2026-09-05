import React, { useRef, useState } from 'react';
import { ExternalLink, Github, Eye, Sparkles, Palette } from 'lucide-react';
import { playClick } from '../utils/audio';

export default function ProjectCard({ project, onSelect }) {
  const cardRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate subtle 3D tilt angles (max ~12 degrees)
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    setRotation({ x: rotateX, y: rotateY });
    setCursorPos({ x, y });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
  };

  const handleClick = () => {
    playClick();
    onSelect(project);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={{
        perspective: '1000px',
      }}
      className="group relative cursor-pointer"
    >
      <div
        style={{
          transform: isHovered
            ? `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) translateY(-8px)`
            : 'rotateX(0deg) rotateY(0deg) translateY(0px)',
          transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
          transformStyle: 'preserve-3d',
        }}
        className="relative h-full rounded-2xl glass-card p-6 flex flex-col justify-between overflow-hidden border border-white/10 group-hover:border-neon-cyan/40 shadow-xl group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.6),0_0_30px_rgba(0,240,255,0.15)]"
      >
        {/* Dynamic Specular Holographic Glare Overlay */}
        {isHovered && (
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-300 rounded-2xl"
            style={{
              background: `radial-gradient(circle 280px at ${cursorPos.x}px ${cursorPos.y}px, rgba(0, 240, 255, 0.12), transparent 70%)`,
            }}
          />
        )}

        {/* Top Header: Category & Year */}
        <div 
          style={{ transform: 'translateZ(20px)' }}
          className="flex items-center justify-between mb-4 font-mono text-xs text-slate-400"
        >
          <span className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-slate-300">
            {project.category}
          </span>
          <span className="text-neon-cyan font-bold tracking-widest">{project.year}</span>
        </div>

        {/* Project Thumbnail Simulation Banner */}
        <div
          style={{ 
            background: project.previewImage,
            transform: 'translateZ(30px)' 
          }}
          className="w-full h-44 rounded-xl mb-5 relative overflow-hidden flex items-center justify-center border border-white/10 shadow-inner group-hover:scale-[1.02] transition-transform duration-300"
        >
          <div className="absolute inset-0 bg-space-950/20 backdrop-blur-[2px]" />
          <div className="z-10 text-center px-4">
            <h4 className="text-lg font-bold text-white font-display tracking-wide drop-shadow-md">
              {project.title}
            </h4>
            <div className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-space-950/80 border border-white/15 text-[11px] font-mono text-slate-300">
              <Eye className="w-3 h-3 text-neon-cyan" />
              <span>Inspect Specimen</span>
            </div>
          </div>
        </div>

        {/* Body Text */}
        <div style={{ transform: 'translateZ(25px)' }} className="mb-6 flex-1">
          <p className="text-slate-300 text-sm leading-relaxed mb-4">
            {project.summary}
          </p>

          {/* Key Metrics / Highlights */}
          <div className="grid grid-cols-2 gap-2 mb-4">
            {project.metrics.slice(0, 2).map((metric, idx) => (
              <div 
                key={idx} 
                className="px-2.5 py-1.5 rounded-lg bg-space-950/50 border border-white/5 text-[11px] font-mono text-slate-400"
              >
                {metric}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Tags and Actions */}
        <div style={{ transform: 'translateZ(30px)' }} className="pt-4 border-t border-white/10">
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-white/[0.03] border border-white/10 text-slate-400 group-hover:text-slate-200 group-hover:border-white/20 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-neon-cyan flex items-center gap-1 font-semibold group-hover:translate-x-1 transition-transform">
              <span>View Architecture</span>
              <span>→</span>
            </span>

            <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
              <a
                href={project.figmaUrl || project.repoUrl}
                target="_blank"
                rel="noreferrer"
                title={project.figmaUrl ? "Open Figma Design Specimen" : `View ${project.title} on GitHub`}
                aria-label={project.figmaUrl ? "Open Figma Design Specimen" : `View ${project.title} on GitHub`}
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
              >
                {project.figmaUrl ? <Palette className="w-3.5 h-3.5 text-neon-pink" /> : <Github className="w-3.5 h-3.5" />}
              </a>
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open live demo for ${project.title}`}
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-neon-cyan transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
