import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Sparkles, Terminal, Palette, Code, Cpu } from 'lucide-react';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'uiux', label: 'UI/UX & AR Concepts' },
    { id: 'web', label: 'Full-Stack & Web' },
    { id: 'ai', label: 'AI & Edge Systems' },
  ];

  const filteredProjects = PROJECTS_DATA.filter((p) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'uiux') return p.category.toLowerCase().includes('ui/ux') || p.tags.includes('UI/UX Design') || p.tags.includes('Figma');
    if (activeFilter === 'web') return p.category.toLowerCase().includes('web') || p.category.toLowerCase().includes('full-stack') || p.category.toLowerCase().includes('frontend');
    if (activeFilter === 'ai') return p.category.toLowerCase().includes('ai') || p.tags.includes('Python') || p.tags.includes('Deep Learning');
    return true;
  });

  return (
    <section id="projects" className="relative py-20 px-4 max-w-6xl mx-auto w-full">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-white/10 pb-6 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono text-neon-cyan mb-2.5">
            <Terminal className="w-3.5 h-3.5" />
            <span className="tracking-widest uppercase">MODULE 02 // REAL-WORLD PROJECTS & CONCEPTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
            Engineered Systems & UI/UX Portfolios
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
            From enterprise-grade hospital surveillance to futuristic AR educational experiences and artisan discovery platforms.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 font-mono text-xs">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-3.5 py-1.5 rounded-full transition-all border ${
                activeFilter === cat.id
                  ? 'bg-neon-cyan/20 border-neon-cyan text-neon-cyan shadow-[0_0_15px_rgba(0,240,255,0.2)]'
                  : 'bg-white/[0.03] border-white/10 text-slate-400 hover:text-white hover:bg-white/[0.08]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onSelect={(proj) => setSelectedProject(proj)}
          />
        ))}
      </div>

      {/* Lightbox / Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
