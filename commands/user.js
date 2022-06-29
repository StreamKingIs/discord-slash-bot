const {SlashCommandBuilder} = require('@discordjs/builders');

module.exports = {
    options: new SlashCommandBuilder()
    .setName("user")
    .setDescription("Информация о пользователе")
    .addUserOption((o) => o.setName("user").setDescription("Выберете пользователя о котором хотите узнать информацию").setRequired(true))
    .toJSON(),
    
    run: async (interaction) => {
        const user = interaction.options.getUser("user")
        await interaction.reply({
            embeds: [{
                title: `Информация о ${user.tag}`,
                description: [
                    `Бот: ${user.bot ? "`Да`" : "`Нет`"}`,
                    `Аккаунт создан: <t:${Math.round(user.createdAt/1000)}:F>`
                ].join("\n")
            }]
        });
    }
}