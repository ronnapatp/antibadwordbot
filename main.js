const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })



// import file
const en = require('./badword/en')
const th = require('./badword/th')
const ch = require('./badword/ch')
const jp = require('./badword/jp')
const fr = require('./badword/fr')

client.on('ready', () => {
    // send message in terminal when run bot
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity('that who use badword!', { type: 'WATCHING' })

    // run file from badword folder
  en(client)
  th(client)
  ch(client)
  jp(client)
  fr(client)
});

// login
client.login();
