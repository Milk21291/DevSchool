const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ban')
		.setDescription('Selecione um membro para bani-lo.')
		.addUserOption(option =>
			option
				.setName('membro')
				.setDescription('O membro a ser banido')
				.setRequired(true))
		.addStringOption(option =>
			option
				.setName('motivo')
				.setDescription('O motivo da proibição'))
		.setDefaultMemberPermissions(PermissionFlagsBits.BanMembers)
		.setDMPermission(false),

		async execute(interaction) {
			const target = interaction.options.getUser('membro');
			const reason = interaction.options.getString('motivo') ?? 'Nenhum motivo fornecido';
	
			await interaction.reply(`Banido ${target.username} por motivo: ${reason}`);
			await interaction.guild.members.ban(target);
		},

	};
	
