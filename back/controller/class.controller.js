const Class = require("../models/Class");
const classController = {};

classController.addClass = async (req, res) => {
  try {
    const { userId } = req;
    const { master, trainDate, title, content, category } = req.body;

    const newClass = new Class({
      master: master,
      date: trainDate,
      title: title,
      content: content,
      category: category,
      user: userId,
    });

    await newClass.save();

    return res.status(200).json({
      status: "success",
      data: newClass,
    });
  } catch (error) {
    return res.status(400).json({ status: "fail", error: error.message });
  }
};

module.exports = classController;
