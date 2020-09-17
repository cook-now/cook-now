const mongoose = require("mongoose");
const Ingredient = require("../models/Ingredient");

const ingredients = {
<<<<<<< HEAD
    name: [
    "potatoes", "asparagus", "onions",  "spinach", "peas", "onion",  "garlic", "tomatoes", "tomato", "cranberries", 
    "bananas", "lemon", "lime", "oranges", "cherries", "watermelon", "limes", "chicken", "pork",  "steak", "salmon", "prawns", "octopus", "mozzarella", "feta", "parmesan", "mascarpone", 
    "vodka", "cognac", "rum", "liqueur", "tequila", "juice", "ice", "olive oil", "sesame oil", "chilli oil", "sunflower oil", "eggs",
    "milk", "butter", "flour",  "cocoa powder", "baking powder", "hazelnuts", "almonds", "cornflour",  "oats", "white chocolate", "dark chocolate", "vanilla", "biscuit", "soda",
    "soy sauce", "mayonnaise", "ketchup", "mustard", "red wine vinegar", "houmous", "cider vinegar",  "maple syrup", "honey", 
    "yoghurt",  "mirin", "vinegar", "noodles", "penne", "tortellini", "couscous",  "miso paste", "rice milk", "salt", "pepper", "sugar", "cumin",
    "coriander", "oregano", "dill", "rosemary", "vinegar", "pepper", "cinnamon", "spice", "thyme", "mace", "anise", "chai", "chipotle chilli", "currants"
    ]
}
=======
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
>>>>>>> final

mongoose
  .connect("mongodb://localhost/cook-now")
  .then(() => console.log("connected"))
  .catch((err) => console.log(er));

Ingredient.insertMany(ingredients)
  .then((documents) => {
    console.log(`Success" ${documents.length} recipes were added`);
    mongoose.connection.close();
  })
  .catch((err) => console.log(err));
