const mongoose = require("mongoose");
const { Schema } = mongoose;

const enrollmentSchema = new Schema({
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student'
      },
      course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
      }
});
enrollmentSchema.index({ student: 1, course: 1 }, { unique: true });
const Enrollment = mongoose.model("Enrollment", enrollmentSchema);

module.exports.Enrollment = Enrollment;
module.exports.enrollmentSchema = enrollmentSchema;
