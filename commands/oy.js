const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "oy",
  aliases: ["oy","oyver","vote"],
  description: "Yardım Komutu",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
      .setTitle("Nota Music Oy ")
      .setDescription( "[Bana Oy Vermek İçin Tıkla](https://top.gg/bot/761942960685711380/vote)")
      .setColor("#F8AA2A");
    helpEmbed.setTimestamp();


   
  

   

    return message.channel.send(helpEmbed).catch(console.error);

 

  }
};
