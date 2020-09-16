const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schemaRecipe = new Schema({
  title: {
    type: String,
    required: true,
  },
  about: { 
    type: String 
  },
  ingredients: {
    type: [],
    required: true,
  },
  categories: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  preparationTime: {
    type: Number,
    required: true,
  },
  description: {
    type: [],
    required: true,
  },
  serves: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    default: 0
  },
  keyWords: {
    type: [],
    required: true
  },
  likes: {
    type: Number,
    default: 0
  },
});

const Recipe = mongoose.model("Recipe", schemaRecipe);

module.exports = Recipe;
