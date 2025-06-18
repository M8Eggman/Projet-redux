import { useSelector } from "react-redux";
import PizzaCard from "../components/pizzaCard/PizzaCard";

export default function AccueilPizza() {
  const pizzas = useSelector((state) => state.pizza.allPizzas);
  console.log(pizzas);

  return (
    <>
      <section className="sectionAccueil">
        <div className="accueilPizzas">
          {pizzas.map((pizza, index) => (
            <PizzaCard pizza={pizza} />
          ))}
        </div>
        <div className="accueilPanier"></div>
      </section>
    </>
  );
}
