const { User } = require("../models");

class RegisterUserService {
  async execute(discordId) {
    try {
      await User.create({ discordId: discordId });
      return { message: "User was succesfully registered" };
    } catch (err) {
      // TODO: unique error handling for duplicate discordId
      return { message: "User failed to register" };
    }
  }
}

module.exports.RegisterUserService = RegisterUserService;
