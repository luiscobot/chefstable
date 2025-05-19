import React from "react";
import Header from "./components/Header";
import Ingredients from "./components/Ingredients";
import Instructions from "./components/Instructions";
import Recipe from "./components/Recipe";
import SummonRecipe from "./components/SummonRecipe";

import generateRecipe from "./ai";

function App() {
  const [ingredients, setIngredients] = React.useState([]);

  const [recipe, setRecipe] = React.useState("");

  const summonRecipeRef = React.useRef(null);

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    if (!newIngredient) {
      return;
    }
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }

  async function summonRecipe() {
    const recipeMarkdown = await generateRecipe(ingredients);
    setRecipe(recipeMarkdown);
  }

  React.useEffect(() => {
    if (recipe) {
      summonRecipeRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [recipe]);

  return (
    <>
      <Header />
      <Instructions />
      <Ingredients ingredients={ingredients} addIngredient={addIngredient} />
      <SummonRecipe
        summonRecipeRef={summonRecipeRef}
        ingredients={ingredients}
        summonRecipe={summonRecipe}
      />
      <Recipe recipe={recipe} />
    </>
  );
}

export default App;
