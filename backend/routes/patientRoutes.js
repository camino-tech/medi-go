const express = require("express");
const router = express.Router();
const {
  getPatient,
  setPatient,
  updatePatient,
} = require("../controllers/patientController");

const { protect } = require('../middleware/authMiddleware');

router.get("/", protect, getPatient);
router.post("/", protect, setPatient);
router.put("/:id", protect, updatePatient);

module.exports = router;
