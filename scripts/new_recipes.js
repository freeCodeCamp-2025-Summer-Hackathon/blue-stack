const Recipes_toShow = [
  {
    recipe_name: "Candied Bacon",
    img_route: "/images/recipes/Candied-fire-bacon.webp",
    route: "/images/recipes/Candied-fire-bacon.webp"
  },
  {
    recipe_name: "Chicken Pozole verde",
    img_route: "/images/recipes/pazole-verde.webp",
    route: "images/recipes/pazole-verde.webp"
  },
  {
    recipe_name: "Fusion Sticky Mango Rice",
    img_route: "/images/recipes/Fusion-Sticky-mango-rice.webp",
    route: "/html/recipes/Fusion-Sticky-Mango-Rice.html",
  },
  {
    recipe_name: "Sushi Rolls",
    img_route: "/images/recipes/sushi3.webp",
    route: "/recipe-page/recipes/sushi-rolls.html"
  },
  {
    recipe_name: "Smores",
    img_route: "/images/recipes/smores.jpg",
    route: "/recipe-page/recipes/Smores-cookies.html"
  },
  {
    recipe_name: "Summer fruit pizza",
    img_route: "/images/recipes/summer-fruit-pizza.webp",
    route: "/recipe-page/recipes/Summer-fruit-pizza.html"
  },
  {
    recipe_name: "Spicy albondigas",
    img_route: "/images/recipes/Spicy-Albondigas.webp",
    route: "/recipe-page/recipes/Summer-fruit-pizza.html"
  },
  {
    recipe_name: "Tom Kha Gai",
    img_route: "/images/recipes/Tom-Kha-Gai.webp",
    route: "/recipe-page/recipes/Summer-fruit-pizza.html"
  }
];

const recipe_container = document.getElementById("recipes-container");

if (recipe_container) {
  Recipes_toShow.forEach(recipe => {
    const card = document.createElement("div");
    card.className = "news-card";

    card.innerHTML = `
      <img src="${recipe.img_route}" alt="${recipe.recipe_name}">
      <h3>${recipe.recipe_name}</h3>
      <a href="${recipe.route}">View recipe</a>
    `;

    recipe_container.appendChild(card);
  });
}













