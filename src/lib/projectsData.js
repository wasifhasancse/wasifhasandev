export const featuredProjects = [
  {
    slug: "taskflow-pro",
    name: "TaskFlow Pro",
    image: "/projects/taskflow-pro.svg",
    detailsLabel: "View Details",
    stack: ["Next.js 16", "React 19", "Node.js", "MongoDB", "Tailwind CSS"],
    description:
      "A productivity platform for teams to manage tasks, sprints, and delivery timelines with role-based dashboards and real-time status updates.",
    liveLink: "https://taskflow-pro-demo.vercel.app",
    githubClientLink: "https://github.com/wasifhasancse/taskflow-pro-client",
    challenges: [
      "Designing nested drag-and-drop task movement across multiple sprint states.",
      "Keeping optimistic UI updates in sync with server confirmations.",
      "Balancing dashboard performance with heavy filtered queries.",
    ],
  },
  {
    slug: "edupulse-lms",
    name: "EduPulse LMS",
    image: "/projects/edupulse-lms.svg",
    detailsLabel: "View More",
    stack: [
      "Next.js 16",
      "Firebase Auth",
      "Express",
      "MongoDB",
      "Framer Motion",
    ],
    description:
      "A learning management system with course enrollment, progress tracking, quiz workflows, and instructor analytics for engagement and completion.",
    liveLink: "https://edupulse-lms-demo.vercel.app",
    githubClientLink: "https://github.com/wasifhasancse/edupulse-lms-client",
    challenges: [
      "Building secure role-based views for students and instructors in one app shell.",
      "Handling long-running quiz sessions without losing local progress.",
      "Creating a reusable module structure for courses, lessons, and assessments.",
    ],
  },
  {
    slug: "neon-commerce",
    name: "Neon Commerce",
    image: "/projects/neon-commerce.svg",
    detailsLabel: "View Details",
    stack: ["React", "Redux Toolkit", "Stripe", "Node.js", "Tailwind CSS"],
    description:
      "A modern e-commerce storefront focused on fast browsing, smooth checkout, and conversion-friendly UI with strong visual branding.",
    liveLink: "https://neon-commerce-demo.vercel.app",
    githubClientLink: "https://github.com/wasifhasancse/neon-commerce-client",
    challenges: [
      "Maintaining cart state consistency across guest and signed-in sessions.",
      "Implementing responsive product filtering without UI lag.",
      "Designing a checkout flow with clear validation and minimal friction.",
    ],
  },
];

export function getFeaturedProjectBySlug(slug) {
  return featuredProjects.find((project) => project.slug === slug);
}
