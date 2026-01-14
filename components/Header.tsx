"use client";

export default function Header() {
  return (
    <header id="home" className="header">
      <div className="overlay"></div>
      <div className="header-content container">
        <h1 className="header-title">
          <span className="up">HI!</span>
          <span className="down">I am Ishrat Zahan</span>
        </h1>
        <p className="header-subtitle">Full-Stack Developer</p>
        <button className="btn btn-primary" onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}>
          Visit My Works
        </button>
      </div>
    </header>
  );
}

