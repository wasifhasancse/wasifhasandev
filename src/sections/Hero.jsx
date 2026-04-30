"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MagneticButton } from "../components/MagneticButton";

export function Hero({ profileImage }) {
  const letters = "Build. Animate. Ship.".split("");
  const defaultImage = "/profile-card.svg";
  const [heroImage, setHeroImage] = useState(profileImage || defaultImage);

  return (
    <section id="home" className="hero-section min-h-screen px-6 pt-28">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="animate__animated animate__fadeInDown mb-5 text-xs tracking-[0.35em] text-cyan-300 uppercase">
            Awwwards Inspired Developer Portfolio
          </p>
          <h1 className="text-4xl font-bold leading-tight text-white sm:text-6xl">
            Hi, I am <span className="hero-name-gradient">Wasif Hasan</span>
          </h1>
          <div className="mt-3 flex flex-wrap gap-1 text-slate-200">
            {letters.map((char, index) => (
              <motion.span
                key={`${char}-${index}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.03 }}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </div>
          <p className="mt-6 max-w-xl text-slate-300">
            Full-stack developer crafting immersive, high-performance
            experiences with precise interactions, motion design, and scalable
            architecture.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <MagneticButton
              className="hero-cta"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              data-cursor="View"
            >
              View Projects
            </MagneticButton>
            <a
              href="/resume.pdf"
              className="hero-outline"
              data-cursor="Open"
              data-magnetic
              data-magnetic-strength="0.2"
            >
              Download Resume
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4 text-2xl text-slate-300">
            <a
              href="https://github.com/wasifhasancse"
              target="_blank"
              rel="noreferrer"
              data-cursor="Open"
              className="hover:text-cyan-300"
              data-magnetic
              data-magnetic-strength="0.24"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/wasif-hasan/"
              target="_blank"
              rel="noreferrer"
              data-cursor="Open"
              className="hover:text-cyan-300"
              data-magnetic
              data-magnetic-strength="0.24"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, rotateY: 8, y: 20 }}
          animate={{ opacity: 1, rotateY: 0, y: 0 }}
          transition={{ duration: 0.9 }}
          className="tilt-card"
          data-cursor="View"
          data-magnetic
          data-magnetic-strength="0.08"
          data-magnetic-scale="1.01"
        >
          <div className="tilt-shimmer" />
          <div className="hero-image-frame">
            <Image
              src={heroImage}
              alt="Wasif Hasan Profile"
              fill
              sizes="(max-width: 1024px) 90vw, 40vw"
              priority
              className="hero-image"
              onError={() => setHeroImage(defaultImage)}
            />
          </div>
          <div className="floating-badge">Open to exciting projects</div>
        </motion.div>
      </div>
    </section>
  );
}
