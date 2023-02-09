const mongoose = require("mongoose");
const { Schema } = mongoose;

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
  courses: {
    type: [String],
    required: false,
  },
});

const User = mongoose.model("User", userSchema);

module.exports.User = User;
