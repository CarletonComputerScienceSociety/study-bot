const { SlashCommandBuilder } = require("discord.js");
const { CreateMatchesService } = require("../../services");
const { createChannelForMatch } = require("../utils");

// NOTE: This is a test command, and will not be used in the final product
// in the final product, users will be matched on a scheduled basis
// this command is just for the purpose of testing the matches functionality

class CreateMatchesCommand {
  async execute(interaction) {
    const createMatchesService = new CreateMatchesService();
    const data = await createMatchesService.execute();

    // create a channel for each match
    // data.matches.forEach((match) => {
    //   createChannelForMatch(match);
    // });

    interaction.reply("Not Implemented Yet.");
  }
}

module.exports = {
  data: new SlashCommandBuilder().setName("create-match").setDescription("..."),
  async execute(interaction) {
    const matchCommand = new CreateMatchesCommand();
    await matchCommand.execute(interaction);
  },
};
