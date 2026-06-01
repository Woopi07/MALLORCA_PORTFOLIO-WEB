"use client";

import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container scrapbook-container">
        <div className="scrapbook-left reveal" style={{ "--rot": "-2deg" } as React.CSSProperties}>
          {/* Decorative Push Pin */}
          <div className="pin" style={{ top: "-15px", left: "50%", transform: "translateX(-50%)" }}></div>
          
          <div className="tape tape-tl"></div>
          <div className="tape tape-tr"></div>
          
          <div className="photo-frame">
            <img 
              src="/assets/prototype/mpml5rjz-8a0e48cf-9bff-48fa-a6aa-e36bf6b18e59.jpg" 
              alt="MJ" 
              className="scrapbook-img"
            />
            <p style={{ fontFamily: "var(--font-hand)", textAlign: "center", marginTop: "1.5rem", fontSize: "1.4rem", color: "var(--sticker-blue)" }}>
              Designer at work! 🎨
            </p>
            <div className="sticker yellow" style={{ bottom: "10px", right: "-30px", transform: "rotate(15deg)" }}>
              THAT&apos;S ME!
            </div>
          </div>

          <div className="paper-note reveal" style={{ "--rot": "-5deg" } as React.CSSProperties}>
            <p>// STATUS: CREATING ART<br />// LOCATION: THE INTERNET<br />// MOOD: INSPIRED</p>
            <div className="pin" style={{ top: "-10px", right: "10px", scale: "0.7" } as React.CSSProperties}></div>
          </div>

          {/* Floating Star Decoration */}
          <div className="star" style={{ top: "-60px", right: 0, background: "white", scale: "0.8", opacity: 0.6 } as React.CSSProperties}></div>
        </div>

        <div className="scrapbook-right">
          <div className="intro-card reveal">
            <h2 style={{ fontSize: "clamp(3rem, 8vw, 5rem)", letterSpacing: "-2px", marginBottom: "2rem" }}>
              HEY, <br /> I&apos;M MJ!
            </h2>
            <p>
              I’m a 21-year-old <strong>Graphic Designer</strong>, <strong>UI/UX Developer</strong>, and <strong>Project Manager</strong> passionate about crafting playful digital experiences that feel both creative and functional.
            </p>
            <p>
              Currently studying at <strong>Pamantasan ng Lungsod ng Valenzuela</strong>, I’m constantly exploring new ideas, improving my skills, and pushing my creativity beyond limits.
            </p>
            
            <div style={{ marginTop: "2.5rem", display: "flex", gap: "1.5rem", alignItems: "center", flexWrap: "wrap" }}>
              <a href="#contact" className="retro-button">Let&apos;s Connect!</a>
              <div className="sticker red" style={{ position: "static", transform: "rotate(5deg)", fontSize: "0.9rem", padding: "0.5rem 1.2rem" }}>
                HIRE ME!
              </div>
            </div>

            {/* Decorative elements inside card */}
            <div className="tape tape-br"></div>
            <div className="star" style={{ position: "absolute", top: "-20px", right: "-20px", background: "var(--accent)", scale: "0.7" } as React.CSSProperties}></div>
          </div>
          
          {/* Hand-drawn Doodle Arrow */}
          <svg className="doodle" style={{ top: "-40px", left: "-20px", transform: "rotate(-30deg)" }} width="100" height="100" viewBox="0 0 100 100">
            <path d="M20,80 Q50,20 80,40 M80,40 L70,30 M80,40 L70,50" fill="none" stroke="var(--accent-alt)" strokeWidth="3" strokeLinecap="round" />
          </svg>

          {/* Additional Stickers around the card */}
          <div className="sticker yellow" style={{ bottom: "-20px", right: "20px", transform: "rotate(-8deg)", fontSize: "0.8rem" }}>
            2026 EDITION
          </div>
          <div className="star" style={{ top: "40%", right: "-50px", background: "white", scale: "0.5" } as React.CSSProperties}></div>
        </div>
      </div>
    </section>
  );
}
