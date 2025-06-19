import "./pizzaPanier.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { supprimerPanier } from "../../features/pizzaSlice";

function totalPanier(panier) {
  let total = 0;
  for (let i = 0; i < panier.length; i++) {
    total += panier[i].price * panier[i].quantity;
  }
  return total;
}

function quantiteTotale(panier) {
  let quantite = 0;
  for (let i = 0; i < panier.length; i++) {
    quantite += panier[i].quantity;
  }
  return quantite;
}

export default function PizzaPanier({ changeStyle }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const panier = useSelector((state) => state.pizza.panier);
  const livraison = 1.99;
  const quantite = quantiteTotale(panier);
  const total = totalPanier(panier);
  const totalAvecLivraison = total + (panier.length > 0 ? livraison : 0);

  return (
    <div className="pizzaPanier">
      <div className="pizzaPanierHeader">
        <h2>Panier d'achat</h2>
        <div className="pizzaPanierAllPizzas" style={changeStyle ? { maxHeight: "280px" } : {}}>
          {panier.length !== 0 ? (
            panier.map((pizza, index) => (
              <div key={index} className="pizzaPanierPizza" style={changeStyle ? { alignItems: "flex-start", paddingTop: "15px", height: "70px" } : {}}>
                <div className="pizzaPanierPizzadetails">
                  <p>{pizza.name}</p>
                  <p>Medium Classic</p>
                  {!changeStyle && (
                    <div className="pizzaPanierQuantity">
                      <button>
                        <FontAwesomeIcon icon={faMinus} />
                      </button>
                      <span>{pizza.quantity}</span>
                      <button>
                        <FontAwesomeIcon icon={faPlus} />
                      </button>
                    </div>
                  )}
                </div>
                <div className="pizzaPanierPrice">
                  <p>€{pizza.price.toFixed(2).replace(".", ",")}</p>
                  {!changeStyle && (
                    <div className="pizzaPanierBtn">
                      <button className="pizzaPanierModifier">Modifier</button>
                      <button className="pizzaPanierSupprimer" onClick={() => dispatch(supprimerPanier(pizza.id))}>
                        Supprimer
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))
          ) : (
            <p className="panierVide">Panier vide</p>
          )}
        </div>
        {!changeStyle && <input className="pizzaPanierCoupon" type="text" placeholder="Insérer votre coupon" />}
        <div className="pizzaPanierTotal">
          {totalAvecLivraison >= 15 && (
            <p>
              <span>Livraison</span>
              <span>€{livraison.toFixed(2).replace(".", ",")}</span>
            </p>
          )}
          <p>
            <span>Total </span>
            <span>€{totalAvecLivraison.toFixed(2).replace(".", ",")}</span>
          </p>
        </div>
      </div>
      {!changeStyle && (
        <div className="pizzaPanierCommander">
          <button>
            <span>{quantite}</span>
            <span>Commander</span>
            <span>€{totalAvecLivraison.toFixed(2).replace(".", ",")}</span>
          </button>
        </div>
      )}
    </div>
  );
}
