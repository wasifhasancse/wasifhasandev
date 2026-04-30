"use client";

import { Mail, Menu, X } from "lucide-react";
import { useState } from "react";
import { commandItems, navItems } from "../lib/siteData";
import { CommandPalette } from "./CommandPalette";

function GitHubIcon({ size = 16, ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M12 .5A12 12 0 0 0 8.2 23.9c.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.4-4-1.4-.6-1.3-1.3-1.6-1.3-1.6-1.1-.7.1-.7.1-.7 1.2.1 1.9 1.2 1.9 1.2 1.1 1.8 2.9 1.3 3.6 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.4-5.5-6a4.7 4.7 0 0 1 1.2-3.3c-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11 11 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2a4.7 4.7 0 0 1 1.2 3.3c0 4.6-2.8 5.7-5.5 6 .4.3.8 1 .8 2v3c0 .3.2.7.8.6A12 12 0 0 0 12 .5" />
    </svg>
  );
}

function LinkedInIcon({ size = 16, ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5 2.5 2.5 0 0 0 5 3.5M3 9.5h4v11H3zm7 0h3.8V11h.1c.5-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6v5.5h-4V16c0-1.4 0-3.2-2-3.2s-2.3 1.5-2.3 3.1v4.6h-4z" />
    </svg>
  );
}

export function Navbar() {
  const [mode, setMode] = useState("dark");
  const [mobileOpen, setMobileOpen] = useState(false);

  const socialLinks = [
    {
      href: "https://github.com/wasifhasancse",
      label: "GitHub",
      icon: GitHubIcon,
    },
    {
      href: "https://www.linkedin.com/in/wasif-hasan/",
      label: "LinkedIn",
      icon: LinkedInIcon,
    },
    {
      href: "mailto:wasifhasancse@gmail.com",
      label: "Email",
      icon: Mail,
    },
  ];

  const toggleMode = () => {
    const next = mode === "dark" ? "neon" : "dark";
    setMode(next);
    document.documentElement.setAttribute("data-theme", next);
  };

  return (
    <>
      <header className="fixed left-0 top-0 z-50 w-full px-4 pt-4">
        <div className="navbar-shell mx-auto max-w-7xl rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 backdrop-blur-xl">
          <div className="navbar-row">
            <a
              href="#home"
              className="navbar-brand"
              data-cursor="Home"
              data-magnetic
              data-magnetic-strength="0.14"
              onClick={() => setMobileOpen(false)}
            >
              <span className="navbar-brand-mark">WH</span>
              <span className="navbar-brand-copy">
                <strong>Wasif Hasan</strong>
                <small>Full Stack Developer</small>
              </span>
            </a>

            <nav className="navbar-links hidden items-center gap-5 lg:flex">
              {navItems.map(([id, label]) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className="nav-link text-sm text-slate-200"
                  data-cursor={label}
                  data-magnetic
                  data-magnetic-strength="0.12"
                  onClick={() => setMobileOpen(false)}
                >
                  {label}
                </a>
              ))}
            </nav>

            <div className="navbar-actions">
              <div className="navbar-socials hidden md:flex">
                {socialLinks.map((item) => {
                  const Icon = item.icon;

                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target={
                        item.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        item.href.startsWith("http") ? "noreferrer" : undefined
                      }
                      className="navbar-social-link"
                      aria-label={item.label}
                      data-cursor={item.label}
                      data-magnetic
                      data-magnetic-strength="0.12"
                    >
                      <Icon size={16} />
                    </a>
                  );
                })}
              </div>

              <a
                href="#contact"
                className="navbar-cta hidden sm:inline-flex"
                data-cursor="Contact"
                data-magnetic
                data-magnetic-strength="0.16"
              >
                Contact Me
              </a>

              <button
                type="button"
                onClick={toggleMode}
                className="navbar-mode-toggle"
                data-cursor="Switch"
                data-magnetic
                data-magnetic-strength="0.16"
              >
                {mode === "dark" ? "Neon" : "Dark"}
              </button>

              <button
                type="button"
                className="navbar-menu-toggle lg:hidden"
                onClick={() => setMobileOpen((prev) => !prev)}
                aria-expanded={mobileOpen}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>

          {mobileOpen ? (
            <div className="navbar-mobile lg:hidden">
              <nav className="navbar-mobile-links">
                {navItems.map(([id, label]) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    className="navbar-mobile-link"
                    onClick={() => setMobileOpen(false)}
                  >
                    {label}
                  </a>
                ))}
              </nav>

              <div className="navbar-mobile-footer">
                <div className="navbar-socials">
                  {socialLinks.map((item) => {
                    const Icon = item.icon;

                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        target={
                          item.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          item.href.startsWith("http")
                            ? "noreferrer"
                            : undefined
                        }
                        className="navbar-social-link"
                        aria-label={item.label}
                      >
                        <Icon size={16} />
                      </a>
                    );
                  })}
                </div>

                <a
                  href="#contact"
                  className="navbar-cta"
                  onClick={() => setMobileOpen(false)}
                >
                  Contact Me
                </a>
              </div>
            </div>
          ) : null}
        </div>
      </header>

      <CommandPalette items={commandItems} />
    </>
  );
}
