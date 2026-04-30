export function Footer() {
  return (
    <footer className="site-footer" aria-label="Site footer">
      <div className="site-footer-rail">
        <p className="site-footer-copyright">
          © 2026 Wasif Hasan. All rights reserved.
        </p>

        <nav className="site-footer-icons" aria-label="Footer social links">
          <a
            href="https://github.com/wasifhasancse"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            data-magnetic
            data-magnetic-strength="0.1"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 .5A12 12 0 0 0 8.2 23.9c.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.4-4-1.4-.6-1.3-1.3-1.6-1.3-1.6-1.1-.7.1-.7.1-.7 1.2.1 1.9 1.2 1.9 1.2 1.1 1.8 2.9 1.3 3.6 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.4-5.5-6a4.7 4.7 0 0 1 1.2-3.3c-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11 11 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2a4.7 4.7 0 0 1 1.2 3.3c0 4.6-2.8 5.7-5.5 6 .4.3.8 1 .8 2v3c0 .3.2.7.8.6A12 12 0 0 0 12 .5" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/wasif-hasan/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            data-magnetic
            data-magnetic-strength="0.1"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5 2.5 2.5 0 0 0 5 3.5M3 9.5h4v11H3zm7 0h3.8V11h.1c.5-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6v5.5h-4V16c0-1.4 0-3.2-2-3.2s-2.3 1.5-2.3 3.1v4.6h-4z" />
            </svg>
          </a>
        </nav>
      </div>
    </footer>
  );
}
