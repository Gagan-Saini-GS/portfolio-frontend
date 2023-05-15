import React from "react";
import "./Home.css";
import Gallery from "../Gallery/Gallery";
import About from "../About/About";
import Border from "../Border/Border";

export default function Home() {
  return (
    <div className="home-container">
      <About />
      <div className="home-top-container">
        <div className="name">My Family</div>
        <Gallery />
        <Border />
      </div>
    </div>
  );
}
