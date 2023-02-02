const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	async execute(interaction) {
		const startTime = Date.now();
		await interaction.reply('Pong!');
		const msg = await interaction.fetchReply();
		await interaction.editReply(`Pong! (Roundtrip took: ${msg.createdTimestamp - startTime}ms)`);
	},
};