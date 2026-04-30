"use client";

import { useState } from "react";
import { commandItems, navItems } from "../lib/siteData";
import { CommandPalette } from "./CommandPalette";

export function Navbar() {
  const [mode, setMode] = useState("dark");

  const toggleMode = () => {
    const next = mode === "dark" ? "neon" : "dark";
    setMode(next);
    document.documentElement.setAttribute("data-theme", next);
  };

  return (
    <>
      <header className="fixed left-0 top-0 z-50 w-full px-4 pt-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 backdrop-blur-xl">
          <a
            href="#home"
            className="text-sm font-semibold tracking-[0.2em] text-cyan-300 uppercase"
            data-cursor="Home"
            data-magnetic
            data-magnetic-strength="0.14"
          >
            Wasif.hsn
          </a>

          <nav className="hidden items-center gap-5 md:flex">
            {navItems.map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                className="nav-link text-sm text-slate-200"
                data-cursor={label}
                data-magnetic
                data-magnetic-strength="0.12"
              >
                {label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            onClick={toggleMode}
            className="rounded-full border border-cyan-300/30 px-3 py-1 text-xs text-cyan-200"
            data-cursor="Switch"
            data-magnetic
            data-magnetic-strength="0.16"
          >
            {mode === "dark" ? "Neon" : "Dark"} Mode
          </button>
        </div>
      </header>

      <CommandPalette items={commandItems} />
    </>
  );
}
