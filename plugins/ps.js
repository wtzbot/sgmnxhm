const Trex = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');

if (Config.WORKTYPE == 'public') {

    Trex.addrex({pattern: '.ps', fromMe: false,  deleteCommand: true }, (async (message, match) => {
            
            var image = await axios.get ('https://telegra.ph/file/356c867018dcc23ad22f9.png', {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: `
╭───────────────
│  🔰 SOFTWARE STORE BY ACHI BRO LK 🔰
│
│   Adobe Photoshop CC full + Patch
│
│ 🔰Photoshop CC 2017 type .ps2017
│ 🔰Photoshop CC 2018 type .ps2018
│ 🔰Photoshop CC 2019 type .ps2019
│ 🔰Photoshop CC 2020 type .ps2020
│ 🔰Photoshop CC 2021 type .ps2021
│ 🔰Photoshop CC 2022 type .ps2022
│ 
│         🔰POWERD BY🔰
│      ❰ 🇱🇰🔰✥▬ALPHA▬✥🔰🇱🇰 ❱
╰──────────────`,quoted: message.data})

    }));
  

    Trex.addrex({pattern: 'ps2017', fromMe: false,  deleteCommand: true }, (async (message, match) => {

          
            var image = await axios.get ('https://telegra.ph/file/356c867018dcc23ad22f9.png', {responseType: 'arraybuffer'})
            
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: `
╭───────────────
│  🔰 SOFTWARE STORE BY ACHI BRO LK 🔰
│
│   🔰Adobe Photoshop CC 2017 (32 bit & 64 bit) full + Patch
│
│ ⚠️Minimum and recommended system requirements for Photoshop⚠️
│ 🔰Processor 👉ARMprocessor
│ 🔰Operating system 👉Windows 10 ARM device running Windows 10 64-bit (version 1909) or later
│ 🔰RAM 👉8 GB	
│ 🔰Graphics card👉 4 GB of GPU memory 
│ 🛑All the other aspects for ARM are the same as Intel🛑
│    
│ Download Link ➡️ 64bit https://www.mediafire.com/file/j07fu0jmd7kousy/PS.CC.2017.18.1(ask4pc)x64.rar/file      
│                  32bit http://www.mediafire.com/file/q5qv8b16enwlhuu/PS.CC.2017.18.1+(ask4pc)x32.rar/file
│
│         🔰POWERD BY🔰
│      ❰ 🇱🇰🔰✥▬ALPHA▬✥🔰🇱🇰 ❱
╰──────────────`,quoted: message.data})
        
        

    }));
    
  Trex.addrex({pattern: 'ps2018', fromMe: false,  deleteCommand: true }, (async (message, match) => {

          
            var image = await axios.get ('https://telegra.ph/file/356c867018dcc23ad22f9.png', {responseType: 'arraybuffer'})
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: `
╭───────────────
│  🔰 SOFTWARE STORE BY ACHI BRO LK 🔰
│
│   🔰Adobe Photoshop CC 2018 (64 bit) Full + Patch
│
│ ⚠️Minimum and recommended system requirements for Photoshop⚠️
│ 🔰Processor 👉ARMprocessor
│ 🔰Operating system 👉Windows 10 ARM device running Windows 10 64-bit (version 1909) or later
│ 🔰RAM 👉8 GB	
│ 🔰Graphics card👉 4 GB of GPU memory 
│ 🛑All the other aspects for ARM are the same as Intel🛑
│    
│ Download Link ➡️ 64bit https://www.mediafire.com/file/uphzmod3tsfqe4a/A.PS.2018.19.1.ask4pc.rar/file      
│                
│
│         🔰POWERD BY🔰
│      ❰ 🇱🇰🔰✥▬ALPHA▬✥🔰🇱🇰 ❱
╰──────────────`,quoted: message.data})

  }));
    
  Trex.addrex({pattern: 'pc2019', fromMe: false,  deleteCommand: true }, (async (message, match) => {

          
            var image = await axios.get ('https://telegra.ph/file/356c867018dcc23ad22f9.png', {responseType: 'arraybuffer'})
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: `
╭───────────────
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
  
  Trex.addrex({pattern: 'ps2020', fromMe: false,  deleteCommand: true }, (async (message, match) => {

          
            var image = await axios.get ('https://telegra.ph/file/356c867018dcc23ad22f9.png', {responseType: 'arraybuffer'})
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: `
╭───────────────
│  🔰 SOFTWARE STORE BY ACHI BRO LK 🔰
│
│   🔰Adobe Photoshop CC 2020(64 bit) preactivated 
│
│ ⚠️Minimum and recommended system requirements for Photoshop⚠️
│ 🔰Processor 👉ARMprocessor
│ 🔰Operating system 👉Windows 10 ARM device running Windows 10 64-bit (version 1909) or later
│ 🔰RAM 👉8 GB	
│ 🔰Graphics card👉 4 GB of GPU memory 
│ 🛑All the other aspects for ARM are the same as Intel🛑
│    
│ Download Link ➡️ 64bit https://www.mediafire.com/file/e9on8nkw83wj7nh/PS2020.21.0.3.%2528ask4pc%2529.rar/file      
│                  
│
│         🔰POWERD BY🔰
│      ❰ 🇱🇰🔰✥▬ALPHA▬✥🔰🇱🇰 ❱
╰──────────────`,quoted: message.data})

    }));
    Trex.addrex({pattern: 'ps2021', fromMe: false,  deleteCommand: true }, (async (message, match) => {

          
            var image = await axios.get ('https://telegra.ph/file/356c867018dcc23ad22f9.png', {responseType: 'arraybuffer'})
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: `
╭───────────────
│  🔰 SOFTWARE STORE BY ACHI BRO LK 🔰
│
│   🔰Adobe Photoshop CC 2021  (64 bit) offline Setup + Solution
│
│ ⚠️Minimum and recommended system requirements for Photoshop⚠️
│ 🔰Processor 👉ARMprocessor
│ 🔰Operating system 👉Windows 10 ARM device running Windows 10 64-bit (version 1909) or later
│ 🔰RAM 👉8 GB	
│ 🔰Graphics card👉 4 GB of GPU memory 
│ 🛑All the other aspects for ARM are the same as Intel🛑
│    
│ Download Link ➡️ 64bit https://www.mediafire.com/file/zt1lld2sf8pdwsz/PS2021.22.5.1.(ask4pc).rar/file      
│                  
│
│         🔰POWERD BY🔰
│      ❰ 🇱🇰🔰✥▬ALPHA▬✥🔰🇱🇰 ❱
╰──────────────`,quoted: message.data})

    }));
  
  
  // MENS TYPE
  Trex.addrex({pattern: '2022', fromMe: false,  deleteCommand: true }, (async (message, match) => {

          
            var image = await axios.get ('https://telegra.ph/file/356c867018dcc23ad22f9.png', {responseType: 'arraybuffer'})
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: `
╭───────────────
│  🔰 SOFTWARE STORE BY ACHI BRO LK 🔰
│
│   🔰Adobe Photoshop CC 2022  (64 bit)  Preactivated
│
│ ⚠️Minimum and recommended system requirements for Photoshop⚠️
│ 🔰Processor 👉ARMprocessor
│ 🔰Operating system 👉Windows 10 ARM device running Windows 10 64-bit (version 1909) or later
│ 🔰RAM 👉8 GB	
│ 🔰Graphics card👉 4 GB of GPU memory 
│ 🛑All the other aspects for ARM are the same as Intel🛑
│    
│ Download Link ➡️ 64bit https://www.mediafire.com/file/xbcd9r3oibg5dp0/PS2022.23.1.0.(ask4pc).rar/file      
│                  
│
│         🔰POWERD BY🔰
│      ❰ 🇱🇰🔰✥▬ALPHA▬✥🔰🇱🇰 ❱
╰──────────────`,quoted: message.data})

    }));
 
}
