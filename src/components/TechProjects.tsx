"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "AI Analytics Platform",
    desc: "Custom React dashboard with real-time data visualization using D3.js.",
  },
  {
    title: "DevOps Automation",
    desc: "High-performance Go binary for managing container clusters.",
  },
];

function Card({ title, desc, index }: { title: string; desc: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, delay: index * 0.2, ease: [0.17, 0.67, 0.83, 0.67] }}
      className="retro-card"
    >
      <div className="bg-[#333] h-[200px] border-[4px] border-[oklch(15%_0.01_250)] mb-6 grid place-items-center">
        <span className="font-display text-white opacity-80">[DASHBOARD MOCK]</span>
      </div>
      <h3 className="font-display mb-4 text-xl text-[oklch(65%_0.22_25)]">{title}</h3>
      <p className="font-semibold">{desc}</p>
    </motion.div>
  );
}

export default function TechProjects() {
  return (
    <section id="tech" className="py-32 min-h-screen flex items-center" style={{ backgroundColor: "oklch(55% 0.12 250)" }}>
      <div className="container">
        <h2 className="section-title" style={{ color: "oklch(85% 0.18 90)", textShadow: "6px 6px 0px white" }}>
          Tech Projects
        </h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-12">
          {projects.map((p, i) => (
            <Card key={p.title} {...p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
