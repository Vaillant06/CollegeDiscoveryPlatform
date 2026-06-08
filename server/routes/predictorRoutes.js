const express = require("express");
const router = express.Router();

const {
  predictColleges,
} = require("../controllers/predictorController");

router.post("/", predictColleges);

module.exports = router;