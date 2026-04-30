"use client";

import "animate.css";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { useEffect } from "react";
import { AboutStory } from "../sections/AboutStory";
import { AIAsk } from "../sections/AIAsk";
import { ContactGlow } from "../sections/ContactGlow";
import { GitHubNeon } from "../sections/GitHubNeon";
import { Hero } from "../sections/Hero";
import { ProjectsRail } from "../sections/ProjectsRail";
import { SkillsOrbital } from "../sections/SkillsOrbital";
import { CustomCursor } from "./CustomCursor";
import { Navbar } from "./Navbar";

gsap.registerPlugin(ScrollTrigger);

export function PortfolioClient({ repos, profile }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      wheelMultiplier: 0.8,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    const layers = gsap.utils.toArray(".parallax-layer");
    layers.forEach((layer) => {
      gsap.to(layer, {
        yPercent: Number(layer.getAttribute("data-depth")) || 12,
        ease: "none",
        scrollTrigger: {
          trigger: layer,
          scrub: true,
          start: "top bottom",
          end: "bottom top",
        },
      });
    });

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach((item) => item.kill());
    };
  }, []);

  return (
    <>
      <CustomCursor />
      <Navbar />
      <div aria-hidden className="bg-mesh" />
      <div aria-hidden className="noise-overlay" />

      <main>
        <div className="parallax-layer" data-depth="-8">
          <Hero />
        </div>
        <div className="parallax-layer" data-depth="10">
          <AboutStory />
        </div>
        <div className="parallax-layer" data-depth="-6">
          <SkillsOrbital />
        </div>
        <ProjectsRail repos={repos} />
        <GitHubNeon profile={profile} />
        <AIAsk />
        <ContactGlow />
      </main>
    </>
  );
}
