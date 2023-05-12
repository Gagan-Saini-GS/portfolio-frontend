import React from "react";
import "./Home.css";
// import Gallery from "../Gallery/Gallery";
// import Timer from "../Timer/Timer";

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <div className="home-container">
      This is home container.
      {/* <div className="top-container">
        <Gallery />
        <div className="name">My Family</div>
      </div>
      <div className="timer-section">
        <div className="wish-reminder">
          Don't Forgot to wish my Papa on his birthday, 16 May {year}
        </div>
        <Timer />
      </div> */}
    </div>
  );
}
