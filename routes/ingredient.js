const express = require("express");
const Ingredient = require("../models/Ingredient");
const Recipe = require("../models/Recipe");
const router = express.Router();

router.get("/ingredients", (req, res, next) => {
  Ingredient.find({})
  .then((ingredients) => {
    console.log(ingredients);
    res.render("ingredients/ingredients", { ingredients })
    .catch((err) => {
      console.log(err);
    });
  });
});

  router.post("/ingredients", (req, res, next) => {
    // const { potatoes } = req.body;
    // const potatoes = req.body.potatoes
    // console.log(potatoes)
  Ingredient.find({})
  .then((keywords) => {
    let arr = [];
    const filtered = keywords.filter(keyword => {
      req.body[keyword]
    })
    arr.push(filtered)
    console.log(arr)
  // res.render("/match")
  //   })
  //   .catch(err => next(err))
  // })
});
});

module.exports = router;