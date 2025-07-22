
const Recipes_toShow = [
    {
        recipe_name: "Candied Bacon",
        img_route: "/recipe-page/recipes/assets/Candied-fire-bacon.webp",
        route: "/recipe-page/recipes/Candied-Bacon.html"
    },
    {
        recipe_name: "Chicken Pozole verde",
        img_route: "/recipe-page/recipes/assets/pazole-verde.webp",
        route: "/recipe-page/recipes/Chicken-Pazole-Verde.html"
    },
    {
        recipe_name: "Fusion Sticky Mango Rice",
        img_route: "/recipe-page/recipes/assets/Fusion-Sticky-mango-rice.webp",
        route: "/recipe-page/recipes/Fusion-Sticky-Mango-Rice.html",
    },
    {
        recipe_name: "Sushi Rolls",
        img_route: "/recipe-page/recipes/assets/sushi3.webp",
        route: "/recipe-page/recipes/sushi-rolls.html"
    },
    {
        recipe_name: "Smores",
        img_route: "/recipe-page/recipes/assets/smores.jpg",
        route: "/recipe-page/recipes/Smores-cookies.html"
    },
    {
        recipe_name: "Summer fruit pizza",
        img_route: "/recipe-page/recipes/assets/summer-fruit-pizza.webp",
        route: "/recipe-page/recipes/Summer-fruit-pizza.html"
    }
]

const recipe_card = document.getElementById("recipes-container");

Recipes_toShow.forEach(recipe => {
    const card = document.createElement("div");
    card.className = "recipe-card";

    card.innerHTML = `
        <img src="${recipe.img_route}" alt="${recipe.recipe_name}">
        <h3>${recipe.recipe_name}</h3>
        <a href="${recipe.route}">View recipe</a>
    `;

    recipe_card.appendChild(card);
});












