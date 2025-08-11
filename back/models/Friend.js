const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = require("./User");
const friendSchema = Schema(
  {
    friend_id: { type: mongoose.ObjectId, ref: User },
  },
  { timestamps: true }
);

friendSchema.method.toJSON = function () {
  const obj = this._doc;
  delete obj.__v;
  delete obj.updatedAt;
  delete obj.createAt;
  return obj;
};

const Friend = mongoose.model("Friend", friendSchema);
module.exports = Friend;
