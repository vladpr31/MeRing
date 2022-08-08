import React from "react";
import "./Footer.css";
const Footer = () => {
  const downloadButton = () => {
    return window.open(
      "https://drive.google.com/uc?export=download&id=1mVp-L8Gx3vyOY3phIgxNYKq4aXYI_vIY"
    );
  };
  return (
    <div className="footerContainer">
      <p>You can check full Powerpoint project here:</p>
      <button className="cv-btn" onClick={downloadButton}>
        Download Mockup Project
      </button>
    </div>
  );
};
export default Footer;
