import React from "react";
import "./Footer.css"; // Si tu veux séparer le style

export default function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} PizzaHUT — Projet-MoelenGeek.</p>
    </footer>
  );
}
