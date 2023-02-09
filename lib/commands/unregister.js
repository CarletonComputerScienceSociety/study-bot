const { SlashCommandBuilder } = require("discord.js");
const { UnregisterUserService } = require("../services");

class UnregisterCommand {
  async execute(interaction) {
    const unregisterUserService = new UnregisterUserService();
    const data = await unregisterUserService.execute(interaction.user.id);
    interaction.reply(data.message);
  }
}

module.exports = {
  data: new SlashCommandBuilder().setName("unregister").setDescription("..."),
  async execute(interaction) {
    const unregisterCommand = new UnregisterCommand();
    await unregisterCommand.execute(interaction);
  },
};
