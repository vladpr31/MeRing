import React from "react";
import Hero from "../Hero/Hero";
import { Link } from "react-scroll";

import "./Home.css";
function Home() {
  return (
    <div className="home-container">
      <div className="col-md-6 leftSide">
        <h2>Keep Track Of Your Loved Ones</h2>
        <h1>
          <span className="highlight">MeRing a Life Savior.</span>
        </h1>
        <h3>A health tracker which allows constant vitals monitoring.</h3>
        <button className="readMoreBtn">
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={100}
            duration={500}
          >
            Read More
          </Link>
        </button>
      </div>
      <div className="cold-md-6 rightSide">
        <Hero />
      </div>
    </div>
  );
}
export default Home;
