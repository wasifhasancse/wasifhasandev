"use client";

import {
    AnimatePresence,
    motion,
    useMotionValue,
    useSpring,
    useTransform,
} from "framer-motion";
import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import {
    FaChevronLeft,
    FaChevronRight,
    FaExternalLinkAlt,
    FaGithub,
} from "react-icons/fa";

const ALL_PROJECTS = [
  {
    id: "01",
    title: "Spine — Online Book Borrowing Platform",
    desc: "A full-stack online book borrowing platform built with React and Node.js/Express backend. Features user authentication, book catalog management, and borrow/return workflows.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    link: "https://github.com/wasifhasancse/Spine-Online-Book-Borrowing-Platform",
    live: "https://spine-online-book-borrowing-platfor.vercel.app/",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    accent: "#a855f7",
    tag: "Full Stack",
  },
  {
    id: "02",
    title: "Pixgen — AI Image Gallery",
    desc: "An AI-powered image gallery where users can generate, browse, and manage AI-created images. Built with a modern React frontend integrated with AI image generation APIs.",
    tech: ["React", "Node.js", "AI API", "Tailwind"],
    link: "https://github.com/wasifhasancse/Pixgen-AI-Image-Gallery",
    live: "https://github.com/wasifhasancse/Pixgen-AI-Image-Gallery",
    image:
      "https://opengraph.githubassets.com/1/wasifhasancse/Pixgen-AI-Image-Gallery",
    accent: "#3b82f6",
    tag: "AI App",
  },
  {
    id: "03",
    title: "Payoo — Payment System",
    desc: "A web-based payment system interface with a clean, intuitive UI for managing transactions and payment workflows, designed for seamless user experience.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/wasifhasancse/payoo-payment-system",
    live: "https://github.com/wasifhasancse/payoo-payment-system",
    image:
      "https://opengraph.githubassets.com/1/wasifhasancse/payoo-payment-system",
    accent: "#22c55e",
    tag: "FinTech",
  },
  {
    id: "04",
    title: "TechWave Podcast Website",
    desc: "A responsive podcast website for TechWave featuring episode listings, audio playback, and a modern layout built for an engaging tech listening experience.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/wasifhasancse/TechWave-Podcast-Website",
    live: "https://github.com/wasifhasancse/TechWave-Podcast-Website",
    image:
      "https://opengraph.githubassets.com/1/wasifhasancse/TechWave-Podcast-Website",
    accent: "#f97316",
    tag: "Media",
  },
  {
    id: "05",
    title: "Express CRUD — Full Stack App",
    desc: "A complete CRUD application with a React frontend and Express.js backend demonstrating RESTful API design, MongoDB integration, and clean separation of concerns.",
    tech: ["React", "Express.js", "MongoDB", "Node.js"],
    link: "https://github.com/wasifhasancse/Express-CRUD-Frontend",
    live: "https://github.com/wasifhasancse/Express-CRUD-Frontend",
    image:
      "https://opengraph.githubassets.com/1/wasifhasancse/Express-CRUD-Frontend",
    accent: "#eab308",
    tag: "Full Stack",
  },
];

const PER_PAGE = 3;
const TOTAL_PAGES = Math.ceil(ALL_PROJECTS.length / PER_PAGE);

const EXPO = [0.16, 1, 0.3, 1];

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.75, delay, ease: EXPO },
  },
});

const stagger = (delay = 0) => ({
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: delay } },
});

const cardVariant = {
  hidden: { opacity: 0, y: 48, scale: 0.94, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease: EXPO },
  },
  exit: {
    opacity: 0,
    y: 24,
    scale: 0.96,
    filter: "blur(4px)",
    transition: { duration: 0.35, ease: "easeIn" },
  },
};

function ProjectCard({ project }) {
  const ref = useRef(null);
  const [hovered, setHovered] = useState(false);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 90, damping: 14 });
  const sry = useSpring(ry, { stiffness: 90, damping: 14 });
  const rotX = useTransform(srx, (v) => v + "deg");
  const rotY = useTransform(sry, (v) => v + "deg");

  const onMove = useCallback(
    (e) => {
      const r = ref.current.getBoundingClientRect();
      rx.set(-((e.clientY - r.top) / r.height - 0.5) * 13);
      ry.set(((e.clientX - r.left) / r.width - 0.5) * 13);
    },
    [rx, ry],
  );

  const onLeave = useCallback(() => {
    rx.set(0);
    ry.set(0);
    setHovered(false);
  }, [rx, ry]);

  return (
    <motion.article
      ref={ref}
      variants={cardVariant}
      style={{
        rotateX: rotX,
        rotateY: rotY,
        transformStyle: "preserve-3d",
        perspective: 900,
      }}
      onMouseMove={onMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={onLeave}
      className="relative group flex flex-col"
    >
      <motion.div
        className="absolute -inset-px rounded-3xl pointer-events-none"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, " +
            project.accent +
            "28, transparent 70%)",
        }}
      />
      <div
        className="relative bg-[#0c0818] rounded-3xl overflow-hidden border transition-colors duration-300 flex flex-col h-full"
        style={{
          borderColor: hovered
            ? project.accent + "38"
            : "rgba(255,255,255,0.05)",
        }}
      >
        <div className="relative h-52 overflow-hidden shrink-0">
          <motion.div
            className="absolute inset-0 z-10 pointer-events-none"
            animate={{ opacity: hovered ? 0 : 1 }}
            transition={{ duration: 0.5 }}
            style={{
              background:
                "linear-gradient(135deg, " + project.accent + "30, #060412aa)",
            }}
          />
          <motion.div
            className="relative w-full h-full"
            animate={{ scale: hovered ? 1.08 : 1 }}
            transition={{ duration: 0.7, ease: EXPO }}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
              unoptimized
            />
          </motion.div>
          <span
            className="absolute top-4 left-5 font-mono font-black text-[42px] leading-none z-20 select-none pointer-events-none"
            style={{ color: project.accent + "22" }}
          >
            {project.id}
          </span>
          <motion.span
            className="absolute top-4 right-4 z-20 font-mono text-[10px] tracking-widest uppercase px-3 py-1 rounded-full border"
            style={{
              color: project.accent,
              borderColor: project.accent + "40",
              backgroundColor: project.accent + "15",
            }}
            animate={hovered ? { scale: 1.06 } : { scale: 1 }}
          >
            {project.tag}
          </motion.span>
          <div className="absolute bottom-0 left-0 right-0 h-16 z-10 bg-linear-to-t from-[#0c0818] to-transparent" />
        </div>

        <div className="p-6 pt-4 flex flex-col flex-1">
          <div className="flex flex-wrap gap-1.5 mb-3.5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="font-mono text-[10px] px-2.5 py-1 rounded-lg border"
                style={{
                  color: project.accent + "cc",
                  borderColor: project.accent + "25",
                  backgroundColor: project.accent + "0c",
                }}
              >
                {t}
              </span>
            ))}
          </div>
          <motion.h3
            className="text-[18px] font-bold leading-snug mb-2 transition-colors duration-300"
            style={{ color: hovered ? project.accent : "#fff" }}
          >
            {project.title}
          </motion.h3>
          <p className="text-gray-500 text-[13px] leading-[1.75] mb-5 line-clamp-3 flex-1">
            {project.desc}
          </p>
          <div className="flex items-center justify-between pt-4 border-t border-white/5 mt-auto">
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-semibold text-[13px] text-white"
            >
              <motion.span
                className="flex items-center gap-1.5"
                whileHover={{ x: 3 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Live Demo
                <motion.span
                  style={{ color: project.accent }}
                  animate={{ x: [0, 4, 0] }}
                  transition={{
                    duration: 1.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="flex items-center"
                >
                  <FaExternalLinkAlt size={11} />
                </motion.span>
              </motion.span>
            </a>
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 font-mono text-[11px] text-gray-500 hover:text-gray-300 transition-colors"
            >
              <FaGithub size={13} />
              GitHub
            </a>
          </div>
        </div>

        <motion.div
          className="absolute bottom-0 left-0 h-0.5"
          style={{
            background:
              "linear-gradient(90deg, " + project.accent + ", transparent)",
          }}
          animate={{ width: hovered ? "100%" : "0%" }}
          transition={{ duration: 0.5, ease: EXPO }}
        />
      </div>
    </motion.article>
  );
}

function PageBtn({ active, onClick, children }) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.93 }}
      className="relative w-9 h-9 rounded-xl flex items-center justify-center font-mono text-[13px] font-bold overflow-hidden transition-colors duration-200"
      style={{
        color: active ? "#fff" : "rgba(255,255,255,0.35)",
        border: active ? "none" : "1px solid rgba(255,255,255,0.08)",
        background: active ? undefined : "transparent",
      }}
    >
      {active && (
        <motion.span
          layoutId="page-pill"
          className="absolute inset-0 rounded-xl bg-linear-to-br from-violet-600 to-fuchsia-500"
          transition={{ type: "spring", stiffness: 340, damping: 28 }}
        />
      )}
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}

export default function Projects() {
  const [page, setPage] = useState(0);
  const [dir, setDir] = useState(1);

  const goTo = (next) => {
    setDir(next > page ? 1 : -1);
    setPage(next);
  };

  const pageProjects = ALL_PROJECTS.slice(
    page * PER_PAGE,
    page * PER_PAGE + PER_PAGE,
  );
  const start = page * PER_PAGE + 1;
  const end = Math.min(start + PER_PAGE - 1, ALL_PROJECTS.length);

  return (
    <section
      id="projects"
      className="relative py-28 px-6 bg-[#060412] overflow-hidden"
    >
      <motion.div
        className="pointer-events-none absolute top-1/3 -right-32 w-120 h-120 rounded-full"
        animate={{ scale: [1, 1.1, 1], opacity: [0.12, 0.2, 0.12] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-full h-full rounded-full bg-[radial-gradient(circle,#7c3aed,transparent_65%)]" />
      </motion.div>
      <motion.div
        className="pointer-events-none absolute bottom-0 -left-16 w-90 h-90 rounded-full"
        animate={{ scale: [1, 1.12, 1], opacity: [0.08, 0.16, 0.08] }}
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      >
        <div className="w-full h-full rounded-full bg-[radial-gradient(circle,#a855f7,transparent_65%)]" />
      </motion.div>

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.027]"
        style={{
          backgroundImage:
            "linear-gradient(#a855f7 1px,transparent 1px),linear-gradient(90deg,#a855f7 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger(0)}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16"
        >
          <div>
            <motion.div
              variants={fadeUp(0)}
              className="flex items-center gap-3 mb-4"
            >
              <span className="h-px w-10 bg-linear-to-r from-transparent to-violet-500/50" />
              <span className="font-mono text-[11px] tracking-[.18em] uppercase text-violet-400/70">
                Featured Works
              </span>
            </motion.div>
            <motion.h2
              variants={fadeUp(0.06)}
              className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.1]"
            >
              Selected{" "}
              <motion.span
                className="bg-linear-to-br from-violet-400 to-fuchsia-500 bg-clip-text text-transparent"
                style={{ backgroundSize: "200% 200%" }}
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                Projects
              </motion.span>
            </motion.h2>
          </div>

          <motion.div variants={fadeUp(0.1)} className="md:text-right max-w-xs">
            <p className="text-gray-400 text-[13.5px] leading-relaxed">
              High-performance web apps built with the MERN stack and modern
              frontend tools.
            </p>
            <motion.a
              href="https://github.com/wasifhasancse"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-[12px] text-violet-400 mt-3 hover:text-violet-300 transition-colors"
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaGithub size={12} />
              View all on GitHub →
            </motion.a>
          </motion.div>
        </motion.div>

        <div className="relative min-h-115">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={page}
              custom={dir}
              variants={{
                hidden: (d) => ({ opacity: 0, x: d * 70, filter: "blur(6px)" }),
                visible: {
                  opacity: 1,
                  x: 0,
                  filter: "blur(0px)",
                  transition: {
                    duration: 0.5,
                    ease: EXPO,
                    staggerChildren: 0.1,
                    delayChildren: 0.05,
                  },
                },
                exit: (d) => ({
                  opacity: 0,
                  x: d * -70,
                  filter: "blur(6px)",
                  transition: { duration: 0.3, ease: "easeIn" },
                }),
              }}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
            >
              {pageProjects.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp(0.15)}
          className="mt-12 flex flex-col items-center gap-5"
        >
          <p className="font-mono text-[11px] text-gray-500">
            Showing{" "}
            <span className="text-violet-400 font-semibold">
              {start}–{end}
            </span>{" "}
            of{" "}
            <span className="text-violet-400 font-semibold">
              {ALL_PROJECTS.length}
            </span>{" "}
            projects
          </p>

          <div className="flex items-center gap-2">
            <motion.button
              onClick={() => page > 0 && goTo(page - 1)}
              disabled={page === 0}
              whileHover={page > 0 ? { scale: 1.08 } : {}}
              whileTap={page > 0 ? { scale: 0.93 } : {}}
              className="w-9 h-9 rounded-xl flex items-center justify-center border border-white/8 transition-colors duration-200 disabled:opacity-25"
            >
              <FaChevronLeft size={12} className="text-gray-400" />
            </motion.button>

            {Array.from({ length: TOTAL_PAGES }, (_, i) => (
              <PageBtn key={i} active={i === page} onClick={() => goTo(i)}>
                {i + 1}
              </PageBtn>
            ))}

            <motion.button
              onClick={() => page < TOTAL_PAGES - 1 && goTo(page + 1)}
              disabled={page === TOTAL_PAGES - 1}
              whileHover={page < TOTAL_PAGES - 1 ? { scale: 1.08 } : {}}
              whileTap={page < TOTAL_PAGES - 1 ? { scale: 0.93 } : {}}
              className="w-9 h-9 rounded-xl flex items-center justify-center border border-white/8 transition-colors duration-200 disabled:opacity-25"
            >
              <FaChevronRight size={12} className="text-gray-400" />
            </motion.button>
          </div>

          <div className="flex gap-1.5 items-center">
            {Array.from({ length: TOTAL_PAGES }, (_, i) => (
              <motion.button
                key={i}
                onClick={() => goTo(i)}
                className="rounded-full"
                animate={{
                  width: i === page ? 24 : 6,
                  background: i === page ? "#a855f7" : "rgba(168,85,247,0.22)",
                }}
                style={{ height: 6 }}
                transition={{ duration: 0.35, ease: EXPO }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
