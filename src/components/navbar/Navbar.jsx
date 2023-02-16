import { Link, useLocation  } from "react-router-dom";
import { useState, useEffect } from "react";
import "./navbar.css";

export default function Navbar() {
  const location = useLocation().pathname;

  const [underline, setUnderline] = useState("");

  useEffect(() => {

    if (location === "/"){
      setUnderline("accueil");
    } else if (location === "/about"){
      setUnderline("about");
    }
  }, []);

  return (
    <nav>
      <ul>
        <li>
          <Link
          to="/"
          className={underline === "accueil" ? "underline" : "removeUnderline"}
          >Accueil</Link>
        </li>
        <li>
          <Link
          to="/about"
          className={underline === "about" ? "underline" : "removeUnderline"}
          >A propos</Link>
        </li>
      </ul>
    </nav>
  );
}
