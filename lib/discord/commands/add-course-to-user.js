const { SlashCommandBuilder } = require("discord.js");
const { CreateMatchesService, AddCourseToUserService } = require("../../services");
const { createChannelForMatch } = require("../utils");

// NOTE: This is a test command, and will not be used in the final product
// in the final product, users will be matched on a scheduled basis
// this command is just for the purpose of testing the matches functionality

class CreateMatchesCommand {
  async execute(interaction) {
    const addCourseToUser = new AddCourseToUserService();
    const status = await addCourseToUser.execute();
    interaction.reply(status? "Success" : "Add course failed");
  }
}

module.exports = {
  data: new SlashCommandBuilder()
  .setName("add-course")
  .setDescription("...")
  .addUserOption(option => option.setName("user").setDescription("The user to add the course to").setRequired(true))
  .addUserOption(option => option.setName("course").setDescription("The course to add to the user").setRequired(true)),

  async execute(interaction) {
    const matchCommand = new CreateMatchesCommand();
    await matchCommand.execute(interaction);
  },
};
