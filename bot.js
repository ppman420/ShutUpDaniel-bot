// Get discord.js
const { Console } = require('console');
const Discord = require('discord.js');
// Get things from config.json
const {token, name, id, auto, messages, repeat} = require('./config.json');
const client = new Discord.Client();
// Spaghetti code
const TheHolyBible = `shut up ${name}`
const MrLsHentaiCollection = `${name} shut up`
var i = 0

client.once('ready', () => {
    console.log(`Ready!`);
    console.log(`Name is ${name}!`)
    console.log(`ID is ${id}!`)
    console.log(`Auto is ${auto}!`)
    console.log(`Auto Message count is ${messages}!`)
    console.log(`Repeat is ${repeat}!`)
});

client.on('message', message => {
    // Spaghetti code from this point onwards
    // if else if else if else if else...
    // Make bot not responde to self
    if (message.author.bot) return;
    if (message.content.includes (TheHolyBible) || message.content.includes (MrLsHentaiCollection)) {
        // if repeat is false, don't execute the code
        if (repeat == true) {
            // Checks if the author is ${name}
            if (message.author.id != id) {
                console.log(`${message.author.tag} (${message.author.id} says shut up ${name}).`)
                message.channel.send(`shut up ${name}`)
            }
            // If ${name} tells ${name} to shut up, be more rude
            else if (message.author.id == id) {
                console.log(`${name} says shut up ${name}`)
                message.channel.send(`You are right, why don't you shut up ${name}?`)
                return;
            }
        }
    }
    if (message.author.id == id) {
        // if auto is false, don't execute the code
        if (auto == true) {
            // Wait and subtract 1 from i if i is greater than 0
            if (i > 0) {
                i--
                console.log(`Waiting for ${name} to send ${i} messages before saying shut up ${name}.`)
                return;
            }
            // Tell ${name} to shut up if i is 0
            else {
                console.log(`Telling ${name} to shut up.`)
                message.channel.send(`shut up ${name}`)
                i = messages
                return;
            }
        }
    }
});

client.login(token);
