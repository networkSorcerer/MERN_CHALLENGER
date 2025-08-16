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
classController.getLurnedDay = async (req, res) => {
  try {
    const { userId } = req;

    // find() 메서드를 사용하여 userId와 일치하는 문서를 찾습니다.
    // .select('date')를 사용하여 'date' 필드만 가져옵니다.
    const learnedClasses = await Class.find({ user: userId }).select("date");

    // learnedClasses 배열에서 날짜(date) 값만 추출하여 새로운 배열을 만듭니다.
    const days = learnedClasses.map((item) => item.date);

    return res.status(200).json({ status: "success", data: days });
  } catch (error) {
    return res.status(400).json({ status: "fail", error: error.message });
  }
};

module.exports = classController;
