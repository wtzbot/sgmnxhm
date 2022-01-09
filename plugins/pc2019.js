const Trex = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');

if (Config.WORKTYPE == 'public') {

    Trex.addrex({pattern: 'ps2019', fromMe: false,  deleteCommand: true }, (async (message, match) => {
            
            var image = await axios.get ('https://telegra.ph/file/356c867018dcc23ad22f9.png', {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: `╭───────────────
│  🔰 SOFTWARE STORE BY ACHI BRO LK 🔰
│
│   🔰Adobe Photoshop CC 2019 (64 bit) (Preactivated)
│
│ ⚠️Minimum and recommended system requirements for Photoshop⚠️
│ 🔰Processor 👉ARMprocessor
│ 🔰Operating system 👉Windows 10 ARM device running Windows 10 64-bit (version 1909) or later
│ 🔰RAM 👉8 GB	
│ 🔰Graphics card👉 4 GB of GPU memory 
│ 🛑All the other aspects for ARM are the same as Intel🛑
│    
│ Download Link ➡️ 64bit https://www.mediafire.com/file/yi4eeau7oohs2eh/PS2019.20.0.6.x64.(ask4pc).zip/file      
│                  
│
│         🔰POWERD BY🔰
│      ❰ 🇱🇰🔰✥▬ALPHA▬✥🔰🇱🇰 ❱
╰──────────────`,quoted: message.data})

    }));
  
}
