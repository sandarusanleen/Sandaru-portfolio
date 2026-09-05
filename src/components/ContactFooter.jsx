import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { 
  Send, 
  Github, 
  Linkedin, 
  FileText, 
  Radio, 
  CheckCircle2, 
  Briefcase, 
  Mail, 
  Phone, 
  MapPin, 
  Download,
  Palette,
  Code
} from 'lucide-react';
import { playClick, playPulse } from '../utils/audio';
import { HERO_DATA, EDUCATION_DATA, EXPERIENCE_DATA, PROJECTS_DATA } from '../data/portfolioData';

export default function ContactFooter() {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    company: '',
    roleType: 'SWE / UI/UX Internship', 
    message: '' 
  });
  const [transmitted, setTransmitted] = useState(false);
  const [missionSeconds, setMissionSeconds] = useState(38420);

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

  const handleDownloadResume = () => {
    playPulse();
    const resumeText = `================================================================================
${HERO_DATA.name.toUpperCase()}
Intern Software Engineer & UI/UX Designer
Email: ${HERO_DATA.email} | Phone: ${HERO_DATA.phone}
Location: Potuvila watta, Unanvitiya, Baddegama, Galle, Sri Lanka
================================================================================

SUMMARY:
Motivated Information Technology undergraduate with practical experience in full-stack 
web development, system architecture, and UI asset design. Adept at building practical 
applications, from surveillance management platforms to modern React web solutions. 
Seeking an IT internship to apply technical problem-solving and software engineering 
principles in a collaborative team environment.

EDUCATION:
- Sabaragamuwa University of Sri Lanka (2024 – Present)
  BSc. (Hons) in Computing & Information Systems
- St. Aloysius College - Galle (2022)
  G.C.E Advanced Level — Physical Science Stream (A B C)

TECHNICAL SKILLS:
- Programming Languages: JavaScript, Java, Python, C, PHP
- Frameworks & Web: ReactJS, Next.js, Node.js, HTML5, CSS3, Tailwind CSS
- Databases: MySQL, PostgreSQL
- Design Tools: Figma, Photoshop (UI/UX Prototyping, Design Systems, Wireframing)
- Version Control: Git, GitHub
- Soft Skills: Teamwork, Problem Solving, Clear Communication, Critical Thinking, Adaptability, Time Management
- Languages: English, Sinhala

PROFESSIONAL EXPERIENCE:
Bank of Ceylon (BOC) | Personal Banking Unit Assistant (09/2023 – 04/2024 | Galle, Baddegama)
- Assisted high-net-worth and retail clients with account operations and fixed deposit inquiries.
- Processed customer onboarding documentation, ensuring strict compliance with KYC and AML banking regulations.
- Executed and managed multi-channel digital campaigns to promote banking products and financial services.

FEATURED PROJECTS:
1. ARTISYNC (03/2026 – Present)
   A modern web platform designed to bridge the gap between skilled artisans and art enthusiasts,
   making handcrafted creations accessible, discoverable, and easy to share.
   Tech: React.js, Node.js, UI/UX Design, PostgreSQL, Figma

2. CareVision LK (Intelligent Hospital Security System)
   Enterprise-grade, AI-powered surveillance and security management system for healthcare environments.
   Deep Learning models with Edge-Computing for real-time monitoring across hospital zones.
   Tech: Python, Deep Learning, Edge Computing, Computer Vision, Architecture

3. Wonder Routes (2025)
   Interactive web platform designed to help travelers discover unique destinations, plan custom 
   itineraries, and explore breathtaking travel paths with ease.
   Tech: React.js, Next.js, JavaScript, Tailwind, UI/UX

4. ECOS OF REALITY (2025)
   All-in-One AR Learning Experience (UI/UX Concept, 2050). Futuristic AR-based learning application
   bridging traditional books and immersive 3D understanding with AR Scan, 3D Models, AI Tutor, Hologram Notes.
   Tech: Figma, UI/UX Design, 3D Spatial Prototyping, Design Systems
================================================================================`;

    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Sandaru_Sanleen_Bandarigodage_CV.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    playPulse();
    setTransmitted(true);

    // Cosmic Celebration Confetti
    confetti({
      particleCount: 90,
      spread: 75,
      origin: { y: 0.8 },
      colors: ['#00f0ff', '#ec4899', '#8b5cf6', '#10b981', '#ffffff'],
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
      roleType: 'SWE / UI/UX Internship', 
      message: '' 
    });
  };

  return (
    <footer id="contact" className="relative pt-20 pb-12 px-4 max-w-6xl mx-auto w-full">
      {/* Background glow */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-neon-cyan/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Main Interactive Contact Box */}
      <div className="rounded-3xl glass-panel p-8 sm:p-12 border border-white/15 shadow-2xl relative overflow-hidden mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Recruiter Info & Direct Contacts */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-neon-emerald mb-3">
              <Radio className="w-3.5 h-3.5 animate-pulse text-neon-emerald" />
              <span className="tracking-widest uppercase">MODULE 04 // RECRUITMENT & CONTACT UPLINK</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display mb-4">
              Let's Build Something Exceptional Together
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
              Seeking an intern who can both <strong>code scalable web systems</strong> and <strong>design clean, user-centered UI/UX experiences</strong>? I am actively available for internships and collaborative roles.
            </p>

            {/* Direct Resume Download Action */}
            <div className="mb-8">
              <button
                onClick={handleDownloadResume}
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-neon-emerald/20 hover:bg-neon-emerald/30 border border-neon-emerald/50 text-neon-emerald hover:text-white text-xs font-mono font-bold tracking-wider uppercase flex items-center justify-center gap-2.5 transition-all shadow-[0_0_20px_rgba(16,185,129,0.2)]"
              >
                <Download className="w-4 h-4" />
                <span>Download Official CV (.TXT)</span>
              </button>
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
                  href={`tel:${HERO_DATA.phone.replace(/[^0-9+]/g, '')}`} 
                  className="text-neon-emerald hover:underline font-semibold"
                >
                  {HERO_DATA.phone}
                </a>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-space-950/60 border border-white/5">
                <span className="flex items-center gap-1.5 text-slate-400">
                  <MapPin className="w-3.5 h-3.5 text-neon-pink" />
                  <span>LOCATION:</span>
                </span>
                <span className="text-slate-200">Galle / Belihuloya, LK</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            {transmitted ? (
              <div className="p-8 rounded-2xl bg-space-950/70 border border-neon-emerald/30 text-center animate-in fade-in duration-300">
                <CheckCircle2 className="w-12 h-12 text-neon-emerald mx-auto mb-4 animate-bounce" />
                <h3 className="text-xl font-bold text-white font-display mb-2">
                  Transmission Dispatched Successfully!
                </h3>
                <p className="text-sm text-slate-300 mb-6 font-mono">
                  Thank you for reaching out, {formData.name}! I will review your message and reply via {formData.email} promptly.
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
                      placeholder="Organization or project name"
                      className="w-full px-4 py-3 rounded-xl bg-space-950/60 border border-white/10 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase text-slate-400 mb-1.5 tracking-wider">
                      Area of Interest
                    </label>
                    <select
                      value={formData.roleType}
                      onChange={(e) => setFormData({ ...formData, roleType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-space-950/60 border border-white/10 text-sm text-slate-100 focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all"
                    >
                      <option value="SWE / UI/UX Internship">Software Engineering & UI/UX Internship</option>
                      <option value="UI/UX Design Role">UI/UX & Product Design Role</option>
                      <option value="Frontend / Full-Stack Web">Frontend / Full-Stack Web Development</option>
                      <option value="AI & Computer Vision">AI & Computer Vision Project</option>
                      <option value="Informational Chat">Networking & Informational Chat</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase text-slate-400 mb-1.5 tracking-wider">
                    Message Payload
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about the role, design challenge, or opportunity..."
                    className="w-full px-4 py-3 rounded-xl bg-space-950/60 border border-white/10 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-neon-cyan via-purple-500 to-pink-500 hover:from-cyan-300 hover:to-pink-400 text-space-950 font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(0,240,255,0.3)] transition-all transform active:scale-[0.99]"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Message</span>
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
