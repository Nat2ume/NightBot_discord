const { Events, ActivityType} = require("discord.js");

module.exports = {

    name: Events.ClientReady,
    async run(client) {

        const test = client.guilds.cache.get("1199429410739212369")
        test.commands.set(client.commands.map(command => command.data))
        client.user.setActivity("Zelda TOTK", {type: ActivityType.Playing});
        console.log(`${client.user.username} run`);
    }
};
