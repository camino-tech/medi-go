const express = require("express");
const router = express.Router();
const {
  getStatus,
  setStatus,
  updateStatus,
  deleteStatus,
} = require("../controllers/statusController");

const { protect } = require('../middleware/authMiddleware');

router.get("/", protect, getStatus);
router.post("/", protect, setStatus);
router.put("/:id", protect, updateStatus);
router.delete("/:id", protect, deleteStatus);

module.exports = router;
