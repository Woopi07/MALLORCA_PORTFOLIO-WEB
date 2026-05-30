"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";

interface CVModalProps {
  open: boolean;
  onClose: () => void;
}

export default function CVModal({ open, onClose }: CVModalProps) {
  const [scale, setScale] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [imgSrc, setImgSrc] = useState<string>("");

  const viewportRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const startYRef = useRef(0);
  const scaleRef = useRef(scale);

  // Keep scale ref up to date
  useEffect(() => {
    scaleRef.current = scale;
  }, [scale]);

  const resetView = useCallback(() => {
    setScale(1);
    setPan({ x: 0, y: 0 });
  }, []);

  // Reset view whenever modal is opened
  useEffect(() => {
    if (open) {
      resetView();
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open, resetView]);

  // Handle zooming using buttons
  const zoomIn = () => {
    setScale((prev) => Math.min(prev + 0.2, 5));
  };

  const zoomOut = () => {
    setScale((prev) => Math.max(prev - 0.2, 0.2));
  };

  // Handle pan dragging
  const handleMouseDown = (e: React.MouseEvent) => {
    isDraggingRef.current = true;
    startXRef.current = e.clientX - pan.x;
    startYRef.current = e.clientY - pan.y;
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current) return;
      setPan({
        x: e.clientX - startXRef.current,
        y: e.clientY - startYRef.current,
      });
    };

    const handleMouseUp = () => {
      isDraggingRef.current = false;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  // Handle passive scroll wheel zooming
  useEffect(() => {
    const viewportEl = viewportRef.current;
    if (!viewportEl) return;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const zoomSpeed = 0.001;
      const newScale = Math.min(Math.max(scaleRef.current + (e.deltaY * -zoomSpeed), 0.2), 5);

      const rect = viewportEl.getBoundingClientRect();
      const mouseX = e.clientX - rect.left - rect.width / 2;
      const mouseY = e.clientY - rect.top - rect.height / 2;

      setPan((prev) => {
        const nextX = prev.x - (mouseX - prev.x) * (newScale / scaleRef.current - 1);
        const nextY = prev.y - (mouseY - prev.y) * (newScale / scaleRef.current - 1);
        return { x: nextX, y: nextY };
      });
      setScale(newScale);
    };

    viewportEl.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      viewportEl.removeEventListener("wheel", onWheel);
    };
  }, []);

  // File Upload handler
  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      if (event.target?.result) {
        setImgSrc(event.target.result as string);
        resetView();
      }
    };
    reader.readAsDataURL(file);
  };

  // Close modal when clicking outside the panel
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div className={`cv-modal ${open ? "active" : ""}`} onClick={handleBackdropClick}>
      <div className="cv-panel">
        <div className="modal-polaroid">
          <div className="pic"></div>
          <p style={{ fontFamily: "var(--font-hand)", textAlign: "center", marginTop: "0.5rem" }}>MJ (2026)</p>
        </div>
        <div className="modal-note">
          <p>Check out my journey and skills!</p>
        </div>

        <div className="cv-header">
          <div className="cv-header-title">
            <span>RESUME_VIEWER</span>
          </div>
          <div className="cv-controls">
            <button className="control-btn" id="zoom-out" title="Zoom Out" onClick={zoomOut}>-</button>
            <button className="control-btn" id="zoom-fit" title="Fit to Screen" onClick={resetView}>[]</button>
            <button className="control-btn" id="zoom-in" title="Zoom In" onClick={zoomIn}>+</button>
            <button className="control-btn close" id="close-cv" title="Close" onClick={onClose}>X</button>
          </div>
        </div>

        <div 
          className="cv-viewport" 
          id="cv-viewport" 
          ref={viewportRef} 
          onMouseDown={handleMouseDown}
          style={{ cursor: isDraggingRef.current ? "grabbing" : "grab" }}
        >
          <div 
            className="cv-viewer-content" 
            id="cv-viewer-content"
            style={{
              transform: `translate(${pan.x}px, ${pan.y}px) scale(${scale})`
            }}
          >
            {imgSrc ? (
              <img id="cv-img" src={imgSrc} alt="CV Preview" />
            ) : (
              <div id="cv-empty" style={{ textAlign: "center", fontFamily: "var(--font-hand)", fontSize: "2rem" }}>
                <p>Your CV will appear here!</p>
                <p style={{ fontSize: "1rem", opacity: 0.6 }}>(Click upload below)</p>
              </div>
            )}
          </div>
        </div>

        <div className="cv-footer">
          <div id="zoom-level" style={{ fontFamily: "var(--font-mono)", fontWeight: 800, fontSize: "0.8rem" }}>
            ZOOM: {Math.round(scale * 100)}%
          </div>
          <div>
            <label htmlFor="cv-upload" style={{ background: "var(--accent)", padding: "0.5rem 1.5rem", border: "3px solid var(--border)", fontFamily: "var(--font-display)", fontSize: "0.9rem", cursor: "pointer", boxShadow: "5px 5px 0px var(--border)", display: "inline-block" }}>
              Replace CV File
            </label>
            <input type="file" id="cv-upload" style={{ display: "none" }} accept=".pdf,image/*" onChange={handleUpload} />
          </div>
        </div>
      </div>
    </div>
  );
}
