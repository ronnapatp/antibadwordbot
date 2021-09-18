module.exports = (client) => {
    client.on('message', async message => {


        const msg = message.content.toLowerCase();
      
        if (
          msg.includes('Сволочь') ||
          msg.includes('Пиздец') ||
          msg.includes('Мудак') ||
          msg.includes('Гандон') ||
          msg.includes('Ебать') ||
          msg.includes('Сука') ||
          msg.includes('Гавно')
      
        ) {
          // Delete message
          await message.delete();
          console.log(message.author.username , 'was use badword');
          message.channel.send(`Badword removed! Russian Badword is from ${message.author.tag} `)
        }
      });
};