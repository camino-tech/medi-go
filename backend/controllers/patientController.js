const asyncHandler = require("express-async-handler");

const Patients = require("../models/patientModel");

// @desc    Get Patient
// @route   GET /api/patients
// @access  Private
const getPatient = asyncHandler(async (req, res) => {
  const patient = await Patients.find({ patientCode: req.body.patientCode });

  res.status(200).json(patient);
});

// @desc    Creates new Patient
// @route   POST /api/patients
const setPatient = asyncHandler(async (req, res) => {
  const {
    patientCode,
    name,
    emergencyContactName,
    emergencyContactEmail,
    emergencyContactPhone,
    websiteCode,
  } = req.body;

  // check if all fields exist
  if (!patientCode || !name || !emergencyContactName || !emergencyContactEmail
    || !emergencyContactName || !emergencyContactPhone || !websiteCode) {
      res.status(400);
      throw new Error("Please fill in all required fields.")
  }

  
  // create patient
  const patient = await Patient.create({
    patientCode,
    name,
    emergencyContactName,
    emergencyContactEmail,
    emergencyContactPhone,
    websiteCode,
  });

  res.status(200).json(patient)
});

// @desc    Update patient
// @route   PUT /api/patients/:id
// @access  Private
const updatePatient = asyncHandler(async (req, res) => {
  const patient = await Patients.find({ patientCode: req.body.patientCode });

  // check if patient is in collection
  if (!patient) {
    res.status(400);
    throw new Error("Patient not found")
  }

  const updatedPatient = await Patients.findByIdAndUpdate(patient._id, req.body);

  res.status(200).json(updatedPatient);
})

module.exports = {
  getPatient,
  setPatient,
  updatePatient,
};
