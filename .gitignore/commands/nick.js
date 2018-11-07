const Discord = require('discord.js');

exports.run = (client, message, args, ops) => {   

    let nick = args.join(' ')

    if(!nick) return message.channel.send('Please type the nickname.\nEx: r!nick nickname')
    if(!client.user.hasPermission("MANAGE_NICKNAMES")) return message.channel.send("I don't have the permission to manage nicknames")

    message.member.setNickname(nick)
    

    message.channel.send(`You have the nickname: ${nick}`);

    let embed2 = new Discord.RichEmbed()
    .setTitle('Commande `r!nick` a été utilisée !')
    .addField(`User:`, `\`${message.author.username}\``)
    .addField(`ID:`, `\`${message.author.id}\``)
    .addField(`Discrinator`, `\`${message.author.discriminator}\``)
    .addField(`Created At:`, `\`${message.author.createdAt}\``)
    .addField(`GuildID`, `\`${message.guild.id}\``)
    .addField(`Guild Name`, `\`${message.guild.name}\``)
    .addField(`Full content`, `\`${message.content}\``)
    .addField(`Nick`, `\`${nick}\``)

client.channels.get('503494406264061963').send(embed2);

}
