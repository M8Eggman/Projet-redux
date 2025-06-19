import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Ingredients.css";

export default function IngredientsModifier() {
  const dispatch = useDispatch();

  const selectedPizza = useSelector((state) => state.pizza.cart[0]);

  if (!selectedPizza) {
    return <p>Aucune pizza sélectionnée dans le panier.</p>;
  }

  const allIngredients = [
    { name: "Poulet Kebab", price: 2.2 },
    { name: "Dés de tomates", price: 2.2 },
    { name: "Jalapenos", price: 2.2 },
    { name: "Fromage mozzarella", price: 2.2 },
    { name: "Champignons", price: 2.2 },
    { name: "Poivron vert", price: 2.2 },
    { name: "Oignons Rouge", price: 2.2 },
    { name: "Jambon", price: 2.2 },
    { name: "Ananas", price: 2.2 },
  ];

  const [ingredients, setIngredients] = useState(selectedPizza.ingredients || []);

  const basePrice = selectedPizza.price - ingredients.reduce((sum, i) => sum + i.price, 0);

  const totalPrice = basePrice + ingredients.reduce((sum, i) => sum + i.price, 0);

  function addIngredient(ing) {
    if (!ingredients.find((i) => i.name === ing.name)) {
      setIngredients([...ingredients, ing]);
    }
  }

  function removeIngredient(ing) {
    setIngredients(ingredients.filter((i) => i.name !== ing.name));
  }

  function handleSave() {
    dispatch({
      type: "pizza/updateIngredients",
      payload: { 
        pizzaName: selectedPizza.name,
        ingredients,
        newPrice: totalPrice,
      },
    });
    alert("Modifications sauvegardées !");
  }

  return (
    <section className="ingredientsModifier">
      <h2>Modifier les ingrédients de : {selectedPizza.name}</h2>
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

      <p className="totalPrice">Prix total : {totalPrice.toFixed(2)} €</p>

      <button className="btnSave" onClick={handleSave}>
        Sauvegarder les modifications
      </button>
    </section>
  );
}
