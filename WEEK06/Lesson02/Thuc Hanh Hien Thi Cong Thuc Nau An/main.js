let recipe = {
  title: "suon",
  serving: 2,
  ingredients: [
    "400 g sườn thăn",
    "4 tbsp nước mắm",
    "5 tsp đường",
    "5 tsp nước cốt chanh",
    "1/3 bát nước sôi",
    "Hành khô, tỏi, ớt, hành lá",
    "2 quả cà chua",
    "Hành tây",
  ],
};
console.log(recipe);
console.log("ten mon an " + recipe.title);
for (var i = 0; i < recipe.ingredients.length; i++) {
  console.log("- " + recipe.ingredients[i]);
}
