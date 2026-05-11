import { JetBrains_Mono, Syne } from "next/font/google";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";
import SmoothScrollProvider from "./provider/SmoothScrolling";

/* ── Fonts ─────────────────────────────────────────────────
   next/font handles preload automatically — no manual
   <link rel="preload"> needed (that caused your warnings).
─────────────────────────────────────────────────────────── */
const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap", // ✅ prevents FOUT
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500", "700"],
});

/* ── Metadata ───────────────────────────────────────────── */
export const metadata = {
  title: {
    default: "Wasif Hasan — Full-Stack MERN Developer",
    template: "%s | Wasif Hasan",
  },
  description:
    "Portfolio of Wasif Hasan, a Full-Stack MERN Developer specializing in Next.js, React, Node.js, and MongoDB. Based in Bangladesh — open to full-time, remote, and freelance opportunities.",
  keywords: [
    "Wasif Hasan",
    "MERN Stack",
    "Full Stack Developer",
    "Next.js",
    "React",
    "Node.js",
    "MongoDB",
    "Portfolio",
    "Bangladesh",
    "Freelance Developer",
  ],
  authors: [
    { name: "Wasif Hasan", url: "https://www.linkedin.com/in/wasifhasancse/" },
  ],
  creator: "Wasif Hasan",
  metadataBase: new URL("https://wasif.dev"),
  openGraph: {
    title: "Wasif Hasan — Full-Stack MERN Developer",
    description:
      "Building scalable, production-ready web applications using MongoDB, Express.js, React & Node.js.",
    url: "https://wasif.dev",
    siteName: "Wasif Hasan Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wasif Hasan — Full-Stack MERN Developer",
    description:
      "Building scalable, production-ready web applications using MongoDB, Express.js, React & Node.js.",
    creator: "@wasifhasancse",
  },
};

/* ── Layout ─────────────────────────────────────────────── */
export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${mono.variable}`}
      /* ✅ suppressHydrationWarning prevents mismatch from
         browser extensions modifying the DOM */
      suppressHydrationWarning
    >
      <body className="bg-[#060412] text-white overflow-x-hidden antialiased">
        {/*
          ✅ SmoothScrollProvider is 'use client' — safe to wrap here.
          Navbar and Footer are inside so Lenis covers the full page.
        */}
        <SmoothScrollProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
