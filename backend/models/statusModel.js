const mongoose = require("mongoose");

const statusSchema = mongoose.Schema(
  {
    patientId: {
      type: String,
      required: true,
    },
    statusDate: {
      type: String,
      required: [true, "Please key in the date"]
    },
    statusTime: {
      type: String,
      required: [true, "Please key in the time"]
    },
    statusPreOp: {
      type: String,
      required: [true, "Please key in patient's operation status"]
    },
    statusInOp: {
      type: String,
      required: [true, "Please key in patient's operation status"]
    },
    statusPostOp: {
      type: String, 
      required: [true, "Please key in patient's operation status"]
    },
    updates: {
      type: [String], //edit with statusSchema after
    }
  }
);

module.exports = mongoose.model("Status", statusSchema);
