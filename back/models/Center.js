const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const centerSchema = Schema(
  {
    name: { type: String, required: true },
    location: { type: String, requird: true },
    master: { type: String, required: true },
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
