const express = require("express");
const Ingredient = require("../models/Ingredient");
const Recipe = require("../models/Recipe");
const router = express.Router();

router.get("/ingredients", (req, res, next) => {
  Ingredient.find({})
    .then((ingredients) => {
      console.log(ingredients);
      res.render("ingredients/ingredients", { ingredients, loggedIn: req.user })
    })
    .catch(err => {
      next(err)
    })
})
  

router.post("/ingredients", (req, res, next) => {
  const clickedKeywords = req.body.keywords
  Recipe.find({ keyWords: { $in: clickedKeywords } })
    .then((recipes) => {
      console.log(recipes)
      res.render("recipe/match", { recipes, loggedIn: req.user })
    })
    .catch(err => next(err))
  //to show the recipes where the keywords array contains at least one of the clickedKeywords
})

module.exports = router;