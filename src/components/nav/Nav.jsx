import React from "react";
import "./Nav.css"; // Le style à côté
import logo from "../../assets/logo.webp"

export default function Nav() {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="#pizza">
          <img src={logo} alt="Logo PizzaHut" className="logo-img" />
        </a>
      </div>
      <ul className="nav-links">
        <li><a href="#pizza">Pizza</a></li>
      </ul>
    </nav>
  );
}
