const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require("./User");

const classSchema = Schema(
  {
    date: { type: String, required: true },
    title: { type: String, requird: true },
    content: { type: String, required: true },
    master: { type: Boolean, default: false },
    user: { type: mongoose.ObjectId, ref: User },
  },
  { timestamps: true }
);

classSchema.method.toJSON = function () {
  const obj = this._doc;
  delete obj.__v;
  delete obj.updatedAt;
  delete obj.createAt;
  return obj;
};

const Class = mongoose.model("Class", classSchema);
module.exports = Class;
