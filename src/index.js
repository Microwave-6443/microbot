const { Client } = require("discord.js");

const client = new Client({ intents: 503 });

client.config = require("./config");

client.login(client.config.BOT_TOKEN);