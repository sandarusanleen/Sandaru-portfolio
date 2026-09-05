import React, { useState } from 'react';
import { useGravity } from '../context/GravityContext';
import { 
  Orbit, 
  Moon, 
  Globe, 
  ArrowUp, 
  Zap, 
  Volume2, 
  VolumeX, 
  Sliders, 
  ChevronUp, 
  ChevronDown 
} from 'lucide-react';

export default function GravityControls() {
  const { 
    gravityMode, 
    setGravityMode, 
    availableModes, 
    triggerShockwave, 
    soundEnabled, 
    toggleSound,
    currentModeConfig 
  } = useGravity();

  const [isOpen, setIsOpen] = useState(true);

  const getModeIcon = (modeId) => {
    switch (modeId) {
      case 'zero-g':
        return <Orbit className="w-4 h-4" />;
      case 'lunar':
        return <Moon className="w-4 h-4" />;
      case 'earth':
        return <Globe className="w-4 h-4" />;
      case 'inverted':
        return <ArrowUp className="w-4 h-4" />;
      default:
        return <Orbit className="w-4 h-4" />;
    }
  };

  return (
    <aside aria-label="Gravity Simulation Controls" className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5 font-mono select-none">
      {/* Expanded Control Box */}
      {isOpen && (
        <div className="w-72 p-4 rounded-2xl glass-panel border border-white/10 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-bottom-3 duration-300">
          {/* Header */}
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <Sliders className="w-4 h-4 text-neon-cyan" />
              <span className="text-xs font-semibold tracking-wider text-slate-200 uppercase">
                Gravity Field HUD
              </span>
            </div>
            
            <div className="flex items-center gap-1.5">
              <button
                onClick={toggleSound}
                title={soundEnabled ? "Mute Synthetic Audio" : "Enable Audio"}
                aria-label={soundEnabled ? "Mute Synthetic Audio" : "Enable Audio"}
                className={`p-1.5 rounded-lg border transition-all ${
                  soundEnabled 
                    ? 'border-neon-cyan/40 bg-neon-cyan/10 text-neon-cyan shadow-[0_0_10px_rgba(0,240,255,0.2)]' 
                    : 'border-white/10 bg-white/5 text-slate-400 hover:text-white'
                }`}
              >
                {soundEnabled ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          {/* Current Gravitational Vector Readout */}
          <div className="mb-3 px-3 py-2 rounded-xl bg-space-950/60 border border-white/5 flex items-center justify-between">
            <span className="text-[11px] text-slate-400">VECTOR:</span>
            <span 
              className="text-xs font-bold tracking-widest"
              style={{ color: currentModeConfig.color }}
            >
              {currentModeConfig.label}
            </span>
          </div>

          {/* Gravity Mode Selector Buttons */}
          <div className="grid grid-cols-2 gap-2 mb-3">
            {availableModes.map((mode) => {
              const isActive = gravityMode === mode.id;
              return (
                <button
                  key={mode.id}
                  onClick={() => setGravityMode(mode.id)}
                  className={`relative flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs transition-all duration-200 text-left border ${
                    isActive
                      ? 'border-transparent text-white font-bold shadow-lg'
                      : 'border-white/10 bg-white/[0.02] text-slate-300 hover:bg-white/[0.06] hover:text-white'
                  }`}
                  style={{
                    backgroundColor: isActive ? `${mode.color}22` : undefined,
                    borderColor: isActive ? mode.color : undefined,
                    boxShadow: isActive ? `0 0 16px ${mode.color}33` : undefined,
                  }}
                >
                  <span style={{ color: mode.color }}>{getModeIcon(mode.id)}</span>
                  <span className="truncate">{mode.name}</span>
                </button>
              );
            })}
          </div>

          {/* Shockwave / Zero-G Pulse Action Button */}
          <button
            onClick={triggerShockwave}
            className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-neon-cyan/20 via-neon-violet/20 to-neon-pink/20 hover:from-neon-cyan/30 hover:via-neon-violet/30 hover:to-neon-pink/30 border border-white/20 text-slate-100 text-xs font-semibold tracking-wider uppercase flex items-center justify-center gap-2 group transition-all shadow-[0_0_20px_rgba(0,240,255,0.15)] active:scale-[0.98]"
          >
            <Zap className="w-3.5 h-3.5 text-neon-cyan group-hover:scale-125 transition-transform" />
            <span>Disrupt Grav-Field</span>
          </button>
        </div>
      )}

      {/* Floating Toggle Capsule */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label="Toggle gravity controls HUD"
        className="flex items-center gap-3 px-4 py-2.5 rounded-full glass-panel border border-white/15 hover:border-neon-cyan/50 text-xs text-slate-200 hover:text-white shadow-xl hover:shadow-[0_0_20px_rgba(0,240,255,0.25)] transition-all"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span 
            className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
            style={{ backgroundColor: currentModeConfig.color }}
          />
          <span 
            className="relative inline-flex rounded-full h-2.5 w-2.5"
            style={{ backgroundColor: currentModeConfig.color }}
          />
        </span>
        <span className="font-semibold">{currentModeConfig.name}</span>
        <span className="text-[10px] text-slate-400 font-mono">[{currentModeConfig.label}]</span>
        {isOpen ? <ChevronDown className="w-3.5 h-3.5 text-slate-400" /> : <ChevronUp className="w-3.5 h-3.5 text-slate-400" />}
      </button>
    </aside>
  );
}
