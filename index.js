import Discord from 'discord.js';
import dotenv from 'dotenv'

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('guildMemberAdd', member => {
  const welcomeChan = member.guild.channels.cache.find(ch => ch.id === process.env.WELCOME_CHAN);
  const rulesChan = member.guild.channels.cache.find(ch => ch.id === process.env.RULES_CHAN);

  if (welcomeChan && rulesChan) {
    welcomeChan.send(`Bienvenue ${member}, va lire le ${rulesChan} et mets à jour ton pseudal !`);
  }
});

client.login(process.env.TOKEN);

