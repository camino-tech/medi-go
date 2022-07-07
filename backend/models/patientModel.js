const mongoose = require("mongoose");

/**
 * patientCode === ID
 * patientCode is the username for the patients family. (iterate over patients, get highest number and add 1)
 * websiteCode is the password for the patients family. (randomly generate 6 digit password.)
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
    primaryContactName: {
      type: String,
      required: [true, "Please key in patient's primary contact's name"]
    },
    primaryContactEmail: {
      type: String,
      required: [true, "Please key in patient's primary contact's email"]
    },
    primaryContactPhone: {
      type: Number,
      required: [true, "Please key in patient's primary contact's phone number"]
    },
    primaryContactRelationship: {
      type: String,
      required: true,
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
