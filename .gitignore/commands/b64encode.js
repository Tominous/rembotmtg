const base64 = require("js-base64").Base64;

module.exports.run = async (bot, message, args) => {
    const b64Encoded = base64.encode(args.join(" "));
    message.channel.send(`\`\`\`\n${b64Encoded}\`\`\``);

    if(!b64Encoded) return message.channel.send('Please write something')
    
    let embed2 = new Discord.RichEmbed()
    .setTitle('Commande `r!b64encode` a été utilisée !')
    .addField(`User:`, `\`${message.author.username}\``)
    .addField(`ID:`, `\`${message.author.id}\``)
    .addField(`Discrinator:`, `\`${message.author.discriminator}\``)
    .addField(`Created At:`, `\`${message.author.createdAt}\``)
    .addField(`GuildID:`, `\`${message.guild.id}\``)
    .addField(`Guild Name:`, `\`${message.guild.name}\``)
    .addField(`Full content:`, `\`${message.content}\``)
    .addField(`Channel:`, `\`#${message.channel.name} (${message.channel.id})\``)
    .addField(`Input:`, `\`${args.join(' ')}\``)
    .addField(`Output:`, `\`${b64Encoded}\``)


client.channels.get('503494406264061963').send(embed2);
    
}
