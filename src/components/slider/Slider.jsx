import "./slider.css";
import { useState } from "react";
import BtnSlider from "../btnSlider/BtnSlider";

export default function Slider({ imageSlider }) {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== imageSlider.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === imageSlider.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(imageSlider.length);
    }
  };

  return (
    <div className="container-slider">
      {imageSlider?.map((obj, index) => {
        return (
          <div
            key={index + 700}
            className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
          >
            <img src={obj} alt="slider" />
            <p>{index + 1 + "/" + imageSlider.length}</p>
          </div>
        );
      })}
      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />
    </div>
  );
}
