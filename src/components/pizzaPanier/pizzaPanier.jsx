import "./pizzaPanier.css";

export default function PizzaPanier() {
  return (
    <div className="pizzaPanier">
      <h2>Panier d'achat</h2>
      <div className="pizzaPanierPizza">
        <div className="pizzaPanierPizzadetails">
          <p>Garden Lovers</p>
          <p>Medium Classic</p>
          <div className="pizzaPanierQuantity">
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div>
        </div>
        <div className="pizzaPanierBtn">
          <p>€16,00</p>
          <button className="pizzaPanierModifier">Modifier</button>
          <button className="pizzaPanierSupprimer">Supprimer</button>
        </div>
      </div>
      <input className="pizzaPanierCoupon" type="text" placeholder="Insérer votre coupon" />
      <div className="pizzaPanierTotal">
        <span>Livraison €1,99</span>
        <span>Total €17,99</span>
      </div>
      <div className="pizzaPanierBtn">
        <button>1 Commander</button>
      </div>
    </div>
  );
}
