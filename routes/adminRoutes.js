const express = require("express");
const { addNewModule } = require("../controllers/admin");

const router = express.Router();

router.post("/module", addNewModule);

module.exports = router;
