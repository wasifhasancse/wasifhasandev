"use client";

import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaCode,
  FaEnvelope,
  FaGithub,
  FaGraduationCap,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { TiHeartFullOutline } from "react-icons/ti";

/* ─── Data ─────────────────────────────────────────────── */
const LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const SOCIALS = [
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/wasifhasancse/",
    label: "LinkedIn",
    color: "#0a66c2",
  },
  {
    icon: FaGithub,
    href: "https://github.com/wasifhasancse",
    label: "GitHub",
    color: "#c084fc",
  },
  {
    icon: FaEnvelope,
    href: "mailto:wasifhasancse@gmail.com",
    label: "Email",
    color: "#a855f7",
  },
];

const PROFILE = [
  {
    icon: FaGraduationCap,
    label: "Education",
    val: "BSc in CSE",
    sub: "HSTU · 2020 – 2025",
    accent: "#a855f7",
  },
  {
    icon: FaCode,
    label: "Specialization",
    val: "MERN Stack & Next.js",
    sub: "Full-Stack Development",
    accent: "#f59e0b",
  },
  {
    icon: FaMapMarkerAlt,
    label: "Location",
    val: "Bangladesh",
    sub: "Open to Remote Worldwide",
    accent: "#3b82f6",
  },
  {
    icon: FaBriefcase,
    label: "Status",
    val: "Full-time · Remote · Freelance",
    sub: "Available immediately",
    accent: "#22c55e",
  },
];

/* ─── Easing ─────────────────────────────────────────────── */
const expo = [0.16, 1, 0.3, 1];

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.65, delay, ease: expo },
  },
});

const stagger = (d = 0) => ({
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: d } },
});

const linkItem = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: expo } },
};

/* ─── Footer ──────────────────────────────────────────────── */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#060412] overflow-hidden">
      {/* Top gradient divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-violet-500/40 to-transparent" />

      {/* Bottom ambient orb */}
      <motion.div
        className="pointer-events-none absolute -bottom-20 left-1/2 -translate-x-1/2 w-175 h-70 rounded-full"
        animate={{ opacity: [0.08, 0.16, 0.08], scale: [1, 1.06, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-full h-full rounded-full bg-[radial-gradient(ellipse,#7c3aed,transparent_60%)]" />
      </motion.div>

      {/* Side orb */}
      <motion.div
        className="pointer-events-none absolute top-0 -left-24 w-75 h-75 rounded-full"
        animate={{ opacity: [0.06, 0.12, 0.06] }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      >
        <div className="w-full h-full rounded-full bg-[radial-gradient(circle,#5b21b6,transparent_65%)]" />
      </motion.div>

      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.022]"
        style={{
          backgroundImage:
            "linear-gradient(#a855f7 1px,transparent 1px),linear-gradient(90deg,#a855f7 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-16 pb-8">
        {/* ── Brand Header ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={stagger(0)}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14"
        >
          {/* Left: name + bio */}
          <div className="max-w-md">
            <motion.div
              variants={fadeUp(0)}
              className="flex items-center gap-3 mb-4"
            >
              <span className="h-px w-8 bg-linear-to-r from-transparent to-violet-500/50" />
              <span className="font-mono text-[10px] tracking-[.2em] uppercase text-violet-400/50">
                Full Stack Developer
              </span>
            </motion.div>

            <motion.div
              variants={fadeUp(0.05)}
              className="flex items-baseline gap-1 mb-3"
            >
              <span className="font-mono text-4xl font-black text-white tracking-tight">
                wasif
              </span>
              <motion.span
                className="font-mono text-4xl font-black"
                animate={{
                  color: ["#a855f7", "#c084fc", "#e879f9", "#a855f7"],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                .dev
              </motion.span>
            </motion.div>

            <motion.p
              variants={fadeUp(0.1)}
              className="text-gray-500 text-[13px] leading-relaxed mb-5"
            >
              MERN Stack Developer crafting high-performance, scalable web
              applications with clean code and modern UI/UX.
              <br />
              BSc in CSE · HSTU · Based in Bangladesh.
            </motion.p>

            {/* Social pills */}
            <motion.div
              variants={fadeUp(0.15)}
              className="flex flex-wrap gap-2"
            >
              {SOCIALS.map(({ icon: Icon, href, label, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  aria-label={label}
                  className="flex items-center gap-2 px-3.5 py-2 rounded-xl border border-white/7 bg-white/3 text-gray-400 transition-colors"
                  whileHover={{
                    borderColor: `${color}50`,
                    backgroundColor: `${color}14`,
                    color: "#fff",
                    y: -2,
                  }}
                  whileTap={{ scale: 0.94 }}
                  transition={{ type: "spring", stiffness: 280, damping: 18 }}
                >
                  <motion.span
                    className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: `${color}18` }}
                    whileHover={{ rotate: 8, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Icon size={12} style={{ color }} />
                  </motion.span>
                  <span className="font-mono text-[11px] tracking-wide">
                    {label}
                  </span>
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right: availability CTA */}
          <motion.div variants={fadeUp(0.2)} className="flex flex-col gap-3">
            <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-green-500/20 bg-green-500/6 w-fit">
              <motion.span
                className="w-2 h-2 rounded-full bg-green-400 shrink-0"
                animate={{
                  boxShadow: [
                    "0 0 0 3px rgba(34,197,94,.2)",
                    "0 0 0 7px rgba(34,197,94,.04)",
                    "0 0 0 3px rgba(34,197,94,.2)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="font-mono text-[11px] text-green-400">
                Available for work
              </span>
            </div>

            <motion.a
              href="#contact"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="inline-flex items-center gap-2 font-mono text-[12px] text-violet-400 hover:text-violet-300 transition-colors w-fit"
            >
              Let&apos;s work together
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                →
              </motion.span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* ── Horizontal rule ── */}
        <div className="h-px bg-white/5 mb-12" />

        {/* ── 3-column grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Col 1 — Profile Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger(0.05)}
          >
            <motion.p
              variants={fadeUp(0)}
              className="font-mono text-[10px] tracking-[.18em] uppercase text-violet-400/60 mb-5"
            >
              About Me
            </motion.p>
            <div className="space-y-4">
              {PROFILE.map(({ icon: Icon, label, val, sub, accent }) => (
                <motion.div
                  key={label}
                  variants={linkItem}
                  className="flex items-start gap-3 group"
                >
                  <motion.div
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                    style={{
                      background: `${accent}12`,
                      border: `1px solid ${accent}25`,
                    }}
                    whileHover={{
                      scale: 1.1,
                      rotate: 6,
                      boxShadow: `0 0 14px ${accent}35`,
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Icon size={13} style={{ color: accent }} />
                  </motion.div>
                  <div>
                    <p
                      className="font-mono text-[10px] tracking-widest uppercase mb-0.5"
                      style={{ color: `${accent}80` }}
                    >
                      {label}
                    </p>
                    <p className="text-white text-[12px] font-medium leading-tight">
                      {val}
                    </p>
                    <p className="text-gray-600 font-mono text-[10px] mt-0.5">
                      {sub}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Col 2 — Navigation */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger(0.05)}
          >
            <motion.p
              variants={fadeUp(0)}
              className="font-mono text-[10px] tracking-[.18em] uppercase text-violet-400/60 mb-5"
            >
              Navigation
            </motion.p>
            <ul className="space-y-2.5">
              {LINKS.map(({ label, href }) => (
                <motion.li key={label} variants={linkItem}>
                  <motion.a
                    href={href}
                    className="group inline-flex items-center gap-3 text-[13px] text-gray-500 hover:text-white transition-colors duration-200"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="w-4 h-px bg-violet-500/25 group-hover:bg-violet-400 group-hover:w-6 transition-all duration-300 shrink-0" />
                    {label}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Col 3 — Contact */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger(0.05)}
          >
            <motion.p
              variants={fadeUp(0)}
              className="font-mono text-[10px] tracking-[.18em] uppercase text-violet-400/60 mb-5"
            >
              Get In Touch
            </motion.p>

            <div className="space-y-3 mb-6">
              {/* Email */}
              <motion.a
                href="mailto:wasifhasancse@gmail.com"
                variants={linkItem}
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex items-center gap-3 group"
              >
                <motion.div
                  className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border border-violet-500/20 bg-violet-500/8"
                  whileHover={{ scale: 1.1, boxShadow: "0 0 14px #a855f735" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <MdEmail size={14} className="text-violet-400" />
                </motion.div>
                <div>
                  <p className="font-mono text-[10px] tracking-widest uppercase text-violet-400/50 mb-0.5">
                    Email
                  </p>
                  <p className="text-gray-400 text-[12px] group-hover:text-violet-300 transition-colors">
                    wasifhasancse@gmail.com
                  </p>
                </div>
              </motion.a>

              {/* Location */}
              <motion.div
                variants={linkItem}
                className="flex items-center gap-3"
              >
                <motion.div
                  className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border border-blue-500/20 bg-blue-500/8"
                  whileHover={{ scale: 1.1, boxShadow: "0 0 14px #3b82f635" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <FaMapMarkerAlt size={12} className="text-blue-400" />
                </motion.div>
                <div>
                  <p className="font-mono text-[10px] tracking-widest uppercase text-blue-400/50 mb-0.5">
                    Location
                  </p>
                  <p className="text-gray-400 text-[12px]">
                    Bangladesh · Remote Worldwide
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Cert badge */}
            <motion.div
              variants={fadeUp(0.1)}
              className="p-3.5 rounded-xl border border-amber-500/15 bg-amber-500/5"
            >
              <p className="font-mono text-[10px] tracking-widest uppercase text-amber-400/60 mb-1">
                Certification
              </p>
              <p className="text-white text-[12px] font-medium">
                MERN Stack Specialization
              </p>
              <p className="text-gray-600 font-mono text-[10px] mt-0.5">
                Programming Hero · 2025
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* ── Divider ── */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: expo }}
          className="h-px bg-linear-to-r from-transparent via-violet-500/25 to-transparent mb-7 origin-center"
        />

        {/* ── Bottom bar ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger(0)}
          className="flex flex-col sm:flex-row items-center justify-between gap-3"
        >
          <motion.p
            variants={fadeUp(0)}
            className="font-mono text-[11px] text-gray-600 text-center sm:text-left"
          >
            © {year} <span className="text-violet-400/60">Wasif Hasan</span> —
            All rights reserved.
          </motion.p>

          <motion.p
            variants={fadeUp(0.05)}
            className="font-mono text-[11px] text-gray-700 flex items-center gap-1.5"
          >
            Built with
            <motion.span
              className="text-pink-500/70"
              animate={{ scale: [1, 1.35, 1] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <TiHeartFullOutline />
            </motion.span>
            using Next.js &amp; Framer Motion
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
}
