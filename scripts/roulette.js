import createCard from "./roulette_recipe_card.js";
import { recipeCardData } from "./recipe_card_data.js";

const cards = recipeCardData;

const wrapper = document.querySelector("#roulette-card-wrapper");
let isSpinning = false;

// reate cards
function createCards() {
    const allCards = [...cards, ...cards, ...cards];
    wrapper.innerHTML = allCards.map((card, i) => createCard(card, i)).join("");

    wrapper.innerHTML += "<div id='roulette-fade'></div>";
}

createCards();

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

        wrapper.style.transition =
            "transform 4s cubic-bezier(0.25, 0.1, 0.25, 1)";
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

document.getElementById("roulette-button").addEventListener("click", spin);
