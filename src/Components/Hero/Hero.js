import React from "react";
import meRing from "../..//Assets/meRing.png";
import "./Hero.css";
const Hero = () => {
  return (
    <section className="hero">
      <img id="ringImg" src={meRing} alt="myProfile-img" draggable="false" />
    </section>
  );
};
export default Hero;
