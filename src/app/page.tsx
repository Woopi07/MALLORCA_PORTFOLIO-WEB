"use client";

import { useEffect } from "react";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import CreativeProjects from "@/components/CreativeProjects";
import TechProjects from "@/components/TechProjects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import PortfolioWidget from "@/components/PortfolioWidget";

export default function Home() {
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
      <Footer />
      <PortfolioWidget />
    </>
  );
}
