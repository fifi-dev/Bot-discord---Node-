const Discord = require('discord.js');

const TOKEN = '';

const bot = new Discord.Client({
    intents: ['GUILD_MESSAGES', 'GUILDS']
});


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

bot.login(TOKEN)
    .then(() => {
        console.log("Connexion réussie");
    }).catch(error => {
        console.error(error);
    });