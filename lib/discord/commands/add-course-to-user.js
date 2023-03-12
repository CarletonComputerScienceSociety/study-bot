const { SlashCommandBuilder } = require("discord.js");
const { AddCourseToUserService } = require("../../services");

// NOTE: This is a test command, and will not be used in the final product
// in the final product, users will be matched on a scheduled basis
// this command is just for the purpose of testing the matches functionality

class AddCourseToUserCommand {
  async execute(interaction) {
    const addCourseToUser = new AddCourseToUserService();
    let [user,course] = [interaction.options.data[0].user, interaction.options.data[1].value];
    const res = await addCourseToUser.execute(user.id, course);
    
    interaction.reply({
      content: res.error ? res.error : "Course added successfully",
      ephemeral: true,
    });
  }
}

module.exports = {
  data: new SlashCommandBuilder()
  .setName("add-course")
  .setDescription("...")
  .addUserOption(option => option.setName("user").setDescription("The user to add the course to").setRequired(true))
  .addStringOption(option => option.setName("course").setDescription("The course to add").setRequired(true)),

  async execute(interaction) {
    const matchCommand = new AddCourseToUserCommand();
    await matchCommand.execute(interaction);
  },
};
