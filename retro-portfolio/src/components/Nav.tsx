"use client";

import { motion } from "framer-motion";

const links = [
  { href: "#about", label: "About Me" },
  { href: "#creative", label: "Creative Projects" },
  { href: "#tech", label: "Tech Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-[1200px]">
        <div className="relative bg-[#d2b48c] bg-[radial-gradient(circle_at_2px_2px,rgba(0,0,0,0.1)_1px,transparent_0)] bg-[length:6px_6px] border-[10px] border-[#8b5a2b] shadow-[inset_0_0_15px_rgba(0,0,0,0.2),0_10px_30px_rgba(0,0,0,0.4)] flex justify-between items-center !py-[21px] !px-[45px] rounded-[4px]">
        <div className="absolute w-5 h-5 bg-[radial-gradient(circle_at_30%_30%,#ff4d4d,#900)] rounded-full shadow-[2px_2px_4px_rgba(0,0,0,0.5)] -top-[8px] -left-[8px]" />
        <div className="absolute w-5 h-5 bg-[radial-gradient(circle_at_30%_30%,#ff4d4d,#900)] rounded-full shadow-[2px_2px_4px_rgba(0,0,0,0.5)] -top-[8px] -right-[8px]" />

        <div className="font-display text-[#2b5797] bg-white px-8 py-4 border-4 border-[oklch(15%_0.01_250)] -rotate-3 shadow-[5px_5px_0_rgba(0,0,0,0.15)] leading-tight text-center text-3xl whitespace-nowrap">
          MJ&apos;S PORTFOLIO
        </div>

        <ul className="hidden md:flex gap-6 items-center list-none">
          {links.map((link, i) => (
            <motion.li
              key={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <a
                href={link.href}
                className="font-extrabold uppercase text-lg px-6 py-3 bg-[#fff9c4] border-2 border-[oklch(15%_0.01_250)] shadow-[4px_4px_0_rgba(0,0,0,0.15)] inline-block transition-all duration-200"
                style={{
                  transform: i % 2 === 0 ? "rotate(2deg)" : "rotate(-2deg)",
                }}
              >
                {link.label}
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
