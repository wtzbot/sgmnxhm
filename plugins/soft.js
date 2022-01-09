const Trex = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');

if (Config.WORKTYPE == 'public') {

    Trex.addrex({pattern: 'softstore', fromMe: false,  deleteCommand: true }, (async (message, match) => {

            var image = await axios.get ('https://telegra.ph/file/24429ad5b37c11525894e.jpg', {responseType: 'arraybuffer'})

        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: `╭───────────────
│  🔰 SOFTWARE STORE BY ACHI BRO LK 🔰
│
│  ◎Adobe Editing Softwares type =.adobe
│  ◎Wondershare Softwares type =.ws
│  ◎Operating System type =.os 
│  ◎Avtivrus Softwares type =.vs
│  ◎MS Office Softwares type =.msoffice   
│
│         🔰POWERD BY🔰
│      ❰ 🇱🇰🔰✥▬ALPHA▬✥🔰🇱🇰 ❱
╰──────────────`,quoted: message.data})

    }));


    Trex.addrex({pattern: 'adobe', fromMe: false,  deleteCommand: true }, (async (message, match) => {


            var image = await axios.get ('https://telegra.ph/file/a4b389af655b4dbb1df4f.png', {responseType: 'arraybuffer'})

        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: `╭───────────────
│  🔰 SOFTWARE STORE BY ACHI BRO LK 🔰
│
│    adobe editing softwares
│    
│  ◎adobe photoshop    .aps
│  ◎adobe primere pro  .apr
│  ◎adobe after effect .aaf
│  ◎adobe ligthroom    .alm
│   
│
│         🔰POWERD BY🔰
│      ❰ 🇱🇰🔰✥▬ALPHA▬✥🔰🇱🇰 ❱
╰──────────────`,quoted: message.data})



    }));

  Trex.addrex({pattern: 'sysymkasy', fromMe: false,  deleteCommand: true }, (async (message, match) => {


            var image = await axios.get ('https://telegra.ph/file/a4b389af655b4dbb1df4f.png', {responseType: 'arraybuffer'})
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: `╭───────────────
│  🔰 SOFTWARE STORE BY ACHI BRO LK 🔰
│
│  
│  
│  
│  
│   
│
│         🔰POWERD BY🔰
│      ❰ 🇱🇰🔰✥▬ALPHA▬✥🔰🇱🇰 ❱
╰──────────────`,quoted: message.data})

  }));

  Trex.addrex({pattern: 'sgnmsym', fromMe: false,  deleteCommand: true }, (async (message, match) => {


            var image = await axios.get ('https://telegra.ph/file/7639b67f052f3d4b34236.jpg', {responseType: 'arraybuffer'})
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: `╭───────────────
│  🔰 SOFTWARE STORE BY ACHI BRO LK 🔰
│
│  
│  
│  
│  
│   
│
│         🔰POWERD BY🔰
│      ❰ 🇱🇰🔰✥▬ALPHA▬✥🔰🇱🇰 ❱
╰──────────────`,quoted: message.data})

    }));

  Trex.addrex({pattern: 'sdymsy', fromMe: false,  deleteCommand: true }, (async (message, match) => {


            var image = await axios.get ('https://telegra.ph/file/db29720b4ac93686826c0.jpg', {responseType: 'arraybuffer'})
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: `╭───────────────
│  🔰 SOFTWARE STORE BY ACHI BRO LK 🔰
│
│  
│  
│  
│  
│   
│
│         🔰POWERD BY🔰
│      ❰ 🇱🇰🔰✥▬ALPHA▬✥🔰🇱🇰 ❱
╰──────────────`,quoted: message.data})

    }));
    Trex.addrex({pattern: 'xdyuzm,xu', fromMe: false,  deleteCommand: true }, (async (message, match) => {


            var image = await axios.get ('https://telegra.ph/file/2b5b8437d28720d6f2d79.jpg', {responseType: 'arraybuffer'})
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: `╭───────────────
│  🔰 SOFTWARE STORE BY ACHI BRO LK 🔰
│
│  
│  
│  
│  
│   
│
│         🔰POWERD BY🔰
│      ❰ 🇱🇰🔰✥▬ALPHA▬✥🔰🇱🇰 ❱
╰──────────────`,quoted: message.data})

    }));


  // MENS TYPE
  Trex.addrex({pattern: 'dumdu', fromMe: false,  deleteCommand: true }, (async (message, match) => {


            var image = await axios.get ('https://telegra.ph/file/b260087f89c4f5cfd5bdd.jpg', {responseType: 'arraybuffer'})
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: `╭───────────────
│  🔰 SOFTWARE STORE BY ACHI BRO LK 🔰
│
│  
│  
│  
│  
│   
│
│         🔰POWERD BY🔰
│      ❰ 🇱🇰🔰✥▬ALPHA▬✥🔰🇱🇰 ❱
╰──────────────`,quoted: message.data})

    }));

}
