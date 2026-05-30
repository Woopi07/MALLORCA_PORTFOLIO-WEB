"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-32 min-h-screen flex items-center" style={{ backgroundColor: "oklch(65% 0.22 25)" }}>
      <div className="container">
        <h2 className="section-title text-white text-center">Say Hello!</h2>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, ease: [0.17, 0.67, 0.83, 0.67] }}
          className="retro-card max-w-[600px] mx-auto"
          style={{ color: "oklch(15% 0.01 250)" }}
        >
          <form onSubmit={(e) => e.preventDefault()}>
            <label className="block font-extrabold mb-2 font-mono text-sm">NAME.TXT</label>
            <input
              type="text"
              placeholder="Who are you?"
              className="w-full p-4 border-[4px] border-[oklch(15%_0.01_250)] mb-6 font-body font-semibold rounded-[8px] bg-[oklch(98%_0.01_250)] text-[oklch(15%_0.01_250)] focus:outline-none focus:border-[oklch(85%_0.18_90)]"
            />
            <label className="block font-extrabold mb-2 font-mono text-sm">EMAIL.COM</label>
            <input
              type="email"
              placeholder="Where can I reach you?"
              className="w-full p-4 border-[4px] border-[oklch(15%_0.01_250)] mb-6 font-body font-semibold rounded-[8px] bg-[oklch(98%_0.01_250)] text-[oklch(15%_0.01_250)] focus:outline-none focus:border-[oklch(85%_0.18_90)]"
            />
            <label className="block font-extrabold mb-2 font-mono text-sm">MESSAGE.DOC</label>
            <textarea
              placeholder="Tell me about your project..."
              className="w-full p-4 border-[4px] border-[oklch(15%_0.01_250)] mb-6 font-body font-semibold rounded-[8px] bg-[oklch(98%_0.01_250)] text-[oklch(15%_0.01_250)] focus:outline-none focus:border-[oklch(85%_0.18_90)]"
              rows={4}
            />
            <button
              type="button"
              className="w-full inline-block px-8 py-4 bg-[oklch(85%_0.18_90)] border-[4px] border-[oklch(15%_0.01_250)] shadow-[6px_6px_0_oklch(15%_0.01_250)] font-display no-underline text-[oklch(15%_0.01_250)] cursor-pointer transition-all duration-100 uppercase text-base rounded-[99px] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[8px_8px_0_oklch(15%_0.01_250)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0_oklch(15%_0.01_250)]"
            >
              send message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
