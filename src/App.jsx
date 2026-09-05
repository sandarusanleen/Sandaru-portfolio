import React from 'react';
import { GravityProvider } from './context/GravityContext';
import { TrackProvider } from './context/TrackContext';
import BackgroundCosmic from './components/BackgroundCosmic';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import SkillsSection from './components/SkillsSection';
import ContactFooter from './components/ContactFooter';


export default function App() {
  return (
    <GravityProvider>
      <TrackProvider>
        <div className="min-h-screen bg-space-900 text-slate-100 relative selection:bg-neon-cyan/30 selection:text-neon-cyan bg-cosmic-grid">
          {/* Dynamic Cosmic Background Starfield Canvas */}
          <BackgroundCosmic />

          {/* Top Sticky Navigation */}
          <Navbar />

          {/* Main Content Sections */}
          <main className="relative z-10 flex flex-col">
            <Hero />
            <Projects />
            <SkillsSection />
          </main>

          {/* Orbit Footer */}
          <ContactFooter />


        </div>
      </TrackProvider>
    </GravityProvider>
  );
}
