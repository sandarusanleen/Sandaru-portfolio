import React from 'react';
import { EDUCATION_DATA, EXPERIENCE_DATA, LAB_EXPERIMENTS } from '../data/portfolioData';
import { 
  GraduationCap, 
  Briefcase, 
  Palette, 
  Layers, 
  Database, 
  Terminal, 
  Code2, 
  CheckCircle2, 
  Languages, 
  Sparkles,
  Building,
  Calendar,
  MapPin
} from 'lucide-react';

export default function SkillsSection() {
  const technicalDomains = [
    {
      title: 'UI/UX & Creative Product Design',
      icon: <Palette className="w-5 h-5 text-neon-pink" />,
      desc: 'Crafting user-centered wireframes, high-fidelity prototypes, design systems, and speculative 3D/AR interfaces with accessible micro-interactions.',
      skills: ['Figma', 'Photoshop', 'UI/UX Prototyping', 'Design Systems', 'User Flows', 'Wireframing', 'AR UI Concepts']
    },
    {
      title: 'Modern Frontend & Web Systems',
      icon: <Layers className="w-5 h-5 text-neon-cyan" />,
      desc: 'Developing fast, reactive, component-driven interfaces using modern JavaScript frameworks, CSS architectures, and dynamic layout systems.',
      skills: ['ReactJS', 'Next.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS', 'Responsive Design']
    },
    {
      title: 'Programming & System Architecture',
      icon: <Code2 className="w-5 h-5 text-neon-emerald" />,
      desc: 'Writing clean, maintainable code across object-oriented and scripting languages for desktop, server-side, and algorithmic execution.',
      skills: ['Java', 'Python', 'JavaScript', 'C Language', 'PHP', 'Object-Oriented Programming', 'Algorithms']
    },
    {
      title: 'Databases & Developer Tooling',
      icon: <Database className="w-5 h-5 text-neon-violet" />,
      desc: 'Designing relational database schemas, handling CRUD operations, and maintaining disciplined version control with collaborative Git workflows.',
      skills: ['MySQL', 'PostgreSQL', 'Node.js', 'Git', 'GitHub', 'REST APIs', 'CLI Tooling']
    },
  ];

  return (
    <section id="skills" className="relative py-20 px-4 max-w-6xl mx-auto w-full">
      {/* Section Header */}
      <div className="mb-12 border-b border-white/10 pb-6">
        <div className="inline-flex items-center gap-2 text-xs font-mono text-neon-pink mb-2.5">
          <Palette className="w-4 h-4" />
          <span className="tracking-widest uppercase">MODULE 03 // EDUCATION, EXPERIENCE & SKILLS</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
          Academic Track, Experience & Toolkit
        </h2>
        <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
          A versatile foundation uniting Software Engineering, Full-Stack development, and UI/UX product design.
        </p>
      </div>

      {/* Top Row: Education & Professional Experience Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
        {/* Education Card (7 Cols) */}
        <div className="lg:col-span-7 rounded-3xl glass-panel p-6 sm:p-8 border border-white/15 relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-64 h-64 bg-neon-cyan/5 rounded-full blur-3xl pointer-events-none" />

          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-neon-cyan mb-3">
              <GraduationCap className="w-4 h-4" />
              <span>ACADEMIC BACKGROUND</span>
            </div>

            {/* University */}
            <div className="mb-6">
              <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                  {EDUCATION_DATA.institution}
                </h3>
                <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan font-semibold">
                  {EDUCATION_DATA.period}
                </span>
              </div>
              <p className="text-sm font-semibold text-slate-300 font-mono">
                {EDUCATION_DATA.degree}
              </p>
            </div>

            {/* Secondary Education / A/L */}
            <div className="pt-4 border-t border-white/10">
              <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                <h4 className="text-base font-bold text-slate-200 font-display">
                  {EDUCATION_DATA.alCollege}
                </h4>
                <span className="text-xs font-mono text-slate-400">
                  {EDUCATION_DATA.alPeriod}
                </span>
              </div>
              <p className="text-xs font-mono text-slate-400">
                {EDUCATION_DATA.alStream}
              </p>
            </div>
          </div>

          {/* Languages from CV */}
          <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between flex-wrap gap-4 font-mono text-xs">
            <div className="flex items-center gap-2 text-slate-400">
              <Languages className="w-4 h-4 text-neon-emerald" />
              <span>LANGUAGES:</span>
            </div>
            <div className="flex items-center gap-3">
              {EDUCATION_DATA.languages.map((lang, idx) => (
                <span key={idx} className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-slate-200">
                  {lang.name} <span className="text-[10px] text-slate-400">({lang.level.split(' ')[0]})</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Professional Experience Card: Bank of Ceylon (5 Cols) */}
        <div className="lg:col-span-5 rounded-3xl glass-panel p-6 sm:p-8 border border-white/15 relative overflow-hidden flex flex-col justify-between">
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-neon-emerald/5 rounded-full blur-3xl pointer-events-none" />

          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-neon-emerald mb-3">
              <Briefcase className="w-4 h-4" />
              <span>PROFESSIONAL EXPERIENCE</span>
            </div>

            {EXPERIENCE_DATA.map((exp, idx) => (
              <div key={idx}>
                <h3 className="text-lg font-bold text-white font-display mb-0.5">
                  {exp.role}
                </h3>
                <div className="flex items-center gap-2 text-xs font-mono text-neon-emerald font-semibold mb-2">
                  <Building className="w-3.5 h-3.5" />
                  <span>{exp.company}</span>
                </div>

                <div className="flex items-center gap-4 text-xs font-mono text-slate-400 mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{exp.period}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    <span>{exp.location}</span>
                  </span>
                </div>

                <ul className="space-y-2 text-xs text-slate-300 leading-relaxed font-sans">
                  {exp.highlights.map((h, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-neon-emerald mt-1.5 flex-shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-white/10 text-[11px] font-mono text-slate-400">
            Client Operations • Compliance • Digital Banking
          </div>
        </div>
      </div>

      {/* 4 Technical Domain Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {technicalDomains.map((dom, idx) => (
          <div
            key={idx}
            className="rounded-2xl glass-card p-6 border border-white/10 hover:border-neon-cyan/40 transition-all duration-300 group"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                {dom.icon}
              </div>
              <h3 className="text-lg font-bold text-white font-display">
                {dom.title}
              </h3>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed mb-5">
              {dom.desc}
            </p>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5 font-mono text-xs">
              {dom.skills.map((s) => (
                <span
                  key={s}
                  className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/10 text-slate-400 group-hover:text-slate-200 transition-colors"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Soft Skills & Working Competencies from CV */}
      <div className="rounded-2xl glass-panel p-6 border border-white/10">
        <div className="flex items-center gap-2 mb-4 font-mono text-xs text-slate-300">
          <Sparkles className="w-4 h-4 text-neon-pink" />
          <span className="tracking-wider uppercase font-semibold">
            Core Professional & Soft Skills
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 font-mono text-xs">
          {EDUCATION_DATA.softSkills.map((skill, idx) => (
            <div 
              key={idx} 
              className="p-3 rounded-xl bg-space-950/50 border border-white/5 text-slate-300 text-center flex items-center justify-center hover:border-neon-cyan/30 hover:text-white transition-colors"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
