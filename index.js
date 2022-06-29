const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');
const { run } = require("./handlers/interactions/")
const { registerCommands } = require("./handlers/interactions/commands")


const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', () => {
	registerCommands(client)
	console.log(`Ready as ${client.user.tag}!`);
	client.user.setPresence({
		status: "idle",
		activities: [{ type: "LISTENING", name: `zxcursed - killua`}]
	})
 });

client.on('interactionCreate', async interaction => {
	run(interaction);
});

client.login(token);