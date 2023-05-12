import React from "react";
import "./WishCard.css";

export default function ThoughtCard1(props) {
  const wish = props.content;
  return (
    <div className="thought-card-container">
      <div className="content-box">
        <div>{wish.wish}</div>
        <div className="username">{wish.userName}</div>
      </div>
    </div>
  );
}
