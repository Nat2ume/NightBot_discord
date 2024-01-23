const {SlashCommandBuilder} = require("discord.js");

module.exports = {

    data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Get the bot latency")
    .setDMPermission(true),

    run(interaction) {

        interaction.reply(`Ping: \`${interaction.client.ws.ping} ms\`.`);

    }
};