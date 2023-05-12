import React, { useEffect, useState } from "react";
import "./Wish.css";
import axios from "axios";
import WishCard from "../Cards/WishCard/WishCard";
import InputWish from "./InputWish";

export default function Wish() {
  const [wishes, setWishes] = useState();

  useEffect(() => {
    loadWishes();
  }, []);

  function loadWishes() {
    axios
      .post("https://portfolio-backend-85x3.onrender.com/get-wishes", {
        msg: "Hello",
      })
      .then((response) => {
        // console.log(response.data.wishes);
        response.data.wishes.reverse();
        setWishes(response.data.wishes);
      });
  }

  return (
    <div className="main-wish-container">
      <div className="wish-item">
        <InputWish loadWishes={loadWishes} />
      </div>
      <div className="wish-item wishes-container">
        {wishes !== undefined &&
          wishes.map((item, index) => {
            return <WishCard key={index} content={item} />;
          })}
      </div>
    </div>
  );
}
