function Ingredients(props) {
  return (
    <div className="flex w-3xl items-start gap-6">
      <div className="flex shrink grow basis-1/2 flex-col gap-3 rounded-xl bg-slate-100 p-6">
        <p className="text-neutral-500 text-xs uppercase">
          <span className="pr-2 text-red-700">―</span>Add Ingredients
          <span className="pl-2 text-red-700">―</span>
        </p>

        <form action={props.addIngredient} className="flex flex-col gap-6">
          <label htmlFor="ingredient-name" className="text-xl">
            Enter ingredients to build your list
          </label>

          <div className="flex gap-3">
            <input
              name="ingredient"
              type="text"
              id="ingredient-name"
              className="w-1/2 border-neutral-900 border-b-2 outline-none"
              placeholder="Ingredient Name"
            />
            <button
              type="submit"
              className="w-1/2 rounded-md bg-slate-900 px-4 py-2 font-semibold text-white"
            >
              Add Ingredient
            </button>
          </div>
        </form>
      </div>

      <div className="flex shrink grow basis-1/2 flex-col gap-3 rounded-xl bg-slate-100 p-6">
        <p className="font-semibold text-xl">Ingredients</p>

        <ul>
          {props.ingredients.length ? (
            props.ingredients.map((ingredient) => (
              <li key={ingredient}>
                <span className="pr-4 text-red-700">―</span>
                {ingredient}
              </li>
            ))
          ) : (
            <p>
              No ingredients yet, start by adding ingredients to build your
              list.
            </p>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Ingredients;
