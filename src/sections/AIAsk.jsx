"use client";

import { useState } from "react";
import { aiAnswers } from "../lib/siteData";

export function AIAsk() {
  const [active, setActive] = useState(aiAnswers[0]);

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-5xl rounded-3xl border border-cyan-300/20 bg-slate-900/70 p-6 backdrop-blur-xl">
        <p className="section-eyebrow">AI Assistant</p>
        <h2 className="section-title">Ask About Wasif</h2>

        <div className="mt-6 grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-3">
            {aiAnswers.map((item) => (
              <button
                key={item.q}
                type="button"
                onClick={() => setActive(item)}
                className={`w-full rounded-xl border px-4 py-3 text-left transition ${
                  active.q === item.q
                    ? "border-cyan-300 bg-cyan-400/10 text-cyan-100"
                    : "border-white/10 text-slate-300 hover:border-cyan-300/40"
                }`}
                data-magnetic
                data-magnetic-strength="0.12"
              >
                {item.q}
              </button>
            ))}
          </div>
          <div className="rounded-xl border border-white/10 bg-slate-950/70 p-5 text-slate-200">
            {active.a}
          </div>
        </div>
      </div>
    </section>
  );
}
