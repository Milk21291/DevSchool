const { SlashCommandBuilder,  ActionRowBuilder, StringSelectMenuBuilder, Component } = require('discord.js');

const row = new ActionRowBuilder()
    .addComponents(
        new StringSelectMenuBuilder()
            .setCustomId('select')
            .setPlaceholder('Nenhuma línguagem selecionada')
            .addOptions({
                label: 'Javascript',
                description: 'Veja a documentação de JavaScript',
                value: 'javascript'
            },
            {
                label: "python",
                description: "Veja a documentação de Python",
                value: "python"
            },
            {
                label: "C#",
                description: "Veja a documentação de C#",
                value: "csharp"
            },
            {
                label: "discord.js",
                description: "Veja a documentação de Discord.js",
                value: "discordjs"
            }
        )
    )

module.exports = {

    data: new SlashCommandBuilder()
        .setName('docs')
        .setDescription('Acesse a documentaçã da tecnologia que quiser'),
    
    async execute(interaction) {
        await interaction.reply({content: 'Selecione umas das tecnologias abaixo', components: [row]})
    }
}