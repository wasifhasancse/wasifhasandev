"use client";

import "animate.css";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { useEffect } from "react";
import { AboutStory } from "../sections/AboutStory";
import { AIAsk } from "../sections/AIAsk";
import { ContactGlow } from "../sections/ContactGlow";
import { ExperienceEducation } from "../sections/ExperienceEducation";
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

    const canHover = window.matchMedia(
      "(hover: hover) and (pointer: fine)",
    ).matches;
    const cleanupMagnetic = [];

    if (canHover) {
      const magneticNodes = gsap.utils.toArray("[data-magnetic]");

      magneticNodes.forEach((node) => {
        const strength = Number(
          node.getAttribute("data-magnetic-strength") || 0.18,
        );
        const scale = Number(node.getAttribute("data-magnetic-scale") || 1.02);

        const xTo = gsap.quickTo(node, "x", {
          duration: 0.32,
          ease: "power3.out",
        });
        const yTo = gsap.quickTo(node, "y", {
          duration: 0.32,
          ease: "power3.out",
        });
        const scaleTo = gsap.quickTo(node, "scale", {
          duration: 0.25,
          ease: "power2.out",
        });

        const onMove = (event) => {
          const rect = node.getBoundingClientRect();
          const x = event.clientX - (rect.left + rect.width / 2);
          const y = event.clientY - (rect.top + rect.height / 2);
          xTo(x * strength);
          yTo(y * strength);
        };

        const onEnter = () => scaleTo(scale);

        const onLeave = () => {
          xTo(0);
          yTo(0);
          scaleTo(1);
        };

        node.addEventListener("mousemove", onMove);
        node.addEventListener("mouseenter", onEnter);
        node.addEventListener("mouseleave", onLeave);

        cleanupMagnetic.push(() => {
          node.removeEventListener("mousemove", onMove);
          node.removeEventListener("mouseenter", onEnter);
          node.removeEventListener("mouseleave", onLeave);
          gsap.set(node, { x: 0, y: 0, scale: 1 });
        });
      });
    }

    return () => {
      lenis.destroy();
      cleanupMagnetic.forEach((fn) => fn());
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
          <Hero profileImage={profile?.avatar_url} />
        </div>
        <div className="parallax-layer" data-depth="10">
          <AboutStory />
        </div>
        <div className="parallax-layer" data-depth="8">
          <ExperienceEducation />
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
