"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Retro Brand Identity",
    desc: "A complete visual overhaul for a modern music label with 80s roots.",
  },
  {
    title: "Festival Campaign",
    desc: 'Posters, social assets, and motion graphics for "Summer Vibes \'24".',
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
      <div className="bg-[#eee] h-[200px] border-[4px] border-[oklch(15%_0.01_250)] mb-6 grid place-items-center">
        <span className="font-display opacity-30">[WORK PREVIEW]</span>
      </div>
      <h3 className="font-display mb-4 text-xl text-[oklch(65%_0.22_25)]">{title}</h3>
      <p className="font-semibold">{desc}</p>
    </motion.div>
  );
}

export default function CreativeProjects() {
  return (
    <section id="creative" className="py-32 min-h-screen flex items-center bg-[oklch(98%_0.01_250)]">
      <div className="container">
        <h2 className="section-title">Creative Projects</h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-12">
          {projects.map((p, i) => (
            <Card key={p.title} {...p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
