const express = require("express");
const router = express.Router();

const {
  getExams,
  getExamById,
} = require("../controllers/examController");

router.get("/", getExams);
router.get("/:id", getExamById);

module.exports = router;