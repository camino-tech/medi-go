const express = require("express");
const router = express.Router();
const {
  getPatient,
  getPatients,
  setPatient,
  updatePatient,
  deletePatient,
} = require("../controllers/patientController");

const { protect } = require('../middleware/authMiddleware');

router.get("/", protect, getPatient);
router.get("/all", protect, getPatients)
router.post("/", protect, setPatient);
router.put("/:id", protect, updatePatient);
router.delete("/:id", protect, deletePatient);

module.exports = router;
