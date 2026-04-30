"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { aiAnswers } from "../lib/siteData";

export function AIAsk() {
  const [active, setActive] = useState(aiAnswers[0]);

  return (
    <section className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-5xl">
        <div className="rounded-3xl border border-cyan-400/30 bg-linear-to-br from-slate-900/80 to-slate-950/80 backdrop-blur-xl overflow-hidden">
          {/* Decorative top border glow */}
          <div className="h-px bg-linear-to-r from-transparent via-cyan-400/50 to-transparent" />

          <div className="p-8 md:p-10">
            <p className="section-eyebrow">AI Assistant</p>
            <h2 className="section-title">Ask About Wasif</h2>

            <div className="mt-8 grid gap-6 md:grid-cols-[1fr_1.2fr]">
              {/* Questions Panel */}
              <div className="space-y-3">
                {aiAnswers.map((item, idx) => (
                  <motion.button
                    key={item.q}
                    type="button"
                    onClick={() => setActive(item)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className={`w-full rounded-xl border px-4 py-3.5 text-left transition-all duration-300 group relative ${
                      active.q === item.q
                        ? "border-cyan-400/60 bg-linear-to-r from-cyan-500/15 to-blue-500/10 text-cyan-100 shadow-lg shadow-cyan-500/20"
                        : "border-white/10 text-slate-300 hover:border-cyan-400/40 hover:bg-white/5"
                    }`}
                    data-magnetic
                    data-magnetic-strength="0.12"
                  >
                    <span className="relative z-10 block text-sm font-medium leading-relaxed">
                      {item.q}
                    </span>
                    {active.q === item.q && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-linear-to-b from-cyan-400 to-blue-400 rounded-full"
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}
                  </motion.button>
                ))}
              </div>

              {/* Answer Panel */}
              <div className="rounded-xl border border-cyan-400/20 bg-slate-950/40 backdrop-blur-sm p-6 md:p-7 min-h-70 md:min-h-auto flex flex-col justify-between">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active.q}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="flex-1 flex flex-col justify-center"
                  >
                    <p className="text-slate-200 leading-relaxed text-sm md:text-base font-light">
                      {active.a}
                    </p>
                  </motion.div>
                </AnimatePresence>

                {/* Decorative bottom element */}
                <div className="mt-6 flex gap-2">
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      className="h-1 flex-1 rounded-full bg-linear-to-r from-cyan-500/30 to-blue-500/30"
                      style={{
                        width: `${((i + 1) / 3) * 100}%`,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Footer indicator */}
            <div className="mt-8 flex items-center justify-between">
              <p className="text-xs text-slate-500 uppercase tracking-widest">
                Interactive Q&A • {aiAnswers.length} Topics
              </p>
              <motion.div
                className="w-2.5 h-2.5 rounded-full bg-cyan-400"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              />
            </div>
          </div>

          {/* Decorative bottom border glow */}
          <div className="h-px bg-linear-to-r from-transparent via-blue-400/30 to-transparent" />
        </div>
      </div>
    </section>
  );
}
