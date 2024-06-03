let recipes = [
    {
        title: "Steak Fried Rice",
        imageURL: "../Pictures/RecipePictures/steakFriedRice.jpg",
        src: "../HTML/Recipes/steakFriedRice.html",
        id: 1,
        ingredients: [
            "1.5 Cup Leftover Rice",
            "1 Flank Steak",
            "1 cup Peppers",
            "1 cup Onions",
            ".5 cup Carrots",
            ".5 cup Baby Corns",
            "2 sprigs or 2 tsp dried",
        ],
        instructions: [
            "First, the rice. Add oil to a small pot and place over low heat. Add 1 tbsp of butter, rosemary and other aromatics and allow to sauté for 3 minutes. Add 2 cups of chicken broth to the pot and bring to a boil. Next add in your 1.5 cups of washed jasmine rice. Stir as you bring it back to a boil. Then place a lid on the rice and drop the heat to a low simmer. Simmer rice for 13-15 minutes, and do not lift the lid. Once the rice seems to have absorbed our chicken broth: pull from heat, lift the lid, and stir. Allow it to rest until cools and place in fridge. You should cook the fried rice the next day, but if you want, you can chill it for as little as 30 minutes.",
            "Next, we cook the steak. I typically use a flank steak. First cut your steak into small slices marinade steak for 30 minutes to 24 hours in desired spice mix along with some teriyaki sauce. Bring a wok over 7/10 heat and place oil in your pan. You will be using the same wok the whole time, so do not wash out the yummy bits. Quickly sauté your strips being sure not to overcrowd the pan (this may take several batches). When finished, dice the steak to desired size for a rice dish, and set aside.",

            "Next, we prep the veggies. First dice the veggies into desired shape. Place the peppers and onions separate from the corn and carrots. Place a small amount of oil in the same wok over medium-high heat and add in the carrots and corn. Cover this and occasionally flick the wok to move the veggies around. You may need to scrape some of the steak fond to incorporate it into your veggies. After 2 minutes, add in the onions and peppers and remove the cover. Cook to desired crunch level and place the veggies aside.",

            "Finally, we are ready to combine everything. Make sure you have some soy sauce and the teriyaki  sauce you used for the marinade. First, we bring our wok back up to high heat(9/10) with some oil. Add rice to wok and break up the clumps, stirring and flicking the wok as you go to make sure no rice burns. Once that is done, add veggies into the wok and incorporate. Begin adding some soy sauce and teriyaki sauce to taste. Once you have a desired salt and flavor level, add in your diced steak and incorporate once more. Finally, serve.",
        ],
    },
    {
        title: "Dino Chicken Nuggets",
        imageURL: "../Pictures/RecipePictures/DinoNuggies.png",
        src: "../HTML/Recipes/DinoNuggies.html",
        id: 2,
        ingredients: ["8 nuggets"],
        instructions: [
            "Preheat oven to 350F. Then insert the dino nuggies into the oven. After 8 minutes, flip them. Cook for 8 more minutes, then remove from oven and serve.",
        ],
    },
    {
        title: "Breakfast Burritos",
        imageURL: "../Pictures/RecipePictures/breakfastBurrito.jpg",
        src: "../HTML/Recipes/BreakfastBurrito.html",
        id: 3,
        ingredients: [
            "4 Eggs",
            "4 Bacon Slics",
            "2.5 oz Peppers",
            "3 oz Onions",
            "Shredded Cheese",
            "2 tbs Heavy Cream",
            "3 Medium Flour Tortillas",
        ],
        instructions: [
            "First, we should prep our ingredients. Dice your Peppers and Onions, season them, and put in separate prepping bowls. Next crack your 4 eggs into a bowl, throw in some shredded cheese, and add a Tbs of heavy cream and whisk until melded.",
            "Place a pan over medium heat and add a little butter. Cook your 4 slices of bacon. Remove some of the bacon grease into a cup but leave enough to act as oil for our veggies.",
            "While the veggies sauté in that bacon grease, dice the bacon. Once veggies are cooked, set them aside. Finally add your eggs to the pan and season. Scramble them and season a bit more as you go. Once they are mostly cooked through, add in other ingredients and mix together. Pull off heat once eggs are done.",
            "Open your tortillas and lay down a hefty amount of shredded cheese on each. Distribute your burrito mix evenly to all 3, then add more cheese on top. Roll these up.",
            "Finally, set your oven to broil on medium(we want to make the outside crispy. Then pour some bacon grease back into the pan and fry the burritos in the bacon grease (it helps to do this with the fold down first to lock it in place). Flip the burritos to get all sides soaked in the grease and a little crispy. You can skip the oven, but I throw mine in until they are golden on both sides. Serve and enjoy.",
        ],
    },
    {
        title: "Mini Pizza Rolls",
        imageURL: "../Pictures/RecipePictures/miniPizzaRolls.JPG",
        src: "../HTML/Recipes/MiniPizzaRolls.html",
        id: 4,
        ingredients: [
            "Pillsbury Crescent Roll Sheet",
            "36 Pizza Pepperonis",
            "½ Cup Peppers",
            "½ Cup Onions",
            "Seasonings",
            "Shredded Cheese",
            "Pizza Sauce for Dipping",
        ],
        instructions: [
            "First, preheat the oven on bake to 350F and slice the Pillsbury sheet into 12 or more small triangles. They should have a 3 in base and a height of 4 inches. Lay them on foil slightly spread out. Season them with Italian seasoning, red pepper flakes, garlic powder, salt and pepper.",
            "Next sprinkle as many of your peppers and onions as you want on them. Next sprinkle a little bit of shredded cheese.",
            "Then, place 3-4 pepperoni on each one and top that with more shredded cheese. Roll these up into little croissants.",
            "Place them in the oven for about 10 minutes or until golden brown. Put your pizza sauce or any other dips into a serving bowl and enjoy.",
        ],
    },
];

let ingredients = recipes[0].ingredients;
for (i = 0; i < ingredients.length; i++) {
    console.log(ingredients[i]);
}
