const {SlashCommandBuilder} = require("discord.js");

module.exports = {

    data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Get the bot latency")
    .setDMPermission(true),

    async run(interaction) {

        await interaction.reply(`Ping: \`${interaction.client.ws.ping} ms\`.`);

    }
};