const { SlashCommandBuilder } = require("discord.js");
const { RegisterUserService } = require("../../services");

class RegisterCommand {
  async execute(interaction) {
    const registerUserService = new RegisterUserService();
    const data = await registerUserService.execute(interaction.user.id);
    interaction.reply(data.message);
  }
}

module.exports = {
  data: new SlashCommandBuilder().setName("register").setDescription("This unregisters you from this matching system"),
  async execute(interaction) {
    const registerCommand = new RegisterCommand();
    await registerCommand.execute(interaction);
  },
};
