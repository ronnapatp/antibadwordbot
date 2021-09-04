module.exports = (client) => {
    client.on('message', async message => {


        const msg = message.content.toLowerCase();
      
        if (
          msg.includes('ぶす') ||
          msg.includes('ちくしょう') ||
          msg.includes('くそくらえ') ||
          msg.includes('ふざけるな') ||
          msg.includes('くたばれ') ||
          msg.includes('クソ') 
      
        ) {
          // Delete message
          await message.delete();
          console.log(message.author.username , 'was use badword');
          message.channel.send(`Badword removed! Japanese Badword is from ${message.author.tag} `)
        }
      });
};