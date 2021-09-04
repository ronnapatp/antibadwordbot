const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })



// import file
const en = require('./badword/en')
const th = require('./badword/th')
const ch = require('./badword/ch')
const jp = require('./badword/jp')

client.on('ready', () => {
    // send message in terminal when run bot
  console.log(`Logged in as ${client.user.tag}!`);

    // run file from badword folder
  en(client)
  th(client)
  ch(client)
});

// login
client.login();
