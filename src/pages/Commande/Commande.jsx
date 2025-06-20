import { useSelector, useDispatch } from "react-redux";
import { appliquerCode } from "../../features/reductionSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Commande.css";

export default function Commande() {
  const panier = useSelector((state) => state.pizza.panier);
  const { reduction } = useSelector((state) => state.reduction);
  const [coupon, setCoupon] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const total = panier.reduce((acc, pizza) => acc + pizza.totalPrice * pizza.quantity, 0) + 1.99;
  const montantReduction = total * (reduction / 100);
  const totalApresReduction = total * ((100 - reduction) / 100);

  const handleValider = () => {
    navigate("/remerciement");
  };

  const handleCoupon = () => {
    dispatch(appliquerCode(coupon));
  };

  return (
    <section className="sectionCommande">
      <div>
        <div className="sectionHeader">
          <div className="line"></div>
          <div className="title">Pizza</div>
          <div className="line"></div>
        </div>

        {panier.length === 0 ? (
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
                {panier.map((pizza, i) => (
                  <tr key={i}>
                    <td>{pizza.name} x {pizza.quantity}</td>
                    <td>{(pizza.totalPrice * pizza.quantity).toFixed(2)} €</td>
                  </tr>
                ))}
                <tr>
                  <td>Livraison</td>
                  <td>1,99€</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td>Total</td>
                  <td>{total.toFixed(2)} €</td>
                </tr>
                {reduction > 0 && (
                  <>
                    <tr>
                      <td>Réduction</td>
                      <td>-{montantReduction.toFixed(2)} €</td>
                    </tr>
                    <tr>
                      <td>Total avec réduction</td>
                      <td>{totalApresReduction.toFixed(2)} €</td>
                    </tr>
                  </>
                )}
              </tfoot>
            </table>

            <div className="commandeCouponZone">
              <input className="pizzaPanierCoupon" type="text" value={coupon} onChange={(e) => setCoupon(e.target.value)} placeholder="Code promo" />
              <button className="btnValider" onClick={handleCoupon}>
                Appliquer le code
              </button>
              <button className="btnValider" onClick={handleValider}>
                Valider la commande
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
