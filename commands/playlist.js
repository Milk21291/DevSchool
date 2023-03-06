const { SlashCommandBuilder } = require('discord.js');

module.exports = {

    data: new SlashCommandBuilder()
        .setName('playlist')
        .setDescription('Ouça a melhor playlist de estudos!'),
    
    async execute(interaction) {
        await interaction.reply('https://open.spotify.com/playlist/5GqoDmFV3DhZu8Ac3zkplR?si=eca716e7c1844222')
    }
}