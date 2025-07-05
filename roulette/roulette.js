// TODO: create cards from database if/when that's implemented
// TODO: implement proper descriptions once C3ph1r4 has them written
const card1 = {
  name: "Candied Fire Bacon",
  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin cursus vulputate diam, finibus interdum odio volutpat ut. Sed ultrices ex sed augue sodales viverra. In faucibus egestas dignissim.",
  image: "../recipe-page/recipes/assets/Candied-fire-bacon.webp",
};

const card2 = {
  name: "Fusion Sticky Mango Rice",
  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin cursus vulputate diam, finibus interdum odio volutpat ut. Sed ultrices ex sed augue sodales viverra. In faucibus egestas dignissim.",
  image: "../recipe-page/recipes/assets/Fusion-Sticky-mango-rice.webp",
};

const card3 = {
  name: "Galangal",
  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin cursus vulputate diam, finibus interdum odio volutpat ut. Sed ultrices ex sed augue sodales viverra. In faucibus egestas dignissim.",
  image: "../recipe-page/recipes/assets/galangal.webp",
};

const card4 = {
  name: "Spicy Albondigas",
  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin cursus vulputate diam, finibus interdum odio volutpat ut. Sed ultrices ex sed augue sodales viverra. In faucibus egestas dignissim.",
  image: "../recipe-page/recipes/assets/Spicy-Albondigas.webp",
};

const card5 = {
  name: "Sushi",
  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin cursus vulputate diam, finibus interdum odio volutpat ut. Sed ultrices ex sed augue sodales viverra. In faucibus egestas dignissim.",
  image: "../recipe-page/recipes/assets/Sushi.webp",
};

const card6 = {
  name: "Tom Kha Gai",
  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin cursus vulputate diam, finibus interdum odio volutpat ut. Sed ultrices ex sed augue sodales viverra. In faucibus egestas dignissim.",
  image: "../recipe-page/recipes/assets/Tom-Kha-Gai.webp",
};

const cards = [card1, card2, card3, card4, card5, card6];
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
          <img src="${card.image}" alt="Recipe Image for ${card.name}" />
        </div>
        <div class="card-info">
          <div class="card-header">
            <h3>${card.name}</h3>
          </div>
          <div class="card-description">
            ${card.desc}
          </div>
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

  const cardWidth = 260;
  let rouletteFade = document.querySelector("#roulette-fade");

  rouletteFade.style.backgroundColor = "var(--primary-background-color)";

  setTimeout(() => {
    rouletteFade.style.backgroundColor = "rgba(255, 255, 255, 0)";

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
