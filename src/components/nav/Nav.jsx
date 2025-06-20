import { useState } from "react";
import "./Nav.css";
import logo from "../../assets/logo.webp";
import { Link, useNavigate } from "react-router-dom";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="logo" onClick={() => navigate("/")}>
        <img src={logo} alt="Logo PizzaHut" className="logo-img" />
      </div>
      {/* Bouton burger */}
      <div className={`burger ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
        <span />
        <span />
        <span />
      </div>
      {/* Liens navigation */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li className="NOclk">Menu</li>
        <li className="NOclk">Entrée</li>
        <li>
          <Link to="/">Pizza</Link>
        </li>
        <li className="NOclk">Spécialités</li>
        <li className="NOclk">Boissons</li>
        <li className="NOclk">Desserts</li>
      </ul>
      <div className={`right-section ${menuOpen ? "active" : ""}`}>
        <ul className="right-links">
          <li className="se-connecter">Se connecter</li>
          <li className="langue">
            <span className="lang-text">FR</span>
            <span className="chevron">▼</span>
          </li>
        </ul>
      </div>
    </nav>
  );
}
