const {Events, InteractionType} = require("discord.js");

module.exports = {

    name: Events.InteractionCreate,
    run(client, interaction) {

        if(interaction.type === InteractionType.ApplicationCommand) {

            const command = client.commands.get(interaction.commandeName)
            command.run(interaction)
        };
    }
};