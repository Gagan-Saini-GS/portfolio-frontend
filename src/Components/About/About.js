import React from "react";
import "./About.css";
import Border from "../Border/Border";

export default function About() {
  return (
    <div className="about-container">
      <div className="about-top-container">
        <div className="info-container">
          <div className="intro-section">
            <div className="greeting">Hi! I Am</div>
            <div className="about-name">Anand Prakash Saini</div>
            <div className="little-intro">
              Teaching maths for over <span>30+ years</span> as a math teacher.
            </div>
          </div>

          <div className="details-section">
            <div className="detail-item">
              <div className="detail-item-heading">30+</div>
              <div className="detail-item-desc">Years of Experience</div>
            </div>
            <div className="detail-item">
              <div className="detail-item-heading">1000+</div>
              <div className="detail-item-desc">Students taught</div>
            </div>
            <div className="detail-item">
              <div className="detail-item-heading">Contact</div>
              <div className="detail-item-desc">kiraruke19@gmail.com</div>
            </div>
          </div>

          <div className="quote-container">
            <div className="quote-section">
              <span className="double-quote">&#8220;</span>
              <div className="quote-itself">
                Mathematics is not about numbers, equations, computations, or
                algorithms: it is about understanding.
              </div>
              <span className="double-quote">&#8221;</span>
            </div>
            <div className="quote-author">--William Paul Thurston</div>
          </div>
        </div>
        <div className="about-img-container">
          <img src="/images/about.png" alt="" />
        </div>
      </div>
      <Border />
      <div className="news-section">
        <div className="news-img">
          <img src="/images/about-dad-image.jpeg" alt="" />
        </div>
        <div className="news-info">
          <h2>Life Rule</h2>
          <div className="news-info-item">
            One of the biggest rule, I always follows for my life is that "Suno
            Sebki but kero apne man ki"(Listen to everyone but do what you
            want). And this lesson always hepls me to take better decision for
            me and my family.
          </div>
          <div className="news-info-item">
            Never take any important decision when you are angry this will
            always lead us to the wrong decision. Try to calm in every
            situation.
          </div>
          <div className="news-info-item">
            Life is all about your attitude or how you see it. Life have some
            hard times facing them without any fear is important.
          </div>
          <div className="news-info-item">
            We always learn something by exiting our comfort zone. And to be
            honest being in comfort zone in never my priority. Comfort zone slow
            us down towards our goals.
          </div>
          <div className="news-info-item">
            And last but not least your health should be always your first
            priority as a wise man once said "Health is Wealth".
          </div>
        </div>
      </div>
      <Border />
    </div>
  );
}
