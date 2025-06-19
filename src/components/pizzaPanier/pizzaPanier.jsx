import "./pizzaPanier.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

export default function PizzaPanier() {
  return (
    <div className="pizzaPanier">
      <div className="pizzaPanierHeader">
        <h2>Panier d'achat</h2>
        <div className="pizzaPanierAllPizzas">
          <div className="pizzaPanierPizza">
            <div className="pizzaPanierPizzadetails">
              <p>Garden Lovers</p>
              <p>Medium Classic</p>
              <div className="pizzaPanierQuantity">
                <button>
                  <FontAwesomeIcon icon={faMinus} />
                </button>
                <span>1</span>
                <button>
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              </div>
            </div>
            <div className="pizzaPanierPrice">
              <p>€16,00</p>
              <div className="pizzaPanierBtn">
                <button className="pizzaPanierModifier">Modifier</button>
                <button className="pizzaPanierSupprimer">Supprimer</button>
              </div>
            </div>
          </div>
          <div className="pizzaPanierPizza">
            <div className="pizzaPanierPizzadetails">
              <p>Garden Lovers</p>
              <p>Medium Classic</p>
              <div className="pizzaPanierQuantity">
                <button>
                  <FontAwesomeIcon icon={faMinus} />
                </button>
                <span>1</span>
                <button>
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              </div>
            </div>
            <div className="pizzaPanierPrice">
              <p>€16,00</p>
              <div className="pizzaPanierBtn">
                <button className="pizzaPanierModifier">Modifier</button>
                <button className="pizzaPanierSupprimer">Supprimer</button>
              </div>
            </div>
          </div>
          <div className="pizzaPanierPizza">
            <div className="pizzaPanierPizzadetails">
              <p>Garden Lovers</p>
              <p>Medium Classic</p>
              <div className="pizzaPanierQuantity">
                <button>
                  <FontAwesomeIcon icon={faMinus} />
                </button>
                <span>1</span>
                <button>
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              </div>
            </div>
            <div className="pizzaPanierPrice">
              <p>€16,00</p>
              <div className="pizzaPanierBtn">
                <button className="pizzaPanierModifier">Modifier</button>
                <button className="pizzaPanierSupprimer">Supprimer</button>
              </div>
            </div>
          </div>
          <div className="pizzaPanierPizza">
            <div className="pizzaPanierPizzadetails">
              <p>Garden Lovers</p>
              <p>Medium Classic</p>
              <div className="pizzaPanierQuantity">
                <button>
                  <FontAwesomeIcon icon={faMinus} />
                </button>
                <span>1</span>
                <button>
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              </div>
            </div>
            <div className="pizzaPanierPrice">
              <p>€16,00</p>
              <div className="pizzaPanierBtn">
                <button className="pizzaPanierModifier">Modifier</button>
                <button className="pizzaPanierSupprimer">Supprimer</button>
              </div>
            </div>
          </div>
        </div>
        <input className="pizzaPanierCoupon" type="text" placeholder="Insérer votre coupon" />
        <div className="pizzaPanierTotal">
          <p>
            <span>Livraison</span>
            <span>€1,99</span>
          </p>
          <p>
            <span>Total </span>
            <span>€17,99</span>
          </p>
        </div>
      </div>
      <div className="pizzaPanierCommander">
        <button>
          <span>1</span>
          <span>Commander</span>
          <span>€17,99</span>
        </button>
      </div>
    </div>
  );
}
