"use client";

import React, { useState, useEffect } from "react";

export default function CreativeProjects() {
  const [images, setImages] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

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

  const formatTitle = (filename: string) => {
    const name = filename.substring(0, filename.lastIndexOf(".")) || filename;
    if (name.startsWith("att.")) {
      return "Creative Showcase";
    }
    return name
      .replace(/[_-]/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());
  };

  // Pagination calculation
  const totalPages = Math.ceil(images.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = images.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <section id="creative">
      <div className="container">
        <h2 className="section-title">Creative Projects</h2>
        
        {images.length === 0 ? (
          <div className="retro-card reveal" style={{ textAlign: "center", padding: "3rem" }}>
            <p style={{ fontFamily: "var(--font-mono)", fontWeight: 800 }}>LOADING CREATIVE CANVAS...</p>
          </div>
        ) : (
          <>
            <div style={{ overflowX: "auto", paddingBottom: "1.5rem" }}>
              <div style={{ display: "grid", gridTemplateColumns: `repeat(${currentItems.length}, minmax(280px, 1fr))`, gap: "3rem" }}>
                {currentItems.map((filename) => (
                  <div className="retro-card project-card reveal active" key={filename}>
                    <div style={{ height: "200px", border: "var(--bw) solid var(--border)", marginBottom: "1.5rem", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", background: "#eee" }}>
                      <img 
                        src={`/gallery/Creatives/${filename}`} 
                        alt={formatTitle(filename)} 
                        style={{ width: "100%", height: "100%", objectFit: "cover" }} 
                      />
                    </div>
                    <h3>{formatTitle(filename)}</h3>
                    <p style={{ fontWeight: 500 }}>Visual asset in the creatives portfolio gallery.</p>
                  </div>
                ))}
              </div>
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
    </section>
  );
}
