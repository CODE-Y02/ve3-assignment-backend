const Module = require("../models/module");

exports.addNewModule = async (req, res) => {
  try {
    const { moduleData } = req.body;

    const module = await new Module({
      ...moduleData,
    }).save();

    res.json({
      success: true,
      module,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};
