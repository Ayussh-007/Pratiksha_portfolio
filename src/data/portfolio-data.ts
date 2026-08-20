import { Project, Skill, Experience, Service, Testimonial, StatItem, ThemeAccentConfig } from "@/types";

export const PERSONAL_INFO = {
  name: "Pratiksha Naik",
  age: "19",
  degree: "B.Tech in Artificial Intelligence and Data Science",
  shortDegree: "B.Tech in AI & DS",
  club: "CogniScience Club",
  title: "B.Tech in AI & DS Student | CogniScience Club | Robotics & Creative Developer",
  shortRole: "B.Tech AI & DS Student",
  college: "Shah & Anchor Kutchhi Engineering College",
  collegeShort: "SAKEC, Mumbai",
  tagline: "Exploring Artificial Intelligence, robotics, and emerging technologies to build solutions with meaningful real-world impact.",
  bio: "I’m a 19-year-old student pursuing B.Tech in Artificial Intelligence and Data Science at Shah & Anchor Kutchhi Engineering College, and an active member of the CogniScience Club. I’m passionate about technology, problem-solving, and practical solutions. I combine technical foundations in C/C++, Java, Python, Web Development, DBMS, SQL, and DSA with creative UI/UX design and Canva.",
  values: "I believe technical knowledge is only one part of becoming a successful professional. I strongly value communication, teamwork, leadership, and public speaking, enjoying collaboration, taking responsibility, and continuously improving.",
  location: "Mumbai, India",
  timezone: "Asia/Kolkata",
  utcOffset: "+05:30",
  email: "pratiksha.naik25@sakec.ac.in",
  instagramUrl: "https://instagram.com/pratikshaa_naik",
  instagramHandle: "@pratikshaa_naik",
  githubUrl: "https://github.com/Ayussh-007/Disaster_rover",
  roverGithubUrl: "https://github.com/Ayussh-007/Disaster_rover",
  linkedinUrl: "https://www.linkedin.com/in/pratiksha-naik-8a3b85408",
  linkedinHandle: "Pratiksha Naik",
  resumeUrl: "#resume",
  avatarUrl: "/photo/pratiksha.png",
  availabilityStatus: "Open for Opportunities & Projects",
  availableForFreelance: true,
};

export const ACCENT_THEMES: Record<string, ThemeAccentConfig> = {
  violet: {
    key: "violet",
    name: "Cyber Violet",
    primaryColor: "#a855f7",
    secondaryColor: "#06b6d4",
    glowClass: "from-purple-500/20 via-pink-500/10 to-transparent",
    borderClass: "hover:border-purple-500/50 border-purple-500/20",
    textAccentClass: "text-purple-400",
    bgAccentClass: "bg-purple-500",
  },
  cyan: {
    key: "cyan",
    name: "Electric Cyan",
    primaryColor: "#06b6d4",
    secondaryColor: "#3b82f6",
    glowClass: "from-cyan-500/20 via-blue-500/10 to-transparent",
    borderClass: "hover:border-cyan-500/50 border-cyan-500/20",
    textAccentClass: "text-cyan-400",
    bgAccentClass: "bg-cyan-500",
  },
  emerald: {
    key: "emerald",
    name: "Aurora Emerald",
    primaryColor: "#10b981",
    secondaryColor: "#06b6d4",
    glowClass: "from-emerald-500/20 via-teal-500/10 to-transparent",
    borderClass: "hover:border-emerald-500/50 border-emerald-500/20",
    textAccentClass: "text-emerald-400",
    bgAccentClass: "bg-emerald-500",
  },
  amber: {
    key: "amber",
    name: "Solar Amber",
    primaryColor: "#f59e0b",
    secondaryColor: "#ef4444",
    glowClass: "from-amber-500/20 via-orange-500/10 to-transparent",
    borderClass: "hover:border-amber-500/50 border-amber-500/20",
    textAccentClass: "text-amber-400",
    bgAccentClass: "bg-amber-500",
  },
  rose: {
    key: "rose",
    name: "Neon Rose",
    primaryColor: "#f43f5e",
    secondaryColor: "#a855f7",
    glowClass: "from-rose-500/20 via-purple-500/10 to-transparent",
    borderClass: "hover:border-rose-500/50 border-rose-500/20",
    textAccentClass: "text-rose-400",
    bgAccentClass: "bg-rose-500",
  },
};

export const PROJECTS: Project[] = [
  {
    id: "ai-disaster-rover",
    title: "AI Disaster Assessment Rover",
    tagline: "Wirelessly Controlled Sensor-Equipped Robotic Vehicle for Emergency Rescue",
    description: "Designed to navigate hazardous and structurally compromised disaster zones (collapsed structures, chemical leaks, fire incidents, earthquake debris) prior to human entry.",
    longDescription: "The AI Disaster Assessment Rover is an autonomous and wirelessly controlled robotic platform built for emergency first responders. It navigates extreme terrain to capture environmental telemetry (hazardous gas levels, thermal spikes, toxic leakage), structural collapse risks, and human-vitality signatures. The primary mission is to provide emergency rescue teams with real-time, life-saving intelligence before humans enter dangerous zones.",
    category: "ai",
    categoryLabel: "AI & Robotics",
    thumbnail: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1000&auto=format&fit=crop",
    gradient: "from-amber-600/30 via-orange-600/20 to-red-500/20",
    liveUrl: "https://github.com/Ayussh-007/Disaster_rover",
    githubUrl: "https://github.com/Ayussh-007/Disaster_rover",
    tags: ["Robotics", "Python", "Sensors & Telemetry", "C/C++", "Wireless Control", "Emergency AI"],
    metrics: [
      { label: "Deployment", value: "First Response" },
      { label: "Control", value: "Wireless Telemetry" },
      { label: "Assessment", value: "Vitality & Structural" }
    ],
    features: [
      "Wireless remote control and multi-directional rover navigation through rugged debris",
      "Multi-sensor array collecting environmental data (gas detection, temperature, humidity)",
      "Structural assessment and hazard mapping in collapsed or compromised buildings",
      "Human-vitality data collection to pinpoint survivor locations for rescue teams",
      "Real-time data streaming to help rescue teams make safer deployment decisions"
    ],
    featured: true,
    bentoSpan: "col-span-2"
  },
  {
    id: "dbms-sql-platform",
    title: "Database Management & SQL Engine",
    tagline: "Relational Database Modeling, Query Optimization & System Schema Design",
    description: "Structured relational database system featuring normalized schemas, complex SQL query execution, transaction integrity, and automated data reporting.",
    longDescription: "Implemented comprehensive relational database architectures utilizing SQL, stored procedures, indexing, and DBMS best practices. Designed for data consistency and reliable query retrieval across multi-entity data models.",
    category: "fullstack",
    categoryLabel: "DBMS & SQL",
    thumbnail: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=1000&auto=format&fit=crop",
    gradient: "from-cyan-600/30 via-blue-600/20 to-indigo-500/20",
    liveUrl: "#",
    githubUrl: "https://github.com/Ayussh-007/Disaster_rover",
    tags: ["SQL", "DBMS", "Database Design", "Python", "Data Modeling"],
    metrics: [
      { label: "Architecture", value: "Relational DBMS" },
      { label: "Data Integrity", value: "ACID Compliant" },
      { label: "Query", value: "Optimized SQL" }
    ],
    features: [
      "Normalized relational database schema design (3NF/BCNF)",
      "Advanced SQL queries with multi-table joins, subqueries, and views",
      "Transaction management ensuring ACID compliance and zero data loss",
      "Integration with Python data processing pipelines"
    ],
    featured: true,
    bentoSpan: "col-span-1",
    year: "2025"
  },
  {
    id: "uiux-canva-design-studio",
    title: "UI/UX & Visual Design Lab",
    tagline: "User Interface Prototyping, Wireframes & Digital Media with Canva",
    description: "Creative design portfolio blending intuitive UI/UX design with visual storytelling, interactive web prototypes, and Canva digital assets.",
    longDescription: "Combining technical understanding with visual empathy to craft intuitive user experiences. Includes wireframing, high-fidelity mockups, responsive web interface design, and Canva visual branding assets.",
    category: "uiux",
    categoryLabel: "UI/UX & Canva",
    thumbnail: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=1000&auto=format&fit=crop",
    gradient: "from-pink-600/30 via-rose-600/20 to-purple-500/20",
    liveUrl: "https://instagram.com/pratikshaa_naik",
    githubUrl: "#",
    tags: ["UI/UX Design", "Canva", "Wireframing", "Web Design", "Figma"],
    metrics: [
      { label: "Focus", value: "User Experience" },
      { label: "Design Tools", value: "Canva & UI/UX" },
      { label: "Approach", value: "Tech + Creativity" }
    ],
    features: [
      "Modern Bento grid interface layouts and responsive web components",
      "High-contrast visual design systems with accessible typography and palettes",
      "Digital media assets and presentations crafted with Canva",
      "User-centered prototyping balancing aesthetic appeal with practical usability"
    ],
    featured: true,
    bentoSpan: "col-span-1",
    year: "2025"
  },
  {
    id: "dsa-algorithms-suite",
    title: "DSA & Problem Solving Suite",
    tagline: "Core Data Structures & Algorithmic Implementations in C/C++, Java & Python",
    description: "Comprehensive implementation of fundamental and advanced data structures (Trees, Graphs, Dynamic Programming, Sorting) with time and space complexity optimization.",
    longDescription: "Built a solid repository of algorithmic solutions solving real-world computational challenges. Implemented custom data structures in C/C++, Java, and Python with rigorous test cases analyzing algorithmic efficiency.",
    category: "fullstack",
    categoryLabel: "DSA & Algorithms",
    thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop",
    gradient: "from-emerald-600/30 via-teal-600/20 to-slate-900",
    liveUrl: "#",
    githubUrl: "#",
    tags: ["C/C++", "Java", "Python", "Data Structures", "Algorithms", "Problem Solving"],
    metrics: [
      { label: "Languages", value: "C++, Java, Python" },
      { label: "Core Topics", value: "DSA & Optimization" },
      { label: "Focus", value: "Problem Solving" }
    ],
    features: [
      "Efficient implementations of Trees, Graphs, Hash Tables, and Linked Lists",
      "Divide & Conquer, Greedy, and Dynamic Programming algorithms",
      "Time and space complexity profiling (Big-O analysis)",
      "Clean modular code adhering to standard programming paradigms"
    ],
    featured: true,
    bentoSpan: "col-span-2",
    year: "2024"
  }
];

export const SKILLS: Skill[] = [
  // Programming & Core Languages
  { name: "Python", category: "backend", iconName: "Terminal", level: "Proficient", levelPercentage: 92, featured: true, color: "#3776ab" },
  { name: "Java", category: "backend", iconName: "Code2", level: "Proficient", levelPercentage: 88, featured: true, color: "#f89820" },
  { name: "C / C++", category: "backend", iconName: "Cpu", level: "Proficient", levelPercentage: 86, featured: true, color: "#00599c" },
  { name: "Data Structures & Algorithms (DSA)", category: "backend", iconName: "Workflow", level: "Core Strength", levelPercentage: 90, featured: true, color: "#a855f7" },
  
  // Database & AI
  { name: "DBMS", category: "backend", iconName: "Database", level: "Proficient", levelPercentage: 88, featured: true, color: "#336791" },
  { name: "SQL", category: "backend", iconName: "Database", level: "Proficient", levelPercentage: 90, featured: true, color: "#00758f" },
  { name: "Artificial Intelligence & Data Science", category: "backend", iconName: "Sparkles", level: "B.Tech Major", levelPercentage: 92, featured: true, color: "#10b981" },
  { name: "Robotics & Telemetry", category: "tools", iconName: "Zap", level: "Project Lead", levelPercentage: 88, featured: true, color: "#f59e0b" },
  
  // Web & Design
  { name: "Web Development", category: "frontend", iconName: "Layers", level: "Proficient", levelPercentage: 86, featured: true, color: "#38bdf8" },
  { name: "UI/UX Design", category: "design", iconName: "Layout", level: "Creative Focus", levelPercentage: 88, featured: true, color: "#ec4899" },
  { name: "Canva", category: "design", iconName: "Palette", level: "Expert", levelPercentage: 94, featured: true, color: "#00c4cc" },
  
  // Leadership & Strengths
  { name: "Communication & Public Speaking", category: "tools", iconName: "MessageSquare", level: "Strength", levelPercentage: 95, featured: true, color: "#6366f1" },
  { name: "Teamwork & Leadership", category: "tools", iconName: "Users", level: "Strength", levelPercentage: 95, featured: true, color: "#14b8a6" },
  { name: "CogniScience Club Member", category: "tools", iconName: "Award", level: "Active Member", levelPercentage: 92, featured: true, color: "#f43f5e" },
];

export const EXPERIENCES: Experience[] = [
  {
    id: "edu-1",
    role: "B.Tech in Artificial Intelligence and Data Science",
    company: "Shah & Anchor Kutchhi Engineering College (SAKEC)",
    companyUrl: "https://www.shahandanchor.com",
    location: "Mumbai, India",
    period: "Undergraduate",
    isCurrent: true,
    description: "Pursuing B.Tech in Artificial Intelligence and Data Science, building strong foundations in computing, machine learning, algorithms, and practical engineering solutions.",
    achievements: [
      "Developed the AI Disaster Assessment Rover for emergency first responders and hazardous environments.",
      "Proficient in C/C++, Java, Python, Web Development, DBMS, SQL, and DSA.",
      "Active participant in technical presentations, teamwork, and collaborative engineering projects."
    ],
    technologies: ["B.Tech AI & DS", "Python", "Java", "C/C++", "SQL", "DBMS", "DSA", "Robotics"],
    badgeColor: "text-purple-400 bg-purple-500/10 border-purple-500/30"
  },
  {
    id: "club-1",
    role: "Active Member & Contributor",
    company: "CogniScience Club — SAKEC",
    companyUrl: "#about",
    location: "Mumbai",
    period: "Active",
    isCurrent: true,
    description: "Contributing to the CogniScience Club at Shah & Anchor Kutchhi Engineering College, engaging in AI/ML discussions, workshops, and student tech initiatives.",
    achievements: [
      "Participated in club discussions on emerging AI technologies and cognitive science applications.",
      "Collaborated on multidisciplinary tech projects and student-led learning sessions.",
      "Organized and contributed to interactive presentations and team events."
    ],
    technologies: ["CogniScience Club", "Artificial Intelligence", "Public Speaking", "Teamwork", "Leadership"],
    badgeColor: "text-pink-400 bg-pink-500/10 border-pink-500/30"
  }
];

export const SERVICES: Service[] = [
  {
    id: "srv-ai-robotics",
    title: "AI & Robotics Solutions",
    shortDesc: "Developing intelligent autonomous prototypes and sensor-driven hardware/software systems.",
    description: "Building systems like the AI Disaster Assessment Rover that utilize sensors, wireless control, and intelligent data processing for real-world impact.",
    iconName: "Cpu",
    features: ["Wireless Telemetry & Sensor Arrays", "Python & Embedded C/C++ Logic", "Hazardous Environment Navigation", "Emergency Response Systems"],
    accentColor: "from-amber-500 to-orange-500"
  },
  {
    id: "srv-software-dsa",
    title: "Software & Database Engineering",
    shortDesc: "Solid foundation in C/C++, Java, Python, SQL, DBMS, and Data Structures & Algorithms.",
    description: "Writing clean, optimized code and designing relational database schemas for reliable data management and computational problem-solving.",
    iconName: "Code",
    features: ["Relational Database Design & SQL", "Data Structures & Algorithm Optimization", "Object-Oriented Programming (Java/C++)", "Python Data Processing"],
    accentColor: "from-blue-500 to-indigo-500"
  },
  {
    id: "srv-uiux-canva",
    title: "UI/UX Design & Canva Creative",
    shortDesc: "Combining creativity with technology for intuitive user interfaces and impactful visuals.",
    description: "Designing user-centered web layouts, wireframes, digital assets, and presentations using UI/UX principles and Canva.",
    iconName: "LayoutGrid",
    features: ["Bento Grid & Web UI Layouts", "Canva Graphics & Presentations", "User-Centered Wireframing", "Visual Storytelling for Tech"],
    accentColor: "from-pink-500 to-purple-500"
  },
  {
    id: "srv-leadership",
    title: "Team Leadership & Communication",
    shortDesc: "Public speaking, clear technical communication, and collaborative project execution.",
    description: "Enthusiastic about taking responsibility, leading team efforts, and presenting ideas clearly to make a tangible difference.",
    iconName: "Users",
    features: ["Technical Public Speaking", "CogniScience Club Member", "Cross-Functional Collaboration", "Continuous Learning & Growth"],
    accentColor: "from-emerald-500 to-teal-500"
  }
];

export const STATS: StatItem[] = [
  {
    id: "stat-age",
    label: "Degree & College",
    value: 19,
    suffix: " Yrs",
    description: "B.Tech in AI & DS • SAKEC Mumbai",
    iconName: "Clock",
    accent: "text-purple-400"
  },
  {
    id: "stat-project",
    label: "Key Robotics Project",
    value: 1,
    suffix: " Rover",
    description: "AI Disaster Assessment Rover for emergency teams",
    iconName: "Rocket",
    accent: "text-cyan-400"
  },
  {
    id: "stat-skills",
    label: "Core Skill Domains",
    value: 8,
    suffix: "+",
    description: "C/C++, Java, Python, Web, DBMS, SQL, DSA, UI/UX",
    iconName: "Award",
    accent: "text-emerald-400"
  },
  {
    id: "stat-values",
    label: "CogniScience & Pillars",
    value: 4,
    suffix: " Pillars",
    description: "Communication, Teamwork, Leadership & Public Speaking",
    iconName: "GitCommit",
    accent: "text-rose-400"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Pratiksha Naik",
    role: "B.Tech in AI & DS • CogniScience Club",
    company: "Shah & Anchor Kutchhi Engineering College",
    avatar: "/photo/pratiksha.png",
    content: "Technical knowledge is only one part of becoming a successful professional. I strongly value communication, teamwork, leadership, and public speaking to turn ideas into practical solutions that make a meaningful real-world impact.",
    rating: 5,
    badge: "Core Philosophy"
  }
];

export const PLAYLIST_TRACKS = [
  {
    id: "night-changes",
    title: "Night Changes",
    artist: "One Direction",
    album: "FOUR",
    spotifyUrl: "https://open.spotify.com/track/5O2P9iiztwhomNh8xkR9lJ?si=9315f64ca9cb45d1",
    coverUrl: "/assets/images/atmosfeer.jpeg",
    duration: "3:46",
    bpm: "120 BPM",
    vibe: "Favorite Track • Acoustic Melody"
  }
];

export const TERMINAL_HELP = `
🚀 PRATIKSHA NAIK PORTFOLIO TERMINAL
B.Tech in Artificial Intelligence and Data Science
Shah & Anchor Kutchhi Engineering College | CogniScience Club

Commands:
  about       - View education, B.Tech AI & DS, SAKEC & bio
  rover       - AI Disaster Assessment Rover project details & GitHub link
  skills      - C/C++, Java, Python, Web Dev, DBMS, SQL, DSA, UI/UX, Canva
  club        - CogniScience Club activities & contributions
  strengths   - Communication, Leadership, Teamwork & Public Speaking
  instagram   - Instagram profile (@pratikshaa_naik)
  github      - Rover Git Repository (Ayussh-007/Disaster_rover)
  email       - Direct official email (pratiksha.naik25@sakec.ac.in)
  clear       - Clear the terminal console
`;
