const { Client, Intents } = require('discord.js');
const client = new Client({ intents :[Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', async (message) => {
  if (message.content === '!ping') {
    message.channel.send('Pong!');
  }
})

client.login("your token here");
