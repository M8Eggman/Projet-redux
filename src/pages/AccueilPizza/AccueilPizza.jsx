import "./AccueilPizza.css";
import { useSelector } from "react-redux";
import PizzaCard from "../../components/pizzaCard/PizzaCard";
import PizzaPanier from "../../components/pizzaPanier/pizzaPanier";

export default function AccueilPizza() {
  const pizzas = useSelector((state) => state.pizza.allPizzas);

  return (
    <>
      <section className="sectionAccueil">
        <div>
          <div className="sectionHeader">
            <div className="line"></div>
            <div className="title">Pizza</div>
            <div className="line"></div>
          </div>
          <div className="accueilPizzas">
            {pizzas.map((pizza, index) => (
              <PizzaCard key={index} pizza={pizza} />
            ))}
          </div>
        </div>
        <PizzaPanier />
      </section>
    </>
  );
}
