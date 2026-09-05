import React, { useRef, useState } from 'react';
import profileImg from '../assets/profile.jpg';
import { HERO_DATA, EDUCATION_DATA } from '../data/portfolioData';
import { useGravity } from '../context/GravityContext';
import { useTrack } from '../context/TrackContext';
import { playClick, playPulse } from '../utils/audio';
import { 
  Palette, 
  Code2, 
  GraduationCap, 
  MapPin, 
  Mail, 
  Check, 
  Copy, 
  ExternalLink, 
  Sparkles, 
  Download,
  Building,
  Briefcase,
  Database,
  BarChart3,
  Cpu,
  Globe
} from 'lucide-react';

export default function HolographicProfile() {
  const cardRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [copied, setCopied] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(true);

  const { gravityVector } = useGravity();
  const { activeTrack, currentTrack } = useTrack();

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Smooth 3D tilt tracking cursor
    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 12;

    setRotation({ x: rotateX, y: rotateY });
    setCursorPos({ x, y });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
  };

  const handleCopyEmail = () => {
    playClick();
    navigator.clipboard.writeText(HERO_DATA.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Dynamically tailor orbital satellite badges to match the active CV track
  const getSatellitesForTrack = () => {
    switch (activeTrack) {
      case 'uiux':
        return [
          { id: 'figma', label: 'Figma Prototyping', icon: <Palette className="w-3.5 h-3.5 text-neon-pink" />, color: '#ec4899', position: 'top-2 -left-4 sm:-left-6', anim: 'animate-float-slow' },
          { id: 'ds', label: 'Design Systems', icon: <Sparkles className="w-3.5 h-3.5 text-neon-cyan" />, color: '#00f0ff', position: 'top-10 -right-4 sm:-right-6', anim: 'animate-float-medium' },
          { id: 'ar', label: 'AR Learning Concept', icon: <Cpu className="w-3.5 h-3.5 text-neon-violet" />, color: '#8b5cf6', position: 'bottom-20 -left-4 sm:-left-6', anim: 'animate-float-fast' },
          { id: 'ps', label: 'Photoshop Assets', icon: <Palette className="w-3.5 h-3.5 text-neon-amber" />, color: '#f59e0b', position: 'bottom-6 -right-3 sm:-right-5', anim: 'animate-float-slow' },
        ];
      case 'swe':
        return [
          { id: 'sys', label: 'System Architecture', icon: <Cpu className="w-3.5 h-3.5 text-neon-cyan" />, color: '#00f0ff', position: 'top-2 -left-4 sm:-left-6', anim: 'animate-float-slow' },
          { id: 'langs', label: 'Java • Python • C', icon: <Code2 className="w-3.5 h-3.5 text-neon-emerald" />, color: '#10b981', position: 'top-10 -right-4 sm:-right-6', anim: 'animate-float-medium' },
          { id: 'db', label: 'PostgreSQL / MySQL', icon: <Database className="w-3.5 h-3.5 text-neon-violet" />, color: '#8b5cf6', position: 'bottom-20 -left-4 sm:-left-6', anim: 'animate-float-fast' },
          { id: 'edge', label: 'Edge Deep Learning', icon: <Sparkles className="w-3.5 h-3.5 text-neon-pink" />, color: '#ec4899', position: 'bottom-6 -right-3 sm:-right-5', anim: 'animate-float-slow' },
        ];
      case 'web':
        return [
          { id: 'react', label: 'ReactJS & Next.js', icon: <Globe className="w-3.5 h-3.5 text-neon-cyan" />, color: '#00f0ff', position: 'top-2 -left-4 sm:-left-6', anim: 'animate-float-slow' },
          { id: 'node', label: 'Node.js & Express', icon: <Code2 className="w-3.5 h-3.5 text-neon-emerald" />, color: '#10b981', position: 'top-10 -right-4 sm:-right-6', anim: 'animate-float-medium' },
          { id: 'tail', label: 'Tailwind & HTML/CSS', icon: <Sparkles className="w-3.5 h-3.5 text-neon-pink" />, color: '#ec4899', position: 'bottom-20 -left-4 sm:-left-6', anim: 'animate-float-fast' },
          { id: 'artisync', label: 'Marketplace Engine', icon: <Cpu className="w-3.5 h-3.5 text-neon-amber" />, color: '#f59e0b', position: 'bottom-6 -right-3 sm:-right-5', anim: 'animate-float-slow' },
        ];
      case 'data':
        return [
          { id: 'pydata', label: 'Python Data Analysis', icon: <BarChart3 className="w-3.5 h-3.5 text-amber-400" />, color: '#f59e0b', position: 'top-2 -left-4 sm:-left-6', anim: 'animate-float-slow' },
          { id: 'sql', label: 'SQL Query Analytics', icon: <Database className="w-3.5 h-3.5 text-neon-cyan" />, color: '#00f0ff', position: 'top-10 -right-4 sm:-right-6', anim: 'animate-float-medium' },
          { id: 'surv', label: 'Surveillance Analytics', icon: <Cpu className="w-3.5 h-3.5 text-neon-violet" />, color: '#8b5cf6', position: 'bottom-20 -left-4 sm:-left-6', anim: 'animate-float-fast' },
          { id: 'schemas', label: 'Relational Schemas', icon: <Sparkles className="w-3.5 h-3.5 text-neon-emerald" />, color: '#10b981', position: 'bottom-6 -right-3 sm:-right-5', anim: 'animate-float-slow' },
        ];
      default:
        return [
          { id: 'uiux', label: 'Figma & UI/UX', icon: <Palette className="w-3.5 h-3.5 text-neon-pink" />, color: '#ec4899', position: 'top-2 -left-4 sm:-left-6', anim: 'animate-float-slow' },
          { id: 'react', label: 'React & Next.js', icon: <Code2 className="w-3.5 h-3.5 text-neon-cyan" />, color: '#00f0ff', position: 'top-10 -right-4 sm:-right-6', anim: 'animate-float-medium' },
          { id: 'susl', label: 'SUSL Computing', icon: <GraduationCap className="w-3.5 h-3.5 text-neon-violet" />, color: '#8b5cf6', position: 'bottom-20 -left-4 sm:-left-6', anim: 'animate-float-fast' },
          { id: 'boc', label: 'Ex-BOC Assistant', icon: <Building className="w-3.5 h-3.5 text-neon-amber" />, color: '#f59e0b', position: 'bottom-6 -right-3 sm:-right-5', anim: 'animate-float-slow' },
        ];
    }
  };

  const activeSatellites = getSatellitesForTrack();

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: '1100px' }}
      className="relative w-full max-w-lg select-none"
    >
      {/* 3D Holographic Card Body */}
      <div
        style={{
          transform: isHovered
            ? `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) translateY(-6px)`
            : `rotateX(0deg) rotateY(0deg) translateY(${gravityVector.y * 5}px)`,
          transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
          transformStyle: 'preserve-3d',
        }}
        className="relative rounded-3xl glass-panel p-6 sm:p-8 border border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.7)] group overflow-visible"
      >
        {/* Dynamic Specular Holographic Reflection */}
        {isHovered && (
          <div
            className="absolute inset-0 pointer-events-none rounded-3xl transition-opacity duration-300 z-30"
            style={{
              background: `radial-gradient(circle 320px at ${cursorPos.x}px ${cursorPos.y}px, rgba(0, 240, 255, 0.12), transparent 70%)`,
            }}
          />
        )}

        {/* Floating Satellites dynamically reflecting the active track */}
        {activeSatellites.map((sat) => (
          <div
            key={sat.id}
            className={`absolute ${sat.position} ${sat.anim} z-30 hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full glass-panel border shadow-lg backdrop-blur-md text-[11px] font-mono`}
            style={{
              transform: 'translateZ(40px)',
              borderColor: `${sat.color}40`,
              backgroundColor: 'rgba(10, 10, 18, 0.85)',
              boxShadow: `0 0 15px ${sat.color}20`,
            }}
          >
            {sat.icon}
            <span className="text-white font-semibold tracking-wide">{sat.label}</span>
          </div>
        ))}

        {/* Top Telemetry Header */}
        <div 
          style={{ transform: 'translateZ(25px)' }}
          className="flex items-center justify-between pb-4 mb-6 border-b border-white/10 font-mono text-xs"
        >
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-emerald opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-emerald" />
            </span>
            <span className="text-neon-emerald font-semibold uppercase tracking-wider text-[11px]">
              Available for Internships
            </span>
          </div>
          <div className="text-[11px] font-semibold tracking-wider text-slate-300">
            <span style={{ color: currentTrack.color || '#00f0ff' }}>
              [{currentTrack.shortLabel || 'FULL-SPECTRUM'}]
            </span>
          </div>
        </div>

        {/* Portrait Image Container with Neon Orbital Rings */}
        <div 
          style={{ transform: 'translateZ(35px)' }}
          className="relative mx-auto w-48 h-48 sm:w-56 sm:h-56 mb-6 flex items-center justify-center"
        >
          {/* Outer Pulsing Glow */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-neon-cyan/20 via-neon-pink/20 to-neon-violet/20 blur-2xl animate-pulse-glow" />

          {/* Counter-rotating decorative orbital rings */}
          <div className="absolute -inset-3 rounded-full border border-dashed border-neon-cyan/30 animate-[spin_25s_linear_infinite]" />
          <div className="absolute -inset-1.5 rounded-full border border-neon-pink/30 animate-[spin_18s_linear_infinite_reverse]" />

          {/* Portrait Frame */}
          <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/20 shadow-2xl bg-space-950 p-1 group-hover:border-neon-cyan/60 transition-colors">
            {imageLoaded ? (
              <img
                src={profileImg}
                alt="Sandaru Sanleen Bandarigodage"
                onError={() => setImageLoaded(false)}
                className="w-full h-full object-cover object-top rounded-full transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <div className="w-full h-full rounded-full bg-gradient-to-br from-space-800 to-space-950 flex flex-col items-center justify-center text-white">
                <span className="text-3xl font-bold font-display text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-pink">
                  SB
                </span>
                <span className="text-[10px] font-mono text-slate-400 mt-1">Sandaru Sanleen</span>
              </div>
            )}
          </div>
        </div>

        {/* Profile Details & Dynamic Track Title */}
        <div style={{ transform: 'translateZ(30px)' }} className="text-center mb-6">
          <h2 className="text-xl sm:text-2xl font-extrabold text-white font-display tracking-tight">
            {HERO_DATA.displayName}
          </h2>
          <p 
            className="text-xs sm:text-sm font-bold font-display mt-0.5 mb-2"
            style={{ color: currentTrack.color || '#00f0ff' }}
          >
            {currentTrack.roleName || HERO_DATA.defaultTitle}
          </p>

          <p className="text-xs text-slate-300 font-sans leading-relaxed max-w-sm mx-auto">
            {currentTrack.tagline || HERO_DATA.tagline}
          </p>
        </div>

        {/* Quick Highlights Grid */}
        <div 
          style={{ transform: 'translateZ(25px)' }}
          className="grid grid-cols-2 gap-2.5 mb-6 text-left font-mono text-[11px]"
        >
          <div className="p-2.5 rounded-xl bg-space-950/60 border border-white/5 flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-neon-pink flex-shrink-0" />
            <span className="text-slate-300 truncate">Galle / Belihuloya</span>
          </div>

          <div className="p-2.5 rounded-xl bg-space-950/60 border border-white/5 flex items-center gap-2">
            <GraduationCap className="w-3.5 h-3.5 text-neon-cyan flex-shrink-0" />
            <span className="text-slate-300 truncate">BSc. (Hons) CIS</span>
          </div>

          <div className="p-2.5 rounded-xl bg-space-950/60 border border-white/5 flex items-center gap-2">
            <Palette className="w-3.5 h-3.5 text-neon-emerald flex-shrink-0" />
            <span className="text-slate-300 truncate">Figma & Photoshop</span>
          </div>

          <div className="p-2.5 rounded-xl bg-space-950/60 border border-white/5 flex items-center gap-2">
            <Building className="w-3.5 h-3.5 text-neon-amber flex-shrink-0" />
            <span className="text-slate-300 truncate">Ex-Bank of Ceylon</span>
          </div>
        </div>

        {/* Direct Action Capsule: Copy Email & Connect */}
        <div 
          style={{ transform: 'translateZ(30px)' }}
          className="flex items-center justify-between gap-3 pt-4 border-t border-white/10"
        >
          <button
            onClick={handleCopyEmail}
            className="flex-1 py-2.5 px-3 rounded-xl bg-white/[0.04] hover:bg-neon-cyan/15 border border-white/10 hover:border-neon-cyan/40 text-slate-200 hover:text-white text-xs font-mono font-semibold flex items-center justify-center gap-2 transition-all"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-neon-emerald" />
                <span className="text-neon-emerald">Email Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-neon-cyan" />
                <span>Copy Email Address</span>
              </>
            )}
          </button>

          <a
            href={`mailto:${HERO_DATA.email}`}
            className="p-2.5 rounded-xl bg-neon-cyan hover:bg-cyan-300 text-space-950 transition-all shadow-[0_0_15px_rgba(0,240,255,0.3)]"
            title="Send Email Directly"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
