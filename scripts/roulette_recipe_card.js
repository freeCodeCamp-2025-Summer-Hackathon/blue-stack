export default function createCard(card, index) {
  return `
    <div class="roulette-card" id="card-${index}">
      <div class="card-image">
        <img src="images/recipes/${card.image}" alt="Recipe Image for ${
    card.name
  }" />
      </div>
      <div class="card-info">
        <div class="card-header">
          <h3>${card.name}</h3>
        </div>
        <div class="card-description">
          ${card.desc}
        </div>
          ${
            card.page
              ? `<a class="roulette-card-recipe-button button" href="./html/recipes/${card.page}">View Recipe</a>`
              : `<button class="roulette-card-recipe-button button" disabled>View Recipe</button>`
          }
      </div>
    </div>
  `;
}
