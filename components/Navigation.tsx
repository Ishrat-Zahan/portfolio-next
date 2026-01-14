"use client";

import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();
  const isDetailPage = pathname?.startsWith('/portfolio/') && pathname !== '/portfolio';

  return (
    <nav className="custom-navbar">
      <div className="container">
        <a className="logo" href="/#home">Ishrat Zahan</a>
        <ul className="nav">
          <li className="item">
            <a className="link" href="/#home">Home</a>
          </li>
          <li className="item">
            <a className="link" href="/#about">About</a>
          </li>
          <li className="item">
            <a className="link" href="/#service">Services</a>
          </li>
          <li className="item">
            <a className="link" href="/#portfolio">Portfolio</a>
          </li>
          <li className="item">
            <a className="link" href="/#contact">Contact</a>
          </li>
        </ul>
        <a href="javascript:void(0)" id="nav-toggle" className="hamburger hamburger--elastic">
          <div className="hamburger-box">
            <div className="hamburger-inner"></div>
          </div>
        </a>
      </div>
    </nav>
  );
}
