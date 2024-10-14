const { REST, Routes } = require('discord.js');

const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
  },
];

const rest = new REST({ version: '10' }).setToken("MTI5NTQzODk4MzgxMTMwMTQ5OA.GJhc7w.7RVnY8k5wjyTETrH6ZaYlN0BOaxxGohuhJf7Iw");

(async()=>{try {
  console.log('Started refreshing application (/) commands.');

  await rest.put(Routes.applicationCommands("1295438983811301498"), { body: commands });

  console.log('Successfully reloaded application (/) commands.');
} catch (error) {
  console.error(error);
}})();