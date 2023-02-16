const express = require("express");

const {
  getAllModules,
  getAvailableModuleList,
  getModuleById,
} = require("../controllers/users");

const router = express.Router();

router.get("/modules", getAllModules);
router.get("/module/:id", getModuleById);
router.get("/list", getAvailableModuleList);

module.exports = router;
