"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { featuredProjects } from "../lib/projectsData";

const gradients = [
  "from-cyan-400/40 via-cyan-500/10 to-slate-900",
  "from-violet-400/40 via-pink-500/10 to-slate-900",
  "from-pink-400/40 via-cyan-500/10 to-slate-900",
];

export function ProjectsRail({ repos }) {
  const scrollerRef = useRef(null);
  const targetScrollRef = useRef(0);
  const frameRef = useRef(null);
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    const node = scrollerRef.current;
    if (!node) return;

    targetScrollRef.current = node.scrollLeft;

    const animateScroll = () => {
      const current = node.scrollLeft;
      const target = targetScrollRef.current;
      const next = current + (target - current) * 0.14;

      if (Math.abs(target - current) < 0.6) {
        node.scrollLeft = target;
        frameRef.current = null;
        return;
      }

      node.scrollLeft = next;
      frameRef.current = window.requestAnimationFrame(animateScroll);
    };

    const stopAnimation = () => {
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
        frameRef.current = null;
      }
    };

    const startAnimation = () => {
      if (frameRef.current !== null) return;
      frameRef.current = window.requestAnimationFrame(animateScroll);
    };

    const onWheelScroll = (event) => {
      const canScrollHorizontally = node.scrollWidth > node.clientWidth;
      if (!canScrollHorizontally) return;

      const delta =
        Math.abs(event.deltaY) > Math.abs(event.deltaX)
          ? event.deltaY
          : event.deltaX;
      if (delta === 0) return;

      const maxScroll = node.scrollWidth - node.clientWidth;
      const currentTarget = targetScrollRef.current;
      const atStart = currentTarget <= 0;
      const atEnd = currentTarget >= maxScroll;
      const movingLeft = delta < 0;
      const movingRight = delta > 0;

      if ((atStart && movingLeft) || (atEnd && movingRight)) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();
      targetScrollRef.current = Math.max(
        0,
        Math.min(maxScroll, currentTarget + delta * 1.2),
      );
      startAnimation();
    };

    const onNativeScroll = () => {
      if (frameRef.current === null) {
        targetScrollRef.current = node.scrollLeft;
      }
    };

    node.addEventListener("wheel", onWheelScroll, { passive: false });
    node.addEventListener("scroll", onNativeScroll, { passive: true });

    return () => {
      node.removeEventListener("wheel", onWheelScroll);
      node.removeEventListener("scroll", onNativeScroll);
      stopAnimation();
    };
  }, [repos]);

  return (
    <section id="projects" className="projects-shell px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <p className="section-eyebrow">Featured Projects</p>
        <h2 className="section-title">Projects Section</h2>
        <p className="exp-summary mt-4 max-w-3xl text-slate-300">
          A curated snapshot of my strongest builds. Explore project details,
          architecture decisions, and the key challenges solved in development.
        </p>

        <div className="featured-projects-grid mt-10">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.slug}
              className="featured-project-card"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
            >
              <div className="featured-project-image-wrap">
                <Image
                  src={project.image}
                  alt={`${project.name} preview`}
                  fill
                  className="featured-project-image"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="featured-project-glow" />
                <span className="featured-project-chip">Case Study</span>
              </div>

              <div className="featured-project-body">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="featured-project-stack">
                  {project.stack.slice(0, 3).map((item) => (
                    <span key={`${project.slug}-${item}`}>{item}</span>
                  ))}
                </div>

                <Link
                  href={`/projects/${project.slug}`}
                  className="featured-project-btn"
                  data-cursor="Open"
                  data-magnetic
                  data-magnetic-strength="0.14"
                >
                  <span>{project.detailsLabel}</span>
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-22 max-w-7xl">
        <p className="section-eyebrow">Projects</p>
        <h2 className="section-title">Horizontal Case Study Rail</h2>
      </div>

      <div ref={scrollerRef} className="projects-scroller mt-10 px-6">
        <div className="projects-track flex w-max gap-6">
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
                <p className="line-clamp-3 text-slate-300">
                  {repo.description}
                </p>
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
