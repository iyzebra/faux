
client.on("guildMemberAdd", user =>{
let joinEmbed = new Discord.RichEmbed()
.setColor("#d02727")
.setAuthor(user.user.username, user.user.displayAvatarURL)
.setDescription(":grin: Bienvenue" + user + " sur le serveur " + user.guild.name + "!")
.setFooter("Nous te souhaitons la bienvenue")
user.guild.channels.get("658416081907613726").send(joinEmbed)
user.addRole("658458506374152212")
});

client.on("guildMemberRemove", user =>{
    let leaveEmbed = new Discord.RichEmbed()
    .setColor("#d02727")
    .setAuthor(user.user.username, user.user.displayAvatarURL)
    .setDescription(":cry: Aurevoir" + user + " a quitté le serveur " + user.guild.name + "!")
    .setFooter("Aurevoir")
    user.guild.channels.get("658444766186438691").send(leaveEmbed)
})

client.on("message", message =>{
     if(!message.guild) return
     if(message.content === prefix + "hello"){
         message.channel.send("Bonjour " + message.author + "!")
     }
});
