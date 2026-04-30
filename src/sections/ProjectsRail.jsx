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
    <section
      id="projects"
      className="projects-shell px-4 py-16 sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <p className="section-eyebrow">Featured Projects</p>
        <h2 className="section-title">Projects Section</h2>
        <p className="exp-summary mt-4 max-w-3xl text-slate-300">
          A curated snapshot of my strongest builds. Explore project details,
          architecture decisions, and the key challenges solved in development.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-4 md:mt-10 md:grid-cols-2 xl:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.slug}
              className="group relative grid grid-rows-[auto_1fr] overflow-hidden rounded-[1.05rem] border border-cyan-400/25 bg-[linear-gradient(140deg,rgba(2,6,23,0.78),rgba(15,23,42,0.66))] shadow-[inset_0_0_18px_rgba(34,211,238,0.05),0_22px_34px_-30px_rgba(34,211,238,0.6)] transition-[border-color,box-shadow] duration-200 hover:border-cyan-400/45 hover:shadow-[inset_0_0_18px_rgba(34,211,238,0.08),0_28px_44px_-32px_rgba(34,211,238,0.68)]"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
            >
              <div className="relative aspect-16/10 overflow-hidden">
                <Image
                  src={project.image}
                  alt={`${project.name} preview`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[52%] bg-linear-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
                <span className="absolute right-3 top-3 z-1 rounded-full border border-cyan-400/45 bg-cyan-950/50 px-[0.52rem] py-[0.24rem] text-[0.66rem] uppercase tracking-[0.12em] text-cyan-100 backdrop-blur-xs">
                  Case Study
                </span>
              </div>

              <div className="grid content-start gap-[0.65rem] p-[0.9rem]">
                <h3 className="m-0 text-[1rem] text-slate-200">
                  {project.name}
                </h3>
                <p className="m-0 line-clamp-2 text-[0.86rem] leading-[1.55] text-slate-400">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-[0.4rem]">
                  {project.stack.slice(0, 3).map((item) => (
                    <span
                      key={`${project.slug}-${item}`}
                      className="rounded-full border border-slate-400/30 bg-slate-900/55 px-2 py-[0.18rem] text-[0.68rem] text-blue-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/projects/${project.slug}`}
                  className="mt-[0.2rem] inline-flex w-fit items-center justify-center gap-[0.4rem] rounded-full border border-slate-400/35 bg-slate-900/45 px-[0.72rem] py-[0.34rem] text-[0.78rem] text-blue-100 transition-[color,border-color,box-shadow,background-color] duration-200 hover:border-cyan-400/55 hover:bg-cyan-950/55 hover:text-cyan-300 hover:shadow-[0_0_16px_rgba(34,211,238,0.2)]"
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

      <div className="mx-auto mt-14 max-w-7xl sm:mt-22">
        <p className="section-eyebrow">Projects</p>
        <h2 className="section-title">Horizontal Case Study Rail</h2>
      </div>

      <div
        ref={scrollerRef}
        className="projects-scroller mt-8 px-4 sm:mt-10 sm:px-6"
      >
        <div className="projects-track flex w-max gap-4 sm:gap-6">
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
                <p className="project-name max-w-[92%] wrap-break-word">
                  {repo.name}
                </p>
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
                <div className="mt-5 flex flex-wrap items-center gap-3 text-sm sm:gap-4">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="link-cyan shrink-0"
                    data-cursor="Open"
                  >
                    <FaGithub /> Code
                  </a>
                  {repo.homepage ? (
                    <a
                      href={repo.homepage}
                      target="_blank"
                      rel="noreferrer"
                      className="link-violet shrink-0"
                      data-cursor="Open"
                    >
                      <ExternalLink size={14} /> Live
                    </a>
                  ) : null}
                  <button
                    type="button"
                    onClick={() => setActiveProject(repo)}
                    className="w-full text-left text-cyan-300 hover:text-cyan-200 sm:ml-auto sm:w-auto sm:text-right"
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
