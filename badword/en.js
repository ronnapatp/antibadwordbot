module.exports = (client) => {
    client.on('message', async message => {


        // if message includes discorcl / .ru / knife : Add role "Muted"
        const msg = message.content.toLowerCase();
      
        if (
          msg.includes('fucker') ||
          msg.includes('fuck') ||
          msg.includes('bitch') ||
          msg.includes('cock') ||
          msg.includes('dick') ||
          msg.includes('pussy') ||
          msg.includes('shit') ||
          msg.includes('vagina') ||
          msg.includes('shit') 
      
        ) {
          // Delete message
          await message.delete();
          console.log(message.author.username , 'was use badword');
          message.channel.send(`Badword removed! English Badword is from ${message.author.tag} `)
        }
      });
};