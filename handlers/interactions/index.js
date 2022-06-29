module.exports.run = async (interaction) => {
    if(interaction.isCommand()) return require("./commands").run(interaction);
} 
