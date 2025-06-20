import "./Ingredients.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faChevronLeft, faChevronUp, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { ajouterPanier, modifierPizzaPanier } from "../../features/pizzaSlice";
import PizzaPanier from "../../components/pizzaPanier/pizzaPanier";

export default function Ingredients() {
  const { id } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const pizzas = useSelector((state) => state.pizza.allPizzas);
  const panier = useSelector((state) => state.pizza.panier);

  const selectedPizza = pizzas.find((pizza) => pizza.id === id) || panier.find((pizza) => pizza.id === parseInt(id));

  // Ajoute quantity a tout les ingredients, seulement si selectedPizza existe
  const [ingredients, setIngredients] = useState(
    selectedPizza && selectedPizza.ingredients ? selectedPizza.ingredients.map((i) => ({ ...i, quantity: i.quantity + 1 ? i.quantity : 1 })) : []
  );

  const ingredientsSup = ingredients.filter((i) => i.quantity > 1);
  const ingredientsSans = ingredients.filter((i) => i.quantity === 0);

  const totalPrice = selectedPizza.price + ingredients.filter((ing) => ing.quantity > 1).reduce((sum, ing) => sum + ing.price, 0);

  // si l'id est un int choisis le mode modifier sinon le mode ajouter
  const mode = parseInt(id) ? "modifier" : "ajouter";

  function handleIngredientQuantity(name, nbr) {
    setIngredients((prev) => prev.map((i) => (i.name === name ? { ...i, quantity: i.quantity + nbr } : i)));
  }

  return (
    <section className="sectionIngredients">
      <button onClick={() => navigate("/")}>
        <FontAwesomeIcon icon={faChevronLeft} /> Retour
      </button>
      <div className="ingredientResponsiveButton">
        <h1>{selectedPizza.name}</h1>
        <button onClick={() => navigate("/")}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
      {selectedPizza ? (
        <div className="divIngredients">
          <div className="modifPizza">
            <div className="ingredientImage">
              <img src={selectedPizza.image} alt="" />
            </div>
            <div className="ingredients">
              <h1>
                {selectedPizza.name} <span>€{selectedPizza.price.toFixed(2).replace(".", ",")}</span>
              </h1>
              <p>
                {selectedPizza.description} <span>€{selectedPizza.price.toFixed(2).replace(".", ",")}</span>
              </p>
              {ingredientsSup.length > 0 && (
                <p className="panierSuppP">
                  <span className="panierSuppSpan">Supp</span>
                  {ingredientsSup.map((ing, idx) => (
                    <span key={ing.name}>
                      {ing.name}
                      {idx < ingredientsSup.length - 1 && ingredientsSup.length > 1 && ","}
                    </span>
                  ))}
                </p>
              )}
              {ingredientsSans.length > 0 && (
                <p className="panierSansP">
                  <span className="panierSansSpan">Sans</span>
                  {ingredientsSans.map((ing, idx) => (
                    <span key={ing.name}>
                      {ing.name}
                      {idx < ingredientsSans.length - 1 && ingredientsSans.length > 1 && ","}
                    </span>
                  ))}
                </p>
              )}
              <div className="">
                <div className="ingredientsListHeader">
                  <h3>Ingrédients</h3> <FontAwesomeIcon icon={faChevronUp} />
                </div>
                <ul>
                  {ingredients.map((ing) => (
                    <li key={ing.name}>
                      <span className="ingredientIcon">{/* ajout d'une icone si jai pas la flemme */}</span>
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
              <div className="ingredientAjouterPanier">
                <button
                  onClick={() => {
                    const pizzaAJour = {
                      ...selectedPizza,
                      ingredients: ingredients,
                      totalPrice,
                      ingredientsSup,
                      ingredientsSans,
                    };
                    mode === "ajouter" ? dispatch(ajouterPanier(pizzaAJour)) : dispatch(modifierPizzaPanier(pizzaAJour));
                    navigate("/");
                  }}>
                  Ajouter au panier €{totalPrice.toFixed(2).replace(".", ",")}
                </button>
              </div>
            </div>
          </div>
          <PizzaPanier changeStyle={true} />
        </div>
      ) : (
        <p className="pizzaNonTrouvé">Pizza non trouvée.</p>
      )}
    </section>
  );
}
