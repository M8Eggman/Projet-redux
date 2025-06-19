import { useDispatch } from "react-redux";
import "./PizzaCard.css";
import { ajouterPanier } from "../../features/pizzaSlice";

export default function PizzaCard({ pizza }) {
  const dispatch = useDispatch();
  return (
    <div className="pizzaCard">
      <div className="pizzaCardImg">
        <img src={pizza.image} alt={pizza.name} />
      </div>
      <div className="pizzaCardContent">
        <h3>{pizza.name}</h3>
        <p>{pizza.description}</p>
      </div>
      <div className="pizzaCardFooter">
        <span>
          à partir de <b>€{pizza.price.toFixed(2).replace(".", ",")}</b>
        </span>
        <button onClick={()=>dispatch(ajouterPanier(pizza))}>+</button>
      </div>
    </div>
  );
}
