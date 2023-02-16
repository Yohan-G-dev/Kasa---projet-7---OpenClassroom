import LOGO from "../../assets/Logo_footer.svg";
import "./footer.css";

export default function Footer() {
  return (
    <footer>
      <img src={LOGO} alt="kasa, location d'appartements" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}
