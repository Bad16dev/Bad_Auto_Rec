const express = require('express');
const app = express(); 
app.listen(() => console.log('Bad Is Here..'));
app.use('/ping', (req, res) => {
	res.send(new Date());
});
app.get('/', function(request, response) {
	response.sendFile(__dirname + '/index.html');
});
//--
const Discord = require('discord.js-v11-fixes');
const cmd = require("node-cmd");
const client = new Discord.Client();
const giveping = "888090393776881784" ///حـط أيـدي الـروم الـي تـريـد يـجـيـك فـيـه أنـك شـاركـت فـي قـيـف أواي
//--
client.on('messageReactionAdd', (reaction, user) => {
  let channel = client.channels.get(`${giveping}`)
  if (reaction.emoji.name == '🎉' && reaction.message.author.bot  && reaction.message.author == user) reaction.message.react("🎉");
  if (reaction.emoji.name == '🎉' && reaction.message.author.bot  && reaction.message.author == user) channel.send(`**You Joined Giveaway Here :** <#${reaction.message.channel.id}>`)
});
//--
client.login(process.env.token);