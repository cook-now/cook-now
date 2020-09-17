const express = require("express");
const router = express.Router();

const User = require("../models/User");
const Recipe = require("../models/Recipe");

const loginCheck = () => {
  return (req, res, next) => {
    if (req.user) {
      next();
    } else {
      res.redirect("/");
    }
  };
};


router.post("/favorite/:recipeId", (req, res, next) => {
  console.log(req.user._id, req.params.recipeId)
  const recipeId = req.params.recipeId;
  if(req.user.likedRecipes.includes(recipeId)) {
    return
  }
  User.findByIdAndUpdate(req.user._id, { $push: {likedRecipes: req.params.recipeId}}, {new: true}).then(user => {
    console.log(user)
  })
})

router.get("/:username", (req, res, next) => {
  const recipeId = req.params.recipeId;
  const userLoggedId = req.user._id;
  let user = req.params.username;
  let diferentUser = true;

  User.findOne({ username: user })
    .populate("likedRecipes")
    .then(userProfile => {
      if (req.user) {
        if (req.user.username === userProfile.username) {
          diferentUser = false;
        }
        let userProfileId = userProfile._id;
      }
      return userProfile;
    })
    .then(userProfile => {
      let limitedCardNum = 10;
      let likedRecipes = userProfile.likedRecipes.reverse();
      if (likedRecipes.length > limitedCardNum) {
      likedRecipes = likedRecipes.slice(0, limitedCardNum);
       }

      Recipe.find({}).then(userRecipes => {
      let limitedUserRecipes = userRecipes.reverse();
      if (limitedUserRecipes.length > limitedCardNum) {
      limitedUserRecipes = limitedUserRecipes.slice(0, limitedCardNum);
      }
        res.render("user/profile", {
          userProfile,
          userRecipes,
          diferentUser,
          loggedIn: req.user,
          likedRecipes,
        });
      })
 })
    .catch(err => {
      next(err);
    });
});



module.exports = router;