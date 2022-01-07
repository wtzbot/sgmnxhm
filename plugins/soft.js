const Trex = require('../events');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const path = require("path");
const {WAConnection, MessageOptions, MessageType, Mimetype, Presence} = require('@adiwajshing/baileys');
const axios = require('axios');
const got = require('got');

    Trex.addrex({pattern: 'softstore', fromMe: true,  deleteCommand: true }, (async (message, match) => {

          
            var image = await axios.get ('https://telegra.ph/file/873e00ec90306f5180f19.jpg', {responseType: 'arraybuffer'})//ඔය ලින්ක් එකට උබට ඕන ෆොටෝ එකේ ලින්ක් එක දාපන් 💫
            
        await conn.sendMessage(conn.user.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: '\n🔰 SOFTWARE STORE BY ACHI BRO LK \n\n🔰  available \n\n🔰 details \n\n 🔰 POWERD BY ❰ 🇱🇰🔰✥▬ALPHA▬✥🔰🇱🇰 ❱ 🔰 ',quoted: message.data})//ඔතන උබට ඕන මැස්වෙජ් එක දාපන්💫
        
        

    }));
