import "./btnSlider.css";
import leftArrow from "../../assets/left-arrow.svg";
import rightArrow from "../../assets/right-arrow.svg";

export default function BtnSlider({ direction, moveSlide }) {
  return (
    <button
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
      onClick={moveSlide}
    >
      <img src={direction === "next" ? rightArrow : leftArrow} alt="bouton" />
    </button>
  );
}
