const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");
const fs = require("fs");
const config = require("../../config.json");
const commands = [];
const registeredGuilds = [];
const rest = new REST({ version: "9" }).setToken(config.token);

module.exports.run = async (interaction) => {
    const commandName = interaction.commandName;
    const commandFile = require(`../../commands/${commandName}`);
    try {
        await commandFile.run(interaction);
    } catch (e) {
        console.error(`Error in ${commandName}:`, e);
        return interaction.reply("Произошла ошибка")
    };
};

module.exports.registerCommands = async (client) => {
    const files = fs.readdirSync("./commands/");

    for (let filename of files) {
        let file = require(`../../commands/${filename}`);

        file.options ? commands.push(file.options) : null;
    };

    await Promise.all(client.guilds.cache.map(async (guild) => {
        await rest.put(Routes.applicationGuildCommands(client.user.id, guild.id), { body: commands })
            .then(() => registeredGuilds.push(guild.id))
            .catch((err) => {
                console.error(err);
            });
    }));

    return registeredGuilds;
};