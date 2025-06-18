import "./AccueilPizza.css";
import { useSelector } from "react-redux";
import PizzaCard from "../../components/pizzaCard/PizzaCard";

export default function AccueilPizza() {
  const pizzas = useSelector((state) => state.pizza.allPizzas);

  return (
    <>
      <section className="sectionAccueil">
        <div className="accueilPizzas">
          {pizzas.map((pizza, index) => (
            <PizzaCard key={index} pizza={pizza} />
          ))}
        </div>
        <div className="accueilPanier"></div>
      </section>
    </>
  );
}
