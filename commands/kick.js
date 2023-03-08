const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
	.setName('kick')
	.setDescription('Selecione um membro para expulsa-lo.')
	.addUserOption(option =>
		option
			.setName('membro')
			.setDescription('O membro para expulsa-lo')
			.setRequired(true))
            .addStringOption(option =>
                option
                    .setName('motivo')
                    .setDescription('O motivo da expulsão'))
	.setDefaultMemberPermissions(PermissionFlagsBits.KickMembers)
	.setDMPermission(false),

		async execute(interaction) {
			const target = interaction.options.getUser('membro');
			const reason = interaction.options.getString('motivo') ?? 'Nenhum motivo fornecido';
	
			await interaction.reply(`Expulso ${target.username} por motivo: ${reason}`);
			await interaction.guild.members.ban(target);
		},

	};
	
