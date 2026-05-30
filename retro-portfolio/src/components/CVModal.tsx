"use client";

import { useEffect, useRef, useState, useCallback } from "react";

export default function CVModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [scale, setScale] = useState(1);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const isDragging = useRef(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const imgRef = useRef<HTMLImageElement>(null);
  const emptyRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const resetView = useCallback(() => {
    setScale(1);
    setPos({ x: 0, y: 0 });
  }, []);

  useEffect(() => {
    if (open) resetView();
  }, [open, resetView]);

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = "";
      return;
    }
    document.body.style.overflow = "hidden";

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  const handleWheel = useCallback((e: React.WheelEvent) => {
    e.preventDefault();
    const zoomSpeed = 0.001;
    const rect = viewportRef.current!.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    setScale((prev) => {
      const newScale = Math.min(Math.max(prev + e.deltaY * -zoomSpeed, 0.2), 5);
      setPos((p) => ({
        x: p.x - (mouseX - p.x) * (newScale / prev - 1),
        y: p.y - (mouseY - p.y) * (newScale / prev - 1),
      }));
      return newScale;
    });
  }, []);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    isDragging.current = true;
    dragStart.current = { x: e.clientX - pos.x, y: e.clientY - pos.y };
  }, [pos]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging.current) return;
    setPos({ x: e.clientX - dragStart.current.x, y: e.clientY - dragStart.current.y });
  }, []);

  const handleMouseUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  const zoom = useCallback((delta: number) => {
    setScale((prev) => Math.min(Math.max(prev + delta * -0.2, 0.2), 5));
  }, []);

  const handleFileUpload = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      if (imgRef.current && emptyRef.current) {
        imgRef.current.src = event.target!.result as string;
        imgRef.current.style.display = "block";
        emptyRef.current.style.display = "none";
        resetView();
      }
    };
    reader.readAsDataURL(file);
  }, [resetView]);

  const handleBackdropClick = useCallback((e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  }, [onClose]);

  return (
    <div
      className={`fixed inset-0 bg-black/70 backdrop-blur-sm z-[3000] flex items-center justify-center transition-all duration-[0.4s] ease-in-out ${
        open ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
      onClick={handleBackdropClick}
    >
      <div
        className={`bg-[#d2b48c] bg-[radial-gradient(circle_at_2px_2px,rgba(0,0,0,0.15)_1px,transparent_0)] bg-[length:8px_8px] w-[95%] max-w-5xl h-[90vh] border-[15px] border-[#8b5a2b] shadow-[inset_0_0_30px_rgba(0,0,0,0.3),0_30px_60px_rgba(0,0,0,0.5)] relative flex flex-col transition-all duration-[0.5s] ease-[cubic-bezier(0.175,0.885,0.32,1.275)] rounded-[4px] overflow-hidden ${
          open ? "scale-100" : "scale-90"
        }`}
      >
        {/* Decorations */}
        <div className="absolute top-[15%] left-[5%] bg-white p-3 pb-12 w-[180px] border border-[#ddd] shadow-[8px_8px_20px_rgba(0,0,0,0.2)] -rotate-10 z-5 pointer-events-none">
          <div className="bg-[#eee] w-full aspect-square border border-[#ccc]" />
          <p className="font-hand text-center mt-2">MJ (2026)</p>
        </div>
        <div className="absolute bottom-[15%] right-[5%] bg-[#fff9c4] p-6 w-[200px] border border-black/10 shadow-[10px_10px_0_rgba(0,0,0,0.15)] rotate-5 z-5 font-hand text-lg pointer-events-none">
          <p>Check out my journey and skills!</p>
          <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-4 h-4 bg-[radial-gradient(circle_at_30%_30%,#ff4d4d,#900)] rounded-full shadow-[2px_2px_4px_rgba(0,0,0,0.3)]" />
        </div>

        {/* Header */}
        <div className="px-12 py-6 flex justify-between items-center z-10">
          <div className="hidden sm:flex bg-white px-6 py-2 border-3 border-[oklch(15%_0.01_250)] -rotate-2 shadow-[6px_6px_0_rgba(0,0,0,0.2)] items-center gap-4">
            <span className="font-display text-[#2b5797] text-xl">RESUME_VIEWER</span>
          </div>
          <div className="flex items-center gap-3 ml-auto">
            <button onClick={() => zoom(1)} className="bg-[#fff9c4] border-2 border-[oklch(15%_0.01_250)] w-10 h-10 grid place-items-center cursor-pointer shadow-[3px_3px_0_oklch(15%_0.01_250)] transition-all duration-100 font-mono font-extrabold text-lg hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[4px_4px_0_oklch(15%_0.01_250)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0_oklch(15%_0.01_250)]">
              -
            </button>
            <button onClick={resetView} className="bg-[#fff9c4] border-2 border-[oklch(15%_0.01_250)] w-10 h-10 grid place-items-center cursor-pointer shadow-[3px_3px_0_oklch(15%_0.01_250)] transition-all duration-100 font-mono font-extrabold text-xs hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[4px_4px_0_oklch(15%_0.01_250)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0_oklch(15%_0.01_250)]">
              []
            </button>
            <button onClick={() => zoom(-1)} className="bg-[#fff9c4] border-2 border-[oklch(15%_0.01_250)] w-10 h-10 grid place-items-center cursor-pointer shadow-[3px_3px_0_oklch(15%_0.01_250)] transition-all duration-100 font-mono font-extrabold text-lg hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[4px_4px_0_oklch(15%_0.01_250)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0_oklch(15%_0.01_250)]">
              +
            </button>
            <button
              onClick={onClose}
              className="bg-[#ff4d4d] text-white border-2 border-[oklch(15%_0.01_250)] w-11 h-11 grid place-items-center cursor-pointer shadow-[3px_3px_0_oklch(15%_0.01_250)] transition-all duration-100 font-mono font-extrabold text-lg rounded-full ml-4 hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[4px_4px_0_oklch(15%_0.01_250)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0_oklch(15%_0.01_250)]"
            >
              X
            </button>
          </div>
        </div>

        {/* Viewport */}
        <div
          ref={viewportRef}
          className="flex-1 relative overflow-hidden cursor-grab active:cursor-grabbing flex items-center justify-center p-8"
          onWheel={handleWheel}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <div
            ref={contentRef}
            className="absolute origin-center p-8 bg-[#fffde7] border-2 border-[#ddd] shadow-[5px_5px_0_#fff,10px_10px_0_#eee,15px_15px_30px_rgba(0,0,0,0.2)]"
            style={{
              transform: `translate(${pos.x}px, ${pos.y}px) scale(${scale})`,
            }}
          >
            <img ref={imgRef} alt="CV Preview" style={{ display: "none" }} className="block w-full h-auto" />
            <div ref={emptyRef} className="text-center font-hand text-2xl">
              <p>Your CV will appear here!</p>
              <p className="text-base opacity-60">(Click upload below)</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-12 py-4 flex justify-between items-center z-10 bg-black/5 border-t-2 border-black/10">
          <div className="font-mono font-extrabold text-xs">ZOOM: {Math.round(scale * 100)}%</div>
          <div>
            <label className="bg-[oklch(85%_0.18_90)] px-6 py-2 border-3 border-[oklch(15%_0.01_250)] font-display text-sm cursor-pointer shadow-[5px_5px_0_oklch(15%_0.01_250)] inline-block">
              Replace CV File
            </label>
            <input ref={fileInputRef} type="file" accept=".pdf,image/*" onChange={handleFileUpload} className="hidden" />
          </div>
        </div>
      </div>
    </div>
  );
}
