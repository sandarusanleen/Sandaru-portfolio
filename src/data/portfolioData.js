export const HERO_DATA = {
  name: "SANDARU SANLEEN BANDARIGODAGE",
  displayName: "SANDARU SANLEEN",
  shortName: "Sandaru",
  defaultTitle: "Software Engineer • Web Developer • UI/UX • Data Analyst",
  subtitle: "Computing & Information Systems Undergraduate",
  university: "Sabaragamuwa University of Sri Lanka",
  degree: "BSc. (Hons) in Computing & Information Systems",
  period: "2024 – Present",
  alCollege: "St. Aloysius College - Galle",
  alStream: "G.C.E Advanced Level — Physical Science Stream (A B C, 2022)",
  email: "sandarusanleen@gmail.com",
  phone: "0773238110",
  formattedPhone: "+94 77 323 8110",
  address: "Potuvila watta, Unanvitiya, Baddegama, Galle, Sri Lanka",
  location: "Galle / Belihuloya, Sri Lanka",
  linkedinUrl: "https://www.linkedin.com/in/sandaru-bandarigodage-107b7a26a/",
  githubUrl: "https://github.com/sandarusanleen",
  portfolioUrl: "https://sandarusanleen.github.io/portfolio/",
  tagline: "Motivated Information Technology undergraduate with practical experience in full-stack web development, system architecture, and UI asset design. Adept at building practical applications, from surveillance management platforms to modern React web solutions. Seeking an IT internship to apply technical problem-solving and software engineering principles in a collaborative team environment.",
  status: "ACTIVELY SEEKING INTERNSHIP // AVAILABLE 2025/2026",
  coordinates: "SUSL // GALLE, SRI LANKA",
  gravityDefault: "0.00 G (MICROGRAVITY)"
};

export const CV_TRACKS = {
  'swe': {
    id: 'swe',
    roleName: 'Intern Software Engineer',
    shortLabel: 'Software Engineer',
    icon: 'Code',
    color: '#00f0ff',
    badgeClass: 'border-neon-cyan/40 bg-neon-cyan/10 text-neon-cyan',
    tagline: 'Engineering robust full-stack software systems, clean OOP architectures in Java/C/Python, and edge surveillance platforms.',
    keyPillars: ['System Architecture', 'Java / Python / C / PHP', 'Edge AI & Deep Learning', 'PostgreSQL & MySQL'],
    priorityProjectId: 'carevision-lk',
    highlightSkills: ['java', 'python', 'c', 'node', 'postgres', 'mysql', 'git'],
    fileName: 'Sandaru_Sanleen_Intern_Software_Engineer_CV.txt',
  },
  'web': {
    id: 'web',
    roleName: 'Intern Web Developer',
    shortLabel: 'Web Developer',
    icon: 'Globe',
    color: '#10b981',
    badgeClass: 'border-neon-emerald/40 bg-neon-emerald/10 text-neon-emerald',
    tagline: 'Building high-performance, responsive web applications with ReactJS, Next.js, modern CSS, and scalable RESTful APIs.',
    keyPillars: ['React.js & Next.js', 'Node.js & Express', 'Tailwind CSS & Responsive Web', 'Full-Stack Integration'],
    priorityProjectId: 'artisync',
    highlightSkills: ['react', 'next', 'js', 'htmlcss', 'tailwind', 'node', 'postgres'],
    fileName: 'Sandaru_Sanleen_Intern_Web_Developer_CV.txt',
  },
  'uiux': {
    id: 'uiux',
    roleName: 'Intern UI/UX Engineer',
    shortLabel: 'UI/UX Engineer',
    icon: 'Palette',
    color: '#ec4899',
    badgeClass: 'border-neon-pink/40 bg-neon-pink/10 text-neon-pink',
    tagline: 'Crafting user-centered wireframes, high-fidelity prototypes in Figma, design systems, and speculative 3D/AR interfaces.',
    keyPillars: ['Figma & Prototyping', 'Design Systems & UI Assets', 'Photoshop Asset Design', 'Futuristic AR Concepts'],
    priorityProjectId: 'ecos-of-reality',
    highlightSkills: ['figma', 'photoshop', 'htmlcss', 'react', 'tailwind', 'matter'],
    fileName: 'Sandaru_Sanleen_Intern_UI_UX_Engineer_CV.txt',
  },
  'data': {
    id: 'data',
    roleName: 'Intern Data Analyst',
    shortLabel: 'Data Analyst',
    icon: 'BarChart3',
    color: '#f59e0b',
    badgeClass: 'border-amber-400/40 bg-amber-400/10 text-amber-400',
    tagline: 'Uncovering actionable insights through SQL queries, relational database schema analysis, Python data modeling, and surveillance analytics.',
    keyPillars: ['Python & Analytics', 'MySQL & PostgreSQL Queries', 'Data Modeling & Schemas', 'Surveillance Edge Analytics'],
    priorityProjectId: 'carevision-lk',
    highlightSkills: ['python', 'postgres', 'mysql', 'node', 'c', 'git'],
    fileName: 'Sandaru_Sanleen_Intern_Data_Analyst_CV.txt',
  }
};

export const SKILL_BADGES = [
  // UI/UX & Design Tools
  { id: 'figma', label: 'Figma (UI/UX)', color: '#ec4899', category: 'design', radius: 48, tracks: ['uiux', 'web'] },
  { id: 'photoshop', label: 'Photoshop', color: '#38bdf8', category: 'design', radius: 46, tracks: ['uiux'] },
  
  // Frontend & Frameworks
  { id: 'react', label: 'ReactJS', color: '#00f0ff', category: 'frontend', radius: 46, tracks: ['web', 'swe', 'uiux'] },
  { id: 'next', label: 'Next.js', color: '#ffffff', category: 'frontend', radius: 44, tracks: ['web', 'swe'] },
  { id: 'js', label: 'JavaScript', color: '#f59e0b', category: 'language', radius: 48, tracks: ['web', 'swe', 'data'] },
  { id: 'htmlcss', label: 'HTML & CSS', color: '#f97316', category: 'frontend', radius: 46, tracks: ['web', 'uiux'] },
  { id: 'tailwind', label: 'Tailwind CSS', color: '#06b6d4', category: 'styling', radius: 46, tracks: ['web', 'uiux'] },

  // Programming Languages
  { id: 'java', label: 'Java', color: '#ea580c', category: 'backend', radius: 42, tracks: ['swe'] },
  { id: 'python', label: 'Python', color: '#10b981', category: 'language', radius: 44, tracks: ['swe', 'data'] },
  { id: 'c', label: 'C Language', color: '#6366f1', category: 'systems', radius: 42, tracks: ['swe', 'data'] },
  { id: 'php', label: 'PHP', color: '#818cf8', category: 'backend', radius: 40, tracks: ['web', 'swe'] },

  // Backend & Databases
  { id: 'node', label: 'Node.js', color: '#22c55e', category: 'backend', radius: 44, tracks: ['web', 'swe'] },
  { id: 'postgres', label: 'PostgreSQL', color: '#3b82f6', category: 'database', radius: 46, tracks: ['data', 'swe', 'web'] },
  { id: 'mysql', label: 'MySQL', color: '#0284c7', category: 'database', radius: 44, tracks: ['data', 'swe', 'web'] },

  // Version Control & Physics
  { id: 'git', label: 'Git & GitHub', color: '#f43f5e', category: 'tools', radius: 46, tracks: ['swe', 'web', 'data', 'uiux'] },
  { id: 'matter', label: 'Matter.js Physics', color: '#8b5cf6', category: 'creative', radius: 48, tracks: ['web', 'uiux'] },
];

export const PROJECTS_DATA = [
  {
    id: 'artisync',
    title: 'ARTISYNC_website',
    displayTitle: 'ARTISYNC Marketplace',
    subtitle: 'Modern Handcrafted Artisan Discovery Web Platform',
    category: 'Full-Stack Web & Marketplace',
    year: '03/2026 – Present',
    summary: 'A modern web platform designed to bridge the gap between skilled artisans and art enthusiasts, making handcrafted creations accessible, discoverable, and easy to share.',
    description: 'Designed and engineered an aesthetic, high-performance marketplace platform enabling traditional artisans to showcase handmade crafts, gain discoverability, and connect directly with art enthusiasts. Built with clean responsive React frontend, modular Node.js backend, and relational database management.',
    metrics: ['Artisan Discovery Platform', 'Responsive React & Node.js', 'Figma Wireframing to Web'],
    tags: ['ReactJS', 'Node.js', 'HTML/CSS', 'PostgreSQL', 'Figma', 'JavaScript'],
    accentColor: '#00f0ff',
    demoUrl: 'https://github.com/sandarusanleen/ARTISYNC_website',
    repoUrl: 'https://github.com/sandarusanleen/ARTISYNC_website',
    previewImage: 'linear-gradient(135deg, #091b2e 0%, #002b4d 50%, #00f0ff 100%)',
    tracks: ['web', 'swe', 'uiux', 'data']
  },
  {
    id: 'carevision-lk',
    title: 'CareVision_LK',
    displayTitle: 'CareVision LK',
    subtitle: 'Intelligent Hospital Security & Surveillance System',
    category: 'AI, Edge Computing & Data Analytics',
    year: '2025',
    summary: 'An enterprise-grade, AI-powered surveillance and security management system designed specifically for healthcare environments.',
    description: 'By leveraging state-of-the-art Deep Learning models and an Edge-Computing architecture, the system provides real-time monitoring across multiple hospital zones without relying on high-latency cloud video processing. Features custom incident data visualization and security alert workflows.',
    metrics: ['Deep Learning Edge Architecture', 'Real-Time Multi-Zone Surveillance', 'Low-Latency Video Stream Analysis'],
    tags: ['Python', 'Deep Learning', 'Edge Computing', 'System Architecture', 'MySQL/PostgreSQL'],
    accentColor: '#8b5cf6',
    demoUrl: 'https://github.com/NadunML/Frontend_CareVision_LK',
    repoUrl: 'https://github.com/NadunML/Frontend_CareVision_LK',
    previewImage: 'linear-gradient(135deg, #1b0f2e 0%, #341256 50%, #8b5cf6 100%)',
    tracks: ['swe', 'data', 'web', 'uiux']
  },
  {
    id: 'wonder-routes',
    title: 'wonder_routes_website',
    displayTitle: 'Wonder Routes',
    subtitle: 'Interactive Travel Itinerary & Path Discovery Platform',
    category: 'Frontend & Interactive Web',
    year: '2025',
    summary: 'An interactive web platform designed to help travelers discover unique destinations, plan custom itineraries, and explore breathtaking travel paths with ease.',
    description: 'Crafted an interactive travel exploration web application. Enables travelers to discover hidden scenic destinations, dynamically customize and save multi-day itineraries, and explore travel paths with an intuitive user interface and smooth interactive components.',
    metrics: ['Custom Itinerary Planning', 'Interactive Destination UI', 'Fast Responsive Web Experience'],
    tags: ['ReactJS', 'Next.js', 'JavaScript', 'HTML/CSS', 'Figma', 'UI/UX'],
    accentColor: '#10b981',
    demoUrl: 'https://github.com/sandarusanleen/wonder_routes_website',
    repoUrl: 'https://github.com/sandarusanleen/wonder_routes_website',
    previewImage: 'linear-gradient(135deg, #09261c 0%, #0c4230 50%, #10b981 100%)',
    tracks: ['web', 'uiux', 'swe', 'data']
  },
  {
    id: 'ecos-of-reality',
    title: 'ECOS OF REALITY',
    displayTitle: 'ECOS OF REALITY',
    subtitle: 'All-in-One AR Learning Experience (UI/UX Concept, 2050)',
    category: 'UI/UX Design & Immersive AR Concept',
    year: '2025',
    summary: 'A futuristic AR-based learning application designed to bridge the gap between traditional books and immersive 3D understanding.',
    description: 'The app enhances learning through key features such as AR Scan, Interactive 3D Models, AI Tutor, Virtual Library, and Hologram Notes, creating an engaging and intuitive educational experience. Designed completely in Figma with full component hierarchy, user flows, and spatial UI layout concepts.',
    metrics: ['Complete UI/UX Design System', 'AR Scan & 3D Spatial Models', 'Futuristic AI Tutor Interface'],
    tags: ['Figma', 'Photoshop', 'UI/UX Design', 'AR Concept', 'Wireframing', 'Design Systems'],
    accentColor: '#ec4899',
    demoUrl: 'https://www.figma.com/design/YJMiDJMAnfwymvYC3KLYTK/Ecos-Of-Reality?m=dev',
    repoUrl: 'https://www.figma.com/design/YJMiDJMAnfwymvYC3KLYTK/Ecos-Of-Reality?m=dev',
    figmaUrl: 'https://www.figma.com/design/YJMiDJMAnfwymvYC3KLYTK/Ecos-Of-Reality?m=dev',
    previewImage: 'linear-gradient(135deg, #2e091d 0%, #520f32 50%, #ec4899 100%)',
    tracks: ['uiux', 'web', 'swe', 'data']
  }
];

export const EXPERIENCE_DATA = [
  {
    role: "Personal Banking Unit Assistant",
    company: "Bank of Ceylon (BOC)",
    location: "Galle, Baddegama",
    period: "09/2023 – 04/2024",
    highlights: [
      "Assisted high-net-worth and retail clients with account operations, and fixed deposit inquiries.",
      "Processed customer onboarding documentation, ensuring strict compliance with KYC and AML banking regulations.",
      "Executed and managed multi-channel digital campaigns to promote banking products and financial services."
    ]
  }
];

export const EDUCATION_DATA = {
  degree: "BSc. (Hons) in Computing & Information Systems",
  institution: "Sabaragamuwa University of Sri Lanka",
  period: "2024 – Present",
  alCollege: "St. Aloysius College - Galle",
  alPeriod: "2022",
  alStream: "G.C.E Advanced Level — Physical Science Stream (A B C)",
  softSkills: [
    "Teamwork",
    "Problem Solving",
    "Clear communication",
    "Critical Thinking",
    "Adaptability",
    "Time Management"
  ],
  languages: [
    { name: "English", level: "Professional Working Proficiency" },
    { name: "Sinhala", level: "Native / Bilingual Proficiency" }
  ]
};

export const LAB_EXPERIMENTS = [
  {
    title: 'Holographic AR Learning Interface',
    desc: 'Spatial interaction components and 3D hologram design system in Figma.',
    tag: 'UI/UX Design'
  },
  {
    title: 'Edge Video Frame Analyzer',
    desc: 'Low-latency Python video frame pre-processing for hospital security zones.',
    tag: 'AI & Data Analytics'
  },
  {
    title: 'Artisan Storefront Component Tree',
    desc: 'Modular React.js catalog and responsive marketplace card system.',
    tag: 'Web Development'
  },
  {
    title: 'Zero-G Physics Micro-Engine',
    desc: 'Rigid-body microgravity simulation using HTML5 Canvas & Matter.js.',
    tag: 'Creative Tech'
  }
];

// Generates the exact matching CV text for any of the 4 uploaded CV versions
export function generateCVText(trackKey = 'swe') {
  const track = CV_TRACKS[trackKey] || CV_TRACKS['swe'];
  
  // In the UI/UX CV, ECOS OF REALITY is prioritized first
  const sortedProjects = trackKey === 'uiux'
    ? [PROJECTS_DATA[3], PROJECTS_DATA[0], PROJECTS_DATA[1], PROJECTS_DATA[2]]
    : PROJECTS_DATA;

  return `================================================================================
${HERO_DATA.name.toUpperCase()}
${track.roleName}
Email: ${HERO_DATA.email} | Phone: ${HERO_DATA.phone}
Location: ${HERO_DATA.address}
Links: LinkedIn (${HERO_DATA.linkedinUrl}) | Portfolio (${HERO_DATA.portfolioUrl})
================================================================================

SUMMARY
${HERO_DATA.tagline}

EDUCATION
${EDUCATION_DATA.institution}
${EDUCATION_DATA.degree}
${EDUCATION_DATA.period}

${EDUCATION_DATA.alCollege}
${EDUCATION_DATA.alStream}
${EDUCATION_DATA.alPeriod}

SKILLS
Programming Languages: JavaScript, Java, Python, C, PHP
Frameworks: ReactJS, Next.js, Node.js
Web Technologies: HTML, CSS, JavaScript, React.js
Database Management: MySQL, PostgreSQL
Design Tools: Figma, Photoshop
Version Control: Git, GitHub
Soft Skills: ${EDUCATION_DATA.softSkills.join(" | ")}

PROFESSIONAL EXPERIENCE
${EXPERIENCE_DATA[0].company}
${EXPERIENCE_DATA[0].role}
${EXPERIENCE_DATA[0].period} | ${EXPERIENCE_DATA[0].location}
${EXPERIENCE_DATA[0].highlights.map(h => `• ${h}`).join("\n")}

LANGUAGES
English
Sinhala

PROJECTS
${sortedProjects.map((p, idx) => `${p.title}
${p.subtitle}
${p.summary}
${p.year}
Link: ${p.figmaUrl || p.repoUrl}
`).join("\n")}
================================================================================`;
}
