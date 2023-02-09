const mongoose = require("mongoose");
const { Schema } = mongoose;
const { userSchema } = require("./User");

const matchSchema = new Schema({
  userOne: {
    type: userSchema,
    required: true,
  },
  userTwo: {
    type: userSchema,
    required: true,
  },
});

const Match = mongoose.model("Match", matchSchema);

module.exports.Match = Match;
module.exports.matchSchema = matchSchema;
