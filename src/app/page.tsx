"use client";

import { useState, useCallback, useEffect } from "react";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import CreativeProjects from "@/components/CreativeProjects";
import TechProjects from "@/components/TechProjects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import PortfolioWidget from "@/components/PortfolioWidget";
import CVModal from "@/components/CVModal";

export default function Home() {
  const [cvOpen, setCvOpen] = useState(false);
  const openCv = useCallback(() => setCvOpen(true), []);
  const closeCv = useCallback(() => setCvOpen(false), []);

  // --- SCROLL REVEAL ENGINE ---
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <Nav />
      <Hero />
      <About />
      <CreativeProjects />
      <TechProjects />
      <Experience />
      <Contact />
      <PortfolioWidget onClick={openCv} />
      <CVModal open={cvOpen} onClose={closeCv} />
    </>
  );
}
