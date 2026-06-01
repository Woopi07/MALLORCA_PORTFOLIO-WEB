"use client";

import React from "react";

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <h2 className="section-title" style={{ color: "white" }}>My Journey</h2>
        
        <div className="journey-board reveal">
          {/* SVG Red Yarn / String Timeline connecting the milestones */}
          <svg 
            className="absolute inset-0 w-full h-full pointer-events-none hidden md:block" 
            style={{ zIndex: 5, opacity: 0.7 }}
          >
            <path 
              d="M 250,150 Q 400,280 200,420 T 550,680" 
              fill="none" 
              stroke="var(--pin-red)" 
              strokeWidth="4" 
              strokeDasharray="8,6" 
              strokeLinecap="round"
            />
          </svg>

          <div style={{ display: "flex", flexDirection: "column", gap: "5rem", position: "relative", zIndex: 10 }}>
            
            {/* Milestone 1: Polaroid Card (Education) */}
            <div 
              className="journey-item" 
              style={{ 
                alignSelf: "flex-start", 
                maxWidth: "680px", 
                "--rot": "-3deg" 
              } as React.CSSProperties}
            >
              {/* Push Pin */}
              <div 
                className="pin" 
                style={{ 
                  top: "10px", 
                  left: "50%", 
                  transform: "translate(-50%, -50%)",
                  boxShadow: "2px 5px 8px rgba(0,0,0,0.3)"
                }}
              ></div>
              
              <div className="journey-polaroid">
                <div style={{ display: "flex", gap: "2rem", flexDirection: "row", flexWrap: "wrap" }}>
                  <div style={{ flex: "1 1 200px", minWidth: "180px" }}>
                    <div className="polaroid-media">
                      {/* CSS-based Retro Computer Art to look stunning without external assets */}
                      <div style={{
                        width: "80px",
                        height: "60px",
                        border: "3px solid var(--border)",
                        background: "var(--paper-cream)",
                        borderRadius: "4px",
                        position: "relative",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        padding: "4px"
                      }}>
                        <div style={{ display: "flex", gap: "3px" }}>
                          <span style={{ width: "6px", height: "6px", background: "var(--pin-red)", borderRadius: "50%" }}></span>
                          <span style={{ width: "20px", height: "4px", background: "var(--border)", borderRadius: "2px" }}></span>
                        </div>
                        <div style={{ fontSize: "1.5rem", textAlign: "center", lineHeight: 1 }}>🎓</div>
                        <div style={{ height: "4px", background: "var(--border)" }}></div>
                      </div>
                      <div style={{
                        position: "absolute",
                        bottom: "15px",
                        width: "90px",
                        height: "8px",
                        background: "var(--border)",
                        borderRadius: "2px"
                      }}></div>
                    </div>
                    <p style={{ 
                      fontFamily: "var(--font-hand)", 
                      textAlign: "center", 
                      fontSize: "1.2rem", 
                      color: "var(--sticker-blue)",
                      fontWeight: "bold"
                    }}>
                      PLV School Days 🎒
                    </p>
                  </div>
                  
                  <div style={{ flex: "2 1 300px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <div style={{ 
                      background: "var(--accent-alt)", 
                      color: "white",
                      padding: "0.3rem 0.8rem", 
                      border: "2px solid var(--border)", 
                      fontFamily: "var(--font-mono)", 
                      fontWeight: 800, 
                      fontSize: "0.75rem", 
                      alignSelf: "flex-start",
                      marginBottom: "1rem",
                      transform: "rotate(-2deg)" 
                    }}>
                      ACADEMIC JOURNEY
                    </div>
                    <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.8rem", marginBottom: "0.75rem", lineHeight: 1.2 }}>
                      Student @ PLV
                    </h3>
                    <p style={{ fontWeight: 600, fontSize: "1rem", color: "var(--fg)", opacity: 0.9 }}>
                      Developing expertise in Project Management and Design Theory while building functional digital products. Pushing creative boundaries one project at a time.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Milestone 2: Torn Notebook Page (Freelance Experience) */}
            <div 
              className="journey-item" 
              style={{ 
                alignSelf: "flex-end", 
                maxWidth: "720px", 
                width: "100%",
                "--rot": "2deg" 
              } as React.CSSProperties}
            >
              {/* Silver Paperclip */}
              <div className="paperclip"></div>
              
              <div className="journey-lined-paper journey-lined-paper-torn">
                <div style={{ 
                  background: "var(--accent)", 
                  color: "var(--fg)",
                  padding: "0.3rem 0.8rem", 
                  border: "2px solid var(--border)", 
                  fontFamily: "var(--font-mono)", 
                  fontWeight: 800, 
                  fontSize: "0.75rem", 
                  display: "inline-block",
                  marginBottom: "1rem",
                  transform: "rotate(1deg)" 
                }}>
                  EXPERIENCE & FREELANCE
                </div>
                
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "2rem", marginBottom: "1rem" }}>
                  Graphic Designer & UI/UX Designer
                </h3>
                
                <ul style={{ 
                  paddingLeft: "0", 
                  listStyle: "none", 
                  display: "flex", 
                  flexDirection: "column", 
                  gap: "0.75rem",
                  fontWeight: 600
                }}>
                  <li style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                    <span style={{ color: "var(--accent-alt)" }}>★</span>
                    <span>Collaborating with small brands to create impactful visual identities and intuitive user interfaces.</span>
                  </li>
                  <li style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                    <span style={{ color: "var(--accent-alt)" }}>★</span>
                    <span>Designing stunning high-fidelity web mockups that seamlessly translate into production-ready frontend code.</span>
                  </li>
                  <li style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                    <span style={{ color: "var(--accent-alt)" }}>★</span>
                    <span>Bridging the gap between creative visual designs and optimized developer components.</span>
                  </li>
                </ul>

                {/* Nice sticker overlay */}
                <div className="sticker red" style={{ 
                  bottom: "-15px", 
                  right: "30px", 
                  transform: "rotate(-5deg)", 
                  fontSize: "0.85rem",
                  boxShadow: "3px 3px 0 var(--border)"
                }}>
                  100% CREATIVE
                </div>
              </div>
            </div>

            {/* Milestone 3: Sticky Note (Future Horizons) */}
            <div 
              className="journey-item" 
              style={{ 
                alignSelf: "center", 
                maxWidth: "500px", 
                width: "100%",
                "--rot": "-1deg" 
              } as React.CSSProperties}
            >
              {/* Blue Push Pin */}
              <div 
                className="pin" 
                style={{ 
                  top: "10px", 
                  left: "50%", 
                  transform: "translate(-50%, -50%)",
                  background: "radial-gradient(circle at 30% 30%, var(--sticker-blue), #1e3d6b)"
                }}
              ></div>
              
              <div className="journey-sticky" style={{ borderRadius: "2px" }}>
                <h3 style={{ 
                  fontFamily: "var(--font-display)", 
                  fontSize: "1.6rem", 
                  marginBottom: "0.5rem",
                  color: "var(--sticker-blue)" 
                }}>
                  What&apos;s Next? 🚀
                </h3>
                <p style={{ fontWeight: 700, fontFamily: "var(--font-mono)", fontSize: "0.9rem", color: "var(--muted)", marginBottom: "1rem" }}>
                  // TARGET: MASTER FULL-STACK WEB ART
                </p>
                <p style={{ fontWeight: 800, fontSize: "1.05rem", lineHeight: "1.6" }}>
                  Learning advanced animations, interactive 3D elements (Three.js), and expanding project management systems to deliver top-tier, showstopping web applications!
                </p>

                <div className="sticker yellow" style={{ 
                  bottom: "-10px", 
                  left: "-20px", 
                  transform: "rotate(6deg)", 
                  fontSize: "0.75rem",
                  background: "white"
                }}>
                  DREAM BIG!
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

