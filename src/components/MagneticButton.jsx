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
    const content = node.querySelector(".magnetic-content");
    if (!content) return;
    content.style.transform = `translate(${x * 0.18}px, ${y * 0.18}px)`;
  };

  const onLeave = () => {
    const node = ref.current;
    if (!node) return;
    const content = node.querySelector(".magnetic-content");
    if (!content) return;
    content.style.transform = "translate(0px, 0px)";
  };

  return (
    <button
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`magnetic-btn ${className}`}
      data-magnetic
      data-magnetic-strength="0.08"
      data-magnetic-scale="1.03"
      {...rest}
    >
      <span className="magnetic-content relative z-10">{children}</span>
      <span className="magnetic-ripple" />
    </button>
  );
}
