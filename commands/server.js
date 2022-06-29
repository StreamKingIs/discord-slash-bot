module.exports = {
    options: {
        name:"server",
        description:"Информация о сервере"
    },
    run: async (interaction) => {
        const owner = await interaction.guild.fetchOwner()
        await interaction.reply({
            embeds: [{
                title: `Статистика \`${interaction.guild.name}\``,
                description: [
                    `Владелец сервера: ${owner.user.tag}, ID: ${owner.user.id}`,
                    `Количество юзеров: \`${interaction.guild.memberCount}\``,
                    `Количество бустов: ${interaction.guild.premiumSubscriptionCount} `,
                    `Количесто банов: ${interaction.guild.bans.cache.size}`,
                    `Создан <t:${Math.round(interaction.guild.createdAt/1000)}:F>`
                ].join("\n"),
                thumbnail: {url: interaction.client.user.avatarURL()},
                footer: {
                    text: `Id: ${interaction.guild.id}`
                } 
            }]
        });
    }
}