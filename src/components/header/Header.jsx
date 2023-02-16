import LOGO from "../../assets/LOGO.svg";
import Navbar from "../navbar/Navbar";
import "./header.css";

export default function Header() {
  return (
    <header>
      <h1>
        <img src={LOGO} alt="kasa, location d'appartements" />
      </h1>
      <Navbar />
    </header>
  );
}
