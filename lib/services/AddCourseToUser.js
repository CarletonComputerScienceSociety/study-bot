const { Course, User,Enrollment } = require("../models");

class AddCourseToUserService {
  async execute(discordId, courseCode) {
    try {
      let user = await this.createUerIfNotExists(discordId);
      let course = await this.createCourseIfNotExists(courseCode);

      const enrollments = new Enrollment({student: user._id, course: course._id});
      await enrollments.save();

      user.enrollments.push(enrollments);
      await user.save();

      course.enrollments.push(enrollments);
      await course.save();

      return { user: user, course: course, success: true };
      
    } catch (err) {
      if (err.code === 11000) {
        return { error: "course already exists" };
      }
      console.debug(err);
      return { error: "add course failed: contact your administrator" };
    }
  }

  async createUerIfNotExists(discordId) {
    try{

    let user = await User.findOne({ discordId: discordId });
    if (user) {
      return user
    };
    let res = await User.create({ discordId: discordId,active: true, courses: [] });
    console.debug("user created: " + res);
    return res;
    } catch (err) {
      return { error: "user does not exist and cannot be created" };
    }
  }

  async createCourseIfNotExists(courseCode) {
    try{
    let course = await Course.findOne({ code: courseCode });
    if (course) return course;
    let res = await Course.create({ code: courseCode });
    console.debug("course created: " + res);
    return res;
    } catch (err) {
      return { error: "course does not exist and cannot be created" };
    }
  }
}

module.exports.AddCourseToUserService = AddCourseToUserService;
