"use client";

import { motion } from "framer-motion";

function Reveal({ children, delay = 0, rot = "0deg", className = "" }: { children: React.ReactNode; delay?: number; rot?: string; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0, rotate: rot }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, delay, ease: [0.17, 0.67, 0.83, 0.67] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className="py-32 min-h-screen flex items-center relative overflow-hidden"
      style={{
        backgroundColor: "oklch(55% 0.12 250)",
        backgroundImage: "radial-gradient(oklch(15% 0.01 250) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }}
    >
      <div className="container">
        <div className="scrapbook-grid grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* left */}
          <div className="relative flex justify-center items-center">
            <Reveal rot="-2deg">
              <div className="pin absolute -top-[15px] left-1/2 -translate-x-1/2 w-5 h-5 bg-[radial-gradient(circle_at_30%_30%,#ff4d4d,#900)] rounded-full shadow-[2px_2px_4px_rgba(0,0,0,0.5)] z-10" />

              <div className="tape absolute w-[100px] h-10 bg-white/40 backdrop-blur-sm border border-black/10 z-[3] -top-5 -left-8 -rotate-[35deg]" />
              <div className="tape absolute w-[100px] h-10 bg-white/40 backdrop-blur-sm border border-black/10 z-[3] -top-3 -right-10 rotate-45" />

              <motion.div
                className="photo-frame bg-white p-4 pb-16 border-[4px] border-[oklch(15%_0.01_250)] shadow-[15px_15px_0_oklch(15%_0.01_250)] relative z-[2] max-w-[400px] rounded-[4px]"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: [0.42, 0, 0.58, 1] }}
              >
                <div className="absolute inset-[-5px] bg-[#fff9c4] border-2 border-[oklch(15%_0.01_250)] rotate-3 -z-[1] shadow-[10px_10px_0_rgba(0,0,0,0.1)]" />
                <img
                  src="/assets/prototype-images/mpml5rjz-8a0e48cf-9bff-48fa-a6aa-e36bf6b18e59.jpg"
                  alt="MJ"
                  className="w-full h-auto border-2 border-[oklch(15%_0.01_250)] block image-rendering-auto"
                />
                <p className="font-hand text-center mt-6 text-[#2b5797] text-xl">
                  Designer at work!
                </p>
                <div className="sticker yellow absolute bottom-2.5 right-[-30px] rotate-15 bg-[oklch(85%_0.18_90)] px-5 py-3 border-[4px] border-[oklch(15%_0.01_250)] shadow-[4px_4px_0_oklch(15%_0.01_250)] font-display text-lg select-none">
                  THAT&apos;S ME!
                </div>
              </motion.div>
            </Reveal>

            <Reveal rot="-5deg" className="absolute -bottom-10 -left-16 z-[4]">
              <div className="bg-[oklch(85%_0.18_90)] p-8 border-[4px] border-[oklch(15%_0.01_250)] shadow-[8px_8px_0_oklch(15%_0.01_250)] max-w-[250px] -rotate-5">
                <p className="font-mono font-extrabold text-sm leading-tight">
                  // STATUS: CREATING ART<br />// LOCATION: THE INTERNET<br />// MOOD: INSPIRED
                </p>
                <div className="absolute -top-2.5 right-2.5 w-3.5 h-3.5 bg-[radial-gradient(circle_at_30%_30%,#ff4d4d,#900)] rounded-full shadow-[2px_2px_4px_rgba(0,0,0,0.5)]" />
              </div>
            </Reveal>

            <div className="star absolute -top-15 right-0 w-12 h-12 bg-white opacity-60"
              style={{
                clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
                border: "3px solid var(--color-border)",
              }}
            />
          </div>

          {/* right */}
          <div className="relative">
            <Reveal>
              <div className="bg-[oklch(98%_0.01_250)] p-12 border-[4px] border-[oklch(15%_0.01_250)] shadow-[12px_12px_0_oklch(65%_0.22_25)] relative z-[2]">
                <h2 className="font-display text-[clamp(3rem,8vw,5rem)] leading-none text-[oklch(65%_0.22_25)] mb-8 -tracking-[2px]">
                  HEY, <br />I&apos;M MJ!
                </h2>
                <p className="text-lg font-semibold mb-6">
                  I&apos;m a 21-year-old <strong>Graphic Designer</strong>, <strong>UI/UX Developer</strong>, and <strong>Project Manager</strong> passionate about crafting playful digital experiences that feel both creative and functional.
                </p>
                <p className="text-lg font-semibold mb-6">
                  Currently studying at <strong>Pamantasan ng Lungsod ng Valenzuela</strong>, I&apos;m constantly exploring new ideas, improving my skills, and pushing my creativity beyond limits.
                </p>

                <div className="mt-10 flex gap-6 items-center flex-wrap">
                  <a href="#contact" className="inline-block px-8 py-4 bg-[oklch(85%_0.18_90)] border-[4px] border-[oklch(15%_0.01_250)] shadow-[6px_6px_0_oklch(15%_0.01_250)] font-display no-underline text-[oklch(15%_0.01_250)] cursor-pointer transition-all duration-100 uppercase text-lg rounded-[99px] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[8px_8px_0_oklch(15%_0.01_250)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0_oklch(15%_0.01_250)]">
                    Let&apos;s Connect!
                  </a>
                  <div className="inline-block rotate-5 bg-[oklch(65%_0.22_25)] text-white px-5 py-2 border-[4px] border-[oklch(15%_0.01_250)] shadow-[4px_4px_0_oklch(15%_0.01_250)] font-display text-sm select-none">
                    HIRE ME!
                  </div>
                </div>

                <div className="absolute bottom-5 right-8 w-[100px] h-10 bg-white/40 backdrop-blur-sm border border-black/10 -rotate-[15deg]" />
                <div className="star absolute -top-5 -right-5 w-10 h-10"
                  style={{
                    background: "oklch(85% 0.18 90)",
                    clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
                    border: "3px solid var(--color-border)",
                  }}
                />
              </div>
            </Reveal>

            <svg className="absolute -top-10 -left-5 -rotate-30 opacity-20 pointer-events-none" width="100" height="100" viewBox="0 0 100 100">
              <path d="M20,80 Q50,20 80,40 M80,40 L70,30 M80,40 L70,50" fill="none" stroke="oklch(65% 0.22 25)" strokeWidth="3" strokeLinecap="round" />
            </svg>

            <div className="sticker yellow absolute -bottom-5 right-5 -rotate-8 bg-[oklch(85%_0.18_90)] px-4 py-2 border-[4px] border-[oklch(15%_0.01_250)] shadow-[4px_4px_0_oklch(15%_0.01_250)] font-display text-xs select-none">
              2026 EDITION
            </div>
            <div className="star absolute top-2/4 -right-12 bg-white scale-[0.5]"
              style={{
                clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
                border: "3px solid var(--color-border)",
                width: 60,
                height: 60,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
