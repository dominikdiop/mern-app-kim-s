//1
const mongoose = require("mongoose");

//2
const { Schema, model } = mongoose;

//3
const UserSchema = new Schema({
  name: { type: String, require: true },
  email: { type: String, require: true },
  password: { type: String, require: true },
  phone: Number,
});

//4
module.exports = User = model("user", UserSchema);
