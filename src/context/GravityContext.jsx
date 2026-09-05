import React, { createContext, useContext, useState, useCallback } from 'react';
import { playModeSwitch, playPulse, toggleSound as toggleAudioEngine, isSoundEnabled } from '../utils/audio';

const GravityContext = createContext(null);

export const GRAVITY_MODES = {
  'zero-g': {
    id: 'zero-g',
    name: 'Zero-G',
    icon: 'Orbit',
    label: '0.00 G',
    desc: 'Weightless microgravity with Brownian drift',
    vector: { x: 0, y: 0 },
    color: '#00f0ff',
  },
  'lunar': {
    id: 'lunar',
    name: 'Lunar Orbit',
    icon: 'Moon',
    label: '0.16 G',
    desc: 'Low gravity with high kinetic bounce',
    vector: { x: 0, y: 0.18 },
    color: '#8b5cf6',
  },
  'earth': {
    id: 'earth',
    name: 'Earth Normal',
    icon: 'Globe',
    label: '1.00 G',
    desc: 'Standard planetary 9.8m/s² descent',
    vector: { x: 0, y: 1.0 },
    color: '#10b981',
  },
  'inverted': {
    id: 'inverted',
    name: 'Anti-Gravity',
    icon: 'ArrowUp',
    label: '-0.85 G',
    desc: 'Inverted gravitational field repulsion',
    vector: { x: 0, y: -0.85 },
    color: '#ec4899',
  }
};

export function GravityProvider({ children }) {
  const [gravityMode, setGravityModeState] = useState('zero-g');
  const [shockwaveTrigger, setShockwaveTrigger] = useState(0);
  const [soundEnabled, setSoundEnabledState] = useState(true);
  const [customScale, setCustomScale] = useState(1);

  const setGravityMode = useCallback((modeKey) => {
    if (GRAVITY_MODES[modeKey]) {
      setGravityModeState(modeKey);
      playModeSwitch(modeKey === 'inverted' ? 660 : 440);
    }
  }, []);

  const triggerShockwave = useCallback(() => {
    setShockwaveTrigger(prev => prev + 1);
    playPulse();
  }, []);

  const toggleSound = useCallback(() => {
    const newState = toggleAudioEngine();
    setSoundEnabledState(newState);
  }, []);

  const currentModeConfig = GRAVITY_MODES[gravityMode];

  return (
    <GravityContext.Provider
      value={{
        gravityMode,
        setGravityMode,
        currentModeConfig,
        gravityVector: currentModeConfig.vector,
        shockwaveTrigger,
        triggerShockwave,
        soundEnabled,
        toggleSound,
        customScale,
        setCustomScale,
        availableModes: Object.values(GRAVITY_MODES)
      }}
    >
      {children}
    </GravityContext.Provider>
  );
}

export function useGravity() {
  const context = useContext(GravityContext);
  if (!context) {
    throw new Error('useGravity must be used within a GravityProvider');
  }
  return context;
}
