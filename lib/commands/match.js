const { SlashCommandBuilder } = require("discord.js");
const { MatchService } = require("../services");

class MatchCommand {
  async execute(interaction) {
    const matchService = new MatchService();

    // ask to find a user who matches with the current user
    const data = await matchService.execute(interaction.user.id);

    // if the match service does not find a match, or an error occurs, reply with error message

    // if the match service finds a match, continue to the success behavior
    interaction.reply(data.message);
  }
}

module.exports = {
  data: new SlashCommandBuilder().setName("register").setDescription("..."),
  async execute(interaction) {
    const matchCommand = new MatchCommand();
    await matchCommand.execute(interaction);
  },
};
