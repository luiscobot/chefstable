function Instructions() {
  return (
    <div className="flex w-3xl flex-col items-center gap-3 rounded-xl bg-slate-100 p-6">
      <h1 className="font-bold text-2xl text-red-700">Chef's Table</h1>

      <p className="text-center text-xl">
        Enter your ingredients and click <strong>Summon Recipe</strong>. I’ll
        work my magic and suggest a tasty dish you can make, complete with
        simple instructions.
      </p>

      <p className="text-center text-xl">Happy cooking!</p>
    </div>
  );
}

export default Instructions;
