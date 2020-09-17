const express = require("express");
const router = express.Router();
const Recipe = require("../models/Recipe");

router.get("/recipes/:id", (req, res, next) => {
  const id = req.params.id;
  Recipe.findById(id)
  .then((recipeFromDB) => {
      res.render("recipe/show", { recipe: recipeFromDB, loggedIn: req.user })
    })
  .catch(err => next(err))
});

module.exports = router;