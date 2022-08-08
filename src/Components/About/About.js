import React from "react";
import AboutPic1 from "../../Assets/aboutPic1.jpg";
import "./About.css";
const About = () => {
  return (
    <div className="aboutContainer">
      <div className="productDescription">
        <h2>What Is MeRing?</h2>
        <p className="desc">
          MeRing is an IoT product which stands for Medical Evaluation Ring. The
          main purpose of this product is to keep track of High-Risk groups, As
          well as elderly people who live alone.
        </p>
      </div>
      <div className="container">
        <div className="front side">
          <div className="content">
            {window.screen.width < 768 ? null : (
              <h1 className="cardTitle">Target Population</h1>
            )}
          </div>
        </div>
        <div className="back side">
          <div className="content">
            <h1 className="cardTitle">We Focus On</h1>
            <p>
              Old aged people frequently lack the energy or the patience to seek
              medical treatment for their own good, and that’s where the problem
              starts.
              <br></br>The old aged population as for 2019 we have 605 Million
              people of age of 65 and above and even more for 2020 (727
              Million), this population often get sick or need treatment as soon
              as possible and very often visit Medical Clinics may it be from
              the minorest reason to a high life threatening reason.
              <br></br> People who live solitary lives, often don’t have any
              family member to take care of them nor call an ambulance if
              needed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
