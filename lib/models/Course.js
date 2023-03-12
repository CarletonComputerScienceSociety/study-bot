const mongoose = require("mongoose");
const { Schema } = mongoose;

const courseSchema = new Schema({
  code: {
    type: String,
    required: true,
    unique: true,
  },
  enrollments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Enrollment'
  }]
});

const Course = mongoose.model("Course", courseSchema);

module.exports.Course = Course;
module.exports.courseSchema = courseSchema;
