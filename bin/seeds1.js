const mongoose = require("mongoose");
const Ingredient = require("../models/Ingredient");
require("dotenv").config();

const ingredients = {
  name: [
    "almonds",
    "anise",
    "asparagus",
    "baking powder",
    "bananas",
    "butter",
    "chai",
    "cherries",
    "chicken",
    "cinnamon",
    "cocoa powder",
    "cognac",
    "coriander",
    "cornflour",
    "couscous",
    "cranberries",
    "cumin",
    "dark chocolate",
    "dill",
    "eggs",
    "feta",
    "flour",
    "garlic",
    "hazelnuts",
    "honey",
    "houmous",
    "ketchup",
    "limes",
    "liqueur",
    "maple syrup",
    "mascarpone",
    "mayonnaise",
    "milk",
    "mozzarella",
    "mustard",
    "noodles",
    "oats",
    "olive oil",
    "onions",
    "oranges",
    "oregano",
    "parmesan",
    "peas",
    "penne",
    "pepper",
    "pork",
    "potatoes",
    "prawns",
    "rice milk",
    "rosemary",
    "rum",
    "salmon",
    "salt",
    "soda",
    "soy sauce",
    "spinach",
    "steak",
    "sugar",
    "tequila",
    "thyme",
    "tomatoes",
    "tortellini",
    "vanilla",
    "vinegar",
    "vinegar",
    "vodka",
    "watermelon",
    "white chocolate",
    "yoghurt",
  ],
};

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("connected"))
  .catch((err) => console.log(err));

Ingredient.insertMany(ingredients)
  .then((documents) => {
    console.log(`Success" ${documents.length} recipes were added`);
    mongoose.connection.close();
  })
  .catch((err) => console.log(err));