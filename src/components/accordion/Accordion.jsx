import "./accordion.css";
import downArrow from "../../assets/downArrow.png";
import { useState } from "react";

export default function Accordion({ title, text }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="item">
      <div className="title" onClick={toggle}>
        <h2>
          {title}{" "}
          <img
            className={isOpen === false ? "arrow up" : "arrow down"}
            src={downArrow}
            alt="Flèche vers le bas"
          />
        </h2>
      </div>
      <div className={isOpen === true ? "content show" : "content"}>
        <p>{text}</p>
      </div>
    </div>
  );
}
