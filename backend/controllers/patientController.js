const asyncHandler = require("express-async-handler");

const Patients = require("../models/patientModel");


const randomCode = (length) => {
  let result = '';
  let characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let charLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charLength))
  }
  return result
}

// @desc    Get Patient
// @route   GET /api/patients
// @access  Private
const getPatient = asyncHandler(async (req, res) => {
  const patient = await Patients.find({ patientCode: req.body.patientCode });

  res.status(200).json(patient);
});

// @desc Get all patients
// @route GET /api/patientsAll
// @access Private
const getPatients = asyncHandler(async (req, res) => {
  const patients = await Patients.find({})

  res.status(200).json(patients);
});

// @desc    Creates new Patient
// @route   POST /api/patients
const setPatient = asyncHandler(async (req, res) => {
  const {
    // patientCode,
    name,
    primaryContactName,
    primaryContactEmail,
    primaryContactPhone,
    primaryContactRelationship,
    // websiteCode,
    employeeID,
    typeOfSurgery,
  } = req.body;

  // check if all fields exist and send correct error message
  if (!name) {
    res.status(400);
    throw new Error('Please enter a name')
  }

  if (!primaryContactName) {
    res.status(400);
    throw new Error('Please enter a primary contact name')
  }

  if (!primaryContactEmail) {
    res.status(400)
    throw new Error('Please enter a primary contact email')
  }

  if (!primaryContactPhone) {
    res.status(400)
    throw new Error('Please enter a primary contact phone number')
  }

  if (!primaryContactRelationship) {
    res.status(400)
    throw new Error('Please enter the relationship of the primary contact')
  }

  if (!employeeID) {
    res.status(400)
    throw new Error('Please enter an employee Id')
  }

  if (!typeOfSurgery) {
    res.status(400)
    throw new Error('Please enter the type of surgery')
  }

  // use to generate patient code.
  const findAllPatients = Patients.find({})
  // find the amount of patients in the collection
  const patientCode = (await findAllPatients).length + 1

  // generate random 6 character for website code.
  const websiteCode = randomCode(6)

  
  // create patient
  const patient = await Patients.create({
    patientCode,
    name,
    primaryContactName,
    primaryContactEmail,
    primaryContactPhone,
    primaryContactRelationship,
    websiteCode,
    employeeID,
    typeOfSurgery,
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

  const updatedPatient = await Patients.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedPatient);
})

// @desc    Delete patient
// @route   DELETE /api/patient/:id
// @access  Private
const deletePatient = asyncHandler(async (req,res) => {
  const patient = await Patients.findById(req.params.id);

  if (!patient) {
    res.status(400);
    throw new Error("Patient not found");
  }

  if (!req.user) {
    res.status(401)
    throw new Error("User not found");
  }

  await patient.remove();

  res.status(200).json({ id: req.params.id });
});

// @desc  Validate User Log-in with Code
// @route POST /api/patients/login
// @access Public
const loginWithCode = asyncHandler(async (req, res) => {
  const { patientCode, websiteCode } = req.body;

  // check if patient exists
  const patient = await Patients.findOne({ patientCode });

  if (patient && (websiteCode === patient.websiteCode)) {
    res.json({
      patientCode: patient.patientCode,
      employeeID: patient.employeeID,
    });
  } else {
    res.status(400);
    throw new Error("Invalid credentials");
  }
})

module.exports = {
  getPatient,
  getPatients,
  setPatient,
  updatePatient,
  deletePatient,
  loginWithCode,
};
