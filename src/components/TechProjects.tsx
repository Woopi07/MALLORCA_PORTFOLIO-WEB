"use client";

import React from "react";

export default function TechProjects() {
  return (
    <section id="tech">
      <div className="container">
        <h2 className="section-title" style={{ color: "var(--accent)", textShadow: "6px 6px 0px white" }}>Tech Projects</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "3rem" }}>
          <div className="retro-card project-card reveal" style={{ color: "var(--fg)" }}>
            <div style={{ background: "#333", height: "200px", border: "var(--bw) solid var(--border)", marginBottom: "1.5rem", display: "grid", placeItems: "center" }}>
              <span style={{ fontFamily: "var(--font-display)", color: "white" }}>[DASHBOARD MOCK]</span>
            </div>
            <h3>AI Analytics Platform</h3>
            <p style={{ fontWeight: 500 }}>Custom React dashboard with real-time data visualization using D3.js.</p>
          </div>
          <div className="retro-card project-card reveal" style={{ color: "var(--fg)" }}>
            <div style={{ background: "#333", height: "200px", border: "var(--bw) solid var(--border)", marginBottom: "1.5rem", display: "grid", placeItems: "center" }}>
              <span style={{ fontFamily: "var(--font-display)", color: "white" }}>[CLI TOOL]</span>
            </div>
            <h3>DevOps Automation</h3>
            <p style={{ fontWeight: 500 }}>High-performance Go binary for managing container clusters.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
