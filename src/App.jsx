import React from "react";
import Header from "./components/Header";
import Instructions from "./components/Instructions";
import Ingredients from "./components/Ingredients";
import SummonRecipe from "./components/SummonRecipe";
import Recipe from "./components/Recipe";

import generateRecipe from "./ai";

function App() {
  const [ingredients, setIngredients] = React.useState([]);

  const [recipe, setRecipe] = React.useState("");

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }

  async function summonRecipe() {
    const recipeMarkdown = await generateRecipe(ingredients);
    setRecipe(recipeMarkdown);
  }

  return (
    <React.Fragment>
      <Header />
      <Instructions />
      <Ingredients ingredients={ingredients} addIngredient={addIngredient} />
      <SummonRecipe ingredients={ingredients} summonRecipe={summonRecipe} />
      <Recipe recipe={recipe} />
    </React.Fragment>
  )
}

export default App;
