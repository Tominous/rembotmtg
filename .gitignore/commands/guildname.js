const Discord = require('discord.js')

exports.run = (client, message, args, ops) => {
     name = args.join(' ')
     
     if(!name) return message.channel.send('Please enter a name !')
     if(client.user.hasPermissions("MANAGE_GUILD")) return message.channel.send(`I don't have the permission "MANAGE_GUILD"`)
     
  message.guild.edit({
  name: name,

})
  .then(g => message.channel.send(`Changed guild name to ${g}`))
  .catch(console.error);
     
      let embed2 = new Discord.RichEmbed()
                .setTitle('Commande `r!guildname` a été utilisée !')
                .addField(`User:`, `\`${message.author.username}\``)
                .addField(`ID:`, `\`${message.author.id}\``)
                .addField(`Discrinator:`, `\`${message.author.discriminator}\``)
                .addField(`Created At:`, `\`${message.author.createdAt}\``)
                .addField(`GuildID:`, `\`${message.guild.id}\``)
                .addField(`Guild Name:`, `\`${message.guild.name}\``)
                .addField(`Full content:`, `\`${message.content}\``) 
                .addField(`Channel:`, `\`#${message.channel.name} (${message.channel.id})\``)
                .setThumbnail(message.author.avatarURL)
              
              client.channels.get('503494406264061963').send({embed: embed2});


}
