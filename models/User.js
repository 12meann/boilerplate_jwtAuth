const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    require: true,
    unique: true
  },
  password: {
    type: String,
    require: true
  },
  registeredDate: {
    type: Date,
    default: Date.now
  },
  name: {
    type: String,
    require: true
  }
});

const User = mongoose.model("User", userSchema);
module.exports = User;
