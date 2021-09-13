module.exports = (client) => {
    client.on('message', async message => {


        const msg = message.content.toLowerCase();
      
        if (
          msg.includes('Bordel de Merde') ||
          msg.includes('Merde') ||
          msg.includes('Casse-toi') ||
          msg.includes('Salope') 
      
        ) {
          // Delete message
          await message.delete();
          console.log(message.author.username , 'was use badword');
          message.channel.send(`Badword removed! French Badword is from ${message.author.tag} `)
        }
      });
};