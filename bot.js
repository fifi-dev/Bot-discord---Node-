const Discord = require('discord.js');

const TOKEN = '';

const bot = new Discord.Client({
    intents: ['GUILD_MESSAGES', 'GUILDS']
});


bot.on('messageCreate', (message) => {
    console.log(message.content)
})

bot.login(TOKEN)
    .then(() => {
        console.log("Connexion réussie");
    }).catch(error => {
        console.error(error);
    });