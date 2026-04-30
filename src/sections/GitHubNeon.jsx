"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function GitHubNeon({ profile }) {
  const [followers, setFollowers] = useState(0);
  const [repos, setRepos] = useState(0);
  const [commits, setCommits] = useState(0);

  useEffect(() => {
    const targetFollowers = profile?.followers || 0;
    const targetRepos = profile?.public_repos || 0;
    const targetCommits = 950;

    let frame = 0;
    const max = 60;

    const tick = () => {
      frame += 1;
      setFollowers(Math.round((targetFollowers * frame) / max));
      setRepos(Math.round((targetRepos * frame) / max));
      setCommits(Math.round((targetCommits * frame) / max));
      if (frame < max) requestAnimationFrame(tick);
    };

    tick();
  }, [profile]);

  const stats = [
    { value: followers, label: "Followers", icon: "👥" },
    { value: repos, label: "Repositories", icon: "📚" },
    { value: commits, label: "Estimated Commits", icon: "⚡" },
  ];

  return (
    <section id="github" className="px-6 py-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-linear-to-br from-cyan-500/5 via-transparent to-blue-500/5" />

      <div className="mx-auto max-w-6xl">
        <p className="section-eyebrow">GitHub</p>
        <h2 className="section-title">Neon Data Pulse</h2>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {stats.map((stat, idx) => (
            <article
              key={stat.label}
              className="neon-stat-card group relative"
              style={{
                animationDelay: `${idx * 0.1}s`,
              }}
            >
              <div className="absolute inset-0 bg-linear-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative p-6 flex items-start justify-between">
                <div className="flex-1">
                  <p className="neon-stat-value">{stat.value}</p>
                  <span className="neon-stat-label">{stat.label}</span>
                </div>
                <div className="neon-stat-dot" />
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="neon-image-wrapper">
            <Image
              src={`https://github-readme-stats.vercel.app/api?username=wasifhasancse&show_icons=true&theme=tokyonight&hide_border=true&bg_color=020617`}
              alt="GitHub stats"
              width={640}
              height={260}
              unoptimized
              className="rounded-2xl border border-cyan-500/20 w-full h-auto"
            />
          </div>
          <div className="neon-image-wrapper">
            <Image
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=wasifhasancse&layout=compact&theme=tokyonight&hide_border=true&bg_color=020617`}
              alt="Top languages"
              width={640}
              height={260}
              unoptimized
              className="rounded-2xl border border-cyan-500/20 w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
