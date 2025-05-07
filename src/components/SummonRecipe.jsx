function SummonRecipe(props) {
  return (
    props.ingredients.length >= 3 && (
      <div
        ref={props.summonRecipeRef}
        className="flex w-3xl scroll-mt-6 items-center justify-between rounded-xl bg-red-100 p-6"
      >
        <div className="flex flex-col gap-2">
          <p className="font-semibold text-xl">Ready to see your recipe?</p>
          <p>Let’s turn your ingredients into something delicious.</p>
        </div>

        <button
          onClick={props.summonRecipe}
          type="button"
          className="rounded-md bg-red-700 px-4 py-2 font-semibold text-white"
        >
          Summon Recipe
        </button>
      </div>
    )
  );
}

export default SummonRecipe;
