"use client";

import { motion } from "framer-motion";
import { skillNodes } from "../lib/siteData";

export function SkillsOrbital() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="section-eyebrow">Skills</p>
        <h2 className="section-title">Orbital Skill Matrix</h2>

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
              const x = Math.cos(angle) * 220;
              const y = Math.sin(angle) * 220;
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
