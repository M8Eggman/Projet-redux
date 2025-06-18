import "./PizzaCard.css";

export default function PizzaCard({ pizza }) {
  return (
    <div className="pizzaCard">
      <div className="pizzaCardImg">
        <img src={pizza.image} alt={pizza.name} />
      </div>
      <div className="pizzaCardContent">
        <h3>{pizza.name}</h3>
        <p>{pizza.description}</p>
        <div className="pizzaCardFooter">
          <span>
            à partir de <b>€{pizza.price.toFixed(2).replace(".", ",")}</b>
          </span>
          <button>+</button>
        </div>
      </div>
    </div>
  );
}
