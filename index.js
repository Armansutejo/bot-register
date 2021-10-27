const { Client } = require('discord.js');
const bot = new Client;
const token = "OTAyNzI0MTEwMjAxNzk4NzM2.YXilVw.g95Q2gTFPeEE54MMNcnqpf4vxqM"; // TOKEN BOT KAMU
var PREFIX = "8"; // PREFIX BOT KAMU

bot.on('ready', () => {
    console.log('Bot Sudah Online,')

    bot.user.setActivity("Register Bot By arman", { 
        type: "PLAYING"
    }).catch(console.error);
});

bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(' ');
    if(!message.content.startsWith(PREFIX)) return;
    switch (args[0]) {

    case 'register':

            if(message.channel.type == "dm") return message.channel.send("Kamu tidak bisa registrasi dari DM")
                const shifter = args.shift()
            if(!args.length) return message.channel.send("Mohon berikan nama untuk di set")
                const nick = "[WARGA]" + args.join(" ")
            if(nick.length > 32) return message.channel.send("Nickname terlalu panjang, mohon berikan yang lebih singkat")
            try {
                    message.member.roles.add("897862743468679207") //Role Yang Mau DiSet
                    message.member.setNickname(nick)
                    return message.reply("Accept");
                } catch(e) {
                    return message.channel.send("Ada sebuah kesalahan disaat melaksanakan command.")
                            }
            break;
    }
})

bot.login(token);
