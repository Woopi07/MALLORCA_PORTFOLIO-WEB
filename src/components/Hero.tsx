"use client";

import React from "react";

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-content"></div>

      <div className="star" style={{ top: "25%", left: "15%", transform: "rotate(-15deg)", scale: "0.8" } as React.CSSProperties}></div>
      <div className="star" style={{ bottom: "20%", right: "12%", transform: "rotate(20deg)", background: "var(--accent)", scale: "1.2" } as React.CSSProperties}></div>
      
      <svg className="doodle" style={{ top: "10%", right: "20%" }} width="100" height="100" viewBox="0 0 100 100">
        <path d="M10,50 Q30,10 50,50 T90,50" fill="none" stroke="black" strokeWidth="5" />
      </svg>
      <svg className="doodle" style={{ bottom: "10%", left: "15%" }} width="120" height="120" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40" fill="none" stroke="black" strokeWidth="4" strokeDasharray="10 5" />
      </svg>
    </section>
  );
}
