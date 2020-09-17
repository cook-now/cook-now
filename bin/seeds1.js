const mongoose = require("mongoose");
const Ingredient = require("../models/Ingredient");

const ingredients = {
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