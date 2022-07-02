const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
    },
    email: {
      type: String,
      required: [true, "Please add a email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please add a password"],
    },
    relationshipToPatient: {
      type: String,
      required: [true, "Please add reltionship to patient"],
    },
    role: {
      type: [{
        type: String,
        enum: ['admin', 'superAdmin']
      }],
      default: ['admin']
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
