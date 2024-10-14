require('dotenv').config();
const {Client, GatewayIntentBits} = require('discord.js');

const client = new Client({
    intents:[
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ]
});

client.on("messageCreate", (message)=>{
    if(message.author.bot) return;
    message.reply({
        content:"Hey! I am Bot"
    }
    )
});

client.on('interactionCreate', (interaction)=>{
    if(interaction.commandName=='ping'){
        interaction.reply({
            content:"Pong!"
        });
    }
});

client.login(process.env.TOKEN);