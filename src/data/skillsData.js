export const skillCategories = [
  {
    id: "frontend",
    title: "Frontend & UI Engineering",
    subtitle: "Modern, interactive, and responsive user interfaces",
    icon: "Layout",
    skills: [
      { name: "React.js", level: 85, tag: "Library", experience: "2+ Years" },
      { name: "JavaScript (ES6+)", level: 90, tag: "Language", experience: "3+ Years" },
      { name: "Tailwind CSS", level: 95, tag: "Styling", experience: "2+ Years" },
      { name: "HTML5 & CSS3", level: 95, tag: "Markup", experience: "3+ Years" },
      { name: "Next.js", level: 75, tag: "Framework", experience: "Exploring" },
      { name: "Bootstrap 5", level: 90, tag: "Framework", experience: "3+ Years" }
    ]
  },
  {
    id: "backend",
    title: "Backend & Database",
    subtitle: "Robust server logic, security, and structured data storage",
    icon: "Server",
    skills: [
      { name: "Laravel Framework", level: 88, tag: "Framework", experience: "2+ Years" },
      { name: "PHP", level: 85, tag: "Language", experience: "2+ Years" },
      { name: "MySQL", level: 88, tag: "Relational DB", experience: "2+ Years" },
      { name: "Node.js", level: 78, tag: "Runtime", experience: "1+ Years" },
      { name: "Supabase", level: 82, tag: "PostgreSQL & BaaS", experience: "1+ Years" },
      { name: "Firebase", level: 80, tag: "NoSQL DB", experience: "1+ Years" }
    ]
  },
  {
    id: "mobile_iot",
    title: "Mobile App & IoT Systems",
    subtitle: "Cross-platform mobile applications & microcontroller sensors",
    icon: "Cpu",
    skills: [
      { name: "Flutter", level: 82, tag: "Framework", experience: "1+ Years" },
      { name: "Dart", level: 80, tag: "Language", experience: "1+ Years" },
      { name: "ESP32", level: 85, tag: "Microcontroller", experience: "1+ Years" },
      { name: "C++ (Arduino/PlatformIO)", level: 75, tag: "Firmware", experience: "1+ Years" },
      { name: "PIR / DHT Sensors", level: 88, tag: "Hardware Interfacing", experience: "1+ Years" }
    ]
  },
  {
    id: "tools",
    title: "Workflow, Tooling & DevOps",
    subtitle: "Collaboration, version control, testing, and modern build pipelines",
    icon: "GitBranch",
    skills: [
      { name: "Git & GitHub", level: 90, tag: "Version Control", experience: "3+ Years" },
      { name: "Postman", level: 85, tag: "API Testing", experience: "2+ Years" },
      { name: "RESTful APIs", level: 92, tag: "Architecture", experience: "2+ Years" },
      { name: "Figma", level: 80, tag: "UI/UX Prototyping", experience: "2+ Years" },
      { name: "Vite", level: 90, tag: "Build Tool", experience: "2+ Years" }
    ]
  }
];

export const allTechStackFlat = [
  { name: "React.js", category: "Frontend", level: "Advanced" },
  { name: "Next.js", category: "Frontend", level: "Intermediate" },
  { name: "JavaScript", category: "Language", level: "Advanced" },
  { name: "Tailwind CSS", category: "Styling", level: "Advanced" },
  { name: "HTML5", category: "Frontend", level: "Expert" },
  { name: "CSS3", category: "Frontend", level: "Expert" },
  { name: "PHP", category: "Backend", level: "Advanced" },
  { name: "Laravel", category: "Backend", level: "Advanced" },
  { name: "MySQL", category: "Database", level: "Advanced" },
  { name: "Flutter", category: "Mobile", level: "Intermediate" },
  { name: "Dart", category: "Language", level: "Intermediate" },
  { name: "ESP32", category: "IoT", level: "Intermediate" },
  { name: "Node.js", category: "Backend", level: "Intermediate" },
  { name: "Git", category: "DevOps", level: "Advanced" },
  { name: "GitHub", category: "DevOps", level: "Advanced" },
  { name: "Supabase", category: "Database", level: "Intermediate" }
];
