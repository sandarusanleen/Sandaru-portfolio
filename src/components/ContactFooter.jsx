import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { 
  Send, 
  Github, 
  Linkedin, 
  Radio, 
  CheckCircle2, 
  Mail, 
  Phone, 
  MapPin, 
  Download,
  Palette,
  Code,
  Globe,
  BarChart3,
  FileCheck2,
  Sparkles
} from 'lucide-react';
import { playClick, playPulse } from '../utils/audio';
import { HERO_DATA, CV_TRACKS, generateCVText } from '../data/portfolioData';
import { useTrack } from '../context/TrackContext';

export default function ContactFooter() {
  const { activeTrack } = useTrack();
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    company: '',
    roleType: 'Software Engineering Internship', 
    message: '' 
  });
  const [transmitted, setTransmitted] = useState(false);
  const [missionSeconds, setMissionSeconds] = useState(38420);
  const [downloadedTrack, setDownloadedTrack] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setMissionSeconds(prev => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatMissionTime = (totalSecs) => {
    const hours = String(Math.floor(totalSecs / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((totalSecs % 3600) / 60)).padStart(2, '0');
    const seconds = String(totalSecs % 60).padStart(2, '0');
    return `T+${hours}:${minutes}:${seconds}`;
  };

  const handleDownloadCV = (trackKey = 'swe') => {
    playPulse();
    const track = CV_TRACKS[trackKey] || CV_TRACKS['swe'];
    const resumeText = generateCVText(trackKey);

    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = track.fileName;
    link.click();
    URL.revokeObjectURL(url);

    setDownloadedTrack(trackKey);
    setTimeout(() => setDownloadedTrack(null), 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    playPulse();
    setTransmitted(true);

    // Cosmic Celebration Confetti
    confetti({
      particleCount: 95,
      spread: 80,
      origin: { y: 0.8 },
      colors: ['#00f0ff', '#ec4899', '#10b981', '#f59e0b', '#ffffff'],
      disableForReducedMotion: true
    });
  };

  const handleReset = () => {
    playClick();
    setTransmitted(false);
    setFormData({ 
      name: '', 
      email: '', 
      company: '', 
      roleType: 'Software Engineering Internship', 
      message: '' 
    });
  };

  const cvTrackList = [
    { key: 'swe', title: 'Intern Software Engineer CV', icon: <Code className="w-4 h-4 text-neon-cyan" />, color: '#00f0ff' },
    { key: 'web', title: 'Intern Web Developer CV', icon: <Globe className="w-4 h-4 text-neon-emerald" />, color: '#10b981' },
    { key: 'uiux', title: 'Intern UI/UX Engineer CV', icon: <Palette className="w-4 h-4 text-neon-pink" />, color: '#ec4899' },
    { key: 'data', title: 'Intern Data Analyst CV', icon: <BarChart3 className="w-4 h-4 text-amber-400" />, color: '#f59e0b' },
  ];

  return (
    <footer id="contact" className="relative pt-20 pb-12 px-4 max-w-6xl mx-auto w-full">
      {/* Background glow */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-neon-cyan/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Main Interactive Contact Box */}
      <div className="rounded-3xl glass-panel p-8 sm:p-12 border border-white/15 shadow-2xl relative overflow-hidden mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Recruiter Info, Direct Contacts & 4 Tailored CV Downloads */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-neon-emerald mb-3">
              <Radio className="w-3.5 h-3.5 animate-pulse text-neon-emerald" />
              <span className="tracking-widest uppercase">MODULE 04 // RECRUITMENT & CV UPLINK</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display mb-4">
              Let's Connect for Internships
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
              Seeking an intern adept in <strong>Software Engineering</strong>, <strong>Modern Web Development</strong>, <strong>UI/UX Design</strong>, or <strong>Data Analytics</strong>? Download the targeted CV matching your opening or send an inquiry below.
            </p>

            {/* 4 Targeted CV Downloads matching the 4 PDFs */}
            <div className="mb-8">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center justify-between">
                <span>Download Tailored CV Version:</span>
                <span className="text-[10px] text-neon-cyan">TXT Format • Instant</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {cvTrackList.map((item) => {
                  const isTrackActive = activeTrack === item.key;
                  const isDownloaded = downloadedTrack === item.key;

                  return (
                    <button
                      key={item.key}
                      onClick={() => handleDownloadCV(item.key)}
                      className={`p-3 rounded-xl border text-left flex items-center justify-between transition-all group font-mono text-xs ${
                        isTrackActive
                          ? 'bg-white/[0.08] shadow-lg'
                          : 'bg-space-950/60 hover:bg-white/[0.05] border-white/10'
                      }`}
                      style={{
                        borderColor: isTrackActive ? item.color : undefined,
                        boxShadow: isTrackActive ? `0 0 15px ${item.color}25` : undefined,
                      }}
                    >
                      <div className="flex items-center gap-2.5 truncate">
                        <span>{item.icon}</span>
                        <span className="truncate text-slate-200 group-hover:text-white font-semibold">
                          {item.title}
                        </span>
                      </div>
                      <Download className="w-3.5 h-3.5 text-slate-400 group-hover:text-white flex-shrink-0 ml-1.5" />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Direct Contact Telemetry */}
            <div className="space-y-3 font-mono text-xs text-slate-400">
              <div className="flex items-center justify-between p-3 rounded-xl bg-space-950/60 border border-white/5">
                <span className="flex items-center gap-1.5 text-slate-400">
                  <Mail className="w-3.5 h-3.5 text-neon-cyan" />
                  <span>EMAIL:</span>
                </span>
                <a 
                  href={`mailto:${HERO_DATA.email}`} 
                  className="text-neon-cyan hover:underline font-semibold"
                >
                  {HERO_DATA.email}
                </a>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-space-950/60 border border-white/5">
                <span className="flex items-center gap-1.5 text-slate-400">
                  <Phone className="w-3.5 h-3.5 text-neon-emerald" />
                  <span>PHONE:</span>
                </span>
                <a 
                  href={`tel:${HERO_DATA.phone}`} 
                  className="text-neon-emerald hover:underline font-semibold"
                >
                  {HERO_DATA.formattedPhone} ({HERO_DATA.phone})
                </a>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-space-950/60 border border-white/5">
                <span className="flex items-center gap-1.5 text-slate-400">
                  <MapPin className="w-3.5 h-3.5 text-neon-pink" />
                  <span>ADDRESS:</span>
                </span>
                <span className="text-slate-300 text-right truncate max-w-[240px]">
                  {HERO_DATA.address}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-6">
            {transmitted ? (
              <div className="p-8 rounded-2xl bg-space-950/70 border border-neon-emerald/30 text-center animate-in fade-in duration-300">
                <CheckCircle2 className="w-12 h-12 text-neon-emerald mx-auto mb-4 animate-bounce" />
                <h3 className="text-xl font-bold text-white font-display mb-2">
                  Transmission Received!
                </h3>
                <p className="text-sm text-slate-300 mb-6 font-mono">
                  Thank you for reaching out, {formData.name}! I will reply to {formData.email} promptly.
                </p>
                <button
                  onClick={handleReset}
                  className="px-5 py-2.5 rounded-xl glass-button text-xs font-mono text-slate-200 hover:text-white border border-white/15"
                >
                  Send Another Transmission
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-mono">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase text-slate-400 mb-1.5 tracking-wider">
                      Your Name / Recruiter
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3 rounded-xl bg-space-950/60 border border-white/10 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase text-slate-400 mb-1.5 tracking-wider">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="recruiter@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-space-950/60 border border-white/10 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase text-slate-400 mb-1.5 tracking-wider">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Company name"
                      className="w-full px-4 py-3 rounded-xl bg-space-950/60 border border-white/10 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase text-slate-400 mb-1.5 tracking-wider">
                      Opportunity Track
                    </label>
                    <select
                      value={formData.roleType}
                      onChange={(e) => setFormData({ ...formData, roleType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-space-950/60 border border-white/10 text-sm text-slate-100 focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all"
                    >
                      <option value="Software Engineering Internship">Software Engineering Internship</option>
                      <option value="Web Development Internship">Web Development Internship</option>
                      <option value="UI/UX Engineering Internship">UI/UX Engineering Internship</option>
                      <option value="Data Analyst Internship">Data Analyst Internship</option>
                      <option value="General Collaboration">General Collaboration / Chat</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase text-slate-400 mb-1.5 tracking-wider">
                    Message / Opportunity Scope
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about the role, technical scope, or design challenge..."
                    className="w-full px-4 py-3 rounded-xl bg-space-950/60 border border-white/10 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-neon-cyan via-purple-500 to-pink-500 hover:from-cyan-300 hover:to-pink-400 text-space-950 font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(0,240,255,0.3)] transition-all transform active:scale-[0.99]"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Internship Inquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Orbit Footer Bottom Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-white/10 text-xs font-mono text-slate-500">
        <div className="flex items-center gap-2">
          <span>{HERO_DATA.name} • SABARAGAMUWA UNIVERSITY OF SRI LANKA</span>
        </div>

        {/* Social Orbit Links */}
        <div className="flex items-center gap-4 text-slate-400">
          <a
            href="https://github.com/sandarusanleen"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
            className="hover:text-neon-cyan transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com/in/sandarusanleen"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile"
            className="hover:text-neon-cyan transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${HERO_DATA.email}`}
            aria-label="Email Sandaru Sanleen Bandarigodage"
            className="hover:text-neon-cyan transition-colors"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
