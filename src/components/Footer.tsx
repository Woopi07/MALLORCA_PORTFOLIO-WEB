"use client";

import React from "react";

export default function Footer() {
  return (
    <footer style={{
      background: "var(--border)",
      color: "white",
      padding: "5rem 0 3rem 0",
      position: "relative",
      borderTop: "var(--bw) solid var(--border)",
      overflow: "hidden"
    }}>
      {/* Decorative corkboard bottom-shelf wooden lip */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: "15px",
        background: "var(--wood)",
        boxShadow: "inset 0 -3px 5px rgba(0,0,0,0.3)"
      }}></div>

      <div className="container">
        
        {/* Pinned Social Desk Shelf */}
        <div style={{ 
          display: "flex", 
          flexWrap: "wrap", 
          justifyContent: "center", 
          gap: "2rem", 
          marginBottom: "4rem",
          position: "relative",
          zIndex: 10
        }}>
          {/* Facebook Badge */}
          <a 
            href="https://facebook.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="journey-item"
            style={{ 
              textDecoration: "none", 
              color: "inherit",
              "--rot": "-3deg" 
            } as React.CSSProperties}
          >
            <div style={{
              background: "#1877F2",
              color: "white",
              padding: "0.8rem 1.5rem",
              border: "3px solid white",
              boxShadow: "5px 5px 0px rgba(0,0,0,0.3)",
              fontFamily: "var(--font-display)",
              fontSize: "1.1rem",
              borderRadius: "4px",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem"
            }}>
              <span>📘</span> FACEBOOK
            </div>
          </a>

          {/* Gmail Stamp */}
          <a 
            href="mailto:example@gmail.com" 
            className="journey-item"
            style={{ 
              textDecoration: "none", 
              color: "inherit",
              "--rot": "2deg" 
            } as React.CSSProperties}
          >
            <div style={{
              background: "#EA4335",
              color: "white",
              padding: "0.8rem 1.5rem",
              border: "3px solid white",
              boxShadow: "5px 5px 0px rgba(0,0,0,0.3)",
              fontFamily: "var(--font-display)",
              fontSize: "1.1rem",
              borderRadius: "4px",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem"
            }}>
              <span>✉️</span> GMAIL
            </div>
          </a>

          {/* LinkedIn Pinned Note */}
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="journey-item"
            style={{ 
              textDecoration: "none", 
              color: "inherit",
              "--rot": "-2deg" 
            } as React.CSSProperties}
          >
            <div style={{
              background: "#0A66C2",
              color: "white",
              padding: "0.8rem 1.5rem",
              border: "3px solid white",
              boxShadow: "5px 5px 0px rgba(0,0,0,0.3)",
              fontFamily: "var(--font-display)",
              fontSize: "1.1rem",
              borderRadius: "4px",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem"
            }}>
              <span>💼</span> LINKEDIN
            </div>
          </a>

          {/* GitHub Sticker */}
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="journey-item"
            style={{ 
              textDecoration: "none", 
              color: "inherit",
              "--rot": "4deg" 
            } as React.CSSProperties}
          >
            <div style={{
              background: "#24292e",
              color: "white",
              padding: "0.8rem 1.5rem",
              border: "3px solid white",
              boxShadow: "5px 5px 0px rgba(0,0,0,0.3)",
              fontFamily: "var(--font-display)",
              fontSize: "1.1rem",
              borderRadius: "4px",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem"
            }}>
              <span>👾</span> GITHUB
            </div>
          </a>
        </div>

        {/* Horizontal Divider */}
        <hr style={{ 
          border: "none", 
          borderTop: "3px dashed rgba(255,255,255,0.2)", 
          margin: "2.5rem 0" 
        }} />

        {/* Proper Footer Grid Layout */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "3rem",
          alignItems: "start"
        }}>
          {/* Column 1: Brand details */}
          <div>
            <div className="logo" style={{ 
              display: "inline-block", 
              transform: "rotate(-2deg)",
              marginBottom: "1.5rem"
            }}>
              <span>MJ.DESIGN 🎨</span>
            </div>
            <p style={{ 
              fontFamily: "var(--font-mono)", 
              fontSize: "0.9rem", 
              color: "rgba(255,255,255,0.7)",
              lineHeight: "1.6"
            }}>
              Crafting playful, functional, and showstopping digital products. Specializing in Graphic Design, UI/UX, and creative web engineering.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 style={{ 
              fontFamily: "var(--font-display)", 
              fontSize: "1.3rem", 
              color: "var(--accent)", 
              marginBottom: "1rem" 
            }}>
              QUICK_LINKS
            </h4>
            <ul style={{ 
              listStyle: "none", 
              padding: 0, 
              display: "flex", 
              flexDirection: "column", 
              gap: "0.75rem",
              fontFamily: "var(--font-mono)",
              fontSize: "0.9rem"
            }}>
              <li><a href="#hero" style={{ color: "rgba(255,255,255,0.8)", textDecoration: "none" }}>// HOME</a></li>
              <li><a href="#about" style={{ color: "rgba(255,255,255,0.8)", textDecoration: "none" }}>// ABOUT</a></li>
              <li><a href="#creative" style={{ color: "rgba(255,255,255,0.8)", textDecoration: "none" }}>// CREATIVE_PORTFOLIO</a></li>
              <li><a href="#tech" style={{ color: "rgba(255,255,255,0.8)", textDecoration: "none" }}>// TECH_PROJECTS</a></li>
              <li><a href="#experience" style={{ color: "rgba(255,255,255,0.8)", textDecoration: "none" }}>// MY_JOURNEY</a></li>
            </ul>
          </div>

          {/* Column 3: Status / Contact Info */}
          <div>
            <h4 style={{ 
              fontFamily: "var(--font-display)", 
              fontSize: "1.3rem", 
              color: "var(--accent-alt)", 
              marginBottom: "1rem" 
            }}>
              SYSTEM_STATUS
            </h4>
            <div style={{
              background: "rgba(255,255,255,0.05)",
              border: "2px solid rgba(255,255,255,0.1)",
              padding: "1.25rem",
              borderRadius: "4px",
              fontFamily: "var(--font-mono)",
              fontSize: "0.85rem",
              lineHeight: "1.5",
              color: "rgba(255,255,255,0.8)"
            }}>
              <p>📍 Location: Manila, PH</p>
              <p>🟢 Availability: Open for Freelance</p>
              <p>⚡ Powered by: Next.js & Lofi Vibes</p>
            </div>
          </div>
        </div>

        {/* Footer Base */}
        <div style={{ 
          marginTop: "4rem", 
          paddingTop: "2rem", 
          borderTop: "1px solid rgba(255,255,255,0.1)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
          fontFamily: "var(--font-mono)",
          fontSize: "0.8rem",
          color: "rgba(255,255,255,0.5)"
        }}>
          <p>© {new Date().getFullYear()} MJ Mallorca. All rights reserved.</p>
          <p>Made with 💖, pushpins, & paperclips</p>
        </div>

      </div>
    </footer>
  );
}
