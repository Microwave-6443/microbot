const { default: axios } = require("axios");
const { Client } = require("discord.js");

const client = new Client({ intents: 503 });

client.config = require("./config");

client.on("ready", () => {
    axios({
        method: "POST",
        url: "https://danbot.host/api/bot/" + client.user.id + "/stats",
        data: {
            apiKey: client.config.DANBOT_API_KEY,
            users: 1,
            servers: 1,
            clientInfo: {
                message: "Get trolled."
            }
        }
    }).then(response => {
        console.log(response.data);
    }).catch(error => {
        console.log(error.message);
    });
});

client.login(client.config.BOT_TOKEN);