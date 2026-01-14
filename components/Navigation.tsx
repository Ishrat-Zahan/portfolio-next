"use client";

import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="custom-navbar">
      <div className="container">
        <Link className="logo" href="/#home">Ishrat Zahan</Link>
        <ul className="nav">
          <li className="item">
            <Link className="link" href="/#home">Home</Link>
          </li>
          <li className="item">
            <Link className="link" href="/#about">About</Link>
          </li>
          <li className="item">
            <Link className="link" href="/#service">Services</Link>
          </li>
          <li className="item">
            <Link className="link" href="/#portfolio">Portfolio</Link>
          </li>
          <li className="item">
            <Link className="link" href="/#contact">Contact</Link>
          </li>
        </ul>
        <button id="nav-toggle" className="hamburger hamburger--elastic">
          <div className="hamburger-box">
            <div className="hamburger-inner"></div>
          </div>
        </button>
      </div>
    </nav>
  );
}
