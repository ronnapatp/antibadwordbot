// Import dotenv, fs and Discord.js
require('dotenv').config();
const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client({ intents: ['GUILDS', 'GUILD_MESSAGES'] });
client.on('ready', () => {
  const { Permissions } = require('discord.js');
  const link = client.generateInvite({
    permissions: [
      Permissions.FLAGS.ADMINISTRATOR,
    ],
    scopes: ['bot'],
  });
  console.log(`Logged in as ${client.user.tag}!\nInvite link : ${link}`);

  client.user.setActivity('that who use badword!', { type: 'WATCHING' });

  const commandFiles = fs
    .readdirSync('./command')
    .filter((file) => file.endsWith('.js'));
  for (const file of commandFiles) {
    require(`./command/${file}`)(client);
  }
});

client.login(process.env.DISCORD_TOKEN);