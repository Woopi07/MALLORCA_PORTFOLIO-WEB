"use client";

import React from "react";

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <h2 className="section-title" style={{ color: "white" }}>My Journey</h2>
        <div className="retro-card reveal" style={{ maxWidth: "900px", margin: "0 auto", padding: "4rem" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
            <div style={{ display: "flex", gap: "2rem", alignItems: "flex-start" }}>
              <div style={{ background: "var(--accent-alt)", padding: "0.5rem 1rem", border: "var(--bw) solid var(--border)", fontFamily: "var(--font-mono)", fontWeight: 800, fontSize: "0.8rem", transform: "rotate(-3deg)" }}>
                CURRENT
              </div>
              <div>
                <h3 style={{ fontFamily: "var(--font-display)", marginBottom: "0.5rem" }}>
                  Student @ Pamantasan ng Lungsod ng Valenzuela
                </h3>
                <p style={{ fontWeight: 600 }}>
                  Developing expertise in Project Management and Design Theory while building functional digital products.
                </p>
              </div>
            </div>
            
            <div style={{ display: "flex", gap: "2rem", alignItems: "flex-start" }}>
              <div style={{ background: "var(--accent)", padding: "0.5rem 1rem", border: "var(--bw) solid var(--border)", fontFamily: "var(--font-mono)", fontWeight: 800, fontSize: "0.8rem", transform: "rotate(2deg)" }}>
                FREELANCE
              </div>
              <div>
                <h3 style={{ fontFamily: "var(--font-display)", marginBottom: "0.5rem" }}>
                  Graphic Designer & UI Developer
                </h3>
                <p style={{ fontWeight: 600 }}>
                  Collaborating with small brands to create impactful visual identities and intuitive user interfaces.
                </p>
              </div>
            </div>
          </div>
          
          {/* Extra doodle in experience */}
          <div className="sticker yellow" style={{ bottom: "-15px", left: "20px", transform: "rotate(5deg)", fontSize: "0.7rem" }}>
            DREAM BIG!
          </div>
        </div>
      </div>
    </section>
  );
}
