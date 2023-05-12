import React from "react";
import "./Timer.css";

export default function Timer() {
  //   const deadline = new Date("May 16, 2023 00:00:00").getTime();
  //   const x = setInterval(function () {
  //     let now = new Date().getTime();
  //     let t = deadline - now;

  //     let days = Math.floor(t / (1000 * 60 * 60 * 24));
  //     let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  //     let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
  //     let seconds = Math.floor((t % (1000 * 60)) / 1000);
  //     if (days <= 9) {
  //       days = "0" + days;
  //     }
  //     if (hours <= 9) {
  //       hours = "0" + hours;
  //     }
  //     if (minutes <= 9) {
  //       minutes = "0" + minutes;
  //     }
  //     if (seconds <= 9) {
  //       seconds = "0" + seconds;
  //     }

  //     document.querySelector(".days").innerHTML = days;
  //     document.querySelector(".hours").innerHTML = hours;
  //     document.querySelector(".minutes").innerHTML = minutes;
  //     document.querySelector(".seconds").innerHTML = seconds;
  //     if (t < 0) {
  //       clearInterval(x);
  //     }
  //   }, 1000);

  return (
    <div className="timer-container">
      <div className="timer-item">
        <div className="timer-heading">Days</div>
        <div className="timer-data days">6</div>
      </div>
      <div className="timer-item">
        <div className="timer-heading">Hours</div>
        <div className="timer-data hours">16</div>
      </div>
      <div className="timer-item">
        <div className="timer-heading">Minutes</div>
        <div className="timer-data minutes">34</div>
      </div>
      <div className="timer-item">
        <div className="timer-heading">Seconds</div>
        <div className="timer-data seconds">23</div>
      </div>
    </div>
  );
}
