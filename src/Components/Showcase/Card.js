import React from "react";
import "./Card.css";

const Card = ({ slide, className }) => {
  return (
    <div className="slideContent">
      {className == "centerSlide" ? (
        <div className="slideTitle">
          <h1>{slide.title}</h1>
        </div>
      ) : null}
      <img className={className} src={slide.image}></img>
      {className == "centerSlide" ? (
        <div className="slideCaption">{slide.caption}</div>
      ) : null}
    </div>
  );
};
export default Card;
/*<div className="slideContentInner">
        <h1 className="slideTitle">{slide.title}</h1>
        <p className="slideDescription">{slide.description}</p>
      </div> */
