import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./ThankCommande.css";

export default function MerciCommande() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/"); // Redirection après 5 secondes
    }, 5000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <section className="merciCommande">
      <div className="merciBox">
        <h1>Merci pour ta commande 🍕</h1>
        <p>Ta délicieuse pizza est en préparation et arrivera bientôt chez toi.</p>
        <p className="redirect">Redirection automatique vers l’accueil...</p>
      </div>
    </section>
  );
}
