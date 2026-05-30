"use client";

import React from "react";

export default function PortfolioWidget({ onClick }: { onClick: () => void }) {
  return (
    <div className="portfolio-widget" id="cv-trigger" onClick={onClick}>
      <img src="/assets/prototype-images/mpmi7705-image.png" alt="MJ&apos;s Portfolio" />
    </div>
  );
}
