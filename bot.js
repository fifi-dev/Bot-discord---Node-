const Discord = require('discord.js');

const TOKEN = '';

const bot = new Discord.Client({
    intents: ['GUILD_MESSAGES', 'GUILDS', 'GUILD_MEMBERS']
});

/*
bot.on('messageCreate', async (message) => {
    // bot reply to every ping message
    if (message.content === 'ping'){
        await   message.channel.send('pong');
    }
    //the bot will reply to any message
    if(message.author.bot === false){
        message.reply('salut !');
    }
    
})
*/


bot.on("guildMemberAdd", (member) => {
    member.guild.roles.create({
        data: {
        name: 'My Friend',
        color: 'BLUE',
        },
        reason: 'welcome my friend',
    })
        .then(role => {
            member.roles.add(role);
        })
        .catch(console.error);
});

/*
bot.on('messageCreate', async (message) => {
    let member = message.mentions.members.first();

    let role = message.guild.roles.cache.find(r => r.name === "Hello");
    member.roles.add(role).catch(console.error);
})

*/

bot.login(TOKEN)
    .then(() => {
        console.log("Connexion réussie");
    }).catch(error => {
        console.error(error);
    });