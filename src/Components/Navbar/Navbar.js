import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav-container">
      <section className="logo-section">Anand</section>
      <section className="menu-section">
        <Link className="menu-item home" to={"/home"}>
          Home
        </Link>
        <Link className="menu-item" to={"/wish"}>
          Wish!
        </Link>
        {/* <Link className="menu-item" to={"/thoughts"}>
          Thoughts
        </Link> */}
        {/* <Link className="menu-item" to={"/about"}>
          About
        </Link> */}
      </section>
    </nav>
  );
}
