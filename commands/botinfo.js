module.exports = {
    options: {
        name:"botinfo",
        description:"Информация о боте"
    },

    run: async (interaction) => {
        const owner = await interaction.guild.fetchOwner()
        await interaction.reply({
            embeds: [{
                title: `Информация о \`${interaction.client.user.tag}\``,
                description: [
                    `Использывание ОЗУ: \`${Math.round(process.memoryUsage().heapUsed / 1024 / 1024)}МБ\``,
                    `Количество юзеров: \`${interaction.client.users.cache.size}\``,
                    `Создан <t:${Math.round(interaction.client.user.createdAt/1000)}:F>`
                ].join("\n"),
                thumbnail: {url: interaction.client.user.avatarURL()},
                footer: {
                    text: `Id: ${interaction.guild.id}`
                } 
            }]
        });
    }
}