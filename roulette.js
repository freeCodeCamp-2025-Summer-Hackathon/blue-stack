// TODO: automate card creation once we have proper recipe data
const card1 = {
  name: "Apple",
  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin cursus vulputate diam, finibus interdum odio volutpat ut. Sed ultrices ex sed augue sodales viverra. In faucibus egestas dignissim.",
  image: "./test_recipes/apple-1702316_640.jpg",
};

const card2 = {
  name: "Banana",
  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin cursus vulputate diam, finibus interdum odio volutpat ut. Sed ultrices ex sed augue sodales viverra. In faucibus egestas dignissim.",
  image: "./test_recipes/banana-325461_640.jpg",
};

const card3 = {
  name: "Cherry",
  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin cursus vulputate diam, finibus interdum odio volutpat ut. Sed ultrices ex sed augue sodales viverra. In faucibus egestas dignissim.",
  image: "./test_recipes/cherries-3477927_640.jpg",
};

const cards = [card1, card2, card3];
const wrapper = document.querySelector("#roulette-card-wrapper");
let isSpinning = false;

// Create cards
function createCards() {
  const allCards = [...cards, ...cards, ...cards];
  wrapper.innerHTML = allCards
    .map(
      // TODO: remove index in card header when we have proper recipe data
      (card, i) => `
      <div class="roulette-card" id="card-${i}">
        <div class="card-image">
          <img src="${card.image}" alt="Recipe Image for ${card.name}" />
        </div>
        <div class="card-info">
          <div class="card-header">
            <h3>${i} ${card.name}</h3>
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
