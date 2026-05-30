"use client";

export default function Nav() {
  return (
    <nav>
      <div className="nav-inner">
        <div className="logo">MJ&apos;S PORTFOLIO</div>
        <ul className="nav-links">
          <li><a href="#about">About Me</a></li>
          <li><a href="#creative">Creative Projects</a></li>
          <li><a href="#tech">Tech Projects</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
