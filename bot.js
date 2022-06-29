const Discord = require('discord.js');

const TOKEN = 'OTkxNjA2NzI1NTcwNDY1ODIy.G6wiMA.VLmkixkZw1N2v_ILEqAtj4TfbuKQNl9pcOfulM';

const bot = new Discord.Client({
    intents: ['GUILD_MESSAGES', 'GUILDS']
});

bot.login(TOKEN)
    .then(() => {
        console.log("Connexion réussie");
    }).catch(error => {
        console.error(error);
    });