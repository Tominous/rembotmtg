const Discord = require('discord.js');

exports.run = (client, message, args, ops) => {   

    let nick = args.join(' ')

    if(!nick) return message.channel.send('Please type the nickname.\nEx: r!nick nickname')
    if(nick.lenght > 32) return message.channel.send('Nickname too long')
    if(nick.lenght < 2) return message.channel.send('Nickname too short')

    message.member.setNickname(nick)
    

    message.channel.send(`You have the nickname: ${nick}`);

    let embed2 = new Discord.RichEmbed()
    .setTitle('Commande `r!nick` a été utilisée !')
    .addField(`User:`, `\`${message.author.username}\``)
    .addField(`ID:`, `\`${message.author.id}\``)
    .addField(`Discrinator:`, `\`${message.author.discriminator}\``)
    .addField(`Created At:`, `\`${message.author.createdAt}\``)
    .addField(`GuildID:`, `\`${message.guild.id}\``)
    .addField(`Guild Name:`, `\`${message.guild.name}\``)
    .addField(`Channel:`, `\`${message.channel.name} (${message.channel.id})\``)
    .addField(`Full content:`, `\`${message.content}\``)
    .addField(`Nick:`, `\`${nick}\``)
    .setThumbnail(message.author.avatarURL)

client.channels.get('503494406264061963').send({embed: embed2});

}
