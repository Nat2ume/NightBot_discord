const { readdirSync } = require( "fs") ;

module.exports = async client => {

    let count = 0;
    const dirsCommands = readdirSync("./commands/");

    for(const dirs of dirsCommands) {
        const filesDirs = readdirSync(`./commands/${dirs}/`).filter(f => f.endsWith(".js"));
        for(const files of filesDirs) {
            const command = require(`../commands/${dirs}/${files}`);
            client.commands.set(command.name, command) ;
            count++;
        };
    };

    console.log(`[Commands] => ${count} logged command`);
}