const TOKEN = ""
const { Client, Partials, GatewayIntentBits} = require("discord.js")
const PREFIX = "?"
const PREFIX2 = "@"

// On crée une instance du clien
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,  // Nous autorise à acceder aux messages
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMessageReactions,
    ],
    partials: [
        Partials.Message,
        Partials.Reaction
    ]

});

// On agit quand le bot est prêt
client.on("ready", () => {
    console.log("Bot connecté")
    client.user.setPresence({
        activities : [{
            name: "?aide"
        }],
        status: "dnd"
    })
});

// On répond aux messages 
client.on("messageCreate", (message) => {
    if(message.content.startsWith(PREFIX)){
        const input = message.content.slice(PREFIX.length).trim().split(" ");
        const command = input.shift();

        switch(command){
            case "aide":
                message.reply("```Voici la  documentation du bot :\n\t Commandes : \n\t\t ```");
                break
            default:
                message.reply("Cette commande n'existe pas")
        }
    }
    if(message.content.startsWith(PREFIX2)){
        const input = message.content.slice(PREFIX2.length).trim().split(" ");
        const command = input.shift();

        switch(command){
            case "Gamers":
                message.reply("J'arrive !!");
                break
        }
    }
});

// On répond aux réactions
client.on("messageReactionAdd", async (reaction, user) =>{
    if(reaction.emoji.name === "NightWolf"){
        let channel = reaction.message.guild.channels.cache.get("779735116461244497");
        channel.send("Un monsieur a mis une méchante réaction par <@" + user.id +">, voici l'endroit du message : "
            + reaction.message.url
        )
    };
})

// On connecte le bot
client.login(TOKEN)