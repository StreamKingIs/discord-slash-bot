module.exports = {
    options: {
        name:"ping",
        description:"Пинг"
    },
    run: async (interaction) => {
        await interaction.reply({
            embeds: [{
                title: "Понг!",
                description: [
                    `api: ${interaction.client.ws.ping}`,
                    `server: ${Date.now() - interaction.createdTimestamp}`
                ].join("\n")
            }]
        });
    }
}