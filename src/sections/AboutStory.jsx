"use client";

import { motion } from "framer-motion";
import { aboutProfile, aboutStats, storySteps } from "../lib/siteData";

export function AboutStory() {
  return (
    <section id="story" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="section-eyebrow">About Me</p>
        <h2 className="section-title">How I Grew into a Product Builder</h2>

        <div className="about-intro-grid mt-8">
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="about-intro-main"
          >
            <p className="about-intro-kicker">Introduction</p>
            <p>{aboutProfile.intro}</p>
            <p>{aboutProfile.journey}</p>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.06 }}
            className="about-intro-card"
          >
            <p className="about-intro-kicker">Craft</p>
            <h3>Work I Enjoy</h3>
            <p>{aboutProfile.workEnjoy}</p>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12 }}
            className="about-intro-card"
          >
            <p className="about-intro-kicker">Personality</p>
            <h3>Beyond Code</h3>
            <p>{aboutProfile.hobbies}</p>
            <div className="about-trait-list">
              {aboutProfile.personalityTraits.map((trait) => (
                <span key={trait}>{trait}</span>
              ))}
            </div>
          </motion.article>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {aboutStats.map((stat, index) => (
            <motion.article
              key={stat.label}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="glass-card"
            >
              <stat.icon className="mb-3 text-2xl text-cyan-300" />
              <p className="text-3xl font-bold text-white">{stat.value}+</p>
              <p className="text-sm text-slate-300">{stat.label}</p>
            </motion.article>
          ))}
        </div>

        <div className="story-timeline mt-12">
          {storySteps.map((step, index) => (
            <motion.article
              key={step.year}
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: index * 0.07 }}
              className="story-item"
            >
              <span className="story-dot" />
              <p className="story-year">{step.year}</p>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
