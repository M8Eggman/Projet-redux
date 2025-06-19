import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./ThankCommande.css";
import { useDispatch } from "react-redux";
import { resetPanier } from "../../features/pizzaSlice";
import { resetReduction } from "../../features/reductionSlice";

export default function MerciCommande() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetPanier());
    dispatch(resetReduction());
    const timer = setTimeout(() => {
      navigate("/");
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
