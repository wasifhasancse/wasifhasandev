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

  return (
    <section id="github" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="section-eyebrow">GitHub</p>
        <h2 className="section-title">Neon Data Pulse</h2>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <article className="glass-card neon-stat">
            <p>{followers}</p>
            <span>Followers</span>
          </article>
          <article className="glass-card neon-stat">
            <p>{repos}</p>
            <span>Repositories</span>
          </article>
          <article className="glass-card neon-stat">
            <p>{commits}</p>
            <span>Estimated Commits</span>
          </article>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <Image
            src={`https://github-readme-stats.vercel.app/api?username=wasifhasancse&show_icons=true&theme=tokyonight&hide_border=true&bg_color=020617`}
            alt="GitHub stats"
            width={640}
            height={260}
            unoptimized
            className="rounded-2xl border border-white/10"
          />
          <Image
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=wasifhasancse&layout=compact&theme=tokyonight&hide_border=true&bg_color=020617`}
            alt="Top languages"
            width={640}
            height={260}
            unoptimized
            className="rounded-2xl border border-white/10"
          />
        </div>
      </div>
    </section>
  );
}
