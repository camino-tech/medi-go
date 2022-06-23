const express = require("express");
const router = express.Router();
const {
  getStatus,
  setStatus,
  updateStatus,
} = require("../controllers/statusController");

const { protect } = require('../middleware/authMiddleware');

router.get("/", protect, getStatus);
router.post("/", protect, setStatus);
router.put("/:id", protect, updateStatus);

module.exports = router;
