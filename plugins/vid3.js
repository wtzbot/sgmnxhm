/* Copyright (C) 2021 TENUX-Neotro.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
NEOTROX - TEENUHX
*/

const amazone = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const { errorMessage, infoMessage } = require('../helpers');
const Config = require('../config');
const YTV_DESC = "Youtube Video Downloader"
const YT_NEED = "*need word!.*"
const DWLOAD_VID = Config.VD
const YTV_UP = Config.VU
const NO_RESULT = "*can't Find Anything... 😢*"



    amazone.addrex({ pattern: 'mp4 ?(.*)', fromMe: false, desc: 'hj',  deleteCommand: false}, async (message, match) => {

        const link = match[1]
    
        if (!link) return await message.client.sendMessage(message.jid,YT_NEED,MessageType.text)
        await message.client.sendMessage(message.jid,DWLOAD_VID,MessageType.text);
        await axios
          .get(`https://api.zeks.me/api/ytplaymp4?apikey=hiruwahiruwa&q=${link}`)
          .then(async (response) => {
            const {
              url_video,source,size,title,
            } = response.data.result
    
            const videoBuffer = await axios.get(url_video, {responseType: 'arraybuffer'})
    
            await message.client.sendMessage(message.jid,YTV_UP,MessageType.text);
            await message.client.sendMessage(message.jid,Buffer.from(videoBuffer.data), MessageType.video, {mimetype: Mimetype.mp4, ptt: false, caption:title + '❰ 🇱🇰🔰✥▬ALPHA▬✥🔰🇱🇰 ❱ \n\nSize: ' + size + 'Video Link: ' + source + 'Download Link: ' + url_video})
        })
        .catch(
          async (err) => await message.client.sendMessage(message.jid,NO_RESULT,MessageType.text, {quoted: message.data}),
        )
      },
    )
