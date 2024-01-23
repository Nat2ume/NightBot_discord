const {SlashCommandBuilder} = require("discord.js");

module.exports = {

    data: new SlashCommandBuilder()
    .setName("pong")
    .setDescription("Get the bot latency")
    .setDMPermission(true),

    run(interaction) {

        interaction.reply('Tu as cliqué sur le /pong !!!');

    }
};