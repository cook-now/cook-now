const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schemaUser = new Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

const User = mongoose.model("User", schemaUser);

module.exports = User;