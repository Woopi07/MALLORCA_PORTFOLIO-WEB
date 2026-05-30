"use client";

import { motion } from "framer-motion";

const items = [
  {
    badge: "CURRENT",
    badgeBg: "oklch(65% 0.22 25)",
    title: "Student @ Pamantasan ng Lungsod ng Valenzuela",
    desc: "Developing expertise in Project Management and Design Theory while building functional digital products.",
    rot: "-3deg",
  },
  {
    badge: "FREELANCE",
    badgeBg: "oklch(85% 0.18 90)",
    title: "Graphic Designer & UI Developer",
    desc: "Collaborating with small brands to create impactful visual identities and intuitive user interfaces.",
    rot: "2deg",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 min-h-screen flex items-center" style={{ backgroundColor: "oklch(85% 0.18 90)" }}>
      <div className="container">
        <h2 className="section-title text-white">My Journey</h2>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, ease: [0.17, 0.67, 0.83, 0.67] }}
          className="retro-card max-w-[900px] mx-auto p-16"
        >
          <div className="flex flex-col gap-12">
            {items.map((item) => (
              <div key={item.badge} className="flex gap-8 items-start">
                <div
                  className="px-4 py-2 border-[4px] border-[oklch(15%_0.01_250)] font-mono font-extrabold text-xs shrink-0"
                  style={{ background: item.badgeBg, transform: `rotate(${item.rot})` }}
                >
                  {item.badge}
                </div>
                <div>
                  <h3 className="font-display mb-2 text-lg">{item.title}</h3>
                  <p className="font-semibold">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="sticker yellow absolute -bottom-4 left-5 rotate-5 bg-[oklch(85%_0.18_90)] px-4 py-1.5 border-[4px] border-[oklch(15%_0.01_250)] shadow-[4px_4px_0_oklch(15%_0.01_250)] font-display text-xs select-none">
            DREAM BIG!
          </div>
        </motion.div>
      </div>
    </section>
  );
}
