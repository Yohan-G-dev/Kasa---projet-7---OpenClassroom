import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import "./error.css";

export default function Error() {
  return (
    <div className="onePage">
      <div className="main-content-wrap">
        <Header />
        <div className="error-container">
          <h1>404</h1>
          <p>Oups! La page que vous demandez n'existe pas.</p>
          <p>
            <Link to="/">Retourner sur la page d’accueil</Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
