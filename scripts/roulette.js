import createCard from "./roulette_recipe_card.js";

// TODO: change to JSON source so C3ph1r4's page can be refactored with same source of data?
const cards = [
    {
        name: "Candied Bacon",
        desc: "Sweet, sticky, and spicy bacon glazed with hot honey and brown sugar.",
        image: "Candied-fire-bacon.webp",
        page: "Candied-Bacon.html",
    },
    {
        name: "Chicken Pozole Verde",
        desc: "A rich, comforting green Mexican stew with hominy and shredded chicken.",
        image: "pazole-verde.webp",
        page: "Chicken-Pazole-Verde.html",
    },
    {
        name: "Sticky Mango Rice",
        desc: "Sweet and spiced sticky rice topped with fresh mango slices.",
        image: "Fusion-Sticky-mango-rice.webp",
        page: "Fusion-Sticky-Mango-Rice.html",
    },
    {
        name: "Hobo Meals",
        desc: "All-in-one foil pack dinners made on the grill or fire with endless customization.",
        image: "hobo-meal.webp",
        page: "hobo-meals.html",
    },
    {
        name: "Lemon Basil Pizza",
        desc: "Zesty lemon slices, mozzarella, basil, and smoked gouda on homemade crust.",
        image: "lemon-pizza.webp",
        page: "Lemon-pizza.html",
    },
    {
        name: "Lava S’mores Cookies",
        desc: "Gooey marshmallow and chocolate-stuffed cookies with graham cracker dough.",
        image: "smores.jpg",
        page: "Smores-cookies.html",
    },
    {
        name: "Spicy Albondigas Soup",
        desc: "Tender meatballs simmered in a spiced chipotle-tomato broth with veggies.",
        image: "Spicy-Albondigas.webp",
        page: "Spicy-Albondiga-Meatball-Soup.html",
    },
    {
        name: "Summer Fruit Pizza",
        desc: "Shortbread crust topped with mascarpone and vibrant fresh fruits.",
        image: "summer-fruit-pizza.webp",
        page: "Summer-fruit-pizza.html",
    },
    {
        name: "Simple Sushi Rolls",
        desc: "Easy homemade sushi with crab, cream cheese, and fresh veggies.",
        image: "sushi3.webp",
        page: "sushi-rolls.html",
    },
    {
        name: "Tom Kha Gai",
        desc: "Thai coconut soup infused with galangal, lemongrass, and lime leaves.",
        image: "Tom-Kha-Gai.webp",
        page: "Tom-Kha-Gai.html",
    },
    {
        name: "Veggie Delight Skillet",
        desc: "Sautéed carrots, asparagus, rutabagas, and mushrooms glazed with apricot jam.",
        image: "Veggie-delight.webp",
        page: "veggie-delight.html",
    },
    {
        name: "Spicy Chicken",
        desc: "Perfectly fried, spicy, buttery chicken.",
        image: "Spicy-chicken.webp",
        page: "spicy-chicken.html",
    },
];

const wrapper = document.querySelector("#roulette-card-wrapper");
let isSpinning = false;

// Create cards
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
