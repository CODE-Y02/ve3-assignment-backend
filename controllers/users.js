// normal user can only read modules

const Module = require("../models/module");

exports.getAllModules = async (req, res) => {
  try {
    const modules = await Module.find();
    // console.log(modules);

    if (!modules) {
      return res
        .status(404)
        .json({ success: false, error: "No modules found" });
    }

    res.json({ modules });
  } catch (error) {
    // console.log(error);
    return res.status(500).json({ success: false });
  }
};

exports.getAvailableModuleList = async (req, res) => {
  try {
    const modules = await Module.find().select("name");
    // console.log(modules);
    if (!modules) {
      return res
        .status(404)
        .json({ success: false, error: "No modules found" });
    }

    res.json({ modules });
  } catch (error) {
    // console.log(error);
    return res.status(500).json({ success: false });
  }
};
