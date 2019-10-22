const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require("./config.json");

bot.on("ready", () => {
   console.log("Estoy lista!");
});

var prefix = config.prefix;

bot.on("message", (message) => {
  if (message.content.startsWith("Nevra" || "nevra")) {
    message.reply("Deja de acosar a mi hermano, ¡¡ladrona!!");
  } else
  if (message.content.startsWith(prefix + "hola")) {
    message.reply("Hola ¿Tienes algún cotilleo nuevo?");  
  }  
  if (message.content === prefix + "pre") {
    message.channel.send("<@&634139725128531968> Preparaos, atacamos en unos minutos");
  }
  if (message.content === prefix + "ata") {
    message.channel.send("<@&634139725128531968> Atacamos con minis, gruta y/o episodio. No olvides confirmar el ataque a continuación");
  }
});
bot.login(config.token);       