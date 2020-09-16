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

router.post("/like/:recipeId", (req, res, next) => {
  const recipeId = req.params.recipeId;
  const userLoggedId = req.user._id;
  User.findById(userLoggedId)
    .then(user => {
      let isLiking = false;
      user.likedRecipes.find(id => {
        if (id == recipeId) {
          isLiking = true;
        }
      });
      if (!isLiking) {
        User.findByIdAndUpdate(
          userLoggedId,
          {
            $push: { likedRecipes: recipeId }
          },
          {
            new: true
          }
        ).then(response => {
          Recipe.findByIdAndUpdate(
            recipeId,
            {
              $inc: { likes: 1 }
            },
            {
              new: true
            }
          ).then(recipe => {
            res.json({ isLiking, recipe });
            return;
          });
        });
      } else {
        User.findByIdAndUpdate(
          userLoggedId,
          {
            $pull: { likedRecipes: recipeId }
          },
          {
            new: true
          }
        ).then(response => {
          Recipe.findByIdAndUpdate(
            recipeId,
            {
              $inc: { likes: -1 }
            },
            {
              new: true
            }
          ).then(recipe => {
            res.json({ isLiking, recipe });

            return;
          });
        });
      }
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;