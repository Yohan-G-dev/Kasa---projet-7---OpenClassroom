import dataLogements from "../../data/logementData";
import { Link } from "react-router-dom";
import "./listcard.css";

export default function ListCard() {
  return (
    <div className="card-container">
      {dataLogements.map((item, index) => {
        const Iditems = item.id;
        return (
          <Link
            to={`/logement/${Iditems}`}
            className="card-items"
            key={index + 400}
          >
            <img src={item.cover} alt={item.title} />
            <h2>{item.title}</h2>
          </Link>
        );
      })}
    </div>
  );
}
