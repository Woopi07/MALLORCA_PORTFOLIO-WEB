"use client";

import React, { useRef, useState, useEffect } from "react";

export default function TechProjects() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<string[]>([]);
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const [hoveredImg, setHoveredImg] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isScrolling, setIsScrolling] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    // Add offset so the preview floats beautifully beside the cursor
    setMousePos({ x: e.clientX + 20, y: e.clientY + 20 });
  };

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;
    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 250); // User must stop scrolling for 250ms to allow hover actions
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    const carousel = scrollContainerRef.current;
    if (carousel) {
      carousel.addEventListener("scroll", handleScroll, { passive: true });
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (carousel) {
        carousel.removeEventListener("scroll", handleScroll);
      }
      clearTimeout(scrollTimeout);
    };
  }, [images]);

  useEffect(() => {
    if (isScrolling) {
      setHoveredImg(null); // Clear preview instantly when scrolling starts
    }
  }, [isScrolling]);

  useEffect(() => {
    fetch("/api/tech")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setImages(data);
        }
      })
      .catch((err) => console.error("Error fetching tech projects:", err));
  }, []);

  const formatTitle = (filename: string) => {
    const name = filename.substring(0, filename.lastIndexOf(".")) || filename;
    if (name.startsWith("att.")) {
      return "Technical System";
    }
    return name
      .replace(/[_-]/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  return (
    <section id="tech">
      <div className="container">
        <h2 className="section-title" style={{ color: "var(--accent)", textShadow: "6px 6px 0px white" }}>Tech Projects</h2>
        
        {images.length === 0 ? (
          <div className="retro-card reveal active" style={{ textAlign: "center", padding: "3rem", color: "var(--fg)" }}>
            <p style={{ fontFamily: "var(--font-mono)", fontWeight: 800 }}>LOADING TECH INFRASTRUCTURE...</p>
          </div>
        ) : (
          <>
            <div style={{ position: "relative", display: "flex", alignItems: "center", width: "100%", padding: "0 3.5rem" }}>
              {/* Left Chevron Button */}
              <button 
                onClick={scrollLeft} 
                className="retro-button" 
                title="Scroll Left"
                style={{ 
                  position: "absolute", 
                  left: "0.5rem", 
                  zIndex: 10, 
                  width: "44px",
                  height: "44px",
                  padding: 0,
                  display: "grid",
                  placeItems: "center",
                  borderRadius: "50%", 
                  fontFamily: "var(--font-mono)", 
                  fontWeight: 900,
                  fontSize: "1.5rem",
                  boxShadow: "3px 3px 0px var(--border)",
                  userSelect: "none"
                }}
              >
                &lsaquo;
              </button>

              {/* Scrollable Carousel Container */}
              <div 
                ref={scrollContainerRef}
                style={{ overflowX: "auto", paddingBottom: "1.5rem", width: "100%", scrollBehavior: "smooth" }}
              >
                <div style={{ display: "flex", gap: "3rem", width: "max-content", paddingRight: "2rem" }}>
                  {images.map((filename) => (
                    <div 
                      className="retro-card project-card reveal active" 
                      key={filename}
                      onClick={() => {
                        setSelectedImg(filename);
                        setHoveredImg(null); // Close hover preview on click
                      }}
                      onMouseEnter={() => {
                        if (!isScrolling) setHoveredImg(filename);
                      }}
                      onMouseLeave={() => setHoveredImg(null)}
                      onMouseMove={handleMouseMove}
                      style={{ color: "var(--fg)", cursor: "pointer", width: "320px", flexShrink: 0 }}
                    >
                      <div style={{ height: "200px", border: "var(--bw) solid var(--border)", marginBottom: "1.5rem", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", background: "#333" }}>
                        <img 
                          src={`/gallery/Tech Projects/${encodeURIComponent(filename)}`} 
                          alt={formatTitle(filename)} 
                          style={{ width: "100%", height: "100%", objectFit: "cover" }} 
                        />
                      </div>
                      <h3>{formatTitle(filename)}</h3>
                      <p style={{ fontWeight: 500 }}>Technical software implementation showcase.</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Chevron Button */}
              <button 
                onClick={scrollRight} 
                className="retro-button" 
                title="Scroll Right"
                style={{ 
                  position: "absolute", 
                  right: "0.5rem", 
                  zIndex: 10, 
                  width: "44px",
                  height: "44px",
                  padding: 0,
                  display: "grid",
                  placeItems: "center",
                  borderRadius: "50%", 
                  fontFamily: "var(--font-mono)", 
                  fontWeight: 900,
                  fontSize: "1.5rem",
                  boxShadow: "3px 3px 0px var(--border)",
                  userSelect: "none"
                }}
              >
                &rsaquo;
              </button>
            </div>
          </>
        )}
      </div>

      {/* --- LIGHTBOX MODAL OVERLAY --- */}
      {selectedImg && (
        <div 
          className="cv-modal active" 
          onClick={() => setSelectedImg(null)}
          style={{ zIndex: 4000 }}
        >
          <div 
            className="cv-panel" 
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: "800px", height: "auto", maxHeight: "90vh", padding: "2.5rem" }}
          >
            <div className="cv-header" style={{ padding: "0 0 1.5rem 0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div className="cv-header-title">
                <span>{formatTitle(selectedImg)}</span>
              </div>
              <button 
                className="control-btn close" 
                onClick={() => setSelectedImg(null)}
                style={{ marginLeft: "auto" }}
              >
                X
              </button>
            </div>
            <div style={{ border: "var(--bw) solid var(--border)", background: "#333", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "4px" }}>
              <img 
                src={`/gallery/Tech Projects/${encodeURIComponent(selectedImg)}`} 
                alt={formatTitle(selectedImg)} 
                style={{ maxWidth: "100%", maxHeight: "60vh", objectFit: "contain", display: "block" }} 
              />
            </div>
          </div>
        </div>
      )}
      {/* --- FLOATING LIGHTBOX PREVIEW ON HOVER --- */}
      {hoveredImg && (
        <>
          {/* Dark overlay backdrop to highlight and emphasize the lightbox */}
          <div 
            style={{ 
              position: "fixed", 
              inset: 0, 
              background: "rgba(0, 0, 0, 0.65)", 
              backdropFilter: "blur(2px)", 
              zIndex: 4999, 
              pointerEvents: "none" 
            }}
          />
          <div 
            style={{ 
              position: "fixed", 
              left: `${mousePos.x}px`, 
              top: `${mousePos.y}px`, 
              pointerEvents: "none", 
              zIndex: 5000, 
              background: "white", 
              padding: "1rem", 
              border: "var(--bw) solid var(--border)", 
              boxShadow: "12px 12px 0px var(--border)", 
              transform: "rotate(-3deg)", // Rotate slightly counter-clockwise for variety!
              width: "420px",
              borderRadius: "4px",
              display: "flex",
              flexDirection: "column"
            }}
          >
            {/* Decorative Tape */}
            <div className="tape tape-tr" style={{ top: "-15px", right: "-25px", width: "90px", height: "35px", opacity: 0.85 }}></div>
            
            <div style={{ width: "100%", height: "380px", border: "2px solid var(--border)", overflow: "hidden", background: "#333", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <img 
                src={`/gallery/Tech Projects/${encodeURIComponent(hoveredImg)}`} 
                alt="Preview" 
                style={{ width: "100%", height: "100%", objectFit: "contain" }} 
              />
            </div>
          </div>
        </>
      )}
    </section>
  );
}

