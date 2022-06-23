const mongoose = require("mongoose");

const statusSchema = mongoose.Schema(
  {
    patientId: {
      type: String,
      required: true,
    },
    statusDate: {
      type: Date,
      required: [true, "Please key in the date"]
    },
    statusState: {
      type: [{
        type: String,
        enum: ['checkedIn','preOp','inOp','postOp']
      }],
      default: ['checkedIn']
    },
  }
);

module.exports = mongoose.model("Status", statusSchema);
