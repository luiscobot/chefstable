import Markdown from 'react-markdown';

function Recipe(props) {
  return (
    props.recipe &&
    <section className="suggested-recipe w-3xl p-6 rounded-xl bg-slate-500">
      <Markdown>{props.recipe}</Markdown>
    </section>
  );
}

export default Recipe;
