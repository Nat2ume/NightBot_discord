const { Events, ActivityType} = require("discord.js");

module.exports = {

    name: Events.ClientReady,
    async run(client) {

        // client.guilds.cache.get("1199429410739212369").set(client.commands.map(command => command.data));
        client.application.commands.set(client.commands.map(command => command.data));
        client.user.setActivity("Zelda TOTK", {type: ActivityType.Playing});
        
        console.log(`${client.user.username} run`);
    }
};
