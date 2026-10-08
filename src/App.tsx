import { cocktails } from "./data/cocktails";
import { ingredients } from "./data/ingredients";

function App() {
  return (
    <main>
      <h1>Home Bar</h1>

      <ul>
        {cocktails.map((cocktail) => (
          <li key={cocktail.id}>
            <h2>{cocktail.name}</h2>
            {cocktail.description && <p>{cocktail.description}</p>}
            <p>Ingredients:</p>
            {cocktail.ingredients.map((cocktailIngredient) => {
              const ingredient = ingredients.find(
                (ingredient) =>
                  ingredient.id === cocktailIngredient.ingredientId,
              );
              return (
                <span key={cocktailIngredient.ingredientId}>
                  {ingredient?.name}: {cocktailIngredient.amount}{" "}
                  {cocktailIngredient.unit}
                  <br />
                </span>
              );
            })}
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;
