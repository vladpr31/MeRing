import React, { useEffect } from "react";
import Hero from "../Hero/Hero";
import "./Home.css";
function Home() {
  return (
    <div className="home-container">
      <div className="leftSide">
        <h2>Keep Track Of Your Loved Ones</h2>
        <h1>
          <span className="highlight">MeRing a Life Savior.</span>
        </h1>
        <h3>A health tracker which allows constant vitals monitoring.</h3>
        <button className="readMoreBtn">Read More</button>
      </div>
      <div className="rightSide">
        <Hero />
      </div>
    </div>
  );
}
export default Home;
