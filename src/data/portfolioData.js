export const HERO_DATA = {
  name: "SANDARU SANLEEN BANDARIGODAGE",
  displayName: "SANDARU SANLEEN",
  shortName: "Sandaru",
  title: "Software Engineer & UI/UX Designer",
  subtitle: "Computing & Information Systems Undergraduate",
  university: "Sabaragamuwa University of Sri Lanka",
  degree: "BSc. (Hons) in Computing & Information Systems",
  period: "2024 – Present",
  alCollege: "St. Aloysius College - Galle",
  alStream: "G.C.E A/L Physical Science Stream (A B C, 2022)",
  email: "sandarusanleen@gmail.com",
  phone: "+94 77 323 8110",
  location: "Galle / Belihuloya, Sri Lanka",
  tagline: "Motivated IT undergraduate with practical experience in full-stack web development, system architecture, and UI/UX design. Passionate about engineering high-performance software and intuitive digital experiences.",
  status: "OPEN FOR INTERNSHIPS // SWE & UI/UX",
  coordinates: "SUSL // GALLE, SRI LANKA",
  gravityDefault: "0.00 G (MICROGRAVITY)"
};

export const SKILL_BADGES = [
  // UI/UX & Design Tools
  { id: 'figma', label: 'Figma (UI/UX)', color: '#ec4899', category: 'design', radius: 48 },
  { id: 'photoshop', label: 'Photoshop', color: '#38bdf8', category: 'design', radius: 46 },
  
  // Frontend & Frameworks
  { id: 'react', label: 'React.js', color: '#00f0ff', category: 'frontend', radius: 46 },
  { id: 'next', label: 'Next.js', color: '#ffffff', category: 'frontend', radius: 44 },
  { id: 'js', label: 'JavaScript (ES6+)', color: '#f59e0b', category: 'language', radius: 52 },
  { id: 'htmlcss', label: 'HTML5 & CSS3', color: '#f97316', category: 'frontend', radius: 48 },
  { id: 'tailwind', label: 'Tailwind CSS', color: '#06b6d4', category: 'styling', radius: 46 },

  // Programming Languages
  { id: 'java', label: 'Java', color: '#ea580c', category: 'backend', radius: 42 },
  { id: 'python', label: 'Python', color: '#10b981', category: 'language', radius: 44 },
  { id: 'c', label: 'C Language', color: '#6366f1', category: 'systems', radius: 42 },
  { id: 'php', label: 'PHP', color: '#818cf8', category: 'backend', radius: 40 },

  // Backend & Databases
  { id: 'node', label: 'Node.js', color: '#22c55e', category: 'backend', radius: 44 },
  { id: 'postgres', label: 'PostgreSQL', color: '#3b82f6', category: 'database', radius: 46 },
  { id: 'mysql', label: 'MySQL', color: '#0284c7', category: 'database', radius: 44 },

  // Version Control & Physics
  { id: 'git', label: 'Git & GitHub', color: '#f43f5e', category: 'tools', radius: 46 },
  { id: 'matter', label: 'Matter.js Physics', color: '#8b5cf6', category: 'creative', radius: 48 },
];

export const PROJECTS_DATA = [
  {
    id: 'ecos-of-reality',
    title: 'ECOS OF REALITY',
    subtitle: 'All-in-One AR Learning Experience (UI/UX Concept, 2050)',
    category: 'UI/UX & Immersive AR',
    year: '2025',
    summary: 'Futuristic AR-based learning application designed to bridge the gap between traditional books and immersive 3D spatial understanding.',
    description: 'A comprehensive speculative UI/UX concept and interaction design architecture. Enhances student education through AR Scan, interactive 3D anatomy & physics models, AI Tutor conversational overlay, Virtual Library spatial cataloging, and Hologram Notes with zero-gravity spatial pinning.',
    metrics: ['Interactive 3D & AR Flow', 'Comprehensive Design System', 'Figma Prototyped'],
    tags: ['UI/UX Design', 'Figma', 'AR / 3D Concept', 'Design Systems', 'Speculative Design'],
    accentColor: '#ec4899',
    demoUrl: 'https://github.com/sandarusanleen',
    repoUrl: 'https://github.com/sandarusanleen',
    previewImage: 'linear-gradient(135deg, #2e091d 0%, #520f32 50%, #ec4899 100%)'
  },
  {
    id: 'carevision-lk',
    title: 'CareVision LK',
    subtitle: 'Intelligent Hospital Security & Surveillance System',
    category: 'AI & Edge Systems',
    year: '2025',
    summary: 'Enterprise-grade, AI-powered surveillance and security management system designed specifically for healthcare environments.',
    description: 'Leverages state-of-the-art Deep Learning models and Edge-Computing architecture to provide real-time zone monitoring across hospital corridors, ICUs, and emergency wings without relying on high-latency cloud video processing. Features custom dashboard UI for security personnel.',
    metrics: ['Edge-Computing Architecture', 'Real-Time Zone Detection', 'Zero High-Latency Cloud Bottlenecks'],
    tags: ['Python', 'Deep Learning', 'Edge Computing', 'System Architecture', 'Computer Vision'],
    accentColor: '#8b5cf6',
    demoUrl: 'https://github.com/sandarusanleen',
    repoUrl: 'https://github.com/sandarusanleen',
    previewImage: 'linear-gradient(135deg, #1b0f2e 0%, #341256 50%, #8b5cf6 100%)'
  },
  {
    id: 'artisync',
    title: 'ARTISYNC Platform',
    subtitle: 'Modern Handcrafted Artisan Discovery Marketplace',
    category: 'Full-Stack Web & Marketplace',
    year: '03/2026 – Present',
    summary: 'A modern web platform bridging the gap between skilled traditional artisans and art enthusiasts worldwide.',
    description: 'Designed and engineered an aesthetic, high-performance marketplace enabling creators to showcase handcrafted works, gain discoverability, and connect directly with collectors. Features responsive dark/light visual identity, artisan profile stores, and smooth cart flows.',
    metrics: ['Artisan Showcase Engine', 'End-to-End Responsive Web', 'Figma to React Workflow'],
    tags: ['React.js', 'Node.js', 'UI/UX Design', 'PostgreSQL', 'Figma', 'Tailwind'],
    accentColor: '#00f0ff',
    demoUrl: 'https://github.com/sandarusanleen',
    repoUrl: 'https://github.com/sandarusanleen',
    previewImage: 'linear-gradient(135deg, #091b2e 0%, #002b4d 50%, #00f0ff 100%)'
  },
  {
    id: 'wonder-routes',
    title: 'Wonder Routes',
    subtitle: 'Interactive Travel Planning & Itinerary Discovery',
    category: 'Frontend & Interactive Web',
    year: '2025',
    summary: 'Interactive web platform designed to help travelers discover unique destinations, plan custom itineraries, and explore travel paths.',
    description: 'Crafted an engaging, visually rich travel planning interface. Enables adventurers to browse curated Sri Lankan and global destinations, assemble custom drag-and-drop daily itineraries, visualize route paths, and preview scenic landmarks with fluid micro-interactions.',
    metrics: ['Interactive Route Mapping', 'Custom Itinerary Assembly', 'Intuitive Travel UX'],
    tags: ['React.js', 'Next.js', 'JavaScript', 'Tailwind CSS', 'Figma', 'UI/UX'],
    accentColor: '#10b981',
    demoUrl: 'https://github.com/sandarusanleen',
    repoUrl: 'https://github.com/sandarusanleen',
    previewImage: 'linear-gradient(135deg, #09261c 0%, #0c4230 50%, #10b981 100%)'
  }
];

export const EXPERIENCE_DATA = [
  {
    role: "Personal Banking Unit Assistant",
    company: "Bank of Ceylon (BOC)",
    location: "Galle, Baddegama",
    period: "09/2023 – 04/2024",
    highlights: [
      "Assisted high-net-worth and retail clients with day-to-day account operations and fixed deposit inquiries.",
      "Processed customer onboarding documentation, ensuring strict compliance with KYC and AML banking regulations.",
      "Executed and managed multi-channel digital campaigns to promote banking products and modern financial services."
    ]
  }
];

export const EDUCATION_DATA = {
  degree: "BSc. (Hons) in Computing & Information Systems",
  institution: "Sabaragamuwa University of Sri Lanka",
  period: "2024 – Present (Undergraduate)",
  alCollege: "St. Aloysius College - Galle",
  alPeriod: "2022",
  alStream: "G.C.E Advanced Level — Physical Science Stream (A B C)",
  softSkills: [
    "Teamwork & Cross-functional Collaboration",
    "Creative Problem Solving",
    "Clear Communication & Presentation",
    "Critical Thinking & Systems Analysis",
    "Adaptability & Fast Learner",
    "Time Management & Sprint Delivery"
  ],
  languages: [
    { name: "English", level: "Professional Working Proficiency" },
    { name: "Sinhala", level: "Native / Bilingual Proficiency" }
  ]
};

export const LAB_EXPERIMENTS = [
  {
    title: 'Holographic AR Component Kit',
    desc: 'Figma component library designed for spatial glassmorphism and AR HUDs.',
    tag: 'UI/UX Design'
  },
  {
    title: 'Zero-G Physics Chamber',
    desc: 'Interactive 2D rigid-body microgravity collision simulation with Matter.js.',
    tag: 'Creative Code'
  },
  {
    title: 'Edge Computer Vision Bench',
    desc: 'Low-latency zone monitoring and object tracking pipeline testing in Python.',
    tag: 'AI / Edge'
  },
  {
    title: 'Artisan Micro-Marketplace API',
    desc: 'RESTful API with relational PostgreSQL schemas and JWT user sessions.',
    tag: 'Backend Systems'
  }
];
