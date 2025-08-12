const User = require("../models/User");
const bcrypt = require("bcryptjs");
userController = {};

userController.getUser = async (req, res) => {
  try {
    const { userId } = req;
    const user = await User.findById(userId);
    if (user) {
      return res.status(200).json({ status: "success", user });
    }
    throw new Error("Invalid token");
  } catch (error) {
    return res.status(400).json({ status: "fail", error: error.message });
  }
};
module.exports = userController;
