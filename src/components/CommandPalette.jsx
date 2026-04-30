"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

export function CommandPalette({ items }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const onKey = (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((prev) => !prev);
      }
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const filtered = useMemo(() => {
    return items.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase()),
    );
  }, [items, query]);

  const goTo = (target) => {
    setOpen(false);
    setQuery("");
    const section = document.getElementById(target);
    if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-80 grid place-items-center bg-slate-950/75 px-4"
        >
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            className="w-full max-w-xl rounded-2xl border border-cyan-300/20 bg-slate-900/95 p-4 shadow-[0_0_50px_-20px_rgba(34,211,238,0.9)]"
          >
            <input
              autoFocus
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Type a command..."
              className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-slate-100 outline-none focus:border-cyan-300"
            />
            <div className="mt-3 max-h-72 space-y-2 overflow-y-auto">
              {filtered.map((item) => (
                <button
                  key={item.target}
                  type="button"
                  onClick={() => goTo(item.target)}
                  className="w-full rounded-lg border border-white/10 px-3 py-2 text-left text-slate-200 transition hover:border-cyan-300/40 hover:bg-cyan-400/10"
                >
                  {item.title}
                </button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
