function Ingredients(props) {
  return (
    <div className="w-3xl flex items-start gap-6">
      <div className="grow shrink basis-1/2 flex flex-col gap-3 p-6 rounded-xl bg-slate-100">
        <p className="uppercase text-xs text-neutral-500">
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
              className="w-1/2 border-b-2 border-neutral-900 outline-none"
              placeholder="Ingredient Name"
            />
            <button
              type="submit"
              className="w-1/2 px-4 py-2 font-semibold text-white bg-slate-900 rounded-md"
            >
              Add Ingredient
            </button>
          </div>
        </form>
      </div>

      <div className="grow shrink basis-1/2 flex flex-col gap-3 p-6 rounded-xl bg-slate-100">
        <p className="text-xl font-semibold">Ingredients</p>

        <ul>
          {props.ingredients.length ? (
            props.ingredients.map(ingredient => (
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
