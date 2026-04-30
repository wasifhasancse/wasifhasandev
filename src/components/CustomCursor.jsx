"use client";

import { useEffect, useState } from "react";

export function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);
  const [label, setLabel] = useState("");

  useEffect(() => {
    const onMove = (event) => setPos({ x: event.clientX, y: event.clientY });

    const onOver = (event) => {
      const target = event.target.closest("[data-cursor]");
      if (!target) return;
      setHover(true);
      setLabel(target.getAttribute("data-cursor") || "Open");
    };

    const onOut = (event) => {
      const target = event.target.closest("[data-cursor]");
      if (!target) return;
      setHover(false);
      setLabel("");
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    window.addEventListener("mouseout", onOut);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mouseout", onOut);
    };
  }, []);

  return (
    <>
      <div className="custom-cursor-dot" style={{ left: pos.x, top: pos.y }} />
      <div
        className={`custom-cursor-ring ${hover ? "is-hover" : ""}`}
        style={{ left: pos.x, top: pos.y }}
      >
        {hover ? <span>{label}</span> : null}
      </div>
    </>
  );
}
