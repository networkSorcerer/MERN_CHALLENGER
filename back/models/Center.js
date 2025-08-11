const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require("./User");
const centerSchema = Schema(
  {
    name: { type: String, required: true },
    location: { type: String, requird: true },
    master: { type: String, required: true },
    user: { type: mongoose.ObjectId, ref: User },
  },
  { timestamps: true }
);

centerSchema.method.toJSON = function () {
  const obj = this._doc;
  delete obj.__v;
  delete obj.updatedAt;
  delete obj.createAt;
  return obj;
};

const Center = mongoose.model("Center", centerSchema);
module.exports = Center;
