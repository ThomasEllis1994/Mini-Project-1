let recipes = [
    {
        title: "Chicken Fried Rice",
        imageURL: "../Pictures/steakFriedRice.jpg",
        ingredients: [
            {
                leftoverRice: "1.5 cup",
                ChickenBreasts: "1",
                Peppers: "1 cup",
                Onions: "1 cup",
                Carrots: ".5 cup",
                BabyCorns: ".5 cup",
                Rosemary: "2 sprigs or 2 tsp dried",
            },
        ],
        instructions: [
            {
                Rice: "First, the rice. Add oil to a small pot and place over low heat. Add 1 tbsp of butter, rosemary and other aromatics and allow to sauté for 3 minutes. Add 2 cups of chicken broth to the pot and bring to a boil. Next add in your 1.5 cups of washed jasmine rice. Stir as you bring it back to a boil. Then place a lid on the rice and drop the heat to a low simmer. Simmer rice for 13-15 minutes, and do not lift the lid. Once the rice seems to have absorbed our chicken broth: pull from heat, lift the lid, and stir. Allow it to rest until cools and place in fridge. You should cook the fried rice the next day, but if you want, you can chill it for as little as 30 minutes.",
                Chicken:
                    "Next, we cook the chicken. First butterfly the chicken breast. Slice your two sides into thin strips marinade chicken for 30 minutes to 24 hours in desired spice mix along with some teriyaki sauce. Bring a wok over 7/10 heat and place oil in your pan. You will be using the same wok the whole time, so do not wash out the yummy bits. Quickly sauté your strips being sure not to overcrowd the pan (this may take several batches). When finished, dice the chicken to desired size for a rice dish, and set aside.",
                Veggies:
                    "Next, we prep the veggies. First dice the veggies into desired shape. Place the peppers and onions separate from the corn and carrots. Place a small amount of oil in the same wok over medium-high heat and add in the carrots and corn. Cover this and occasionally flick the wok to move the veggies around. You may need to scrape some of the chicken fond to incorporate it into your veggies. After 2 minutes, add in the onions and peppers and remove the cover. Cook to desired crunch level and place the veggies aside.",
                Combination:
                    "Finally, we are ready to combine everything. Make sure you have some soy sauce and the teriyaki  sauce you used for the marinade. First, we bring our wok back up to high heat(9/10) with some oil. Add rice to wok and break up the clumps, stirring and flicking the wok as you go to make sure no rice burns. Once that is done, add veggies into the wok and incorporate. Begin adding some soy sauce and teriyaki sauce to taste. Once you have a desired salt and flavor level, add in your diced chicken and incorporate once more. Finally, serve.",
            },
        ],
    },
    {
        title: "Chicken Fried Rice",
        imageURL: "../Pictures/steakFriedRice.jpg",
        id: 1,
        ingredients: [
            {
                leftoverRice: "1.5 cup",
                ChickenBreasts: "1",
                Peppers: "1 cup",
                Onions: "1 cup",
                Carrots: ".5 cup",
                BabyCorns: ".5 cup",
                Rosemary: "2 sprigs or 2 tsp dried",
            },
        ],
        instructions: [
            {
                Rice: "First, the rice. Add oil to a small pot and place over low heat. Add 1 tbsp of butter, rosemary and other aromatics and allow to sauté for 3 minutes. Add 2 cups of chicken broth to the pot and bring to a boil. Next add in your 1.5 cups of washed jasmine rice. Stir as you bring it back to a boil. Then place a lid on the rice and drop the heat to a low simmer. Simmer rice for 13-15 minutes, and do not lift the lid. Once the rice seems to have absorbed our chicken broth: pull from heat, lift the lid, and stir. Allow it to rest until cools and place in fridge. You should cook the fried rice the next day, but if you want, you can chill it for as little as 30 minutes.",
                Chicken:
                    "Next, we cook the chicken. First butterfly the chicken breast. Slice your two sides into thin strips marinade chicken for 30 minutes to 24 hours in desired spice mix along with some teriyaki sauce. Bring a wok over 7/10 heat and place oil in your pan. You will be using the same wok the whole time, so do not wash out the yummy bits. Quickly sauté your strips being sure not to overcrowd the pan (this may take several batches). When finished, dice the chicken to desired size for a rice dish, and set aside.",
                Veggies:
                    "Next, we prep the veggies. First dice the veggies into desired shape. Place the peppers and onions separate from the corn and carrots. Place a small amount of oil in the same wok over medium-high heat and add in the carrots and corn. Cover this and occasionally flick the wok to move the veggies around. You may need to scrape some of the chicken fond to incorporate it into your veggies. After 2 minutes, add in the onions and peppers and remove the cover. Cook to desired crunch level and place the veggies aside.",
                Combination:
                    "Finally, we are ready to combine everything. Make sure you have some soy sauce and the teriyaki  sauce you used for the marinade. First, we bring our wok back up to high heat(9/10) with some oil. Add rice to wok and break up the clumps, stirring and flicking the wok as you go to make sure no rice burns. Once that is done, add veggies into the wok and incorporate. Begin adding some soy sauce and teriyaki sauce to taste. Once you have a desired salt and flavor level, add in your diced chicken and incorporate once more. Finally, serve.",
            },
        ],
    },
    {
        title: "Dino Chicken Nuggets",
        imageURL: "../Pictures/miniPizzaRolls.JPG",
        id: 2,
        ingredients: [
            {
                questionableChicken: "8 nuggets",
            },
        ],
        instructions: [
            {
                cookingNuggets:
                    "Preheat oven to 350. Then insert the dino nuggies into the oven. After 8 minutes, flip them. Cook for 8 more minutes, then remove from oven and serve.",
            },
        ],
    },
    {
        title: "Breakfast Burritos",
        imageURL: "../Pictures/breakfastBurrito.jpg",
        id: 3,
        ingredients: [{}],
        instructions: [{}],
    },
    {
        title: "Mini Pizza Rolls",
        imageURL: "../Pictures/miniPizzaRolls.JPG",
        id: 4,
        ingredients: [{}],
        instructions: [{}],
    },
];
//Function to randomly select a dinner for a user.
function postDinner() {
    function getDinner() {
        let randomNumber = Math.floor(Math.random() * 4) + 1;
        return randomNumber;
    }
    let number = getDinner();
    function dinnerFinder(array) {
        return array.find((dinner) => dinner.id === number);
    }
    let dinner = dinnerFinder(recipes);
    let messageChange = document.getElementById("dinnerMessage");
    messageChange.innerHTML = "You should make: ";
    let dinnerTitle = document.getElementById("dinnerTitle");
    dinnerTitle.innerHTML = dinner.title;
}
