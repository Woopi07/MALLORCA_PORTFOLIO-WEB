"use client";

import React from "react";

export default function CreativeProjects() {
  return (
    <section id="creative">
      <div className="container">
        <h2 className="section-title">Creative Projects</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "3rem" }}>
          <div className="retro-card project-card reveal">
            <div style={{ background: "#eee", height: "200px", border: "var(--bw) solid var(--border)", marginBottom: "1.5rem", display: "grid", placeItems: "center" }}>
              <span style={{ fontFamily: "var(--font-display)", opacity: 0.3 }}>[WORK PREVIEW]</span>
            </div>
            <h3>Retro Brand Identity</h3>
            <p style={{ fontWeight: 500 }}>A complete visual overhaul for a modern music label with 80s roots.</p>
          </div>
          <div className="retro-card project-card reveal">
            <div style={{ background: "#eee", height: "200px", border: "var(--bw) solid var(--border)", marginBottom: "1.5rem", display: "grid", placeItems: "center" }}>
              <span style={{ fontFamily: "var(--font-display)", opacity: 0.3 }}>[WORK PREVIEW]</span>
            </div>
            <h3>Festival Campaign</h3>
            <p style={{ fontWeight: 500 }}>Posters, social assets, and motion graphics for &quot;Summer Vibes &apos;24&quot;.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
