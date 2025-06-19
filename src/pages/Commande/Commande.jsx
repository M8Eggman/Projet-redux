import { useSelector, useDispatch } from "react-redux";
import { appliquerCode } from "../../features/reductionSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Commande.css";

export default function Commande() {
  const cart = useSelector((state) => state.pizza.panier);
  const { reduction } = useSelector((state) => state.reduction); // 👈
  const [coupon, setCoupon] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const total = cart.reduce((acc, pizza) => acc + pizza.price, 0);
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
                {reduction > 0 && (
                  <tr>
                    <td>Total avec réduction</td>
                    <td>{totalApresReduction.toFixed(2)} €</td>
                  </tr>
                )}
              </tfoot>
            </table>

            <div className="commandeCouponZone">
              <input
                className="pizzaPanierCoupon"
                type="text"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                placeholder="Code promo (ex: PIZZA10)"
              />
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
