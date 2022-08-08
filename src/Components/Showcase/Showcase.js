import React, { useEffect } from "react";
import "./Showcase.css";
import { Slides } from "./Slides";
import Card from "./Card";
const Showcase = () => {
  const slides = Slides;
  const [index, setIndex] = React.useState(0);
  const slidesLength = slides.length;
  const nextHandler = () => {
    if (index < slides.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  const prevHandler = () => {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(slides.length - 1);
    }
  };

  return (
    <div className="showcaseContainer">
      <button className="nextSlide" onClick={nextHandler}>
        ≻
      </button>
      <button className="prevSlide" onClick={prevHandler}>
        ≺
      </button>
      <div className="slidesContainer">
        {index - 1 > 0 ? (
          <Card slide={slides[index - 1]} className="leftSlide" />
        ) : (
          <Card slide={slides[slidesLength - 1]} className="leftSlide" />
        )}

        <Card slide={slides[index]} className="centerSlide" />

        {index + 1 < slidesLength ? (
          <Card slide={slides[index + 1]} className="leftSlide" />
        ) : (
          <Card slide={slides[0]} className="leftSlide" />
        )}
      </div>
    </div>
  );
};
export default Showcase;
