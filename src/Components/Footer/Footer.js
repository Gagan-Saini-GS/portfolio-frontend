import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer-container">
      <h2>About Me</h2>
      <div className="about-me">
        I am a mathematics teacher with over 30+ years of experience. And in
        this journey of last 30 years I learned countless new things which I
        can't even imagine once I was a child. My family always supports me no
        matter what are the conditions. In this journey I taught 1000+ students
        and always be greatful for that. And always looking forward.... 🙂
      </div>
      <h3>Contact Me</h3>
      <div className="contact-me-section">
        <div className="contact-item">
          <div className="contact-item-icon">
            <img src="/images/gmail.png" alt="email" />
          </div>
          <div className="contact-item-info">kiraruke19@gmail.com</div>
        </div>
        <div className="contact-item">
          <div className="contact-item-icon">
            <img src="/images/phone-call.png" alt="phone" />
          </div>
          <div className="contact-item-info">+91 8302712712</div>
        </div>
        <div className="attribution-area">
          <a
            href="https://www.flaticon.com/free-icons/phone"
            title="phone icons"
          >
            Phone icons created by Prosymbols - Flaticon
          </a>
          <a
            href="https://www.flaticon.com/free-icons/gmail"
            title="gmail icons"
          >
            Gmail icons created by Pixel perfect - Flaticon
          </a>
        </div>
      </div>
    </div>
  );
}
