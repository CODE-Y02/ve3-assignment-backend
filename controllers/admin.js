const Module = require("../models/module");

exports.addNewModule = async (req, res) => {
  try {
    // console.log(req);
    const { moduleData } = req.body;

    const module = await new Module({
      ...moduleData,
    }).save();

    res.json({
      success: true,
      module,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      error,
    });
  }
};
