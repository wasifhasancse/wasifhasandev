"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import {
    FaBriefcase,
    FaGithub,
    FaGraduationCap,
    FaLayerGroup,
    FaMapMarkerAlt,
} from "react-icons/fa";
import { SiReaddotcv } from "react-icons/si";

const GITHUB_AVATAR = "https://avatars.githubusercontent.com/u/172745014?v=4";

const stats = [
  { num: "50+", label: "Projects Built" },
  { num: "3+", label: "Yrs Experience" },
  { num: "100%", label: "Client Focused" },
];

const cards = [
  {
    Icon: FaGraduationCap,
    label: "Education",
    val: "BSc in Computer Science & Engineering",
    sub: "Hajee Mohammad Danesh Science & Technology University · 2020 – 2025",
    accent: "#a855f7",
  },
  {
    Icon: FaLayerGroup,
    label: "Specialization",
    val: "MERN Stack & Next.js",
    sub: "Full-Stack Development",
    accent: "#f59e0b",
  },
  {
    Icon: FaMapMarkerAlt,
    label: "Location",
    val: "Bangladesh",
    sub: "Open to Remote Worldwide",
    accent: "#3b82f6",
  },
  {
    Icon: FaBriefcase,
    label: "Availability",
    val: "Full-time · Remote · Freelance",
    sub: "Available to start immediately",
    accent: "#22c55e",
  },
  {
    Icon: FaGithub,
    label: "GitHub",
    val: "52+ Public Repositories",
    sub: "626 contributions in the last year",
    accent: "#c084fc",
    span: true,
  },
];

const skills = [
  "Next.js",
  "React",
  "Node.js",
  "MongoDB",
  "Express",
  "Tailwind",
];

const expo = [0.16, 1, 0.3, 1];

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 36, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.75, delay, ease: expo },
  },
});

const stagger = (delayChildren = 0) => ({
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren } },
});

const skillVariant = {
  hidden: { opacity: 0, x: -14 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 260, damping: 20 },
  },
};

/* ─── 3-D Interactive Tilt Card ─────────────────────────── */
function TiltCard({ children, className }) {
  const ref = useRef(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 140, damping: 18 });
  const sry = useSpring(ry, { stiffness: 140, damping: 18 });
  const rotX = useTransform(srx, (v) => `${v}deg`);
  const rotY = useTransform(sry, (v) => `${v}deg`);

  const onMove = (e) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    rx.set(-py * 16);
    ry.set(px * 16);
  };

  const onLeave = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{
        rotateX: rotX,
        rotateY: rotY,
        transformStyle: "preserve-3d",
        perspective: 1200,
      }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Animated Stat Card ────────────────────────────────── */
function StatBadge({ num, label, delay }) {
  return (
    <motion.div
      variants={fadeUp(delay)}
      whileHover={{ scale: 1.06, y: -3 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="flex flex-col items-center justify-center p-3.5 sm:p-4 rounded-2xl border border-violet-500/20 bg-[#0f0b1e]/60 backdrop-blur-md shadow-lg shadow-violet-950/20 group min-w-[95px] sm:min-w-[110px]"
    >
      <motion.span
        className="text-2xl sm:text-3xl font-black bg-linear-to-r from-violet-200 via-fuchsia-300 to-violet-400 bg-clip-text text-transparent group-hover:scale-105 transition-transform"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 14, delay }}
        viewport={{ once: true }}
      >
        {num}
      </motion.span>
      <span className="text-[10px] sm:text-[11px] font-mono tracking-wider uppercase text-gray-400 group-hover:text-violet-300 transition-colors mt-0.5 text-center">
        {label}
      </span>
    </motion.div>
  );
}

/* ─── Main ──────────────────────────────────────────────── */
export default function About() {
  return (
    <section
      id="about"
      className="relative py-28 px-6 bg-[#060412] overflow-hidden"
    >
      {/* Ambient orbs */}
      <motion.div
        className="pointer-events-none absolute top-1/4 -left-40 w-120 h-120 rounded-full"
        animate={{ scale: [1, 1.1, 1], opacity: [0.18, 0.28, 0.18] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-full h-full rounded-full bg-[radial-gradient(circle,#5b21b6,transparent_65%)]" />
      </motion.div>
      <motion.div
        className="pointer-events-none absolute bottom-0 right-0 w-90 h-90 rounded-full"
        animate={{ scale: [1, 1.15, 1], opacity: [0.14, 0.24, 0.14] }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      >
        <div className="w-full h-full rounded-full bg-[radial-gradient(circle,#a855f7,transparent_65%)]" />
      </motion.div>

      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#a855f7 1px,transparent 1px),linear-gradient(90deg,#a855f7 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp(0)}
          className="flex items-center gap-3 mb-16"
        >
          <span className="h-px flex-1 max-w-12 bg-linear-to-r from-transparent to-violet-500/50" />
          <span className="font-mono text-[11px] tracking-[.18em] uppercase text-violet-400/70">
            About Me
          </span>
          <span className="h-px w-8 bg-violet-500/30" />
        </motion.div>

        {/* Main 2-col layout */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-16 lg:gap-20">
          {/* ── Left: Avatar Presentation ── */}
          <motion.div
            className="w-full lg:w-auto shrink-0 flex flex-col items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger(0)}
          >
            {/* Avatar card with multi-layer 3D tilt */}
            <motion.div variants={fadeUp(0)}>
              <TiltCard className="relative w-72 h-72 sm:w-84 sm:h-84 md:w-96 md:h-96 group select-none">
                {/* 1. Deep Neon Aura Glow */}
                <motion.div
                  className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-r from-violet-600 via-fuchsia-600 to-indigo-600 opacity-30 blur-2xl group-hover:opacity-60 transition-opacity duration-500"
                  animate={{ scale: [1, 1.04, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* 2. Outer Rotating Cyber Conic Border */}
                <motion.div
                  className="absolute -inset-[3px] rounded-[2.2rem]"
                  style={{
                    background:
                      "conic-gradient(from 0deg, #7c3aed, #ec4899, #8b5cf6, #3b82f6, #7c3aed)",
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                />

                {/* 3. Main Glass Frame */}
                <div
                  className="relative z-10 w-full h-full rounded-[2rem] p-3 bg-[#0a0618]/90 backdrop-blur-2xl border border-white/10 overflow-hidden shadow-2xl flex flex-col"
                  style={{ transform: "translateZ(20px)" }}
                >
                  {/* Portrait Image Container */}
                  <div className="relative w-full h-full rounded-[1.6rem] overflow-hidden bg-[#060412]">
                    <Image
                      src={GITHUB_AVATAR}
                      alt="Wasif Hasan"
                      priority
                      sizes="(max-width: 768px) 300px, 384px"
                      fill
                      className="object-cover object-[center_15%] group-hover:scale-108 transition-transform duration-700 ease-out"
                    />

                    {/* Gradient Overlay Vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#060412]/80 via-transparent to-transparent pointer-events-none" />

                    {/* Futuristic Cyber Laser Scanline Beam */}
                    <motion.div
                      className="absolute left-0 right-0 h-16 bg-gradient-to-b from-transparent via-violet-400/25 to-transparent pointer-events-none border-b border-violet-400/50 shadow-[0_0_12px_rgba(168,85,247,0.5)]"
                      animate={{ top: ["-20%", "120%"] }}
                      transition={{
                        duration: 3.5,
                        repeat: Infinity,
                        ease: "linear",
                        repeatDelay: 1.5,
                      }}
                    />

                    {/* Futuristic HUD Corner Crosshairs */}
                    <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-violet-400/70 pointer-events-none" />
                    <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-violet-400/70 pointer-events-none" />
                    <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-violet-400/70 pointer-events-none" />
                    <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-violet-400/70 pointer-events-none" />
                  </div>
                </div>

                {/* ── 3D Floating Badges (Floating above frame) ── */}

                {/* Badge 1: Top-Right "Available for Work" */}
                <motion.div
                  className="absolute -top-4 -right-3 sm:-top-5 sm:-right-4 z-30 pointer-events-auto"
                  style={{ transform: "translateZ(60px)" }}
                  animate={{ y: [0, -7, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  whileHover={{ scale: 1.08 }}
                >
                  <div className="flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-2xl bg-[#0f0b1e]/90 border border-emerald-500/40 backdrop-blur-xl shadow-xl shadow-emerald-950/30">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                    <span className="font-mono text-[11px] sm:text-xs font-semibold text-emerald-300 whitespace-nowrap">
                      Available for Work
                    </span>
                  </div>
                </motion.div>

                {/* Badge 2: Top-Left "Full Stack Dev" */}
                <motion.div
                  className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 z-30 pointer-events-auto"
                  style={{ transform: "translateZ(50px)" }}
                  animate={{ y: [0, 6, 0] }}
                  transition={{
                    duration: 3.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                  whileHover={{ scale: 1.08 }}
                >
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-2xl bg-[#0f0b1e]/90 border border-violet-500/40 backdrop-blur-xl shadow-xl shadow-violet-950/30">
                    <span className="text-violet-400 text-xs">⚡</span>
                    <span className="font-mono text-[10.5px] sm:text-[11px] font-bold text-violet-200 whitespace-nowrap">
                      Full-Stack Dev
                    </span>
                  </div>
                </motion.div>

                {/* Badge 3: Bottom Identity Chip "@wasifhasancse" */}
                <motion.div
                  className="absolute -bottom-5 left-1/2 -translate-x-1/2 z-30 pointer-events-auto"
                  style={{ transform: "translateZ(70px)" }}
                  animate={{ y: [0, -4, 0] }}
                  transition={{
                    duration: 2.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.2,
                  }}
                  whileHover={{ scale: 1.06 }}
                >
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#0a0618]/95 border border-violet-500/40 backdrop-blur-xl shadow-2xl shadow-violet-950/50">
                    <FaGithub className="text-violet-400 text-sm" />
                    <span className="font-mono text-xs font-semibold text-violet-200 tracking-wide">
                      @wasifhasancse
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
                  </div>
                </motion.div>
              </TiltCard>
            </motion.div>

            {/* Stats row */}
            <motion.div
              variants={stagger(0.3)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex gap-3 sm:gap-4 mt-6 justify-center flex-wrap"
            >
              {stats.map((s, i) => (
                <StatBadge
                  key={s.label}
                  num={s.num}
                  label={s.label}
                  delay={0.3 + i * 0.1}
                />
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right: Content ── */}
          <motion.div
            className="flex-1 text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger(0.05)}
          >
            {/* Headline */}
            <motion.h2
              variants={fadeUp(0)}
              className="text-4xl md:text-5xl font-extrabold text-white leading-[1.1] tracking-tight mb-6"
            >
              Engineering digital solutions <br className="hidden md:block" />
              with{" "}
              <motion.span
                className="bg-linear-to-br from-violet-400 to-fuchsia-500 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 5, repeat: Infinity }}
                style={{ backgroundSize: "200% 200%" }}
              >
                precision & purpose.
              </motion.span>
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={fadeUp(0.08)}
              className="text-gray-400 text-[15px] leading-[1.85] mb-8 max-w-xl"
            >
              I&apos;m{" "}
              <span className="text-violet-200 font-medium">Wasif Hasan</span>,
              a{" "}
              <span className="text-violet-200 font-medium">
                Full Stack Developer
              </span>{" "}
              with 3+ years of experience specializing in{" "}
              <span className="text-violet-200 font-medium">
                MERN Stack &amp; Next.js
              </span>
              . I build responsive UIs, secure REST APIs, and production-ready
              full stack apps — with a strong focus on scalable architecture,
              clean code, and reliable backend systems. Based in Bangladesh and
              open to full-time, remote &amp; freelance opportunities.
            </motion.p>

            {/* Skill pills */}
            <motion.div
              variants={stagger(0.12)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap gap-2 mb-10"
            >
              {skills.map((s) => (
                <motion.span
                  key={s}
                  variants={skillVariant}
                  whileHover={{
                    scale: 1.07,
                    y: -2,
                    borderColor: "rgba(168,85,247,.6)",
                  }}
                  className="px-3.5 py-1.5 rounded-full font-mono text-[12px] text-violet-300 bg-violet-500/8 border border-violet-500/20 cursor-default"
                >
                  {s}
                </motion.span>
              ))}
            </motion.div>

            {/* Info cards grid */}
            <motion.div
              variants={stagger(0.16)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-3"
            >
              {cards.map((c, i) => (
                <motion.div
                  key={c.label}
                  whileHover={{
                    scale: 1.04,
                    borderColor: `${c.accent}55`,
                    backgroundColor: `${c.accent}0d`,
                    y: -3,
                  }}
                  className={`p-4 rounded-2xl border border-white/6 bg-white/3 cursor-default relative overflow-hidden group${
                    c.span ? " col-span-2" : ""
                  }`}
                >
                  {/* accent corner glow */}
                  <div
                    className="absolute -top-8 -right-8 w-20 h-20 rounded-full opacity-20 blur-2xl pointer-events-none"
                    style={{ background: c.accent }}
                  />
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <motion.span
                      className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: `${c.accent}18` }}
                      animate={{ rotate: [0, 8, -8, 0] }}
                      transition={{
                        duration: 3.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.6,
                      }}
                    >
                      <c.Icon size={14} style={{ color: c.accent }} />
                    </motion.span>
                    <p
                      className="text-[10px] uppercase tracking-widest font-mono"
                      style={{ color: `${c.accent}bb` }}
                    >
                      {c.label}
                    </p>
                  </div>
                  <p className="text-white font-semibold text-[13px] leading-snug mb-1">
                    {c.val}
                  </p>
                  {c.sub && (
                    <p className="text-gray-500 font-mono text-[11px] leading-relaxed">
                      {c.sub}
                    </p>
                  )}
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              variants={fadeUp(0.45)}
              className="mt-10 flex gap-3 flex-wrap"
            >
              {/* Primary: Download CV — filled pill */}
              <motion.a
                href="https://drive.google.com/uc?export=download&id=1-niu5eaHn5rGDQOG6xNdLocVwWrA8L56"
                download
                className="relative inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full font-mono font-bold text-[13px] text-white overflow-hidden group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
              >
                <motion.span
                  className="absolute inset-0 bg-linear-to-br from-violet-600 to-fuchsia-500"
                  animate={{ opacity: [1, 0.82, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <motion.span
                  className="absolute inset-0 rounded-full"
                  animate={{
                    boxShadow: [
                      "0 0 14px rgba(139,92,246,.35)",
                      "0 0 28px rgba(139,92,246,.62)",
                      "0 0 14px rgba(139,92,246,.35)",
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <span className="relative z-10 flex items-center gap-2">
                  <SiReaddotcv /> Download Resume
                  <motion.span
                    animate={{ y: [0, 3, 0] }}
                    transition={{ duration: 1.4, repeat: Infinity }}
                    className="flex items-center"
                  >
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 5v14M5 12l7 7 7-7" />
                    </svg>
                  </motion.span>
                </span>
              </motion.a>

              {/* Secondary: Let's Talk — ghost pill matching navbar */}
              <motion.a
                href="#contact"
                className="relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-mono font-semibold text-[13px] text-violet-200 border border-violet-500/40 bg-violet-500/8 overflow-hidden group"
                whileHover={{
                  scale: 1.05,
                  y: -2,
                  borderColor: "rgba(168,85,247,0.75)",
                }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
              >
                <motion.span
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      "radial-gradient(ellipse at center, rgba(139,92,246,0.18) 0%, transparent 70%)",
                  }}
                />
                <motion.span
                  className="relative w-1.5 h-1.5 rounded-full bg-violet-400 shrink-0"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <span className="relative z-10">Let&apos;s Talk</span>
                <motion.span
                  className="relative z-10 text-violet-400 text-[11px]"
                  animate={{ x: [0, 3, 0] }}
                  transition={{
                    duration: 1.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </motion.span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
