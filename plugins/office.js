const Trex = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');

if (Config.WORKTYPE == 'public') {

    Trex.addrex({pattern: 'office', fromMe: false,  deleteCommand: true }, (async (message, match) => {

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
