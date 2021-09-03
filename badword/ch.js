module.exports = (client) => {
    client.on('message', async message => {


        const msg = message.content.toLowerCase();
      
        if (
          msg.includes('你他妈的') ||
          msg.includes('傻屄') ||
          msg.includes('肏') ||
          msg.includes('肏你妈') ||
          msg.includes('拍马屁') ||
          msg.includes('笨蛋') ||
          msg.includes('坏蛋') 
      
        ) {
          // Delete message
          await message.delete();
          console.log(message.author.username , 'was use badword');
          message.channel.send(`Badword removed! Chinese Badword is from ${message.author.tag} `)
        }
      });
};