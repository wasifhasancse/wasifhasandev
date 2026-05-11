"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

/* ─── Tabs ──────────────────────────────────────────────── */
const TABS = ["All", "Frontend", "Backend", "Tools", "AI & DevOps"];

/* ─── Tech Data ─────────────────────────────────────────── */
const TECHS = [
  /* ── Frontend ── */
  {
    name: "HTML5",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    color: "#e34f26",
    cat: "Frontend",
  },
  {
    name: "CSS3",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    color: "#1572b6",
    cat: "Frontend",
  },
  {
    name: "JavaScript",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    color: "#f7df1e",
    cat: "Frontend",
  },
  {
    name: "TypeScript",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    color: "#3178c6",
    cat: "Frontend",
  },
  {
    name: "React",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    color: "#61dafb",
    cat: "Frontend",
  },
  {
    name: "Next.js",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    color: "#ffffff",
    cat: "Frontend",
  },
  {
    name: "Redux",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    color: "#764abc",
    cat: "Frontend",
  },
  {
    name: "Tailwind CSS",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    color: "#38bdf8",
    cat: "Frontend",
  },

  /* ── Backend ── */
  {
    name: "Node.js",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    color: "#83cd29",
    cat: "Backend",
  },
  {
    name: "Express.js",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    color: "#ffffff",
    cat: "Backend",
  },
  {
    name: "MongoDB",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    color: "#4db380",
    cat: "Backend",
  },
  {
    name: "Mongoose",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original.svg",
    color: "#880000",
    cat: "Backend",
  },
  {
    name: "Firebase",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    color: "#ffca28",
    cat: "Backend",
  },
  {
    name: "JWT Auth",
    url: null,
    glyph: "🔐",
    color: "#a855f7",
    cat: "Backend",
  },
  {
    name: "REST API",
    url: null,
    glyph: "⚡",
    color: "#38bdf8",
    cat: "Backend",
  },

  /* ── Tools ── */
  {
    name: "Git",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    color: "#f05032",
    cat: "Tools",
  },
  {
    name: "GitHub",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    color: "#e2e8f0",
    cat: "Tools",
  },
  {
    name: "VS Code",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    color: "#007acc",
    cat: "Tools",
  },
  {
    name: "Vercel",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
    color: "#ffffff",
    cat: "Tools",
  },
  {
    name: "Postman",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
    color: "#ff6c37",
    cat: "Tools",
  },
  {
    name: "npm",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
    color: "#cb3837",
    cat: "Tools",
  },
  {
    name: "Figma",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    color: "#f24e1e",
    cat: "Tools",
  },

  /* ── AI & DevOps ── */
  {
    name: "Claude AI",
    url: null,
    glyph: "✦",
    color: "#c9a97a",
    cat: "AI & DevOps",
  },
  {
    name: "GitHub Copilot",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    color: "#8250df",
    cat: "AI & DevOps",
  },
  {
    name: "ChatGPT",
    url: null,
    glyph: "🧠",
    color: "#10a37f",
    cat: "AI & DevOps",
  },
  {
    name: "Cursor IDE",
    url: null,
    glyph: "◈",
    color: "#6e6e6e",
    cat: "AI & DevOps",
  },
];

/* ─── Easing & Variants ─────────────────────────────────── */
const expo = [0.16, 1, 0.3, 1];

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, delay, ease: expo },
  },
});

const stagger = (d = 0) => ({
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: d } },
});

const cardVariant = {
  hidden: { opacity: 0, scale: 0.88, y: 14 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 260, damping: 22 },
  },
  exit: { opacity: 0, scale: 0.85, y: 10, transition: { duration: 0.18 } },
};

/* ─── Category accent colours ───────────────────────────── */
const CAT_META = {
  Frontend: { accent: "#61dafb", short: "FE" },
  Backend: { accent: "#4db380", short: "BE" },
  Tools: { accent: "#ff6c37", short: "" },
  "AI & DevOps": { accent: "#c084fc", short: "AI" },
};

/* ─── Tech Card ─────────────────────────────────────────── */
function TechCard({ tech }) {
  const catAccent = CAT_META[tech.cat]?.accent ?? "#a855f7";

  return (
    <motion.div
      layout
      variants={cardVariant}
      whileHover={{ y: -5, scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 280, damping: 20 }}
      className="group relative flex flex-col items-center gap-3 p-5 rounded-2xl border border-white/6 bg-[#0c0818] cursor-default select-none overflow-hidden"
    >
      {/* Hover border glow */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          boxShadow: `inset 0 0 0 1px ${tech.color}30, 0 0 22px ${tech.color}0d`,
        }}
      />

      {/* Top accent line on hover */}
      <div
        className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `linear-gradient(90deg, transparent, ${tech.color}80, transparent)`,
        }}
      />

      {/* Category badge */}
      <span
        className="absolute top-2.5 right-2.5 font-mono text-[8px] tracking-widest uppercase px-1.5 py-0.5 rounded-md"
        style={{ color: catAccent, background: `${catAccent}14` }}
      >
        {CAT_META[tech.cat]?.short || tech.cat}
      </span>

      {/* Icon */}
      <div className="w-10 h-10 flex items-center justify-center shrink-0">
        {tech.url ? (
          <motion.div
            className="relative w-10 h-10 grayscale-60 group-hover:grayscale-0 transition-all duration-300"
            whileHover={{ rotate: [0, -6, 6, 0] }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src={tech.url}
              alt={tech.name}
              fill
              sizes="40px"
              className="object-contain"
              unoptimized
            />
          </motion.div>
        ) : (
          <motion.span
            className="text-2xl leading-none select-none"
            whileHover={{ rotate: [0, -10, 10, 0] }}
            transition={{ duration: 0.4 }}
          >
            {tech.glyph}
          </motion.span>
        )}
      </div>

      {/* Name */}
      <span className="font-mono text-[11px] font-semibold tracking-wide uppercase text-center text-gray-500 group-hover:text-white transition-colors duration-200 leading-tight">
        {tech.name}
      </span>

      {/* Accent dot */}
      <motion.span
        className="w-1.5 h-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: tech.color, boxShadow: `0 0 6px ${tech.color}` }}
      />
    </motion.div>
  );
}

/* ─── Main Section ──────────────────────────────────────── */
export default function TechMarquee() {
  const [activeTab, setActiveTab] = useState("All");

  const filtered =
    activeTab === "All" ? TECHS : TECHS.filter((t) => t.cat === activeTab);

  return (
    <section className="relative py-24 bg-[#060412] overflow-hidden">
      {/* Ambient glow */}
      <motion.div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-70 rounded-full"
        animate={{ opacity: [0.06, 0.13, 0.06], scale: [1, 1.08, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-full h-full rounded-full bg-[radial-gradient(ellipse,#7c3aed,transparent_60%)]" />
      </motion.div>

      {/* Grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.022]"
        style={{
          backgroundImage:
            "linear-gradient(#a855f7 1px,transparent 1px),linear-gradient(90deg,#a855f7 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* ── Header ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={stagger(0)}
          className="text-center mb-12"
        >
          <motion.div
            variants={fadeUp(0)}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <span className="h-px w-10 bg-linear-to-r from-transparent to-violet-500/50" />
            <span className="font-mono text-[11px] tracking-[.18em] uppercase text-violet-400/70">
              Tech Stack
            </span>
            <span className="h-px w-10 bg-linear-to-l from-transparent to-violet-500/50" />
          </motion.div>

          <motion.h2
            variants={fadeUp(0.06)}
            className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-3"
          >
            Tools I{" "}
            <motion.span
              className="bg-linear-to-br from-violet-400 to-fuchsia-500 bg-clip-text text-transparent"
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{ backgroundSize: "200% 200%" }}
            >
              Work With
            </motion.span>
          </motion.h2>

          <motion.p
            variants={fadeUp(0.12)}
            className="text-gray-500 max-w-md mx-auto text-[13.5px] leading-relaxed"
          >
            Every technology I&apos;ve learned across both course programmes —
            organised by category so you can see exactly where I specialise.
          </motion.p>
        </motion.div>

        {/* ── Tab Bar ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: expo }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {TABS.map((tab) => {
            const isActive = activeTab === tab;
            const count =
              tab === "All" ? null : TECHS.filter((t) => t.cat === tab).length;
            return (
              <motion.button
                key={tab}
                onClick={() => setActiveTab(tab)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
                className="relative px-5 py-2 rounded-full font-mono text-[11px] tracking-widest uppercase font-semibold transition-colors duration-200 overflow-hidden"
              >
                {isActive && (
                  <motion.span
                    layoutId="tab-pill"
                    className="absolute inset-0 rounded-full bg-linear-to-r from-violet-600 to-fuchsia-500"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {!isActive && (
                  <span className="absolute inset-0 rounded-full border border-white/8 bg-white/3" />
                )}
                <span
                  className={`relative z-10 flex items-center gap-1.5 transition-colors duration-200 ${isActive ? "text-white" : "text-gray-500 hover:text-gray-300"}`}
                >
                  {tab}
                  {count !== null && (
                    <span
                      className={`font-mono text-[9px] ${isActive ? "text-white/60" : "text-gray-600"}`}
                    >
                      {count}
                    </span>
                  )}
                </span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* ── Tech Grid ── */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((tech) => (
              <TechCard key={tech.name} tech={tech} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* ── Category legend (All tab only) ── */}
        <AnimatePresence>
          {activeTab === "All" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.4 }}
              className="flex flex-wrap justify-center gap-5 mt-8"
            >
              {Object.entries(CAT_META).map(([cat, { accent }]) => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className="flex items-center gap-2 group"
                >
                  <span
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{
                      background: accent,
                      boxShadow: `0 0 6px ${accent}`,
                    }}
                  />
                  <span className="font-mono text-[10px] tracking-widest uppercase text-gray-600 group-hover:text-gray-300 transition-colors">
                    {cat}
                  </span>
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Stats ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger(0.08)}
          className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto"
        >
          {[
            { num: "25+", label: "Technologies" },
            { num: "50+", label: "Projects Built" },
            { num: "2", label: "Courses" },
            { num: "3yrs+", label: "Experience" },
          ].map(({ num, label }) => (
            <motion.div
              key={label}
              variants={fadeUp(0)}
              whileHover={{
                borderColor: "rgba(168,85,247,.3)",
                backgroundColor: "rgba(139,92,246,.06)",
                y: -3,
              }}
              className="flex flex-col items-center gap-1.5 py-5 rounded-2xl border border-white/6 bg-white/3 transition-colors duration-200"
            >
              <motion.span
                className="text-2xl font-extrabold bg-linear-to-br from-violet-300 to-fuchsia-400 bg-clip-text text-transparent"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                {num}
              </motion.span>
              <span className="font-mono text-[10px] tracking-widest uppercase text-gray-600">
                {label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
