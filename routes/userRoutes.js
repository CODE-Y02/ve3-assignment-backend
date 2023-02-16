const express = require("express");

const {
  getAllModules,
  getAvailableModuleList,
} = require("../controllers/users");

const router = express.Router();

router.get("/modules", getAllModules);
router.get("/list", getAvailableModuleList);

module.exports = router;
