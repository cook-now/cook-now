const express = require("express");
const router = express.Router();
const Recipe = require("../models/Recipe");

router.get("/recipe/:id", (req, res, next) => {
  const id = req.params.id;
  Recipe.findById(id)
  .then((recipeFromDB) => {
      res.render("show", { recipe: recipeFromDB })
    })
  .catch(err => next(err))
});

module.exports = router;
