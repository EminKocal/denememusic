module.exports = {
  canModifyQueue(member) {
    const { channel } = member.voice;
    const botChannel = member.guild.me.voice.channel;

    if (channel !== botChannel) {
      member.send("Önce ses kanalına katılmanız gerekir!").catch(console.error);
      return false;
    }

    return true;
  }
};
