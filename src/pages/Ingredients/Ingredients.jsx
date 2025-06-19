import "./Ingredients.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { ajouterPanier } from "../../features/pizzaSlice";

export default function Ingredients() {
  const { custom } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const pizzas = useSelector((state) => state.pizza.allPizzas);
  const selectedPizza = pizzas.find((pizza) => pizza.name === custom);

  // Ajoute quantity a tout les ingredients
  const [ingredients, setIngredients] = useState(selectedPizza.ingredients.map((i) => ({ ...i, quantity: 1 })));

  function handleIngredientQuantity(name, nbr) {
    setIngredients((prev) => prev.map((i) => (i.name === name ? { ...i, quantity: i.quantity + nbr } : i)));
  }

  return (
    <section className="sectionIngredients">
      <button onClick={"/"}>Retour</button>
      {selectedPizza ? (
        <div className="">
          <div className="ingredientImage">
            <img src={selectedPizza.image} alt="" />
          </div>
          <div className="ingredients">
            <h1>
              {selectedPizza.name} <span>€{selectedPizza.price.toFixed(2).replace(".", ",")}</span>
            </h1>
            <p>{selectedPizza.description}</p>
            <div className="">
              <div className="ingredientsListHeader">
                <h3>Ingrédients</h3> <FontAwesomeIcon icon={faChevronDown} />
              </div>
              <ul>
                {ingredients.map((ing) => (
                  <li key={ing.name}>
                    <span className="ingredientIcon">{/* ajout une icone si jai pas la flemme */}</span>
                    <span className="ingredientName">{ing.name}</span>
                    <button className="ingredientButton" onClick={() => handleIngredientQuantity(ing.name, -1)} disabled={ing.quantity <= 0}>
                      <FontAwesomeIcon icon={faMinus} />
                    </button>
                    <span className="ingredientQuantity">{ing.quantity}</span>
                    <button className="ingredientButton" onClick={() => handleIngredientQuantity(ing.name, 1)} disabled={ing.quantity >= 2}>
                      <FontAwesomeIcon icon={faPlus} />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <button
              className="ingredientAjouterPanier"
              onClick={() => {
                dispatch(ajouterPanier({ ...selectedPizza, ingredients: ingredients }));
                navigate("/");
              }}>
              Ajouter au panier €{selectedPizza.price.toFixed(2).replace(".", ",")}
            </button>
          </div>
        </div>
      ) : (
        <p className="pizzaNonTrouvé">Pizza non trouvée.</p>
      )}
    </section>
  );
}
