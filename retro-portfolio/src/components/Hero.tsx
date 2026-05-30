"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: "linear-gradient(rgba(0,0,0,0.02), rgba(0,0,0,0.02)), url('/assets/prototype-images/mpmgpwy4-HERO_PAGE.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "oklch(45% 0.15 150)",
      }}
    >
      <div className="hero-content relative z-10 max-w-5xl mx-auto w-full h-full pointer-events-none">
        <div className="pointer-events-auto" />
      </div>

      <motion.div
        className="star absolute"
        style={{
          top: "25%",
          left: "15%",
          width: 60,
          height: 60,
          background: "var(--color-accent-alt)",
          clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
          border: "3px solid var(--color-border)",
        }}
        animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="star absolute"
        style={{
          bottom: "20%",
          right: "12%",
          width: 60,
          height: 60,
          background: "var(--color-accent)",
          clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
          border: "3px solid var(--color-border)",
        }}
        animate={{ rotate: [0, -360], scale: [1.2, 1, 1.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      <svg className="absolute top-[10%] right-[20%] opacity-20 pointer-events-none" width="100" height="100" viewBox="0 0 100 100">
        <path d="M10,50 Q30,10 50,50 T90,50" fill="none" stroke="black" strokeWidth="5" />
      </svg>
      <svg className="absolute bottom-[10%] left-[15%] opacity-20 pointer-events-none" width="120" height="120" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40" fill="none" stroke="black" strokeWidth="4" strokeDasharray="10 5" />
      </svg>
    </section>
  );
}
