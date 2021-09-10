module.exports = (client) => {
    client.on('message', async message => {


        const msg = message.content.toLowerCase();
      
        if (
          msg.includes('เหี้ย') ||
          msg.includes('สัส') ||
          msg.includes('ควย') ||
          msg.includes('จังไร') ||
          msg.includes('จัญไร') ||
          msg.includes('หี') ||
          msg.includes('เย็ด') ||
          msg.includes('อับปรี') ||
          msg.includes('อัปรีย์') ||
          msg.includes('ไอห่า') ||
          msg.includes('เลว')
      
        ) {
          // Delete message
          await message.delete();
          console.log(message.author.username , 'was use badword');
          message.channel.send(`Badword removed! Thai Badword is from ${message.author.tag} ` )
        }
      });
};