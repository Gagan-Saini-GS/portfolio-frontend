import React from "react";
import "./Gallery.css";

export default function Gallery() {
  return (
    <div className="gallery-container">
      <div className="img-container">
        <div className="item item-1">
          <div className="img-item img-item-1">
            <img
              className="img1"
              src="/images/GandT.jpeg"
              alt="Image of my Dad"
            />
          </div>
          <div className="img-item img-item-2">
            <img className="img2" src="/images/13.jpeg" alt="Image of my Dad" />
          </div>
          <div className="img-item img-item-3">
            <img
              className="img3"
              src="/images/dadandmom1.jpeg"
              alt="Image of my Dad"
            />
          </div>
        </div>
        <div className="item item-2">
          <div className="img-item img-item-4">
            <img
              className="img4"
              src="/images/dadandmom2.jpeg"
              alt="Image of my Dad"
            />
          </div>
          <div className="img-item img-item-5">
            <img className="img5" src="/images/11.jpeg" alt="Image of my Dad" />
          </div>
          <div className="img-item img-item-6">
            <img className="img6" src="/images/5.jpeg" alt="Image of my Dad" />
          </div>
        </div>
      </div>
    </div>
  );
}
