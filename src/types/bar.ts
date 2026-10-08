export type Ingredient = {
  id: string;
  name: string;
};

export type CocktailIngredient = {
  ingredientId: string;
  amount: number;
  unit: string;
};

export type Cocktail = {
  id: string;
  name: string;
  description?: string;
  ingredients: CocktailIngredient[];
  rating?: number;
};
