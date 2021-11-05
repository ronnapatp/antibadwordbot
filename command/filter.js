// Export function
module.exports = (client) => {
  // Handle on message is sent
  client.on('messageCreate', async (message) => {
    // Lowercase the message
    const msg = message.content.toLowerCase();

    // Get full conutry name from country code
    const country = new Intl.DisplayNames(['en'], { type: 'region' });

    // Import badWords.js from ../badWords
    const badWords = require('../badWords/badWords');

    // Loop all badWords
    for (const words of badWords) {
      // Loop all content
      for (let i = 0; i < words.fileContent.length; i++) {
        // If message has bad words
        if (words.fileContent[i].includes(msg)) {
          // Delete message
          await message.delete();

          // Log message
          console.log(message.author.username, 'is using a badword');

          // Send message not to rude
          message.channel.send(
            `Badword removed! ${country.of(
              words.fileName.toUpperCase()
            )} badword has been sent from <@${message.author.id}> `
          );
        }
      }
    }
  });
};
