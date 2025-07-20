// TODO: change source of card data -- maybe to a central assets/images folder, database query (if/when we get there), or combination (esp. for images)
// ? create card component for use on this page and others?

const cards = [
  {
    name: "Candied Fire Bacon",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin cursus vulputate diam, finibus interdum odio volutpat ut. Sed ultrices ex sed augue sodales viverra. In faucibus egestas dignissim.",
    image: "Candied-fire-bacon.webp",
    page: "./recipe-page/recipes/Candied-Bacon.html",
  },
  {
    name: "Fusion Sticky Mango Rice",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin cursus vulputate diam, finibus interdum odio volutpat ut. Sed ultrices ex sed augue sodales viverra. In faucibus egestas dignissim.",
    image: "Fusion-Sticky-mango-rice.webp",
    page: "./recipe-page/recipes/Fusion-Sticky-Mango-Rice.html",
  },
  {
    name: "Galangal",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin cursus vulputate diam, finibus interdum odio volutpat ut. Sed ultrices ex sed augue sodales viverra. In faucibus egestas dignissim.",
    image: "galangal.webp",
    page: "./recipe-page/recipes/Tom-Kha-Gai.html",
  },
  {
    name: "Spicy Albondigas",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin cursus vulputate diam, finibus interdum odio volutpat ut. Sed ultrices ex sed augue sodales viverra. In faucibus egestas dignissim.",
    image: "Spicy-Albondigas.webp",
    page: "./recipe-page/recipes/Spicy-Albondiga-Meatball-Soup.html",
  },
  {
    name: "Tom Kha Gai",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin cursus vulputate diam, finibus interdum odio volutpat ut. Sed ultrices ex sed augue sodales viverra. In faucibus egestas dignissim.",
    image: "Tom-Kha-Gai.webp",
    page: "./recipe-page/recipes/Tom-Kha-Gai.html",
  },
];

const wrapper = document.querySelector("#roulette-card-wrapper");
let isSpinning = false;

// Create cards
function createCards() {
  const allCards = [...cards, ...cards, ...cards];
  wrapper.innerHTML = allCards
    .map(
      (card, i) => `
      <div class="roulette-card" id="card-${i}">
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
              ? `<a class="roulette-card-recipe-button button" href="${card.page}">View Recipe</a>`
              : `<button class="roulette-card-recipe-button button" disabled>View Recipe</button>`
          }

        </div>
      </div>
    `
    )
    .join("");

  wrapper.innerHTML += "<div id='roulette-fade'></div>";
}

function spin() {
  if (isSpinning) return;
  isSpinning = true;

  const cardWidth = 310; // width of card plus margins on each side
  let rouletteFade = document.querySelector("#roulette-fade");

  rouletteFade.style.opacity = "1";

  setTimeout(() => {
    rouletteFade.style.opacity = "0";

    wrapper.style.transition = "none";
    wrapper.style.transform = `translateX(0px)`;

    // forces reflow
    wrapper.offsetHeight;

    const randomCard = Math.floor(Math.random() * cards.length);

    // alert(randomCard + ", " + cards[randomCard].name);

    wrapper.style.transition = "transform 4s cubic-bezier(0.25, 0.1, 0.25, 1)";
    wrapper.style.transform = `translateX(-${
      cardWidth * cards.length + cardWidth / 2 + randomCard * cardWidth
    }px)`;

    // accentuate the selected card
    const selectedCard = document.querySelector(
      `#card-${randomCard + cards.length}`
    );

    setTimeout(() => {
      selectedCard.style.transform = "scale(1.1, 1.1)";

      setTimeout(() => {
        selectedCard.style.transform = "scale(1, 1)";
        isSpinning = false;
      }, 1000);
    }, 4000);
  }, 1000);
}

createCards();
