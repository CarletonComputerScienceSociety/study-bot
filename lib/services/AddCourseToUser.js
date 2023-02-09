const { Course, User } = require("../models");

class AddCourseToUserService {
  async execute(discordId, courseCode) {
    // TODO: implement this
    // fetch the user using the discordId
    // add the course to the user's courses

    return { message: "Command not implemented yet." };
  }
}

module.exports.AddCourseToUserService = AddCourseToUserService;
