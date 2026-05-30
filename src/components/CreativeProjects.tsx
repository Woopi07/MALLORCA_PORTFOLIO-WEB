"use client";

import React, { useState, useEffect, useRef } from "react";

export default function CreativeProjects() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<"all" | "esports" | "graphics">("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const [hoveredImg, setHoveredImg] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isScrolling, setIsScrolling] = useState(false);
  const itemsPerPage = 3;

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
    fetch("/api/creatives")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setImages(data);
        }
      })
      .catch((err) => console.error("Error fetching creatives:", err));
  }, []);

  // Filter images based on selected category prefix
  const filteredImages = images.filter((filename) => {
    if (selectedCategory === "esports") {
      return filename.toLowerCase().startsWith("esp_");
    }
    if (selectedCategory === "graphics") {
      return filename.toLowerCase().startsWith("gd_");
    }
    return true;
  });

  // Reset pagination when category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  const formatTitle = (filename: string) => {
    let name = filename.substring(0, filename.lastIndexOf(".")) || filename;
    if (name.startsWith("att.")) {
      return "Creative Showcase";
    }
    // Strip prefixes for clean visual aesthetic
    name = name.replace(/^(esp_|gd_)/i, "");
    return name
      .replace(/[_-]/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());
  };

  // Pagination calculation
  const totalPages = Math.ceil(filteredImages.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredImages.slice(indexOfFirstItem, indexOfLastItem);

  const scrollLeft = () => {
    setCurrentPage((p) => Math.max(p - 1, 1));
  };

  const scrollRight = () => {
    setCurrentPage((p) => Math.min(p + 1, totalPages));
  };

  return (
    <section id="creative">
      <div className="container">
        <h2 className="section-title">Creative Projects</h2>

        {/* Filter Pills */}
        <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", marginBottom: "3.5rem", flexWrap: "wrap" }}>
          {[
            { id: "all", label: "All Works" },
            { id: "esports", label: "Esports Posters" },
            { id: "graphics", label: "Graphics Design" },
          ].map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id as any)}
                className="retro-button"
                style={{
                  padding: "0.6rem 1.8rem",
                  fontSize: "0.95rem",
                  fontFamily: "var(--font-display)",
                  letterSpacing: "0.05em",
                  backgroundColor: isActive ? "var(--accent)" : "white",
                  color: "var(--fg)",
                  transform: isActive ? "translate(2px, 2px)" : "none",
                  boxShadow: isActive ? "2px 2px 0px var(--border)" : "5px 5px 0px var(--border)",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
        
        {images.length === 0 ? (
          <div className="retro-card reveal active" style={{ textAlign: "center", padding: "3rem" }}>
            <p style={{ fontFamily: "var(--font-mono)", fontWeight: 800 }}>LOADING CREATIVE CANVAS...</p>
          </div>
        ) : filteredImages.length === 0 ? (
          <div className="retro-card reveal active" style={{ textAlign: "center", padding: "3rem" }}>
            <p style={{ fontFamily: "var(--font-mono)", fontWeight: 800 }}>NO WORKS FOUND UNDER THIS FILTER.</p>
          </div>
        ) : (
          <>
            <div style={{ position: "relative", display: "flex", alignItems: "center", width: "100%", padding: "0 3.5rem" }}>
              {/* Left Chevron Button */}
              <button 
                onClick={scrollLeft} 
                disabled={currentPage === 1}
                className="retro-button" 
                title="Previous Page"
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
                  userSelect: "none",
                  opacity: currentPage === 1 ? 0.3 : 1,
                  cursor: currentPage === 1 ? "not-allowed" : "pointer"
                }}
              >
                &lsaquo;
              </button>

              {/* Carousel Container wrapper */}
              <div ref={scrollContainerRef} style={{ overflowX: "auto", paddingBottom: "1.5rem", width: "100%" }}>
                <div style={{ display: "grid", gridTemplateColumns: `repeat(${itemsPerPage}, minmax(280px, 1fr))`, gap: "3rem" }}>
                  {currentItems.map((filename) => (
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
                      style={{ cursor: "pointer" }}
                    >
                      <div style={{ height: "200px", border: "var(--bw) solid var(--border)", marginBottom: "1.5rem", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", background: "#eee" }}>
                        <img 
                          src={`/gallery/Creatives/${filename}`} 
                          alt={formatTitle(filename)} 
                          style={{ width: "100%", height: "100%", objectFit: "cover" }} 
                        />
                      </div>
                      <h3>{formatTitle(filename)}</h3>
                      <p style={{ fontWeight: 500 }}>
                        {filename.toLowerCase().startsWith("esp_") 
                          ? "Custom designed Esports poster and branding assets." 
                          : "Professional graphic design and composition showcase."}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Chevron Button */}
              <button 
                onClick={scrollRight} 
                disabled={currentPage === totalPages}
                className="retro-button" 
                title="Next Page"
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
                  userSelect: "none",
                  opacity: currentPage === totalPages ? 0.3 : 1,
                  cursor: currentPage === totalPages ? "not-allowed" : "pointer"
                }}
              >
                &rsaquo;
              </button>
            </div>

            {totalPages > 1 && (
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "1.5rem", marginTop: "4rem" }}>
                <button 
                  className="retro-button" 
                  onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                  disabled={currentPage === 1}
                  style={{ 
                    opacity: currentPage === 1 ? 0.5 : 1, 
                    padding: "0.5rem 1.5rem", 
                    fontSize: "0.9rem",
                    cursor: currentPage === 1 ? "not-allowed" : "pointer"
                  }}
                >
                  Prev
                </button>
                <span style={{ fontFamily: "var(--font-mono)", fontWeight: 800, fontSize: "1rem" }}>
                  PAGE {currentPage} OF {totalPages}
                </span>
                <button 
                  className="retro-button" 
                  onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  style={{ 
                    opacity: currentPage === totalPages ? 0.5 : 1, 
                    padding: "0.5rem 1.5rem", 
                    fontSize: "0.9rem",
                    cursor: currentPage === totalPages ? "not-allowed" : "pointer"
                  }}
                >
                  Next
                </button>
              </div>
            )}
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
            <div style={{ border: "var(--bw) solid var(--border)", background: "#eee", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "4px" }}>
              <img 
                src={`/gallery/Creatives/${selectedImg}`} 
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
              transform: "rotate(4deg)",
              width: "420px",
              borderRadius: "4px",
              display: "flex",
              flexDirection: "column"
            }}
          >
            {/* Decorative Tape */}
            <div className="tape tape-tl" style={{ top: "-15px", left: "-25px", width: "90px", height: "35px", opacity: 0.85 }}></div>
            
            <div style={{ width: "100%", height: "380px", border: "2px solid var(--border)", overflow: "hidden", background: "#eee", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <img 
                src={`/gallery/Creatives/${hoveredImg}`} 
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
