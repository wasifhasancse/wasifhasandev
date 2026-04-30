"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { skillNodes } from "../lib/siteData";

export function SkillsOrbital() {
  const [orbitalRadius, setOrbitalRadius] = useState(220);

  useEffect(() => {
    const updateRadius = () => {
      const width = window.innerWidth;

      if (width < 640) {
        setOrbitalRadius(148);
        return;
      }

      if (width < 1024) {
        setOrbitalRadius(182);
        return;
      }

      setOrbitalRadius(220);
    };

    updateRadius();
    window.addEventListener("resize", updateRadius);

    return () => {
      window.removeEventListener("resize", updateRadius);
    };
  }, []);

  const categoryOrder = [
    "Frontend",
    "Backend",
    "Database",
    "Language",
    "Tooling",
    "Design",
  ];

  const categoryMap = skillNodes.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  const categories = Object.entries(categoryMap)
    .sort((a, b) => {
      const orderA = categoryOrder.indexOf(a[0]);
      const orderB = categoryOrder.indexOf(b[0]);
      const safeA = orderA === -1 ? Number.MAX_SAFE_INTEGER : orderA;
      const safeB = orderB === -1 ? Number.MAX_SAFE_INTEGER : orderB;
      if (safeA !== safeB) return safeA - safeB;
      return a[0].localeCompare(b[0]);
    })
    .map(([category, skills]) => ({ category, skills }));

  const totalSkills = skillNodes.length;
  const advancedCount = skillNodes.filter(
    (skill) => skill.level === "Advanced",
  ).length;

  return (
    <section id="skills" className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="section-eyebrow">Skills</p>
        <h2 className="section-title">Orbital Skill Matrix</h2>

        <div className="skills-showcase mt-8">
          <div className="skills-showcase-main">
            <p className="skills-summary text-slate-300">
              A categorized snapshot of my working stack across frontend,
              backend, databases, and tooling.
            </p>

            <div className="skills-stats mt-4">
              <article className="skills-stat-card">
                <p>{totalSkills}</p>
                <span>Total Skills</span>
              </article>
              <article className="skills-stat-card">
                <p>{categories.length}</p>
                <span>Categories</span>
              </article>
              <article className="skills-stat-card">
                <p>{advancedCount}</p>
                <span>Advanced</span>
              </article>
            </div>

            <div className="skills-category-list mt-4">
              {categories.map((item) => (
                <span key={item.category} className="skills-category-chip">
                  {item.category}
                </span>
              ))}
            </div>
          </div>

          <div className="skills-category-grid">
            {categories.map((item) => (
              <article key={item.category} className="skills-category-card">
                <h3>{item.category}</h3>
                <p>
                  {item.skills.length}{" "}
                  {item.skills.length === 1 ? "Skill" : "Skills"}
                </p>
                <div className="skills-category-tags">
                  {item.skills.map((skill) => (
                    <span key={skill.name}>{skill.name}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="orbital-wrap">
          <div className="orbital-core">
            <p>WASIF</p>
            <small>Full Stack</small>
          </div>

          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 26, ease: "linear" }}
            className="orbital-ring"
          >
            {skillNodes.map((skill, index) => {
              const angle = (index / skillNodes.length) * Math.PI * 2;
              const x = Math.cos(angle) * orbitalRadius;
              const y = Math.sin(angle) * orbitalRadius;
              const Icon = skill.icon;

              return (
                <div
                  key={skill.name}
                  className="skill-node"
                  style={{ transform: `translate(${x}px, ${y}px)` }}
                  title={skill.name}
                  data-cursor={skill.name}
                >
                  <Icon style={{ color: skill.color }} />
                  <span>{skill.name}</span>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
