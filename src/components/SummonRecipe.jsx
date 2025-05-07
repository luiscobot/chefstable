function SummonRecipe(props) {
  return (
    props.ingredients.length >= 3 &&
    <div className="w-3xl flex justify-between items-center rounded-xl p-6 bg-red-100">
      <div className="flex flex-col gap-2">
        <p className="text-xl font-semibold">Ready to see your recipe?</p>
        <p>Let’s turn your ingredients into something delicious.</p>
      </div>

      <button
        onClick={props.summonRecipe}
        type="button"
        className="px-4 py-2 font-semibold text-white bg-red-700 rounded-md"
      >
        Summon Recipe
      </button>
    </div>
  );
}

export default SummonRecipe;
