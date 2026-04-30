"use client";

import { motion } from "framer-motion";
import { aboutStats, storySteps } from "../lib/siteData";

export function AboutStory() {
  return (
    <section id="story" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="section-eyebrow">Story</p>
        <h2 className="section-title">From Curiosity to Craft</h2>

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
