import React, { useState } from 'react';
import { useTrack } from '../context/TrackContext';
import { playClick } from '../utils/audio';
import { HERO_DATA } from '../data/portfolioData';
import { Orbit, Menu, X, Send } from 'lucide-react';

export default function Navbar() {
  const { currentTrack, activeTrack } = useTrack();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About & Profile', href: '#about' },
    { label: 'Projects & Works', href: '#projects' },
    { label: 'Experience & Skills', href: '#skills' },
    { label: 'CV Downloads & Hire', href: '#contact' },
  ];

  const handleLinkClick = () => {
    playClick();
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-4 z-50 px-4 max-w-6xl mx-auto w-full">
      <nav 
        aria-label="Main Navigation" 
        className="glass-panel rounded-full px-5 py-3 flex items-center justify-between border border-white/10 shadow-2xl backdrop-blur-xl"
      >
        {/* Brand / Logo */}
        <a 
          href="#" 
          onClick={handleLinkClick}
          className="flex items-center gap-2.5 group cursor-pointer"
        >
          <div className="w-8 h-8 rounded-full bg-neon-cyan/10 border border-neon-cyan/40 flex items-center justify-center text-neon-cyan group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all">
            <Orbit className="w-4 h-4 animate-orbit-spin" />
          </div>
          <div className="flex flex-col font-mono">
            <span className="text-xs font-bold tracking-widest text-white group-hover:text-neon-cyan transition-colors">
              {HERO_DATA.displayName}
            </span>
            <span className="text-[9px] text-slate-400 tracking-tighter">
              {activeTrack === 'all' ? 'SWE • WEB • UI/UX • DATA' : currentTrack.shortLabel?.toUpperCase()}
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-7 text-xs font-mono tracking-wide text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={handleLinkClick}
              className="hover:text-neon-cyan transition-colors relative py-1 group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-cyan transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Status / Telemetry Badge & Action */}
        <div className="hidden sm:flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-space-950/60 border border-white/10 text-[11px] font-mono">
            <span 
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ backgroundColor: currentTrack.color || '#10b981' }}
            />
            <span 
              className="font-semibold"
              style={{ color: currentTrack.color || '#10b981' }}
            >
              {currentTrack.shortLabel || 'FULL SPECTRUM'}
            </span>
          </div>

          <a
            href="#contact"
            onClick={handleLinkClick}
            className="px-4 py-1.5 rounded-full text-xs font-mono font-semibold bg-white/[0.06] hover:bg-neon-cyan/20 text-slate-100 hover:text-neon-cyan border border-white/15 hover:border-neon-cyan/40 transition-all shadow-[0_0_15px_rgba(0,0,0,0.3)] hover:shadow-[0_0_20px_rgba(0,240,255,0.25)] flex items-center gap-1.5"
          >
            <Send className="w-3 h-3" />
            <span>Hire Me</span>
          </a>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle mobile menu"
          className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white bg-white/5 border border-white/10"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 p-4 rounded-2xl glass-panel border border-white/10 shadow-2xl flex flex-col gap-3 font-mono text-sm animate-in fade-in duration-200">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={handleLinkClick}
              className="px-3 py-2 rounded-xl text-slate-200 hover:text-neon-cyan hover:bg-white/5 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
            <span style={{ color: currentTrack.color || '#10b981' }}>
              TRACK: {currentTrack.shortLabel || 'ALL TRACKS'}
            </span>
            <span className="text-emerald-400 font-semibold">AVAILABLE</span>
          </div>
        </div>
      )}
    </header>
  );
}
