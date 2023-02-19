const { Course, User } = require("../models");

class AddCourseToUserService {
  async execute(discordId, courseCode) {
    try {
      this.createUerIfNotExists(discordId);
      this.createCourseIfNotExists(courseCode);
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
      return { error: "add course failed" };
    }
  }

  async createUerIfNotExists(discordId) {
    try{

    let user = await User.findOne({ discordId: discordId });
    if (user) return;
    let created = await User.create({ discordId: discordId,active: true, courses: [] });
    console.log(created);
    } catch (err) {
      return { error: "user does not exist and cannot be created" };
    }
  }

  async createCourseIfNotExists(courseCode) {
    try{
    let course = await Course.findOne({ code: courseCode });
    if (course) return;
    await Course.create({ code: courseCode });
    } catch (err) {
      return { error: "course does not exist and cannot be created" };
    }
  }
}

module.exports.AddCourseToUserService = AddCourseToUserService;
