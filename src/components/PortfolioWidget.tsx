"use client";

export default function PortfolioWidget({ onClick }: { onClick: () => void }) {
  return (
    <button
      id="cv-trigger"
      onClick={onClick}
      className="fixed bottom-8 right-8 w-[100px] cursor-pointer z-[2000] transition-all duration-[0.4s] ease-[cubic-bezier(0.175,0.885,0.32,1.275)] drop-shadow-[0_10px_20px_rgba(0,0,0,0.3)] hover:scale-110 hover:rotate-8 hover:drop-shadow-[0_0_20px_oklch(85%_0.18_90)_0_15px_30px_rgba(0,0,0,0.5)]"
    >
      <img src="/assets/prototype-images/mpmi7705-image.png" alt="MJ's Portfolio" className="w-full h-auto block" />
    </button>
  );
}
