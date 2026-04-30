"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MagneticButton } from "../components/MagneticButton";

export function Hero({ profileImage }) {
  const defaultImage = "/profile-card.svg";
  const [heroImage, setHeroImage] = useState(profileImage || defaultImage);

  return (
    <section id="home" className="hero-section min-h-screen px-6">
      <div className="hero-shell mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.12fr_0.88fr]">
        <div className="hero-content">
          <p className="hero-kicker animate__animated animate__fadeInDown">
            Product-Focused Full-Stack Web Developer
          </p>
          <h1 className="hero-title text-4xl font-bold text-white sm:text-6xl">
            Building real products for real users
            <br />
            with <span className="hero-name-gradient">Wasif Hasan</span>
          </h1>
          <p className="hero-lead mt-6 max-w-2xl text-slate-200">
            I design and develop production-ready web applications with clean
            architecture, fast interfaces, and reliable APIs. My work focuses on
            solving business problems, not just shipping demos.
          </p>
          <p className="hero-sublead mt-3 max-w-2xl text-slate-300">
            Core stack: Next.js, React, Node.js, Express, MongoDB, and modern UI
            engineering with motion and performance in mind.
          </p>

          <div className="hero-stack mt-6" aria-label="Primary stack">
            <span
              className="chip hero-stack-chip"
              data-magnetic
              data-magnetic-strength="0.15"
              data-magnetic-scale="1.06"
            >
              Next.js
            </span>
            <span
              className="chip hero-stack-chip"
              data-magnetic
              data-magnetic-strength="0.15"
              data-magnetic-scale="1.06"
            >
              React
            </span>
            <span
              className="chip hero-stack-chip"
              data-magnetic
              data-magnetic-strength="0.15"
              data-magnetic-scale="1.06"
            >
              Node.js
            </span>
            <span
              className="chip hero-stack-chip"
              data-magnetic
              data-magnetic-strength="0.15"
              data-magnetic-scale="1.06"
            >
              Express
            </span>
            <span
              className="chip hero-stack-chip"
              data-magnetic
              data-magnetic-strength="0.15"
              data-magnetic-scale="1.06"
            >
              MongoDB
            </span>
          </div>

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
              className="hero-social-link"
              data-magnetic
              data-magnetic-strength="0.2"
              data-magnetic-scale="1.08"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/wasif-hasan/"
              target="_blank"
              rel="noreferrer"
              data-cursor="Open"
              className="hero-social-link"
              data-magnetic
              data-magnetic-strength="0.2"
              data-magnetic-scale="1.08"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="hero-visual"
        >
          <div className="hero-avatar-shell" data-cursor="Profile">
            <span className="hero-orbit hero-orbit-a" aria-hidden="true" />
            <span className="hero-orbit hero-orbit-b" aria-hidden="true" />
            <span className="hero-orbit hero-orbit-c" aria-hidden="true" />
            <div className="hero-image-frame">
              <Image
                src={heroImage}
                alt="Wasif Hasan Profile"
                fill
                sizes="(max-width: 1024px) 80vw, 30rem"
                priority
                className="hero-image"
                onError={() => setHeroImage(defaultImage)}
              />
            </div>
          </div>
          <p className="hero-status">
            Open to internships, freelance, and collaboration
          </p>
        </motion.div>
      </div>
    </section>
  );
}
