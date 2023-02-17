// normal user can only read modules

const Module = require("../models/module");

exports.getAllModules = async (req, res) => {
  try {
    const modules = await Module.find();

    if (!modules) {
      return res
        .status(404)
        .json({ success: false, error: "No modules found" });
    }

    res.json({ modules });
  } catch (error) {
    res.status(500).json({ success: false });
  }
};

exports.getModuleById = async (req, res) => {
  try {
    const { id } = req.params;

    const singleModuleData = await Module.findById({ _id: id });

    const { _doc: singleModule } = singleModuleData;

    if (!singleModule) {
      return res
        .status(404)
        .json({ success: false, error: "No modules found" });
    }

    return res.json({ ...singleModule });
  } catch (error) {
    res.status(500).json({ success: false });
  }
};

exports.getAvailableModuleList = async (req, res) => {
  try {
    const modules = await Module.find().select("name");

    if (!modules) {
      return res
        .status(404)
        .json({ success: false, error: "No modules found" });
    }

    res.json({ modules });
  } catch (error) {
    res.status(500).json({ success: false });
  }
};
