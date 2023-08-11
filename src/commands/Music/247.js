const { MessageEmbed } = require('discord.js');
const db = require("../../schema/autoReconnect");

module.exports = {
    name: '247',
    category: 'Music',
    description: 'Joins the voice channel for 24/7.',
    args: false,
    usage: '',
    userPrams: [],
    botPrams: ['EMBED_LINKS'],
    owner: false,
    player: true,
    dj: true,
    inVoiceChannel: true,
    sameVoiceChannel: true,
    execute: async (message, args, client, prefix) => {

        const player = client.manager.players.get(message.guild.id);

        let data = await db.findOne({Guild: message.guild.id})
        if (data) {
            await data.delete();
            let thing = new MessageEmbed()
                .setColor(client.embedColor)
                .setDescription(` 247 Mode is Disabled`);
            message.reply({ embeds: [thing] })
        } else {
            data = new db({
                Guild: player.guildId,
                TextId: player.textId,
                VoiceId: player.voiceId
            })
            await data.save();
            let thing = new MessageEmbed()
                .setColor(client.embedColor)
                .setDescription(`247 Mode is Enabled`);
            message.reply({ embeds: [thing] })
        }
    }
} 
