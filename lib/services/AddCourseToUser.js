// const { Course, User } = require("../models");
const mongoose = require("mongoose");
const User = mongoose.model("User");
const Course = mongoose.model("Course");
class AddCourseToUserService {
  async execute(discordId, courseCode) {
    try {
      let res = await User.updateOne(
        { discordId: discordId },
        {
          $push: {
            courses: {
              code: courseCode
            }
          }
        }
      );
      return { res };
    } catch (err) {
      console.log(err)
    }
  }
}

module.exports.AddCourseToUserService = AddCourseToUserService;
