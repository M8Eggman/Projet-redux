import React from "react";
import "./Nav.css";
import logo from "../../assets/logo.webp";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="#pizza">
          <img src={logo} alt="Logo PizzaHut" className="logo-img" />
        </a>
      </div>

      <ul className="nav-links">
        <li className="NOclk">Menu</li>
        <li className="NOclk">Entrée</li>
        <li>
          <Link to="/">Pizza</Link>
        </li>
        <li className="NOclk">Spécialités</li>
        <li className="NOclk">Boissons</li>
        <li className="NOclk">Desserts</li>
      </ul>

      <div className="right-section">
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
