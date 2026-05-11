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

/* ─── 3-D Tilt Card ─────────────────────────────────────── */
function TiltCard({ children, className }) {
  const ref = useRef(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 120, damping: 16 });
  const sry = useSpring(ry, { stiffness: 120, damping: 16 });
  const rotX = useTransform(srx, (v) => `${v}deg`);
  const rotY = useTransform(sry, (v) => `${v}deg`);

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    rx.set(-py * 14);
    ry.set(px * 14);
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
        perspective: 800,
      }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Animated Counter ──────────────────────────────────── */
function StatBadge({ num, label, delay }) {
  return (
    <motion.div
      variants={fadeUp(delay)}
      className="flex flex-col items-center gap-1"
    >
      <motion.span
        className="text-3xl font-extrabold bg-linear-to-br from-violet-300 to-fuchsia-400 bg-clip-text text-transparent"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 14, delay }}
        viewport={{ once: true }}
      >
        {num}
      </motion.span>
      <span className="text-[11px] font-mono tracking-widest uppercase text-gray-500">
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
        <div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-20">
          {/* ── Left: Avatar ── */}
          <motion.div
            className="w-full lg:w-auto shrink-0 flex flex-col items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger(0)}
          >
            {/* Avatar card with 3D tilt */}
            <motion.div variants={fadeUp(0)}>
              <TiltCard className="relative w-80 h-80 md:w-105 md:h-105">
                {/* Glow */}
                <div className="absolute inset-0 rounded-3xl bg-violet-500/15 blur-[50px]" />
                {/* Spinning border */}
                <motion.div
                  className="absolute -inset-0.75 rounded-3xl"
                  style={{
                    background:
                      "conic-gradient(from 0deg,#7c3aed,#a855f7,#c084fc,transparent,#7c3aed)",
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                />
                {/* Image */}
                <div className="relative z-10 w-full h-full rounded-full overflow-hidden bg-[#0f0b1e] border border-violet-500/10">
                  <Image
                    src={GITHUB_AVATAR}
                    alt="Wasif Hasan"
                    priority
                    sizes="288px"
                    fill
                    className="object-cover object-[center_15%]"
                  />
                  {/* Subtle bottom fade */}
                  <div className="absolute inset-0 bg-linear-to-t from-[#060412]/40 via-transparent to-transparent" />
                </div>

                {/* Floating badge */}
                <motion.div
                  className="absolute -top-5 -right-5 bg-violet-600 text-white px-3.5 py-2 rounded-2xl text-[13px] font-semibold shadow-lg shadow-violet-600/40 z-20 whitespace-nowrap"
                  initial={{ rotate: -12, scale: 0, opacity: 0 }}
                  whileInView={{ rotate: -6, scale: 1, opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 14,
                    delay: 0.4,
                  }}
                  viewport={{ once: true }}
                  whileHover={{ rotate: -2, scale: 1.06 }}
                >
                  Building the future ✨
                </motion.div>

                {/* Bottom name chip */}
                <motion.div
                  className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#0f0b1e] border border-violet-500/30 px-4 py-2 rounded-full text-[13px] font-mono text-violet-300 whitespace-nowrap z-20 shadow-xl"
                  initial={{ y: 16, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, ease: expo, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  @wasifhasancse
                </motion.div>
              </TiltCard>
            </motion.div>

            {/* Stats row */}
            <motion.div
              variants={stagger(0.3)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex gap-8 mt-6"
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
                href="/Wasif_Hasan_CV.pdf"
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
                  Download CV
                  <motion.span
                    animate={{ y: [0, 3, 0] }}
                    transition={{ duration: 1.4, repeat: Infinity }}
                  >
                    ↓
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
                  →
                </motion.span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
