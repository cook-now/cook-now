const express = require("express");
const Recipe = require("../models/Recipe");
const router = express.Router();
const { loginCheck } = require('./middlewares');

/* GET home page */
router.get("/", (req, res, next) => {
  Recipe.find({})
  .then((recipes) => {
    res.render("index", { recipes, loggedIn: req.user });
    }).catch((err) => {
    console.log(err);
});
})

router.get('/private', loginCheck(), (req, res) => {
  res.render('private');
});

module.exports = router;
