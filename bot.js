const Discord = require('discord.js');
const {token, name} = require('./config.json');
const client = new Discord.Client();
const TheHolyBible = `shut up ${name}`
const MrLsHentaiCollection = `${name} shut up`

client.once('ready', () => {
	console.log(`Ready to tell ${name} to shut up`);
});

client.on('message', message => {
if (message.author.bot) return;
	if (message.content.includes (TheHolyBible) || message.content.includes (MrLsHentaiCollection)) {
		console.log(`${message.author.tag} (${message.author.id}) says shut up ${name}!`)
		message.channel.send(`shut up ${name}`)
	}
});

client.login(token);