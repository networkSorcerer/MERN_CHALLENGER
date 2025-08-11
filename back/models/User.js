const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const jwt = require("jsonwebtoken");
require("dotenv").config();
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
const userSchema = Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, requird: true },
    name: { type: String, required: true },
    level: { type: String, default: "white" },
    auth: { type: String, default: "member" },
  },
  { timestamps: true }
);

userSchema.method.toJSON = function () {
  const obj = this._doc;
  delete obj.password;
  delete obj.__v;
  delete obj.updatedAt;
  delete obj.createAt;
  return obj;
};

userSchema.method.generateToken = async function () {
  const token = await jwt.sign({ _id: this._id }, JWT_SECRET_KEY, {
    expiresIn: "1d",
  });
  return token;
};

const User = mongoose.model("User", userSchema);
module.exports = User;
