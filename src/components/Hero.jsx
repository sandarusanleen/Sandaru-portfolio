import React from 'react';
import HolographicProfile from './HolographicProfile';
import { HERO_DATA } from '../data/portfolioData';
import { useGravity } from '../context/GravityContext';
import { playClick } from '../utils/audio';
import { Compass, Zap, ArrowDown, GraduationCap, Palette, Code, Briefcase } from 'lucide-react';

export default function Hero() {
  const { triggerShockwave } = useGravity();

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

  return (
    <section id="about" className="relative pt-10 pb-20 px-4 max-w-6xl mx-auto w-full">
      {/* Background radial glows */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-cyan/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-neon-violet/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Bio & Hybrid Focus */}
        <div className="lg:col-span-6 flex flex-col items-start text-left z-10">
          {/* Status Capsule */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full glass-panel border border-neon-emerald/40 text-xs font-mono text-neon-emerald mb-5 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
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

          {/* Hybrid Tag Pills: SWE + UI/UX */}
          <div className="flex flex-wrap items-center gap-2 my-2">
            <span className="px-2.5 py-1 rounded-md bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan text-xs font-mono font-semibold flex items-center gap-1.5">
              <Code className="w-3.5 h-3.5" />
              <span>Software Engineering</span>
            </span>
            <span className="px-2.5 py-1 rounded-md bg-neon-pink/10 border border-neon-pink/30 text-neon-pink text-xs font-mono font-semibold flex items-center gap-1.5">
              <Palette className="w-3.5 h-3.5" />
              <span>UI/UX & Product Design</span>
            </span>
          </div>

          {/* University Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-xs font-mono text-slate-300 mb-5">
            <GraduationCap className="w-4 h-4 text-neon-cyan flex-shrink-0" />
            <span>Sabaragamuwa University of Sri Lanka</span>
          </div>

          {/* Tagline / Summary */}
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed mb-8 max-w-lg font-sans">
            {HERO_DATA.tagline}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
            <button
              onClick={handleScrollToProjects}
              className="px-6 py-3 rounded-xl bg-neon-cyan hover:bg-cyan-300 text-space-950 font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2.5 shadow-[0_0_25px_rgba(0,240,255,0.4)] hover:shadow-[0_0_35px_rgba(0,240,255,0.6)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Compass className="w-4 h-4" />
              <span>View Projects & UI/UX</span>
            </button>

            <button
              onClick={handleScrollToContact}
              className="px-5 py-3 rounded-xl glass-button text-xs font-mono text-slate-200 hover:text-white flex items-center justify-center gap-2 border border-white/10 hover:border-neon-emerald/40 hover:bg-neon-emerald/10 shadow-lg transition-all"
            >
              <Briefcase className="w-4 h-4 text-neon-emerald" />
              <span>Hire Me / Contact</span>
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
              <div className="text-[10px] uppercase text-slate-500 tracking-wider">Primary Focus</div>
              <div className="text-xs font-bold text-neon-cyan flex items-center gap-1 mt-0.5">
                <span>SWE + UI/UX</span>
              </div>
            </div>

            <div>
              <div className="text-[10px] uppercase text-slate-500 tracking-wider">Design Suite</div>
              <div className="text-xs font-bold text-neon-pink flex items-center gap-1 mt-0.5">
                <span>Figma & Adobe</span>
              </div>
            </div>

            <div>
              <div className="text-[10px] uppercase text-slate-500 tracking-wider">Tech Stack</div>
              <div className="text-xs font-bold text-neon-emerald flex items-center gap-1 mt-0.5">
                <span>React • Next • Py</span>
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
          <span className="text-[10px] font-mono tracking-widest uppercase">Explore Real Projects & UI/UX Concepts</span>
          <ArrowDown className="w-4 h-4 animate-bounce text-slate-400 group-hover:text-neon-cyan" />
        </button>
      </div>
    </section>
  );
}
