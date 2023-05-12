import React from "react";
import "./InputWish.css";
import axios from "axios";
import swal from "sweetalert";

export default function InputWish(props) {
  function wish() {
    let userName = document.querySelector(".user-name").value;
    let wish = document.querySelector(".wish").value;

    if (userName === "") {
      console.log("Empty");
      userName = "Gagan Saini";
    }
    if (wish === "") {
      wish = "Happy Birthday!";
    }

    axios
      .post("https://portfolio-backend-85x3.onrender.com/wish", {
        userName: userName,
        wish: wish,
      })
      .then((response) => {
        // console.log(response);
        props.loadWishes();
        swal("Thanks", "Your wish is submited", "success");
      })
      .then(() => {
        document.querySelector(".user-name").value = "";
        document.querySelector(".wish").value = "";
        // userName.value = "";
        // wish.value = "";
      })
      .catch((err) => {
        console.log(err);
        swal("Oops!", "Something went wrong please wish again", "danger");
      });
  }

  return (
    <div className="input-wish-container">
      <input
        className="user-name input-item"
        type="text"
        placeholder="Gagan Saini (Your Name)"
      />
      <textarea
        className="wish input-item"
        placeholder="Happy Birthday! (Wish)"
      ></textarea>
      <button className="wish-btn" onClick={wish}>
        Wish!
      </button>
    </div>
  );
}
