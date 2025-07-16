
const Recipes_toShow = [
    {
        recipe_name: "Candied Bacon",
        img_route: "recipe-page/recipes/assets/Candied-fire-bacon.webp",
        route: "recipe-page/recipes/Candied-Bacon.html"
    },
    {
        recipe_name: "Chicken Pazole verde",
        img_route: "recipe-page/recipes/assets/pazole-verde.webp",
        route: "recipe-page/recipes/Chicken-Pazole-Verde.html"
    },
    {
        recipe_name: "Candied Bacon",
        img_route: "recipe-page/recipes/assets/Candied-fire-bacon.webp",
        route: "recipe-page/recipes/Candied-Bacon.html"
    }
]



const recipe_card = document.getElementById("recipes-container");

Recipes_toShow.forEach(recipe => {
    const card = document.createElement("div");
    card.className = "news-card";

    card.innerHTML = `
        <img src="${recipe.img_route}" alt="${recipe.recipe_name}"></img>
        <h3>"${recipe.recipe_name}"</h3>
        <a href="${recipe.route}"></a>
    `

    recipe_card.appendChild(card)
})












