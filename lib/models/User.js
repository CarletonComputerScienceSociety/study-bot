const mongoose = require("mongoose");
const { Schema } = mongoose;
const { courseSchema } = require("./Course");

const userSchema = new Schema({
  discordId: {
    type: String,
    required: true,
    unique: true,
  },
  active: {
    type: Boolean,
    default: true,
    required: true,
  },
  enrollments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Enrollment'
  }]
});

const User = mongoose.model("User", userSchema);

module.exports.User = User;
module.exports.userSchema = userSchema;
