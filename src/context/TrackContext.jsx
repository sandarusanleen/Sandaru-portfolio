import React, { createContext, useContext, useState } from 'react';
import { CV_TRACKS } from '../data/portfolioData';
import { playModeSwitch } from '../utils/audio';

const TrackContext = createContext(null);

export function TrackProvider({ children }) {
  const [activeTrack, setActiveTrackState] = useState('all');

  const setTrack = (trackId) => {
    setActiveTrackState(trackId);
    if (trackId !== 'all' && CV_TRACKS[trackId]) {
      playModeSwitch(580);
    } else {
      playModeSwitch(440);
    }
  };

  const currentTrack = CV_TRACKS[activeTrack] || {
    id: 'all',
    title: 'Software Engineer, Web Developer & UI/UX Designer',
    shortLabel: 'Full Spectrum / All Tracks',
    tagline: 'Multi-disciplinary IT undergraduate with proven expertise spanning Software Engineering, Modern Web Development, UI/UX Design, and Data Analytics.',
    color: '#00f0ff',
    pills: ['Software Engineering', 'Web Development', 'UI/UX Design', 'Data Analytics'],
  };

  return (
    <TrackContext.Provider
      value={{
        activeTrack,
        setTrack,
        currentTrack,
        allTracks: Object.values(CV_TRACKS),
      }}
    >
      {children}
    </TrackContext.Provider>
  );
}

export function useTrack() {
  const context = useContext(TrackContext);
  if (!context) {
    throw new Error('useTrack must be used within a TrackProvider');
  }
  return context;
}
