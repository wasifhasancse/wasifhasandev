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
  ["skills", "Skills"],
  ["projects", "Projects"],
  ["github", "GitHub"],
  ["contact", "Contact"],
];

export const storySteps = [
  {
    year: "2023",
    title: "Started Building Daily",
    text: "Turned curiosity into consistency by shipping small UI and JavaScript experiments every week.",
  },
  {
    year: "2024",
    title: "Full-Stack Focus",
    text: "Moved from frontend prototypes into production-like full-stack apps with APIs, auth, and databases.",
  },
  {
    year: "2025+",
    title: "Polished Product Mindset",
    text: "Focused on performance, interactions, and storytelling-driven interfaces that feel premium.",
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
  { title: "Go to Skills", target: "skills" },
  { title: "Go to Projects", target: "projects" },
  { title: "Go to GitHub", target: "github" },
  { title: "Go to Contact", target: "contact" },
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
  { label: "Projects", value: 28, icon: FaFire },
  { label: "Hours Coding", value: 1800, icon: RiJavascriptFill },
  { label: "Tech Tools", value: 18, icon: FaReact },
];
