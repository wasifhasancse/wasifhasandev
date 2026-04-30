"use client";

import { useRef } from "react";

export function MagneticButton({ children, className = "", ...rest }) {
  const ref = useRef(null);

  const onMove = (event) => {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const x = event.clientX - (rect.left + rect.width / 2);
    const y = event.clientY - (rect.top + rect.height / 2);
    node.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
  };

  const onLeave = () => {
    const node = ref.current;
    if (!node) return;
    node.style.transform = "translate(0px, 0px)";
  };

  return (
    <button
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`magnetic-btn ${className}`}
      {...rest}
    >
      <span className="relative z-10">{children}</span>
      <span className="magnetic-ripple" />
    </button>
  );
}
