import React from "react";
import "./Nav.css"; // Si tu veux du style à part

export default function Nav() {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="#pizza"> PizzaHut</a>
      </div>
      <ul className="nav-links">
        <li><a href="#pizza">Nos Pizzas</a></li>
      </ul>
    </nav>
  );
}
