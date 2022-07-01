const mongoose = require("mongoose");

/**
 * patientCode === ID
 */

const patientSchema = mongoose.Schema(
  {
    patientCode: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: [true, "Please key in patient's name"]
    },
    emergencyContactName: {
      type: String,
      required: [true, "Please key in patient's emergency contact's name"]
    },
    emergencyContactEmail: {
      type: String,
      required: [true, "Please key in patient's emergency contact's email"]
    },
    emergencyContactPhone: {
      type: Number,
      required: [true, "Please key in patient's emergency contact's phone number"]
    },
    websiteCode: {
      type: String, 
      required: true,
    },
    employeeID: {
      type: Number,
      required: true,
    },
    typeOfSurgery: {
      type: String,
      required: true,
    },
    updates: {
      type: [String], //edit with statusSchema after
    }
  }
);

module.exports = mongoose.model("Patients", patientSchema);
