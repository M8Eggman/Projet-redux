import { useSelector } from "react-redux";

export default function AccueilPizza() {
  const pizzas = useSelector((state) => state.pizza.pizzas);

  return (
    <>
      <section className="sectionAccueil">
        <div className="accueilPizzas">
          {pizzas.map((pizza) => (
            <p>{pizza.name}</p>
          ))}
        </div>
        <div className="accueilPanier"></div>
      </section>
    </>
  );
}
