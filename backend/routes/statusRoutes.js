const express = require("express");
const router = express.Router();
const {
  getStatus,
  setStatus,
  updateStatus,
  deleteStatus,
} = require("../controllers/statusController");

router.get("/", getStatus);
router.post("/", setStatus);
router.put("/:id", updateStatus);
router.delete("/:id", deleteStatus);

module.exports = router;
