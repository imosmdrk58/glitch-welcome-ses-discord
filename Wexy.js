const Discord = require('discord.js');
const tokens = [
  
    process.env.token1,
    process.env.token2,
    process.env.token3  
];
const chnls = [
    process.env.ses1,
    process.env.ses2,
    process.env.ses3
  
];

const selamlı = [];
for (let index = 0; index < tokens.length; index++) {
    const token = tokens[index];
    const client = new Discord.Client();
    client.login(token);
    let concon;
    client.on('ready', async () => {
        console.log(
          
          client.user.username

        
         );
        await client.user.setActivity({
            status: "dnd",
            name: "W A R E X İ A L ❤️ WEXY",
            name: "31",
            name: "GÜNCELLEME 11.02.2022 18'01",
            type: "LISTENING"
        });
        concon = await client.channels.cache.get(chnls[index]).join()
    });
    let ses;
    client.on('voiceStateUpdate', async (prev, cur) => {
        if (cur.member.user.bot) return;
        if (cur.channel && (cur.channel.id === chnls[index])) {
            if (cur.channelID === prev.channelID) return;
            if (selamlı.includes(cur.member.id) && (cur.member.roles.highest.rawPosition < cur.guild.roles.cache.get("936930776447062036").rawPosition)) {//TEKRARDANROLID
                //console.log(selamlı);
                ses = await concon.play('./tekrardan.mp3');
                return;
            }
            if ((cur.member.roles.highest.rawPosition < cur.guild.roles.cache.get("936930770210131968").rawPosition)) { //HGROLID
                ses = await concon.play('./hosgeldin.mp3');
                selamlı.push(cur.member.user.id);
            } else if (cur.member.roles.highest.rawPosition > cur.guild.roles.cache.get('936930759170727956').rawPosition) {//YTROLID
                ses = await concon.play('https://cdn.discordapp.com/attachments/935666114766180414/941713831946760192/Wexy_Sesler_yt.mp3');
                selamlı.push(cur.member.user.id);
            }
        }
        if (prev.channel && (prev.channel.id === chnls[index]) && (prev.channel.members.size === 1) && ses) ses.end();
    });
    client.on('guildMemberUpdate', async (prev, cur) => {
        if (concon.channel.members.some(biri => biri.user.id === cur.user.id)) {
            if ((prev.roles.highest.rawPosition < cur.roles.highest.rawPosition)) {
                ses = await concon.play('./elveda.mp3');
            }
        } else return;
    });
    client.on('voiceStateUpdate', async (prev, cur) => {
        if (cur.member.id === client.user.id) concon = await client.channels.cache.get(chnls[index]).join();
    })
}


 //log