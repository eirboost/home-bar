import type { Cocktail } from "../types/bar";

export const cocktails: Cocktail[] = [
  {
    id: "gin-tonic",
    name: "Gin & Tonic",
    description:
      "Called a “G and T” or gin tonic in some countries, this refreshing drink is made in countries all around the world. The Gin and Tonic was invented in the 1850’s by British soldiers, who mixed gin with their tonic water as a way to drink quinine (which was thought to cure malaria). Tonic water of today no longer has quinine, but the drink stuck around!",
    ingredients: [
      {
        ingredientId: "gin",
        amount: 60,
        unit: "ml",
      },
      {
        ingredientId: "tonic",
        amount: 120,
        unit: "ml",
      },
    ],
  },
  {
    id: "mojito",
    name: "Mojito",
    ingredients: [
      {
        ingredientId: "light-rum",
        amount: 45,
        unit: "ml",
      },
      {
        ingredientId: "lime-juice",
        amount: 22.5,
        unit: "ml",
      },
      {
        ingredientId: "mint",
        amount: 6,
        unit: "sprigs",
      },
      {
        ingredientId: "sugar",
        amount: 2,
        unit: "tsp",
      },
      {
        ingredientId: "club-soda",
        amount: 1,
        unit: "topup",
      },
    ],
  },
  {
    id: "negroni",
    name: "Negroni",
    ingredients: [
      {
        ingredientId: "gin",
        amount: 30,
        unit: "ml",
      },
      {
        ingredientId: "campari",
        amount: 30,
        unit: "ml",
      },
      {
        ingredientId: "sweet-vermouth",
        amount: 30,
        unit: "ml",
      },
    ],
  },
];
