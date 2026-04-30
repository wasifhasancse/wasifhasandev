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
  { name: "React", icon: FaReact, color: "#22d3ee" },
  { name: "Next.js", icon: RiNextjsFill, color: "#a78bfa" },
  { name: "JavaScript", icon: RiJavascriptFill, color: "#f472b6" },
  { name: "Node.js", icon: FaNodeJs, color: "#22d3ee" },
  { name: "Express", icon: SiExpress, color: "#a78bfa" },
  { name: "MongoDB", icon: SiMongodb, color: "#22d3ee" },
  { name: "Firebase", icon: SiFirebase, color: "#f472b6" },
  { name: "Tailwind", icon: RiTailwindCssFill, color: "#22d3ee" },
  { name: "HTML", icon: FaHtml5, color: "#f472b6" },
  { name: "CSS", icon: FaCss3Alt, color: "#a78bfa" },
  { name: "Git", icon: FaGitAlt, color: "#22d3ee" },
  { name: "VS Code", icon: VscVscode, color: "#a78bfa" },
  { name: "Figma", icon: FaFigma, color: "#f472b6" },
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
    highlights: ["Classroom Delivery", "Lab Sessions", "Programming", "CS Fundamentals"],
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
    highlights: ["Programming", "Databases", "IT Fundamentals", "Project Supervision"],
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
    highlights: ["Algorithms", "OOP", "Database Systems", "Software Engineering"],
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
    a: "Wasif works across React, Next.js, Node.js, Express, MongoDB, Firebase, and modern UI animation tools.",
  },
  {
    q: "What kind of projects?",
    a: "Mostly full-stack web apps, interactive interfaces, and developer-focused products with polished UX.",
  },
  {
    q: "How to collaborate?",
    a: "Use the contact section or connect through GitHub and LinkedIn for freelance or collaboration.",
  },
  {
    q: "What makes this portfolio different?",
    a: "It blends storytelling, custom interactions, and animation engineering instead of template-style layout blocks.",
  },
];

export const aboutStats = [
  { label: "Projects Built", value: 28, icon: FaFire },
  { label: "Practice Hours", value: 1800, icon: RiJavascriptFill },
  { label: "Professional Roles", value: 3, icon: FaReact },
];
