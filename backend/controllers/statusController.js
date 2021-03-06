const asyncHandler = require("express-async-handler");

const Status = require("../models/statusModel");

// @desc    Get Status
// @route   GET /api/status
// @access  Public
const getStatus = asyncHandler(async (req, res) => {
  const status = await Status.find({ patientId: req.body.patientId });

  res.status(200).json(status);
});

// @desc    Creates new Status
// @route   POST /api/status
const setStatus = asyncHandler(async (req, res) => {
  const {
    patientId,
    statusDate,
    statusState,
  } = req.body;

  // check if all fields exist
  if (!patientId || !statusDate || !statusState ) {
      res.status(400);
      throw new Error("Please fill in all required fields.")
  }

  
  // create status
  const status = await Status.create({
    patientId,
    statusDate,
    statusState,
  });

  res.status(200).json(status)
});

// @desc    Update status
// @route   PUT /api/status/:id
// @access  Public
const updateStatus = asyncHandler(async (req, res) => {
  const status = await Status.find({ patientId: req.body.patientId });

  // check if status of patient is in collection
  if (!status) {
    res.status(400);
    throw new Error("Status of patient not found")
  }

  const updatedStatus = await Status.findByIdAndUpdate(req.params.id, req.body);

  res.status(200).json(updatedStatus);
})

// @desc    Delte status
// @route   PUT /api/status/:id
// @access  Public
const deleteStatus = asyncHandler(async (req, res) => {
  const status = await Status.findById({ patientId: req.params.id });
    if (!status) {
    res.status(400);
    throw new Error("Status of patient not found");
  }

  await status.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getStatus,
  setStatus,
  updateStatus,
  deleteStatus,
};
