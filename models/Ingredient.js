const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schemaIngredient = new Schema({
  name: {
    type: [],
    required: true
  },
});

const Ingredient = mongoose.model("Ingredient", schemaIngredient);

module.exports = Ingredient;