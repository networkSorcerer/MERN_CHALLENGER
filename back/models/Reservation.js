const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require("./User");
const reservationSchema = Schema(
  {
    memo: { type: String, required: true },
    confirm: { type: Boolean, default: false },
    user: { type: mongoose.ObjectId, ref: User },
    opponent: { type: mongoose.ObjectId, ref: User },
    date: { type: Date, required: true },
  },
  { timestamps: true }
);

reservationSchema.method.toJSON = function () {
  const obj = this._doc;
  delete obj.__v;
  delete obj.updatedAt;
  delete obj.createAt;
  return obj;
};

const Reservation = mongoose.model("Reservation", reservationSchema);
module.exports = Reservation;
