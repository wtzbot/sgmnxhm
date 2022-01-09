const Trex = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');

if (Config.WORKTYPE == 'private') {

    Trex.addrex({pattern: 'softstore', fromMe: true,  deleteCommand: true }, (async (message, match) => {

            var image = await axios.get ('https://telegra.ph/file/24429ad5b37c11525894e.jpg', {responseType: 'arraybuffer'})

        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: `╭───────────────
│  🔰 SOFTWARE STORE BY ACHI BRO LK 🔰
│
│  ◎Adobe Editing Softwares type =.adobe
│  ◎Wondershare Softwares type =.ws
│  ◎Operating System type =.os 
│  ◎Antivirus Softwares type =.vs
│  ◎Office Softwares type =.office   
│  ◎Android Emulator Form Pc =.em
│
│         🔰POWERD BY🔰
│      ❰ 🇱🇰🔰✥▬ALPHA▬✥🔰🇱🇰 ❱
╰──────────────`,quoted: message.data})

    }));


    Trex.addrex({pattern: 'adobe', fromMe: true,  deleteCommand: true }, (async (message, match) => {


            var image = await axios.get ('https://telegra.ph/file/4fb6db2465bed4af3eb51.jpg', {responseType: 'arraybuffer'})

        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: `╭───────────────
│  🔰 SOFTWARE STORE BY ACHI BRO LK 🔰
│    adobe editing softwares
│    
│  ◎Adobe Photoshop =.aps
│  ◎Adobe Primere pro =.apr
│  ◎Adobe After effect =.aaf
│  ◎Adobe Ligthroom =.alm
│   
│
│         🔰POWERD BY🔰
│      ❰ 🇱🇰🔰✥▬ALPHA▬✥🔰🇱🇰 ❱
╰──────────────`,quoted: message.data})



    }));

  Trex.addrex({pattern: 'os', fromMe: true,  deleteCommand: true }, (async (message, match) => {


            var image = await axios.get ('https://telegra.ph/file/4b7a5d02fba1b2e147f41.jpg', {responseType: 'arraybuffer'})
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: `╭───────────────
│  🔰 SOFTWARE STORE BY ACHI BRO LK 🔰
│         Operating System
│
│  ◎Windwos 7 =.win7
│  ◎Windwos 8.1 =.win8
│  ◎Windwos 10 pro =.win10
│  ◎Windwso 11 pro =.win11
│
│         🔰POWERD BY🔰
│      ❰ 🇱🇰🔰✥▬ALPHA▬✥🔰🇱🇰 ❱
╰──────────────`,quoted: message.data})

  }));

  Trex.addrex({pattern: 'em', fromMe: true,  deleteCommand: true }, (async (message, match) => {


            var image = await axios.get ('https://telegra.ph/file/a02ee0ef6954375e88b0c.jpg', {responseType: 'arraybuffer'})
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: `╭───────────────
│  🔰 SOFTWARE STORE BY ACHI BRO LK 🔰
│       Android Emulator From Pc
│  
│   ◎Blustaucks 5 =.bl
│   ◎Nox player =.nx
│   ◎Memu player =.mm
│   
│         🔰POWERD BY🔰
│      ❰ 🇱🇰🔰✥▬ALPHA▬✥🔰🇱🇰 ❱
╰──────────────`,quoted: message.data})

    }));

  Trex.addrex({pattern: 'ws', fromMe: true,  deleteCommand: true }, (async (message, match) => {


            var image = await axios.get ('https://telegra.ph/file/011d37f1cef06440daf7a.jpg', {responseType: 'arraybuffer'})
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: `╭───────────────
│  🔰 SOFTWARE STORE BY ACHI BRO LK 🔰
│      Wondershare Softwares 
│  
│  ◎Filmora 7.8.9 =.f9
│  ◎Filmora 10.1.20 =.f20
│  ◎Filmora 10.5.10 =.f10
│  ◎Filmora 10.7.8.12 =.f12
│
│         🔰POWERD BY🔰
│      ❰ 🇱🇰🔰✥▬ALPHA▬✥🔰🇱🇰 ❱
╰──────────────`,quoted: message.data})

    }));
    Trex.addrex({pattern: 'vs', fromMe: true,  deleteCommand: true }, (async (message, match) => {


            var image = await axios.get ('https://telegra.ph/file/44f514afcbb5953196b92.jpg', {responseType: 'arraybuffer'})
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: `╭───────────────
│  🔰 SOFTWARE STORE BY ACHI BRO LK 🔰
│        Antivirus Softwares
│  ◎Avira Antivirus Pro 15.0.29 =.aa
│  ◎IObit Advanced SystemCare Pro 12.4.0 =.as1
│  ◎Avast Internet Security 2019 =.is1
│  ◎Avast Premium Security 20.10.5824 =.is2 
│  ◎Advanced SystemCare Ultimate 13.5.0.173 =.as2
│
│         🔰POWERD BY🔰
│      ❰ 🇱🇰🔰✥▬ALPHA▬✥🔰🇱🇰 ❱
╰──────────────`,quoted: message.data})

    }));


  // MENS TYPE
  Trex.addrex({pattern: '.office', fromMe: true,  deleteCommand: true }, (async (message, match) => {


            var image = await axios.get ('https://telegra.ph/file/94452d1a294dcac3fe70b.jpg', {responseType: 'arraybuffer'})
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: `╭───────────────
│  🔰 SOFTWARE STORE BY ACHI BRO LK 🔰
│       Office Softwares
│
│  ◎MS Office 2016 Pro Plus (32 bit) =.ms32
│  ◎MS Office 2016 Pro Plus (64 bit) =.ms64
│  ◎MS Office 2019 Pro Plus (62 bit) =.ms2019
│  ◎MS Office 2021 Pro Plus (64 bit) =.ms2021
│  ◎WPS office Setup 11.2.0.9148 =.wps
│  ◎OfficeSuite 2.40 =.offices
│
│         🔰POWERD BY🔰
│      ❰ 🇱🇰🔰✥▬ALPHA▬✥🔰🇱🇰 ❱
╰──────────────`,quoted: message.data})

    }));

}
