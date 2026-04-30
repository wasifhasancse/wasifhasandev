"use client";

import { AnimatePresence, motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { FaGithub } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const gradients = [
  "from-cyan-400/40 via-cyan-500/10 to-slate-900",
  "from-violet-400/40 via-pink-500/10 to-slate-900",
  "from-pink-400/40 via-cyan-500/10 to-slate-900",
];

export function ProjectsRail({ repos }) {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const distance = track.scrollWidth - window.innerWidth;
    if (distance <= 0) return;

    const tween = gsap.to(track, {
      x: -distance,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: `+=${distance + 600}`,
        pin: true,
        scrub: 1,
      },
    });

    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach((item) => item.kill());
    };
  }, [repos]);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="projects-shell px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">
        <p className="section-eyebrow">Projects</p>
        <h2 className="section-title">Horizontal Case Study Rail</h2>
      </div>

      <div
        ref={trackRef}
        className="projects-track mt-10 flex w-max gap-6 px-6"
      >
        {repos.map((repo, index) => (
          <article
            key={repo.id}
            className="project-card"
            data-cursor="View"
            data-magnetic
            data-magnetic-strength="0.06"
            data-magnetic-scale="1.01"
          >
            <div
              className={`project-media bg-linear-to-br ${gradients[index % gradients.length]}`}
            >
              <div className="scanline" />
              <p className="project-name">{repo.name}</p>
            </div>
            <div className="project-overlay">
              <p className="line-clamp-3 text-slate-300">{repo.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {[repo.language, ...repo.topics.slice(0, 2)].map((item) => (
                  <span key={`${repo.id}-${item}`} className="chip">
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex gap-4 text-sm">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="link-cyan"
                  data-cursor="Open"
                >
                  <FaGithub /> Code
                </a>
                {repo.homepage ? (
                  <a
                    href={repo.homepage}
                    target="_blank"
                    rel="noreferrer"
                    className="link-violet"
                    data-cursor="Open"
                  >
                    <ExternalLink size={14} /> Live
                  </a>
                ) : null}
                <button
                  type="button"
                  onClick={() => setActiveProject(repo)}
                  className="ml-auto text-cyan-300 hover:text-cyan-200"
                  data-magnetic
                  data-magnetic-strength="0.16"
                >
                  View Case Study
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      <AnimatePresence>
        {activeProject ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-70 grid place-items-center bg-slate-950/80 px-4"
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 20 }}
              className="w-full max-w-xl rounded-2xl border border-cyan-300/20 bg-slate-900 p-6"
            >
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-xl font-semibold text-white">
                  {activeProject.name}
                </h3>
                <button
                  type="button"
                  onClick={() => setActiveProject(null)}
                  className="text-slate-300"
                  data-magnetic
                  data-magnetic-strength="0.16"
                >
                  <X size={18} />
                </button>
              </div>
              <p className="text-slate-300">{activeProject.description}</p>
              <div className="mt-6 flex gap-4">
                <a
                  href={activeProject.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="link-cyan"
                >
                  Repository
                </a>
                {activeProject.homepage ? (
                  <a
                    href={activeProject.homepage}
                    target="_blank"
                    rel="noreferrer"
                    className="link-violet"
                  >
                    Live Demo
                  </a>
                ) : null}
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
