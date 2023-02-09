const { User } = require("../models");

class RegisterUserService {
  async execute(discordId) {
    try {
      await User.create({ discordId: discordId });
      return { message: "User was succesfully registered" };
    } catch (err) {
      return { message: err._message };
    }
  }
}

module.exports.RegisterUserService = RegisterUserService;
