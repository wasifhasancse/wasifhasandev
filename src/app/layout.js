import { Space_Grotesk, Syne } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

export const metadata = {
  title: "Wasif Hasan | Immersive Portfolio",
  description:
    "Awwwards-inspired interactive portfolio built with Next.js, Framer Motion, GSAP, and custom micro-interactions.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${syne.variable}`}
      data-theme="dark"
    >
      <body>{children}</body>
    </html>
  );
}
