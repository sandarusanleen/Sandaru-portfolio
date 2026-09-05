import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { PROJECTS_DATA, CV_TRACKS } from '../data/portfolioData';
import { useTrack } from '../context/TrackContext';
import { Terminal, Sparkles, Filter } from 'lucide-react';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const { activeTrack } = useTrack();

  // Synchronize filter when hero track switcher changes
  useEffect(() => {
    if (activeTrack !== 'all') {
      setActiveFilter(activeTrack);
    }
  }, [activeTrack]);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'swe', label: 'Software Engineering' },
    { id: 'web', label: 'Web Development' },
    { id: 'uiux', label: 'UI/UX & AR Concepts' },
    { id: 'data', label: 'Data Analytics & AI' },
  ];

  // Sort projects based on active filter so all 4 CV projects stay visible
  const getFilteredProjects = () => {
    const list = [...PROJECTS_DATA];

    if (activeFilter === 'uiux') {
      // Prioritize ECOS OF REALITY first (as in UI/UX CV)
      return list.sort((a, b) => {
        if (a.id === 'ecos-of-reality') return -1;
        if (b.id === 'ecos-of-reality') return 1;
        if (a.id === 'wonder-routes') return -1;
        return 0;
      });
    }

    if (activeFilter === 'swe') {
      // Prioritize CareVision LK and Artisync
      return list.sort((a, b) => {
        if (a.id === 'carevision-lk') return -1;
        if (b.id === 'carevision-lk') return 1;
        return 0;
      });
    }

    if (activeFilter === 'web') {
      // Prioritize Artisync and Wonder Routes
      return list.sort((a, b) => {
        if (a.id === 'artisync') return -1;
        if (b.id === 'artisync') return 1;
        if (a.id === 'wonder-routes') return -1;
        return 0;
      });
    }

    if (activeFilter === 'data') {
      // Prioritize CareVision LK (edge surveillance data) and Artisync (database)
      return list.sort((a, b) => {
        if (a.id === 'carevision-lk') return -1;
        if (b.id === 'carevision-lk') return 1;
        return 0;
      });
    }

    return list;
  };

  const filteredProjects = getFilteredProjects();

  return (
    <section id="projects" className="relative py-20 px-4 max-w-6xl mx-auto w-full">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-white/10 pb-6 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono text-neon-cyan mb-2.5">
            <Terminal className="w-3.5 h-3.5" />
            <span className="tracking-widest uppercase">MODULE 02 // REAL PROJECTS ACROSS 4 TRACKS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
            Portfolio Projects & Interactive Works
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
            Real implementations from hospital surveillance & AI edge computing to modern React marketplaces and futuristic AR concepts.
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
