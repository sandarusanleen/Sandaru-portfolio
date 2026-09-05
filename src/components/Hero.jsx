import React from 'react';
import HolographicProfile from './HolographicProfile';
import { HERO_DATA, CV_TRACKS, EDUCATION_DATA } from '../data/portfolioData';
import { useGravity } from '../context/GravityContext';
import { useTrack } from '../context/TrackContext';
import { playClick } from '../utils/audio';
import { 
  Compass, 
  Zap, 
  ArrowDown, 
  GraduationCap, 
  Palette, 
  Code, 
  Globe, 
  BarChart3, 
  Briefcase, 
  Sparkles,
  FileCheck2
} from 'lucide-react';

export default function Hero() {
  const { triggerShockwave } = useGravity();
  const { activeTrack, setTrack, currentTrack, allTracks } = useTrack();

  const handleScrollToProjects = () => {
    playClick();
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToContact = () => {
    playClick();
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const getTrackIcon = (id) => {
    switch (id) {
      case 'swe': return <Code className="w-3.5 h-3.5" />;
      case 'web': return <Globe className="w-3.5 h-3.5" />;
      case 'uiux': return <Palette className="w-3.5 h-3.5" />;
      case 'data': return <BarChart3 className="w-3.5 h-3.5" />;
      default: return <Sparkles className="w-3.5 h-3.5" />;
    }
  };

  return (
    <section id="about" className="relative pt-8 pb-20 px-4 max-w-6xl mx-auto w-full">
      {/* Background radial glows */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-cyan/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-neon-violet/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Track Switcher Banner: Direct Match for the 4 CVs */}
      <div className="mb-10 p-3 rounded-2xl glass-panel border border-white/10 shadow-xl max-w-4xl mx-auto">
        <div className="flex items-center justify-between px-2 mb-2.5 font-mono text-[11px] text-slate-400">
          <div className="flex items-center gap-1.5">
            <FileCheck2 className="w-3.5 h-3.5 text-neon-cyan" />
            <span className="uppercase tracking-widest text-slate-300 font-semibold">
              Select Internship Profile / CV Track:
            </span>
          </div>
          <span className="hidden sm:inline text-slate-500">
            Tailors portfolio to recruiter discipline
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 font-mono text-xs">
          <button
            onClick={() => setTrack('all')}
            className={`px-3 py-2 rounded-xl transition-all flex items-center justify-center gap-1.5 border text-center ${
              activeTrack === 'all'
                ? 'border-white/30 bg-white/10 text-white font-bold shadow-lg'
                : 'border-white/10 bg-white/[0.02] text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-neon-cyan" />
            <span>All-Rounder</span>
          </button>

          {allTracks.map((t) => {
            const isSelected = activeTrack === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setTrack(t.id)}
                className={`px-3 py-2 rounded-xl transition-all flex items-center justify-center gap-1.5 border text-center ${
                  isSelected
                    ? 'font-bold shadow-lg text-white'
                    : 'border-white/10 bg-white/[0.02] text-slate-400 hover:text-white hover:bg-white/5'
                }`}
                style={{
                  backgroundColor: isSelected ? `${t.color}22` : undefined,
                  borderColor: isSelected ? t.color : undefined,
                  boxShadow: isSelected ? `0 0 15px ${t.color}33` : undefined,
                }}
              >
                <span style={{ color: t.color }}>{getTrackIcon(t.id)}</span>
                <span className="truncate">{t.shortLabel}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Bio & Track Information */}
        <div className="lg:col-span-6 flex flex-col items-start text-left z-10">
          {/* Status Capsule */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full glass-panel border border-neon-emerald/40 text-xs font-mono text-neon-emerald mb-4 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-emerald opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-emerald" />
            </span>
            <span className="tracking-wider uppercase text-[11px] font-semibold">
              {HERO_DATA.status}
            </span>
          </div>

          {/* Student Full Name */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-2 font-display">
            SANDARU <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-purple-400 to-pink-500">SANLEEN</span>
            <span className="block text-xl sm:text-2xl text-slate-300 font-mono tracking-wider font-semibold mt-1">
              BANDARIGODAGE
            </span>
          </h1>

          {/* Dynamic Role Headline matching selected CV */}
          <div className="my-2">
            <h2 
              className="text-lg sm:text-xl font-bold font-display tracking-wide"
              style={{ color: currentTrack.color || '#00f0ff' }}
            >
              {currentTrack.roleName || HERO_DATA.defaultTitle}
            </h2>
          </div>

          {/* Dynamic Track Key Pillars */}
          <div className="flex flex-wrap items-center gap-2 my-2">
            {(currentTrack.keyPillars || ['Software Engineering', 'Web Development', 'UI/UX Design', 'Data Analytics']).map((pillar, idx) => (
              <span 
                key={idx}
                className="px-2.5 py-1 rounded-md text-xs font-mono font-semibold border bg-white/[0.03] border-white/15 text-slate-200"
              >
                {pillar}
              </span>
            ))}
          </div>

          {/* University Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-xs font-mono text-slate-300 my-4">
            <GraduationCap className="w-4 h-4 text-neon-cyan flex-shrink-0" />
            <span>Sabaragamuwa University of Sri Lanka • {EDUCATION_DATA.period}</span>
          </div>

          {/* Tailored Tagline / Summary */}
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed mb-8 max-w-lg font-sans">
            {currentTrack.tagline || HERO_DATA.tagline}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
            <button
              onClick={handleScrollToProjects}
              className="px-6 py-3 rounded-xl bg-neon-cyan hover:bg-cyan-300 text-space-950 font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2.5 shadow-[0_0_25px_rgba(0,240,255,0.4)] hover:shadow-[0_0_35px_rgba(0,240,255,0.6)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Compass className="w-4 h-4" />
              <span>Explore Projects</span>
            </button>

            <button
              onClick={handleScrollToContact}
              className="px-5 py-3 rounded-xl glass-button text-xs font-mono text-slate-200 hover:text-white flex items-center justify-center gap-2 border border-white/10 hover:border-neon-emerald/40 hover:bg-neon-emerald/10 shadow-lg transition-all"
            >
              <Briefcase className="w-4 h-4 text-neon-emerald" />
              <span>Download CV / Hire Me</span>
            </button>

            <button
              onClick={triggerShockwave}
              title="Cosmic Field Pulse"
              className="p-3 rounded-xl glass-button text-xs font-mono text-slate-200 hover:text-white flex items-center justify-center border border-white/10 hover:border-neon-violet/40 hover:bg-neon-violet/10 shadow-lg transition-all"
            >
              <Zap className="w-4 h-4 text-neon-violet" />
            </button>
          </div>

          {/* Candidate Telemetry Metrics */}
          <div className="grid grid-cols-3 gap-4 mt-10 pt-8 border-t border-white/10 w-full font-mono">
            <div>
              <div className="text-[10px] uppercase text-slate-500 tracking-wider">Active Track</div>
              <div 
                className="text-xs font-bold flex items-center gap-1 mt-0.5 truncate"
                style={{ color: currentTrack.color || '#00f0ff' }}
              >
                <span>{currentTrack.shortLabel || 'Full Spectrum'}</span>
              </div>
            </div>

            <div>
              <div className="text-[10px] uppercase text-slate-500 tracking-wider">Education</div>
              <div className="text-xs font-bold text-slate-200 flex items-center gap-1 mt-0.5">
                <span>BSc. (Hons) CIS</span>
              </div>
            </div>

            <div>
              <div className="text-[10px] uppercase text-slate-500 tracking-wider">Location</div>
              <div className="text-xs font-bold text-neon-emerald flex items-center gap-1 mt-0.5">
                <span>Sri Lanka</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Holographic Anti-Gravity Profile Frame */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center">
          <HolographicProfile />
        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <div className="flex justify-center mt-12">
        <button
          onClick={handleScrollToProjects}
          aria-label="Scroll down to projects"
          className="flex flex-col items-center gap-2 text-slate-500 hover:text-neon-cyan transition-colors group cursor-pointer"
        >
          <span className="text-[10px] font-mono tracking-widest uppercase">Explore Real Projects & Specimen Experiments</span>
          <ArrowDown className="w-4 h-4 animate-bounce text-slate-400 group-hover:text-neon-cyan" />
        </button>
      </div>
    </section>
  );
}
