"use client";

import React from "react";

export default function PortfolioWidget() {
  return (
    <a 
      className="portfolio-widget" 
      id="cv-trigger" 
      href="/cv.pdf" 
      target="_blank" 
      rel="noopener noreferrer"
      style={{ display: "block" }}
    >
      <img src="/assets/prototype/mpmi7705-image.png" alt="MJ&apos;s Portfolio" />
    </a>
  );
}
