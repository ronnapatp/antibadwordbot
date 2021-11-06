// Import dotenv, fs and Discord.js
require('dotenv').config();
const Discord = require('discord.js');
const fs = require('fs');

// Create a new Discord client
const client = new Discord.Client({ intents: ['GUILDS', 'GUILD_MESSAGES'] });

// Handle when bot is ready
client.on('ready', () => {
  // Bot's invitation link
  const { Permissions } = require('discord.js');
  const link = client.generateInvite({
    permissions: [
      // You can add permissions here
      Permissions.FLAGS.ADMINISTRATOR,
    ],
    scopes: ['bot'],
  });
  // Log to console when bot is ready
  console.log(`Logged in as ${client.user.tag}!\nInvite link : ${link}`);

  // Set bot's presence
  client.user.setActivity('that who use badword!', { type: 'WATCHING' });

  // Read all files in the commands folder
  const commandFiles = fs
    .readdirSync('./command')
    .filter((file) => file.endsWith('.js'));
  // Loop through all files in the badWords directory
  for (const file of commandFiles) {
    require(`./command/${file}`)(client);
  }
});

// Login to Discord with your app's token
// Find your bot's token here - https://discordapp.com/developers/applications/me
client.login(process.env.DISCORD_TOKEN);