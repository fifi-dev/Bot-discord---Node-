require('dotenv').config();
const Discord = require('discord.js');
const commandLoader = require('./commandLoader');

const TOKEN = process.env.TOKEN;

const mysql = require('mysql');
const connection = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user:  process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME, 
});

connection.connect();



const bot = new Discord.Client({
    intents: ['GUILD_MESSAGES', 'GUILDS', 'GUILD_MEMBERS']
});

commandLoader.load(bot);

const PREFIX = '$';
bot.on('messageCreate', async (message) => {
    

    if (message.content.startsWith(PREFIX)){
        let words = message.content.split(' ');
        const commandName= words.shift().slice(1);
        const arguments = words;

        if(bot.commands.has(commandName)) {
            bot.commands.get(commandName).run(bot, message, arguments);
        } else{
            await message.delete
            await message.channel.send('The ${commandName} does not exist');
        }

    }
})

bot.login(TOKEN)
    .then(() => {
        console.log("Connexion réussie");
    }).catch(error => {
        console.error(error);
    });
