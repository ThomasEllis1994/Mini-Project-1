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
                    "3.	Next, we cook the chicken. First butterfly the chicken breast. Slice your two sides into thin strips marinade chicken for 30 minutes to 24 hours in desired spice mix along with some teriyaki sauce. Bring a wok over 7/10 heat and place oil in your pan. You will be using the same wok the whole time, so do not wash out the yummy bits. Quickly sauté your strips being sure not to overcrowd the pan (this may take several batches). When finished, dice the chicken to desired size for a rice dish, and set aside.",
                Veggies:
                    "4.	Next, we prep the veggies. First dice the veggies into desired shape. Place the peppers and onions separate from the corn and carrots. Place a small amount of oil in the same wok over medium-high heat and add in the carrots and corn. Cover this and occasionally flick the wok to move the veggies around. You may need to scrape some of the chicken fond to incorporate it into your veggies. After 2 minutes, add in the onions and peppers and remove the cover. Cook to desired crunch level and place the veggies aside.",
                Combination:
                    "5.	Finally, we are ready to combine everything. Make sure you have some soy sauce and the teriyaki  sauce you used for the marinade. First, we bring our wok back up to high heat(9/10) with some oil. Add rice to wok and break up the clumps, stirring and flicking the wok as you go to make sure no rice burns. Once that is done, add veggies into the wok and incorporate. Begin adding some soy sauce and teriyaki sauce to taste. Once you have a desired salt and flavor level, add in your diced chicken and incorporate once more. Finally, serve.",
            },
        ],
    },
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
                    "3.	Next, we cook the chicken. First butterfly the chicken breast. Slice your two sides into thin strips marinade chicken for 30 minutes to 24 hours in desired spice mix along with some teriyaki sauce. Bring a wok over 7/10 heat and place oil in your pan. You will be using the same wok the whole time, so do not wash out the yummy bits. Quickly sauté your strips being sure not to overcrowd the pan (this may take several batches). When finished, dice the chicken to desired size for a rice dish, and set aside.",
                Veggies:
                    "4.	Next, we prep the veggies. First dice the veggies into desired shape. Place the peppers and onions separate from the corn and carrots. Place a small amount of oil in the same wok over medium-high heat and add in the carrots and corn. Cover this and occasionally flick the wok to move the veggies around. You may need to scrape some of the chicken fond to incorporate it into your veggies. After 2 minutes, add in the onions and peppers and remove the cover. Cook to desired crunch level and place the veggies aside.",
                Combination:
                    "5.	Finally, we are ready to combine everything. Make sure you have some soy sauce and the teriyaki  sauce you used for the marinade. First, we bring our wok back up to high heat(9/10) with some oil. Add rice to wok and break up the clumps, stirring and flicking the wok as you go to make sure no rice burns. Once that is done, add veggies into the wok and incorporate. Begin adding some soy sauce and teriyaki sauce to taste. Once you have a desired salt and flavor level, add in your diced chicken and incorporate once more. Finally, serve.",
            },
        ],
    },
];

// const artist = [
//     {
//         name: "Van Gogh",
//         portfolio: [
//             {
//                 title: "portrait",
//                 url: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/436532/1671316/main-image",
//             },
//             {
//                 title: "sky",
//                 url: "https://mymodernmet.com/wp/wp-content/uploads/2020/11/White-house-night-van-goh-worldwide-2.jpg",
//             },
//         ],
//     },
// ];
// // Come back and make this actually show the paintings
// // Look into creating an image html element and using src and alt to display someting
// artist.forEach((painter) => {
//     for (i = 0; i < painter.portfolio.length; i++) {
//         addCard(
//             painter.name,
//             painter.portfolio[i].title,
//             painter.portfolio[i].url
//         );
//     }
// });
// </script>
// </html>

function addRecipe(
    title = "lorem",
    ingredients = null,
    instructions = null,
    imageURL = "..."
) {
    // clone the template

    const template = document
        .getElementById("recipe-template")
        .content.cloneNode(true);
    // populate the template
    if (imageURL) {
        template.querySelector(".card-img-top").src = imageURL;
        template.querySelector(".card-img-top").alt = title;
    }
    template.querySelector(".card-title").innerText = title;

    // include the populated template into the page
    document.querySelector("#recipe-list").appendChild(template);
}
console.log("hello");
recipes.forEach((recipe) => addRecipe(recipe.title, recipe.imageURL));

addRecipe(
    "steak fried rice",
    "https://tiffycooks.com/wp-content/uploads/2023/11/380E74AE-4AD5-4934-95EC-E7873B78F603-1152x1536.jpg"
);
