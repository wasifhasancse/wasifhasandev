import {
  FaCss3Alt,
  FaFigma,
  FaFire,
  FaGitAlt,
  FaHtml5,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import {
  RiJavascriptFill,
  RiNextjsFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import { SiExpress, SiFirebase, SiMongodb } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export const navItems = [
  ["home", "Home"],
  ["story", "Story"],
  ["experience", "Journey"],
  ["skills", "Skills"],
  ["projects", "Projects"],
  ["github", "GitHub"],
  ["contact", "Contact"],
];

export const storySteps = [
  {
    year: "2022",
    title: "First Professional Frontend Work",
    text: "Joined Onito Technologies as a React Developer and learned production workflows, reusable components, and team delivery standards.",
  },
  {
    year: "2023",
    title: "Moved into Teaching and Mentorship",
    text: "Started supporting learners as a Web Instructor (Trainee), helping students debug projects and strengthening my own engineering fundamentals.",
  },
  {
    year: "2024 - Present",
    title: "Full-Stack Product Execution",
    text: "Working as a Web Instructor while building full-stack applications with Next.js, Node.js, and MongoDB, with strong focus on performance and UX quality.",
  },
];

export const skillNodes = [
  {
    name: "React",
    icon: FaReact,
    color: "#22d3ee",
    category: "Frontend",
    level: "Advanced",
  },
  {
    name: "Next.js",
    icon: RiNextjsFill,
    color: "#a78bfa",
    category: "Frontend",
    level: "Advanced",
  },
  {
    name: "JavaScript",
    icon: RiJavascriptFill,
    color: "#f472b6",
    category: "Language",
    level: "Advanced",
  },
  {
    name: "Node.js",
    icon: FaNodeJs,
    color: "#22d3ee",
    category: "Backend",
    level: "Advanced",
  },
  {
    name: "Express",
    icon: SiExpress,
    color: "#a78bfa",
    category: "Backend",
    level: "Advanced",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "#22d3ee",
    category: "Database",
    level: "Advanced",
  },
  {
    name: "Firebase",
    icon: SiFirebase,
    color: "#f472b6",
    category: "Backend",
    level: "Intermediate",
  },
  {
    name: "Tailwind CSS",
    icon: RiTailwindCssFill,
    color: "#22d3ee",
    category: "Frontend",
    level: "Advanced",
  },
  {
    name: "HTML",
    icon: FaHtml5,
    color: "#f472b6",
    category: "Frontend",
    level: "Advanced",
  },
  {
    name: "CSS",
    icon: FaCss3Alt,
    color: "#a78bfa",
    category: "Frontend",
    level: "Advanced",
  },
  {
    name: "Git",
    icon: FaGitAlt,
    color: "#22d3ee",
    category: "Tooling",
    level: "Advanced",
  },
  {
    name: "VS Code",
    icon: VscVscode,
    color: "#a78bfa",
    category: "Tooling",
    level: "Advanced",
  },
  {
    name: "Figma",
    icon: FaFigma,
    color: "#f472b6",
    category: "Design",
    level: "Intermediate",
  },
  {
    name: "REST API",
    icon: SiExpress,
    color: "#22d3ee",
    category: "Backend",
    level: "Advanced",
  },
  {
    name: "State Management",
    icon: FaReact,
    color: "#a78bfa",
    category: "Frontend",
    level: "Intermediate",
  },
  {
    name: "UI Prototyping",
    icon: FaFigma,
    color: "#f472b6",
    category: "Design",
    level: "Intermediate",
  },
];

export const commandItems = [
  { title: "Go to Story", target: "story" },
  { title: "Go to Journey", target: "experience" },
  { title: "Go to Skills", target: "skills" },
  { title: "Go to Projects", target: "projects" },
  { title: "Go to GitHub", target: "github" },
  { title: "Go to Contact", target: "contact" },
];

export const experienceItems = [
  {
    title: "Guest Instructor - Computer Science & Technology",
    org: "Thakurgaon Polytechnic Institute, Thakurgaon",
    period: "Aug 2025 - Feb 2026 (One Semester)",
    description:
      "Conducted lectures and practical lab sessions for Diploma in Engineering students.",
    details: [
      "Taught core programming and computer science concepts.",
      "Assisted students in developing practical coding skills and software logic.",
    ],
    highlights: [
      "Classroom Delivery",
      "Lab Sessions",
      "Programming",
      "CS Fundamentals",
    ],
  },
  {
    title: "Instructor - Computer Science & Technology",
    org: "Social Polytechnic Institute, Thakurgaon",
    period: "Jan 2024 - Jul 2025",
    description:
      "Delivered academic courses related to programming, databases, and IT fundamentals.",
    details: [
      "Supervised student projects and evaluated lab-based performance.",
      "Guided students in software development practices and problem solving.",
    ],
    highlights: [
      "Programming",
      "Databases",
      "IT Fundamentals",
      "Project Supervision",
    ],
  },
  {
    title: "Senior Trainer - IT Training",
    org: "Aptouch Computer, Thakurgaon",
    period: "Jan 2022 - Present",
    isCurrent: true,
    description:
      "Provided professional training in Adobe Photoshop, Illustrator, and Microsoft Office.",
    details: [
      "Trained students in computer fundamentals, application development basics, and internet usage.",
      "Helped learners develop practical digital and productivity skills.",
    ],
    highlights: ["Photoshop", "Illustrator", "MS Office", "Digital Skills"],
  },
];

export const educationItems = [
  {
    title: "BSc in Computer Science",
    org: "Undergraduate Program",
    period: "Ongoing",
    description:
      "Building a strong academic foundation in software engineering, algorithmic thinking, and systems-level problem solving.",
    details: [
      "Studying core areas including data structures, algorithms, OOP, and database systems.",
      "Applying coursework concepts through practical web application projects.",
      "Developing stronger analytical and architectural thinking for real software systems.",
    ],
    highlights: [
      "Algorithms",
      "OOP",
      "Database Systems",
      "Software Engineering",
    ],
  },
  {
    title: "Programming Hero - Complete Web Development",
    org: "Project-Based Professional Training",
    period: "Completed Milestones",
    description:
      "Completed an intensive project-based track covering modern frontend, backend, and deployment workflows.",
    details: [
      "Built responsive frontend interfaces with React and Next.js.",
      "Developed backend services using Node.js, Express, MongoDB, and Firebase.",
      "Delivered capstone projects with version control, testing mindset, and deployment practice.",
    ],
    highlights: ["React", "Next.js", "Node.js", "MongoDB", "Deployment"],
  },
];

export const aiAnswers = [
  {
    q: "What stack does Wasif use?",
    a: "Frontend: React 19, Next.js 16 with App Router, Framer Motion, Tailwind CSS v4. Backend: Node.js, Express. Database: MongoDB, Firebase. Tools: GSAP, Lenis, Playwright. Always focused on modern, performant, and animated experiences.",
  },
  {
    q: "What's your development approach?",
    a: "Full-stack focused with emphasis on UX/animation engineering. Builds interactive, component-driven applications with custom micro-interactions. Practices test-driven development and maintains clean, semantic code. Loves optimizing performance and creating memorable user experiences.",
  },
  {
    q: "What kind of projects do you build?",
    a: "Full-stack web applications with polished interfaces, real-time dashboards, admin panels, developer tools, and interactive portfolios. Specializes in animation-heavy sites, e-commerce platforms, SaaS products, and data visualization applications.",
  },
  {
    q: "How do you approach collaboration?",
    a: "Open to freelance projects, contract work, and full-time roles. Communicates clearly, values feedback, and uses agile methodologies. Available via GitHub, LinkedIn, or the contact form. Timezone: Asia/Dhaka. Prefers remote opportunities.",
  },
  {
    q: "What makes your portfolio different?",
    a: "Authentic storytelling with genuine project experience, not template layouts. Custom animations using Framer Motion and GSAP, magnetic interactions, orbital skill visualizations, and a focus on craft and detail. Every element serves the narrative.",
  },
  {
    q: "Tell me about your experience?",
    a: "3+ years in full-stack development with roles as Frontend Lead, Full Stack Developer, and Technical Lead. Built 28+ projects, mentored developers, and shipped production applications. Strong foundation in JavaScript/React ecosystem with growing expertise in system design and team leadership.",
  },
];

export const aboutStats = [
  { label: "Projects Built", value: 28, icon: FaFire },
  { label: "Practice Hours", value: 1800, icon: RiJavascriptFill },
  { label: "Professional Roles", value: 3, icon: FaReact },
];

export const aboutProfile = {
  intro:
    "I am Wasif Hasan, a full-stack developer and educator who enjoys turning complex ideas into clean, human-centered digital products. My journey started with curiosity about how web interfaces work, then grew into professional delivery, mentoring, and product-focused engineering.",
  journey:
    "From frontend-focused work to end-to-end product building, I learned through real client needs, teaching responsibilities, and consistent project shipping. Building and explaining concepts to learners sharpened both my technical depth and communication style.",
  workEnjoy:
    "I enjoy crafting interactive UIs, architecting practical backend flows, and improving performance where users can feel the difference. I am especially motivated by products that need both engineering discipline and thoughtful UX decisions.",
  hobbies:
    "Outside programming, I enjoy mentoring students, exploring design trends, reading about product strategy, and staying active through sports and long walks. These habits keep my perspective fresh and improve my problem-solving mindset.",
  personalityTraits: [
    "Calm under pressure",
    "Curious and detail-oriented",
    "Collaborative communicator",
    "Growth-focused builder",
  ],
};
