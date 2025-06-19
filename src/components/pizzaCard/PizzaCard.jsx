import { useDispatch } from "react-redux";
import "./PizzaCard.css";
import { useNavigate } from "react-router-dom";

export default function PizzaCard({ pizza }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="pizzaCard" onClick={() => navigate(`/${pizza.id}`)}>
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
        <button onClick={() => navigate(`/${pizza.name}`)}>+</button>
      </div>
    </div>
  );
}
