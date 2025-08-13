const Center = require("../models/Center");
const centerController = {};
centerController.addCenter = async (req, res) => {
  try {
    console.log("bbbbbb", req.body);
    const { centerName, centerLocation, master } = req.body;
    const center = new Center({
      name: centerName,
      location: centerLocation,
      master: master,
    });
    await center.save();
    return res.status(200).json({
      status: "success",
      data: center,
    });
  } catch (error) {
    return res.status(400).json({ status: "fail", error: error.message });
  }
};
module.exports = centerController;
