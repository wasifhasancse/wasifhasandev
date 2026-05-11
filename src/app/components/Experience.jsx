"use client";

import {
    AnimatePresence,
    motion,
    useInView,
    useMotionValue,
    useSpring,
} from "framer-motion";
import { useRef, useState } from "react";
import {
    FaBriefcase,
    FaCode,
    FaGraduationCap,
    FaSchool,
    FaServer,
    FaUniversity,
} from "react-icons/fa";

/* ─── Data ──────────────────────────────────────────────── */
const EXPERIENCE = [
  {
    year: "2025 – Present",
    title: "Full Stack Developer",
    organization: "Freelance & Open Source",
    description:
      "Building and shipping production-ready full stack web applications using the MERN stack and Next.js. Developing secure REST APIs, responsive UIs, and scalable backend systems for real-world clients and personal projects.",
    Icon: FaCode,
    accent: "#a855f7",
    tags: ["Next.js", "React", "Node.js", "MongoDB", "Express", "Tailwind"],
    status: "active",
  },
  {
    year: "2025 – Present",
    title: "MERN Stack Specialization",
    organization: "Programming Hero",
    description:
      "Completing an intensive professional software engineering program focused on the MERN stack. Built 50+ projects including SkillSphere (online learning platform), Spine (book borrowing system), and Pixgen (AI image gallery).",
    Icon: FaServer,
    accent: "#f59e0b",
    tags: ["MongoDB", "Express", "React", "Node.js", "Firebase", "JWT"],
    status: "active",
  },
  {
    year: "2024 – 2025",
    title: "100 Days of Code Challenge",
    organization: "Self-Driven",
    description:
      "Committed to daily coding — building projects, solving DSA problems, and contributing to open source. Achieved 626+ GitHub contributions in a single year while consistently shipping new repositories.",
    Icon: FaBriefcase,
    accent: "#22c55e",
    tags: ["DSA", "Daily Build", "Open Source", "GitHub"],
    status: "done",
  },
];

const EDUCATION = [
  {
    year: "Jan 2020 – Oct 2025",
    title: "BSc in Computer Science & Engineering",
    organization: "Hajee Mohammad Danesh Science & Technology University",
    description:
      "Completed a four-year Bachelor of Science in Computer Science & Engineering with a strong focus on software development, algorithms, data structures, database systems, and modern web technologies.",
    Icon: FaUniversity,
    accent: "#a855f7",
    tags: [
      "Computer Science",
      "Software Engineering",
      "DSA",
      "Database Systems",
      "Web Development",
    ],
    status: "done",
  },
  {
    year: "2025 – Present",
    title: "MERN Stack Certification",
    organization: "Programming Hero",
    description:
      "Pursuing a professional certification in full stack web development with specialization in MERN Stack and Next.js, covering frontend engineering, backend API design, authentication, and deployment.",
    Icon: FaGraduationCap,
    accent: "#22c55e",
    tags: ["MERN Stack", "Next.js", "Full Stack", "Certification"],
    status: "active",
  },
];

/* ─── Easing ─────────────────────────────────────────────── */
const expo = [0.16, 1, 0.3, 1];

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 36, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.72, delay, ease: expo },
  },
});

const stagger = (d = 0) => ({
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: d } },
});

const tagV = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 280, damping: 20 },
  },
};

/* ─── 3-D Tilt Card ─────────────────────────────────────── */
function TiltCard({ children, className, accent }) {
  const ref = useRef(null);
  const [hov, setHov] = useState(false);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 100, damping: 14 });
  const sry = useSpring(ry, { stiffness: 100, damping: 14 });

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    rx.set(-((e.clientY - r.top) / r.height - 0.5) * 12);
    ry.set(((e.clientX - r.left) / r.width - 0.5) * 12);
  };
  const onLeave = () => {
    rx.set(0);
    ry.set(0);
    setHov(false);
  };

  return (
    <motion.div
      ref={ref}
      style={{
        rotateX: srx,
        rotateY: sry,
        transformStyle: "preserve-3d",
        perspective: 800,
      }}
      onMouseMove={onMove}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={onLeave}
      className={`relative ${className}`}
    >
      <motion.div
        className="absolute -inset-px rounded-2xl pointer-events-none"
        animate={{ opacity: hov ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{
          background: `radial-gradient(ellipse at 40% 0%, ${accent}28, transparent 65%)`,
        }}
      />
      {children}
    </motion.div>
  );
}

/* ─── Single Timeline Item ──────────────────────────────── */
function TimelineItem({ item, index, isLast }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="relative flex gap-6 md:gap-10">
      {/* ── Spine column ── */}
      <div className="flex flex-col items-center shrink-0 w-10">
        {/* Dot */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 18,
            delay: index * 0.15,
          }}
          className="relative z-10 w-10 h-10 rounded-full flex items-center justify-center border-2 shrink-0"
          style={{ borderColor: item.accent, background: "#060412" }}
        >
          {item.status === "active" && (
            <motion.span
              className="absolute inset-0 rounded-full"
              animate={{ scale: [1, 1.7, 1], opacity: [0.4, 0, 0.4] }}
              transition={{ duration: 2.2, repeat: Infinity }}
              style={{ background: item.accent }}
            />
          )}
          <motion.span
            animate={{
              boxShadow: [
                `0 0 0 3px ${item.accent}30`,
                `0 0 0 7px ${item.accent}05`,
                `0 0 0 3px ${item.accent}30`,
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="z-10 relative flex items-center justify-center"
          >
            <item.Icon size={15} style={{ color: item.accent }} />
          </motion.span>
        </motion.div>

        {/* Spine line */}
        {!isLast && (
          <div className="relative flex-1 w-px mt-2 overflow-hidden bg-white/5">
            <motion.div
              className="absolute top-0 left-0 w-full"
              style={{
                background: `linear-gradient(to bottom, ${item.accent}55, transparent)`,
              }}
              initial={{ height: "0%" }}
              animate={inView ? { height: "100%" } : {}}
              transition={{
                duration: 1.2,
                delay: index * 0.15 + 0.3,
                ease: expo,
              }}
            />
          </div>
        )}
      </div>

      {/* ── Card ── */}
      <motion.div
        initial={{ opacity: 0, x: 32, filter: "blur(8px)" }}
        animate={inView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
        transition={{ duration: 0.75, delay: index * 0.15 + 0.1, ease: expo }}
        className="pb-12 flex-1 min-w-0"
      >
        <TiltCard accent={item.accent} className="w-full">
          <div
            className="relative p-6 rounded-2xl border bg-[#0c0818] overflow-hidden transition-colors duration-300"
            style={{ borderColor: `${item.accent}20` }}
          >
            {/* Top accent line */}
            <motion.div
              className="absolute top-0 left-0 h-0.5 rounded-tl-2xl"
              style={{
                background: `linear-gradient(90deg, ${item.accent}, transparent)`,
              }}
              initial={{ width: "0%" }}
              animate={inView ? { width: "100%" } : {}}
              transition={{
                duration: 1,
                delay: index * 0.15 + 0.4,
                ease: expo,
              }}
            />

            {/* Number watermark */}
            <span
              className="absolute top-4 right-5 font-mono font-black text-[52px] leading-none select-none pointer-events-none"
              style={{ color: `${item.accent}10` }}
            >
              {String(index + 1).padStart(2, "0")}
            </span>

            {/* Year + status */}
            <div className="flex items-center gap-2.5 mb-3 flex-wrap">
              <span
                className="font-mono text-[10px] tracking-[.16em] uppercase px-2.5 py-1 rounded-full border"
                style={{
                  color: item.accent,
                  borderColor: `${item.accent}35`,
                  background: `${item.accent}10`,
                }}
              >
                {item.year}
              </span>
              {item.status === "active" && (
                <motion.span
                  className="flex items-center gap-1.5 font-mono text-[10px] tracking-widest uppercase text-green-400 bg-green-500/8 border border-green-500/20 px-2.5 py-1 rounded-full"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <motion.span
                    className="w-1.5 h-1.5 rounded-full bg-green-400"
                    animate={{ scale: [1, 1.4, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  Active
                </motion.span>
              )}
            </div>

            {/* Title */}
            <h3 className="text-[18px] font-bold text-white leading-snug mb-1">
              {item.title}
            </h3>

            {/* Org */}
            <p
              className="font-mono text-[12px] mb-4"
              style={{ color: `${item.accent}bb` }}
            >
              @ {item.organization}
            </p>

            {/* Description */}
            <p className="text-gray-500 text-[13.5px] leading-[1.8] mb-5">
              {item.description}
            </p>

            {/* Tags */}
            <motion.div
              variants={stagger(0.05)}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="flex flex-wrap gap-1.5"
            >
              {item.tags.map((t) => (
                <motion.span
                  key={t}
                  variants={tagV}
                  className="font-mono text-[10px] px-2.5 py-1 rounded-lg border"
                  style={{
                    color: `${item.accent}bb`,
                    borderColor: `${item.accent}22`,
                    background: `${item.accent}0c`,
                  }}
                >
                  {t}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </TiltCard>
      </motion.div>
    </div>
  );
}

/* ─── Tab Button ────────────────────────────────────────── */
function TabBtn({ label, icon: Icon, active, onClick, accent }) {
  return (
    <motion.button
      onClick={onClick}
      className={`relative flex items-center gap-2.5 px-6 py-2.5 rounded-full font-mono font-semibold text-[13px] transition-colors duration-200 ${
        active
          ? "text-white"
          : "text-gray-500 hover:text-gray-300 border border-white/8 bg-white/3"
      }`}
      whileHover={{ scale: 1.04, y: -1 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 300, damping: 18 }}
    >
      {active && (
        <motion.span
          layoutId="tab-bg"
          className="absolute inset-0 rounded-full"
          style={{ background: `linear-gradient(135deg, ${accent}, #c084fc)` }}
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      )}
      {active && (
        <motion.span
          layoutId="tab-glow"
          className="absolute inset-0 rounded-full"
          animate={{
            boxShadow: [
              `0 0 14px ${accent}55`,
              `0 0 26px ${accent}80`,
              `0 0 14px ${accent}55`,
            ],
          }}
          transition={{ duration: 2.5, repeat: Infinity }}
        />
      )}
      <Icon size={13} className="relative z-10" />
      <span className="relative z-10">{label}</span>
    </motion.button>
  );
}

/* ─── Main ──────────────────────────────────────────────── */
export default function Experience() {
  const [tab, setTab] = useState("experience");
  const items = tab === "experience" ? EXPERIENCE : EDUCATION;

  return (
    <section
      id="experience"
      className="relative py-28 px-6 bg-[#060412] overflow-hidden"
    >
      {/* Ambient orbs */}
      <motion.div
        className="pointer-events-none absolute top-1/4 -right-32 w-105 h-105 rounded-full"
        animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.18, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-full h-full rounded-full bg-[radial-gradient(circle,#7c3aed,transparent_65%)]" />
      </motion.div>
      <motion.div
        className="pointer-events-none absolute bottom-1/4 -left-20 w-75 h-75 rounded-full"
        animate={{ scale: [1, 1.15, 1], opacity: [0.08, 0.15, 0.08] }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      >
        <div className="w-full h-full rounded-full bg-[radial-gradient(circle,#a855f7,transparent_65%)]" />
      </motion.div>

      {/* Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.026]"
        style={{
          backgroundImage:
            "linear-gradient(#a855f7 1px,transparent 1px),linear-gradient(90deg,#a855f7 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-3xl mx-auto">
        {/* ── Header ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger(0)}
          className="text-center mb-12"
        >
          <motion.div
            variants={fadeUp(0)}
            className="flex items-center justify-center gap-3 mb-5"
          >
            <span className="h-px w-10 bg-linear-to-r from-transparent to-violet-500/50" />
            <span className="font-mono text-[11px] tracking-[.18em] uppercase text-violet-400/70">
              My Journey
            </span>
            <span className="h-px w-10 bg-linear-to-l from-transparent to-violet-500/50" />
          </motion.div>

          <motion.h2
            variants={fadeUp(0.06)}
            className="text-4xl md:text-5xl font-extrabold text-white leading-[1.1] tracking-tight mb-4"
          >
            Experience &{" "}
            <motion.span
              className="bg-linear-to-br from-violet-400 to-fuchsia-500 bg-clip-text text-transparent"
              style={{ backgroundSize: "200% 200%" }}
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              Education
            </motion.span>
          </motion.h2>

          <motion.p
            variants={fadeUp(0.12)}
            className="text-gray-500 text-[14px] max-w-sm mx-auto leading-relaxed"
          >
            A timeline of my growth — from academic foundations to real-world
            engineering.
          </motion.p>
        </motion.div>

        {/* ── Tab Switcher ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: expo }}
          className="flex justify-center gap-3 mb-14"
        >
          <TabBtn
            label="Experience"
            icon={FaBriefcase}
            active={tab === "experience"}
            onClick={() => setTab("experience")}
            accent="#a855f7"
          />
          <TabBtn
            label="Education"
            icon={FaGraduationCap}
            active={tab === "education"}
            onClick={() => setTab("education")}
            accent="#3b82f6"
          />
        </motion.div>

        {/* ── Timeline ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -16, filter: "blur(6px)" }}
            transition={{ duration: 0.4, ease: expo }}
          >
            {items.map((item, i) => (
              <TimelineItem
                key={`${tab}-${i}`}
                item={item}
                index={i}
                isLast={i === items.length - 1}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
