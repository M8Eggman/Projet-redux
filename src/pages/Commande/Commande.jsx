import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Commande.css";

export default function Commande() {
  const cart = useSelector((state) => state.pizza.panier);
  const total = cart.reduce((acc, pizza) => acc + pizza.price, 0);
  const navigate = useNavigate();

  const handleValider = () => {
    navigate("/remerciement");
  };

  return (
    <section className="sectionCommande">
      <div>
        <div className="sectionHeader">
          <div className="line"></div>
          <div className="title">Pizza</div>
          <div className="line"></div>
        </div>

        {cart.length === 0 ? (
          <p className="emptyMessage">Ton panier est vide.</p>
        ) : (
          <>
            <table className="commandeTable">
              <thead>
                <tr>
                  <th>Nom de la pizza</th>
                  <th>Prix</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((pizza, i) => (
                  <tr key={i}>
                    <td>{pizza.name}</td>
                    <td>{pizza.price.toFixed(2)} €</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td>Total</td>
                  <td>{total.toFixed(2)} €</td>
                </tr>
              </tfoot>
            </table>
            <input className="pizzaPanierCoupon" type="text" placeholder="Insérer votre coupon" ></input>
            <button className="btnValider" onClick={handleValider}>
              Valider la commande
            </button>
          </>
        )}
      </div>
    </section>
  );
}
