import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { pizzasData } from "./pizzasData";
import "./Ingredients.css";

export default function IngredientsModifier() {
  const dispatch = useDispatch();
  const selectedPizzaInCart = useSelector((state) => state.pizza.cart[0]);
  const pizzaFull = pizzasData.find((p) => p.name === selectedPizzaInCart?.name);

  const [ingredients, setIngredients] = useState(pizzaFull?.ingredients || []);
  const [supplements, setSupplements] = useState([]);

  useEffect(() => {
    setIngredients(pizzaFull?.ingredients || []);
    setSupplements([]); 
  }, [pizzaFull]);

  if (!selectedPizzaInCart) {
    return <p>Aucune pizza sélectionnée dans le panier.</p>;
  }
  if (!pizzaFull) {
    return <p>Pizza non trouvée dans le catalogue.</p>;
  }

  const allIngredients = pizzaFull.ingredients;

  const supplementIngredients = [
  { name: "Viande de boeuf épicée", price: 2.20, icon: "boeuf" },
  { name: "Viande de porc", price: 2.20, icon: "porc" },
  { name: "Lardons fumés", price: 2.20, icon: "lardons" },
  { name: "Ananas", price: 2.20, icon: "ananas" },
  { name: "Anchois", price: 2.20, icon: "anchois" },
  { name: "Bacon fumé", price: 2.20, icon: "bacon" },
  { name: "Champignons", price: 2.20, icon: "champignons" },
  { name: "Dés de tomates", price: 2.20, icon: "tomates" },
  { name: "Emmental", price: 2.20, icon: "emmental" },
  { name: "Falafel Ball", price: 2.20, icon: "falafel" },
  { name: "Fourme d'Ambert", price: 2.20, icon: "fourme" },
  { name: "Fromage d'abbaye Grimbergen", price: 2.20, icon: "grimbergen" },
  { name: "Fromage de chèvre", price: 2.20, icon: "chevre" },
  { name: "Fromage mozzarella", price: 2.20, icon: "mozzarella" },
  { name: "Fromage vegan Violife", price: 2.20, icon: "violife" },
  { name: "Jalapenos", price: 2.20, icon: "jalapenos" },
  { name: "Jambon", price: 2.20, icon: "jambon" },
  { name: "Jambon italien", price: 2.20, icon: "jambon_italien" },
  { name: "Oignons Rouge", price: 2.20, icon: "oignons" },
  { name: "Olives noires", price: 2.20, icon: "olives" },
  { name: "Pepperoni", price: 2.20, icon: "pepperoni" },
  { name: "Piments verts", price: 2.20, icon: "piments" },
  { name: "Poivron vert", price: 2.20, icon: "poivron" },
  { name: "Poulet grillé", price: 2.20, icon: "poulet" },
  { name: "Poulet Kebab", price: 2.20, icon: "kebab" },
  { name: "Sauce a l'ail", price: 2.20, icon: "ail" },
  { name: "Sauce au poivre", price: 2.20, icon: "poivre" },
  { name: "Sauce curry douce", price: 2.20, icon: "curry" },
  { name: "Thon", price: 2.20, icon: "thon" }
];

  const basePrice =
    pizzaFull.price - pizzaFull.ingredients.reduce((sum, i) => sum + i.price, 0);

  const ingredientsPrice = ingredients.reduce((sum, i) => sum + i.price, 0);
  const supplementsPrice = supplements.reduce((sum, i) => sum + i.price, 0);

  const totalPrice = basePrice + ingredientsPrice + supplementsPrice;

  function addIngredient(ing) {
    if (!ingredients.find((i) => i.name === ing.name)) {
      setIngredients([...ingredients, ing]);
    }
  }

  function removeIngredient(ing) {
    setIngredients(ingredients.filter((i) => i.name !== ing.name));
  }

  function addSupplement(ing) {
    if (!supplements.find((i) => i.name === ing.name)) {
      setSupplements([...supplements, ing]);
    }
  }

  function removeSupplement(ing) {
    setSupplements(supplements.filter((i) => i.name !== ing.name));
  }

  function handleSave() {
    dispatch({
      type: "pizza/updateIngredients",
      payload: {
        pizzaName: selectedPizzaInCart.name,
        ingredients,
        supplements, // n’oublie pas de gérer ça dans ton reducer si besoin
        newPrice: totalPrice,
      },
    });
    alert("Modifications sauvegardées !");
  }

  return (
    <section className="ingredientsModifier">
      <h2>Modifier les ingrédients de : {selectedPizzaInCart.name}</h2>
      <p>Prix de base : {basePrice.toFixed(2)} €</p>

      <div className="ingredientsList">
        <h3>Ingrédients sélectionnés</h3>
        {ingredients.length === 0 && <p>Aucun ingrédient sélectionné</p>}
        <ul>
          {ingredients.map((ing) => (
            <li key={ing.name}>
              {ing.name} (+{ing.price.toFixed(2)} €)
              <button onClick={() => removeIngredient(ing)}>-</button>
            </li>
          ))}
        </ul>
      </div>

      <div className="ingredientsList">
        <h3>Ajouter un ingrédient</h3>
        <ul>
          {allIngredients
            .filter((ing) => !ingredients.find((i) => i.name === ing.name))
            .map((ing) => (
              <li key={ing.name}>
                {ing.name} (+{ing.price.toFixed(2)} €)
                <button onClick={() => addIngredient(ing)}>+</button>
              </li>
            ))}
        </ul>
      </div>

      <div className="ingredientsList">
        <h3>Suppléments</h3>
        <p>Ajoute des ingrédients supplémentaires à ta pizza (prix en plus)</p>

        <h4>Suppléments sélectionnés</h4>
        {supplements.length === 0 && <p>Aucun supplément sélectionné</p>}
        <ul>
          {supplements.map((ing) => (
            <li key={ing.name}>
              {ing.name} (+{ing.price.toFixed(2)} €)
              <button onClick={() => removeSupplement(ing)}>-</button>
            </li>
          ))}
        </ul>

        <h4>Ajouter un supplément</h4>
        <ul>
          {supplementIngredients
            .filter((ing) => !supplements.find((i) => i.name === ing.name))
            .map((ing) => (
              <li key={ing.name}>
                {ing.name} (+{ing.price.toFixed(2)} €)
                <button onClick={() => addSupplement(ing)}>+</button>
              </li>
            ))}
        </ul>
      </div>

      <p className="totalPrice">Prix total : {totalPrice.toFixed(2)} €</p>

      <button className="btnSave" onClick={handleSave}>
        Sauvegarder les modifications
      </button>
    </section>
  );
}
