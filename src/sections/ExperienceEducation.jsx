"use client";

import { AnimatePresence, motion } from "framer-motion";
import { BriefcaseBusiness, GraduationCap } from "lucide-react";
import { useState } from "react";
import { educationItems, experienceItems } from "../lib/siteData";

export function ExperienceEducation() {
  const [activeTab, setActiveTab] = useState("experience");
  const isExperience = activeTab === "experience";

  const items = isExperience ? experienceItems : educationItems;

  const Icon = isExperience ? BriefcaseBusiness : GraduationCap;

  return (
    <section id="experience" className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="section-eyebrow">Journey</p>
        <h2 className="section-title">
          {isExperience ? "Professional Experience" : "Education & Training"}
        </h2>
        <p className="exp-summary mt-4 max-w-3xl text-slate-300">
          {isExperience
            ? "Teaching, training, and software mentoring roles focused on practical skills, student outcomes, and industry-ready development habits."
            : "Academic background and structured learning tracks that support my full-stack engineering foundation."}
        </p>

        <div className="exp-tabs mt-8">
          <button
            type="button"
            onClick={() => setActiveTab("experience")}
            className={`exp-tab-btn ${activeTab === "experience" ? "is-active" : ""}`}
            data-cursor="Experience"
            data-magnetic
            data-magnetic-strength="0.14"
          >
            Professional Experience
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("education")}
            className={`exp-tab-btn ${activeTab === "education" ? "is-active" : ""}`}
            data-cursor="Education"
            data-magnetic
            data-magnetic-strength="0.14"
          >
            Education
          </button>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.28 }}
            className="exp-timeline mt-8"
          >
            {items.map((item, index) => (
              <motion.article
                key={`${item.title}-${item.period}`}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.06 }}
                className="exp-card exp-timeline-item"
              >
                <span className="exp-node">
                  <Icon size={14} />
                </span>

                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="exp-title">
                      {item.title}
                      {item.isCurrent ? (
                        <span className="exp-current">Current</span>
                      ) : null}
                    </h3>
                    <p className="exp-subtitle">{item.org}</p>
                  </div>
                  <span className="exp-period">{item.period}</span>
                </div>
                <p className="exp-text">{item.description}</p>

                {item.details?.length ? (
                  <ol className="exp-details">
                    {item.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ol>
                ) : null}

                {item.highlights?.length ? (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.highlights.map((highlight) => (
                      <span key={highlight} className="chip">
                        {highlight}
                      </span>
                    ))}
                  </div>
                ) : null}
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
